<!-- lastmod 2022-08-02 -->
## MAX14922 Evaluation Kit

## General Description

The MAX14922 evaluation kit (EV kit) provides a proven design to evaluate the MAX14922 industrial-grade highside  switch  controller  for  ground  connected  resistive, inductive, and capacitive loads with diagnostics.

The MAX14922 EV kit must be powered from an external +24V power supply and can draw more than 10A when fully loaded.

The  EV  kit  PCB  comes  with  the  MAX14922ATE+ (16  TQFN,  3mm  x  3mm)  device  installed,  and  includes Si7322DN, n-channel FET and PCB space for a power FET in a TO-252/DPAK/SOT428 package, enabling easy and simple evaluation of the device with loads.

## Features

- Robust Operation with Wide Range of Input Voltages and Load Conditions
- Safety and Protection Device Included for +24V Supply Evaluation with Up To ±1.2kV IEC 61000-4-5 at Source to Ground
- Fast Inductive Load Demagnetization
- LED Indication of Status and Fault Conditions
- Overvoltage
- Overcurrent
-  Ready
- Thermal warning Fault Condition Indication
- Included Si7322DN FET with Placement Option to Include TO-252 Package FETs
- Autoretry Option Using a t BLANK  Feature During Overcurrent Conditions
- Optional On-Chip +5V Logic from MAX14922
- +2.5V to +5.5V Wide Logic-Voltage Range
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX14922

## Quick Start

## Required Equipment

- MAX14922 EV kit
- Up to +60V DC power supply
- Optional +2.5V to +5.5V DC power supply
- Optional signal generator
- Load

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers are in default positions (Table 1).
- 2) Connect the EV kit to the external DC power supply through V DD  banana plugs. Do not turn on the power supply.
- 3) Connect  the  load  through  LOAD  banana  plug  and connect the load return to the GND (ground return) banana plug.
- 4) Verify shunt positions for required operation.
- 5) The default shunt position on J1 connects the internal 5V output to the logic supply V L  input. An external 5V supply is not required in this case.
- 6) The default shunt position on J4 ties the IN input to 5V, forcing the Gate high to turn on the external FET.
- 7) When using a signal generator to turn on/off the ex -ternal FET, remove shunt J4 and connect the signal generator output using the BNC input J12 or SWITCH CONTROL connector input.
- 8) Jumpers J2, J3, J9, J10, and J11 are diagnostic outputs. Verify the default positions in Table 1 and install the shunts when fault indication is required.
- 9) Set the desired resistive load and turn on the power supply.

<!-- image -->

## MAX14922 Evaluation Kit

Table 1. MAX14922 EV Kit Shunt Positions and Settings

| HEADER   | SHUNT POSITION   | FUNCTION DESCRIPTION                                                                                                                                                                                                           |
|----------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1       | 1-2*             | V 5 5V output connected to V L logic supply input.                                                                                                                                                                             |
| J1       | Not Installed    | V L logic supply must be externally provided using the V LOGIC connector.                                                                                                                                                      |
| J2       | 1-2              | Connects LO logic output to the pull-down resistor and RED fault indication LED. Use when undervoltage V DD / LOAD-output detection is needed. Populate R5, R6, and R7 resistors appropriately.                                |
| J2       | Not Installed*   | Disconnects the pull-down resistor. LED not in use. Use this mode when the V DD /LOAD- detection function is not in use (R5, R6, and R7 resistors are DNI/default mode).                                                       |
| J3       | 1-2*             | Connects the RDY logic output to the pull-up resistor and RED fault indication LED. The RDY status output indicates RED when the Gate output of MAX14922 is forced off, turning the external switch OFF. This indicates fault. |
| J3       | Not Installed    | Disconnects the pull-up resistor. The fault indication function is not in use.                                                                                                                                                 |
| J4       | 1-2*             | IN input is pulled High. Turns-on the FET.                                                                                                                                                                                     |
| J4       | Not Installed    | IN input is pulled low by R4 pull-down resistor. Use J12 BNC input to apply toggling input from signal generator to turn on/off external FET.                                                                                  |
| J5       |                  | V DD to external FETs drain test point or V DRAIN                                                                                                                                                                              |
| J6       |                  | Gate test point                                                                                                                                                                                                                |
| J7       |                  | Load/Source test point                                                                                                                                                                                                         |
| J8       | Not Installed*   | The COMP input is left unconnected.                                                                                                                                                                                            |
| J8       | 1-2              | Connects the V DD /DRAIN to the COMP input. Choose R5 and R6 resistors appropriately to reduce power dissipation.                                                                                                              |
| J8       | 2-3              | Connects the SOURCE to the COMP input. Choose R5 and R7 resistors appropriately to reduce power dissipation.                                                                                                                   |
| J9       | 1-2*             | Connects OV logic output to pull-up resistor and RED fault indication LED. Overvoltage at V DD /Drain turns on RED LED indicating fault.                                                                                       |
| J9       | Not Installed    | Disconnects the pull-up resistor. The fault indication function is not in use.                                                                                                                                                 |
| J10      | 1-2*             | Connects THW logic output to the pull-up resistor and RED fault indication LED. Thermal warning indication turns on RED LED.                                                                                                   |
| J10      | Not Installed    | Disconnects the pull-up resistor. The fault indication function is not in use                                                                                                                                                  |
| J11      | 1-2*             | Connects the OVCURR logic output to the pull-up resistor and RED fault indication LED. The overcurrent indication turns on the RED LED.                                                                                        |
| J11      | Not Installed    | Disconnects the pull-up resistor. The fault indication function is not in use.                                                                                                                                                 |

Evaluates: MAX14922

│

## Detailed Description of Hardware

MAX14922EV  kit  provides  an  easy-to-use  and  flexible solution  for  evaluating  the  MAX14922,  high-side  switch controller  for  industrial  applications.  The  EV  kit  comes with  the  MAX14922  device  and  Si7322DN  MOSFET included to enable users to easily connect the loads and evaluate the device and the system. Also, the kit comes preinstalled with protection devices enabling evaluation of the device with a standard +24V industrial supply with up to 1.2kV surge protection at source/load output to ground.

The  kit  also  provides  space  to  add  and  evaluate  higher power  MOSFETs  with  TO-252  (DPAK)/SOT28  package. When replacing the MOSFET at M2 space (TO-252 device), make sure the M1 FET (Si7322DN) device is removed.

## Optional Logic Supply

The MAX14922 EV kit comes with an on-board 5V supply from the MAX14922 integrated regulator. The logic supply input  (V L )  can  either  be  powered  from  the  V 5   on-board integrated  supply  or  externally.  When  enabling  the  onboard integrated 5V supply, jumper J1 should be installed. By removing the J1 jumper, the external logic supply must be provided at the V LOGIC  supply pad input.

## IN Configuration to

## Table 2. MAX14922 EV kit Diagnostic Output Features

| DIAGNOSTIC FEATURE    | JUMPER   | TEST POINT   | FUNCTION DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|-----------------------|----------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Overvoltage Detection | J9       | OVER_VOLTAGE | Active Low Output. During an overvoltage fault at the V DD input, output goes LOW. When J9 is installed, the RED status is ON indicating the fault.                                                                                                                                                                                                                                                                                                                                                                                      |
| Thermal Warning       | J10      | TH_WARNING   | Active Low Output. When the temperature is above 110°C, the thermal warning status output goes LOW. When J10 is installed, the RED status is ON indicating the fault                                                                                                                                                                                                                                                                                                                                                                     |
| Overcurrent           | J11      | OVERCURRENT  | Active Low Output. Output goes LOW when an overcurrent condition is detected. When J11 is installed, the RED status LED is ON indicating the fault. Changing the R1 resistor value changes the overcurrent threshold. Refer to the MAX14922 data sheet for more information.                                                                                                                                                                                                                                                             |
| Ready                 | J3       | RDY          | Active Low Output. At normal operation when the device is powered ON, the RDY output is HIGH, indicating that the Gate output can turn on the external FET. When the RDY output is LOW, there is a fault present, which forces the output LOW. When J3 is installed, the RED status LED indicates a fault.                                                                                                                                                                                                                               |
| Voltage Monitor       | J2       | LO           | Active Low Output Monitors. The COMP input provides an option to monitor the supply to the chip or to monitor the high-side output voltage. The device compares the COMP input with an internal 1.025V bias. When using the COMP input, use Jumper J8 to choose to monitor either source or drain. When monitoring the source/load, use the R7 and R5 resistors to divide down the voltage. When monitoring V DD or drain, use R6 and R5 resistors to divide down the voltage. Refer to Table 1 for EV kit shunt positions and settings. |

## Control External Switch

The  EV  kit  offers  the  following  configuration  to  control external switches M1 or M2. Jumper J4 when installed, pulls  the  IN  input  to  V L   (V)  high,  enabling  the  switch ON. When the J4 jumper shunt is removed, the R4 100k pulldown  resistor  pulls  down  the  IN  input  to  GND  (low) thereby turning Off the switch. Alternatively, if it is desired to  provide  a  time  varying  signal  to  the  IN  input,  the SWITCH\_CONTROL input provides an option to control the  switch  when  input  is  supplied  either  from  a  signal generator or from a controller.

## Diagnostic Features

The MAX14922 EV kit features on-board diagnostics to monitor  faults.  Jumpers  J9  through  J12  allow  the  user the option to view the diagnostic outputs through status RED LEDs. Alternatively, test points are provided for each diagnostic  output  for  probe  (measurement).  When  the functions of the LED are not needed by the user, removing any of the jumper shunts J9-J11, J2-J3 disables the LED  with  its  corresponding  diagnostic  output.  Table  2 shows the feature of the diagnostic outputs.

## Current Limit Autoretry Timing

The  MAX14922  EV  kit  comes  with  a  default  1nF  C8 capacitor connected to the t BLANK  input that determines the blanking and autoretry timing in case of an overcurrent  scenario. A  1nF  capacitor  provides  33μs  of  current limit time (t ON\_CL ) and 9ms of off time (t OFF\_CL ) based on a short-circuit of the S pin to GND and a V DD  supply voltage of +24V. After 9ms, the device autoretries turning on the external FET. For more information regarding current limit and autoretry timing, refer to the IC data sheet. The EV kit features a 12mΩ sense resistor at R1, which sets the current limit threshold to 2.5A. Current limiting is enabled when the load current is more than the threshold.

## Working with Different Supply Inputs

The MAX14922 EV kit comes with a default supply clamps to handle up to +60V supply input at V DD .  Although when working  with  standard  +24V  supply  providing  power  to VDD of  the  EV  kit,  the  current  components  can  still  be used  for  evaluation.  Replacing  D5  with  SM30T35CAY and D1 with SBMJ33A changes the protection parameters necessary for a +24V supply environment evaluation.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14922EVKIT# | EV Kit |

#Denotes an RoHS-compliant part.

## MAX14922 Evaluation Kit

## MAX14922 EV Kit Bill of Materials

| ITEM     | REF_DES                                                               | DNI/DNP   | QTY   | MFG PART #                                                                                                 | MANUFACTURER                                       | VALUE            | DESCRIPTION                                                                                                             | COMMENTS   |
|----------|-----------------------------------------------------------------------|-----------|-------|------------------------------------------------------------------------------------------------------------|----------------------------------------------------|------------------|-------------------------------------------------------------------------------------------------------------------------|------------|
| 1        | C1                                                                    | -         | 1     | C5750X7S2A106M230KB                                                                                        | TDK                                                | 10UF             | CAPACITOR; SMT (2220); CERAMIC CHIP; 10UF; 100V; TOL=20%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7S                      |            |
| 2        | C2                                                                    | -         | 1     | GRM31CR72A105KA01; C3216X7R2A105K160AA; GCH31CR72A105KE01; HMK316B7105KLH                                  | MURATA;TDK;MURATA; TAIYO YUDEN                     | 1UF              | CAPACITOR; SMT; 1206; CERAMIC; 1uF; 100V; 10%; X7R; -55 DEGC TO +125 DEGC                                               |            |
| 3        | C3                                                                    | -         | 1     | C3216C0G2A104J160; CGA5L1C0G2A104J160AC                                                                    | TDK;TDK                                            | 0.1UF            | CAPACITOR; SMT (1206); CERAMIC CHIP; 0.1UF; 100V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                              |            |
| 4        | C4, C5                                                                | -         | 2     | C0603C102K1GAC; C1608C0G2A102K080AA                                                                        | KEMET;TDK                                          | 1000PF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 100V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=                    |            |
| 5        | C6                                                                    | -         | 1     | GRM188R71E105KA12; CGA3E1X7R1E105K; TMK107B7105KA; 06033C105KAT2A; GCM188R71E105KA64; C1608X7R1E105K080AE; | MURATA;TDK;TAIYO YUDEN;AVX;MURATA; TAIYO YUDEN;TDK | 1UF              | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; TG=- 55 DEGC TO +125 DEGC; TC=X7R                               |            |
| 6        | C7                                                                    | -         | 1     | C1608C0G1E103J080AA                                                                                        | TDK                                                | 0.01UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 25V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                      |            |
| 7        | C8                                                                    | -         | 1     | GRM1885C1H102JA01; C1608C0G1H102J080AA;                                                                    | MURATA;TDK;MURATA                                  | 1000PF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC                                      |            |
| 8        | D1                                                                    | -         | 1     | GCM1885C1H102JA16 SMBJ30A                                                                                  | LITTELFUSE                                         | 30V              | DIODE; TVS; SMB (DO-214AA); VRM=30V; IPP=12.4A                                                                          |            |
| 9        | D3                                                                    | -         | 1     | VS-2EFH01-M3                                                                                               | VISHAY                                             | VS-2EFH01-M3     | DIODE; SWT; SMT (DO-219AB); PIV=100V; IF=2A                                                                             |            |
| 10       | D5                                                                    | -         | 1     | SMCJ60A                                                                                                    | FAIRCHILD SEMICONDUCTOR                            | 60V              | DIODE; TVS; SMC (DO-214AB); VRM=60V; IPP=15.5A                                                                          |            |
| 11       | DS1-DS5                                                               | -         | 5     | LTST-C193KRKT-2A                                                                                           | LITE-ON ELECTRONICS INC.                           | LTST-C193KRKT-2A | DIODE; LED; EXTRA THIN; EXTRA BRIGHT; RED; SMT (0603); VF=2.2V; IF=0.002A                                               |            |
| 12       | GND_TP2, SWITCH_CONTROL, VLOGIC                                       | -         | 3     | 9020 BUSS                                                                                                  | WEICO WIRE                                         | MAXIMPAD         | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWNBUS TYPE-S; 20AWG                                 |            |
| 13       | GND_TP3-GND_TP7                                                       | -         | 5     | 5011                                                                                                       | KEYSTONE                                           | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
| 14       | GND_TP8, GND_TP10, LOAD, LOAD_2, VDD, VDD_TP1                         | -         | 6     | 6095                                                                                                       | KEYSTONE                                           |                  | 6095 CONNECTOR; FEMALE; PANELMOUNT; NON-INSULATED RECESSED HEAD BANANA JACK; STRAIGHT THROUGH; 1PIN                     |            |
| 15       | J1-J4, J9-J11                                                         | -         | 7     | PCC02SAAN                                                                                                  | SULLINS                                            | PCC02SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                |            |
| 16       | J5-J7                                                                 | -         | 3     | 131-5031-00                                                                                                | TEKTRONIX                                          | 131-5031-00      | CONNECTOR; WIREMOUNT; 3 GHZ 20X LOW CAPACITANCE PROBE; STRAIGHT; 5PINS                                                  |            |
| 17       | J8                                                                    | -         | 1     | PCC03SAAN                                                                                                  | SULLINS                                            | PCC03SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                |            |
| 18       | J12                                                                   | -         | 1     | 31-5329-52RFX                                                                                              | AMPHENOL                                           | 31-5329-52RFX    | CONNECTOR; FEMALE; THROUGH HOLE; BNC 50OHM PCB RECEPTACLE; STRAIGHT; 5PINS                                              |            |
| 19       | LO, OVERCURRENT, OVER_VOLTAGE, RDY, SNS, TH_WARNING, TP1-TP3, VDD_TP2 | -         | 10    | 5010                                                                                                       | KEYSTONE                                           | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                   |            |
| 20       | M1                                                                    | -         | 1     | SI7322DN-T1-GE3                                                                                            | VISHAY                                             | SI7322DN-T1-GE3  | TRAN; NCH; MOSFET; POWERPAK1212-8; PD-(52W); I-(18A); V-(100V)                                                          |            |
| 21       | R1                                                                    | -         | 1     | PRL1632-R012-F                                                                                             | SUSUMUCO LTD                                       | 0.012 RES; SMT   | (0612); 0.012; 1%; 0 TO +200PPM/DEGC; 1W                                                                                |            |
| 22       | R2, R3, R8-R10                                                        | -         | 5     | CRCW06033K01FK                                                                                             | VISHAY DALE                                        | 3.01K            | RESISTOR; 0603; 3.01K; 1%; 100PPM; 0.10W; THICK FILM                                                                    |            |
| 23       | R4                                                                    | -         | 1     | TNPU0603100KAZEN00                                                                                         | VISHAY DRALORIC                                    | 100K             | RESISTOR; 0603; 100K OHM; 0.05%; 5PPM; 0.10W; THIN FILM                                                                 |            |
| 24       | SPACER1-SPACER4                                                       | -         | 4     | 9032                                                                                                       | KEYSTONE                                           |                  | 9032 MACHINE FABRICATED; ROUND- THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                         |            |
| 25       | SU1-SU8                                                               | -         | 8     | NPC02SXON-RC                                                                                               | SULLINS ELECTRONICS CORP.                          | NPC02SXON-RC     | CONNECTOR; FEMALE; MINI SHUNT; 0.100IN CC; OPENTOP; JUMPER; STRAIGHT; 2PINS                                             |            |
| 26       | U1                                                                    | -         | 1 1   | MAX14922ATE+                                                                                               | MAXIM                                              | MAX14922ATE+     | EVKIT PART-IC; MAX14922ATE+; PACKAGE OUTLINE DRAWING: 21-0136; LAND PATTERN DRAWING: 90-0032 PCB:MAX14922               |            |
| 27       | PCB                                                                   | -         |       | MAX14922                                                                                                   | MAXIM                                              | PCB              | -                                                                                                                       |            |
| 28       | CM1, CM2                                                              | DNP       | 0     | C0603C102K1GAC; C1608C0G2A102K080AA                                                                        | KEMET;TDK                                          | 1000PF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 100V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125                              |            |
| 29       | D2                                                                    | DNP       | 0     | SMBJ30A                                                                                                    | LITTELFUSE                                         | 30V              | DEGC; TC= DIODE; TVS; SMB (DO-214AA); VRM=30V; IPP=12.4A                                                                |            |
| 30       | D4                                                                    | DNP       | 0     | VS-2EFH01-M3                                                                                               | VISHAY                                             | VS-2EFH01-M3     | DIODE; SWT; SMT (DO-219AB); PIV=100V; IF=2A                                                                             |            |
| 31       | M2                                                                    | DNP       | 0     | BUK7240-100A                                                                                               | NEXPERIA                                           | BUK7240-100A     | TRAN; NCH; TO-252-3; PD-(114W); I-(34A); V-(100V)                                                                       |            |
| 32 TOTAL | R5-R7                                                                 | DNP       | 0 74  | N/A                                                                                                        | N/A                                                | OPEN             | PACKAGE OUTLINE 0603 RESISTOR                                                                                           |            |

Evaluates: MAX14922

## MAX14922 EV Kit Schematic Diagrams

<!-- image -->

## MAX14922 EV Kit PCB Layout Diagrams

MAX14922 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX14922 EV Kit PCB Layout-Bottom View

<!-- image -->

MAX14922 EV Kit PCB Layout-Top View

<!-- image -->

MAX14922 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                             | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------|-----------------|
|                 0 | 5/20            | Initial release                         | -               |
|                 1 | 6/20            | Removed repetitive PCBAssembly diagrams | 8-9             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim ,ntegrated reserves the right to change the circuitry and speci¿cations without notice at any time.

<!-- image -->

│

Evaluates: MAX14922