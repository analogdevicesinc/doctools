<!-- lastmod 2022-08-03 -->
## General Description

The MAX9626  evaluation kit (EV kit) provides a proven design to evaluate the MAX9626 low-noise, lowdistortion, and high-bandwidth differential amplifier/ADC driver  in  a  12-pin  TQFN  package.  The  EV  kit  circuit  is preconfigured  as  an  ADC  driver.  SMA  connectors are  provided  for  the  board  input/output  and  the  EV  kit operates off a single 2.85V to 5.25V power supply. The EV kit  also  evaluates  the  MAX9627/MAX9628. Request a  free  MAX9627/MAX9628  IC  sample  from  the  factory when ordering the EV kit.

<!-- image -->

## MAX9626 Evaluation Kit

## Features

- S 2.85V to 5.25V Single-Supply Range
- S Factory-Set 1V/V Gain
- S Adjustable-Output Common-Mode Voltage
- S Shutdown Input
- S Also Evaluates the MAX9627/MAX9628 (IC Replacement)
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9626EVKIT+ | EV Kit |

## Component List

| DESIGNATION                |   QTY | DESCRIPTION                                                                                    |
|----------------------------|-------|------------------------------------------------------------------------------------------------|
| C1, C6                     |     2 | 1000pF Q 10%, 50V X7R ceramic capacitors (0402) Murata GRM155R71H102K TDK C1005X7R1H102K       |
| C2, C3, C4, C8             |     4 | 0.1 F F Q 10%, 10V X5R ceramic capacitors (0402) Murata GRM155R61A104K TDK C1005X5R1A104K      |
| C5, C7                     |     2 | 10 F F Q 10%, 10V tantalum capacitors (A case) AVX TAJA106K010R Vishay/Sprague 595D106X9010A2T |
| IN+, IN-, OUT+, OUT-, VOCM |     5 | Edge-mount receptacle SMA connectors                                                           |
| JU1                        |     1 | 2-pin header                                                                                   |
| R1, R2, R17                |     3 | 0 I resistors (0402)                                                                           |

| DESIGNATION           |   QTY | DESCRIPTION                                                  |
|-----------------------|-------|--------------------------------------------------------------|
| R3, R4, R14, R15, R16 |     0 | Not installed, resistors (0402)                              |
| R5                    |     1 | 100k I Q 5% resistor (0402)                                  |
| R6, R7                |     2 | 64.9 I Q 1% resistors (0402)                                 |
| R8, R9                |     2 | 100 I Q 1% resistors (0402)                                  |
| R10, R11              |     2 | 10k I Q 1% resistors (0402)                                  |
| R12, R13              |     2 | 249 I Q 1% resistors (0402)                                  |
| SHDB, TP1, TP2, TP3   |     4 | Test points                                                  |
| T1                    |     1 | Surface-mount RF transformer Coilcraft Z9314-AL              |
| U1                    |     1 | Low-noise differential amplifier (12 TQFN) Maxim MAX9626ATC+ |
| -                     |     1 | Shunts                                                       |
| -                     |     1 | PCB: MAX9626/27/28 EVALUATION KIT+                           |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 843-946-0238 | www.avxcorp.com             |
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX9626 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9626 Evaluation Kit

## Quick Start

## Required Equipment

- MAX9626 EV kit
- 2.85V to 5.25V, 100mA DC power supply (VCC)
- Oscilloscope
- Signal generator

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  the steps below to verify board operation. Caution: Do not turn  on  the  power  supply  until  all  connections  are completed.

- 1)  This  circuit  requires  a  supply  voltage  of  2.85V  to 5.25V. For evaluation purposes, connect a 5V supply to the VCC PCB pad.
- 2)  Connect the power-supply ground to the GND PCB pad.
- 3)  Connect  the  OUT+  SMA  connector  to  the  oscilloscope.
- 4)  Turn on the power supply.
- 5)  Apply a signal at the IN+ and IN- SMA connectors.
- 6)  Verify the output signal on the oscilloscope.

## Table 1. JU1 Jumper Selection

| SHUNT POSITION   | SHDB PIN                    | EV KIT FUNCTION   |
|------------------|-----------------------------|-------------------|
| Installed        | Connected to GND            | Disabled          |
| Not installed*   | Connected to VCC through R5 | Enabled           |

* Default position.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description of Hardware

## Input/Output

The  MAX9626  EV  kit  provides  SMA  connectors  at  the inputs to accept differential signals at IN+ and IN-. At the output, SMA connectors OUT+ and OUT- are provided to monitor the output signal. By default, OUT- is connected to GND through resistor R17.

## Input Termination Resistors

The  EV  kit  provides  placeholders  (R3  and  R4)  to terminate  IN+  and  IN-,  respectively.  Install  resistors on  R3  and  R4  if  input  termination  is  required.  When internal  terminations  are  used,  remove  external  termination resistors R6 and R7.

## Shutdown Mode (SHDB)

Jumper  JU1  controls  the  shutdown  mode  (SHDB)  of the  device.  When  SHDB  is  pulled  low,  the  device  is disabled. When the SHDB pin is pulled high, the device is enabled. See Table 1 for JU1 jumper selection.

## Output Common-Mode Voltage (VOCM)

The  output  common  mode  can  be  easily  set  by applying a voltage at the VOCM input PCB pad on the EV kit, thus eliminating the need for a coupling transformer or  AC-coupling  capacitors.  An  SMA  connector  is  also provided  at  VOCM  to  allow  a  high-frequency  signal  to characterize  the  bandwidth  of  the  VOCM  path.  In  this case, a resistor must be installed at R16 and capacitors C3, C6, and C7 should be removed.

<!-- image -->

## MAX9626 Evaluation Kit

Figure 1. MAX9626 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX9626 Evaluation Kit

<!-- image -->

Figure 2. MAX9626 EV Kit Component Placement GuideComponent Side

Figure 3. MAX9626 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9626 EV Kit PCB Layout-Internal Layer 2 (GND)

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 5. MAX9626 EV Kit PCB Layout-Internal Layer 3 (GND)

<!-- image -->

## MAX9626 Evaluation Kit

Figure 6. MAX9626 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX9626 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/10           | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

6

<!-- image -->