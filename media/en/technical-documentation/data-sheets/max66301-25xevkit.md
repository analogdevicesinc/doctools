<!-- lastmod 2023-10-20 -->
<!-- image -->

<!-- image -->

Click here to ask an associate for production status of specific part numbers.

Evaluates: MAX66301 and MAX66250

## General Description

The  MAX66301-25x  evaluation  system  (EV  system) comprises  a  MAX66301  evaluation  kit  (EV  kit)  and  a MAX66250 tag. The MAX66301 EV kit combines an RFID reader for  contactless  communication  at  13.56MHz and a  SHA-3  secure  authenticator  coprocessor.  The  RFID reader covers the ISO 15693 standard and the authenticator coprocessor is based on the FIPS 202-compliant standard.  The  MAX66250  tag  operates  as  a  solution covering  the  ISO  15693  standard  and  combines  FIPS 202-compliant Secure Hash Algorithm (SHA-3) challenge and response authentication with secured EEPROM. By pairing  the  MAX66301  with  the  MAX66250  into  an  EV system, the EV kit software can operate to show a secure challenge  and  response  authentication  and  other  part specific functionality.

The  MAX66301NFC#  is  an  enclosed  version  of  the MAX66301  EV  kit  that  is  suitable  for  use  in  a  manufacturing  environment.  The  included  antenna  can  be connected  by  the  50Ω  coaxial  cable  provided  with  the MAX66301NFC# kit, or a custom antenna and cable may be  connected  for  optimal  performance  in  the  targeted environment.

Analog Devices provides a simple graphical user interface (GUI) to invoke commands and create scripts that generate  combinations  of  these  commands  for  reading  and writing the memory of the MAX66250 and setting memory protections. The  operator  selects  input  data  and  operations to perform, and the software handles the details.

## MAX66301-25x EV System Content List

|   QTY | DESCRIPTION                          |
|-------|--------------------------------------|
|     1 | MAX66301 evaluation kit plus antenna |
|     1 | MAX66250 tag                         |
|     1 | USB Type A to USB Mini-Type B cable  |

Ordering Information appears at end of data sheet.

## MAX66301-25x Evaluation System

## Features

- Secure, Contactless RFID Reader (MAX66301)
- UART and SPI Interface Ports
- Power-Down Mode by an Input Pin (Low, Standby Power)
- Antenna Short-Circuit Protection
- Compatible with 3.3V or 5V Supply Voltages
- Pushbuttons for Board Reset and MAX66301 Reset
- Port Select Switch Control
- Jumpers for SPI, UART, and Control Signals
- ISO/IEC 15693 and 14443 Type A Standard Compliant
- SHA-3 Engine to Run a Symmetric Key-Based Bidirectional Secure Authentication
- Four 32-Byte Pages of User Memory
- Four Host Secrets with Multiple Programmable Protection Options
- 76-Byte Scratchpad in SRAM
-  True Hardware Random-Number Generator
- Unique 64-Bit Serial Number
- Protected Tag Solution (MAX66250)
- HF Interface at 13.56MHz
-  User EEPROM Authenticated Memory Page Read/ Write Transactions
-  User EEPROM Page Read/Write Transactions
- All Stored Data Cryptographically Protected from Discovery
- FIPS 202-Compliant SHA-3 Algorithm for Challenge/Response Authentication
- FIPS 198-Compliant Keyed-Hash Message Authentication Code (HMAC)
- 17-Bit One-Time Settable, Nonvolatile DecrementOnly Counter with Authenticated Read
- Secure Storage for Secrets
- 256 Bits of Secure EEPROM for User Data
- ISO/IEC 18000-3 Mode1: up to 52.97kbps
- MAX66301-25x EV System Software Available
- Mobile NFC Tag Application Available for Download

319-100922; Rev 2; 8/23

## MAX66301-25x Evaluation System

## MAX66301-25x Evaluation Systems

<!-- image -->

<!-- image -->

## MAX66301-25x Evaluation System

## Quick Start

## Required Equipment

- MAX66301 EV kit plus antenna (included)
- MAX66250 tag (included)
- USB Type A to USB Mini Type B cable (included)
- PC with Windows ®  10 or Windows 7 and a spare USB port

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold only refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows OS.

## Setup Procedure

- 1) Perform the following to install the PL-2303 prolific driver:
- a) Download the driver file called PL2303\_Pro -lific\_DriverInstaller.zip from https://prolificusa. com/product/pl2303gc-usb-full-uart-bridgecontroller-gpio/ .
- b) Unzip, Open and Run the file.
- c) Follow the directions of the Install Wizard until Finish is reached.
- 2) Proceed by setting up the MAX66301 EV kit hardware by doing the following:
- a) Configure the jumpers per Table 1 and Figure 6 for 3.3V operation.
- b) Set the switch SW3 per Table 2 for UART operation when the MAX66301 powers up.
- c) Using the USB type A to USB type Mini B cable, connect the MAX66301 EV kit's CN1 port into a spare USB port of a PC.

## Evaluates: MAX66301 and MAX66250

- 3) Set up the MAX66250 tag hardware by doing the following:
- a) Position the MAX66250 tag over the MAX66301 EV kit antenna.
- 4) The MAX66301 EV kit uses both the Prolific PL-2303 and a MAXQ610 microcontroller to provide SPI or UART connectivity to the MAX66301 device. Verify the correct installation of the virtual COM port by selecting Control Panel → System → Hardware → Device Manager and expanding the Ports (COM &amp; LPT) . If the driver is installed properly, the Port lists as in Figure 1. Note that your COM port number can be different.
- 5) Unzip the MAX66301-25x\_EV\_Kit.zip in a known location. Note: If you have not already obtained the software with this data sheet, request it from applications support through the following link: https://support.analog.com/en-US/technicalsupport/ .

Figure 1. MAX66301 EV Kit Virtual COM Port

<!-- image -->

│

## MAX66301-25x Evaluation Evaluates: MAX66301 and MAX66250

## System

- 6) Open the MAX66301-25x EV kit folder, as shown in Figure 2, and double-click the setup.exe .
- 7) Now, double-click the Install button as shown in Figure 3.
- 8) The evaluation program GUI appears as shown in Figure 4.

Figure 2. MAX66301-25x EV kit Setup

<!-- image -->

Figure 3. Application Install-Security Warning

<!-- image -->

## MAX66301-25x Evaluation Evaluates: MAX66301 and MAX66250

## System

Figure 4. MAX66301-25x EV Kit GUI

<!-- image -->

## MAX66301-25x Evaluation System

## Detailed Description of Hardware

The MAX66301-25x EV system block diagram in Figure 5 is a functional representation. Starting from the left side, the prolific device provides a virtual COM port to link the PC to the MAXQ610 and is fully compatible with USB 2.0 specification. The MAXQ610 is preloaded with firmware that  either  passes  the  UART protocol along or converts the  UART  protocol  to  SPI  with  a  SCLK  at  2.667MHz. The  MAX66301  provides  the  RFID  reader  processing per ISO 15693 and the secure coprocessor functionality is  based  on  FIPS  202-compliant  standard.  The AFE  in the MAX66301 drives a PCB antenna in a 100mW con-

## Evaluates: MAX66301 and MAX66250

figuration. Lastly, the MAX66250 is the tag in the systemsupporting authentication (i.e., clone prevention).

## Jumpers and Switches

The MAX66301 EV kit has jumpers that allow configura -tion options and contains switches for more configuration options.

Table 1 and Figure 6 describe the MAX66301 EV kit and the function of the jumpers. Default settings from Table 1, in summary, support UART or SPI linking, USB power, and 3.3V operation.

Figure 5. MAX66301-25x EV System Block Diagram

<!-- image -->

│

## MAX66301-25x Evaluation System

## Table 1. MAX66301 EV Kit Jumpers

| REFERENCE DESIGNATOR   | MAX66301 DESCRIPTION                                                                                                                                                                                                                   | DEFAULT SETTING                                                                                                                                                         | FUNCTION                                                                                                                                                                                                                                                                                                                                                                               |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JB1                    | AGD-Reference Voltage Output                                                                                                                                                                                                           | Close (1-2)                                                                                                                                                             | Pullup enabled for 3.3V operation                                                                                                                                                                                                                                                                                                                                                      |
| JB2                    | TXD-UART Transmit RXD-UART Receive MISO-Master In-Slave Out MOSI-Master Out-Slave In SCLK-Serial Clock SSEL-Slave Select IRQ-Interrupt Out SLEEP-Sleep Mode In BUSY-Busy Out PORTSLCT-Port Select In TP (EN)-Test Pin GND-Ground Probe | Close (1-2), Close (3-4), Close (5-6), Close (7-8), Close (9-10), Close (11-12), Open (13-14), Close (15-16), Close (17-18), Close (19-20), Close (21-22), Open (23-24) | Link to MAXQ610 UART receive Link to MAXQ610 UART transmit Link to MAXQ610 SPI MISO Link to MAXQ610 SPI MOSI Link to MAXQ610 SPI SCLK Link to MAXQ610 SPI SSEL Link to MAXQ610 P1.6 PIO (not used) Link to MAXQ610 P1.5 Out for sleep control Link to MAXQ610 P1.4 In detect SPI busy Link to MAXQ610 P3.5 and switch 5 (SW3) Link to MAXQ610 P1.7 out high Ground connect for probing |
| JB3                    | VCC5-5V Supply Rail                                                                                                                                                                                                                    | Close (1-2)                                                                                                                                                             | Link to 5V USB power from the PC                                                                                                                                                                                                                                                                                                                                                       |
| J3                     | 3.3V/5V VDD_AFE_DIG Select                                                                                                                                                                                                             | Close (1-2)                                                                                                                                                             | Select AFE digital voltage to be 3.3V                                                                                                                                                                                                                                                                                                                                                  |

│

Evaluates: MAX66301 and MAX66250

## MAX66301-25x Evaluation System

Evaluates: MAX66301 and MAX66250

Figure 6. MAX66301 EV Kit Jumpers

<!-- image -->

│

## MAX66301-25x Evaluation System

Evaluates: MAX66301 and MAX66250

Table 2 describes the switch settings for MAX66301 EV kit. SW1 is reserved for future use. SW3 switch positions 1 to 4 are reserved for future use and position 5 selects between UART or SPI port selection. SW4 resets the MAX66301 during evaluation if needed.

Table 2. MAX66301 EV Kit Switches

| REFERENCE DESIGNATOR   | POSITION       | ON POSITION (SIGNAL IS GROUNDED)   | OFF POSITION (SIGNAL IS PULLED UP)   |
|------------------------|----------------|------------------------------------|--------------------------------------|
| SW1                    | PUSH 1         | Not used                           | Not used                             |
| SW3                    | Switch 1       | Not used                           | Not used                             |
| SW3                    | Switch 2       | Not used                           | Not used                             |
| SW3                    | Switch 3       | Not used                           | Not used                             |
| SW3                    | Switch 4       | Not used                           | Not used                             |
| SW3                    | Port select    | UART port selection                | SPI port selection                   |
| SW4                    | Reset MAX66301 | Push-MAX66301 in reset             | MAX66301 normal                      |

## Ordering Information

| PART               | TYPE                   |
|--------------------|------------------------|
| MAX66301-25XEVKIT# | EV System              |
| MAX66301NFC#       | Boxed Reader EV System |
| MAX66250EVKIT#     | NFC Tag                |

#Denotes RoHS compliant.

│

## MAX66301-25x Evaluation System

## MAX66301 EV Kit Bill of Materials

| COMMENT           | DESCRIPTION                                  | DESIGNATOR                                     | FOOTPRINT       |   QTY | PART NUMBER         |
|-------------------|----------------------------------------------|------------------------------------------------|-----------------|-------|---------------------|
| 10uF              | CAP CER 10UF 10V X5R 0805                    | C2                                             | CAP0805-3D      |     1 | C2012X5R1A106K085AB |
| 10uF              | CAP CER 10UF 16V X5R 0805                    | C3                                             | CAP1206-3D      |     1 | CL21A106KOQNNNE     |
| 2.2uF             | CAP CER 2.2UF 10V X7R 0805                   | C4, C6                                         | CAP0805-3D      |     2 | CL21B225KPFNNNE     |
| 10nF              | CAP CER 10000PF 50V X7R 0603                 | C5                                             | CAP0603-3D      |     1 | CL10B103KB8NCNC     |
| 0.1uF             | CAP CER 0.1UF 50V X7R 1206                   | C7                                             | CAP1206-3D      |     1 | CL31B104KBCNNNC     |
| 0.1uF             | CAP CER 0.1UF 16V X7R 0603                   | C8, C9, C10, C11, C12, C13, C14, C16, C17, C34 | CAP0603-3D      |    10 | CL10B104KO8NNNC     |
| 1uF               | CAP CER 1UF 25V X7R 1206                     | C15                                            | CAP1206-3D      |     1 | CL31B105KAHNNNE     |
| 22pF              | CAP CER 22PF 50V C0G/NP0 0603                | C18, C19, C25, C29, C30, C33                   | CAP0603-3D      |     6 | CL10C220JB8NNNC     |
| 680pF             | CAP CER 680PF 200V C0G/NP0 1206              | C20, C21                                       | CAP1206-3D      |     2 | 12062A681JAT2A      |
| 33pF              | CAP CER 33PF 50V C0G/NP0 1206                | C22                                            | CAP1206-3D      |     1 | 12065A330KAT2A      |
| 820pF             | CAP CER 820PF 50V C0G/NP0 0603               | C23                                            | CAP0603-3D      |     1 | CL10C821JB8NNNC     |
| 560pF             | CAP CER 560PF 50V C0G/NP0 1206               | C24                                            | CAP1206-3D      |     1 | 12065A561JAT2A      |
| 1nF               | CAP CER 1000PF 50V C0G/NP0 0603              | C26                                            | CAP0603-3D      |     1 | 06035A102FAT2A      |
| 680pF             | CAP CER 680PF 50V C0G/NP0 0603               | C27                                            | CAP0603-3D      |     1 | CL10C681FB8NNNC     |
| 820pF             | CAP CER 820PF 50V NP0 1206                   | C28                                            | CAP1206-3D      |     1 | 12065A821FAT2A      |
| 1uF               | CAP CER 1UF 10V X7R 0603                     | C31, C32, C41                                  | CAP0603-3D      |     3 | LMK107B7105KA-T     |
| 3.3uF             | CAP CER 3.3UF 16V X7R 1206                   | C35, C37                                       | CAP1206-3D      |     2 | C1206C335K4RAC7800  |
| 10nF              | CAP CER 10000PF 50V X7R 1206                 | C36, C38, C39                                  | CAP1206-3D      |     3 | C1206C103J5RAC7800  |
| 2.2uF             | CAP CER 2.2UF 16V X5R 0603                   | C40                                            | CAP0603-3D      |     1 | CC0603KRX5R7BB225   |
| uUSB              | CONN USB MICRO B RECPT SMT R/A               | CN1                                            | USBMICROB2-3D   |     1 | 10118193-0001LF     |
| LED GREEN         | LED GREEN CLEAR 0603 SMD                     | D2                                             | 0603LED-3DGREEN |     1 | 5988081102F         |
| BLM21PG221SN1D    | FERRITE BEAD 220 OHM 0805 1LN                | FB1, FB2                                       | 0805-3D         |     2 | MH2029-221Y         |
| JUMPER            | CONN HEADER VERT 14POS 2.54MM                | J2                                             | DIH7X2-3D       |     1 | PREC007DAAN-RC      |
| JUMPER            | CONN HEADER VERT 3POS 2.54MM                 | J3                                             | SIP3-3D         |     3 | 77311-424-03LF      |
| SMA               | CONN SMA RCPT STR 50OHM EDGE MNT             | J6                                             | SMA2-3D         |     1 | 132289              |
| JTAG CONNECTOR #1 | CONN HEADER VERT 14POS 2.54MM                | J7                                             | DIH5X2-3D       |     1 | M20-9720745         |
| Interface         | 2 x 10 dual row 0.100mil male conn           | J8                                             | DIH5X2-3D       |     1 | M20-9760546         |
| SHUNT             | CONN HEADER VERT 2POS 2.54MM                 | JB1, JB3, JB6                                  | SIP2-3D         |     3 | 77311-424-02LF      |
| HEADER            | CONN HEADER VERT 24POS 2.54MM                | JB2                                            | DIH12X2-3D      |     1 | M20-9981246         |
| 270nH             | FIXED IND 270NH 630MA 400MOHM SM             | L1                                             | 1210INDUCTOR    |     1 | AISC-1210-R27J-T    |
| 180nH             | INDUCTOR 1206 180NH UNSHLD 2% 700mA 430mOhms | L2                                             | 1210INDUCTOR    |     1 | 1206CS-181XGLB      |

Evaluates: MAX66301 and MAX66250

## MAX66301-25x Evaluation System

Evaluates: MAX66301 and MAX66250

## MAX66301 EV Kit Bill of Materials (continued)

| COMMENT        | DESCRIPTION                                                  | DESIGNATOR                         | FOOTPRINT         |   QTY | PART NUMBER        |
|----------------|--------------------------------------------------------------|------------------------------------|-------------------|-------|--------------------|
| 10uH           | FIXED IND 10UH 100MA 3.25OHM SMD                             | L4, L5                             | 1206INDUCTOR-3D   |     2 | LQH31MN100J03L     |
| INDUCTOR       | RES 0 OHM JUMPER 1/4W 1206                                   | L6, L7, L8                         | 1206INDUCTOR-3D   |     3 | RMCF1206ZT0R00     |
| BSS84          | MOSFET P-CH 50V 180MA TO236AB                                | Q1                                 | 16001-3D          |     1 | BSS84AK,215        |
| 10K            | RES 10K OHM 1% 1/10W 0603                                    | R1, R15, R16, R25                  | 0603-3D           |     4 | RC0603FR-0710KL    |
| 10             | RES SMD 10 OHM 1% 1/10W 0603                                 | R2                                 | 0603-3D           |     1 | ERJ-3EKF10R0V      |
| 1.5k           | RES 1.5K OHM 1% 1/10W 0603                                   | R5                                 | 0603-3D           |     1 | RC0603FR-071K5L    |
| 50 Ohm         | RES SMD 49.9 OHM 1% 1/4W 1206                                | R6                                 | 1206-3D           |     1 | CR1206-FX-49R9ELF  |
| 1.8k           | RES 1.8K OHM 1% 1/4W 1206                                    | R7                                 | 1206-3D           |     1 | RMCF1206FT1K80     |
| 3.3K           | RES 3.3K OHM 1% 1/10W 0603                                   | R9, R10                            | 0603-3D           |     2 | RC0603FR-073K3L    |
| 750            | RES 750 OHM 1% 1/8W 0603                                     | R11                                | 0603-3D           |     1 | RNCP0603FTD750R    |
| 4.7k           | RES 4.7K OHM 1% 1/10W 0603                                   | R12                                | 0603-3D           |     1 | RC0603FR-074K7L    |
| 20K            | RES SMD 20K OHM 1% 1/4W 1206                                 | R18                                | 1206-3D           |     2 | ERJ-8ENF2002V      |
| 20k            | RES 20K OHM 1% 1/10W 0603                                    | R24                                | 0603-3D           |     1 | RC0603FR-0720KL    |
| 22             | RES SMD 22 OHM 1% 1/10W 0603                                 | R26, R27, R28, R29, R30            | 0603-3D           |     5 | ERJ-3EKF22R0V      |
| 10K            | RES ARRAY 6 RES 10K OHM 7SIP                                 | RP1                                | SIP7-3D           |     1 | CSC07A0110K0GEK    |
| PUSH           | SWITCH TACTILE SPST-NO 3VA 28V                               | SW1                                | RESET2-3D         |     1 | HP0315AFKP2-R      |
| RESET          | SWITCH TACTILE SPST-NO 3VA 28V                               | SW4                                | RESET2-3D         |     2 | HP0315AFKP2-R      |
| DIPSWITCH5     | SWITCH SLIDE DIP SPST 100MA 20V                              | SW3                                | DIPSWITCH5 SMT    |     1 | 219-5LPST          |
| GND            | PC TEST POINT MULTIPURPOSE BLACK                             | TP1, TP4, TP5                      | TP-3D             |     3 | 5011               |
| VCC5           | PC TEST POINT MULTIPURPOSE BLACK                             | TP2                                | TP-3D             |     1 | 5011               |
| VCC3.3         | PC TEST POINT MULTIPURPOSE BLACK                             | TP3                                | TP-3D             |     1 | 5011               |
| PL-2303GC      | USB to Full UART with GPIO                                   | U1                                 | TSSOP28-3D        |     1 | PL-2303GC          |
| MAX8887EZK33+T | IC REG LIN 3.3V 300MA TSOT23-5                               | U3                                 | SOT23-5-3D        |     1 | MAX8887EZK33+      |
| MAXQ610        | Multi I/O Processor w/ IR support                            | U4                                 | TQFN44 7MM        |     1 | MAXQ610J-0000+     |
| MAX66301       | DeepCover Secure Authenticator with SHA3-256 and RFID Reader | U5                                 | TQFN56 8MM        |     1 | MAX66301ETN+       |
| 16MHz          | CRYSTAL 16.0000MHZ 20PF SMD                                  | X1                                 | CRYSTAL-CSM-3X-3D |     1 | ECS-160-20-3X-TR   |
| 24.00MHz       | CRYSTAL 24.0000MHZ 20PF SMD                                  | X2                                 | CRYSTAL-ECX-64    |     1 | ECS-240-20-20A-TR  |
| 13.56MHz       | CRYSTAL 13.5600MHZ 20PF SMD                                  | X3                                 | CRYSTAL-CSM-3X-3D |     1 | ECS-135.6-20-3X-TR |
| Screw          | MACH SCREW PAN HEAD SLOTTED 6-32 1/2 inch                    | MechSC1, MechSC2, MechSC3, MechSC4 | -                 |     4 | 9336               |
| Stand Off      | HEX STANDOFF #6-32 NYLON 5/8"                                | MechSO1, MechSO2, MechSO3, MechSO4 | -                 |     4 | 1903F              |
| Jumper         | CONN+,JUMPER,SHORTING,TIN                                    | SB2 -10POS, S3-S5, S9, SB1, SB3    | -                 |    16 | SPC02SXIN-RC       |

## MAX66301-25x Evaluation System

## MAX66301 EV Kit Schematic Diagram

<!-- image -->

│

SVN

## MAX66301-25x Evaluation System

## MAX66301 EV Kit PCB Layout Diagrams

<!-- image -->

<!-- image -->

│

Evaluates: MAX66301 and MAX66250

## MAX66301 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

<!-- image -->

│

## MAX66301-25x Evaluation System

Evaluates: MAX66301 and MAX66250

## MAX66301 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

<!-- image -->

│

## MAX66301-25x Evaluation System

## MAX66250 Tag Bill of Materials

| COMMENT   | DESCRIPTION                                                                  | DESIGNATOR   | FOOTPRINT   |   QTY | PART NUMBER   |
|-----------|------------------------------------------------------------------------------|--------------|-------------|-------|---------------|
| MAX66250  | DeepCover Secure Authenticator with ISO 15693, SHA3-256 and 256b User EEPROM | U5           | SOIC8-3D    |     1 | MAX66250ESA+  |

## MAX66250 Tag Schematic Diagram

<!-- image -->

## MAX66250 Tag PCB Layout Diagram

<!-- image -->

│

Evaluates: MAX66301 and MAX66250

## MAX66301-25x Evaluation System

## Evaluates: MAX66301 and MAX66250

## MAX66250 Tag PCB Layout Diagram (continued)

<!-- image -->

<!-- image -->

│

## MAX66301-25x Evaluation System

Evaluates: MAX66301 and MAX66250

## MAX66250 Tag PCB Layout Diagram (continued)

<!-- image -->

<!-- image -->

│

## MAX66301-25x Evaluation System

## 50Ω Shielded Antenna PCB Bill of Materials

| COMMENT   | DESCRIPTION                               | DESIGNATOR                         | FOOTPRINT   |   QTY | PART NUMBER       |
|-----------|-------------------------------------------|------------------------------------|-------------|-------|-------------------|
| 20pF      | CAP CER 20PF 100V NP0 0805                | C2                                 | CAP0805-3D  |     1 | 08051U200FAT2A    |
| 22pF      | CAP CER 22PF 250V NP0 0805                | C3                                 | CAP0805-3D  |     1 | 251R15S220FV4E    |
| 56pF      | CAP CER 56PF 100V NP0 0805                | C4                                 | CAP0805-3D  |     1 | 08051U560FAT2A    |
| 47pF      | CAP CER 47PF 200V C0G/NP0 0805            | C5                                 | CAP0805-3D  |     1 | 08052U470FAT2A    |
| SMA       | CONN SMA RCPT STR 50OHM EDGE MNT          | J1                                 | SMA2MALE-3D |     1 | 132289            |
| 3.3k      | RES SMD 3.3K OHM 1% 1/8W 0805             | R1                                 | 0805-3D     |     1 | CR0805-FX-3301ELF |
| Screw     | MACH SCREW PAN HEAD SLOTTED 6-32 1/2 inch | MechSC5, MechSC6, MechSC7, MechSC8 | -           |     4 | 9336              |
| Stand Off | HEX STANDOFF #6-32 NYLON 5/8"             | MechSO5, MechSO6, MechSO7, MechSO8 | -           |     4 | 1903F             |

## 50Ω Shielded Antenna PCB Schematic Diagram

<!-- image -->

│

Evaluates: MAX66301 and MAX66250

## MAX66301-25x Evaluation System

Evaluates: MAX66301 and MAX66250

## 50Ω Shielded Antenna PCB Layout Diagrams

<!-- image -->

<!-- image -->

│

## MAX66301-25x Evaluation System

Evaluates: MAX66301 and MAX66250

## 50Ω Shielded Antenna PCB Layout Diagrams (continued)

<!-- image -->

<!-- image -->

│

## MAX66301-25x Evaluation System

Evaluates: MAX66301 and MAX66250

## 50Ω Shielded Antenna PCB Layout Diagrams (continued)

<!-- image -->

<!-- image -->

│

## MAX66301-25x Evaluation System

Evaluates: MAX66301 and MAX66250

## 50Ω Shielded Antenna PCB Layout Diagrams (continued)

<!-- image -->

│

## MAX66301-25x Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------|-----------------|
|                 0 | 5/22            | Initial release                                            | -               |
|                 1 | 4/23            | Updated kit images, reader PCB schematic, jumpers, and BOM | 1-3, 7-18       |
|                 2 | 8/23            | Added link to mobile app and NFC tag ordering part number  | 1, 9            |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX66301 and MAX66250