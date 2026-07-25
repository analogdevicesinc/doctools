<!-- lastmod 2022-08-02 -->
## MAXM17574 5V Output Evaluation Kit

## General Description

The  MAXM17574  5V-output  evaluation  kit  (EV  kit) provides  a  proven  design  to  evaluate  the  MAXM17574 high-voltage,  high-efficiency,  synchronous  step-down DC-DC converter. The EV kit is preset for 5V output at load currents up to 3A and features a 650kHz switching frequency  for  optimum  efficiency  and  component  size. The EV kit features an adjustable input undervoltage lock -out, adjustable soft-start, open-drain RESET signal, and external  frequency  synchronization.  The  MAXM17574 module data sheet provides a complete description of the part that should be read in conjunction with this data sheet prior to operating the EV kit. For full module features, ben -efits and parameters for the IC, refer to the MAXM17574 data sheet.

## Features

- Highly Integrated Solution with Built-In Shielded Inductor
- Wide 10V to 60V Input Range
- Programmed 5V Output, Up To 3A Output Current
- High 93% Efficiency (V IN = 12V, V OUT = 5V at 1.0A)
- 650kHz Switching Frequency
- EN/UVLO Input, Resistor-Programmable UVLO Threshold
- Programmed 4ms Soft-Start Time
- Selectable PWM And DCM Modes
- Open-Drain RESET Output Pulled Up To 5V V CC
- Provision for External Frequency Synchronization
- Overcurrent and Overtemperature Protection
- Low-Profile, Surface-Mount Components
- Proven PCB Layout
- Fully Assembled and Tested
- CISPR-22 Class B Compliant

Evaluates: MAXM17574

5V Output Application

## Quick Start

## Recommended Equipment

- One 10V to 60V DC, 2A Power Supply
- One 15W resistive load with 3A sink capacity
- Four digital multimeters (DMM)
- One MAXM17574EVKITA# EV kit

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution: Do not turn on power supply until all connec -tions are complete.

- 1) Set the input power supply at a voltage between 10V and 60V. Disable the power supply.
- 2) Connect the positive terminal of the input power sup -ply to the V IN\_EMI  PCB pad and the negative terminal to the nearest PGND pad. Connect the positive termi -nal of the 3A load to the V OUT pad and the negative terminal to the nearest PGND pad.
- 3) Connect  a  DVM  (DMM  in  voltage  measurement mode) across the V OUT  pad and the nearest PGND pad.
- 4) Verify that shunts are not installed on jumper J1 (see Table 1 for details).
- 5) Select  the  shunt  position  on  jumper  J2  according to  the  intended  mode  of  operation  (see  Table  2  for details).
- 6) Turn on the input power supply.
- 7) Enable the load.
- 8) Verify  that  the  DVM  displays  5V  across  the  output terminals.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAXM17574 5V Output Evaluation Kit

## Detailed Description

The MAXM17574 EV kit is designed to demonstrate the salient  features  of  the  MAXM17574 power module. The EV kit includes an EN/UVLO pad and jumper J1 to enable the output at a desired input voltage. The MODE/SYNC pad allows an external clock interface to synchronize the device. Jumper J2 allows selection of a particular mode of operation based on light-load performance requirements. An additional RESET pad is available for monitoring if the converter output voltage is in regulation.

On  the  bottom  layer  of  the  EV  kit,  additional  footprints for  optional  components  are  included  to  ease  board modification for different input and output configurations. Placeholders  are  also  available  on  the  bottom  layer  for installation of EMI filter components. EMI component val -ues are provided in the schematic.

## Setting the Switching Frequency

Selection  of  switching  frequency  must  consider  inputvoltage  range,  desired  output  voltage,  t ON(MIN) ,  and t OFF(MIN)   of  the  MAXM17574.  To  optimize  efficiency and  component  size,  a  switching  frequency  of  650kHz is  chosen  for  5V-programmed  output.  Resistor  R2  con -nected  between  RT  and  SGND  pins,  programs  the desired switching frequency. Using Table 1. Selection of Components in the MAXM17574 data sheet, choose R2 to be 30.1kΩ. Table 1. Selection of Components recom -mends optimized switching frequency for various output designs.

## Input Capacitor Selection

The input capacitor  serves  to  reduce  the  current  peaks drawn  from  the  input  power  supply  and  also  reduce switching frequency voltage ripple at the input. Table 1. Selection of Components in the MAXM17574 data sheet summarizes  the  choice  of  input  capacitor  for  various requirements. Using this table, the input capacitor (C2) for this EV kit is chosen to be 4.7µF/80V.

## Output Capacitor Selection

X7R ceramic output capacitors are preferred due to their stability over temperature in industrial applications. Table 1.  Selection  of  Components in  the  MAXM17574  data sheet summarizes the choice of output capacitor for vari -ous requirements. Using this table, the output capacitor (C8) for this EV kit is chosen to be 47μF/6.3V.

## Evaluates: MAXM17574 5V Output Application

## Adjusting Output Voltage

The MAXM17574 module supports an adjustable output voltage range, from 0.9V to 15V, using a feedback resis -tive divider from OUT to FB. To get different output volt -ages,  refer  to Table  1.  Selection  of  Components in  the MAXM17574 data sheet. R5 and R6 of the EV kit corre -spond to RU and RB in Table 1. Selection of Components of the MAXM17574 data sheet.

## Soft-Start Programming

The MAXM17574 offers an adjustable soft-start function to limit inrush current during startup. The soft-start time is adjusted by changing the value of C4, the external capaci -tor from the SS pin to SGND. The capacitance required for a given soft-start time (t SS ) is given by the following equation:

<!-- formula-not-decoded -->

The  capacitor  required  for  a  4ms  soft-start  time  is calculated to be 22nF.

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The  MAXM17574  module  offers  an  adjustable  input undervoltage-lockout  feature.  In  this  EV  kit,  for  normal operation, leave jumper J1 open. To disable the output, install a jumper across pins 1-2 on J1. See Table 1 for J1 settings. Resistor R1 connected from EN/UVLO to SGND sets the input voltage (V INU ) at which the device turns on. The value of resistor R1 is calculated as follows:

<!-- formula-not-decoded -->

where R1 is in kΩ.

For the MAXM17574 to turn on at a 9.5V input, the R1 resistor is calculated to be 487kΩ.

## MODE Selection (MODE/SYNC)

The  MODE/SYNC  pin  can  be  used  to  select  between PWM and DCM modes of operation. The logic state of the MODE/SYNC pin is latched when V CC and EN/UVLO voltages exceed their respective rising thresholds, and all internal  voltages  are  ready  to  allow  LX  switching.  State changes  on  the  MODE/SYNC  pin  are  ignored  during normal operation. Refer to the MAXM17574 module data sheet for more information on the PWM and DCM modes of  operation. Table  2  shows  EV  kit  jumper  settings  that can be used to configure the desired mode of operation.

## MAXM17574 5V Output Evaluation Kit

## External Clock Synchronization (MODE/SYNC)

The  internal  oscillator  of  the  MAXM17574  can  be  syn -chronized to an external clock signal through the MODE/ SYNC pin. The external synchronization clock frequency must be between 1.1 x f SW  and 1.4 x f SW ,  where  f SW is  the  frequency of operation as set by R2 resistor. The minimum external clock high-pulse width and amplitude should be greater than 50ns and 2.1V respectively. The maximum external clock low-pulse amplitude should be less than 0.8V. A 22pF/0402 capacitor should be placed at a C10 designator whenever the SYNC feature is utilized. Provision is made in the bottom side of EV kit to place the 22pF capacitor.

## EXTVCC Linear Regulator

## Evaluates: MAXM17574 5V Output Application

## Electro-Magnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency  cur -rents drawn by the switching power converter, and limits the noise injected back into the input power source.

The MAXM17574 EV kit PCB has designated footprints on  the  bottom  side  for  placement  of  EMI  filter  compo -nents.  Use  of  EMI  filter  components  as  shown  in  the schematic  results  in  lower  conducted  emissions,  below CISPR22 Class B limits. Cut open the trace at L1 before installing EMI filter components. The MAXM17574 EV kit PCB layout is also designed to limit radiated emissions from switching nodes of the power converter, resulting in radiated emissions below CISPR22 Class B limits.

Powering V CC from EXTVCC increases the efficiency of the power converter at higher input voltages. If the applied EXTVCC  voltage  is  greater  than  4.7V  (typ),  V CC  is powered from EXTVCC.  If EXTVCC is lower than 4.7V (typ), V CC is powered from V IN . Refer to the MAXM17574 module  data  sheet  for  further  information.  Resistor  R3 (0Ω) connects V OUT  to EXTVCC in this EV kit.

## Hot Plug-In and Long Input Cables

The MAXM17574 EV kit PCB provides an optional elec -trolytic  capacitor  (C1,  10µF/100V).  This  capacitor  limits the peak voltage at the input of the MAXM17574 power module, when the DC input source is 'Hot-Plugged' to the EV kit input terminals with long input cables. The equiva -lent  series  resistance (ESR) of the electrolytic capacitor dampens  the  oscillations  caused  by  interaction  of  the inductance  of  the  long  input  cables,  and  the  ceramic capacitors at the power module input.

## Table 1. UVLO Enable/Disable Configuration (J1)

| POSITION       | EN/UVLO PIN                                                              | MAXM17574 OPERATION                                  |
|----------------|--------------------------------------------------------------------------|------------------------------------------------------|
| Not Installed* | Connected to the center node of resistor-divider 3.3MΩ (internal) and R1 | Programmed to startup at desired input voltage level |
| 1-2            | Connected to SGND                                                        | Disabled                                             |

## Table 2. MODE Configuration (J2)

| POSITION   | MODE PIN          | MAXM17574 OPERATION   |
|------------|-------------------|-----------------------|
| 1-2        | Connected to V CC | DCM mode              |
| 2-3*       | Connected to GND  | PWM mode              |

## MAXM17574 5V Output Evaluation Kit

## EV Kit Performance Report

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

Evaluates: MAXM17574

5V Output Application

<!-- image -->

<!-- image -->

<!-- image -->

## EV Kit Performance Report (continued

<!-- image -->

<!-- image -->

<!-- image -->

Evaluates: MAXM17574

<!-- image -->

<!-- image -->

<!-- image -->

## MAXM17574 5V Output Evaluation Kit

## MAXM17574 5V Kit Bill of Materials

|   S NO | DESIGNATION   |   QTY | DESCRIPTION                                       | MANUFACTURER PARTNUMBER - 1   | MANUFACTURER PARTNUMBER - 1        |
|--------|---------------|-------|---------------------------------------------------|-------------------------------|------------------------------------|
|      1 | C1            |     1 | 10µF±20%,100V, Aluminimum Capacitor               | PANASONIC EEE-TG2A100P        |                                    |
|      2 | C2            |     1 | 4.7µF±10%,80V, X7R ceramic capacitor (1210)       | MURATA GRM32ER71K475KE14      |                                    |
|      3 | C3            |     1 | OPEN(0603)                                        | OPEN                          |                                    |
|      4 | C4            |     1 | 0.022µF±10%,50V, X7R ceramic capacitor (0402)     | MURATA GRM155R71H223KA12      |                                    |
|      5 | C5            |     1 | 0.1µF±10%,100V, X7R ceramic capacitor (0603)      | MURATA GRM188R72A104KA35      | TDK CC0603KRX7R0BB104              |
|      6 | C6            |     1 | OPEN(1210)                                        | OPEN                          |                                    |
|      7 | C7            |     1 | OPEN(4.7µF±10%,80V, X7R ceramic capacitor (1210)) | MURATA GRM32ER71K475KE14      |                                    |
|      8 | C8            |     1 | 47µF ±10%,6.3V, X7R ceramic capacitor (1210)      | Murata GRM32ER70J476KE20L     |                                    |
|      9 | C9            |     1 | OPEN (0402)                                       | OPEN                          |                                    |
|     10 | C10           |     1 | OPEN (0402)                                       | MURATE GRM1555C1H220JA01      | TAIYO YUDEN UMK105CG220JV          |
|     11 | C11           |     1 | OPEN(1210)                                        | OPEN                          |                                    |
|     12 | C12           |     1 | OPEN(1210)                                        | OPEN                          | SAMSUNG ELECTRONICS CL32B106KBJNNN |
|     13 | R1            |     1 | 487k Ω ±1% resistor (0402)                        | VISHAY DALE CRCW0402487KFK    |                                    |
|     14 | R2            |     1 | 30.1k Ω ±1% resistor (0402)                       | VISHAY DALE CRCW040230K1FK    |                                    |
|     15 | R3            |     1 | 0R ±0% resistor (0402)                            | PANASONIC ERJ-2GE0R00X        |                                    |
|     16 | R4            |     1 | 10k Ω ±1% resistor (0402)                         | VISHAY DALE CRCW040210K0FK    | YAGEO PHICOMP RC0402FR-0710K       |
|     17 | R5            |     1 | 140k Ω ±1% resistor (0402)                        | PANASONIC ERJ-2RKF1403X       |                                    |
|     18 | R6            |     1 | 30.1k Ω ±1% resistor (0402)                       | VISHAY DALE CRCW04023012FK    |                                    |
|     19 | FB1           |     1 | OPEN                                              | OPEN                          |                                    |
|     20 | L1            |     1 | OPEN(10µH±20%,2A Inductor)                        | PULSE PA4332.103NLT           |                                    |
|     21 | U1            |     1 | MAXM17574, 33-pin SIP Power Module                | MAXM17574ALC#T                |                                    |

## Ordering Information

| PART             | TYPE   |
|------------------|--------|
| MAXM17574 EVKIT# | EV Kit |

## Component Suppliers

| SUPPLIER                 | WEBSITE                  |
|--------------------------|--------------------------|
| Murata Americas          | www.murata.com           |
| NEC TOKIN America, Inc.  | www.nec-tokinamerica.com |
| Panasonic Corp.          | www.panasonic.com        |
| SANYO Electric Co., Ltd. | www.sanyodevice.com      |
| TDK Corp.                | www.component.tdk.com    |
| TOKOAmerica, Inc.        | www.tokoam.com           |

Evaluates: MAXM17574

5V Output Application

## MAXM17574 5V Kit Schematic

<!-- image -->

## MAXM17574 5V Output Evaluation Kit

## MAXM17574 PCB Layouts

MAXM17574 5V EV Kit Component Placement GuideComponent Side

<!-- image -->

Evaluates: MAXM17574

5V Output Application

MAXM17574 5V EV Layout Top Layer

<!-- image -->

MAXM17574 5V EV Layout Layer 2

<!-- image -->

## MAXM17574 EV Kit PCB Layouts (continued)

<!-- image -->

MAXM17574 5V EV Layout Layer 3

MAXM17574 5V EV Layout Bottom Layer

<!-- image -->

MAXM17574 5V EV Layout Bottom Silkscreen

<!-- image -->

Evaluates: MAXM17574

## MAXM17574 5V Output Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and speci¿cations without notice at any time.

Evaluates: MAXM17574

5V Output Application