<!-- lastmod 2022-08-04 -->
<!-- image -->

WIXVW

## MAX17039 Evaluation Kit

## General Description

## Features

The  MAX17039  evaluation  kit  (EV  kit)  demonstrates the  high-power,  dynamically  adjustable,  multiphase IMVP-7  notebook  application  circuit.  This  DC-DC  converter  steps  down  high-voltage  batteries  and/or  AC adapters,  generating  two  precision,  low-voltage  CPU/ GPU core rails. The EV kit meets the Intel mobile IMVP-7 CPU's  transient  voltage  specification,  power-good  signaling,  voltage  regulator  thermal  monitoring  ( VR\_HOT ), power-good outputs (VR\_\_READY), and serial VID communication  and  control  specification.  The  MAX17039 consists  of  two  high-current  SMPSs  for  the  CPU  and GPU cores. The CPU regulator is a 3-phase interleaved Quick-PWM K architecture  with  one  MAX8791  singlesynchronous MOSFET driver. The second GPU regulator is also a 1-phase Quick-PWM architecture. The 3-phase CPU core  SMPS  runs  120 N out-of-phase  for  true  interleaved operation, minimizing input capacitance.

Both CPU/GPU output voltages are controlled independently  and  are  dynamically  changed  through  a  3-wire serial VID interface (3-wire SVID: VCLK, VDIO, ALERT ), allowing the switching regulators to be individually programmed to different voltages. The EV kit includes active voltage positioning with adjustable gain, reducing power dissipation and bulk output capacitance requirements. A slew-rate  controller  allows  controlled  transitions  among VID  codes,  controlled  soft-start,  and  shutdown.  SVID also  allows  each  regulator  to  be  individually  set  into  a low-power, pulse-skipping state.

The  MAX17039  provides  a  digitally  adjustable  0  to 1.5200V output-voltage range from a 7V to 20V batteryinput  range.  Each  phase  of  the  CPU  core  SMPS  is designed for a 20A thermal-design current and delivers up  to  33A  peak  output  current  for  a  total  of  99A.  The 1-phase GPU core SMPS is designed for 20A thermaldesign current and delivers up to 33A peak output current. The CPU core SMPS operates at 350kHz switching frequency (per phase) and has superior line- and loadtransient  response.  The  GPU  core  SMPS  operates  at 440kHz switching frequency relative CPU core SMPS.

The MAX17039 EV kit also evaluates the MAX17000 and MAX17007A DC-DC converters. The EV kit also includes Windows M 2000-, Windows XP M -, and Windows Vista M -compatible  software  that  provides  a  simple  graphical user  interface  (GUI)  for  exercising  the  features  of  the MAX17039.

Quick-PWM is a trademark of Maxim Integrated Products, Inc. Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp.

## MAX17039:

- S Intel IMVP-7 Serial VID-Compliant 25MHz Interface
- S 0 to 1.5200V Output-Voltage Range
- S 7V to 20V Input-Voltage Range
- S Core CPU SMPS 3-Phase, Fast-Response Interleaved, Quick-PWM Two Internal Drivers + One External Driver (MAX8791) Transient-Suppression Feature 99A Peak Load-Current Capability (33A Each Phase) 350kHz Switching Frequency (per Phase)
- S Core GPU SMPS

1-Phase, Fast-Response Internal Driver Quick-PWM 33A Peak Load-Current Capability 440kHz Switching Frequency

- S Active Voltage Positioning with Adjustable Gain
- S Power-Good (VR\_\_READY) Outputs
- S External Thermal-Fault Detection ( VR\_HOT )
- S Output Current Monitors (IMON\_)
- S Overvoltage-, Undervoltage-, and Thermal-Fault Protections
- S 56-Pin Thin QFN Package

## MAX17000:

- S Complete DDR Supplies: VCCDDR, VTTDDR, VTTR
- S 7V to 20V Input-Voltage Range
- S 400kHz Switching Frequency
- S 10A Output Current Capability (VCCDDR)
- S 2A Output Current Capability (VTTDDR)
- S 3mA Output Current Capability (VTTR)
- S Overvoltage Protection
- S Power-Good Output Indicators (D15 and D16)
- S 24-Pin Thin QFN Package

## MAX17007A:

- S I/O Supplies: VTT1 and VTT2
- S 7V to 20V Input-Voltage Range
- S 300kHz Switching Frequency
- S 6A Output Current Capability (VTT1)
- S 21A Output Current Capability (VTT2)
- S Overvoltage-, Undervoltage-, and Thermal-Fault Protections
- S Power-Good Output Indicators (D19 and D20)
- S 28-Pin Thin QFN Package

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17039EVKIT+ | EV Kit |

\_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX17039 Evaluation Kit

## Component List

| DESIGNATION                                                                                                                  |   QTY | DESCRIPTION                                                                                                                                            |
|------------------------------------------------------------------------------------------------------------------------------|-------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| C1-C4, C68, C69, C105, C106, C130, C131, C160-C163                                                                           |    14 | 10 F F Q 20%, 25V X5R ceramic capacitors (1210) Murata GRM32DR61E106K TDK C3225X7R1E106M AVX 12103D106M Taiyo Yuden TMK325BJ106MM KEMET C1210C106M3RAC |
| C5, C7, C8, C67, C70, C78, C89, C90, C107, C168, C169                                                                        |    11 | 470 F F, 2V, 4.5m I low-ESR polymer capacitors (D case) Panasonic EEFSX0D471E4 or NEC TOKIN PSGV0E477M4.5                                              |
| C6, C71, C108, C150, C167                                                                                                    |     0 | Not installed, capacitors (D case)                                                                                                                     |
| C9                                                                                                                           |     0 | Not installed, capacitor (0805)                                                                                                                        |
| C10, C11                                                                                                                     |     2 | 2.2 F F Q 20%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A225M or Murata GRM188R61A225M or AVX 0603ZD225MAT                                       |
| C12, C19, C21, C22-C29, C74, C75, C77, C85- C88, C109, C110, C112, C114, C137-C140, C170, C171, C175, C178, C179, C181, C183 |     0 | Not installed, capacitors (0603)                                                                                                                       |
| C13, C14, C73, C102, C135, C136, C165, C180                                                                                  |     8 | 0.22 F F Q 20%, 10V X7R ceramic capacitors (0603) Murata GRM188R71A224K Taiyo Yuden LMK107BJ224MA TDK C1608X7R1C224M AVX 06033D224KAT                  |
| C15, C16, C76, C111, C144                                                                                                    |     5 | 0.33 F F Q 10%, 10V X5R ceramic capacitors (0603) Murata GRM188R61A334K TDK C1608X5R1A334K                                                             |

| DESIGNATION                                                         |   QTY | DESCRIPTION                                                                                                       |
|---------------------------------------------------------------------|-------|-------------------------------------------------------------------------------------------------------------------|
| C17, C18, C65, C113, C121, C134, C172, C182                         |     8 | 1000pF Q 10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H102K or Murata GRM188R71H102K or equivalent         |
| C20, C80, C164, C174                                                |     4 | 0.1 F F Q 10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K or Murata GRM188R71E104K                      |
| C30                                                                 |     0 | Not installed, 1000 F F, 50V aluminum electrolytic capacitor (12.5mm x 25mm) SANYO 50MV1000AX                     |
| C31, C34, C39- C45, C55-C60, C64, C115-C120                         |    25 | 22 F F, 6.3V X5R ceramic capacitors (0805) TDK C2012X5R0J226MT Taiyo Yuden JMK212BJ226MG                          |
| C32, C33, C35-C38, C46- C54, C141, C142, C143, C145-C148, C184-C193 |    32 | 10 F F Q 20%, 6.3V X5R ceramic capacitors (0805) TDK C2012X5R0J106M or Taiyo Yuden AMK212BJ106MG AVX 08056D106MAT |
| C66                                                                 |     0 | Not installed, capacitor (1210)                                                                                   |
| C72, C101, C132, C133, C176, C177                                   |     6 | 1 F F Q 10%, 16V X5R ceramic capacitors (0603) TDK C1608X5R1C105K Taiyo Yuden EMK107BJ683MA Murata GRM188R61C105K |
| C79                                                                 |     1 | 0.01 F F Q 10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1E103K or Murata GRM188R71E103K                      |
| C81-C84                                                             |     4 | 470pF Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H471K TDK C1608X7R1H471K Taiyo Yuden UMK107B471KZ  |

2    \_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17039 Evaluation Kit

## Component List (continued)

| DESIGNATION                 |   QTY | DESCRIPTION                                                                                              |
|-----------------------------|-------|----------------------------------------------------------------------------------------------------------|
| C149                        |     1 | 330 F F, 2V, 4.5m I low-ESR polymer capacitor (D case) Panasonic EEFSX0D331E4 or NEC TOKIN PSGV0E337M4.5 |
| C166                        |     1 | 220 F F, 2.5V, 12m I low-ESR polymer capacitor (D case) SANYO 2R5TPE220MC                                |
| C173                        |     1 | 2200pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H222K TDK C1608X7R1H222K                  |
| C201                        |     1 | 1 F F Q 10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J105K                                     |
| C202-C206, C256             |     6 | 4.7 F F Q 10%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J475K                                  |
| C207-C210                   |     4 | 47 F F Q 10%, 6.3V 325m I tanta- lum capacitors (Size C) KEMET B45197A1476K309                           |
| C211, C219- C223, C228-C255 |    34 | 0.1 F F Q 10%, 10V X5R ceramic capacitors (0402) Murata GRM155R61A104K                                   |
| C212                        |     1 | 0.022 F F Q 10%, 16V X7R ceramic capacitor (0402) Murata GRM155R71C223K                                  |
| C213, C224, C225            |     3 | 0.01 F F Q 10%, 16V X7R ceramic capacitors (0402) Murata GRM155R71C103K                                  |
| C214, C226                  |     2 | 4700pF Q 10%, 25V X7R ceramic capacitors (0402) Murata GRM155R71E472K                                    |
| C215, C216, C227            |     3 | 2200pF Q 10%, 50V X7R ceramic capacitors (0402) Murata GRM155R71H222K                                    |
| C217                        |     1 | 1000pF Q 10%, 50V X7R ceramic capacitor (0402) Murata GRM155R71H102K                                     |

| DESIGNATION                                                                                                                                                                                                                                            |   QTY | DESCRIPTION                                                                  |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|------------------------------------------------------------------------------|
| C218                                                                                                                                                                                                                                                   |     1 | 470 F F Q 10%, 6.3V 100m I tantalum capacitor (Size E) KEMET B45197A1477K509 |
| C257, C258                                                                                                                                                                                                                                             |     2 | 15pF Q 5%, 50V C0G ceramic capacitors (0402) Murata GRM1555C1H150J           |
| C259-C262                                                                                                                                                                                                                                              |     4 | 10pF Q 5%, 50V C0G ceramic capacitors (0402) Murata GRM1555C1H100J           |
| DRSKIP , EN1, EN2, GND_ SENSE, IMONA, IMONB, PGOOD1, PGOOD2, PGOODVTT1, PGOODVTT2, PWM_OUT, REFIN1, SHDN , SKIP , SKIPVTT , STDBY , VCCGT_ SENSE, VCCP_ SENSE, VID_SEL, VOUT_SENSE, VR_ENABLE, VR_HOT , VRA_READY, VRB_READY, VSSGT_SENSE, VSSP_SENSE, |    28 | Test points                                                                  |
| D1, D2, D6, DG                                                                                                                                                                                                                                         |     0 | Not installed                                                                |
| D10, D14, D17, D18                                                                                                                                                                                                                                     |     4 | 3A, 30V Schottky diodes Nihon EC31QS03L Central Semi CMSH3-40M               |
| D15, D16, D19, D20                                                                                                                                                                                                                                     |     4 | Green clear SMD LEDs (0805) Lite-On LTST-C170GKT                             |
| D201                                                                                                                                                                                                                                                   |     1 | Green LED (0603)                                                             |
| D202-D205                                                                                                                                                                                                                                              |     4 | Schottky barrier diodes (Mini 2P) Panasonic MA2YD1500L                       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## Evaluates:  MAX17000/MAX17007A/MAX17039

## MAX17039 Evaluation Kit

## Component List (continued)

| DESIGNATION              |   QTY | DESCRIPTION                                                                                             |
|--------------------------|-------|---------------------------------------------------------------------------------------------------------|
| FB201-FB204              |     4 | 120 at 100MHz, 2A ferrite beads (0603) Murata BLM18PG121SN1D                                            |
| JU4-JU9, JU15, JU16      |     8 | 2-pin headers                                                                                           |
| JU10, JU12, JU13         |     0 | Not installed, 3-pin headers                                                                            |
| J201                     |     1 | USB type-B right-angle receptacle                                                                       |
| JU201                    |     1 | 3-pin header                                                                                            |
| J202, J203               |     0 | Not installed, dual-row (5 x 2) headers                                                                 |
| L1, L2, L3, L4, L7       |     5 | 0.36 F H, 36A, 0.82m I power inductors Panasonic ETQP4LR36ZFC NEC TOKIN MPC1055LR36 TOKO FDUE1040D-R36M |
| L5                       |     1 | 0.6 F H, 17A, 2.3m I power induc- tor NEC TOKIN MPC0750LR60C                                            |
| L6                       |     1 | 1 F H, 10A, 9m I power inductor NEC TOKIN MPLC0730LR1R0                                                 |
| N1, N2, N7, N8           |     4 | n-channel MOSFETs (PowerPAK, 8 SO) Fairchild FDMS8680 Vishay (Siliconix) SiR402DP                       |
| N3-N6, N9, N10, N12, N23 |     8 | n-channel MOSFETs (PowerPAK, 8 SO) Fairchild FDMS8660AS Vishay (Siliconix) Si7658ADP                    |
| N11, N19, N20, N21, N22  |     0 | Not installed                                                                                           |
| N13, N15, N17            |     3 | n-channel MOSFETs (PowerPAK, 8 SO) Fairchild FDS6298 (SO 8) Vishay (Siliconix) SI4386DY                 |
| N14, N16, N18            |     3 | n-channel MOSFETs (PowerPAK, 8 SO) Fairchild FDS8670 (SO 8) Vishay (Siliconix) SI4626ADY                |

| DESIGNATION                                                                                                                                                      |   QTY | DESCRIPTION                                                                                                                                                                                                                    |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Q1                                                                                                                                                               |     1 | n-channel logic-level MOSFET (SOT23) Fairchild 2N7002 (Top Mark: 702) Central Semi 2N7002                                                                                                                                      |
| R1, R15, R16, R22, R44, R46, R47, R73, R74, R76, R77, R107, R142                                                                                                 |    13 | 10 I Q 5% resistors (0603)                                                                                                                                                                                                     |
| R2, R3, R57, R101, R145                                                                                                                                          |     5 | 150k I Q 1% resistors (0603)                                                                                                                                                                                                   |
| R4, R5, R6, R19, R24, R32, R54, R56, R59, R60, R61, R63, R71, R72, R78, R106, R120, R139                                                                         |    18 | 0 I resistors (0603)                                                                                                                                                                                                           |
| R7, R11, R21, R67, R149                                                                                                                                          |     5 | 1.5k I Q 1% resistors (0603)                                                                                                                                                                                                   |
| R8, R12, R35, R69                                                                                                                                                |     4 | 2.1k I Q 1% resistors (0603)                                                                                                                                                                                                   |
| R9, R13, R34, R70                                                                                                                                                |     4 | 40.2k I Q 1% resistors (0603)                                                                                                                                                                                                  |
| R10, R14, R36, R68, R115, R134, R148                                                                                                                             |     7 | 10k I Q 1% NTC thermistors, A = 3380 (0603) Murata NCP18XH103F03RB TDK NTCG163JH103F                                                                                                                                           |
| R17                                                                                                                                                              |     1 | 3.83k I Q 1% resistor (0603)                                                                                                                                                                                                   |
| R18, R45, R48, R49, R50, R51, R53, R55, R62, R64, R65, R66, R103, R111, R112, R117, R118, R119, R121, R131, R132, R137, R138, R150, R151, R214, R215, R217, R219 |     0 | Not installed, resistors (0603) R18, R45, R48, R49, R51, R55, R62, R64, R65, R66, R111, R112, R119, R214, R215, R217, R219 are open; R50, R53, R103, R117, R118, R121, R131, R132, R137, R138, R150, R151 are short (PC trace) |

4    \_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17039 Evaluation Kit

## Component List (continued)

* EP = Exposed pad.

| DESIGNATION                                  |   QTY | DESCRIPTION                                                                           |
|----------------------------------------------|-------|---------------------------------------------------------------------------------------|
| R20, R52, R100, R130                         |     0 | Not installed, resistors-short (PC trace) (1210)                                      |
| R23                                          |     1 | 5.11k I Q 1% resistor (0603)                                                          |
| R25, R27                                     |     2 | 4.87k I Q 1% resistors (0603)                                                         |
| R26, R28                                     |     2 | 100k I Q 5% NTC thermistors, A = 4250 (0603) Murata NCP18WF104J03RB TDK NTCG163JF104J |
| R29, R31                                     |     2 | 115k I Q 1% resistors (0603)                                                          |
| R30                                          |     1 | 15.4k I Q 1% resistor (0603)                                                          |
| R33, R42, R43                                |     3 | 332k I Q 1% resistors (0603)                                                          |
| R37, R38, R41                                |     3 | 169k I Q 1% resistors (0603)                                                          |
| R39, R40, R156                               |     3 | 200k I Q 1% resistors (0603)                                                          |
| R58, R88, R102, R108, R109, R110, R144, R155 |     8 | 100k I Q 5% resistors (0603)                                                          |
| R75                                          |     1 | 8.06k I Q 1% resistor (0603)                                                          |
| R89, R90, R91                                |     3 | 1.91k I Q 1% resistors (0603)                                                         |
| R104, R105, R143, R154                       |     4 | 1k I Q 5% resistors (0603)                                                            |
| R113, R114                                   |     2 | 3.48k I Q 1% resistors (0603)                                                         |
| R116, R147                                   |     6 | 20k I Q 1% resistors (0603)                                                           |
| R133, R135                                   |     2 | 1.82k I Q 1% resistors (0603)                                                         |
| R136                                         |     1 | 499 I Q 1% resistor (0603)                                                            |
| R140                                         |     1 | 90.9k I Q 1% resistor (0603)                                                          |
| R141                                         |     1 | 100k I Q 1% resistor (0603)                                                           |
| R146                                         |     1 | 1.21k I Q 1% resistor (0603)                                                          |
| R152                                         |     1 | 4.99k I Q 1% resistor (0603)                                                          |
| R153                                         |     1 | 10k I Q 1% resistor (0603)                                                            |
| R201, R202                                   |     2 | 22 I Q 5% resistors (0603)                                                            |
| R203, R204, R205                             |     3 | 25.5k I Q 1% resistors (0603)                                                         |
| R206                                         |     1 | 78.7k I Q 1% resistor (0603)                                                          |
| R207                                         |     1 | 54.9k I Q 1% resistor (0603)                                                          |
| R208                                         |     1 | 12.7k I Q 1% resistor (0603)                                                          |
| R209                                         |     1 | 510 I Q 5% resistor (0603)                                                            |
| R210-R213, R221                              |     5 | 10k I Q 5% resistors (0603)                                                           |
| R216, R218, R220                             |     3 | 90.9 I Q 1% resistors (0603)                                                          |

| DESIGNATION   |   QTY | DESCRIPTION                                                                    |
|---------------|-------|--------------------------------------------------------------------------------|
| TP201-TP204   |     0 | Not installed, test points                                                     |
| U1            |     1 | 3-phase + 1-phase Quick-PWM IMVP-7 controller (56 TQFN-EP*) Maxim MAX17039GTN+ |
| U2            |     1 | CPU socket rPGA-989 FOXCONN PZ98927-3641-01F                                   |
| U3            |     1 | Single driver (8 TQFN-EP*) Maxim MAX8791GTA+                                   |
| U4            |     1 | DDR memory power controller (24 TQFN-EP*) Maxim MAX17000ETG+                   |
| U5            |     1 | Dual step-down Quick-PWM con- troller (28 TQFN-EP*) Maxim MAX17007AGTI+        |
| U6, U7, U8    |     3 | 500mA LDOs (8 TQFN-EP*) Maxim MAX1935ETA+                                      |
| U9            |     1 | USB microcontroller (64 QFN-EP*) Atmel AT90USB1286-16MU                        |
| U10           |     1 | Cyclone III FPGA (144 EQFP-EP*) Altera EP3C5E144C7N                            |
| U11           |     1 | FPGA serial configuration device (8 SO) Altera EPCS4SI8N                       |
| Y1            |     1 | 8MHz crystal Hong Kong X'tals SSL8000000E18FAE                                 |
| -             |     1 | USB high-speed A-to-B cable, 6ft                                               |
| -             |     2 | Shunts                                                                         |
| -             |     1 | PCB: MAX17039 EVALUATION KIT+                                                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX17039 Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 843-946-0238 | www.avxcorp.com             |
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Hong Kong X'tals Ltd.                  | 852-35112388 | www.hongkongcrystal.com     |
| KEMET Corp.                            | 864-963-6300 | www.kemet.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| NEC TOKIN America, Inc.                | 408-324-1790 | www.nec-tokinamerica.com    |
| Nihon Inter Electronics Corp.          | 847-843-7500 | www.niec.co.jp              |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| SANYO Electric Co., Ltd.               | 619-661-6835 | www.sanyodevice.com         |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX17039 when contacting these component suppliers.

## MAX17039 EV Kit Files

| FILE         | DESCRIPTION                                |
|--------------|--------------------------------------------|
| INSTALL.EXE  | Installs the EV kit files on your computer |
| MAX17039.EXE | Application program                        |
| ATUSBHID.DLL | USB software library                       |
| UNINST.INI   | Uninstalls the EV kit software             |

## Quick Start

## Recommended Equipment

## Procedure

The MAX17039 EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution: Do not turn on the power supply until all connections are completed.

- 1) Visit www.maxim-ic.com/evkitsoftware to  download  the  latest  version  of  the  EV  kit  software, 17039xx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder.

The program files are copied and icons are created in the Windows Start | Programs menu.

- 3) Ensure that the circuit is connected correctly to the supplies  and  dummy  loads  prior  to  applying  any power.
- 4) Turn on the battery power before turning on the 5V bias power.
- MAX17039 EV kit
- 7V to 20V, &gt; 100W power supply, battery, or notebook AC adapter
- DC bias power supply, 5V at 1A
- Dummy  load  capable  of  sinking  99A  each  (CPU core)
- Dummy load capable of sinking 33A (GPU core)
- Digital multimeters (DMMs)
- 100MHz dual-trace oscilloscope
- User-supplied  Windows  2000,  Windows  XP,  or Windows Vista PC with a spare USB port

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

6    \_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17039 Evaluation Kit

- 5) Verify  that  there  is  a  shunt  across  JU15  (VTT1  = 1.05V).
- 9) In  the VR  Address combo  box  (Figure  2),  select 1111 for the MAX17039 voltage regulator.
- 6) Connect  the  USB  cable  from  the  PC  to  the  EV  kit board.
- 7) Start the EV kit software by opening its icon in the Start  |  Programs menu. The EV kit software  main window should appear, as shown in Figure 1. Verify that  the Hardware:  Connected message  is  displayed in the bottom-left status bar.
- 8) Click on the Serial VID Commands tab.
- 10)  On the line for command index 02h, move the track bar to set the DAC setpoint voltage to 1.2000V (BFh) and press the Execute button.
- 11)  Observe  the  1.2000V  output  voltage  on  the  SMPS outputs  (VOUT  and  VCCGT)  with  the  DMM  and/or oscilloscope.  Look  at  the  LX  switching  nodes  and MOSFET gate-drive  signals  while  varying  the  load current.

<!-- image -->

Figure 1. MAX17039 Evaluation Kit Software (Debug Tab)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX17039 Evaluation Kit

## Detailed Description of Software

The MAX17039 EV kit software contains four tab sheets: Debug , Serial  VID  Commands , Vendor  &amp;  Telemetry Data Registers , and OTP/Pin-programmed &amp; Scratch Pad Registers .

## SCLK Speed Selection

By default, the VCLK speed is set to 5.5MHz on the EV kit.  To  select  a  different  VCLK  speed,  the  user  should navigate to the Debug tab sheet and select the desired radio button in the VCLK Speed group box.

## Debug Tab

The Debug tab sheet (Figure 1) has the most complete tools  to  evaluate  the  MAX17039.  The  controls  include SVID interface clock-speed selection, protocol selection, and start and end pattern selection.

In the SVID Commands group box, the user can set up each  individual  command,  send  the  commands  to  the MAX17039 one-by-one continuously, or send the commands to the MAX17039 back-to-back with configurable time intervals between each command. Up to 25 commands can be sent in one loop. The user can also control

Figure 2. MAX17039 Evaluation Kit Software (Serial VID Commands Tab)

<!-- image -->

8    \_ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17039 Evaluation Kit

how the SVID master acts when wrong acknowledge bits are  received  (e.g.,  either  continue  or  stop  sending  the commands in the queue).

the master payload. Press an Execute button to send the command on the same row.

Press  the Save  Command  Settings … button  to  save the SVID command settings to a text file. Press the Load Command  Settings …  button  to  load  SVID  command settings from a text file.

Press  the Reset EVKIT button  to  reset  the  connection between the PC and the SVID bus master. There is no effect on the voltage regulator settings.

## Serial VID Commands Tab

The Serial VID Commands tab sheet (Figure 2) lists all 32 serial VID commands. Some commands are reserved commands for future use. Move the track bars to change Vendor &amp; Telemetry Data Registers Tab The Vendor  &amp;  Telemetry  Data  Registers tab  sheet (Figure 3) lists the vendor data registers and the telemetry  data  registers.  Press  a Read button  to  send  the command on the same row.

## OTP/Pin-Programmed &amp; Scratch Pad Registers Tab

The OTP/Pin-programmed  &amp;  Scratch  Pad  Registers tab sheet (Figure 4) lists the OTP/pin-programmed registers and the scratchpad registers. Press a Read button to send the command on the same row.

<!-- image -->

Figure 3. MAX17039 Evaluation Kit Software (Vendor &amp; Telemetry Data Registers Tab)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX17039 Evaluation Kit

## Serial VID Interface (VCLK, VDIO, ALERT )

The MAX17039 supports the serial VID interface. Serial VID is a 3-wire (VCLK, VDIO, ALERT ) serial synchronous interface  used  to  transfer  power-management  information between a master (typically a microprocessor) and a slave (typically a voltage regulator controller). The link is between one master device (usually a microprocessor) and multiple slave devices (usually a VR controller) on the  same bus. There is a 4-bit addressing scheme for the slave devices.

The  clock  is  source-synchronous  from  the  CPU.  The master drives the VCLK signal with a low-voltage open-

Figure 4. MAX17039 Evaluation Kit Software (OTP/Pin-programmed &amp; Scratch Pad Registers Tab)

<!-- image -->

10     �������������������������������������������������������������������������������������

drain driver. The master can shut down the VCLK signal to  save  power  when  no  data  transfer  is  needed.  The VDIO line is a low-voltage, open-drain data signal that the  master  and  slave  use  to  send  information  to  each other. The ALERT line is an active-low signal driven from the slave device, indicating to the master that the status register needs to be read.

The on-board FPGA is the serial VID bus master and the MAX17039 is the slave. The bus operates at a maximum frequency of 33MHz.

<!-- image -->

## MAX17039 Evaluation Kit

## Detailed Description of Hardware

The MAX17039 consists of two high-current SMPSs for the  CPU  and  GPU  cores.  The  CPU  core  SMPS  buckregulator  design  is  optimized  for  a  350kHz  switching frequency and output-voltage settings of approximately 1.200V. At VOUT = 1.200V and VIN = 12V, the inductor ripple is approximately 25% (LIR = 0.25). The MAX17039 controller  interleaves  all  phases,  resulting  in  120 N outof-phase operation that minimizes the input and output filtering  requirements.  The  MAX17039 controller shares the current between the three phases, supplying up to 33A  per  phase.  The  GPU  1-phase  SMPS  operates  at 440kHz switching frequency and delivers up to 33A.

mapped  register  file.  Output  voltages  are  dynamically changed  through  a  3-wire  serial  VID  interface  (3-wire SVID: clock, data, ALERT ), allowing the switching regulators to be individually programmed to different voltages (Table 1). A slew-rate controller allows controlled transitions between VID codes, and controlled soft-start. SVID also  allows  each  regulator  to  be  individually  set  into  a low-power pulse-skipping state. Transient-phase overlap improves  the  response  of  the  pseudo  fixed-frequency architecture,  reducing  the  total  output  capacitance  for the CPU core.

## Setting the Output Voltages

## 8-Bit DAC

Both CPU and GPU cores are fully compliant with Intel's IMVP-7 serial VID communication and control specification. CPU and GPU core outputs are controlled independently  by  writing  the  appropriate  data  into  a  function- The  MAX17039  includes  output  overvoltage  protection (OVP), undervoltage protection (UVP), and thermal-fault protection. When any of these protection features detect a  fault,  the  controller  shuts  down  both  channels.  True differential  current  sensing  improves  current  limit  and load-line accuracy.

Table 1. MAX17039 IMVP-7 Output-Voltage SVID 8-Bit DAC Codes

|   LINE NO. |   VID7 640mV |   VID6 320mV |   VID5 160mV |   VID4 80mV |   VID3 40mV |   VID2 20mV |   VID1 10mV |   VID0 5mV |   HEX1 | HEX0   |   DAC SETPOINT (V) | ACCURACY ( Q % of VID)   |
|------------|--------------|--------------|--------------|-------------|-------------|-------------|-------------|------------|--------|--------|--------------------|--------------------------|
|          0 |            0 |            0 |            0 |           0 |           0 |           0 |           0 |          0 |      0 | 0      |             0.0000 | -                        |
|          1 |            0 |            0 |            0 |           0 |           0 |           0 |           0 |          1 |      0 | 1      |             0.2500 | 35mV                     |
|          2 |            0 |            0 |            0 |           0 |           0 |           0 |           1 |          0 |      0 | 2      |             0.2550 | 35mV                     |
|          3 |            0 |            0 |            0 |           0 |           0 |           0 |           1 |          1 |      0 | 3      |             0.2600 | 35mV                     |
|          4 |            0 |            0 |            0 |           0 |           0 |           1 |           0 |          0 |      0 | 4      |             0.2650 | 35mV                     |
|          5 |            0 |            0 |            0 |           0 |           0 |           1 |           0 |          1 |      0 | 5      |             0.2700 | 35mV                     |
|          6 |            0 |            0 |            0 |           0 |           0 |           1 |           1 |          0 |      0 | 6      |             0.2750 | 35mV                     |
|          7 |            0 |            0 |            0 |           0 |           0 |           1 |           1 |          1 |      0 | 7      |             0.2800 | 35mV                     |
|          8 |            0 |            0 |            0 |           0 |           1 |           0 |           0 |          0 |      0 | 8      |             0.2850 | 35mV                     |
|          9 |            0 |            0 |            0 |           0 |           1 |           0 |           0 |          1 |      0 | 9      |             0.2900 | 35mV                     |
|         10 |            0 |            0 |            0 |           0 |           1 |           0 |           1 |          0 |      0 | A      |             0.2950 | 35mV                     |
|         11 |            0 |            0 |            0 |           0 |           1 |           0 |           1 |          1 |      0 | B      |             0.3000 | 35mV                     |
|         12 |            0 |            0 |            0 |           0 |           1 |           1 |           0 |          0 |      0 | C      |             0.3050 | 35mV                     |
|         13 |            0 |            0 |            0 |           0 |           1 |           1 |           0 |          1 |      0 | D      |             0.3100 | 35mV                     |
|         14 |            0 |            0 |            0 |           0 |           1 |           1 |           1 |          0 |      0 | E      |             0.3150 | 35mV                     |
|         15 |            0 |            0 |            0 |           0 |           1 |           1 |           1 |          1 |      0 | F      |             0.3200 | 35mV                     |
|         16 |            0 |            0 |            0 |           1 |           0 |           0 |           0 |          0 |      1 | 0      |             0.3250 | 35mV                     |
|         17 |            0 |            0 |            0 |           1 |           0 |           0 |           0 |          1 |      1 | 1      |             0.3300 | 35mV                     |
|         18 |            0 |            0 |            0 |           1 |           0 |           0 |           1 |          0 |      1 | 2      |             0.3350 | 35mV                     |
|         19 |            0 |            0 |            0 |           1 |           0 |           0 |           1 |          1 |      1 | 3      |             0.3400 | 35mV                     |
|         20 |            0 |            0 |            0 |           1 |           0 |           1 |           0 |          0 |      1 | 4      |             0.3450 | 35mV                     |
|         21 |            0 |            0 |            0 |           1 |           0 |           1 |           0 |          1 |      1 | 5      |             0.3500 | 35mV                     |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    11

## Evaluates:  MAX17000/MAX17007A/MAX17039

## MAX17039 Evaluation Kit

## Table 1. MAX17039 IMVP-7 Output-Voltage SVID 8-Bit DAC Codes (continued)

|   LINE NO. |   VID7 640mV |   VID6 320mV |   VID5 160mV |   VID4 80mV |   VID3 40mV |   VID2 20mV |   VID1 10mV |   VID0 5mV |   HEX1 | HEX0   |   DAC SETPOINT (V) | ACCURACY ( Q % of VID)   |
|------------|--------------|--------------|--------------|-------------|-------------|-------------|-------------|------------|--------|--------|--------------------|--------------------------|
|         22 |            0 |            0 |            0 |           1 |           0 |           1 |           1 |          0 |      1 | 6      |             0.3550 | 35mV                     |
|         23 |            0 |            0 |            0 |           1 |           0 |           1 |           1 |          1 |      1 | 7      |             0.3600 | 35mV                     |
|         24 |            0 |            0 |            0 |           1 |           1 |           0 |           0 |          0 |      1 | 8      |             0.3650 | 35mV                     |
|         25 |            0 |            0 |            0 |           1 |           1 |           0 |           0 |          1 |      1 | 9      |             0.3700 | 35mV                     |
|         26 |            0 |            0 |            0 |           1 |           1 |           0 |           1 |          0 |      1 | A      |             0.3750 | 35mV                     |
|         27 |            0 |            0 |            0 |           1 |           1 |           0 |           1 |          1 |      1 | B      |             0.3800 | 35mV                     |
|         28 |            0 |            0 |            0 |           1 |           1 |           1 |           0 |          0 |      1 | C      |             0.3850 | 35mV                     |
|         29 |            0 |            0 |            0 |           1 |           1 |           1 |           0 |          1 |      1 | D      |             0.3900 | 35mV                     |
|         30 |            0 |            0 |            0 |           1 |           1 |           1 |           1 |          0 |      1 | E      |             0.3950 | 35mV                     |
|         31 |            0 |            0 |            0 |           1 |           1 |           1 |           1 |          1 |      1 | F      |             0.4000 | 35mV                     |
|         32 |            0 |            0 |            1 |           0 |           0 |           0 |           0 |          0 |      2 | 0      |             0.4050 | 35mV                     |
|         33 |            0 |            0 |            1 |           0 |           0 |           0 |           0 |          1 |      2 | 1      |             0.4100 | 35mV                     |
|         34 |            0 |            0 |            1 |           0 |           0 |           0 |           1 |          0 |      2 | 2      |             0.4150 | 35mV                     |
|         35 |            0 |            0 |            1 |           0 |           0 |           0 |           1 |          1 |      2 | 3      |             0.4200 | 35mV                     |
|         36 |            0 |            0 |            1 |           0 |           0 |           1 |           0 |          0 |      2 | 4      |             0.4250 | 35mV                     |
|         37 |            0 |            0 |            1 |           0 |           0 |           1 |           0 |          1 |      2 | 5      |             0.4300 | 35mV                     |
|         38 |            0 |            0 |            1 |           0 |           0 |           1 |           1 |          0 |      2 | 6      |             0.4350 | 35mV                     |
|         39 |            0 |            0 |            1 |           0 |           0 |           1 |           1 |          1 |      2 | 7      |             0.4400 | 35mV                     |
|         40 |            0 |            0 |            1 |           0 |           1 |           0 |           0 |          0 |      2 | 8      |             0.4450 | 35mV                     |
|         41 |            0 |            0 |            1 |           0 |           1 |           0 |           0 |          1 |      2 | 9      |             0.4500 | 35mV                     |
|         42 |            0 |            0 |            1 |           0 |           1 |           0 |           1 |          0 |      2 | A      |             0.4550 | 35mV                     |
|         43 |            0 |            0 |            1 |           0 |           1 |           0 |           1 |          1 |      2 | B      |             0.4600 | 35mV                     |
|         44 |            0 |            0 |            1 |           0 |           1 |           1 |           0 |          0 |      2 | C      |             0.4650 | 35mV                     |
|         45 |            0 |            0 |            1 |           0 |           1 |           1 |           0 |          1 |      2 | D      |             0.4700 | 35mV                     |
|         46 |            0 |            0 |            1 |           0 |           1 |           1 |           1 |          0 |      2 | E      |             0.4750 | 35mV                     |
|         47 |            0 |            0 |            1 |           0 |           1 |           1 |           1 |          1 |      2 | F      |             0.4800 | 35mV                     |
|         48 |            0 |            0 |            1 |           1 |           0 |           0 |           0 |          0 |      3 | 0      |             0.4850 | 35mV                     |
|         49 |            0 |            0 |            1 |           1 |           0 |           0 |           0 |          1 |      3 | 1      |             0.4900 | 35mV                     |
|         50 |            0 |            0 |            1 |           1 |           0 |           0 |           1 |          0 |      3 | 2      |             0.4950 | 35mV                     |
|         51 |            0 |            0 |            1 |           1 |           0 |           0 |           1 |          1 |      3 | 3      |             0.5000 | 8mV                      |
|         52 |            0 |            0 |            1 |           1 |           0 |           1 |           0 |          0 |      3 | 4      |             0.5050 | 8mV                      |
|         53 |            0 |            0 |            1 |           1 |           0 |           1 |           0 |          1 |      3 | 5      |             0.5100 | 8mV                      |
|         54 |            0 |            0 |            1 |           1 |           0 |           1 |           1 |          0 |      3 | 6      |             0.5150 | 8mV                      |
|         55 |            0 |            0 |            1 |           1 |           0 |           1 |           1 |          1 |      3 | 7      |             0.5200 | 8mV                      |
|         56 |            0 |            0 |            1 |           1 |           1 |           0 |           0 |          0 |      3 | 8      |             0.5250 | 8mV                      |
|         57 |            0 |            0 |            1 |           1 |           1 |           0 |           0 |          1 |      3 | 9      |             0.5300 | 8mV                      |
|         58 |            0 |            0 |            1 |           1 |           1 |           0 |           1 |          0 |      3 | A      |             0.5350 | 8mV                      |
|         59 |            0 |            0 |            1 |           1 |           1 |           0 |           1 |          1 |      3 | B      |             0.5400 | 8mV                      |
|         60 |            0 |            0 |            1 |           1 |           1 |           1 |           0 |          0 |      3 | C      |             0.5450 | 8mV                      |
|         61 |            0 |            0 |            1 |           1 |           1 |           1 |           0 |          1 |      3 | D      |             0.5500 | 8mV                      |
|         62 |            0 |            0 |            1 |           1 |           1 |           1 |           1 |          0 |      3 | E      |             0.5550 | 8mV                      |

12     �������������������������������������������������������������������������������������

<!-- image -->

## MAX17039 Evaluation Kit

Table 1. MAX17039 IMVP-7 Output-Voltage SVID 8-Bit DAC Codes (continued)

|   LINE NO. |   VID7 640mV |   VID6 320mV |   VID5 160mV |   VID4 80mV |   VID3 40mV |   VID2 20mV |   VID1 10mV | VID0 5mV   | HEX1   | HEX0 DAC (V)   |   SETPOINT | ACCURACY ( Q % of VID)   |
|------------|--------------|--------------|--------------|-------------|-------------|-------------|-------------|------------|--------|----------------|------------|--------------------------|
|         63 |            0 |            0 |            1 |           1 |           1 |           1 |           1 | 1 3        | F      |                |     0.5600 | 8mV                      |
|         64 |            0 |            1 |            0 |           0 |           0 |           0 |           0 | 0          | 4      | 0              |     0.5650 | 8mV                      |
|         65 |            0 |            1 |            0 |           0 |           0 |           0 |           0 | 1          | 4      | 1              |     0.5700 | 8mV                      |
|         66 |            0 |            1 |            0 |           0 |           0 |           0 |           1 | 0          | 4      | 2              |     0.5750 | 8mV                      |
|         67 |            0 |            1 |            0 |           0 |           0 |           0 |           1 | 1          | 4      | 3              |     0.5800 | 8mV                      |
|         68 |            0 |            1 |            0 |           0 |           0 |           1 |           0 | 0          | 4      | 4              |     0.5850 | 8mV                      |
|         69 |            0 |            1 |            0 |           0 |           0 |           1 |           0 | 1          | 4      | 5              |     0.5900 | 8mV                      |
|         70 |            0 |            1 |            0 |           0 |           0 |           1 |           1 | 0          | 4      | 6              |     0.5950 | 8mV                      |
|         71 |            0 |            1 |            0 |           0 |           0 |           1 |           1 | 1          | 4      | 7              |     0.6000 | 8mV                      |
|         72 |            0 |            1 |            0 |           0 |           1 |           0 |           0 | 0          | 4      | 8              |     0.6050 | 8mV                      |
|         73 |            0 |            1 |            0 |           0 |           1 |           0 |           0 | 1          | 4      | 9              |     0.6100 | 8mV                      |
|         74 |            0 |            1 |            0 |           0 |           1 |           0 |           1 | 0          | 4      | A              |     0.6150 | 8mV                      |
|         75 |            0 |            1 |            0 |           0 |           1 |           0 |           1 | 1          | 4      | B              |     0.6200 | 8mV                      |
|         76 |            0 |            1 |            0 |           0 |           1 |           1 |           0 | 0          | 4      | C              |     0.6250 | 8mV                      |
|         77 |            0 |            1 |            0 |           0 |           1 |           1 |           0 | 1          | 4      | D              |     0.6300 | 8mV                      |
|         78 |            0 |            1 |            0 |           0 |           1 |           1 |           1 | 0          | 4      | E              |     0.6350 | 8mV                      |
|         79 |            0 |            1 |            0 |           0 |           1 |           1 |           1 | 1          | 4      | F              |     0.6400 | 8mV                      |
|         80 |            0 |            1 |            0 |           1 |           0 |           0 |           0 | 0          | 5      | 0              |     0.6450 | 8mV                      |
|         81 |            0 |            1 |            0 |           1 |           0 |           0 |           0 | 1          | 5      | 1              |     0.6500 | 8mV                      |
|         82 |            0 |            1 |            0 |           1 |           0 |           0 |           1 | 0          | 5      | 2              |     0.6550 | 8mV                      |
|         83 |            0 |            1 |            0 |           1 |           0 |           0 |           1 | 1          | 5      | 3              |     0.6600 | 8mV                      |
|         84 |            0 |            1 |            0 |           1 |           0 |           1 |           0 | 0          | 5      | 4              |     0.6650 | 8mV                      |
|         85 |            0 |            1 |            0 |           1 |           0 |           1 |           0 | 1          | 5      | 5              |     0.6700 | 8mV                      |
|         86 |            0 |            1 |            0 |           1 |           0 |           1 |           1 | 0          | 5      | 6              |     0.6750 | 8mV                      |
|         87 |            0 |            1 |            0 |           1 |           0 |           1 |           1 | 1          | 5      | 7              |     0.6800 | 8mV                      |
|         88 |            0 |            1 |            0 |           1 |           1 |           0 |           0 | 0          | 5      | 8              |     0.6850 | 8mV                      |
|         89 |            0 |            1 |            0 |           1 |           1 |           0 |           0 | 1          | 5      | 9              |     0.6900 | 8mV                      |
|         90 |            0 |            1 |            0 |           1 |           1 |           0 |           1 | 0          | 5      | A              |     0.6950 | 8mV                      |
|         91 |            0 |            1 |            0 |           1 |           1 |           0 |           1 | 1          | 5      | B              |     0.7000 | 8mV                      |
|         92 |            0 |            1 |            0 |           1 |           1 |           1 |           0 | 0          | 5      | C              |     0.7050 | 8mV                      |
|         93 |            0 |            1 |            0 |           1 |           1 |           1 |           0 | 1          | 5      | D              |     0.7100 | 8mV                      |
|         94 |            0 |            1 |            0 |           1 |           1 |           1 |           1 | 0          | 5      | E              |     0.7150 | 8mV                      |
|         95 |            0 |            1 |            0 |           1 |           1 |           1 |           1 | 1          | 5      | F              |     0.7200 | 8mV                      |
|         96 |            0 |            1 |            1 |           0 |           0 |           0 |           0 | 0          | 6      | 0              |     0.7250 | 8mV                      |
|         97 |            0 |            1 |            1 |           0 |           0 |           0 |           0 | 1          | 6      | 1              |     0.7300 | 8mV                      |
|         98 |            0 |            1 |            1 |           0 |           0 |           0 |           1 | 0          | 6      | 2              |     0.7350 | 8mV                      |
|         99 |            0 |            1 |            1 |           0 |           0 |           0 |           1 | 1          | 6      | 3              |     0.7400 | 8mV                      |
|        100 |            0 |            1 |            1 |           0 |           0 |           1 |           0 | 0          | 6      | 4              |     0.7450 | 8mV                      |
|        101 |            0 |            1 |            1 |           0 |           0 |           1 |           0 | 1          | 6      | 5              |     0.7500 | 8mV                      |
|        102 |            0 |            1 |            1 |           0 |           0 |           1 |           1 | 0          | 6      | 6              |     0.7550 | 8mV                      |
|        103 |            0 |            1 |            1 |           0 |           0 |           1 |           1 | 1          | 6      | 7              |     0.7600 | 8mV                      |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    13

## Evaluates:  MAX17000/MAX17007A/MAX17039

## Evaluates:  MAX17000/MAX17007A/MAX17039

## MAX17039 Evaluation Kit

## Table 1. MAX17039 IMVP-7 Output-Voltage SVID 8-Bit DAC Codes (continued)

|   LINE NO. |   VID7 640mV |   VID6 320mV |   VID5 160mV |   VID4 80mV |   VID3 40mV |   VID2 20mV |   VID1 10mV |   VID0 5mV |   HEX1 | HEX0   |   DAC SETPOINT (V) | ACCURACY ( Q % of VID)   |
|------------|--------------|--------------|--------------|-------------|-------------|-------------|-------------|------------|--------|--------|--------------------|--------------------------|
|        104 |            0 |            1 |            1 |           0 |           1 |           0 |           0 |          0 |      6 | 8      |             0.7650 | 8mV                      |
|        105 |            0 |            1 |            1 |           0 |           1 |           0 |           0 |          1 |      6 | 9      |             0.7700 | 8mV                      |
|        106 |            0 |            1 |            1 |           0 |           1 |           0 |           1 |          0 |      6 | A      |             0.7750 | 8mV                      |
|        107 |            0 |            1 |            1 |           0 |           1 |           0 |           1 |          1 |      6 | B      |             0.7800 | 8mV                      |
|        108 |            0 |            1 |            1 |           0 |           1 |           1 |           0 |          0 |      6 | C      |             0.7850 | 8mV                      |
|        109 |            0 |            1 |            1 |           0 |           1 |           1 |           0 |          1 |      6 | D      |             0.7900 | 8mV                      |
|        110 |            0 |            1 |            1 |           0 |           1 |           1 |           1 |          0 |      6 | E      |             0.7950 | 8mV                      |
|        111 |            0 |            1 |            1 |           0 |           1 |           1 |           1 |          1 |      6 | F      |             0.8000 | 5mV                      |
|        112 |            0 |            1 |            1 |           1 |           0 |           0 |           0 |          0 |      7 | 0      |             0.8050 | 5mV                      |
|        113 |            0 |            1 |            1 |           1 |           0 |           0 |           0 |          1 |      7 | 1      |             0.8100 | 5mV                      |
|        114 |            0 |            1 |            1 |           1 |           0 |           0 |           1 |          0 |      7 | 2      |             0.8150 | 5mV                      |
|        115 |            0 |            1 |            1 |           1 |           0 |           0 |           1 |          1 |      7 | 3      |             0.8200 | 5mV                      |
|        116 |            0 |            1 |            1 |           1 |           0 |           1 |           0 |          0 |      7 | 4      |             0.8250 | 5mV                      |
|        117 |            0 |            1 |            1 |           1 |           0 |           1 |           0 |          1 |      7 | 5      |             0.8300 | 5mV                      |
|        118 |            0 |            1 |            1 |           1 |           0 |           1 |           1 |          0 |      7 | 6      |             0.8350 | 5mV                      |
|        119 |            0 |            1 |            1 |           1 |           0 |           1 |           1 |          1 |      7 | 7      |             0.8400 | 5mV                      |
|        120 |            0 |            1 |            1 |           1 |           1 |           0 |           0 |          0 |      7 | 8      |             0.8450 | 5mV                      |
|        121 |            0 |            1 |            1 |           1 |           1 |           0 |           0 |          1 |      7 | 9      |             0.8500 | 5mV                      |
|        122 |            0 |            1 |            1 |           1 |           1 |           0 |           1 |          0 |      7 | A      |             0.8550 | 5mV                      |
|        123 |            0 |            1 |            1 |           1 |           1 |           0 |           1 |          1 |      7 | B      |             0.8600 | 5mV                      |
|        124 |            0 |            1 |            1 |           1 |           1 |           1 |           0 |          0 |      7 | C      |             0.8650 | 5mV                      |
|        125 |            0 |            1 |            1 |           1 |           1 |           1 |           0 |          1 |      7 | D      |             0.8700 | 5mV                      |
|        126 |            0 |            1 |            1 |           1 |           1 |           1 |           1 |          0 |      7 | E      |             0.8750 | 5mV                      |
|        127 |            0 |            1 |            1 |           1 |           1 |           1 |           1 |          1 |      7 | F      |             0.8800 | 5mV                      |
|        128 |            1 |            0 |            0 |           0 |           0 |           0 |           0 |          0 |      8 | 0      |             0.8850 | 5mV                      |
|        129 |            1 |            0 |            0 |           0 |           0 |           0 |           0 |          1 |      8 | 1      |             0.8900 | 5mV                      |
|        130 |            1 |            0 |            0 |           0 |           0 |           0 |           1 |          0 |      8 | 2      |             0.8950 | 5mV                      |
|        131 |            1 |            0 |            0 |           0 |           0 |           0 |           1 |          1 |      8 | 3      |             0.9000 | 5mV                      |
|        132 |            1 |            0 |            0 |           0 |           0 |           1 |           0 |          0 |      8 | 4      |             0.9050 | 5mV                      |
|        133 |            1 |            0 |            0 |           0 |           0 |           1 |           0 |          1 |      8 | 5      |             0.9100 | 5mV                      |
|        134 |            1 |            0 |            0 |           0 |           0 |           1 |           1 |          0 |      8 | 6      |             0.9150 | 5mV                      |
|        135 |            1 |            0 |            0 |           0 |           0 |           1 |           1 |          1 |      8 | 7      |             0.9200 | 5mV                      |
|        136 |            1 |            0 |            0 |           0 |           1 |           0 |           0 |          0 |      8 | 8      |             0.9250 | 5mV                      |
|        137 |            1 |            0 |            0 |           0 |           1 |           0 |           0 |          1 |      8 | 9      |             0.9300 | 5mV                      |
|        138 |            1 |            0 |            0 |           0 |           1 |           0 |           1 |          0 |      8 | A      |             0.9350 | 5mV                      |
|        139 |            1 |            0 |            0 |           0 |           1 |           0 |           1 |          1 |      8 | B      |             0.9400 | 5mV                      |
|        140 |            1 |            0 |            0 |           0 |           1 |           1 |           0 |          0 |      8 | C      |             0.9450 | 5mV                      |
|        141 |            1 |            0 |            0 |           0 |           1 |           1 |           0 |          1 |      8 | D      |             0.9500 | 5mV                      |
|        142 |            1 |            0 |            0 |           0 |           1 |           1 |           1 |          0 |      8 | E      |             0.9550 | 5mV                      |
|        143 |            1 |            0 |            0 |           0 |           1 |           1 |           1 |          1 |      8 | F      |             0.9600 | 5mV                      |
|        144 |            1 |            0 |            0 |           1 |           0 |           0 |           0 |          0 |      9 | 0      |             0.9650 | 5mV                      |

14     �������������������������������������������������������������������������������������

<!-- image -->

## MAX17039 Evaluation Kit

Table 1. MAX17039 IMVP-7 Output-Voltage SVID 8-Bit DAC Codes (continued)

|   LINE NO. |   VID7 640mV |   VID6 320mV |   VID5 160mV |   VID4 80mV |   VID3 40mV |   VID2 20mV |   VID1 10mV |   VID0 5mV | HEX1   | HEX0 DAC (V)   |   SETPOINT | ACCURACY ( Q % of VID)   |
|------------|--------------|--------------|--------------|-------------|-------------|-------------|-------------|------------|--------|----------------|------------|--------------------------|
|        145 |            1 |            0 |            0 |           1 |           0 |           0 |           0 |          1 | 9      | 1              |     0.9700 | 5mV                      |
|        146 |            1 |            0 |            0 |           1 |           0 |           0 |           1 |          0 | 9      | 2              |     0.9750 | 5mV                      |
|        147 |            1 |            0 |            0 |           1 |           0 |           0 |           1 |          1 | 9      | 3              |     0.9800 | 5mV                      |
|        148 |            1 |            0 |            0 |           1 |           0 |           1 |           0 |          0 | 9      | 4              |     0.9850 | 5mV                      |
|        149 |            1 |            0 |            0 |           1 |           0 |           1 |           0 |          1 | 9      | 5              |     0.9900 | 5mV                      |
|        150 |            1 |            0 |            0 |           1 |           0 |           1 |           1 |          0 | 9      | 6              |     0.9950 | 5mV                      |
|        151 |            1 |            0 |            0 |           1 |           0 |           1 |           1 |          1 | 9      | 7              |     1.0000 | 0.5%                     |
|        152 |            1 |            0 |            0 |           1 |           1 |           0 |           0 |          0 | 9      | 8              |     1.0050 | 0.5%                     |
|        153 |            1 |            0 |            0 |           1 |           1 |           0 |           0 |          1 | 9      | 9              |     1.0100 | 0.5%                     |
|        154 |            1 |            0 |            0 |           1 |           1 |           0 |           1 |          0 | 9      | A              |     1.0150 | 0.5%                     |
|        155 |            1 |            0 |            0 |           1 |           1 |           0 |           1 |          1 | 9      | B              |     1.0200 | 0.5%                     |
|        156 |            1 |            0 |            0 |           1 |           1 |           1 |           0 |          0 | 9      | C              |     1.0250 | 0.5%                     |
|        157 |            1 |            0 |            0 |           1 |           1 |           1 |           0 |          1 | 9      | D              |     1.0300 | 0.5%                     |
|        158 |            1 |            0 |            0 |           1 |           1 |           1 |           1 |          0 | 9      | E              |     1.0350 | 0.5%                     |
|        159 |            1 |            0 |            0 |           1 |           1 |           1 |           1 |          1 | 9      | F              |     1.0400 | 0.5%                     |
|        160 |            1 |            0 |            1 |           0 |           0 |           0 |           0 |          0 | A      | 0              |     1.0450 | 0.5%                     |
|        161 |            1 |            0 |            1 |           0 |           0 |           0 |           0 |          1 | A      | 1              |     1.0500 | 0.5%                     |
|        162 |            1 |            0 |            1 |           0 |           0 |           0 |           1 |          0 | A      | 2              |     1.0550 | 0.5%                     |
|        163 |            1 |            0 |            1 |           0 |           0 |           0 |           1 |          1 | A      | 3              |     1.0600 | 0.5%                     |
|        164 |            1 |            0 |            1 |           0 |           0 |           1 |           0 |          0 | A      | 4              |     1.0650 | 0.5%                     |
|        165 |            1 |            0 |            1 |           0 |           0 |           1 |           0 |          1 | A      | 5              |     1.0700 | 0.5%                     |
|        166 |            1 |            0 |            1 |           0 |           0 |           1 |           1 |          0 | A      | 6              |     1.0750 | 0.5%                     |
|        167 |            1 |            0 |            1 |           0 |           0 |           1 |           1 |          1 | A      | 7              |     1.0800 | 0.5%                     |
|        168 |            1 |            0 |            1 |           0 |           1 |           0 |           0 |          0 | A      | 8              |     1.0850 | 0.5%                     |
|        169 |            1 |            0 |            1 |           0 |           1 |           0 |           0 |          1 | A      | 9              |     1.0900 | 0.5%                     |
|        170 |            1 |            0 |            1 |           0 |           1 |           0 |           1 |          0 | A      | A              |     1.0950 | 0.5%                     |
|        171 |            1 |            0 |            1 |           0 |           1 |           0 |           1 |          1 | A      | B              |     1.1000 | 0.5%                     |
|        172 |            1 |            0 |            1 |           0 |           1 |           1 |           0 |          0 | A      | C              |     1.1050 | 0.5%                     |
|        173 |            1 |            0 |            1 |           0 |           1 |           1 |           0 |          1 | A      | D              |     1.1100 | 0.5%                     |
|        174 |            1 |            0 |            1 |           0 |           1 |           1 |           1 |          0 | A      | E              |     1.1150 | 0.5%                     |
|        175 |            1 |            0 |            1 |           0 |           1 |           1 |           1 |          1 | A      | F              |     1.1200 | 0.5%                     |
|        176 |            1 |            0 |            1 |           1 |           0 |           0 |           0 |          0 | B      | 0              |     1.1250 | 0.5%                     |
|        177 |            1 |            0 |            1 |           1 |           0 |           0 |           0 |          1 | B      | 1              |     1.1300 | 0.5%                     |
|        178 |            1 |            0 |            1 |           1 |           0 |           0 |           1 |          0 | B      | 2              |     1.1350 | 0.5%                     |
|        179 |            1 |            0 |            1 |           1 |           0 |           0 |           1 |          1 | B      | 3              |     1.1400 | 0.5%                     |
|        180 |            1 |            0 |            1 |           1 |           0 |           1 |           0 |          0 | B      | 4              |     1.1450 | 0.5%                     |
|        181 |            1 |            0 |            1 |           1 |           0 |           1 |           0 |          1 | B      | 5              |     1.1500 | 0.5%                     |
|        182 |            1 |            0 |            1 |           1 |           0 |           1 |           1 |          0 | B      | 6              |     1.1550 | 0.5%                     |
|        183 |            1 |            0 |            1 |           1 |           0 |           1 |           1 |          1 | B      | 7              |     1.1600 | 0.5%                     |
|        184 |            1 |            0 |            1 |           1 |           1 |           0 |           0 |          0 | B      | 8              |     1.1650 | 0.5%                     |
|        185 |            1 |            0 |            1 |           1 |           1 |           0 |           0 |          1 | B      | 9              |     1.1700 | 0.5%                     |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    15

## Evaluates:  MAX17000/MAX17007A/MAX17039

## Evaluates:  MAX17000/MAX17007A/MAX17039

## MAX17039 Evaluation Kit

## Table 1. MAX17039 IMVP-7 Output-Voltage SVID 8-Bit DAC Codes (continued)

|   LINE NO. |   VID7 640mV |   VID6 320mV |   VID5 160mV |   VID4 80mV |   VID3 40mV |   VID2 20mV |   VID1 10mV |   VID0 5mV | HEX1   | HEX0   |   DAC SETPOINT (V) | ACCURACY ( Q % of VID)   |
|------------|--------------|--------------|--------------|-------------|-------------|-------------|-------------|------------|--------|--------|--------------------|--------------------------|
|        186 |            1 |            0 |            1 |           1 |           1 |           0 |           1 |          0 | B      | A      |             1.1750 | 0.5%                     |
|        187 |            1 |            0 |            1 |           1 |           1 |           0 |           1 |          1 | B      | B      |             1.1800 | 0.5%                     |
|        188 |            1 |            0 |            1 |           1 |           1 |           1 |           0 |          0 | B      | C      |             1.1850 | 0.5%                     |
|        189 |            1 |            0 |            1 |           1 |           1 |           1 |           0 |          1 | B      | D      |             1.1900 | 0.5%                     |
|        190 |            1 |            0 |            1 |           1 |           1 |           1 |           1 |          0 | B      | E      |             1.1950 | 0.5%                     |
|        191 |            1 |            0 |            1 |           1 |           1 |           1 |           1 |          1 | B      | F      |             1.2000 | 0.5%                     |
|        192 |            1 |            1 |            0 |           0 |           0 |           0 |           0 |          0 | C      | 0      |             1.2050 | 0.5%                     |
|        193 |            1 |            1 |            0 |           0 |           0 |           0 |           0 |          1 | C      | 1      |             1.2100 | 0.5%                     |
|        194 |            1 |            1 |            0 |           0 |           0 |           0 |           1 |          0 | C      | 2      |             1.2150 | 0.5%                     |
|        195 |            1 |            1 |            0 |           0 |           0 |           0 |           1 |          1 | C      | 3      |             1.2200 | 0.5%                     |
|        196 |            1 |            1 |            0 |           0 |           0 |           1 |           0 |          0 | C      | 4      |             1.2250 | 0.5%                     |
|        197 |            1 |            1 |            0 |           0 |           0 |           1 |           0 |          1 | C      | 5      |             1.2300 | 0.5%                     |
|        198 |            1 |            1 |            0 |           0 |           0 |           1 |           1 |          0 | C      | 6      |             1.2350 | 0.5%                     |
|        199 |            1 |            1 |            0 |           0 |           0 |           1 |           1 |          1 | C      | 7      |             1.2400 | 0.5%                     |
|        200 |            1 |            1 |            0 |           0 |           1 |           0 |           0 |          0 | C      | 8      |             1.2450 | 0.5%                     |
|        201 |            1 |            1 |            0 |           0 |           1 |           0 |           0 |          1 | C      | 9      |             1.2500 | 0.5%                     |
|        202 |            1 |            1 |            0 |           0 |           1 |           0 |           1 |          0 | C      | A      |             1.2550 | 0.5%                     |
|        203 |            1 |            1 |            0 |           0 |           1 |           0 |           1 |          1 | C      | B      |             1.2600 | 0.5%                     |
|        204 |            1 |            1 |            0 |           0 |           1 |           1 |           0 |          0 | C      | C      |             1.2650 | 0.5%                     |
|        205 |            1 |            1 |            0 |           0 |           1 |           1 |           0 |          1 | C      | D      |             1.2700 | 0.5%                     |
|        206 |            1 |            1 |            0 |           0 |           1 |           1 |           1 |          0 | C      | E      |             1.2750 | 0.5%                     |
|        207 |            1 |            1 |            0 |           0 |           1 |           1 |           1 |          1 | C      | F      |             1.2800 | 0.5%                     |
|        208 |            1 |            1 |            0 |           1 |           0 |           0 |           0 |          0 | D      | 0      |             1.2850 | 0.5%                     |
|        209 |            1 |            1 |            0 |           1 |           0 |           0 |           0 |          1 | D      | 1      |             1.2900 | 0.5%                     |
|        210 |            1 |            1 |            0 |           1 |           0 |           0 |           1 |          0 | D      | 2      |             1.2950 | 0.5%                     |
|        211 |            1 |            1 |            0 |           1 |           0 |           0 |           1 |          1 | D      | 3      |             1.3000 | 0.5%                     |
|        212 |            1 |            1 |            0 |           1 |           0 |           1 |           0 |          0 | D      | 4      |             1.3050 | 0.5%                     |
|        213 |            1 |            1 |            0 |           1 |           0 |           1 |           0 |          1 | D      | 5      |             1.3100 | 0.5%                     |
|        214 |            1 |            1 |            0 |           1 |           0 |           1 |           1 |          0 | D      | 6      |             1.3150 | 0.5%                     |
|        215 |            1 |            1 |            0 |           1 |           0 |           1 |           1 |          1 | D      | 7      |             1.3200 | 0.5%                     |
|        216 |            1 |            1 |            0 |           1 |           1 |           0 |           0 |          0 | D      | 8      |             1.3250 | 0.5%                     |
|        217 |            1 |            1 |            0 |           1 |           1 |           0 |           0 |          1 | D      | 9      |             1.3300 | 0.5%                     |
|        218 |            1 |            1 |            0 |           1 |           1 |           0 |           1 |          0 | D      | A      |             1.3350 | 0.5%                     |
|        219 |            1 |            1 |            0 |           1 |           1 |           0 |           1 |          1 | D      | B      |             1.3400 | 0.5%                     |
|        220 |            1 |            1 |            0 |           1 |           1 |           1 |           0 |          0 | D      | C      |             1.3450 | 0.5%                     |
|        221 |            1 |            1 |            0 |           1 |           1 |           1 |           0 |          1 | D      | D      |             1.3500 | 0.5%                     |
|        222 |            1 |            1 |            0 |           1 |           1 |           1 |           1 |          0 | D      | E      |             1.3550 | 0.5%                     |
|        223 |            1 |            1 |            0 |           1 |           1 |           1 |           1 |          1 | D      | F      |             1.3600 | 0.5%                     |
|        224 |            1 |            1 |            1 |           0 |           0 |           0 |           0 |          0 | E      | 0      |             1.3650 | 0.5%                     |
|        225 |            1 |            1 |            1 |           0 |           0 |           0 |           0 |          1 | E      | 1      |             1.3700 | 0.5%                     |
|        226 |            1 |            1 |            1 |           0 |           0 |           0 |           1 |          0 | E      | 2      |             1.3750 | 0.5%                     |

16     �������������������������������������������������������������������������������������

<!-- image -->

## MAX17039 Evaluation Kit

Table 1. MAX17039 IMVP-7 Output-Voltage SVID 8-Bit DAC Codes (continued)

|   LINE NO. |   VID7 640mV |   VID6 320mV |   VID5 160mV |   VID4 80mV |   VID3 40mV |   VID2 20mV |   VID1 10mV |   VID0 5mV | HEX1   | HEX0   |   DAC SETPOINT (V) | ACCURACY ( Q % of VID)   |
|------------|--------------|--------------|--------------|-------------|-------------|-------------|-------------|------------|--------|--------|--------------------|--------------------------|
|        227 |            1 |            1 |            1 |           0 |           0 |           0 |           1 |          1 | E      | 3      |             1.3800 | 0.5%                     |
|        228 |            1 |            1 |            1 |           0 |           0 |           1 |           0 |          0 | E      | 4      |             1.3850 | 0.5%                     |
|        229 |            1 |            1 |            1 |           0 |           0 |           1 |           0 |          1 | E      | 5      |             1.3900 | 0.5%                     |
|        230 |            1 |            1 |            1 |           0 |           0 |           1 |           1 |          0 | E      | 6      |             1.3950 | 0.5%                     |
|        231 |            1 |            1 |            1 |           0 |           0 |           1 |           1 |          1 | E      | 7      |             1.4000 | 0.5%                     |
|        232 |            1 |            1 |            1 |           0 |           1 |           0 |           0 |          0 | E      | 8      |             1.4050 | 0.5%                     |
|        233 |            1 |            1 |            1 |           0 |           1 |           0 |           0 |          1 | E      | 9      |             1.4100 | 0.5%                     |
|        234 |            1 |            1 |            1 |           0 |           1 |           0 |           1 |          0 | E      | A      |             1.4150 | 0.5%                     |
|        235 |            1 |            1 |            1 |           0 |           1 |           0 |           1 |          1 | E      | B      |             1.4200 | 0.5%                     |
|        236 |            1 |            1 |            1 |           0 |           1 |           1 |           0 |          0 | E      | C      |             1.4250 | 0.5%                     |
|        237 |            1 |            1 |            1 |           0 |           1 |           1 |           0 |          1 | E      | D      |             1.4300 | 0.5%                     |
|        238 |            1 |            1 |            1 |           0 |           1 |           1 |           1 |          0 | E      | E      |             1.4350 | 0.5%                     |
|        239 |            1 |            1 |            1 |           0 |           1 |           1 |           1 |          1 | E      | F      |             1.4400 | 0.5%                     |
|        240 |            1 |            1 |            1 |           1 |           0 |           0 |           0 |          0 | F      | 0      |             1.4450 | 0.5%                     |
|        241 |            1 |            1 |            1 |           1 |           0 |           0 |           0 |          1 | F      | 1      |             1.4500 | 0.5%                     |
|        242 |            1 |            1 |            1 |           1 |           0 |           0 |           1 |          0 | F      | 2      |             1.4550 | 0.5%                     |
|        243 |            1 |            1 |            1 |           1 |           0 |           0 |           1 |          1 | F      | 3      |             1.4600 | 0.5%                     |
|        244 |            1 |            1 |            1 |           1 |           0 |           1 |           0 |          0 | F      | 4      |             1.4650 | 0.5%                     |
|        245 |            1 |            1 |            1 |           1 |           0 |           1 |           0 |          1 | F      | 5      |             1.4700 | 0.5%                     |
|        246 |            1 |            1 |            1 |           1 |           0 |           1 |           1 |          0 | F      | 6      |             1.4750 | 0.5%                     |
|        247 |            1 |            1 |            1 |           1 |           0 |           1 |           1 |          1 | F      | 7      |             1.4800 | 0.5%                     |
|        248 |            1 |            1 |            1 |           1 |           1 |           0 |           0 |          0 | F      | 8      |             1.4850 | 0.5%                     |
|        249 |            1 |            1 |            1 |           1 |           1 |           0 |           0 |          1 | F      | 9      |             1.4900 | 0.5%                     |
|        250 |            1 |            1 |            1 |           1 |           1 |           0 |           1 |          0 | F      | A      |             1.4950 | 0.5%                     |
|        251 |            1 |            1 |            1 |           1 |           1 |           0 |           1 |          1 | F      | B      |             1.5000 | 0.5%                     |
|        252 |            1 |            1 |            1 |           1 |           1 |           1 |           0 |          0 | F      | C      |             1.5050 | 0.5%                     |
|        253 |            1 |            1 |            1 |           1 |           1 |           1 |           0 |          1 | F      | D      |             1.5100 | 0.5%                     |
|        254 |            1 |            1 |            1 |           1 |           1 |           1 |           1 |          0 | F      | E      |             1.5150 | 0.5%                     |
|        255 |            1 |            1 |            1 |           1 |           1 |           1 |           1 |          1 | F      | F      |             1.5200 | 0.5%                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    17

## Evaluates:  MAX17000/MAX17007A/MAX17039

## MAX17039 Evaluation Kit

## Reduced Power-Dissipation Voltage Positioning

The  MAX17039  includes  a  transconductance  amplifier for  adding  gain  to  the  voltage-positioning  sense  path. The amplifier's input is generated by summing the current-sense inputs, which differentially sense the voltage across the inductor's DCR. The transconductance amplifier's output connects to the voltage-positioned feedback input (FBA), so the resistance between FBA and VOUT (R17) determines the voltage-positioning gain. Resistor R17  (3.83k I )  provides  a  -1.9mV/A  voltage-positioning slope at the CPU output. Also, the resistance between FBB and VCCGT (R75) determines the voltage-positioning gain for the GPU output. Resistor R75 (8.06k I ) provides a -3.9mV/A voltage-positioning slope at the GPU output. Remote output and ground sensing eliminate any additional PCB voltage drops.

## Jumper JU4 Settings

## Shutdown Control Input

When VR\_ENABLE goes low (JU4 = GND), the MAX17039 enters the low-power shutdown mode. VRA\_READY and VRB\_ READY are pulled low immediately, and both output voltages ramp down at 1.2mV/ F s slew rate. When the controller reaches the 0V target, the drivers are disabled (DH\_ and DL\_ driven low), the reference is turned off, and the IC supply currents drop to 15 F A (max).

When a fault condition activates the shutdown sequence (output undervoltage lockout or thermal shutdown), the protection  circuitry  sets  the  fault  latch  to  prevent  the controller  from  restarting.  To  clear  the  fault  latch  and reactivate  the  MAX17039,  toggle  VR\_ENABLE or cycle VDD power.

## Evaluating the MAX17000 Circuit

The MAX17039 EV kit also demonstrates the MAX17000 DDR  memory-power  solution  circuit.  The  MAX17000 provides the regulated voltages required in a complete DDR  memory  system.  The  MAX17000  generates  the main-memory  voltage  (VCCDDR),  the  tracking  sinking/ sourcing  termination  voltage  (VTTDDR),  and  the  reference voltage (VTTR). The MAX17000 circuit operates at 400kHz  switching  frequency,  generates  a  preset  1.5V VCCDDR  main-memory  voltage  that  can  source  10A

## Table 2. Shutdown Mode (VR\_ENABLE)

| JU4 SHUNT POSITION   | VR_ENABLE PIN    | MAX17039 OUTPUT                                                                     |
|----------------------|------------------|-------------------------------------------------------------------------------------|
| Installed            | Connected to GND | Shutdown mode (V OUT = 0V and VCCGT = 0V)                                           |
| Not installed*       | Connected to VCC | Outputs enabled (V OUT and VCCGT are programmed by the 3-wire serial VID interface) |

18     �������������������������������������������������������������������������������������

from  a  7V  to  20V battery-input  range.  The  termination regulator provides a 0.75V VTTDDR supply that can sink/ source 2A. The termination reference buffer provides a 0.75V VTTR supply that can sink/source 3mA.

## Setting the VCCDDR Output Voltage

The MAX17000 feedback input (FB) is connected to a network of resistors that set the VCCDDR output voltage. By default, the output voltage is preset to a fixed 1.5V output  (R120  =  0 I ).  For  a  fixed  1.8V  output,  remove R120  and  install  a  short  across  resistor  R51.  For  an adjustable VCCDDR output (1V to 2.7V), connect FB to resistive-divider R119 and R120 from the output-voltage VCCDDR. Install feedback resistors with values according to the following equation:

<!-- formula-not-decoded -->

where VFB = 1V. Use 10k I for R120 and calculate R119 for the desired VCCDDR output voltage.

## MAX17000 Standby Control Input ( STDBY ) and Shutdown Control Input ( SHDN )

The MAX17000 features independent standby and shutdown controls  by  implementing  jumpers  JU5  and  JU6 to  control  the STDBY and SHDN inputs,  respectively. Jumpers  JU5  and  JU6  allow  flexible  sequencing  to support  all  DDR  operating  states.  The  shutdown  and standby control logic is illustrated in Table 3.

## Table 3. JU5 ( STDBY ) and JU6 ( SHDN ) Functions

| SHUNT POSITION   | SHUNT POSITION   | VCCDDR OUTPUT   | VTTDDR   |          |
|------------------|------------------|-----------------|----------|----------|
| JU5 ( STDBY )    | JU6 ( SHDN )     | VCCDDR OUTPUT   | VTTDDR   | VTTR     |
| X                | Not installed    | Disabled        | Disabled | Disabled |
| Installed*       | Installed*       | Enabled         | Enabled  | Enabled  |
| Not installed    | Installed        | Enabled         | Disabled | Enabled  |

X = Don't care. * Default position.

<!-- image -->

## MAX17039 Evaluation Kit

## Evaluating the MAX17007A Circuit

The  MAX17039  kit  also  demonstrates  the  MAX17007A I/O power-solution circuit.

This DC-DC converter steps down high-voltage batteries to generate low-voltage core or chipset/RAM bias supplies  in  notebook  computers.  The  MAX17007A  circuit generates  two  independent  I/O  voltages  (VTT1  and VTT2) from a 7V to 20V battery-input range. VTT1 and VTT2 are configured for 1.05V output voltages. The VTT1 output delivers up to 6A and the VTT2 output delivers up to 21A. The VTT1 and VTT2 outputs operate at 270kHz and  330kHz  switching  frequencies,  respectively.  Both outputs can be configured for other voltages by changing resistor R140, R141, R152, and R153 values. Refer to the MAX17007A IC data sheet for more details.

Table 4. Jumper JU15 Functions

| SHUNT POSITION   | EN1 PIN                       | VTT1 OUTPUT               |
|------------------|-------------------------------|---------------------------|
| Installed*       | Connected to VL5              | Enabled (VTT1 = 1.05V)    |
| Not installed    | Connected to GND through R144 | Shutdown mode (VTT1 = 0V) |

<!-- image -->

The  outputs  can  also  be  combined  to  operate  as  a 2-phase,  high-current,  single-output  regulator.  In  this mode the output is configured for either a preset, adjustable,  or  dynamically  adjustable  output  voltage  using REFIN1. Refer to the Combined-Mode Operation (FB2 = VCC) section in the MAX17007A IC data sheet for more details.

The MAX17007A provides access to the device's enable control pins (EN1 and EN2) through jumpers JU15 and JU16, respectively. EN1 is used to control the VTT1 output and EN2 is used to control the VTT2 output. When in combined mode, EN1 is used for output control and EN2 must be connected to GND. Tables 4 and 5 list the options for each output-enable pin.

Table 5. Jumper JU16 Functions

| SHUNT POSITION   | EN2 PIN                       | VTT2 OUTPUT               |
|------------------|-------------------------------|---------------------------|
| Installed*       | Connected to V3P3             | Enabled (VTT2 = 1.05V)    |
| Not installed    | Connected to GND through R155 | Shutdown mode (VTT2 = 0V) |

* Default position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    19

## MAX17039 Evaluation Kit

Figure 5a. MAX17039 EV Kit Schematic (Sheet 1 of 7)

<!-- image -->

20     �������������������������������������������������������������������������������������

<!-- image -->

XI

## MAX17039 Evaluation Kit

<!-- image -->

Figure 5b. MAX17039 EV Kit Schematic (Sheet 2 of 7)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    21

## MAX17039 Evaluation Kit

Figure 5c. MAX17039 EV Kit Schematic (Sheet 3 of 7)

<!-- image -->

22     �������������������������������������������������������������������������������������

XI

## MAX17039 Evaluation Kit

<!-- image -->

Figure 5d. MAX17039 EV Kit Schematic (Sheet 4 of 7)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    23

## MAX17039 Evaluation Kit

<!-- image -->

24     �������������������������������������������������������������������������������������

## MAX17039 Evaluation Kit

<!-- image -->

Figure 5f. MAX17039 EV Kit Schematic (Sheet 6 of 7)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    25

## MAX17039 Evaluation Kit

Figure 5g. MAX17039 EV Kit Schematic (Sheet 7 of 7)

<!-- image -->

26     �������������������������������������������������������������������������������������

<!-- image -->

## MAX17039 Evaluation Kit

<!-- image -->

Figure 6. MAX17039 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    27

## MAX17039 Evaluation Kit

Figure 7. MAX17039 EV Kit PCB Layout-Component Side

<!-- image -->

28     �������������������������������������������������������������������������������������

<!-- image -->

## MAX17039 Evaluation Kit

<!-- image -->

Figure 8. MAX17039 EV Kit PCB Layout-Internal Layer 2 (PGND Plane)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    29

## MAX17039 Evaluation Kit

Figure 9. MAX17039 EV Kit PCB Layout-Internal Layer 3 (Signal Layer)

<!-- image -->

30     �������������������������������������������������������������������������������������

<!-- image -->

## MAX17039 Evaluation Kit

<!-- image -->

Figure 10. MAX17039 EV Kit PCB Layout-Internal Layer 4 (AGND/PGND Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    31

## MAX17039 Evaluation Kit

Figure 11. MAX17039 EV Kit PCB Layout-Internal Layer 5 (PGND Layer)

<!-- image -->

32     �������������������������������������������������������������������������������������

<!-- image -->

## MAX17039 Evaluation Kit

<!-- image -->

Figure 12. MAX17039 EV Kit PCB Layout-Internal Layer 6 (Signal Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    33

## MAX17039 Evaluation Kit

Figure 13. MAX17039 EV Kit PCB Layout-Internal Layer 7 (PGND Layer)

<!-- image -->

34     �������������������������������������������������������������������������������������

<!-- image -->

## MAX17039 Evaluation Kit

<!-- image -->

Figure 14. MAX17039 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    35

## MAX17039 Evaluation Kit

Figure 15. MAX17039 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

36

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600