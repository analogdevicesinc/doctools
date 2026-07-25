<!-- lastmod 2022-08-04 -->
## MAX14912/MAX14913 Evaluation Kit

## General Description

The MAX14912/MAX14913 evaluation kit (EV kit) provides a proven design to evaluate the MAX14912 or MAX14913 octal digital output driver. The EV kit includes an evaluation board and a graphical user interface (GUI) that provides communication from a PC to the target device through a USB port.

The EV kit includes Windows 7, Windows 8 and Windows 10 compatible software for exercising the features of the IC.  The  EV  kit  GUI  allows  controlling  the  MAX14912/ MAX14913 in either Parallel Mode or Serial (SPI) Mode.

The EV kit must be powered from an external +24V power supply and can consume up to 10A when fully loaded.

The  MAX14912EVKIT/MAX14913EVKIT  comes  with a  MAX14912AKN+,  or  MAX14913AKN+  installed  in  a 56-pin, 8 x 8mm TQFN-EP package.

## MAX14912/MAX14913 EV Kit Board Photo

Windows is a registered trademark and registered service mark of Microsoft Corporation.

<!-- image -->

## Evaluates: MAX14912/MAX14913

## Features

- Robust Operation with Wide Range of Input Voltages and Load Conditions
- SPI Interface with up to 20MHz Clock Rate
- Parallel Interface with up to 200kHz Switching Rate
- Manual Control in Parallel Mode
- Wide Logic Voltage Range
- -40°C to +125°C Temperature Range
- On-Board LED Indication of Status and Fault Conditions
- Daisy-Chain Capability
- Reverse-Voltage Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Windows ®  7, Windows 8 and Windows 10 Compatible Software

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX14912/MAX14913 Evaluation Kit

## System Block Diagram

<!-- image -->

## MAX14912/MAX14913 Evaluation Kit

## MAX14912/MAX14913EV Kit Files

| FILE                       | DECRIPTION                |
|----------------------------|---------------------------|
| MAX14912EVKITSetupV1.0.exe | Application Program (GUI) |

## Quick Start

## Required Equipment

- MAX14912/MAX14913 EV kit
- +24V power supply
- Voltmeter (optional)
- Oscilloscope (optional)
- PC with installed Windows 7, Windows 8 or Windows 10 and USB port

Note: In  the  following  section(s),  software-related  items are  identified  by  bolding.  Text  in  bold  refers  to  items directly  from  the  EV  system  software. Text  in bold and underline refers  to  items  from  the  Windows  operating system.

## Evaluates: MAX14912/MAX14913

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit www.maximintegrated.com/evkitsoftware to download the latest version of the EV kit software, MAX14912EVKIT.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software on your computer by running the MAX14912EVKITSetupV1.0.exe program inside the temporary folder. The program files are copied to your PC and icons are created in the Windows Start | Programs menu.
- 3) Verify that all jumpers are in their default positions for the SPI or parallel mode operation (Table 1). Note that the hardware is configured for SPI communication by default.
- 4) Power up the EV kit with +24V from external power supply.
- 5) Start the EV kit software by opening its icon in the Start | Programs menu.  The EV kit software appears as shown in Figure 1. Verify that the lower-right status bar indicates the EV kit hardware is Connected .The GUI automatically detects which EV kit is connected to the PC, the MAX14912 or MAX14913, and enables

Figure 1. Digital Output Driver EV Kit GUI. System Tab

<!-- image -->

Evaluates: MAX14912/MAX14913

Table 1. MAX14912/MAX14913 Board Shunt Positions and Settings

| HEADER   | SHUNT POSITION   | DESCIPTION                                                                            |
|----------|------------------|---------------------------------------------------------------------------------------|
| J3       | Open*            | Set IN8 high or low/select 16-bit or 8-bit SPI operation in GUI                       |
| J3       | 1-2              | Set IN8 high and OUT8 on/high (stand-alone parallel mode)                             |
| J3       | 2-3              | Set IN8 low and OUT8 off/low (stand-alone parallel mode)                              |
| J4       | Open*            | Set push-pull or high-side mode in GUI                                                |
| J4       | 1-2              | Set push-pull mode (stand-alone parallel mode)                                        |
| J4       | 2-3              | Set high-side mode (stand-alone parallel mode)                                        |
| J5       | Open*            | Enable/disable outputs in GUI                                                         |
| J5       | 1-2              | Enable outputs (stand-alone parallel mode)                                            |
| J5       | 2-3              | Disable (three-state) outputs (stand-alone parallel mode)                             |
| J6       | Open*            | Set IN2 high or low/enable command mode                                               |
| J6       | 1-2              | Set IN2 high and OUT2 on/high (stand-alone parallel mode)                             |
| J6       | 2-3              | Set IN2 low and OUT2 off/low (stand-alone parallel mode)                              |
| J7       | 1-2*             | Enable glitch filtering on all parallel logic inputs and CS                           |
| J7       | Open             | Disable parallel logic glitch filtering                                               |
| J8       | Open*            | Set IN7 high or low/Enable configuration command in GUI                               |
| J8       | 1-2              | Set IN7 high and OUT7 on/high (stand-alone parallel mode)                             |
| J8       | 2-3              | Set IN7 low and OUT7 off/low (stand-alone parallel mode)                              |
| J9       | Open*            | Select serial or parallel interface active in GUI                                     |
| J9       | 1-2              | Enable serial peripheral interface (SPI)                                              |
| J9       | 2-3              | Enable parallel interface (stand-alone parallel mode)                                 |
| J10      | Open*            | Enable/disable open-load detection/Set IN1 in GUI                                     |
| J10      | 1-2              | Set IN1 high and OUT1 on/high (stand-alone parallel mode)                             |
| J10      | 2-3              | Set IN1 low and OUT1 off/low (stand-alone parallel mode)                              |
| J11      | Open*            | Enable watchdog timer/set IN5 in GUI                                                  |
| J11      | 1-2              | Set IN5 high and OUT5 on/high (stand-alone parallel mode)                             |
| J11      | 2-3              | Set IN5 low and OUT5 off/low (stand-alone parallel mode)                              |
| J12      | Open*            | Enable or disable CRC detection/set IN3 in GUI                                        |
| J12      | 1-2              | Set IN3 high and OUT3 on/high (stand-alone parallel mode)                             |
|          | 2-3              | Set IN3 low and OUT3 off/low (stand-alone parallel mode)                              |
|          | 2-3              | Select 3.3V logic level                                                               |
| J13      | 1-2*             | Select 5V logic                                                                       |
| J15      | 1-2*             | level 5V supply. Replace J15 shunt with a current meter to measure power consumption. |
|          | 1-2*             | Connect Status and Fault LED anodes for outputs 1 and 5 to the driver                 |
| J16      | Open             | Disconnect Status and Fault LED anodes for outputs 1 and 5 to the driver              |

## Table 1. MAX14912/MAX14913 Board Shunt Positions and Settings (continued)

| HEADER   | SHUNT POSITION   | DESCIPTION                                                                                  |
|----------|------------------|---------------------------------------------------------------------------------------------|
| J17      | 1-2*             | Connect Status and Fault LED anodes for outputs 2 and 6 to the driver                       |
| J17      | Open             | Disconnect Status and Fault LED anodes for outputs 2 and 6 to the driver                    |
| J18      | 1-2*             | Connect Status and Fault LED anodes for outputs 3 and 7 to the driver                       |
| J18      | Open             | Disconnect Status and Fault LED anodes for outputs 3 and 7 to the driver                    |
| J19      | 1-2*             | Connect Status and Fault LED anodes for outputs 4 and 8 to the driver                       |
| J19      | Open             | Disconnect Status and Fault LED anodes for outputs 4 and 8 to the driver                    |
| J22      | 1-2              | Select 5V power to U4 from USB port (CON1)                                                  |
| J22      | 2-3*             | Select 5V power to U4 from integrated buck regulator (U1)                                   |
| J26      | 1-2*             | Disable daisy-chain communication                                                           |
| J26      | 2-3              | Enable daisy-chaining of two boards and use GUI to send a command                           |
| JMP1     | Open*            | Enable CRC Error Detection output/Set IN4 high or low in GUI                                |
| JMP1     | 1-2              | Set IN4 high and OUT4 on/high (stand-alone parallel mode)                                   |
| JMP1     | 1-4              | Set IN4 low and OUT4 off/low (stand-alone parallel mode)                                    |
| JMP1     | 1-3              | Connect CERR LED (DS1) to U1 to indicate communication error if CRC is enabled on J12       |
| JMP2     | Open*            | Enable watchdog fault output/set IN6 high or low in GUI                                     |
| JMP2     | 1-2              | Set IN6 high and OUT6 on/high (stand-alone parallel mode)                                   |
| JMP2     | 1-4              | Set IN6 low and OUT6 off/low (stand-alone parallel mode)                                    |
| JMP2     | 1-3              | Connect WDFLT LED (DS2) to U1 to indicate communication error if Watchdog is enabled on J11 |
| SW1      | 2-3, 5-6*        | Enable buck regulator of U1 to generate 5V (ON position)                                    |
| SW1      | 1-2, 4-5         | Disable buck regulator of U1. Provide an external +5V to TP1.                               |

## MAX14912/MAX14913 Evaluation Kit

serial command mode communication. Any configuration change can be made on Register Settings tab. (The following steps are used to verify functionality of the devices.)

- 6) Select System tab.
- 7) Configure each input signal as Static High from the pulldown menu, as shown in Figure 1.
- 8) Click on Drive Pins button on the left-side of the GUI.
- 9) Observe all the status LEDs (DS5 to DS12) light up, and measured output voltages on corresponding OUT\_  test point match V DD  level.
- 10)  Change the input signal to Static Low from the pulldown menu and observe as corresponding LED turned off.
- 11)  Change the input signal to Static PWM .  Select the duty cycle from the pulldown menu, refer to Figure 2, and observe the output on corresponding OUT\_ test point by oscilloscope.

## Evaluates: MAX14912/MAX14913

## General Description of Software

When  the  GUI  starts,  it  automatically  detects  which device is connected to the PC and indicates that in the status  bar  at  the  bottom-edge  of  the  GUI.  There  are two  tabs  available  to  control  the  EV  kit.  The System tab  provides  system-level  control  of  the  selected  output pins,  including  static  or  dynamic  PWM  (Pulse-Width Modulation) output in either serial or parallel Mode.  The Register Settings tab provides full control of the device, including  mode  selection,  per-channel  configuration,  and enhanced diagnostics of the device. In Serial mode, the SPI clock is set to 5MHz.

## System Tab

The System tab allows driving the output pins by setting up  the  input  signal  to  the  device  through  the  on-board USB to SPI/GPIO bridge IC, U4. Each input pin can be configured  as  Static  High,  Static  Low,  Static  PWM,  or PWM from the pulldown menu on the input lines in the block diagram shown in the System tab. Refer to Figure 3.

Figure 2. System Tab. Static PWM Configuration

<!-- image -->

## MAX14912/MAX14913 Evaluation Kit

Click Drive Pins button on the left-side of the GUI after configuring the inputs. The outputs follow the state of the inputs, while indicators connected to the OUT\_ pins show the static state or dynamic operation mode.

Connect the oscilloscope probe to OUT\_ pin to see the output signal in real-time.

In  static  PWM  and  PWM  mode,  the  GUI  generates  a 1kHz (if SRIAL pin is high) or 20kHz (if SRIAL pin is low) square wave. The level of modulation is selectable from the pulldown menu from 0% to 100%. Refer to Figure 2.

In  PWM  mode,  the  signal  is  modulated  by  a  selected waveform. It can be either a sine wave with a selectable phase, triangle, or sawtooth wave. Refer to Figure 3. The modulation frequency is adjustable from 0Hz up to 60Hz by pressing the + or -buttons. This  feature  is  useful  to control small motors, including 3-phase motors, and actuators.

## Evaluates: MAX14912/MAX14913

## Register Settings Tab

The Register Settings tab is used for detailed configuration  of  the  device  to  explore  all  the  available features in either parallel (SRIAL is low) or serial (SPI) mode  (SRIAL  is  high).  SPI  communication  is  also available  in  parallel  mode  with  the  MAX14912.  For a detailed  explanation  of  the  features,  refer  to the MAX14912/MAX14913  data  sheet.  The  mode  and  pin configuration can be set through the MAX14912 I/O pins control  group  box  on  the  right-side  of  the  tab.  Refer  to Figure 4. The pin set slide buttons allow the setting of the input pins high or low, while the read status boxes provide visual colored states of the input/output pins.

The  EV  kit  supports  a  number  of  different  devices,  as listed in Table 3.

Figure 3. System Tab. PWM Configuration

<!-- image -->

## User-Supplied SPI

To  evaluate  the  EV  kit  with  a  user-supplied  SPI  bus, disconnect  the  board  from  the  PC.  Apply  the  usersupplied CS, SCLK (CLK), MOSI (SDI) and MISO (SDO) to  the  J25  header.  Make  sure  the  master  ground  is connected to the J25.5 ground pin.

The logic level of the external SPI host should be compatible with the J13 shunt selection, (e.g., 3.3V or 5V). Use an external VL logic supply to TP19 to support different logic levels from 1.6V to 5.5V. In this case, J13 shunt should be removed.

## Daisy-Chaining

The  two  MAX1491X  EV  kits  can  be  daisy-chained  by pairing J24 of board #2 and J23 of board #1 in order to control  16  outputs  through  a  single  SPI  host.  The  J26 jumper of board #1 must be set to 2-3 position and both boards have to be powered from an external +24V. The PC should be connected to board #1.

It is also required that board #2 has installed jumpers for SPI  communication:  J9:  1-2,  J5:  1-2,  J6:  1-2,  J12:  2-3, and J11: 2-3.

The daisy-chain feature is not supported by rev 1.0 GUI and can be evaluated using user-supplied SPI interface. Refer to the MAX14912/MAX14913 data sheet for daisychain command description.

## External +5V Power Supply

An external +5V voltage can supply to TP1, +5V\_EXT. In this case the internal dc-dc controller should be disabled (BUKEN = low) by switching SW1 into off position.

## Evaluates: MAX14912/MAX14913

## Reverse-Voltage Protection

The  EV  kit  has  reverse-voltage  protection  circuitry  built on the return path of the supply current. During normal operation, the Q1 nMOSFET is ON since the gate voltage is  about  7.5V  higher  than  the  source.  Very  low  R ON   of Q1 MOSFET helps to minimize voltage drop and power dissipation to a negligible level. If V DD  becomes negative with respect to the supply ground, the MOSFET is turned off and disconnects the current path.

## Stand-Alone Operation

The EV kit can work without connecting to a PC. In this case,  jumpers  should  set  the  inputs,  refer  to  Table  1  for proper  shunt  positions.  In  stand-alone  operation,  the devices  should  be  configured  for  parallel  mode.  It  is recommended to enable internal de-bouncing by placing the J7 shunt for proper operation.

This EV kit comes with two assembly options:

The MAX14912EVKIT# comes with a MAX14912ATE+ in a 56-pin TQFN package.

The MAX14913EVKIT# comes with a MAX14913ATE+ in a 56-pin TQFN package.

Both EV Kit variations use the same PCB and bill of materials, and the only variation is the IC assembled at U1.

## Table 3. Products supported with MAX14912/MAX14913 EV kit

| PART #   | DESCRIPTION                    |
|----------|--------------------------------|
| MAX14912 | Octal High-Speed Output Driver |
| MAX14913 | Octal High-Speed Output Driver |

Figure 4. Digital Output Driver EV Kit GUI. Register Settings Tab

<!-- image -->

The two tables on the left side of the tab are the register map (upper table) and bit-by-bit control and description table (lower table). When the register is selected in upper table, the lower table gives the description of each bit and allows changing the register settings using drop down menus for writable registers 0x00 to 0x03. The register setting can be changed directly in the register map table by double clicking on the Value cell. Each data entry should follow by the 'Enter/Return' button on the keyboard. The Value cell accepts binary (0b), decimal or hex (0x) numbers and automatically convert them into binary format. The modified register changes its color from black to red until the data will be actually written to the register. There are several write and read options available through the corresponding control buttons on the upper right side of the GUI.

When the Auto Write button is selected, any data typed in, or selected through, the Setting pulldown menu will be automatically written into the corresponding writable register. The button renamed to Stop Auto Write and auto write function can be canceled by clicking on this button second time.

When the Auto Read button is selected, the write function is disabled and the GUI is constantly monitoring the status and fault conditions of the device. Clicking a second time on the button, which becomes Stop Auto Read , allows canceling this operation.

The Read All button performs a read operation of all registers after each click.

When any fault conditions occur, they will set the bit(s) in the corresponding read-only registers 0x04 to 0x07. The fault conditions should be carefully evaluated and removed externally (overvoltage/under voltage, overload, open load, etc.). After that, select the Clear Fault Registers Upon Next Write check box and perform any write/read operation to clear fault bits.

The Write Modified button performs write operation to all modified registers after each click.

## Component List, PCB Layout, and Schematic

See the following links for component information, PCB layout diagrams, and schematics.

- MAX14912/MAX14913 EV BOM
- MAX14912/MAX14913 EV PCB Layout
- MAX14912/MAX14913 EV Schematics

## Evaluates: MAX14912/MAX14913

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX14912EVKIT#* | EVKIT  |
| MAX14913EVKIT#  | EVKIT  |

*Future Product-Contact factory for availability.

#Denotes RoHS compliant package.

## MAX14912/MAX14913 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im Integrated reserYes the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX14912/MAX14913

TITLE: Bill of Materials DATE: 12/11/2015 DESIGN: max14912\_evkit\_b

## NOTE: DNI--&gt; DO NOT INSTALL ; DNP--&gt; DO NOT PROCURE

| REF_DES                                   | DNI/ DNP   | QTY MFG PART #                          | MANUFAC TURER              | VALUE           | DESCRIPTION                                                                                               | COMMENTS   |
|-------------------------------------------|------------|-----------------------------------------|----------------------------|-----------------|-----------------------------------------------------------------------------------------------------------|------------|
| 1 C2                                      | -          | 1 C3225X7S1H106K250AB                   | TDK                        | 10UF            | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                 |            |
| 2 C3-C6, C8, C10, C12, C13, C15, C16, C20 | -          | 11 GMK212B7105KG                        | TAIYO YUDEN                | 1.0UF           | CAPACITOR; SMT (0805); CERAMIC; 1UF; 35V; TOL=10%; MODEL=GMK SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R     |            |
| 3 C7, C9, C18, C21, C25, C28, C30-C36     | -          | 13 GRM188R72A104KA35; CC0603KRX7R0BB104 | MURATA; TDK                | 0.1UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R               |            |
| 4 C11, C17, C19, C22                      | -          | 4 CGA4J1X7S1C106K125                    | TDK                        | 10UF            | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S; AUTO           |            |
| 5 C14                                     | -          | 1 GRM188F51H224ZA01D                    | MURATA                     | 0.22UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.22UF; 50V; TOL=20%; MODEL=Y5V; TG=-55 DEGC TO +125 DEGC; TC=+      |            |
| 6 C23, C24, C29                           | -          | 3 C1608X5R1E475K080AC                   | TDK                        | 4.7UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R |            |
| 7 C26, C27                                | -          | 2 C0603HQN101-180FNP                    | KEMET/VE NKEL              | 18PF            | CAPACITOR; SMT; 0603; CERAMIC; 18pF; 50V; 0.25%; C0G; -55degC to + 125degC; 0 +/-30PPM/degC               |            |
| 8 CON1                                    | -          | 1 ZX62RD-AB-5P8                         | HIROSE ELECTRIC CO LTD.    | ZX62RD- AB-5P8  | CONNECTOR; MALE; SMT; MICRO-USB CONNECTOR MEETING REQUIREMENTS OF USB 2.0 STANDARD; RIGHT ANGLE; 5PINS    | MICRO-USB  |
| 9 D1                                      | -          | 1 SMDJ36CA                              | LITTELFU SE                | 36V             | DIODE; TVS; SMC (DO-214AB); VRM=36V; IPP=51.6A                                                            |            |
| 10 D2                                     | -          | 1 RB751S40                              | FAIRCHIL D SEMICON DUCTOR  | RB751S 40       | DIODE; SCH; SMT (SOD-523F); PIV=40V; IF=0.03A                                                             |            |
| 11 D11                                    | -          | 1 BZX84-A7V5                            | NXP                        | 7.5V            | DIODE; ZNR; SMT (SOT-23); VZ=7.5V; IZ=0.005A                                                              |            |
| 12 DS1-DS4, DS13- DS20                    | -          | 12 LTST-C171KRKT                        | LITE-ON ELECTRO NICS; INC. | LTST- C171KR KT | DIODE; LED; STANDARD; RED; SMT (0805); PIV=5.0V; IF=0.08A; -55 DEGC TO +85 DEGC                           |            |

| 13 DS5-DS12                | -   | 8 LTST-C171GKT      | LITE-ON ELECTRO NICS;        | INC. LTST- T        | C171GK DIODE; LED; STANDARD; GREEN; SMT (0805); PIV=5.0V; IF=0.12A; -55 DEGC TO +85 DEGC   |       |
|----------------------------|-----|---------------------|------------------------------|---------------------|--------------------------------------------------------------------------------------------|-------|
| 14 J1, J2                  | -   | 2                   | 3267 POMONA ELECTRO NICS     | 3267                | CONNECTOR; MALE; PANELMOUNT; STANDARD UNINSULATED BANANA JACK; STRAIGHT; 1PIN              |       |
| 15 J3-J6, J8-J13, J22, J26 | -   | 12 PCC03SAAN        | SULLINS                      | PCC03S AAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC   |       |
| 16 J7, J15-J19             | -   | 6 PCC02SAAN         | SULLINS                      | PCC02S AAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC   |       |
| 17 J20, J21                | -   | 2 OSTTE080104       | ON- SHORE TECHNOL OGY INC.   | OSTTE0 80104        | CONNECTOR; MALE; THROUGH HOLE; TERMINAL BLOCKS-WIRE TO BOARD; STRAIGHT; 8PINS              |       |
| 18 J23                     | -   | 1 SSQ-105-02-L-S-RA | SAMTEC                       | SSQ- 105-02- L-S-RA | CONNECTOR; FEMALE; THROUGH HOLE; SSQ SERIES; 0.025IN SQ POST SOCKET; RIGHT ANGLE; 5PINS    |       |
| 19 J24                     | -   | 1 TSW-105-25-T-S-RA | SAMTEC                       | TSW- 105-25- T-S-RA | CONNECTOR; MALE; THROUGH HOLE; 0.025IN SQ POST HEADER; RIGHT ANGLE; 5PINS                  |       |
| 20 J25                     | -   | 1 PBC05SAAN         | SULLINS ELECTRO NICS CORP.   | PBC05S AAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 5PINS; -65 DEGC TO +125 DEGC           |       |
| 21 JMP1, JMP2              | -   | 2 PEC04SAAN         | SULLINS ELECTRO NICS CORP.   | PEC04S AAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                  |       |
| 22 L1                      | -   | 1 LPS4018-104MR     | COILCRAF T                   | 100UH               | INDUCTOR; SMT; FERRITE BOBBIN CORE; 100UH; TOL=+/-20%; 0.56A                               | 100UH |
| 23 L2                      | -   | 1 MMZ1608B601C      | TDK                          | 600                 | INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL=+/- 25%; 0.5A; -55 DEGC TO +125 DEGC          |       |
| 24 Q1                      | -   | 1 AON6452           | ALPHA & OMEGA SEMICON DUCTOR | AON645 2            | TRAN; N-CHANNEL SDMOS POWER TRANSISTOR; NCH; DFN8-EP; PD-(2W); I-(26A); V-(100V)           |       |

- 25 R1, R2, R7, R8

-

4 CRCW06031001FK; ERJ- 3EKF1001V

- VISHAY DALE; PANASONI C

1K

RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM

- 26 R3-R6

-

4 CRCW0603470RFK; ERJ- 3EKF4700

- VISHAY DALE/PAN ASONIC

470 RESISTOR, 0603, 470 OHM, 1%, 100PPM, 0.10W, THICK FILM

- 27 R9, R10

-

2 ERJ-3EKF28R0V

- PANASONI C

- 28 RESISTOR; 0603; 28 OHM; 1%; 100PPM; 0.10W; THICK FILM

28 R11, R13, R19

-

- 3 CRCW060310K0FK; 9C06031A1002FK; ERJ- 3EKF1002

- VISHAY DALE/YAG EO PHICOMP/ PANASONI

C

10K

- RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM

29 R12

-

1 CRCW060315K0FK

- VISHAY DALE

15K

- RESISTOR, 0603, 15K OHM,1%, 100PPM, 0.10W, THICK FILM

30 R14

-

1 CRCW06032K20FK

- VISHAY DALE

2.2K

- RESISTOR, 0603, 2.2K OHM, 1%, 100PPM, 0.10W, THICK FILM

31 R15

-

1 CRCW060312K0FK

- VISHAY DALE

12K

RESISTOR, 0603, 12K OHM, 1%, 100PPM, 0.10W, THICK FILM

32 R23

-

1 CRCW06033K00FK

- VISHAY DALE

3K

- RESISTOR; 0603; 3K OHM; 1%; 100PPM; 0.10W; THICK FILM

33 R24

-

1 CRCW06031003FK; ERJ- 3EKF1003

- VISHAY DALE/PAN ASONIC

100K

RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM

- 34 R25-R39

-

- 15 CRCW06030000ZS; MCR03EZPJ000; ERJ- 3GEY0R00

- VISHAY DALE/ROH M/PANAS ONIC

- 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM

- 35 SCREW1-SCREW4

-

- 4 EVKIT\_STANDOFF\_M2.5\_20 MM

?

- EVKIT\_ STAND

OFF\_M2

.5\_20M

M

KIT; ASSY-STANDOFF20MM; 1PC.

STANDOFF/FEM/HEX/M2.5/(20MM)/ALUMINUM; 1PC. SCREW/SLOT/PAN/M2.5/(6MM)/STEEL; ZINC PLATE

- 36 SU1-SU11

-

11 SX1100-B

KYCON

- SX1100- B

TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED

37 SW1

-

1 EG2207

E-SWITCH EG2207

SWITCH; DPDT; THROUGH HOLE; STRAIGHT; 30V; 0.2A; SWITCH SLIDE DPDT 200MA 30V; RCOIL=0 OHM; RINSULATION=0 OHM

| 38 TP1, TP18, TP19, TP29     | -   | 4             | 5010 KEYSTON E                       |                      | N/A            | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                       |
|------------------------------|-----|---------------|--------------------------------------|----------------------|----------------|--------------------------------------------------------------------------------------------------------------------------|
| 39 TP2, TP9-TP12, TP20, TP30 | -   | 7             | 5011 KEYSTON E N/A                   |                      |                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
| 40 TP3-TP8, TP13-TP17        | -   | 11            | 5014 KEYSTON E N/A                   |                      |                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 41 TP21-TP28                 | -   | 8             | KEYSTON E                            | 5013                 | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 42 U1                        | -   | 1             | MAXIM                                | MAX14912AKN+         | MAX149 12AKN+  | IC; SWTC; OCTAL HIGH-SPEED; HIGH-SIDE SWITCH/PUSH-PULL DRIVER; TQFN56-EP                                                 |
| 43 U2                        | -   | 1             | MAXIM                                | MAX16910CATA8/V+     | 10CATA 8/V+    | MAX169 IC; VREG; EXPOSED PAD 0.2A, AUTOMOTIVE, ULTRA- LOW QUIESCENT CURRENT, LINEAR REGULATOR; TDFN8-EP 150MIL           |
| 44 U3                        | -   | 1             | MICROCHI P                           | 93LC66BT-I/OT        | 93LC66 BT-I/OT | IC; EPROM; 4K MICROWIRE SERIAL EEPROM; SOT23- 6                                                                          |
| 45 U4                        | -   | 1             | FUTURE TECHNOL OGY DEVICES INTL LTD. | FT2232HL             | FT2232 HL      | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                          |
| 46 Y1                        | -   | 1             | ABRACON                              | ABM7-12.000MHZ-D2Y-T | 12MHZ          | CRYSTAL; SMT ; 18PF; 12MHZ; +/-20PPM; +/-30PPM                                                                           |
| 47 MICRO_USB_CABLE           | DNI | 1 AK67421-1-R | ASSMANN                              |                      | AK6742 1-1-R   | CONNECTOR; MALE; USB; USB2.0 MICRO CONNECTION CABLE; USB B MICRO MALE TO USB A MALE; STRAIGHT; 5PINS-4PINS               |
| 48 SU12-SU20                 | DNI | 9 SX1100-B    | KYCON                                |                      | SX1100- B      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                  |
| 49 C1                        | DNP | 1             | PANASONI C                           | EEV-TG1H102M         | 1000UF         | CAPACITOR; SMT (CASE_K16); ALUMINUM- ELECTROLYTIC; 1000UF; 50V; TOL=20%; TG=-40 DEGC TO +125 DEGC                        |

| 50 D3-D10           | DNP   | 8 STPS0560Z                                | ST MICROEL ECTRONI CS                       | STPS05 60Z   | DIODE; SCH; SCHOTTKY RECTIFIER; SMT (SOD-123); PIV=60V; IF=0.5A   |
|---------------------|-------|--------------------------------------------|---------------------------------------------|--------------|-------------------------------------------------------------------|
| 51 R16-R18, R20-R22 | DNP   | 6 CRCW060310K0FK; 9C06031A1002FK; 3EKF1002 | ERJ- VISHAY DALE/YAG EO PHICOMP/ PANASONI C | 10K          | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                |

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

F

E

D

C

B

A

8

8

V5V

IN

J1

J2

A

TP30

DS1

A

K

CERR

DS2

K

WDFLT

VL

IN

R1

R2

7

D1

36V

1K

1K

7

1

+

J4

J6

JMP1

3

3

JMP2

3

3

J3

J5

DNI

1000UF

C1

2

TP1

+5V\_EXT

1

1

3

1

3

2

4

2

2

4

4

1

3

1

3

2

4

1

1

1

1

TP2

J7

EN

C2

10UF

VDD

2

FLTR

TP3

2

IN

PUSHPL

TP4

2

IN

CMND/IN2

TP5

IN

CERR/IN4

TP6

IN

IN6

WDFLT/IN6

TP7

2

IN

S16/IN8

TP8

2

IN

IN8

EN

IN

C3

1.0UF

IN

FLTR

J10

PUSHPL

J12

IN2

IN4

J11

J8

J9

6

PLACE CLOSE TO EACH VDD PIN

C4

C10

C8

C6

C5

C12

1.0UF

3

N.O.

1

6

4

1

3

1

3

1

3

1

3

1

3

1.0UF

1.0UF

3V3

1.0UF

IN

V5V

IN

TP18

V5V

C7

OUT

0.1UF

IN1

IN3

IN5

IN7

SRIAL

1.0UF

1

J13

1.0UF

2

1

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

N.C.

N.O.

N.C.

6

SW1

COM

COM

TP13

2

OL/IN1

TP14

2

CRC/IN3

TP15

2

IN

WDEN/IN5

TP16

2

IN

CNFG/IN7

TP17

2

SRIAL

TP9

TP10

TP11

TP12

IN

IN

IN

2

5

C9

0.1UF

FLTR

PUSHPL

IN1

IN2

IN3

IN4

IN5

IN6

IN7

IN8

SRIAL

CSB

CLK

SDI

EN

VDD

3

V5V

C11

10UF

C13

1.0UF

TP19

VL

VL

L1

100UH

C14

0.22UF

R23

3K

R24

100K

2

5

C15

1.0UF

TP20

11

VL

9

44

6

5

35

43

27

28

29

30

31

32

33

34

16

15

14

13

55

C

A

RB751S40

5

LX

BUKEN

CFP

CFN

FLTR

PUSHPL

OL/IN1

CMND/IN2

CRC/IN3

CERR/IN4

WDEN/IN5

WDFLT/IN6

CNFG/IN7

S16/IN8

SRIAL

CS

CLK

SDI

EN

D2

C16

1.0UF

17

VDD

1

3

19

VDD

TP29

22

24

VDD

GND

8

D11

7.5V

GND

21

VDD

V5V

47

49

52

VDD

VDD

VDD

IN

VDD

26

45

VDD

VDD

VDD

U1

MAX14912EAGN+

GND

GND

PGND

36

4

Q1

AON6452

50

1

G

2

S

D

5

10

3

2

IN

J15

54

VDD

EP

57

1

CB1

10A

1

2

37

V5

C17

10UF

C18

0.1UF

OUT1

OUT2

OUT3

OUT4

OUT5

OUT6

OUT7

OUT8

VPMP

LEDH15

LEDH26

LEDH37

LEDH48

LDLF1-4

LDLF5-8

LDLS1-4

LDLS5-8

SDO

FAULT

ULVO

V5V

4

18

20

23

25

46

48

51

53

7

38

39

40

41

4

3

2

1

12

42

56

IN

4

C19

10UF

R3

R4

R5

R6

DS4

DS3

A

A

IN

OUT

VDD

470

470

470

470

SDO

FAULT

R7

R8

1K

K

ULVO

K

FAULT

1K

OUT2

OUT1

TP21

1

1

1

1

OUT4

OUT6

OUT3

OUT5

TP22 TP23 TP24 TP25

J16

2

J17

2

J18

2

J19

2

DS5

CH8\_STS

DS9

CH4\_STS

DS13

CH8\_FLT

DS17

CH4\_FLT

3

OUT8

OUT7

TP26 TP27

TP28

DS6

K

K

K

K

A

A

A

A

CH3\_FLT

VDD

OUT1

OUT2

OUT3

OUT4

DS7

K

K

K

A

A

A

K

A

IN

IN

IN

IN

IN

A

A

A

A

3

CH7\_STS

DS10

CH3\_STS

DS14

CH7\_FLT

DS18

CH6\_STS

DS11

CH2\_STS

DS15

CH6\_FLT

DS19

CH2\_FLT

A

A

A

A

K

K

K

A

A

A

K

A

DNI

D3

DNI

D4

DNI

D5

DNI

D6

DS8

CH5\_STS

DS12

CH1\_STS

DS16

CH5\_FLT

DS20

CH1\_FLT

C

C

C

C

K

K

K

K

OUT5

OUT6

OUT7

IN

IN

IN

2

OUT1

OUT2

OUT3

OUT4

OUT5

OUT6

OUT7

OUT8

A

A

A

DNI

D7

DNI

D8

DNI

D9

DNI

D10

OUT8

IN

A

PROJECT TITLE:

DRAWING TITLE:

DIGITAL OUTPUT DRIVER

SIZE:

C C

C C

ENGINEER:

2

HARDWARE NUMBER:

DRAWN BY:

TEMPLATE REV.:

1.5

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

C

C

C

C

MAX14912 EVKIT

J20

J21

OUT1

OUT2

GND

GND

GND

OUT3

OUT4

GND

OUT5

OUT6

GND

GND

GND

OUT7

OUT8

GND

1

1

DATE:

REV.:

B

SHEET 1 OF 2

12/07/15

F

E

D

C

B

A

F

E

D

C

B

A

8

8

CON1

MICRO-USB

ZX62RD-AB-5P8

SHIELD

10

10

9

7

8

9

8

6

7

6

+5V\_USB

V5V

1

2

3

4

5

L2

1

2

3

4

5

2

1

600

IN

IN

7

OUT

R9

R10

J22

1

3

7

+5V\_USB

28

28

+5V\_USB

2

C20

1.0UF

IN

R11

10K

R12

15K

C21

0.1UF

1

2

3

ENABLE

SET

GND

7

R13

10K

R14

2.2K

U2

MAX16910CATA8/V+

IN

OUT

SETOV

RESET

TIMEOUT

EP

9

6

8

6

4

5

6

+1.8V

3V3

IN

1

3V3

IN

C23

4.7UF

6

VCC

VSS

2

C22

10UF

DO

IN

C24

4.7UF

3V3

C25

0.1UF

IN

U3

93LC66BT-I/OT

5

4

3

OUT

3V3

CS

CLK

DI

3V3

C28

0.1UF

IN

C29

4.7UF

R15

12K

C26

18PF

C27

18PF

2

1

Y1

12MHZ

5

5

9

VPLL

GND

1

12

VCORE

GND

5

37

VCORE

GND

11

64

VCORE

GND

15

20

31

VCCIO

GND

25

42

VCCIO

GND

35

GND

47

VCCIO

56

4

ONE CAPACITOR PER EACH POWER PIN

+1.8V

IN

IN

C30

0.1UF

C31

0.1UF

C32

0.1UF

4

VPHY

50

49

7

8

6

14

63

62

61

2

3

13

VREGIN

VREGOUT

DM

DP

REF

RESET#

EECS

EECLK

EEDATA

OSCI

OSCO

TEST

AGND

10

C33

0.1UF

3V3

C34

0.1UF

U4

FT2232HL

VCCIO

ADBUS0

16

ADBUS1

ADBUS2

ADBUS3

ADBUS4

ADBUS5

ADBUS6

ADBUS7

ACBUS0

ACBUS1

ACBUS2

ACBUS3

ACBUS4

ACBUS5

ACBUS6

ACBUS7

BDBUS0

BDBUS1

BDBUS2

BDBUS3

BDBUS4

BDBUS5

BDBUS6

BDBUS7

BCBUS0

BCBUS1

BCBUS2

BCBUS3

BCBUS4

BCBUS5

BCBUS6

BCBUS7

PWREN#

SUSPEND#

GND

51

17

18

19

21

22

23

24

26

27

28

29

30

32

33

34

38

39

40

41

43

44

45

46

48

52

53

54

55

57

58

59

60

36

4

C35

0.1UF

C36

0.1UF

DNI

R16

10K

CSB

SDO

CLK

SDO2

DNI

R17

IN

IN

IN

IN

10K

DNI

R18

1

2

3

4

5

10K

R19

J23

10K

3

DNI

R20

DNI

10K

R21

CSB

SDI

CLK

SDO

3

IN

IN

IN

IN

DNI

10K

R22

1

2

3

4

5

10K

J24

IN

3V3

J26

SINGLE

DAISY CHAIN

CSB

SDI

IN

CLK

MISO

IN

IN

IN

1

2

3

4

5

PROJECT TITLE:

DRAWING TITLE:

USB AND MCU

SIZE:

C C

C C

ENGINEER:

2

HARDWARE NUMBER:

DRAWN BY:

TEMPLATE REV.:

1.5

2

1

3

J25

R25

R26

R27

R28

R29

R30

R31

R32

R33

R34

R35

R36

R37

R38

R39

2

0

0

0

0

0

0

0

0

0

0

0

0

0

0

0

IN

IN

IN

SDO

MISO

SDO2

MAX14912 EVKIT

OUT

OUT

IN

OUT

OUT

IN

OUT

OUT

OUT

OUT

OUT

OUT

OUT

OUT

OUT

OUT

CLK

SDI

MISO

CSB

PUSHPL

FAULT

EN

SRIAL

IN1

IN2

IN3

IN4

IN5

IN6

IN7

IN8

1

1

DATE:

REV.:

B

SHEET 2 OF 2

12/07/15

F

E

D

C

B

A