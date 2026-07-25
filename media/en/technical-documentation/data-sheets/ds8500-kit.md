<!-- lastmod 2022-08-02 -->
## DS850 Evaluation Kit

## General Description

The  DS8500  evaluation  kit  (EV  kit)  provides  a  convenient  platform  to  evaluate  the  DS8500  HART ®   modem. It allows quick evaluation through a demonstration mode and  in-depth  evaluation  using  HART  Communication Foundation (a part of FieldComm Group) tools.

## EV Kit Contents

- DS8500 EV Kit Board
- Micro-USB Cable

Evaluates: DS850

## Benefits and Features

- The EV Kit Provides Fast and Simple Evaluation by Providing a Total HART Communications Chain on Board
- Example HART Master and Field Device Circuits Demonstrate Usage in the Two Most Common HART Connection Configurations
- HART Registered Modem IC
- On-Board Isolated 4mA-20mA Communications Loop
- MAXQ622 USB Microcontroller with Demo Firmware
- External Connections Allow for Advanced Evaluation of the DS8500 in Other Configurations

Figure 1. USB Connection and READY LEDs

<!-- image -->

HART and HART Registered are registered trademarks of the HART Communication Foundation Corp.

<!-- image -->

## DS8500 Evaluation Kit

## Quick Start

The DS8500 EV kit comes with demonstration firmware already loaded.

- 1) Download and install the DS8500 EVKIT Software GUI at www.maximintegrated.com/evkitsoftware .
- 2) Use the included Micro-USB cable to connect and power the EV kit as shown in Figure 1.
- 3) Wait until the READY LEDs (circled in Figure 1) light after the board has finished USB enumeration. This can take several seconds.
- 4) Start the DS8500 EVKIT GUI from the Start menu by selecting Maxim Integrated | DS8500 | DS8500 Evaluation Kit . Figure 2 shows the demo GUI. It automatically finds the USB-connected EV kit.
- 5) Simply type messages from the Master or Field Device window and press the Send button to transmit and receive modulated data over the on-board 4-20mA current loop.
- 6) Observe the ACTIVE LEDs lighting while transmitting and receiving.

Figure 2. DS8500 EV Kit Demo GUI

<!-- image -->

Evaluates: DS8500

## Detailed Description of Hardware

Users must also use the DS8500 IC data sheet in conjunction with this EV kit data sheet.

## Power Supply

The EV kit uses USB power for all on-board devices.

## On-Board 4-20mA Current Loop

The  current  loop  is  isolated  from  board  ground  and power  allowing  communications  between Master and Field Device ,  both  implemented  by  serial  ports  on  the MAXQ622.  This  common  connection  necessitates  use of  a  fully  isolated  4-20mA  loop,  which  is  very  sensitive to ground loops, thus direct probing of the on-board loop is strongly discouraged and could damage the EV kit. Note  that  this  is  a  nontypical  configuration  specifically designed for demonstration purposes. In typical installations, Master and Field  Device are  separately  located, with  the Field  Device floating,  often  powered  by  loop current.

│

## DS8500 Evaluation Kit

## Interface Ports

Jumpers  JP2-JP5  provide  direct  access  to  the  serial control  signals  for  the Master side  of  the  HART  loop. Jumpers  JP8-JP11  provide  direct  access  to  the  serial control  signals  for  the Field  Device side  of  the  HART loop. These allow connection to an embedded microcontroller  or  computer  running  a  HART  stack  via  3.3V TTL serial  UART. See Table 1 and the Advanced Evaluation section for more details.

## Jumper Functions

The  DS8500  EV  kit  is  equipped  with  17  jumpers  for disconnecting  pins  and  modifying  the  EV  kit  features. Table 3 details the jumpers not previously covered.

## External Connectors

The EV kit has three terminal blocks for easy loop/wire connections. See Table 4.

Each  DS8500  exposes  FSK\_OUT  and  FSK\_IN  signals via jumper for probing purposes (Table 2).

## Advanced Evaluation

The DS8500 EV kit can communicate directly with actual HART  devices  or  software-emulated  devices.  The  onboard  MAXQ622  is  only  for  demonstration  purposes

## Table 1. Master and Field Device Control Signals

| PORT PIN   | PIN NAME   | PIN TYPE   | DESCRIPTION                                                |
|------------|------------|------------|------------------------------------------------------------|
| JP2        | HRXD_M     | Output     | Digital serial data output from MASTER DS8500 (DOUT)       |
| JP3        | HOCD_M     | Output     | Carrier detect output from MASTER DS8500                   |
| JP4        | HTXD_M     | Input      | Digital serial data input to MASTER DS8500 (DIN)           |
| JP5        | HRTS_M     | Input      | Active-low request to send signal for MASTER DS8500        |
| JP8        | HRXD_F     | Output     | Digital serial data output from FIELD DEVICE DS8500 (DOUT) |
| JP9        | HOCD_F     | Output     | Carrier detect output from FIELD DEVICE DS8500             |
| JP10       | HTXD_F     | Input      | Digital serial data input to FIELD DEVICE DS8500 (DIN)     |
| JP11       | HRTS_F     | Input      | Active-low request to send signal for FIELD DEVICE DS8500  |

Note:

Serial signals are 3.3V TTL.

## Table 2. FSK Probe and Disconnect Jumpers

| JUMPER   | NAME      | TYPE   | DESCRIPTION                                            |
|----------|-----------|--------|--------------------------------------------------------|
| JP6      | FSK_IN_M  | Input  | MASTER side incoming FSK-modulated serial signal       |
| JP7      | RAW_FSK_M | Output | MASTER side outgoing FSK-modulated serial signal       |
| JP12     | FSK_IN_F  | Input  | FIELD DEVICE side incoming FSK-modulated serial signal |
| JP13     | RAW_FSK_F | Output | FIELD DEVICE side outgoing FSK-modulated serial signal |

│

Evaluates: DS8500

## DS8500 Evaluation Kit

## Table 3. Jumper Settings

| JUMPER    | SETTING   | EFFECT                                                 |
|-----------|-----------|--------------------------------------------------------|
| JP1 (1-2) | Closed*   | Powers the 4-20mA loop from on-board power             |
| JP1 (1-2) | Open      | Disconnects 4-20mA loop from on-board power            |
| JP1 (2-3) | Closed    | Connect external loop power from connector J2          |
| JP1 (2-3) | Open*     | Disconnects external loop power from connector J2      |
| J4        | Closed*   | Connects loop power to master device                   |
| J4        | Open      | Isolates loop power from master device                 |
| J5        | Closed*   | Connect master to field device via loop                |
| J5        | Open      | Isolates master from field device via loop             |
| J7        | Closed*   | Connects field device to master via loop               |
| J7        | Open      | Isolates field device from master via loop             |
| J9        | Closed*   | Connects field device to loop return                   |
| J9        | Open      | Isolates field device from loop return                 |
| JP14      | Closed*   | Connects VBUS power (5V) to loop 24V power supply      |
| JP14      | Open      | Disconnects power from loop supply for noise reduction |

## Table 4. External Connectors

| CONNECTOR   | PURPOSE                                                                    |
|-------------|----------------------------------------------------------------------------|
| J2          | Power the 4-20mA loop from an external galvanic isolated supply or battery |
| J5          | Wire connection interface to MASTER                                        |
| J8          | Wire connection interface to FIELD DEVICE                                  |

(USB interface) and does not implement a HART software stack. The serial UART data and control pins are exposed via jumpers as detailed in Table 1. They allow a hardware serial  port  on  a  PC  or  laptop  to  transmit  and  receive modulated signals. Note that these serial pins expect TTL level  signals  (3.3V),  not  RS-232  level,  so  a  serial  level shifter board is typically required for communications.

The  following  examples  detail  two  evaluation  setups. Other  configurations  are  possible,  including  emulating both  simultaneously,  or  connection  to  an  actual  Field Device. However, these are beyond the scope of this document. Note: The  following  configurations  require  hardware  and  software  tools  available  from  the  FieldComm Group  or  other  sources  and  are  not  included  with  the DS8500 EV kit.

## Emulated HART Field Device

To  use  the  DS8500  EV  kit  as  a  Field  Device  interface, follow the setup detailed in Figure 3, using the on-board 24V loop power supply and load resistor. Simply connect a  personal  computer  running  HART  master  software, (e.g.,  HCF\_KIT\_180)  and  a  HART  serial  modem  (e.g., HCF\_TOOL-35, available with the Physical Layer Test Kit HCF\_KIT-116). The reference modem's loop connections attach across the Field Device as shown. Verify that the jumpers (J7 and J9) remain in place, even with the loop connections attached.

Another personal computer simulates the behavior of an actual field device by running the XMTR MV tool (HCF\_ TOOL-039). Remove jumpers JP8-JP11 and connect the serial signals to the computer via a RS-232 level shifter.

To  test,  launch  the  XMTR  MV  program,  then  start  the Master software and observe communications.

│

Evaluates: DS8500

## DS8500 Evaluation Kit

## Evaluates: DS8500

Figure 3. Setup for Emulated Field Device Evaluation

<!-- image -->

## DS8500 Evaluation Kit

## Emulated HART Primary/Secondary Master

To  use  the  DS8500  EV  kit  as  a  Master  or  Secondary Master, follow the setup detailed in Figure 4. This example  does  not  require  loop  power  so  completely  remove jumpers J4 and J6 to isolate the Master side of the EV kit from the on-board loop. Remove jumpers JP2-JP5 and connect the serial signals to the computer via a RS-232 level  shifter. This  computer  runs  HART master software (e.g., HCF\_KIT\_180).

Evaluates: DS8500

Another personal computer simulates the behavior of the Field Device by running the XMTR MV tool (HCF\_TOOL-039) and using a HART serial modem (e.g., HCF\_TOOL-35, available with the Physical Layer Test Kit HCF\_KIT-116).  The  reference  modem's  loop  connections  attach across the load resistor as shown in Figure 4.

To  test,  launch  the  XMTR  MV  program,  then  start  the Master software and observe communications.

Figure 4. Setup for Emulated Master Evaluation

<!-- image -->

│

## Component List, Schematics, and PCB Layout

See the following links for component list, PCB layout, and schematics:

-  DS8500-KIT BOM
-  DS8500-KIT schematics
-  DS8500-KIT PCB layout

Evaluates: DS8500

## Ordering Information

| PART        | TYPE   |
|-------------|--------|
| DS8500-KIT# | EV Kit |

#Denotes RoHS compliant.

## DS8500 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                            | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------|-----------------|
|                 0 | 11/10           | Initial release                                                        | -               |
|                 1 | 9/15            | Rewrote data sheet to include GUI and jumper descriptions and settings | 1-8             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im InteJrated reserves the riJht to chanJe the circuitry and specifications Zithout notice at any time.

│

Evaluates: DS8500

## Bill of Materials (BOM) (Rev 1; 6/15)

|   Item Number | Quantity                                                                             | Part Reference       | Value                                   | BOM_Description               | Manufacturer_PN Vendor_PN   | Vendor            | PKG_Size              |
|---------------|--------------------------------------------------------------------------------------|----------------------|-----------------------------------------|-------------------------------|-----------------------------|-------------------|-----------------------|
|             1 | 4 BMP1 BMP2 BMP3 BMP4                                                                | Bumper               | BUMPER CYLIN 0.375" DIA BLK             | SJ61A4                        | SJ5750-0-ND                 | Digi-Key          | 0.375" Dia x 0.311" H |
|             2 | 2 C1 C2                                                                              | 10uF                 | CAP CER 10uF 10V 10%                    | X7R 0805 GRM21BR71A106KE51L   | 490-3905-1-ND               | 0805              |                       |
|             3 | 8 C3 C13 C15 C17 C19 C35 C36 C50                                                     | 1uF                  | CAP CER 1uF 10V 20% X5R                 | 0603 GRM188R61A105MA61D       | 490-1544-1-ND               | Digi-Key Digi-Key | 0603                  |
|             4 | 21 C5 C7 C11 C12 C14 C16 C18 C20 C24 C25 C26 C27 C34 C37 C41 C42 C43 C44 C47 C48 C51 | 100nF                | CAP CER 0.1uF 16V 10% X7R 0603          | C0603C104K4RACTU              | 399-1096-1-ND               | Digi-Key          | 0603                  |
|             5 | 2 C9 C10                                                                             | 18pF                 | CAP CER 18PF 50V 5% NP0 0402            | GRM1555C1H180JA01D            | 490-5858-1-ND               | Digi-Key          | 0402                  |
|             6 | 3 C21 C38 C54                                                                        | 2.2nF                | CAP CER 2200PF 50V 5% NP0 0805          | GRM2165C1H222JA01D            | 490-1628-1-ND               | Digi-Key          | 0805                  |
|             7 | 2 C22 C39                                                                            | 10nF                 | CAP CER 10000PF 50V 5% NP0 0805         | GRM2195C1H103JA01D            | 490-1642-1-ND               | Digi-Key          | 0805                  |
|             8 | 2 C23 C40                                                                            | 1uF                  | CAP CER 1uF 16V 10% X7R 0603            | GCM188R71C105KA64D            | 490-5241-1-ND               | Digi-Key          | 0603                  |
|             9 | 4 C28 C29 C45 C46                                                                    | 15pF                 | CAP CER 15PF 50V 5% NP0 0603            | GRM1885C1H150JA01D            | 490-1407-1-ND               | Digi-Key          | 0603                  |
|            10 | 4 C30 C32 C52 C53                                                                    | 33nF                 | CAP CER 0.033UF 10V 10% X7R 0603        | C0603C333K8RACTU              | 399-9070-1-ND               | Digi-Key          | 0603                  |
|            11 | 1 C31                                                                                | 2.2uF                | CAP CER 2.2uF 10V 10% X5R 0603          | C0603C225K8PACTU              | 399-4911-1-ND               | Digi-Key          | 0603                  |
|            12 | 1 C33                                                                                | 2.2uF                | CAP CER 2.2UF 50V 10% X7R 1206          | GRM31CR71H225KA88L            | 490-3367-1-ND               | Digi-Key          | 1206                  |
|            13 | 1 C49                                                                                | 1nF                  | CAP CER 1nF 50V 5%                      | NP0 0603 GRM1885C1H102JA01D   | 490-1451-1-ND               | Digi-Key          | 0603                  |
|            14 | 1 C55                                                                                | 22uF                 | CAP ALUM 22UF 50V 20% SMD               | RPS1H220MCN1GS                | 493-6648-1-ND               | Digi-Key          | Alum 8mm Dia (Case E) |
|            15 | 1 C56                                                                                | 1uF                  | CAP CER 1UF 50V 10% X7R 1206            | C3216X7R1H105K160AB           | 445-1423-1-ND               | Digi-Key          | 1206                  |
|            16 | 1 C57                                                                                | 100nF                | CAP CER 0.1UF 50V 10% X7R               | 0603 C0603C104K5RACTU         | 399-5089-1-ND               | Digi-Key          | 0603                  |
|            17 | 1 C59                                                                                | 47uF                 | CAP ALUM 47UF 6.3V20%SMD5mm Dia         | PCS0J470MCL1GS                | 493-3966-1-ND               | Digi-Key          | Alum 5mm Dia SMD      |
|            18 | 1 D1                                                                                 | SMF5.0A-TP           | TVS 200W 5V UNIDIR SOD-123FL            | SMF5.0A-TP                    | SMF5.0A-TPMSCT-ND           | Digi-Key          | SOD-123               |
|            19 | 3 D2 D3 D5                                                                           | GRN                  | LED 565NM WTR CLR GREEN 1206 SMD        | SML-LX1206GC-TR               | 67-1357-1-ND                | Digi-Key          | 1206                  |
|            20 | 2 D4 D6                                                                              | YEL                  | LED ALINGAP YELLOW                      | CLR 1206 SMD SML-LX1206SYC-TR | 67-1699-1-ND                | Digi-Key          | 1206                  |
|            21 | 2 D7 D9                                                                              | SMCJ36CA             | TVS DIODE 36VWM 58.1VC SMC              | SMCJ36CA                      | SMCJ36CALFCT-ND             | Digi-Key          | SMC (DO-214AB)        |
|            22 | 1 D8                                                                                 | 1N5819HW-7-F         | DIODE SCHOTTKY 40V 1A SOD123            | 1N5819HW-7-F                  | 1N5819HW-FDICT-ND           | Digi-Key          | SOD-123               |
|            23 | 1 F1                                                                                 | 350mA                | FUSE PTC RESET 350MA SMD 0603           | MF-FSMF035X-2                 | MF-FSMF035X-2CT-ND          | Digi-Key          | 0603                  |
|            24 | 1 H1                                                                                 | DNI                  | DNI MTG 125DRL 300PAD                   |                               |                             |                   | MTG 125DRL 300PAD     |
|            25 | 1 H2                                                                                 | DNI                  | DNI MTG 125DRL 300PAD                   |                               |                             |                   | MTG 125DRL 300PAD     |
|            26 | 1 H3                                                                                 | DNI                  | DNI MTG 125DRL 300PAD                   |                               |                             |                   | MTG 125DRL 300PAD     |
|            27 | 1 H4                                                                                 | DNI                  | DNI MTG 125DRL 300PAD                   |                               |                             |                   | MTG 125DRL 300PAD     |
|            28 | 1 J1                                                                                 | MICRO USB AB RCPT RA | CONN RCPT MICRO USB AB R/A SMD          | 47589-0001                    | WM17143CT-ND                | Digi-Key          | 47589-0001            |
|            29 | 3 J2 J5 J8                                                                           | 2P 3.5mm             | TERM BLOCK 3.5MM VERT 2POS PCB          | OSTTE020161                   | ED2635-ND                   | Digi-Key          | 2P (3.5MM LS)         |
|            30 | 1 J3                                                                                 | DNI                  | MAXQ_POGO_PIN CBL PLUG-OF-NAILS 10- PIN | TC2050-IDC-NL                 | TC2050-IDC-NL-ND            | Digi-Key          | TC2050-IDC-NL         |
|            31 | 17 J4 J6 J7 J9 JP2 JP3 JP4 JP5 JP6 JP7 JP8 JP9 JP10 JP11 JP12 JP13 JP14              | JUMPER               | CONN HEADER .100 SINGL STR 2POS (2x1)   | PEC02SAAN                     | S1012E-02-ND                | Digi-Key          | 2x1 (0.1" LS)         |
|            32 | 1 JP1                                                                                | 3P JUMPER            | CONN HEADER .100 SINGL STR 3POS         | PEC03SAAN                     | S1012E-03-ND                | Digi-Key          | 3X1 (0.1" LS)         |
|            33 | 2 L1 L5                                                                              | HZ1206C202R-10       | FERRITE CHIP SIGNAL 2000OHMSMD          | HZ1206C202R-10                | 240-2413-1-ND               | Digi-Key          | 1206                  |
|            34 | 2 L2 L3                                                                              | 100uH                | IND 100UH 0.16A MINI DRUM SMD           | 82104C                        | 811-2479-1-ND               | Digi-Key          | 8200 Series           |
|            35 | 1 L4                                                                                 | 6.8uH                | FIXED IND 6.8UH 640MA                   | 270MOHM 82682C                | 811-2472-1-ND               | Digi-Key          | 8200 Series           |
|            36 | 1 PCB1                                                                               | PCB                  |                                         |                               |                             |                   |                       |
|            37 | 1 Q1                                                                                 | FDV304P              | MOSFET P-CH 25V 460MA SOT-23            | FDV304P                       | FDV304PCT-ND                | Digi-Key          | SOT-23 3P             |
|            38 | 1 Q2                                                                                 | TLP3545(F)           | PHOTOCOUPLER PHOTORELAY 6-DIP           | TLP3545(F)                    | TLP3545(F)-ND               | Digi-Key          | 6P DIP                |
|            39 | 1 Q3                                                                                 | NDT014L              | MOSFET N-CH 60V 2.8A SOT-223            | NDT014L                       | NDT014LCT-ND                | Digi-Key          | SOT-223               |
|            40 | 1 Q4                                                                                 | MMBT3904             | TRANSISTOR GP NPN                       | AMP SOT-23 MMBT3904           | MMBT3904FSCT-ND             | Digi-Key          | SOT-23-3              |

|   41 | 1 R1                                                                           | 681            | RES 681 OHM1/10W 1% 0603 SMD     | ERJ-3EKF6810V        | P681HCT-ND              | Digi-Key   | 0603             |
|------|--------------------------------------------------------------------------------|----------------|----------------------------------|----------------------|-------------------------|------------|------------------|
|   42 | 4 R2 R3 R4 R5                                                                  | 150            | RES 150 OHM1/10W 1% 0603 SMD     | ERJ-3EKF1500V        | P150HCT-ND              | Digi-Key   | 0603             |
|   43 | 4 R6 R13 R18 R20                                                               | 100K           | RES 100K OHM1/10W 1% 0603 SMD    | ERJ-3EKF1003V        | P100KHCT-ND             | Digi-Key   | 0603             |
|   44 | 2 R7 R21                                                                       | 1.58K          | RES 1.58K OHM1/10W 1% 0603 SMD   | ERJ-3EKF1581V        | P1.58KHCT-ND            | Digi-Key   | 0603             |
|   45 | 2 R8 R23                                                                       | 221K           | RES 221K OHM1/10W 1% 0603 SMD    | ERJ-3EKF2213V        | P221KHCT-ND             | Digi-Key   | 0603             |
|   46 | 2 R9 R22                                                                       | 301K           | RES 301K OHM1/10W 1% 0603 SMD    | ERJ-3EKF3013V        | P301KHCT-ND             | Digi-Key   | 0603             |
|   47 | 1 R10                                                                          | 49.9           | RES 49.9 OHM1/10W 1% 0603 SMD    | ERJ-3EKF49R9V        | P49.9HCT-ND             | Digi-Key   | 0603             |
|   48 | 2 R11 R15                                                                      | 10K            | RES 10K OHM1/10W 1% 0603 SMD     | ERJ-3EKF1002V        | P10.0KHCT-ND            | Digi-Key   | 0603             |
|   49 | 1 R12                                                                          | 12.4K          | RES 12.4K OHM1/10W 1% 0603 SMD   | ERJ-3EKF1242V        | P12.4KHCT-ND            | Digi-Key   | 0603             |
|   50 | 1 R14                                                                          | 249            | RES 249 OHM1W1%2512 SMD          | MCR100JZHF2490       | RHM249BBCT-ND           | Digi-Key   | 2512             |
|   51 | 1 R16                                                                          | 10             | RES 10 OHM1/10W 1% 0603 SMD      | ERJ-3EKF10R0V        | P10.0HCT-ND             | Digi-Key   | 0603             |
|   52 | 4 R17 R19 R24 R32                                                              | 1K             | RES 1K OHM1/10W 1% 0603 SMD      | ERJ-3EKF1001V        | P1.00KHCT-ND            | Digi-Key   | 0603             |
|   53 | 5 R25 R26 R27 R28 R29                                                          | 1.24M          | RES 1.24M OHM1/10W 1% 0603 SMD   | CRCW06031M24FKEA     | 541-1.24MHCT-ND         | Digi-Key   | 0603             |
|   54 | 2 R30 R33                                                                      | 300            | RES 300 OHM1/10W 1% 0603 SMD     | ERJ-3EKF3000V        | P300HCT-ND              | Digi-Key   | 0603             |
|   55 | 1 R31                                                                          | 511K           | RES 511K OHM1/10W 1% 0603 SMD    | ERJ-3EKF5113V        | P511KHCT-ND             | Digi-Key   | 0603             |
|   56 | 1 R34                                                                          | 24.3           | RES 24.3 OHM1/10W 1% 0603 SMD    | ERJ-3EKF24R3V        | P24.3HCT-ND             | Digi-Key   | 0603             |
|   57 | 1 R35                                                                          | 100            | RES 100 OHM1/10W 1% 0603 SMD     | ERJ-3EKF1000V        | P100HCT-ND              | Digi-Key   | 0603             |
|   58 | 1 R36                                                                          | 20K            | RES 20K OHM1/10W .1% 0603 SMD    | ERA-3AEB203V         | P20KDBCT-ND             | Digi-Key   | 0603             |
|   59 | 1 R37                                                                          | 10             | RES SMD 10 OHM0.1% 1/8W 1206     | CRT1206-BY-10R0ELF   | CRT1206-BY-10R0ELFCT-ND | Digi-Key   | 1206             |
|   60 | 1 R38                                                                          | 10K            | RES SMD 10K OHM1%1/4W 1206       | ERJ-8ENF1002V        | P10.0KFCT-ND            | Digi-Key   | 1206             |
|   61 | 17 SJ1 SJ2 SJ3 SJ4 SJ5 SJ6 SJ7 SJ8 SJ9 SJ10 SJ11 SJ12 SJ13 SJ14 SJ15 SJ16 SJ17 | SHUNT          | CONN JUMPER SHORTING TIN         | STC02SYAN            | S9000-ND                | Digi-Key   | BLK Shunt        |
|   62 | 1 SW2                                                                          | DIP SW 4POS    | SWITCH DIP 4POS SEALED GOLD      | 3-5435640-5          | 450-1404-ND             | Digi-Key   | 8P DIP (0.1" LS) |
|   63 | 1 T1                                                                           | MET-26         | TRANSFORMER 1KCT:1KCT 3.0MADC    | MET-26               | 838-MET-26              | Mouser     | MET-26           |
|   64 | 3 TP1 TP3 TP4                                                                  | RED            | TEST POINT PC COMPACT .063"D RED | 5005                 | 5005K-ND                | Digi-Key   | Compact          |
|   65 | 6 TP2 TP5 TP6 TP7 TP8 TP9                                                      | BLK            | TEST POINT PC COMPACT .063"D BLK | 5006                 | 5006K-ND                | Digi-Key   | Compact          |
|   66 | 1 U1                                                                           | MAX1806EUA33+  | IC REG LDO 3.3V/ADJ 0.5A 8UMAX   | MAX1806EUA33+        | MAX1806EUA33+-ND        | Digi-Key   | 8P Power-Umax    |
|   67 | 1 U2                                                                           | NME0524SC      | CONV DC/DC 1W5VIN 24V SIP SGL    | NME0524SC            | 811-1481-5-ND           | Digi-Key   | 4-SIP Module     |
|   68 | 1 U3                                                                           | MAXQ622G-0000+ | IC MCU 16BIT 128KB IR MOD64LQFP  | MAXQ622G-0000+       | MAXQ622G-0000+-ND       | Digi-Key   | 64P LQFP         |
|   69 | 1 U4                                                                           | MAX3207EAUT+T  | ESD PROT DIFF SOT23-6            | MAX3207EAUT+T        | MAX3207EAUT+TCT-ND      | Digi-Key   | 6P SOT-23        |
|   70 | 2 U5 U7                                                                        | DS8500-JND+    | ICMODEM HART SGL 3.6V 20-TQFN    | DS8500-JND+          | DS8500-JND+-ND          | Digi-Key   | 20P 5x5 TQFN     |
|   71 | 1 U6                                                                           | MAX4166EUA+    | IC OPAMP GP 5MHZ RRO 8UMAX       | MAX4166EUA+          | MAX4166EUA+-ND          | Digi-Key   | 8P UMAX          |
|   72 | 1 U8                                                                           | MAX6133A25+    | IC VREF SERIES 2.5V 8UMAX        | MAX6133A25+          | MAX6133A25+-ND          | Digi-Key   | 8P UMAX          |
|   73 | 1 U9                                                                           | MAX9620AXK+T   | IC OPAMP CHOPPER 1.5MHZ SC70-5   | MAX9620AXK+T         | MAX9620AXK+TCT-ND       | Digi-Key   | SC70 5P          |
|   74 | 1 Y1                                                                           | 12MHz          | CRYSTAL 12MHZ 18PF SMD           | ABM3-12.000MHZ-D2Y-T | 535-10634-1-ND          | Digi-Key   | 5x3.2 ABM3       |
|   75 | 2 Y2 Y3                                                                        | 3.6864MHz      | CRYSTAL 3.6864MHZ 18PF THRU      | ECS-36-18-4X         | X1042-ND                | Digi-Key   | HC49/US          |

<!-- image -->

## MOUNTING HOLES &amp; BUMPERS

H1

BMP1

1

1

1

1

DNI

H2

DNI

H3

DNI

H4

DNI

Bumper

BMP2

Bumper

BMP3

Bumper

BMP4

Bumper

## UART INTERFACE

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

SILKSCREEN BOTTOM

<!-- image -->

## NOTES:  1. ALL MEASUREMENTS ARE IN INCHES.

2. THE PWB SHALL BE FABRICATED TO IPC-6012, CLASS 2 AND WORKMANSHIP SHALL CONFORM TO IPC-A-600, CLASS 2, CURRENT REV. DIMENSIONING AND TOLERANCE OF PRINTED WIRING BOARD SHALL BE PER IPC-D-300 (CURRENT REV).
3. BOARD MATERIAL TO BE MULTI-FUNCTIONAL FR-4 EXPOXY GLASS LIMINATE, AND SHALL MEET OR EXCEED MIL-P-13949. COLOR - NATURAL.
4. BOARD MATERIAL AND CONSTRUCTION TO BE U.L. APPROVED AND MARKED ON THE FINISHED BOARD.
5. MINIMUM COPPER WALL THICKNESS OF PLATED-THRU HOLES TO BE.001 INCHES
6. OVERALL BOARD THICKNESS TO BE .062 +/- 10% AND APPLIES AFTER ALL LAMINATION AND PLATING PROCESSES. MEASURED FROM COPPER TO COPPER.
7. MAX WARP AND TWIST TO BE .01 INCHES PER INCH.
8. BOARD MUST BE ELECTRICALLY TESTED USING THE SUPPLIED IPC-D -356 NETLIST.
9. PLATE ALL EXPOSED AREAS WITH ELECTROLESS IMMERSION GOLD, NICKEL 100 MICROINCHES THK. GOLD 2-6 MICROINCHES THK MIN.

## PROCESS NOTES:  1. APPLY LPI SOLDERMASK, BOTH SIDES, OVER BARE COPPER (SMOBC)

COLOR: GREEN

SOLDERMASK SHALL CONFORM TO IPC-SM-840, CLASS H, AND CURRENT REVISION. VIAS SHALL BE TENTED OR CLEARED BY SOLDERMASK PER ARTWORK. FABRICATION VENDOR IS ALLOWED TO ADJUST SOLDERMASK FEATURES AS NEEDED AS LONG AS SOLDERMASK DAMS ARE MAINTAINED BETWEEN ALL SMD PADS.

- PLACE ANY VENDOR SERIAL NUMBER ASSOCIATED TO PANEL ON BOTTM SIDE OF BOARD. 2. SILKSCREEN BOTH SIDES USING LPI SILKSCREEN, COLOR: WHITE.

<!-- image -->

SILKSCREEN BOTTOM

<!-- image -->

## NOTES:  1. ALL MEASUREMENTS ARE IN INCHES.

2. THE PWB SHALL BE FABRICATED TO IPC-6012, CLASS 2 AND WORKMANSHIP SHALL CONFORM TO IPC-A-600, CLASS 2, CURRENT REV. DIMENSIONING AND TOLERANCE OF PRINTED WIRING BOARD SHALL BE PER IPC-D-300 (CURRENT REV).
3. BOARD MATERIAL TO BE MULTI-FUNCTIONAL FR-4 EXPOXY GLASS LIMINATE, AND SHALL MEET OR EXCEED MIL-P-13949. COLOR - NATURAL.
4. BOARD MATERIAL AND CONSTRUCTION TO BE U.L. APPROVED AND MARKED ON THE FINISHED BOARD.
5. MINIMUM COPPER WALL THICKNESS OF PLATED-THRU HOLES TO BE.001 INCHES
6. OVERALL BOARD THICKNESS TO BE .062 +/- 10% AND APPLIES AFTER ALL LAMINATION AND PLATING PROCESSES. MEASURED FROM COPPER TO COPPER.
7. MAX WARP AND TWIST TO BE .01 INCHES PER INCH.
8. BOARD MUST BE ELECTRICALLY TESTED USING THE SUPPLIED IPC-D -356 NETLIST.
9. PLATE ALL EXPOSED AREAS WITH ELECTROLESS IMMERSION GOLD, NICKEL 100 MICROINCHES THK. GOLD 2-6 MICROINCHES THK MIN.

## PROCESS NOTES:  1. APPLY LPI SOLDERMASK, BOTH SIDES, OVER BARE COPPER (SMOBC)

COLOR: GREEN

SOLDERMASK SHALL CONFORM TO IPC-SM-840, CLASS H, AND CURRENT REVISION. VIAS SHALL BE TENTED OR CLEARED BY SOLDERMASK PER ARTWORK. FABRICATION VENDOR IS ALLOWED TO ADJUST SOLDERMASK FEATURES AS NEEDED AS LONG AS SOLDERMASK DAMS ARE MAINTAINED BETWEEN ALL SMD PADS.

- PLACE ANY VENDOR SERIAL NUMBER ASSOCIATED TO PANEL ON BOTTM SIDE OF BOARD. 2. SILKSCREEN BOTH SIDES USING LPI SILKSCREEN, COLOR: WHITE.

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

SILKSCREEN BOTTOM

<!-- image -->

## NOTES:  1. ALL MEASUREMENTS ARE IN INCHES.

2. THE PWB SHALL BE FABRICATED TO IPC-6012, CLASS 2 AND WORKMANSHIP SHALL CONFORM TO IPC-A-600, CLASS 2, CURRENT REV. DIMENSIONING AND TOLERANCE OF PRINTED WIRING BOARD SHALL BE PER IPC-D-300 (CURRENT REV).
3. BOARD MATERIAL TO BE MULTI-FUNCTIONAL FR-4 EXPOXY GLASS LIMINATE, AND SHALL MEET OR EXCEED MIL-P-13949. COLOR - NATURAL.
4. BOARD MATERIAL AND CONSTRUCTION TO BE U.L. APPROVED AND MARKED ON THE FINISHED BOARD.
5. MINIMUM COPPER WALL THICKNESS OF PLATED-THRU HOLES TO BE.001 INCHES
6. OVERALL BOARD THICKNESS TO BE .062 +/- 10% AND APPLIES AFTER ALL LAMINATION AND PLATING PROCESSES. MEASURED FROM COPPER TO COPPER.
7. MAX WARP AND TWIST TO BE .01 INCHES PER INCH.
8. BOARD MUST BE ELECTRICALLY TESTED USING THE SUPPLIED IPC-D -356 NETLIST.
9. PLATE ALL EXPOSED AREAS WITH ELECTROLESS IMMERSION GOLD, NICKEL 100 MICROINCHES THK. GOLD 2-6 MICROINCHES THK MIN.

## PROCESS NOTES:  1. APPLY LPI SOLDERMASK, BOTH SIDES, OVER BARE COPPER (SMOBC)

COLOR: GREEN

SOLDERMASK SHALL CONFORM TO IPC-SM-840, CLASS H, AND CURRENT REVISION. VIAS SHALL BE TENTED OR CLEARED BY SOLDERMASK PER ARTWORK. FABRICATION VENDOR IS ALLOWED TO ADJUST SOLDERMASK FEATURES AS NEEDED AS LONG AS SOLDERMASK DAMS ARE MAINTAINED BETWEEN ALL SMD PADS.

- PLACE ANY VENDOR SERIAL NUMBER ASSOCIATED TO PANEL ON BOTTM SIDE OF BOARD. 2. SILKSCREEN BOTH SIDES USING LPI SILKSCREEN, COLOR: WHITE.

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

SILKSCREEN BOTTOM

<!-- image -->

## NOTES:  1. ALL MEASUREMENTS ARE IN INCHES.

2. THE PWB SHALL BE FABRICATED TO IPC-6012, CLASS 2 AND WORKMANSHIP SHALL CONFORM TO IPC-A-600, CLASS 2, CURRENT REV. DIMENSIONING AND TOLERANCE OF PRINTED WIRING BOARD SHALL BE PER IPC-D-300 (CURRENT REV).
3. BOARD MATERIAL TO BE MULTI-FUNCTIONAL FR-4 EXPOXY GLASS LIMINATE, AND SHALL MEET OR EXCEED MIL-P-13949. COLOR - NATURAL.
4. BOARD MATERIAL AND CONSTRUCTION TO BE U.L. APPROVED AND MARKED ON THE FINISHED BOARD.
5. MINIMUM COPPER WALL THICKNESS OF PLATED-THRU HOLES TO BE.001 INCHES
6. OVERALL BOARD THICKNESS TO BE .062 +/- 10% AND APPLIES AFTER ALL LAMINATION AND PLATING PROCESSES. MEASURED FROM COPPER TO COPPER.
7. MAX WARP AND TWIST TO BE .01 INCHES PER INCH.
8. BOARD MUST BE ELECTRICALLY TESTED USING THE SUPPLIED IPC-D -356 NETLIST.
9. PLATE ALL EXPOSED AREAS WITH ELECTROLESS IMMERSION GOLD, NICKEL 100 MICROINCHES THK. GOLD 2-6 MICROINCHES THK MIN.

## PROCESS NOTES:  1. APPLY LPI SOLDERMASK, BOTH SIDES, OVER BARE COPPER (SMOBC)

COLOR: GREEN

SOLDERMASK SHALL CONFORM TO IPC-SM-840, CLASS H, AND CURRENT REVISION. VIAS SHALL BE TENTED OR CLEARED BY SOLDERMASK PER ARTWORK. FABRICATION VENDOR IS ALLOWED TO ADJUST SOLDERMASK FEATURES AS NEEDED AS LONG AS SOLDERMASK DAMS ARE MAINTAINED BETWEEN ALL SMD PADS.

- PLACE ANY VENDOR SERIAL NUMBER ASSOCIATED TO PANEL ON BOTTM SIDE OF BOARD. 2. SILKSCREEN BOTH SIDES USING LPI SILKSCREEN, COLOR: WHITE.

<!-- image -->

| DRILL CHART: TOP to BOTTOM   | DRILL CHART: TOP to BOTTOM   | DRILL CHART: TOP to BOTTOM   | DRILL CHART: TOP to BOTTOM   | DRILL CHART: TOP to BOTTOM   |
|------------------------------|------------------------------|------------------------------|------------------------------|------------------------------|
| ALL UNITS ARE IN MILS        | ALL UNITS ARE IN MILS        | ALL UNITS ARE IN MILS        | ALL UNITS ARE IN MILS        | ALL UNITS ARE IN MILS        |
| FIGURE                       | SIZE                         | TOLERANCE                    | PLATED                       | QTY                          |
|                              | 12.0                         | +3.0/-3.0                    | PLATED                       | 12                           |
|                              | 12.0                         | +3.0/-3.0                    | PLATED                       | 116                          |
|                              | 32.0                         | +3.0/-3.0                    | PLATED                       | 10                           |
|                              | 38.0                         | +3.0/-3.0                    | PLATED                       | 14                           |
|                              | 42.0                         | +3.0/-3.0                    | PLATED                       | 38                           |
|                              | 45.0                         | +3.0/-3.0                    | PLATED                       | 3                            |
|                              | 50.0                         | +3.0/-3.0                    | PLATED                       | 6                            |
|                              | 65.0                         | +3.0/-3.0                    | PLATED                       | 9                            |
|                              | 125.0                        | +3.0/-3.0                    | PLATED                       | 4                            |
|                              | 40.0                         | +3.0/-3.0                    | NON-PLATED                   | 3                            |
|                              | 35.0x28.0                    | +3.0/-3.0                    | PLATED                       | 2                            |
|                              | 52.0x25.0                    | +3.0/-3.0                    | PLATED                       | 2                            |

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->