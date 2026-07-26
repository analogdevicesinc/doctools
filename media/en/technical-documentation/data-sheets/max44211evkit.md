<!-- lastmod 2022-08-03 -->
## MAX421 1 Evaluation Kit

## General Description

The MAX44211 evaluation kit (EV kit) provides a proven design to evaluate the MAX44211 high-current differential line driver for powerline communications (PLC). The line driver  is  an  efficient  low-distortion  power  amplifier  that provides high current to the low-impedance loads.

The MAX44211 EV kit printed circuit board (PCB) comes with a MAX44211ETP+ in a 20-pin TQFN package.

Refer to the ZENOPLCEVK1# for a complete microcontroller and line driver evaluation platform.

## Benefits and Features

- On-Board Single to Differential Amplifier (MAX9626) for Single-Ended Signal Sources to Match with MAX44211 Differential Inputs
- Connector with Accessible Signals and Supplies for Host Processor
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX4211

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- MAX44211 EV kit
- +8V to +20V, 3A DC power supply
- +2.7V to +5.5V, 100mA DC power supply
- +3.3V, 100mA DC power supply
- Function generator (Agilent 33220A)
- Artificial mains network (line impedance stabilization network) or a 50Ω load across OUT- and OUT-

## Procedure

The  MAX44211  EV  kit  is  fully  assembled  and  tested. Follow  the  steps  below  to  verify  the  board  operation. Caution: Do not turn on power supply until all con -nections are made.

- 1) Connect the positive terminal of the +8V to +20V supply to the AVDD test point and the negative terminal of the supply to the nearest AGND test point.
- 2) Connect the positive terminal of the +2.7V to +5.5V supply to the DVDD test point and the negative terminal of the supply to the nearest DGND test point.
- 3) Connect the positive terminal of the +3.3V supply to the VCC\_U2 test point and the negative terminal of the supply to the VEE\_U2 test point.
- 4) Connect the artificial mains network to the OUT connector.
- 5) Connect the signal from the function generator to the SD\_IN BNC.
- 6) Set the signal generator for 100mV P-P , 0V offset, and 100kHz sine wave.
- 7) Enable all supplies.
- 8) Enable function generator.
- 9) Observe the output signal from the artificial mains network.

<!-- image -->

## MAX44211 Evaluation Kit

Table 1. Jumper Description

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                   |
|----------|------------------|---------------------------------------------------------------------------------------------------------------|
| JU1      | Installed*       | Connects the G1 pin of the MAX44211 to DVDD for appropriate gain selection. See Table 2.                      |
| JU1      | Not installed    | Disconnects the G1 pin of the MAX44211 from DVDD for appropriate gain selection. See Table 2.                 |
| JU2      | Installed*       | Connects the G0 pin of the MAX44211 to DVDD for appropriate gain selection. See Table 2.                      |
| JU2      | Not installed    | Disconnects the G1 pin of the MAX44211 from DVDD for appropriate gain selection. See Table 2.                 |
| JU3      | Installed*       | Enables TXEN.                                                                                                 |
| JU3      | Not installed    | Disables TXEN.                                                                                                |
| JU4      | Installed        | ARIB mode.                                                                                                    |
| JU4      | Not installed*   | Standard mode.                                                                                                |
| JU5      | 1-2*             | Sets the output current limit to 2A.                                                                          |
| JU5      | 2-3              | Do not connect.                                                                                               |
| JU5      | Not installed    | Sets the output current limit as defined by a user-supplied resistor connected between the ILSET pin and GND. |
| JU6      | Installed*       | Connects the OUT- output of the MAX9626 to the input of the MAX44211.                                         |
| JU6      | Not installed    | Disconnects the OUT- output of the MAX9626 to the input of the MAX44211.                                      |
| JU7      | Installed*       | Connects the OUT+ output of the MAX9626 to the input of the MAX44211.                                         |
| JU7      | Not installed    | Disconnects the OUT+ output of the MAX9626 to the input of the MAX44211.                                      |

## Detailed Description of Hardware

The MAX44211 EV kit provides a proven design to evaluate the MAX44211 high-current line driver for power-line communications. The EV kit includes a MAX9626 amplifier used to generate the differential signal required by the MAX44211 from a single-ended input. The jumpers are used for gain and current limit settings, transmit enabling (TXEN), setting modes (MODE), and removing the single to differential input feature. A 12-pin connector is available to connect to a host processor. Also included are LEDs to indicate the status of the MAX44211.

## Analog Inputs

Differential analog inputs can be applied to the IN+ and IN- BNC on the MAX44211 EV kit.

## Optional On-Board Single to Differential Amplifier

When a differential input source is not available, the user can use the on-board single-ended to differential amplifier (MAX9626). This option requires that a separate supply

Evaluates: MAX44211

## Table 2. Gain Settings (Jumpers JU1 and JU2)

|   Gain (V/V) | G1 (JU1)      | G0 (JU0)      |
|--------------|---------------|---------------|
|            6 | Not installed | Not installed |
|           12 | Not installed | Installed     |
|           15 | Installed     | Not installed |
|           18 | Installed*    | Installed*    |

of +3.3V be applied between the VCC\_U2 and VEE\_U2 test points. The single-ended signal can be applied at the SD\_IN BNC. Shunts must be installed at jumpers JU6 and JU7 to drive the MAX44211 analog inputs.

## Gain Settings

The  gain  settings  of  the  MAX44211  are  summarized  in Table 2.

## MAX44211 Evaluation Kit

## Current Settings

Jumper  JU5  controls  the  output  current  limit  of  the MAX44211. When the shunt is in the 1-2 position of jumper JU5, the current limit is set to 2A. Users can set their own current limit by removing the shunt on jumper JU5 and connecting their own resistor between the ILSET test point and GND. Use the equation below to set the desired current limit. ILIM is amps and R SET  is in kΩ.

<!-- formula-not-decoded -->

## Status

The  MAX44211  have  two  diagnostic  status  outputs: STATUS0 AND STATUS1 . These are open-drain outputs that indicate the status of the device as shown in Table 3.

## Connector

The connector (J1) is used to connect to a host processor. Signal and supply connections are listed in Table 4.

## Component List

See the following links for component information:

- MAX44211 EV BOM

## Table 3. Status

|   STATUS1 |   STATUS0 | DEVICE STATUS                    |
|-----------|-----------|----------------------------------|
|         0 |         0 | Overtemperature shut-down active |
|         0 |         1 | High temperature warning active  |
|         1 |         0 | Overcurrent active               |
|         1 |         1 | Normal operation                 |

## Table 4. Connector Pin Assignment

|   J1 | SIGNAL   |
|------|----------|
|    1 | G0       |
|    2 | G1       |
|    3 | STATUS0  |
|    4 | STATUS1  |
|    5 | DGND     |
|    6 | DVDD     |
|    7 | MODE     |
|    8 | TXEN     |
|    9 | INP      |
|   10 | INN      |
|   11 | AGND     |
|   12 | AVDD     |

Evaluates: MAX44211

Evaluates: MAX44211

Figure 1. MAX44211 EV Kit Schematic

<!-- image -->

Evaluates: MAX44211

Figure 2. MAX44211 EV Kit Component Placement Guide-Component Side

<!-- image -->

Evaluates: MAX44211

Figure 3. MAX44211 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX44211 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

Evaluates: MAX44211

Figure 5. MAX44211 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

Figure 6. MAX44211 EV Kit PCB Layout-Solder Side

<!-- image -->

Evaluates: MAX44211

Figure 7. MAX44211 EV Kit Component Placement Guide-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX44211EVKIT# | EV Kit |

# RoHS-compliant

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX44211

MAX44211 EVKIT BOM  6/15

| TITLE: Bill of Materials DATE: 05/15/2015   | TITLE: Bill of Materials DATE: 05/15/2015   | TITLE: Bill of Materials DATE: 05/15/2015   | TITLE: Bill of Materials DATE: 05/15/2015   | TITLE: Bill of Materials DATE: 05/15/2015   | TITLE: Bill of Materials DATE: 05/15/2015                                                                                                   |          |
|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|----------|
| ITEM                                        | REF_DES DNI                                 | MFGPART #                                   | MANUFACTURER                                | VALUE                                       | DESCRIPTION                                                                                                                                 | COMMENTS |
| X2, X5,                                     |                                             |                                             |                                             |                                             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK;                                                               |          |
| 1 X1, X23,                                  | X21- AGND, -                                | 8                                           | 5011 ?                                      |                                             | 5011 PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                              |          |
| AVDD, DVDD,                                 | DGND                                        |                                             |                                             |                                             |                                                                                                                                             |          |
| 2 VOCM, VCC_U2, VEE_U2                      | -                                           | 5                                           | 5010 ?                                      |                                             | 5010 TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE                                                                                      |          |
| C1, C2, C7-C11,                             | C17 -                                       | 8 C0603C104K5RAC; C1608X7R1H104K            | KEMET; TDK                                  | 0.1UF                                       | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;NOTE:                                            |          |
| 4 C3, C4, C12-C14                           | -                                           | 5 GRM32ER71H106KA12L; CL32B106KBJNNN        | MURATA; SAMSUNG ELECTRONICS                 | 10UF                                        | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R CAPACITOR; SMT (1812); CERAMIC CHIP; 1.5UF; 100V; |          |
| 5 C5                                        | -                                           | 1 C4532X7R2A155K230KA                       | TDK                                         | 1.5UF                                       | TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R CAPACITOR; SMT (2220); CERAMIC CHIP; 1UF; 450V;                                   |          |
| 6 C6                                        | -                                           | 1 C5750X7T2W105K250KE                       | TDK                                         | 1UF                                         | TG=-55 DEGC TO +125 DEGC; TC=X7T CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 16V;                                                            |          |
|                                             | C16 -                                       | 1 CL21B106KOQNNN                            | SAMSUNG ELECTRONICS                         | 10UF                                        | TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R DIODE; TVS; SMC; PIV=440V;                                                                        |          |
|                                             | D1 -                                        | 1 SMCJ440CA                                 | LITTLE FUSE                                 | 440V                                        | IF=2.1A; -65 DEGC TO +150 DEGC                                                                                                              |          |
|                                             | D3-D6 -                                     | 4 B350A                                     | DIODES INCORPORATED                         | B350A                                       | DIODE; SCH; SMA(DO- 214AC); PIV=50V; IF=3A                                                                                                  |          |
|                                             | D7 -                                        | 1 1SMB5934BT3G                              | ON SEMICONDUCTOR                            | 24V                                         | DIODE; ZNR; SMB (DO- 214AA); VZ=24V; IZ=0.0156A TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD                                        |          |
| 11 MODE, ILSET                              | TXEN, -                                     | 3                                           | 5000 KEYSTONE                               | N/A                                         | HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD                            |          |
| 12 IN+, IN-, STATUS1                        | STATUS0, -                                  | 4                                           | 5002 KEYSTONE                               | N/A                                         | HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; CONNECTOR; FEMALE;                                                                         |          |
| 13 J3, INM,                                 | INP -                                       | 3 CN-BNC-011PG                              | FIRST TECH ELECTRONICS, CO.                 | CN-BNC-011PG                                | THROUGH HOLE; BNC JACK; STRAIGHT; 5PINS CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT                                                          |          |
| 14 J1                                       | -                                           | 1 TSW-106-08-S-D-RA                         | SAMTEC                                      | TSW-106-08-S-D-RA                           | ANGLE; 12PINS CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT;                                                                           |          |
| 15 JU1-JU4,                                 | JU6, JU7 -                                  | 6 PEC02SAAN                                 | SULLINS                                     | PEC02SAAN PEC03SAAN                         | 2PINS CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS CONNECTOR; MALE;                                                            |          |
| 16 JU5                                      | -                                           | 1 PEC03SAAN                                 | SULLINS ELECTRONICS                         |                                             | THROUGH HOLE; AC RECEPTACLE; STRAIGHT;                                                                                                      |          |
| 17 OUT                                      | -                                           | 1 770WX203                                  | QUALTEK CORP.                               | 770WX203                                    | 2PINS TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE                                         |          |
| 18 OUT+, OUT-                               | -                                           | 2                                           | 5012 ?                                      | 100K                                        | 5012 WIRE SILVER PLATE FINISH;                                                                                                              |          |
| 19 R1-R5,                                   | R7, R12 -                                   | 7 CRCW06031003FK; ERJ- 3EKF1003             | VISHAY DALE/PANASONIC                       |                                             | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM RESISTOR; 0603; 29.4K OHM; 1%; 100PPM; 0.10W; THICK                                     |          |
|                                             | R6 -                                        | 1 RC0603FR-0729K4L CR0603-16W-000T; CR0603- | YAGEO PHYCOMP                               | 29.4K                                       | FILM RESISTOR; 0603; 0 OHM; 5%;                                                                                                             |          |
|                                             | R8-R11 - -                                  | 4 16W-000RJT CRCW06031001FK; ERJ-           | VENKEL LTD. VISHAY DALE;                    | 1K                                          | 0 JUMPER; 0.063W; THICK FILM RESISTOR; 0603; 1K; 1%;                                                                                        |          |
|                                             | R13, R14 T1                                 | 2 3EKF1001V                                 | PANASONIC VITEC                             |                                             | 100PPM; 0.10W; THICK FILM TRANSFORMER; TH; 10; 1.333                                                                                        |          |
|                                             | -                                           | 1 60PR970                                   |                                             | 60PR970                                     | : 1; VITEC IC; DRV; HIGH-CURRENT DIFFERENTIAL LINE DRIVER FOR POWERLINE COMMUNICATION;                                                      |          |
|                                             | U1 -                                        | 1 MAX44211ETP+                              | MAXIM                                       | MAX44211ETP+                                | TQFN20- EP 4X4 IC; AMP; LOW-NOISE, LOW- DISTORTION, 1.35GHZ FULLY DIFFERENTIAL AMPLIFIER;                                                   |          |
|                                             | U2 -                                        | 1 MAX9626ATC+                               | MAXIM                                       | MAX9626ATC+                                 | TQFN12-EP 3X3 CAPACITOR; THROUGH HOLE- RADIAL LEAD; POLYESTER;                                                                              |          |
|                                             | C15 DNP                                     | 1 ECQ-U2A105ML                              | PANASONIC                                   | 1UF                                         | 1UF; 275V; TOL=20%; MODEL=ECQ-UL SERIES; TG=- 40 DEGC TO 1OO DEGC CAPACITOR; 1210 PACKAGE;                                                  |          |
|                                             | C18-C21 DNP                                 | 4 N/A                                       | N/A                                         | ?                                           | GENERIC DIODE; TVS; SMC; PIV=440V;                                                                                                          | OPEN     |
|                                             | D2 DNP                                      | 1 SMCJ440CA                                 | LITTLE FUSE                                 | 440V                                        | IF=2.1A; -65 DEGC TO +150 DEGC                                                                                                              |          |