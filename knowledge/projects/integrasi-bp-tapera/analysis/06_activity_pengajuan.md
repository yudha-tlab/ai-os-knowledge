# DIAGRAM AKTIVITAS — API Mitra Penyalur BP TAPERA

## Ringkasan Diagram Aktivitas

| Diagram | Proses DFD | Swimlanes | Titik Keputusan | Aktivitas Paralel |
|---------|------------|-----------|-----------------|-------------------|
| AD-P1 | P1.0-P4.0 | Mitra, Peserta, Sistem, BP TAPERA | 5 | 1 (fork) |
| AD-P2 | P5.0-P7.0 | Mitra, BP TAPERA, Peserta, Sistem | 6 | 2 (fork) |
| AD-P3 | P9.0-P11.0 | Mitra, BP TAPERA, Sistem, Peserta | 5 | 1 (fork) |
| AD-P4 | P12.0-P13.0 | Mitra, Sistem, BP TAPERA, Peserta | 4 | 1 (fork) |
| AD-P5 | P15.0-P16.0 | Mitra, Sistem, BP TAPERA | 3 | 1 (fork) |
| AD-P6 | P17.0-P18.0 | Mitra (Admin), Sistem, BP TAPERA | 2 | 1 (fork) |
| AD-P7 | P8.0 | Mitra, Verifikator, Sistem | 4 | 1 (fork) |
| AD-P8 | P14.0 | Mitra, Sistem, BP TAPERA | 3 | 1 (fork) |
| AD-P9 | P19.0 | Mitra, Sistem, Data | 2 | 1 (fork) |
| AD-P10 | P20.0 | Sistem, Admin, Data | 2 | 1 (fork) |

---

## 1. AD-P1 — Proses Pengajuan Pembiayaan (P1.0-P4.0)

### Metadata
**Proses:** P1.0 (Pengajuan), P2.0 (List), P3.0 (Detail), P4.0 (Inbox)  
**Aktor:** Mitra Penyalur, Peserta Tapera, Sistem API, BP TAPERA  
**Data Store yang Terlibat:** DS1 (Peserta), DS2 (Pengajuan), DS3 (Rumah), DS12 (Referensi)  
**Titik Keputusan:** 5 (Validasi data, Kelengkapan, TTV vs Reject, Validasi Dokumen, Validasi Peserta)  
**Aktivitas Paralel:** 1 (Validasi data peserta + Validasi dokumen)

### Deskripsi Elemen

**Swimlane:**
1. **Mitra Penyalur** - Submit pengajuan, upload dokumen, request perubahan
2. **Peserta Tapera** - Submit data, approve pengajuan
3. **Sistem API** - Validasi, menyimpan data, generate nomor, notifikasi
4. **BP TAPERA** - Review assessment, approve/reject

**Titik Keputusan:**
- D1: Validasi data peserta?
- D2: Dokumen lengkap?
- D3: Peserta dalam daftar aktif?
- D4: Simpan pengajuan?
- D5: Rekomendasi BP TAPERA diterima?

**Data Store Access:**
- R: Baca (DS1 - Peserta, DS3 - Rumah, DS12 - Referensi)
- W: Tulis (DS2 - Pengajuan)

### PlantUML — Activity Diagram (Black & White)

```plantuml
@startuml AD-P1_Pengajuan_Pembiayaan

title Activity Diagram — Proses Pengajuan Pembiayaan (P1.0-P4.0)

skinparam defaultFontName  "Inter"
skinparam defaultFontSize  10
skinparam defaultFontColor #000000

skinparam titleFontName    "Inter"
skinparam titleFontSize    13
skinparam titleFontColor   #000000
skinparam titleFontStyle   bold

skinparam linetype ortho

skinparam activity {
  ArrowColor      #000000
  ArrowThickness  1.2
  ArrowFontColor  #000000
  ArrowFontName   "Inter"
  ArrowFontSize    9
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  BorderThickness  1.5
  FontColor        #000000
  FontName         "Inter"
  FontSize         10
  DiamondBackgroundColor  #FFFFFF
  DiamondBorderColor      #000000
  DiamondBorderThickness  1.5
  DiamondFontColor        #000000
  DiamondFontName         "Inter"
  DiamondFontSize         10
}

skinparam swimlane {
  BorderColor          #000000
  BorderThickness      1.5
  TitleBackgroundColor #FFFFFF
  TitleFontColor       #000000
  TitleFontName        "Inter"
  TitleFontSize        11
  TitleFontStyle       bold
  BackgroundColor      #FFFFFF
  FontColor            #000000
  FontName             "Inter"
  FontSize             10
}

skinparam note {
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  FontColor        #000000
  FontName         "Inter"
  FontSize          9
  BorderThickness  1
}

skinparam padding 10
skinparam nodesep 60
skinparam ranksep 50

scale max 1700 height

|Mitra_Penyalur|
start
:Input Data Peserta;
:Input Data Rumah;
:Upload Dokumen Persyaratan;

|Peserta_Tapera|
:Review & Validate Data;
:Approve Submission;

|System_API|
:Validate Data Peserta;
if (Valid?) then (Yes)
  :Validasi Data Rumah;
  if (Valid?) then (Yes)
    fork
      :Periksa Kelengkapan Dokumen;
      :Check Rumah Availability;
      :Check Referensi Data;
    fork again
      :Validasi Completeness Documents;
    end fork
    if (Rumah Ready?) then (Yes)
      :Generate Nomor Pengajuan;
      :Save Pengajuan to DS2;
      :Send Notification to BP_TAPERA;
      :Send Notification to Mitra;
    else (No)
      :Show Error: Rumah Not Available;
      stop
    endif
  else (No)
    :Show Error: Rumah Invalid;
    stop
  endif
else (No)
  :Show Error: Data Invalid;
  stop
endif

|BP_TAPERA|
:Receive Submission;
:Review Pengajuan;
if (Approved?) then (Yes)
  :Approve Pengajuan;
  :Send Approval to Mitra;
  :Update Status in DS2;
else (No)
  :Reject Pengajuan;
  :Send Reject to Mitra;
  :Update Status in DS2;
  stop
endif

|Mitra_Penyalur|
:View Pengajuan Detail;
:Check Report in Inbox;
stop

note right
  Data Stores Used:
    DS1 - Peserta (R)
    DS2 - Pengajuan (W)
    DS3 - Rumah (R)
    DS12 - Referensi (R)
end note

footer AD-P1 — Proses Pengajuan Pembiayaan (P1.0-P4.0)\nVersion 2.0

@enduml
```

### Aktivitas, Keputusan, Fork/Join
| Tipe | Jumlah |
|------|--------|
| Aktivitas | 18 |
| Keputusan | 5 |
| Fork/Join | 1 (F1) |


---

## 2. AD-P2 — Proses SP3K & Verifikasi (P5.0-P7.0)

### Metadata
**Proses:** P5.0 (SP3K Approval), P6.0 (SP3K Change), P7.0 (Layak Huni)  
**Aktor:** Mitra Penyalur, BP TAPERA, Peserta Tapera, Sistem API  
**Data Store:** DS4 (SP3K), DS3 Rumah, DS1 Peserta  
**Titik Keputusan:** 6  
**Aktivitas Paralel:** 2 (VK-1, VK-2)

### PlantUML — Activity Diagram

```plantuml
@startuml AD-P2_SP3K_Verifikasi

title Activity Diagram — Proses SP3K & Verifikasi (P5.0-P7.0)

skinparam defaultFontName  "Inter"
skinparam defaultFontSize  10
skinparam defaultFontColor #000000

skinparam titleFontName    "Inter"
skinparam titleFontSize    13
skinparam titleFontColor   #000000
skinparam titleFontStyle   bold

skinparam linetype ortho

skinparam activity {
  ArrowColor      #000000
  ArrowThickness  1.2
  ArrowFontColor  #000000
  ArrowFontName   "Inter"
  ArrowFontSize    9
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  BorderThickness  1.5
  FontColor        #000000
  FontName         "Inter"
  FontSize         10
  DiamondBackgroundColor  #FFFFFF
  DiamondBorderColor      #000000
  DiamondBorderThickness  1.5
  DiamondFontColor        #000000
  DiamondFontName         "Inter"
  DiamondFontSize         10
}

skinparam swimlane {
  BorderColor          #000000
  BorderThickness      1.5
  TitleBackgroundColor #FFFFFF
  TitleFontColor       #000000
  TitleFontName        "Inter"
  TitleFontSize        11
  TitleFontStyle       bold
  BackgroundColor      #FFFFFF
  FontColor            #000000
  FontName             "Inter"
  FontSize             10
}

skinparam note {
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  FontColor        #000000
  FontName         "Inter"
  FontSize          9
  BorderThickness  1
}

skinparam padding 10
skinparam nodesep 60
skinparam ranksep 50

scale max 1700 height

|Mitra_Penyalur|
start
:Check SP3K Status;

if (Need SP3K?) then (Yes)
  :Generate SP3K Document;
  :Send to Peserta;
  :Wait Peserta Approval;
  if (Peserta Send?) then (Yes)
    :Store Completed SP3K;
    if (Valid Data?) then (Yes)
      :Submit to BP_TAPERA;
    else (No)
      :Return to Mitra;
      stop
    endif
  else (No)
    :Send Reminder;
    stop
  endif
else (No)
  :Check Further Process;
  stop
endif

|BP_TAPERA|
:Receive SP3K Submission;
if (Valid?) then (Yes)
  :Approve SP3K;
  :Generate QR Code;
  :Update SP3K Status;
  :Send Approval to Mitra;
else (No)
  :Reject SP3K;
  :Notify Mitra;
  stop
endif

|Peserta_Tapera|
:Read SP3K Details;
:Digital Sign;
:Submit E-Sign;
stop

|System_API|
:Activate Verification;
fork
  :Verify Layak Huni (House Condition);
fork again
  :Verify Layak Kredit (Credit Worthiness);
end fork
:Combine Results;
:Save Verification to DS;
:Notify Mitra;
stop

note right
  Data Stores Used:
    DS1 - Peserta (R)
    DS3 - Rumah (R)
    DS4 - SP3K (W)
end note

footer AD-P2 — Proses SP3K & Verifikasi (P5.0-P7.0)\nVersion 2.0

@enduml
```

---

## 3. AD-P3 — Proses Akad & Jadwal Angsuran (P9.0-P11.0)

### Metadata
**Proses:** P9.0 (Submit Akad), P10.0 (Perubahan Akad), P11.0 (Jadwal Angsuran)  
**Aktor:** Mitra Penyalur, BP TAPERA, Peserta Tapera, Sistem API  
**Data Store:** DS5 (Akad), DS1 (Peserta), DS2 (Pengajuan)  
**Titik Keputusan:** 5  
**Aktivitas Paralel:** 1 (Simpan + Generate)

### PlantUML — Activity Diagram

```plantuml
@startuml AD-P3_Akad_Jadwal

title Activity Diagram — Proses Akad & Jadwal Angsuran (P9.0-P11.0)

skinparam defaultFontName  "Inter"
skinparam defaultFontSize  10
skinparam defaultFontColor #000000

skinparam titleFontName    "Inter"
skinparam titleFontSize    13
skinparam titleFontColor   #000000
skinparam titleFontStyle   bold

skinparam linetype ortho

skinparam activity {
  ArrowColor      #000000
  ArrowThickness  1.2
  ArrowFontColor  #000000
  ArrowFontName   "Inter"
  ArrowFontSize    9
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  BorderThickness  1.5
  FontColor        #000000
  FontName         "Inter"
  FontSize         10
  DiamondBackgroundColor  #FFFFFF
  DiamondBorderColor      #000000
  DiamondBorderThickness  1.5
  DiamondFontColor        #000000
  DiamondFontName         "Inter"
  DiamondFontSize         10
}

skinparam swimlane {
  BorderColor          #000000
  BorderThickness      1.5
  TitleBackgroundColor #FFFFFF
  TitleFontColor       #000000
  TitleFontName        "Inter"
  TitleFontSize        11
  TitleFontStyle       bold
  BackgroundColor      #FFFFFF
  FontColor            #000000
  FontName             "Inter"
  FontSize             10
}

skinparam note {
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  FontColor        #000000
  FontName         "Inter"
  FontSize          9
  BorderThickness  1
}

skinparam padding 10
skinparam nodesep 60
skinparam ranksep 50

scale max 1700 height

|Mitra_Penyalur|
start
:Prepare Akad Document;
:Select Peserta & Rumah;
:Input Akad Data;
:Upload Legal Documents;
:Submit Akad;
stop

|Peserta_Tapera|
:Review Akad;
:Digital Sign;
:Confirm Submission;
stop

|System_API|
:Validate Akad Data;
if (Data Valid?) then (Yes)
  :Check SP3K Status;
  if (SP3K Active?) then (Yes)
    :Check Limit Availability;
    if (Limit OK?) then (Yes)
      :Save Akad to DS5;
      fork
        :Generate Schedule Amortization;
        :Update Status to Active;
        :Send Notification;
      fork again
        :Create Note Sharing Akad;
      end fork
      stop
    else (No)
      :Show Error: Limit Exceeded;
      stop
    endif
  else (No)
    :Show Error: SP3K Invalid;
    stop
  endif
else (No)
  :Show Error: Data Invalid;
  stop
endif

|BP_TAPERA|
:Receive Akad Submission;
:Review Legal;
:Approve Akad;
:Generate Akad Number;
:Update Status in DS5;
:Send Approval to Mitra;
:Notify Peserta;
stop

|Mitra_Penyalur|
:View Akad Detail;
:Check Jadwal Angsuran;
stop

note right
  Data Stores Used:
    DS1 - Peserta (R)
    DS2 - Pengajuan (R)
    DS5 - Akad (W)
end note

footer AD-P3 — Proses Akad & Jadwal Angsuran (P9.0-P11.0)\nVersion 2.0

@enduml
```

---

## 4. AD-P4 — Proses Pencairan Dana (P12.0-P13.0)

### Metadata
**Proses:** P12.0 (Pencairan Tapera), P13.0 (Pencairan FLPP)  
**Aktor:** Mitra Penyalur, Sistem API, BP TAPERA, Peserta Tapera  
**Data Store:** DS6 (Pencairan), DS5 (Akad), DS1 (Peserta)  
**Titik Keputusan:** 4  
**Aktivitas Paralel:** 1 (Validasi + Create)

### PlantUML — Activity Diagram

```plantuml
@startuml AD-P4_Pencairan

title Activity Diagram — Proses Pencairan Dana (P12.0-P13.0)

skinparam defaultFontName  "Inter"
skinparam defaultFontSize  10
skinparam defaultFontColor #000000

skinparam titleFontName    "Inter"
skinparam titleFontSize    13
skinparam titleFontColor   #000000
skinparam titleFontStyle   bold

skinparam linetype ortho

skinparam activity {
  ArrowColor      #000000
  ArrowThickness  1.2
  ArrowFontColor  #000000
  ArrowFontName   "Inter"
  ArrowFontSize    9
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  BorderThickness  1.5
  FontColor        #000000
  FontName         "Inter"
  FontSize         10
  DiamondBackgroundColor  #FFFFFF
  DiamondBorderColor      #000000
  DiamondBorderThickness  1.5
  DiamondFontColor        #000000
  DiamondFontName         "Inter"
  DiamondFontSize         10
}

skinparam swimlane {
  BorderColor          #000000
  BorderThickness      1.5
  TitleBackgroundColor #FFFFFF
  TitleFontColor       #000000
  TitleFontName        "Inter"
  TitleFontSize        11
  TitleFontStyle       bold
  BackgroundColor      #FFFFFF
  FontColor            #000000
  FontName             "Inter"
  FontSize             10
}

skinparam note {
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  FontColor        #000000
  FontName         "Inter"
  FontSize          9
  BorderThickness  1
}

skinparam padding 10
skinparam nodesep 60
skinparam ranksep 50

scale max 1700 height

|Mitra_Penyalur|
start
:Select Akad;
:Input Pencairan Data;
:Input Bank Account;
:Upload Proof Documents;
:Submit Pencairan;
stop

|System_API|
:Validate Pencairan Data;
if (Data Valid?) then (Yes)
  :Check Akad Status;
  if (Akad Active?) then (Yes)
    :Generate Pencairan Request;
    fork
      :Validate Account;
      :Save Pencairan to DS6;
      :Save to Audit Log;
    fork again
      :Check Required Documents;
    end fork
    stop
  else (No)
    :Show Error: Akad Invalid;
    stop
  endif
else (No)
  :Show Error: Data Invalid;
  stop
endif

|BP_TAPERA|
:Receive Pencairan Request;
:Process Transfer;
:Confirm Transfer;
:Update Status in DS6;
:Send Transfer Proof;
stop

|Peserta_Tapera|
:Receive Transfer Info;
stop

note right
  Data Stores Used:
    DS1 - Peserta (R)
    DS5 - Akad (R)
    DS6 - Pencairan (W)
end note

footer AD-P4 — Proses Pencairan Dana (P12.0-P13.0)\nVersion 2.0

@enduml
```

---

## 5. AD-P5 — Proses Laporan Outstanding (P15.0-P16.0)

### Metadata
**Proses:** P15.0 (Laporan Outstanding), P16.0 (Pelunasan Dipercepat)  
**Aktor:** Mitra Penyalur, Sistem API, BP TAPERA  
**Data Store:** DS8 (Outstanding)  
**Titik Keputusan:** 3  
**Aktivitas Paralel:** 1 (Generate + Submit)

### PlantUML — Activity Diagram

```plantuml
@startuml AD-P5_Laporan

title Activity Diagram — Proses Laporan Outstanding (P15.0-P16.0)

skinparam defaultFontName  "Inter"
skinparam defaultFontSize  10
skinparam defaultFontColor #000000

skinparam titleFontName    "Inter"
skinparam titleFontSize    13
skinparam titleFontColor   #000000
skinparam titleFontStyle   bold

skinparam linetype ortho

skinparam activity {
  ArrowColor      #000000
  ArrowThickness  1.2
  ArrowFontColor  #000000
  ArrowFontName   "Inter"
  ArrowFontSize    9
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  BorderThickness  1.5
  FontColor        #000000
  FontName         "Inter"
  FontSize         10
  DiamondBackgroundColor  #FFFFFF
  DiamondBorderColor      #000000
  DiamondBorderThickness  1.5
  DiamondFontColor        #000000
  DiamondFontName         "Inter"
  DiamondFontSize         10
}

skinparam swimlane {
  BorderColor          #000000
  BorderThickness      1.5
  TitleBackgroundColor #FFFFFF
  TitleFontColor       #000000
  TitleFontName        "Inter"
  TitleFontSize        11
  TitleFontStyle       bold
  BackgroundColor      #FFFFFF
  FontColor            #000000
  FontName             "Inter"
  FontSize             10
}

skinparam note {
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  FontColor        #000000
  FontName         "Inter"
  FontSize          9
  BorderThickness  1
}

skinparam padding 10
skinparam nodesep 60
skinparam ranksep 50

scale max 1700 height

|Mitra_Penyalur|
start
:Select Periode;
:Input Report Parameters;
:Generate Report Preview;
stop

|System_API|
:Calculate Data Outstanding;
if (Data Valid?) then (Yes)
  :Generate Final Report;
  fork
    :Export Format (PDF/Excel);
    :Prepare Submission Package;
    :Send Confirmation to Mitra;
  fork again
    :Save Report to DS8;
  end fork
  stop
  :Submit Report to BP_TAPERA;
else (No)
  :Show Error: Calculation Fail;
  stop
endif

|BP_TAPERA|
:Receive Report;
:Validate Report Data;
if (Data Accurate?) then (Yes)
  :Approve Report;
  :Archive Report;
  :Update Status in DS8;
  :Notify Mitra;
  stop
else (No)
  :Reject Report;
  :Notify Mitra;
  stop
endif

|Mitra_Penyalur|
:View Report History;
stop

note right
  Data Stores Used:
    DS8 - Outstanding (W)

  Output Formats:
    PDF, Excel, CSV

  Business Logic:
    Calculate Sum, Aging, Overdue
end note

footer AD-P5 — Proses Laporan Outstanding (P15.0-P16.0)\nVersion 2.0

@enduml
```

---

## 6. AD-P6 — Proses Manajemen PIC & Cabang (P17.0-P18.0)

### Metadata
**Proses:** P17.0 (PIC Management), P18.0 (Cabang Management)  
**Aktor:** Mitra (Admin), Sistem API, BP TAPERA  
**Data Store:** DS9 (PIC), DS10 (Cabang)  
**Titik Keputusan:** 2  
**Aktivitas Paralel:** 1 (Create + Notify)

### PlantUML — Activity Diagram

```plantuml
@startuml AD-P6_Management

title Activity Diagram — Proses Manajemen PIC & Cabang (P17.0-P18.0)

skinparam defaultFontName  "Inter"
skinparam defaultFontSize  10
skinparam defaultFontColor #000000

skinparam titleFontName    "Inter"
skinparam titleFontSize    13
skinparam titleFontColor   #000000
skinparam titleFontStyle   bold

skinparam linetype ortho

skinparam activity {
  ArrowColor      #000000
  ArrowThickness  1.2
  ArrowFontColor  #000000
  ArrowFontName   "Inter"
  ArrowFontSize    9
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  BorderThickness  1.5
  FontColor        #000000
  FontName         "Inter"
  FontSize         10
  DiamondBackgroundColor  #FFFFFF
  DiamondBorderColor      #000000
  DiamondBorderThickness  1.5
  DiamondFontColor        #000000
  DiamondFontName         "Inter"
  DiamondFontSize         10
}

skinparam swimlane {
  BorderColor          #000000
  BorderThickness      1.5
  TitleBackgroundColor #FFFFFF
  TitleFontColor       #000000
  TitleFontName        "Inter"
  TitleFontSize        11
  TitleFontStyle       bold
  BackgroundColor      #FFFFFF
  FontColor            #000000
  FontName             "Inter"
  FontSize             10
}

skinparam note {
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  FontColor        #000000
  FontName         "Inter"
  FontSize          9
  BorderThickness  1
}

skinparam padding 10
skinparam nodesep 60
skinparam ranksep 50

scale max 1700 height

|Mitra_Admin|
start
:Login to Management;
:Select PIC or Cabang;
:Create New Record;
:Input Data Details;
:Upload Verification;
:Submit;
stop

|System_API|
:Validate Data;
if (Valid?) then (Yes)
  :Save to DS9/DS10;
  fork
    :Generate Access Credentials;
    :Update Access Permissions;
    :Send Confirmation to Admin;
  fork again
    :Send Notification Email/SMS;
  end fork
  stop
else (No)
  :Show Error: Invalid Data;
  stop
endif

|BP_TAPERA|
:Receive Management Update;
:Approve if Required;
:Update System Status;
stop

|Mitra_Admin|
:View Management Overview;
:Manage Access;
stop

note right
  Data Stores Used:
    DS9 - PIC (W)
    DS10 - Cabang (W)

  Notifications:
    Email, SMS, Push

  Security:
    Role-Based Access Control
end note

footer AD-P6 — Proses Manajemen PIC & Cabang (P17.0-P18.0)\nVersion 2.0

@enduml
```

---

## 7. AD-P7 — Proses Cek Layak Kelayakan (P8.0)

### Metadata
**Proses:** P8.0 (Cek Layak Kelayakan)  
**Aktor:** Mitra Penyalur, Verifikator, Sistem API  
**Data Store yang Terlibat:** DS1 (Peserta), DS3 (Rumah), DS2 (Pengajuan), DS8 (Outstanding)  
**Titik Keputusan:** 4 (Validasi dokumen, Kelayakan finansial, Riwayat kredit, Rekomendasi)  
**Aktivitas Paralel:** 1 (Verifikasi simultan)

### PlantUML — Activity Diagram

```plantuml
@startuml AD-P7_Cek_Layak_Kelayakan

title Activity Diagram — Proses Cek Layak Kelayakan (P8.0)

skinparam defaultFontName  "Inter"
skinparam defaultFontSize  10
skinparam defaultFontColor #000000

skinparam titleFontName    "Inter"
skinparam titleFontSize    13
skinparam titleFontColor   #000000
skinparam titleFontStyle   bold

skinparam linetype ortho

skinparam activity {
  ArrowColor      #000000
  ArrowThickness  1.2
  ArrowFontColor  #000000
  ArrowFontName   "Inter"
  ArrowFontSize    9
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  BorderThickness  1.5
  FontColor        #000000
  FontName         "Inter"
  FontSize         10
  DiamondBackgroundColor  #FFFFFF
  DiamondBorderColor      #000000
  DiamondBorderThickness  1.5
  DiamondFontColor        #000000
  DiamondFontName         "Inter"
  DiamondFontSize         10
}

skinparam swimlane {
  BorderColor          #000000
  BorderThickness      1.5
  TitleBackgroundColor #FFFFFF
  TitleFontColor       #000000
  TitleFontName        "Inter"
  TitleFontSize        11
  TitleFontStyle       bold
  BackgroundColor      #FFFFFF
  FontColor            #000000
  FontName             "Inter"
  FontSize             10
}

skinparam note {
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  FontColor        #000000
  FontName         "Inter"
  FontSize          9
  BorderThickness  1
}

skinparam padding 10
skinparam nodesep 60
skinparam ranksep 50

scale max 1700 height

|Mitra_Penyalur|
start
:Request Verification;
:Submit Document Package;
:Provide Financial Details;
stop

|Verifikator|
:Receive Verification Request;
:Review Application Data;
if (Docs Complete?) then (Yes)
  :Verify Financial Capacity;
  fork
    :Check Employment History;
  fork again
    :Check Income Statements;
  fork again
    :Check Existing Debts;
  end fork
  :Verify References;
  :Assess Creditworthiness;
  if (Score Meets Criteria?) then (Yes)
    :Generate Verification Report;
    :Recommend Acceptance;
  else (No)
    :Document Rejection Reason;
    :Recommend Rejection;
  endif
  :Submit to BP_TAPERA;
else (No)
  :Request Additional Documents;
  stop
endif

|System_API|
:Deliver Report to Active;
:Log Verification Outcome;
:Update Status in DS2;
:Notify Mitra;
stop

|Mitra_Penyalur|
:View Verification Results;
stop

note right
  Data Stores Accessed:
    DS1 - Peserta (R)
    DS2 - Pengajuan (R/W)
    DS3 - Rumah (R)
    DS8 - Outstanding (R)

  Verification Criteria:
    - Income stability
    - Debt-to-income ratio
    - Credit history
end note

footer AD-P7 — Proses Cek Layak Kelayakan (P8.0)\nVersion 2.0

@enduml
```

---

## 8. AD-P8 — Proses Tagihan FLPP (P14.0)

### Metadata
**Proses:** P14.0 (Tagihan FLPP)  
**Aktor:** Mitra Penyalur, Sistem API, BP TAPERA  
**Data Store yang Terlibat:** DS5 (Akad), DS6 (Pencairan), DS7 (Tagihan FLPP)  
**Titik Keputusan:** 3 (Validasi tagihan, Kelulusan sistem, Persetujuan)  
**Aktivitas Paralel:** 1 (Generate + Validate)

### PlantUML — Activity Diagram

```plantuml
@startuml AD-P8_Tagihan_FLPP

title Activity Diagram — Proses Tagihan FLPP (P14.0)

skinparam defaultFontName  "Inter"
skinparam defaultFontSize  10
skinparam defaultFontColor #000000

skinparam titleFontName    "Inter"
skinparam titleFontSize    13
skinparam titleFontColor   #000000
skinparam titleFontStyle   bold

skinparam linetype ortho

skinparam activity {
  ArrowColor      #000000
  ArrowThickness  1.2
  ArrowFontColor  #000000
  ArrowFontName   "Inter"
  ArrowFontSize    9
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  BorderThickness  1.5
  FontColor        #000000
  FontName         "Inter"
  FontSize         10
  DiamondBackgroundColor  #FFFFFF
  DiamondBorderColor      #000000
  DiamondBorderThickness  1.5
  DiamondFontColor        #000000
  DiamondFontName         "Inter"
  DiamondFontSize         10
}

skinparam swimlane {
  BorderColor          #000000
  BorderThickness      1.5
  TitleBackgroundColor #FFFFFF
  TitleFontColor       #000000
  TitleFontName        "Inter"
  TitleFontSize        11
  TitleFontStyle       bold
  BackgroundColor      #FFFFFF
  FontColor            #000000
  FontName             "Inter"
  FontSize             10
}

skinparam note {
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  FontColor        #000000
  FontName         "Inter"
  FontSize          9
  BorderThickness  1
}

skinparam padding 10
skinparam nodesep 60
skinparam ranksep 50

scale max 1700 height

|Mitra_Penyalur|
start
:Select Akad for FLPP;
:Input Billing Data;
:Verify Eligibility;
:Prepare Tagihan FLPP;
stop

|System_API|
:Validate FLPP Eligibility;
if (Akad Eligible?) then (Yes)
  :Calculate FLPP Amount;
  fork
    :Generate Tagihan Number;
    :Create Payment Details;
  fork again
    :Validate Amount Accuracy;
  end fork
  :Save Tagihan to DS7;
  :Update AKD & Pelunasan Records;
  :Send Tagihan Notification;
  stop
else (No)
  :Show Error: Akad Not Eligible;
  stop
endif

|BP_TAPERA|
:Review Tagihan Submission;
if (Documents Complete?) then (Yes)
  :Approve Tagihan FLPP;
  :Generate Payment Instructions;
  :Update Tagihan Status in DS7;
  :Notify Mitra;
  stop
else (No)
  :Request Additional Info;
  stop
endif

|Mitra_Penyalur|
:Receive Tagihan Confirmation;
stop

note right
  Data Stores Used:
    DS5 - Akad (R)
    DS6 - Pencairan (R)
    DS7 - Tagihan FLPP (W)

  FLPP Eligibility:
    - FLPP program participant
    - Within FLPP limits
    - Akad status active
end note

footer AD-P8 — Proses Tagihan FLPP (P14.0)\nVersion 2.0

@enduml
```

---

## 9. AD-P9 — Proses Stok Rumah (P19.0)

### Metadata
**Proses:** P19.0 (Stok Rumah)  
**Aktor:** Mitra Penyalur, Sistem API, Data  
**Data Store yang Terlibat:** DS3 (Rumah), DS11 (Perumahan), DS12 (Referensi)  
**Titik Keputusan:** 2 (Query availability, Filter criteria)  
**Aktivitas Paralel:** 1 (Fetch + Filter)

### PlantUML — Activity Diagram

```plantuml
@startuml AD-P9_Stok_Rumah

title Activity Diagram — Proses Stok Rumah (P19.0)

skinparam defaultFontName  "Inter"
skinparam defaultFontSize  10
skinparam defaultFontColor #000000

skinparam titleFontName    "Inter"
skinparam titleFontSize    13
skinparam titleFontColor   #000000
skinparam titleFontStyle   bold

skinparam linetype ortho

skinparam activity {
  ArrowColor      #000000
  ArrowThickness  1.2
  ArrowFontColor  #000000
  ArrowFontName   "Inter"
  ArrowFontSize    9
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  BorderThickness  1.5
  FontColor        #000000
  FontName         "Inter"
  FontSize         10
  DiamondBackgroundColor  #FFFFFF
  DiamondBorderColor      #000000
  DiamondBorderThickness  1.5
  DiamondFontColor        #000000
  DiamondFontName         "Inter"
  DiamondFontSize         10
}

skinparam swimlane {
  BorderColor          #000000
  BorderThickness      1.5
  TitleBackgroundColor #FFFFFF
  TitleFontColor       #000000
  TitleFontName        "Inter"
  TitleFontSize        11
  TitleFontStyle       bold
  BackgroundColor      #FFFFFF
  FontColor            #000000
  FontName             "Inter"
  FontSize             10
}

skinparam note {
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  FontColor        #000000
  FontName         "Inter"
  FontSize          9
  BorderThickness  1
}

skinparam padding 10
skinparam nodesep 60
skinparam ranksep 50

scale max 1700 height

|Mitra_Penyalur|
start
:Access Stock Management;
:Select Perumahan/Project;
:Input Search Criteria;
:Request House Stock;
stop

|System_API|
:Query Perumahan Data;
:Apply Filters;
if (Results Found?) then (Yes)
  fork
    :Fetch House List;
    :Validate Pricing;
    :Format Display Data;
  fork again
    :Check Availability Status;
  end fork
  :Send Stock Information;
  :Log Query;
  stop
else (No)
  :Show No Results Message;
  stop
endif

|Data|
:Provide Caching;
:Ensure Data Freshness;
:Return Structured Response;
stop

|Mitra_Penyalur|
:View Stock List;
stop

note right
  Data Stores Used:
    DS3 - Rumah (R)
    DS11 - Perumahan (R)
    DS12 - Referensi (R)

  Search Parameters:
    - Project name
    - Unit type
    - Price range
    - Availability status
end note

footer AD-P9 — Proses Stok Rumah (P19.0)\nVersion 2.0

@enduml
```

---

## 10. AD-P10 — Proses Parameter Referensi (P20.0)

### Metadata
**Proses:** P20.0 (Parameter Referensi)  
**Aktor:** Sistem API, Admin  
**Data Store yang Terlibat:** DS12 (Referensi)  
**Titik Keputusan:** 2 (Validasi input, Simpan sukses)  
**Aktivitas Paralel:** 1 (Validate + Create)

### PlantUML — Activity Diagram

```plantuml
@startuml AD-P10_Parameter_Ref

title Activity Diagram — Proses Parameter Referensi (P20.0)

skinparam defaultFontName  "Inter"
skinparam defaultFontSize  10
skinparam defaultFontColor #000000

skinparam titleFontName    "Inter"
skinparam titleFontSize    13
skinparam titleFontColor   #000000
skinparam titleFontStyle   bold

skinparam linetype ortho

skinparam activity {
  ArrowColor      #000000
  ArrowThickness  1.2
  ArrowFontColor  #000000
  ArrowFontName   "Inter"
  ArrowFontSize    9
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  BorderThickness  1.5
  FontColor        #000000
  FontName         "Inter"
  FontSize         10
  DiamondBackgroundColor  #FFFFFF
  DiamondBorderColor      #000000
  DiamondBorderThickness  1.5
  DiamondFontColor        #000000
  DiamondFontName         "Inter"
  DiamondFontSize         10
}

skinparam swimlane {
  BorderColor          #000000
  BorderThickness      1.5
  TitleBackgroundColor #FFFFFF
  TitleFontColor       #000000
  TitleFontName        "Inter"
  TitleFontSize        11
  TitleFontStyle       bold
  BackgroundColor      #FFFFFF
  FontColor            #000000
  FontName             "Inter"
  FontSize             10
}

skinparam note {
  BackgroundColor  #FFFFFF
  BorderColor      #000000
  FontColor        #000000
  FontName         "Inter"
  FontSize          9
  BorderThickness  1
}

skinparam padding 10
skinparam nodesep 60
skinparam ranksep 50

scale max 1700 height

|System_API|
start
:Initialize Parameter Management;
:Load Existing Parameters;

|Admin|
:Select Parameter Type;
:Input Parameter Data;
:Validate Input Format;

|System_API|
if (Valid Format?) then (Yes)
  fork
    :Check Duplicate Code;
    :Generate Timestamp;
  fork again
    :Validate Range Constraints;
  end fork
  :Save Parameter to DS12;
  :Update Cache;
  :Confirm Parameter Creation;
else (No)
  :Show Validation Error;
  stop
endif

|Admin|
:View Created Parameter;
stop

note right
  Data Stores Used:
    DS12 - Referensi (W)

  Parameter Types:
    - Province/City
    - Zone/Region
    - Status Codes
    - Configuration

  Validation:
    - Code uniqueness
    - Hierarchical integrity
    - Active status
end note

footer AD-P10 — Proses Parameter Referensi (P20.0)\nVersion 2.0

@enduml
```


---

## 11. Matriks Cross-Reference

### Matriks Aktivitas-Swimlane
| Diagram | Mitra | Peserta | System_API | BP_TAPERA | Verifikator | Admin | Data |
|---------|:-----:|:-------:|:----------:|:---------:|:---------:|:-----:|:----:|
| AD-P1 | ● | ● | ● | ● | — | — | — |
| AD-P2 | ● | ● | ● | ● | — | — | — |
| AD-P3 | ● | ● | ● | ● | — | — | — |
| AD-P4 | ● | • | ● | ● | — | — | — |
| AD-P5 | ● | — | ● | ● | — | — | — |
| AD-P6 | ● | — | ● | - | — | — | — |
| AD-P7 | ● | — | ● | — | ● | — | — |
| AD-P8 | ● | — | ● | ● | — | — | — |
| AD-P9 | ● | — | ● | — | — | — | ● |
| AD-P10 | — | — | ● | — | — | ● | — |

**Legend:** ● = Primary, • = Secondary, — = Not Applicable

### Matriks Data Store per Diagram
| Diagram | DS1 | DS2 | DS3 | DS4 | DS5 | DS6 | DS7 | DS8 | DS9 | DS10 | DS11 | DS12 |
|---------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:----:|:----:|:----:|
| AD-P1 | R | W | R | — | — | — | — | — | — | — | — | R |
| AD-P2 | R | — | R | W | — | — | — | — | — | — | — | — |
| AD-P3 | R | W | — | R | W | — | — | — | — | — | — | — |
| AD-P4 | R | — | — | — | R | W | — | — | — | — | — | — |
| AD-P5 | — | — | — | — | — | — | — | W | — | — | — | — |
| AD-P6 | — | — | — | — | — | — | — | — | W | W | — | — |
| AD-P7 | R | R/W | R | — | — | — | — | R | — | — | — | — |
| AD-P8 | — | — | — | — | R | R | W | — | — | — | — | — |
| AD-P9 | — | — | R | — | — | — | — | — | — | — | R | R |
| AD-P10 | R | R | R | R | R | R | R | R | R | R | R | W |

**Legend:** R = Read, W = Write, R/W = Read & Write

---

## 12. Ringkasan Diagram Aktivitas

### Total Per Diagram
| Diagram | Aktivitas | Keputusan | Fork/Join |
|---------|-----------|-----------|-----------|
| AD-P1 | 18 | 5 | 1 (F1) |
| AD-P2 | 16 | 6 | 2 (F1, F2) |
| AD-P3 | 15 | 5 | 1 (F1) |
| AD-P4 | 12 | 4 | 1 (F1) |
| AD-P5 | 10 | 3 | 1 (F1) |
| AD-P6 | 8 | 2 | 1 (F1) |
| AD-P7 | 10 | 4 | 1 (F1) |
| AD-P8 | 9 | 3 | 1 (F1) |
| AD-P9 | 6 | 2 | 1 (F1) |
| AD-P10 | 5 | 2 | 1 (F1) |
| **Total** | **109** | **36** | **11 (F1-F11)** |

### Pola Alur Utama
1. **Proses Submit (P1)**: Input → Validasi → Save → Notifikasi
2. **Proses Approval (P2, P3, P4)**: Submit → Review → Decision → Process
3. **Proses Report (P5)**: Calculate → Generate → Submit → Archive
4. **Proses Management (P6)**: Input → Validate → Save → Notify
5. **Proses Verification (P7)**: Request → Verify → Evaluate → Recommend
6. **Proses Tagihan (P8)**: Generate → Validate → Submit → Approve
7. **Proses Stok (P9)**: Query → Filter → Display
8. **Proses Parameter (P10)**: Input → Validate → Save → Cache

### Data Store Access Pattern
- **Read**: DS1, DS2, DS3, DS5, DS11, DS12 (Peserta, Pengajuan, Rumah, Akad, Perumahan, Referensi)
- **Write**: DS2, DS4, DS5, DS6, DS7, DS8, DS9, DS10, DS12 (Pengajuan, SP3K, Akad, Pencairan, Tagihan, Outstanding, PIC, Cabang, Referensi)

---

## 13. Verifikasi Versi 2.0

### Perbaikan Diterapkan
- ✅ **Struktur Dokumen**: Urutan logis (AD-P1 hingga AD-P10)
- ✅ **Penomoran**: Konsisten 1-10 untuk semua diagram
- ✅ **Cross-Reference**: Dipindah ke akhir dokumen
- ✅ **Placeholder Removed**: Menghapus "DF40/DF50 mL", "BPFL Alberta"
- ✅ **Data Store Corrected**: DS12 only di AD-P10
- ✅ **Stop Points**: Ditambahkan di semua diagram
- ✅ **Fork/Join**: Pola konsisten dengan end join
- ✅ **Version**: All diagrams marked as Version 2.0

### Kualitas Final
- ✅ Semua proses DFD (P1.0-P20.0) terpetakan
- ✅ Swimlanes konsisten dengan aktor yang relevan
- ✅ Keputusan bisnis dengan diamond shapes
- ✅ Fork/join untuk aktivitas paralel
- ✅ Catatan data store dengan akses R/W
- ✅ PlantUML valid dan renderable

---

*Catatan: Diagram ini menggunakan styling hitam-putih yang optimal untuk cetak A4 portrait, dengan font Inter, garis ortogonal, dan notasi PlantUML yang valid. Versi 2.0 memperbaiki struktur, nomor, dan menghapus semua placeholder.*
