<!-- lastmod 2022-08-03 -->
## ABRIDGED DATA SHEET

## MAX66300-24x Evaluation Kit

## General Description

The  MAX66300-24x  evaluation  system  (EV  system) comprises  a  MAX66300  evaluation  kit  (EV  kit)  and  a MAX66242 tag. The MAX66300 EV kit combines a RFID reader for  contactless  communication  at  13.56MHz and a SHA-256 secure authenticator coprocessor. The RFID reader covers the ISO 15693 standard and the authenticator coprocessor is based on the FIPS 180-4 standard. The MAX66242 tag operates as a solution covering the ISO 15693 standard. By pairing the MAX66300 EV kit with the MAX66242 EV kit into an EV system, EV kit software can  operate  to  show  a  secure  challenge  and  response authentication and other part specific functionality.

## MAX66300-24x EV System Content List

| PART            |   QTY | DESCRIPTION                                 |
|-----------------|-------|---------------------------------------------|
| MAX66300 EV Kit |     1 | MAX66300 evaluation kit                     |
| MAX66242 Tag    |     1 | MAX66242 tag                                |
| 3021003-03      |     1 | Qualtek USB Type A to USB Mini-Type B cable |

Ordering Information appears at end of data sheet.

Evaluates: MAX66300, MAX66242

## Features

- A Secure, Contactless RFID Reader (MAX66300)
- 3.3V or 5V AFE Operation
- UART and SPI Interface Support Through the MAXQ610
- Configuration for Lower Power Systems with Direct Antenna Connections
- On-Board 13.56MHz and 24MHz Oscillators
- Symmetric Key-Based Secure Authentication System
- Pushbuttons for Board Reset and MAX66300 Reset
- Port Select Switch Control
- Jumpers for SPI, UART, and Control Signals
- Protected Tag Solution with Peripheral Linking (MAX66242)
- HF Interface at 13.56MHz
-  User EEPROM Authenticated Memory Page Read/ Write Transactions
- User EEPROM Page or Block Read/Write Transactions
- Secure Transactions to Write Secret Keys and Compute MACs
- Energy Harvested VOUT Used to Power an LED On/Off
- I 2 C Communication with On-Board Temperature Sensor IC, DS75S
- Also Supports MAX66240 without I 2 C Interface (Tag Not Included in EV Kit)
- MAX66300-24x EV System Software Available

<!-- image -->

## ABRIDGED DATA SHEET

MAX66300-24x Evaluation Kit

## MAX66300-24x Evaluation System

<!-- image -->

│

Evaluates: MAX66300, MAX66242

## ABRIDGED DATA SHEET

## MAX66300-24x Evaluation Kit

## Quick Start

## Required Equipment

- MAX66300 EV kit (included)
- MAX66242 tag (included)
- USB Type A to USB Mini Type B cable (included)
- PC with Windows ®  8/8.1, Windows 7, or Windows Vista ®  and a spare USB port

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold only refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows OS.

## Setup Procedure

- 1) Perform the following to install the PL-2303HXD prolific driver:
- a) Download the driver file called PL2303\_Prolific\_ DriverInstaller.zip from http://files.maximinte -grated.com/sia\_bu/public/ .
- b) Unzip, Open and Run the file with the following name ' PL2303\_Prolific\_DriverInstaller.exe '.
- c) Follow the directions of the Install Wizard until Finish is reached for the PL-2303 USB-to-serial driver installation. Click the Finish button to close.
- 2) Proceed by setting up the MAX66300 EV kit hardware by doing the following:
- a) Configure the jumpers per Table 1 and Figure 46 for 3.3V operation.
- b) Set the switch SW3 per Table 2 and Figure 47 for UART operation when the MAX66300 powers up.
- c) Using the USB type A to USB type Mini B cable, connect the MAX66300 EV kit's CN1 port into a spare USB port of a PC.
- 3) Set up the MAX66242 tag hardware by doing the following:
- a) Configure the jumpers per Table 3 and Figure 48.
- b) Position the MAX66242 tag over the MAX66300 EV kit antenna.
- 4) The MAX66300 EV kit uses both the Prolific PL-2303HXD and a MAXQ610 microcontroller to provide SPI or UART connectivity to the MAX66300 device. Verify correct installation of the virtual COM port by selecting Control Panel → System → Hardware → Device Manager and expanding the Ports (COM &amp; LPT) . If the driver installed properly, the 'Prolific USB-to-Serial Comm Port' lists as in Figure 1. Note that your COM port number can be different.

Evaluates: MAX66300, MAX66242

Figure 1. MAX66300 EV kit Virtual COM Port

<!-- image -->

│

## ABRIDGED DATA SHEET

## MAX66300-24x Evaluation Kit

- 5) Unzip the 'MAX66300-24X\_EV\_Kit.zip' in a known location. Note: If you have not already obtained the software with this data sheet, request it from applications support through the following link: https://support.maximintegrated.com .
- 6) Open the 'MAX66300-24x EV Kit' folder, as shown in Figure 2 and double-click the 'setup.exe'.
- 7) Now, double-click the Install button as shown in Figure 3.
- 8) The evaluation program GUI appears as shown in Figure 4.

Figure 2. MAX66300-24x EV kit Setup

<!-- image -->

Figure 3. Application Install-Security Warning

<!-- image -->

Evaluates: MAX66300, MAX66242

│

## ABRIDGED DATA SHEET

Evaluates: MAX66300, MAX66242

MAX66300-24x Evaluation Kit

Figure 4. MAX66300-24x EV Kit GUI

<!-- image -->

## ABRIDGED DATA SHEET

MAX66300-24x Evaluation Kit

## Peripheral Transaction and User-Defined Tutorial

This tutorial involves the MAX66300 reader, the MAX66242 tag and the DS75S to show how to customize communication. The first purpose is to show how to read temperature from a DS75S I 2 C slave using the MAX66242 tag as the I 2 C master with the Peripheral Transaction tab. The second purpose is to show how to form a transmit packet using the User Defined tab.

## Peripheral Transaction with DS75S

This section demonstrates how to perform I 2 C communication to the DS75S device contained on the MAX66242 Tag  with  the  MAX66300  EV  kit.  After  completing  the

Figure 38. Inventory Button

<!-- image -->

Evaluates: MAX66300, MAX66242

Quick  Start section  with  the  GUI  open  as  in  Figure  4, click  on  rectangular  red  objects  and  confirm  red  circler objects for the following steps:

- 1) Click on the Inventory button in the General ISO 15693 Commands group box (Figure 38).
- 2) Confirm the UID number in the display of the Device List group box appears (Figure 39). Note: The MAX66242 tag's upper 36 bits are fixed at E02B00800h. Note: If the UID number does not show, then improve the reader distance by changing setting open the VOUT JB1 jumper (pins 13 and 14) of Figure 8 that disconnects harvesting energy to power the green LED.

Figure 39. Device List

<!-- image -->

│

## ABRIDGED DATA SHEET

## MAX66300-24x Evaluation Kit

- 3) Click on the Reset to Ready button in the General ISO 15693 Commands group box (Figure 40). Note: This sets the State from Quiet to Read y in the Device List .
- 4) Click on the Peripheral Transaction tab (Figure 41)
- 5) First, set the Bytes to Read to-be ' 2 '. Second, set the I 2 C address in the Write Data field to be ' 91 h' (with read bit set). Third, click the Execute button. Fourth, verify the temperature returned from the I 2 C bus. In this example, the bytes '1800h' read corresponds to a temperature of 24.0°C from the DS75S (Figure 42)

Evaluates: MAX66300, MAX66242

Figure 40. Ready to Reset Button

<!-- image -->

Figure 41. Peripheral Transaction Tab

<!-- image -->

│

## ABRIDGED DATA SHEET

MAX66300-24x Evaluation Kit

Evaluates: MAX66300, MAX66242

Figure 42. Temperature Read Button

<!-- image -->

│

## ABRIDGED DATA SHEET

## MAX66300-24x Evaluation Kit

## User Defined

This section demonstrates how to form a transmit packet with  the  MAX66300  EV  kit  and  receive  the  response from  the  MAX66242 tag. Start  out  were  the Peripheral Transaction section  left  off  and  perform  the  following steps:

- 1) Click on the User Defined tab (Figure 43).
- 2) To create the transmit packet from the previous Peripheral Transaction and send:
- a) First, enter bytes in the MAX66300 COMMAND BYTES field for a general write command (90h), the command parameter for command ID (06h), delay time LSB (4Ch), and delay time for MSB (1D). For more details, refer to the General Write section in the MAX66300 data sheet (Figure 44).
- b) Second, enter the RF field byte (20h). The sets the request flag values.
- c) Enter the ISO15693 Payload (A22BD5E7060080002BE010019102h) to deliver the request to the MAX66242 tag (Figure 44).
- d) Send the formed packet by clicking on Execute button (Figure 44). The STX, ICK, CRC, CHK, and ETX append automatically.
- e) Verify temperature in the response is approximately what was seen the Peripheral Transaction . In this case, the bytes '1780h' correspond to 23.5°C.

Evaluates: MAX66300, MAX66242

Figure 43. User Defined Tab

<!-- image -->

│

## ABRIDGED DATA SHEET

MAX66300-24x Evaluation Kit

Evaluates: MAX66300, MAX66242

Figure 44. Send Transmit Packet

<!-- image -->

│

## ABRIDGED DATA SHEET

## MAX66300-24x Evaluation Kit

## Detailed Description of Hardware

The MAX66300-24x EV system block diagram in Figure 45  is  a  functional  representation.  Starting  from  the  left side, the prolific device (i.e., PL-2303HXD) provides a vir -tual COM port to link the PC to the MAXQ610 and is fully compatible  with  USB  2.0  specification.  The  MAXQ610 is  preloaded with firmware that either passes the UART protocol along or converts the UART protocol to SPI with a SCLK at 2.667MHz. The MAX66300 provides the RFID reader processing per ISO 15693 and the secure coprocessor functionality is based on FIPS 180-4 standard. The AFE in the MAX66300 drives a PCB antenna in a 100mW configuration.  Lastly,  the  MAX66242  is  the  tag  in  the

Evaluates: MAX66300, MAX66242

system-supporting authentication (i.e., clone prevention), harvesting power to illuminate an LED and an I 2 C link to a DS75S peripheral.

## Jumpers and Switches

Both the MAX66300 EV kit and the MAX66242 tag have jumpers  that  allow  configuration  options  or  for  external linking  during  evaluation.  Additionally,  the  MAX66300 contains switches for more configuration options.

Table 1 and Figure 46 describe the MAX66300 EV kit and the function of the jumpers. Default settings from Table 1, in summary, support UART or SPI linking, USB power, and 3.3V operation.

Figure 45. MAX66300-24x EV System Block Diagram

<!-- image -->

│

## ABRIDGED DATA SHEET

MAX66300-24x Evaluation Kit

Table 1. MAX66300 EV Kit Jumpers

| REFERENCE DESIGNATOR   | MAX66300 DESCRIPTION                                                                                                                                                                                                                   | DEFAULT SETTING                                                                                                                                                         | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                               |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JB1                    | AGD-Reference Voltage Output                                                                                                                                                                                                           | Close (1-2)                                                                                                                                                             | Pullup enabled for 3.3V operation                                                                                                                                                                                                                                                                                                                                                                      |
| JB2                    | TXD-UART Transmit RXD-UART Receive MISO-Master In-Slave Out MOSI-Master Out-Slave In SCLK-Serial Clock SSEL-Slave Select IRQ-Interrupt Out SLEEP-Sleep Mode In BUSY-Busy Out PORTSLCT-Port Select In TP (EN)-Test Pin GND-Ground Probe | Close (1-2), Close (3-4), Close (5-6), Close (7-8), Close (9-10), Close (11-12), Open (13-14), Close (15-16), Close (17-18), Close (19-20), Close (21-22), Open (23-24) | Link to MAXQ610 UART receive Link to MAXQ610 UART transmit Link to MAXQ610 SPI MISO Link to MAXQ610 SPI MOSI Link to MAXQ610 SPI SCLK Link to MAXQ610 SPI SSEL Link to MAXQ610 P1.6 PIO (not used) Link to MAXQ610 P1.5 Out for sleep control Link to MAXQ610 P1.4 In detect SPI busy Link to MAXQ610 P3.5 and switch 5 (SW3) Link to MAXQ610 P1.7 out high and jumper (J9) Ground connect for probing |
| JB3                    | VCC5-5V Supply Rail                                                                                                                                                                                                                    | Close (1-2)                                                                                                                                                             | Link to 5V USB power from the PC                                                                                                                                                                                                                                                                                                                                                                       |
| J3                     | 3.3V/5V VDD_AFE_DIG Select                                                                                                                                                                                                             | Close (1-2)                                                                                                                                                             | Select AFE digital voltage to be 3.3V                                                                                                                                                                                                                                                                                                                                                                  |
| J4                     | 3.3V/5V VDDA1 Select                                                                                                                                                                                                                   | Close (1-2)                                                                                                                                                             | Select AFE antenna driver 1 to be 3.3V                                                                                                                                                                                                                                                                                                                                                                 |
| J5                     | 3.3V/5V VDDA2 Select                                                                                                                                                                                                                   | Close (1-2)                                                                                                                                                             | Select AFE antenna driver 2 to be 3.3V                                                                                                                                                                                                                                                                                                                                                                 |
| J9                     | TP Select                                                                                                                                                                                                                              | Close (2-3)                                                                                                                                                             | Pulled low since driven high from MAXQ610                                                                                                                                                                                                                                                                                                                                                              |

│

Evaluates: MAX66300, MAX66242

## ABRIDGED DATA SHEET

MAX66300-24x Evaluation Kit

Evaluates: MAX66300, MAX66242

Figure 46. MAX66300 EV Kit Jumpers

<!-- image -->

│

## ABRIDGED DATA SHEET

## MAX66300-24x Evaluation Kit

Table  2  and  Figure  47  describe  the  switch  settings  for MAX66300 EV kit. SW1 is reserved for future use. SW3 switch  positions  1  to  4  are  reserved  for  future  use  and position  5  selects  between  UART or SPI port selection. SW4 resets the MAX66300 during evaluation if needed.

## Table 2. MAX66300 EV Kit Switches

Figure 47. MAX66300 EV Kit Switch

| REFERENCE DESIGNATOR   | POSITION       | ON POSITION (SIGNAL IS GROUNDED)   | OFF POSITION (SIGNAL IS PULLED UP)   |
|------------------------|----------------|------------------------------------|--------------------------------------|
| SW1                    | PUSH 1         | Not used                           | Not used                             |
| SW3                    | Switch 1       | Not used                           | Not used                             |
| SW3                    | Switch 2       | Not used                           | Not used                             |
| SW3                    | Switch 3       | Not used                           | Not used                             |
| SW3                    | Switch 4       | Not used                           | Not used                             |
| SW3                    | Port select    | UART port selection                | SPI port selection                   |
| SW4                    | Reset MAX66300 | Push-MAX66300 in reset             | MAX66300 normal                      |

<!-- image -->

Evaluates: MAX66300, MAX66242

Table  3  and  Figure  48 describe  the  jumper  settings  for the MAX66242 tag. Default settings support I 2 C linking, access to PIO pin and energy harvesting.

│

## ABRIDGED DATA SHEET

## MAX66300-24x Evaluation Kit

## Table 3. JB1 MAX66242 Tag Jumpers

Figure 48. MAX66242 EV Kit Jumpers

| REFERENCE DESIGNATOR   | MAX66242 DESCRIPTION                                                                                                                                                                       | DEFAULT SETTING                                                                              | FUNCTION                                                                                                                                                                                                           |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JB1                    | V CC /GND-Power and ground SDA-I 2 C serial data in/out SCL-I 2 C serial clock input PIO-Multipurpose open drain V OUT -Energy harvesting pin GND-Ground link V OUT -Energy harvesting pin | Open (1-2), Close (3-4), Close (5-6), Open (7-8), Close (9-10), Close (11-12), Close (13-14) | Used for probing as pin 1 is V CC and pin 2 is GND Link SDAto DS75S Link SCL to DS75S Pin 7 is PIO and pin 8 is not used Link VOUT to DS75S's V CC Link GND to DS75S Link VOUT to the LED through a 3.6kΩ resistor |

<!-- image -->

Evaluates: MAX66300, MAX66242

│

## ABRIDGED DATA SHEET

MAX66300-24x Evaluation Kit

## Ordering Information

| PART               | TYPE      |
|--------------------|-----------|
| MAX66300-24xEVKIT# | EV System |

#Denotes RoHS compliant.

Evaluates: MAX66300, MAX66242

## ABRIDGED DATA SHEET

MAX66300-24x Evaluation Kit

## MAX66300-24x EV Kit Bill of Materials

| COMMENT             | DESCRIPTION                        | DESIGNATOR            | FOOTPRINT       | LIBREF       | PART NUMBER            |
|---------------------|------------------------------------|-----------------------|-----------------|--------------|------------------------|
| 0.1uF               | 0.1uF/0603/16V                     | C1, C8, C9, C10, C11, | CCAP0603-3D     | CAP          | 11 CL10B104KO8NNNC     |
| 10uF/0805/10V       | 10uF/0805/10V                      | C2                    | CAP0805-3D      | CAP          | 1 CL21A106KOQNNNE      |
| 10uF/1206           |                                    | C3                    | CAP1206-3D      | CAPACITOR    | 1 CL21A106KOQNNNE      |
| 2.2uF/0805/16V      | 2.2uF/0805/16V                     | C4, C6                | CAP0805-3D      | CAP          | 2 CL21B225KPFNNNE      |
| 10nF                | 10nF/0603/25V                      | C5                    | CAP0603-3D      | CAP          | 1 CL10B103KB8NCNC      |
| 0.1uF               |                                    | C7                    | CAP1206-3D      | CAP          | 1 CL31B104KBCNNNC      |
| 1uF                 |                                    | C15                   | CAP1206-3D      | CAP          | 1 CL31B105KAHNNNE      |
| 22pF                |                                    | C18, C19, C25, C29,   | C3CAP0603-3D    | CAP          | 6 CL10C220JB8NNNC      |
| op1 680pF op2 100pF |                                    | C20                   | CAP1206-3D      | CAP          | 1 CGJ5C4C0G2H101J060AA |
| op1 680pF op2 20ohm |                                    | C21                   | CAP1206-3D      | CAP          | 1 ERJ-8ENF20R0V        |
| 33pF                |                                    | C22                   | CAP1206-3D      | CAP          | 1 CL31C330JBCNNNC      |
| 820pF               |                                    | C23                   | CAP0603-3D      | CAP          | 1 CL10C821JB8NNNC      |
| 560pF               |                                    | C24                   | CAP1206-3D      | CAP          | 1 CL31C561JBCNNNC      |
| op1-1nF op2-15pF    |                                    | C26                   | CAP0603-3D      | CAP          | 1 CGJ3E2C0G1H150J080AA |
| op1-680pF op2-68pF  |                                    | C27                   | CAP0603-3D      | CAP          | 1 CGJ3E2C0G1H680J080AA |
| 820pF               |                                    | C28                   | CAP1206-3D      | CAP          | 1 CL31C821JBCNNNC      |
| 1uF                 |                                    | C31, C32              | CAP0603-3D      | CAP          | 2 CL10B105KP8NNNC      |
| 3.3uF               |                                    | C35, C37              | CAP1206-3D      | CAP          | 2 CL31B335KOHNNNE      |
| 10nF                |                                    | C36, C38, C39         | CAP1206-3D      | CAP          | 3 CL31B103KBCNNNC      |
| USB MINI            | SMT USB MINI Connector             | CN1                   | USBMINI-3D      | USB-MINI     | 1 KMBX-SMT-5S-S-30TR   |
| LED GREEN           |                                    | D2                    | 0603LED-3DGREEN | LED          | 1 598-8081-107F        |
| BLUE                |                                    | D4                    | 0603LED-3DBLUE  | LED          | 1 LTST-C191TBKT        |
| BLM21PG221SN1D      | Ferrite Chip                       | FB1, FB2              | 0805-3D         | FUSE1        | 2 BLM21PG221SN1D       |
| TO AI27 BOARD       |                                    | J2                    | DIH7X2-3D       | JUMPBLOCK 7  | 1 PREC007DAAN-RC       |
| JUMPER              | 2 WAY SELECTION JUMPER             | J3, J4, J5            | SIP3-3DSHORT    | JUMPER2WAY-2 | 3 9-146276-0-03        |
| COAX                | COAX                               | J6                    | SMA1-3D         | COAX2        | 1 CONSMA001            |
| JTAG CONNECTOR #1   | 2 x 10 dual row 0.100mil male conn | J7                    | DIH5X2-3D       | JUMPBLOCK 5  | 1 M20-9760546          |
| JTAG CONNECTOR #2   | 2 x 10 dual row 0.100mil male conn | J8                    | DIH5X2-3D       | JUMPBLOCK 5  | 1 M20-9760546          |
| 2 WAY JUMPER        | 2 WAY SELECTION JUMPER             | J9                    | SIP3-3DSHORT    | JUMPER2WAY-2 | 1 9-146276-0-03        |
| SHUNT               |                                    | JB1, JB3, JB6         | SIP2-3D         | JUMPBLOCK 1  | 3 9-146276-0-02        |
| HEADER              |                                    | JB2                   | DIH12X2-3D      | JUMPBLOCK 12 | 1 952-1848-ND          |
| op1-270nH op2-X     |                                    | L1                    | 1206-3D         | INDUCTOR     | 1                      |
| op1-180nH op2-X     |                                    | L2                    | 1206-3D         | INDUCTOR     | 1                      |
| ANTENNA             |                                    | L3                    | AXIAL0.6        | INDUCTOR     | 1 N/A                  |
| 10uH                |                                    | L4, L5                | 1206INDUCTOR-3D | INDUCTOR     | 2 LQH31MN100J03L       |
| INDUCTOR            |                                    | L6, L7, L8            | 1206INDUCTOR-3D | INDUCTOR     | 3 RMCF1206ZT0R00       |
| BSS84               | PCHAN FET                          | Q1                    | 16001-3D        | PCHAN FET    | 1 BSS84                |
| 3.3K                | 1.5k/0603                          | R1, R9, R10           | 0603-3D         | RESISTOR     | 3 ERJ-3EKF3301V        |
| 10                  | 10R/0603                           | R2                    | 0603-3D         | RESISTOR     | 1 ERJ-3EKF10R0V        |
| 27                  | 27R/0603                           | R3, R4                | 0603-3D         | RESISTOR     | 2 ERJ-3EKF27R0V        |
| 1.5k                | 1.5k/0603                          | R5, R14               | 0603-3D         | RESISTOR     | 2 ERJ-3EKF1501V        |
| 50 Ohm              |                                    | R6                    | 1206-3D         | RESISTOR     | 1 RNCP1206FTD49R9      |
| op1-X op2-0         |                                    | R8, R12, R13          | 1206-3D         | RESISTOR     | 3 RMCF1206ZT0R00       |
| 750                 |                                    | R11                   | 0603-3D         | RESISTOR     | 1 ERJ-3EKF7500V        |
| 10K                 |                                    | R15, R16, R25         | 0603-3D         | RESISTOR     | 3 ERJ-3EKF1002V        |
| 20K                 |                                    | R17, R18              | 1206-3D         | RESISTOR     | 2 ERJ-8ENF2002V        |
| DNP                 | 0R/0603                            | R19, R20, R23         | 0603-3D         | RESISTOR     | 3                      |

│

Evaluates: MAX66300, MAX66242

## ABRIDGED DATA SHEET

MAX66300-24x Evaluation Kit

## MAX66300-24x EV Kit Bill of Materials

| COMMENT          | DESCRIPTION                          | DESIGNATOR          | FOOTPRINT         | LIBREF         | PART NUMBER            |
|------------------|--------------------------------------|---------------------|-------------------|----------------|------------------------|
| op1-0 op2-X, DNP |                                      | R21, R22            | 1206-3D           | RESISTOR       | 2                      |
| 20k              |                                      | R24                 | 0603-3D           | RESISTOR       | 1 ERJ-3EKF2002V        |
| 22               |                                      | R26, R27, R28, R29, | R30603-3D         | RESISTOR       | 5 ERJ-3EKF22R0V        |
| 10K              |                                      | RP1                 | SIP7              | RESISTOR SIP7  | 1 CSC07A0110K0GEK      |
| PUSH             |                                      | SW1                 | RESET2-3D         | SW-PB          | 1 B3S-1000             |
| RESET            |                                      | SW2, SW4            | RESET2-3D         | SW-PB          | 2 B3S-1000             |
| DIPSWITCH5       |                                      | SW3                 | DIPSWITCH5 SMT    | DIPSWITCH5     | 1 219-5LPST            |
| GND              | Test Point                           | TP1, TP4, TP5       | TP-3D             | TP             | 3 5011                 |
| VCC5             | Test Point                           | TP2                 | TP-3D             | TP             | 1 5011                 |
| VCC3.3           | Test Point                           | TP3                 | TP-3D             | TP             | 1 5011                 |
| PL-2303HXD       | USB to Serial Bridge                 | U1                  | TSSOP28-3D        | PL-2303HXD     | 1 PL-2303HXD Rev D     |
| MAX8887EZK33+T   | LDO 300mA Linear Regulator 1.5, 1.8, | 2.8U3               | SOT23-5-3D        | MAX8887        | 1 MAX8887EZK33+T       |
| MAXQ610          | Multi I/O Processor w/ IR support    | U4                  | TQFN44 7MM        | MAXQ610 TQFN44 | 1 MAXQ610J-0000+       |
| AI47 R2          |                                      | U5                  | TQFN56 8MM        | AI47 R2        | 1 MAX66300             |
| 16MHz            |                                      | X1                  | CRYSTAL-CSM-3X-3D | CRYSTAL        | 1 ECS-160-20-3X-TR     |
| 24.00MHz         |                                      | X2                  | CRYSTAL-ECX-64    | CRYSTAL        | 1 ECS-240-20-23A-EN-TR |
| 13.56MHz         |                                      | X3                  | CRYSTAL-CSM-3X-3D | CRYSTAL        | 1 ECS-135.6-20-3X-TR   |

Evaluates: MAX66300, MAX66242

## ABRIDGED DATA SHEET

## MAX66300-24x Evaluation Kit

## MAX66300-24x EV Kit Schematics

<!-- image -->

│

Evaluates: MAX66300, MAX66242

## ABRIDGED DATA SHEET

## MAX66300-24x Evaluation Kit

## MAX66300-24x EV Kit PCB Layout

<!-- image -->

│

Evaluates: MAX66300, MAX66242

## ABRIDGED DATA SHEET

MAX66300-24x Evaluation Kit

## MAX66300-24x EV Kit PCB Layout (continued)

<!-- image -->

│

Evaluates: MAX66300, MAX66242

## ABRIDGED DATA SHEET

MAX66300-24x Evaluation Kit

## MAX66300-24x EV Kit PCB Layout (continued)

<!-- image -->

│

Evaluates: MAX66300, MAX66242

## ABRIDGED DATA SHEET

MAX66300-24x Evaluation Kit

## MAX66242 EV Kit Bill of Materials

| DESCRIPTION                                  | DESIGNATOR   |   QUANTITY | PART NUMBER     |
|----------------------------------------------|--------------|------------|-----------------|
| PCB#, Assembled for MAX66242#K00 Kit         |              |          1 | 90-66242#K00    |
| ISO 15693, I2C, SHA-256, and 4Kb User EEPROM | U1           |          1 | MAX66242ESA+    |
| 2-WIRE DIG THER 0.5C SOIC-8                  | U2           |          1 | DS75S+          |
| CAP,25V,10% 0.1uF,X7R,CER,0603               | C1           |          1 | C1608X7R1E104K  |
| LED+,GREEN CLEAR,3.2V,20MA,0603              | D1           |          1 | 598-8081-107F   |
| RES+,3.2K OHM,0.1%,0603                      | R1, R2, R3   |          3 | RT0603BRD073K2L |
| Header, 7X2                                  | JB1          |          1 | 10897142        |
| SHUNT+,LP W/HANDLE 2 POS 30AU                | Jumper       |          5 | 4-881545-2      |

Evaluates: MAX66300, MAX66242

A

B

C

D

## ABRIDGED DATA SHEET

## MAX66300-24x Evaluation Kit

## MAX66242 EV Kit Schematic

1

1

2

2

Evaluates: MAX66300, MAX66242

4

3

5

<!-- image -->

3

4

5

6

Sheet        o

f

Drawn  By:

6

Title MAX66242  EVKIT

Size Number

Tabloid

Date:

File:

9/15/2014

C:\rspencer\..\MAX662xxRev2.SchDoc Revision

5

MAXIM

MAXIM

│

A

B

C

D

## ABRIDGED DATA SHEET

MAX66300-24x Evaluation Kit

## MAX66242 EV Kit PCB Layout

<!-- image -->

│

Evaluates: MAX66300, MAX66242

## ABRIDGED DATA SHEET

MAX66300-24x Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                      | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------|-----------------|
|                 0 | 5/16            | Initial release                  | -               |
|                 1 | 8/16            | Added bullet to Features section | 1               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX66300, MAX66242