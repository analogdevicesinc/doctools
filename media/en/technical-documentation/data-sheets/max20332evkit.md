<!-- lastmod 2022-08-03 -->
## MAX20332 Evaluation Kit

## General Description

The MAX20332 evaluation kit (EV kit) is a fully assembled and  tested  PCB  that  evaluates  the  MAX20332  USB charger  detection  with  integrated  overvoltage  protector. The  EV  kit  features  a  Pmod™  connector,  allowing  the USB2PMB2 adapter board to provide I 2 C interface.

The  EV  kit  features  an  on-board  LDO  to  generate  a supply voltage from the USB +5V. The on-board LDO output is configurable for 4.2V, 3.3V, or 2.3V to power the IC.

The  EV  kit  software  controls  the  USB2PMB2  adapter board over the USB, which generates I 2 C commands.

## Features

- USB-Powered Operation
- Proven High-Speed USB PCB Layout
- Pmod I 2 C Interface
- USB Connectors for Device Multiplexing
- Surface-Mount Components
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Pmod is a trademark of Digilent Inc.

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

Evaluates: MAX20332

## Quick Start

## Recommended Equipment

Note: In the following sections, software-related items are identified by bold text. Text in bold refers to items directly from the install of EV kit software. Text which is bold and underlined refers to items from the Windows operating system.

- MAX20332 EV kit (USB cables included)
- Two USB drives
- User-supplied Windows XP ® , Windows Vista ® , Windows ®  7, and Windows 10 PC with two available USB ports

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Visit https://www.maximintegrated.com to download the latest version of the EV kit software, MAX20332EVKitSetupVxxx.ZIP located on the MAX20332 EV kit web page. Download the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software on your computer by running the MAX20332EVKitSetupVxxx.EXE program inside the temporary folder.
- 3) Verify that all jumpers are in their default positions, as shown in Table 1.
- 4) Connect the USB2PMB2 adapter board to J1 PMOD connector on the EV Kit.
- 5) Connect a USB A-to-micro-B cable between the PC and the X1 port on the USB2PMB2. USB driver should be installed automatically.
- 6) Connect the USB A-to-micro-B cable between the PC and the USB1 port on the EV kit.
- 7) Connect the USB A-to-micro-B cable between the PC and the USB4 port on the EV kit.

<!-- image -->

## MAX20332 Evaluation Kit

- 8) Start the MAX20332 EV Kit tool. The EV kit software main window appears, as shown in Figure 2.
- 9) If connection is successfully established, the status bar at the bottom displays Connected .
- 10)  Connect the two USB drives to the USB2 and USB3 ports on the EV Kit.
- 11) In the Control Panel tab, select USB Switches connected to UT/UR position from the drop-down list in the USB Switch Control group box.
- 12)  Verify that the USB drive connected to the USB3 port is displayed in the computer windows, Devices

Figure 2. MAX20332 EV Kit Software Main Window (Control Panel Tab)

<!-- image -->

with Removable Storage section.

- 13)  Select USB Switches connected to TD+/TDposition from the drop-down list in the USB Switch Control group box.
- 14) Verify that the USB drive connected to the USB2 port is displayed in the computer windows, Devices with Removable Storage section.
- 15)  The EV kit is now ready for additional evaluation.

│

## Detailed Description of Software

## Graphic User Interface (GUI)

The MAX20332 EV kit software GUI provides a convenient way  to  test  the  features  of  the  MAX20332.  Figure  2 shows  the  EV  kit  software's Control  Panel tab  sheet, while Figure 3 shows the Control Registers tab sheet.

The EV kit software Control Panel tab sheet divides the EV kit functions into logical blocks. The EV kit software Register Map tab sheet allows configuration of all the I 2 C registers of the MAX20332. The register to be read from or  written  to  can  be  selected  in  the  left  table.  The  right table  contains  descriptions  for  each  bit  of  the  selected 8-bit  register. At  the  bottom of the tab page, all bits are displayed along with their field names. To set a bit, click the bit label. Bold text represents logic 1 and regular text represents logic 0. To commit the changes to the device, click 'Write' in the bottom right of the tab page.

## Software Startup

Upon starting the program, the EV kit software automatically searches  for  the  USB  interface  circuit  and  then  for  the IC device address. The EV kit enters the normal operating mode  when  the  USB  connection  is  detected  and  has found the device address. If the USB connection is not detected, the status bar displays Not Connected .  If  the USB connection is detected but the MAX20332 is not, the status bar displays MAX20332 Not Detected .

The Read All button reads all the registers visible on the current tab page. All statuses are polled continuously. The polling feature can be disabled in the Options section of the menu bar by selecting Disable Polling .

## Device ID

The Device Info group box displays the IC's Vendor ID , and Chip Rev .

## Interrupt Settings

The Interrupt  Settings group  box  features  an Enable Interrupt button to enable or disable the IC interrupt logic. This group box also features radio group boxes to configure the Interrupt Polarity , Interrupt Type , and Interrupt Delay .

## Interrupts and Status

The Interrupt and Status group box shows the state of the status registers and their corresponding interrupts. By checking  or  unchecking  the Mask option,  the  user  can control which interrupts cause the INT output to be pulled low when asserted. Clicking the Read Interrupts button will  read  and  clear  the  interrupts  visible  in  the  current tab. Asserted  interrupts  are  denoted  by  bold  text  in  the Interrupt Name field. All statuses are polled continuously. The polling feature can be disabled in the Options section of the menu bar by selecting Disable Polling .

## Data Contact Detection

The Data Contact Detection (DCD) group box provides a DCD Enabled checkbox to enable or disable the DCD, and a DCD Exit Method radio group box to set the DCD exit method.

## USB Switch Control

The USB Switch Control group box configures the IC's USB1 port. The USB1 port can be connected to USB2, USB3, or disconnected from both ports.

## ADC

The ADC group box provides an Enable ADC button to enable or disable the ADC, an ID Auto Switch Control button  to  enable  or  disable  the  ID  auto  switch,  and  an ADC  Debounce  Time drop-down  list  to  set  the  ADC debounce time.

## Charger Detection

The Charger  Detection group  box  provides Enable Charger Detection button to enable or disable the charger detection, a Manual Charger Detection button to force a charger detection manually.

## Charger Type

The  Charger  Type  group  box  displays  the  result  of  the charger  detection  and  the  status  of  the  charger  type interrupt. By checking or unchecking the Interrupt Mask checkbox, the user can also control if the interrupt causes the INT output to be pulled low when asserted.

## USB Switch Control

The USB Switch Control group box configures the USB switches.

## General Settings

The General Settings group  box  provides  four  buttons for general settings. The Enable Low Power Mode button enables  or  disables  the  low-power  mode.  The Enable Charge  Pump button  enables  or  disables  the  charge pump for the negative signals. The USB Compliant button sets  the  USB  compatibility  of  the  device. The  Enable Apple's  Next  Charger  Detection button  enables  or disables Apple's next (future) charger detection.

This group box also features a radio group box for configuring the Manual OVP Control.

## Charger Control Enable Output

The Charger Control Enable Output group box features a Force  CE  Output button  to  force  enable  the  IC  CE output logic.  When this button is toggled on, CE output logic value is set by the CE Output Forced Value.

## MAX20332 Evaluation Kit

## Detailed Description of Hardware

The  MAX20332  EV  kit  evaluates  the  MAX20332  USB charger  detection  with  integrated  overvoltage  protector, which communicates over the I2C interface. The EV kit demonstrates the IC features such as charger detection, overvoltage protection, and USB switch control. The EV kit uses the IC in a 16-bump (1.6mm x 1.6mm) wafer-level package (WLP) on a proven, four-layer PCB design. The EV kit operates from the USB +5V DC and therefore does not require an external power supply.

## USB Connectors

The  EV  kit  provides  USB  connectors  to  accommodate the USB devices. Connect the output USB devices to the USB2 and USB3 connectors and connect the input device to the USB1 connector to evaluate the IC's USB switches.

## Table 1. Jumper Table (JU1-JU13)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                        |
|----------|------------------|------------------------------------------------------------------------------------|
| JU1      | 1-2*             | On-board VB supply. Connects VBUS (USB4-1) to VB.                                  |
| JU1      | 2-3              | External VB supply. Externally supply VB with 3.5V to 36V.                         |
| JU2      | 1-2*             | On-board VBAT supply. Connect INT_VBAT to VBAT.                                    |
| JU2      | 2-3              | External VBAT supply. Externally supply VBAT with 2.8V to 5.5V.                    |
| JU3      | Closed*          | On-board I2C. Connects the on-board SCL signal to the SCL test point.              |
| JU3      | Open             | User-supplied I2C. Open the jumper and apply the SCL signal to the SCL test point. |
| JU4      | Closed*          | On-board I2C. Connects on-board SDAsignal to the SDAtest point.                    |
|          | Open             | User-supplied I2C. Open the jumper and apply the SDAsignal to the SDAtest point.   |
| JU5      | Closed*          | Connects the INT test point to an LED indicator.                                   |
| JU5      | Open             | Disconnects the INT test point from an LED indicator.                              |
| JU6      | Closed*          | Connects the CE test point to an LED indicator.                                    |
| JU6      | Open             | Disconnects the CE test point from an LED indicator.                               |
| JU7      | Closed*          | Connects the VB test point to an LED indicator.                                    |
| JU7      | Open             | Disconnects the VB test point from an LED indicator.                               |
| JU8      | Closed*          | Connects the VBAT test point to an LED indicator.                                  |
| JU8      | Open             | Disconnects the VBAT test point from an LED indicator.                             |
| JU9      | Closed*          | Connects the OUT test point to an LED indicator.                                   |
| JU9      | Open             | Disconnects the OUT test point from an LED indicator.                              |
| JU10     | 1-2*             | INT_VBAT = 2.3V.                                                                   |
| JU10     | 1-3              | INT_VBAT = 3.3V.                                                                   |
| JU10     | 1-4              | INT_VBAT = 4.2V.                                                                   |

│

## Test Points

The  EV  kit  provides  test  points  to  access  the  IC  input/ output signals. When charging a battery using a powermanagement integrated circuit (PMIC), connect the PMIC input  to  the  OUT  test  point,  connect  the  PMIC  charger enable  pin  to  the  CE  test  point,  and  connect  the  PMIC charger  output  and  ground  to  the  VBAT  and  GND  test points, respectively. Connect the battery positive terminal to  the  VBAT  test  point.  Connect  the  battery  negative terminal to the GND test point.

## DB Circuit

The EV kit provides circuits  to  indicate  the DB (U1-A3) output  status.  The  circuits  include  U3,  U4,  N1,  N2,  D8, D9,  D10,  and  their  associated  resistors  and  capacitors. The circuits are powered by OUT through jumper JU13. When DB outputs a logic-low, LED D9 illuminates. When DB outputs high impedance, LED D10 illuminates.

Evaluates: MAX20332

## Table 1. Jumper Table (JU1-JU13) (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                 |
|----------|------------------|---------------------------------------------|
| JU11     | 1-2              | ADC detection resistor = 30.1k W .          |
| JU11     | 3-4              | ADC detection resistor = 80.6k W .          |
| JU11     | 5-6              | ADC detection resistor = 150k W .           |
| JU11     | 7-8              | ADC detection resistor = 200k W .           |
| JU11     | 9-10             | ADC detection resistor < 1.50k W .          |
| JU11     | Open*            | ADC detection resistor > 750k W .           |
| JU12     | Closed           | USB1 shield connected to GND.               |
| JU12     | Open*            | USB1 shield not connected to GND.           |
| JU13     | Closed*          | DB circuit powered by OUT.                  |
| JU13     | Open             | DB circuit not used.                        |
| JU14     | 1-2              | On-board 3.3V supply. Connect +3.3V to VIO. |
| JU14     | 2-3*             | External VIO supply. Externally supply VIO. |
| JU15     | 1-2              | Connects VBUS2 to OUT.                      |
| JU15     | 2-3*             | Connects VBUS2 to +5V                       |

## Component Suppliers

| SUPPLIER        | WEBSITE               |
|-----------------|-----------------------|
| Murata Americas | www.muratamericas.com |
| TDK Corp        | www.component.tdk.com |

Note:

Indicate that you are using the MAX20332 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20332EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX20332

│

## MAX20332 Evaluation Kit

## MAX20332 EV Kit Bill of Materials

|   ITEM | REF_DES                                                |   QTY | MFG PART #                                                             | MANUFACTURER                                 | VALUE             | DESCRIPTION                                                                                                      | COMMENTS   |
|--------|--------------------------------------------------------|-------|------------------------------------------------------------------------|----------------------------------------------|-------------------|------------------------------------------------------------------------------------------------------------------|------------|
|      1 | UR, UT, VB, +5V, OUT, TD+, TD-, VBAT, EXT_5V, EXT_VBAT |    10 | 5000 KEYSTONE                                                          | 5000 KEYSTONE                                | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|      2 | C1, C3, C7, C9-C11, C115                               |     7 | GRM21BR71H105KA12; CL21B105KBFNNNE; C2012X7R1H105K085AC; UMK212B7105KG | MURATA; SAMSUNG ELECTRONICS;TDK; TAIYO YUDEN | 1UF               | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                         |            |
|      3 | C2, C100, C102, C103                                   |     4 | C0603C104K5RAC; C1608X7R1H104K                                         | KEMET;TDK                                    | 0.1UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                      |            |
|      4 | C4-C6, C101                                            |     4 | GRM31CR71H475KA12                                                      | MURATA                                       | 4.7UF             | CAPACITOR; SMT (1206); CERAMIC CHIP; 4.7UF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R               |            |
|      5 | C8, C114                                               |     2 | GRM21BR71A106KE51                                                      | MURATA                                       | 10UF              | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R      |            |
|      6 | CE, DB, CD+, CD-, INT, SCL, SDA                        |     7 | 5002 KEYSTONE                                                          | 5002 KEYSTONE                                | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;            |            |
|      7 | D1, D2, D9                                             |     3 | LS L29K-G1J2-1-Z                                                       | OSRAM                                        | LS L29K-G1J2-1-Z  | DIODE; LED; SMART; RED; SMT (0603); PIV=1.8V; IF=0.02A; - 40 DEGC TO +100 DEGC                                   |            |
|      8 | D3-D5, D8                                              |     4 | 598-8070-107F                                                          | DIALIGHT                                     | 598-8070-107F     | DIODE; LED; STANDARD; GREEN; SMT (0603); PIV=3.2V; IF=0.02A                                                      |            |
|      9 | D7                                                     |     1 | CMPZ5242B                                                              | CENTRAL SEMICONDUCTOR                        | 12V               | DIODE; ZNR; SMT (SOT-23); VZ=12V; IZ=0.02A                                                                       |            |
|     10 | D10                                                    |     1 | LTST-C150KSKT                                                          | LITE-ON ELECTRONICS INC.                     | LTST-C150KSKT     | DIODE; LED; ULTRA BRIGHT CHIP LED; YELLOW; SMT (1206); PIV=2.1V; IF=0.02A                                        |            |
|     11 | J1                                                     |     1 | TSW-106-08-S-D-RA                                                      | SAMTEC                                       | TSW-106-08-S-D-RA | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS;                                                        |            |
|     12 | JU1, JU2, JU14, JU15                                   |     4 | PEC03SAAN                                                              | SULLINS                                      | PEC03SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                        |            |
|     13 | JU3-JU9, JU12, JU13, JU16                              |    10 | PEC02SAAN                                                              | SULLINS                                      | PEC02SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                        |            |
|     14 | JU10                                                   |     1 | TSW-104-07-L-S                                                         | SAMTEC                                       | TSW-104-07-L-S    | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS                                |            |
|     15 | JU11                                                   |     1 | PEC05DAAN                                                              | SULLINS ELECTRONICS CORP.                    | PEC05DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 10PINS; -65 DEGC TO +125 DEGC                                |            |
|     16 | N1, N2                                                 |     2 | FDV303N                                                                | FAIRCHILD SEMICONDUCTOR                      | FDV303N           | TRAN; DIGITAL FET; NCH; SOT-23; PD-(0.35W); IC-(0.68A); VCEO-(25V); -55 DEGC TO +150 DEGC                        |            |
|     17 | R1, R16, R21                                           |     3 | RC1608J000CS; CR0603-J/- 000ELF;RC0603JR-070RL                         | SAMSUNG ELECTRONICS; BOURNS;YAGEO PH         |                   | 0 RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                           |            |
|     18 | R2-R5                                                  |     4 | CRCW06032K20JN; ERJ-3GEYJ222V                                          | VISHAY DALE; PANASONIC                       | 2.2K              | RESISTOR; 0603; 2.2K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                          |            |
|     19 | R6-R8, R15, R27-R29                                    |     7 | RR0816P-102-B-T5; PCF0603R-1K0B                                        | SUSUMU CO LTD; TT ELECTRONICS                | 1K                | RESISTOR; 0603; 1K OHM; 0.1%; 25PPM; 0.063W; METAL FILM                                                          |            |
|     20 | R9, R10, R30, R31                                      |     4 | ERJ-3GEYJ104V                                                          | PANASONIC                                    | 100K              | RESISTOR; 0603; 100K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                          |            |
|     21 | R11                                                    |     1 | CRCW0603102KFK                                                         | VISHAY DALE                                  | 102K              | RESISTOR; 0603; 102K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                          |            |

Evaluates: MAX20332

## MAX20332 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES    |   QTY | MFG PART #                    | MANUFACTURER              | VALUE           | DESCRIPTION                                                                                                                           | COMMENTS   |
|--------|------------|-------|-------------------------------|---------------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------|------------|
|     22 | R12        |     1 | CRCW060343K2FK; ERJ-3EKF4322V | VISHAY DALE; PANASONIC    | 43.2K           | RESISTOR; 0603; 43.2K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                              |            |
|     23 | R13        |     1 | CRCW060361K9FK                | VISHAY DALE               | 61.9K           | RESISTOR; 0603; 61.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                              |            |
|     24 | R14        |     1 | CRCW0603124KFK                | VISHAY DALE               | 124K            | RESISTOR; 0603; 124K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                               |            |
|     25 | R17        |     1 | CRCW06033012FK                | VISHAY DALE               | 30.1K           | RESISTOR; 0603; 30.1K; 1%; 100PPM; 0.10W; THICK FILM                                                                                  |            |
|     26 | R18        |     1 | CRCW060380K6FK                | VISHAY DALE               | 80.6K           | RESISTOR; 0603; 80.6K OHM; 1%; 100PPM; 0.10W; METAL FILM                                                                              |            |
|     27 | R19        |     1 | CRCW0603150KFK                | VISHAY DALE               | 150K            | RESISTOR, 0603, 150K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                               |            |
|     28 | R20        |     1 | CRCW06032003FK                | VISHAY DALE               | 200K            | RESISTOR; 0603; 200K; 1%; 100PPM; 0.10W; THICK FILM                                                                                   |            |
|     29 | R22        |     1 | CRCW060347K5FK                | VISHAY DALE               | 47.5K           | RESISTOR; 0603; 47.5K; 1%; 100PPM; 0.1W; THICK FILM                                                                                   |            |
|     30 | R23        |     1 | RT0603BRD0764K9L              | YAGEO PHYCOMP             | 64.9K           | RESISTOR; 0603; 64.9K OHM; 0.1%; 25PPM; 0.1W; THIN FILM                                                                               |            |
|     31 | R24        |     1 | ERJ-3EKF4422V                 | PANASONIC                 | 44.2K           | RESISTOR; 0603; 44.2K OHM; 1%; 100PPM; 0.1W ; THICK FILM                                                                              |            |
|     32 | R25, R26   |     2 | CPF-A-0603B4K7E               | TE CONNECTIVITY           | 4.7K            | RESISTOR; 0603; 4.7K OHM; 0.1%; 25PPM; 0.063W; THIN FILM                                                                              |            |
|     33 | SU1-SU15   |    15 | STC02SYAN                     | SULLINS ELECTRONICS CORP. | STC02SYAN       | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL               |            |
|     34 | TP1, TP2   |     2 | 5001                          | KEYSTONE                  | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                    | GND        |
|     35 | U1         |     1 | MAX20332EWE+                  | MAXIM                     | MAX20332EWE+    | EVKIT PART - IC; DET; USB CHARGER DETECTION WITH INTEGRATED OVERVOLTAGE PROTECTOR; PACKAGE CODE: W161C1+2; PACKAGE OUTLINE: 21-100246 |            |
|     36 | U2         |     1 | MAX8880EUT+                   | MAXIM                     | MAX8880EUT+     | IC; VREG; ULTRA-LOW-IQ LOW-DROPOUT LINEAR REGULATOR WITH POK; SOT23-6                                                                 |            |
|     37 | U3         |     1 | MAX9032AUA+                   | MAXIM                     | MAX9032AUA      | IC; COMP; LOW-COST, ULTRA-SMALL, DUAL SINGLE- SUPPLY COMPARATOR; UMAX8                                                                |            |
|     38 | U4         |     1 | 74LVC1G86W5                   | DIODES INCORPORATED       | 74LVC1G86W5-7   | IC; OR; SINGLE 2 INPUT EXCLUSIVE OR GATE; SOT25                                                                                       |            |
|     39 | U103       |     1 | MAX8511EXK33+                 | MAXIM                     | MAX8511EXK33    | IC; VREG; ULTRA-LOW-NOISE, HIGH PSRR, LOW-DROPOUT, LINEAR REGULATOR; SC70-5 ; -40 DEGC TO +85 DEGC                                    |            |
|     40 | USB1, USB4 |     2 | 10118192-0001LF               | FCI CONNECT               | 10118192-0001LF | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                                               |            |
|     41 | USB2, USB3 |     2 | 67643-3911                    | MOLEX                     | 67643-3911      | CONNECTOR; FEMALE; THROUGH HOLE; USB A-TYPE CONNECTOR; RIGHT ANGLE; 4PINS                                                             |            |
|     42 | PCB        |     1 | MAX                           | MAXIM                     | PCB             | PCB:MAX                                                                                                                               | -          |

## MAX20332 EV Kit Schematic

Evaluates: MAX20332

<!-- image -->

## MAX20332 EV Kit PCB Layout Diagrams

MAX20332 EV Kit-Top Silkscreen

<!-- image -->

Evaluates: MAX20332

MAX20332 EV Kit-Top

<!-- image -->

│

## MAX20332 EV Kit PCB Layout Diagrams (continued)

MAX20332 EV Kit-Internal 2

<!-- image -->

MAX20332 EV Kit-Internal 3

<!-- image -->

│

## MAX20332 EV Kit PCB Layout Diagrams (continued)

MAX20332 EV Kit-Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. Ma[iP Integrated reserYes the right to change the circuitry and specifications without notice at any tiPe.

│

Evaluates: MAX20332