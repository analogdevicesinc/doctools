<!-- lastmod 2022-08-04 -->
## MAXM17712/MAXM17720/ MAXM17724 Evaluation Kit

## General Description

The  MAXM17712/MAXM17720/MAXM17724  evaluation kits  (EV  kit)  provide  a  proven  design  to  evaluate  the performance  of  MAXM17712/MAXM17720/MAXM17724 modules.  Each  of  these  modules  operates  over  a  wide input range from 5.5V to 60V, and features an integrated 150mA step-down converter and 50mA linear regulator. The  modules  are  configured  to  demonstrate  optimum performance and component sizes in this EV kit.

MAXM17712 delivers up to 150mA from the 3.3V fixed output  step-down  converter,  and  up  to  50mA  from  the 1.8V fixed output linear regulator. The step-down convert -er is configured to operate at 375kHz switching frequency, over a 5.5V to 60V input range.

MAXM17720 delivers up to 150mA from the 5V fixed out -put step-down converter, and up to 50mA from the 3.3V fixed  output  linear  regulator.  The  step-down  converter is  configured to operate at 570kHz switching frequency, over an 8.4V to 60V input range.

MAXM17724 is configured to deliver up to 150mA from the  adjustable  output  step-down  converter  programmed to 5V, and up to 50mA from the 2.5V fixed output linear regulator. The step-down converter is configured to oper -ate at 570kHz switching frequency, over an 8.4V to 60V input range.

The  EV  kits  feature  provisions  for  selecting  mode  of operation (PWM or PFM), synchronization to an external clock  source,  enable/disable,  and  UVLO  settings.  The MAXM17710-MAXM17726  module  family  data  sheet provides a complete description of the parts and should be read in conjunction with this data sheet prior to operating the EV kits.

## Evaluates: MAXM17712/MAXM17720/ MAXM17724 Modules Application

## Features

- ● Wide 5.5V to 60V Input Range
- ● MAXM17712 Offers High 82%Efficiency (V IN  = 24V, V OUTB  = 3.3V, I OUTB  = 75mA)
- ● MAXM17720 Offers High 85% Efficiency (V IN  = 24V, V OUTB  = 5V, I OUTB  = 75mA)
- ● MAXM17724 Offers High 85% Efficiency (V IN  = 24V, V OUTB  = 5V, I OUTB  = 75mA)
- ● Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- ● Selectable PWM and PFM Modes of Operation
- ● Provision to Synchronize the Step-Down Converters to External-Clock Source
- ● Low-Profile, Surface-Mount Components
- ● Proven PCB Layout
- ● Fully Assembled and Tested
- ● RESET Outputs, with Pullup Resistor to Respective Output Voltages
- ● Complies with CISPR22(EN55022) Class B Conducted and Radiated Emissions

Ordering Information appears at end of data sheet.

<!-- image -->

## MAXM17712/MAXM17720/ MAXM17724 Evaluation Kit

## Quick Start

## Required Equipment

- ● One 60V DC power supply
- ● Digital multimeters (DMM)
- ● Load resistor for step-down converter capable of sinking 150mA
- ● Load resistor for linear regulator capable of sinking 50mA

## Equipment Setup and Procedure

The EV kits are fully  assembled and tested. Follow the steps below to verify and test an individual module's operation. Caution: Do not turn on power supply until all connections are completed.

- 1) Set the input power supply at a voltage between 5.5V and  60V  (for  MAXM17712),  or  between  8.4V  and 60V (for MAXM17720 and MAXM17724). Disable the power supply.
- 2) Connect the positive terminal and negative terminal of the power supply to the V IN pad and its adjacent GND pad of the module under evaluation.
- 3) Connect a maximum of 50mA resistive load across OUTL pad and its  adjacent  GND  pad  of  the  corre -sponding module.
- 4) Connect a maximum of 150mA resistive load across OUTB pad and its adjacent GND pad of the corre -sponding module. Note that the step-down converter powers the linear regulator. Ensure that the total load on step-down converter does not exceed 150mA.
- 5) Verify  that  the  shunts  are  not  installed  on  jumpers (JU11, JU21, JU31) (see Table 1 for details).
- 6) Select  the  shunt  position  on  respective  jumpers (JU12, JU22, JU32) according to the required mode of operation (see Table 2 for details).
- 7) Connect digital multimeters (in voltage measurement mode) across the OUTB, OUTL and their respective GND pads.
- 8) Turn on the input power supply.
- 9) Verify that the DMMs display expected terminal volt -ages with respect to GND.

## Evaluates: MAXM17712/MAXM17720/ MAXM17724 Modules Application

## Detailed Description

The MAXM17712/MAXM17720/MAXM17724 EV kits are designed  to  demonstrate  the  salient  features  of  the MAXM17712/MAXM17720/MAXM17724 power modules. The EV kits consist of typical application circuits of three different  modules.  Each  of  these  circuits  are  electrically isolated from each other and hosted on the same PCB. Each of the modules can be evaluated by powering them from their respective input pins. Individual module settings can be adjusted to evaluate the performance under different operating conditions.

## Setting Switching Frequency

Selection of switching frequency must consider input volt -age range, desired output voltage, t ON(MIN)  and t OFF(MIN) of the step-down converters. Resistors R15, R25, and R35 on the EV kits program the desired switching frequencies of  the  step-down  converters.  To  optimize  performance and  component  size,  375kHz  switching  frequency  is chosen for the step-down converter in MAXM17712, and 570kHz is chosen for MAXM17720 and MAXM17724 stepdown converters. Use Table 1 and Switching Frequency section  of  MAXM17710-MAXM17726  data  sheet  to choose different values of resistors for programming the required switching frequency.

## Enable/Undervoltage Lockout (EN/UVLO) Programming

The  MAXM17712/MAXM17720/MAXM17724  offer  an adjustable input undervoltage lockout level for the stepdown converter. In the EV kits, for normal operation, leave the  jumpers  (JU11,  JU21,  JU31)  open.  When  jumper JU11 is left open, MAXM17712 is enabled when the input voltage rises above 5.5V. When jumpers JU21 and JU31 are  left  open,  MAXM17720  and  MAXM17724  modules are enabled when the input voltage rises above 8.4V. To disable  the  modules,  install  shunts  across  pins  1-2  on jumpers  (JU11,  JU21,  JU31).  See  Table  1  for  jumpers (JU11, JU21, JU31) settings.

A potential divider formed by the resistors R UPPER (R11, R21, R31) and R LOWER  (R12, R22, R32) sets the input voltage (V INU ) at which the module is enabled.

Choose R UPPER (R11, R21, R31) to be 3.32MΩ and then calculate R LOWER  (R12, R22, R32) as follows:

<!-- formula-not-decoded -->

Where RLOWER (R12, R22, R32) in MΩ.

## MAXM17712/MAXM17720/ MAXM17724 Evaluation Kit

For  MAXM17712 to  turn  ON  at  5.5V  input,  the  resistor R12 is calculated to be 953kΩ.

For MAXM17720 and MAXM17724 to turn ON at 8.4V input, the resistors R22 and R32 are calculated to be 562kΩ.

## MODE Selection and External Clock Synchronization

The MAXM17712/MAXM17720/MAXM17724 PFM mode of  operation  increases  operating  efficiency  at  light-load conditions.  In  the  EV  kits,  leave  jumpers  (JU12,  JU22, JU32) open for operating the parts in PFM mode at lightloads. Install shunts across jumpers (JU12, JU22, JU32), to set the modules to operate in PWM mode. See Table 2 for jumpers (JU12, JU22, JU32) settings.

The  internal  oscillators  of  the  devices  can  be  synchro -nized to an external clock signal through the MODE/SYNC pin.  The  external  synchronization  clock  frequency  must be  between  1.1  x  f SW and  1.4  x  f SW,  where  f SW   is  the frequency  programmed  by  the  resistors  (R15,  R25,  R35) connected to the RT pin. The minimum external clock ontime and off-time pulse-widths should be greater than 100ns. Jumpers JU12, JU22, and JU32 must be left unconnected before applying external clock at the MODE/SYNC pins.

## Adjusting Output Voltage

The  MAXM17724  supports  a  2.5V  to  5V  adjustable  output voltage  range  for  the  integrated  step-down  converter.  The MAXM17724 default output voltage is preset to 5V. T o program a  different  output  voltage,  choose  R34  less  than  or  equal  to 49.9KΩ and calculate R33 with the following equation:

<!-- formula-not-decoded -->

The minimum step-down converter voltage needed to guarantee regulated linear regulator output voltage is as follows:

<!-- formula-not-decoded -->

Where V DO is the dropout voltage of the LDO (450mV, as specified in the datasheet).

Figure 1. Adjusting Output Voltage of MAXM17724

<!-- image -->

## Evaluates: MAXM17712/MAXM17720/ MAXM17724 Modules Application

The MAXM17724 integrated LDO output voltage is fixed at 2.5V. For guaranteed regulation of linear regulator output voltage, the integrated step-down converter (OUTB) in  MAXM17724  should  be  adjusted  to  voltage  greater than 2.95V.

## Input Capacitor Selection

The input capacitors (C13, C23, C33) serve to reduce cur -rent peaks drawn from the input power supply and reduce switching frequency ripple at the input. The input capaci -tance must be greater than or equal to the value given in Table  1 of MAXM17710-MAXM17726 data sheet .  Input capacitors (C13, C23, C33) are chosen to be 1µF/100V.

## Output Capacitor Selection

X7R ceramic output capacitors are preferred due to their stability  over  temperature  in  industrial  applications.  The required output capacitors (C15, C25, C35) for 3.3V and 5V  outputs  are  selected  from Table  1 of MAXM17710MAXM17726 data sheet as 10µF/10V.

## Electromagnetic Interference (EMI)

Compliance  with  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency  cur -rents drawn by the switching power converter, and limits the noise injected back into the input power source.

Use  of  EMI  filter  components  as  shown  in  Figure  2  in conjunction with the schematic results in lower conducted emissions, below CISPR22 Class B limits. Manufacturer part  numbers  of  the  EMI  filter  components  are  listed  as  optional  BOM.  The  MAXM17712/MAXM17720/ MAXM17724 EV kits PCB layout is also designed to limit radiated  emissions  from  switching  nodes  of  the  power converter, resulting in radiated emissions below CISPR22 Class  B  limits.  Further,  capacitors  (C14,  C24,  C34, 0.1µF/100V), placed near the modules, help in attenuat -ing high frequency noise.

Figure 2. EMI Filter Components

<!-- image -->

## MAXM17712/MAXM17720/ MAXM17724 Evaluation Kit

## Hot Plug-In and Long Input Cables

The  MAXM17712/MAXM17720/MAXM17724  EV  kits PCB provides optional electrolytic capacitors (C12, C22, C32  4.7uF/100V)  to  dampen  input  voltage  peaks  and oscillations  that  can  arise  during  hot-plug-in  and/or  due to long input cables. These capacitors limit the peak voltage at the input of the power modules, when the EV kit is

## Evaluates: MAXM17712/MAXM17720/ MAXM17724 Modules Application

powered directly from a pre-charged capacitive source or an industrial backplane PCB. Long input cables, between input power source and the EV kit circuit can cause inputvoltage oscillations due to the inductance of the cables. The equivalent series resistance (ESR) of the electrolytic capacitor helps damp out the oscillations caused by long input cables.

## Table 1. Step-Down Converter (EN/UVLO) Description (JU11, JU21 and JU31)

| SHUNT POSITION   | EN/UVLO PIN                                                                                               | OUTPUT                                               |
|------------------|-----------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| Not installed*   | Connected to the center nodes of the respective resistor-dividers (R11 and R12; R21 and R22; R31 and R32) | Programmed to startup at desired input-voltage level |
| 1-2              | Connected to GND                                                                                          | Disabled                                             |

## Table 2. MODE/SYNC Description (JU12, JU22 and JU32)

| SHUNT POSITION   | MODE/SYNC PIN    | MODE                  |
|------------------|------------------|-----------------------|
| Not installed*   | Unconnected      | PFM mode of operation |
| 1-2              | Connected to GND | PWM mode of operation |

## MAXM17712/MAXM17720/ MAXM17724 Evaluation Kit

## EV Kit Performance Report

VIN  = 24V, T A = 25°C, unless otherwise noted.

<!-- image -->

MAXM17720, MAXM17724 EFFICIENCY vs. LOAD CURRENT

<!-- image -->

MAXM17712 OUTPUT VOLTAGE vs. LOAD CURRENT

<!-- image -->

CONDITIONS: PFM MODE, VOUTB = 3.3V, f SW = 375kHz

<!-- image -->

MAXM17712 OUTPUT VOLTAGE vs. LOAD CURRENT

<!-- image -->

MAXM17720, MAXM17724 OUTPUT VOLTAGE vs. LOAD CURRENT

<!-- image -->

## Evaluates: MAXM17712/MAXM17720/ MAXM17724 Modules Application

MAXM17712 EFFICIENCY vs. LOAD CURRENT

<!-- image -->

CONDITIONS: PFM MODE, VOUTB = 3.3V, f SW = 375kHz

MAXM17720, MAXM17724 OUTPUT VOLTAGE vs. LOAD CURRENT

<!-- image -->

<!-- image -->

## MAXM17712/MAXM17720/ MAXM17724 Evaluation Kit

## EV Kit Performance Report (continued)

VIN  = 24V, T A = 25°C, unless otherwise noted.

<!-- image -->

## Evaluates: MAXM17712/MAXM17720/ MAXM17724 Modules Application

## MAXM17712/MAXM17720/ MAXM17724 Evaluation Kit

## EV Kit Performance Report (continued)

VIN  = 24V, T A = 25°C, unless otherwise noted.

MAXM17724

STARTUP THROUGH ENABLE

0

VEN/UVLO

VOUTB

VOUTL

LX

VIN

VOUTB

VOUTL

LX

20V/div

2V/div

2V/div

20V/div

1ms/div

CONDITIONS: PWM MODE, VOUTB = 3.3V, VOUTL = 1.8V,

I OUTB = 100mA, I OUTL

= 50mA, f SW = 375kHz

MAXM17724

STARTUP THROUGH VIN

VIN

VOUTB

VOUTL

LX

1ms/div

CONDITIONS: PWM MODE, VOUTB = 5V, VOUTL  = 2.5V,

I OUTB = 100mA, I OUTL

= 50mA, f SW  = 570kHz

toc19

5V/div

2V/div

2V/div

20V/div

1ms/div

CONDITIONS: PWM MODE, VOUTB = 5V, VOUTL = 2.5V,

I OUTB = 100mA, I OUTL = 50mA, f SW = 570kHz

MAXM17712

SHUTDOWN THROUGH VIN

toc22

toc25

20V/div

2V/div

2V/div

20V/div VEN/UVLO

VOUTB

VOUTL

LX

5V/div

2V/div

2V/div

20V/div

1ms/div

CONDITIONS: PWM MODE, VOUTB = 5V, VOUTL = 2.5V,

I OUTB = 100mA, I OUTL = 50mA, f SW = 570kHz

MAXM17720

STARTUP THROUGH VIN

0

toc23

VIN

VOUTB

VOUTL

LX

1ms/div

CONDITIONS: PWM MODE, VOUTB = 5V, VOUTL = 3.3V,

I OUTB = 100mA, I OUTL

= 50mA, f SW = 570kHz

MAXM17724

SHUTDOWN THROUGH VIN

0

VIN

VOUTB

VOUTL

LX

## Evaluates: MAXM17712/MAXM17720/ MAXM17724 Modules Application

MAXM17724

SHUTDOWN THROUGH ENABLE

MAXM17712

STARTUP THROUGH VIN

à

toc20

toc26

20V/div

2V/div

2V/div

20V/div

20V/div

2V/div

2V/div

20V/div

1ms/div

CONDITIONS: PWM MODE, VOUTB = 5V, VOUTL = 2.5V,

I OUTB = 100mA, I OUTL

= 50mA, f SW = 570kHz VIN

VOUTB

VOUTL

LX

1ms/div

CONDITIONS: PWM MODE, VOUTB = 3.3V, VOUTL = 1.8V,

I OUTB = 100mA, I OUTL

= 50mA, f SW = 375kHz

MAXM17720

SHUTDOWN THROUGH VIN

VIN

VOUTB

VOUTL

LX

20V/div

2V/div

2V/div

20V/div

1ms/div

CONDITIONS: PWM MODE, VOUTB = 5V, VOUTL = 3.3V,

I OUTB = 100mA, I OUTL  = 50mA, f SW = 570kHz

<!-- image -->

toc21

toc24

20V/div

2V/div

2V/div

20V/div

## MAXM17712/MAXM17720/ MAXM17724 Evaluation Kit

## EV Kit Performance Report (continued)

VIN  = 24V, T A = 25°C, unless otherwise noted.

<!-- image -->

## MAXM17712/MAXM17720/ MAXM17724 Evaluation Kit

## EV Kit Performance Report (continued)

VIN  = 24V, T A = 25°C, unless otherwise noted.

<!-- image -->

## Evaluates: MAXM17712/MAXM17720/ MAXM17724 Modules Application

TUV Rheinland

MAXM17712 CONDUCTED EMISSIONS PLOT

CONDITIONS: VOUTB = 5V, V OUTL = 3.3V, I OUTL = 50mA

MAXM17720 CONDUCTED EMISSIONS PLOT

<!-- image -->

<!-- image -->

TUV Rheinland

<!-- image -->

12:38:23 PM, Tuesday, March 19, 2019

Final\_ScanV

RE 30MHz-1GHz\_0-360 deg\_90 deg step\_1-4 mtr Height\_QS\_MAXM17720\_5OUT\_0.15AOUT\_Test6.TIL

<!-- image -->

Final\_ScanV

## MAXM17712/MAXM17720/ MAXM17724 Evaluation Kit

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAXM17712EVKIT# | EV Kit |
| MAXM17720EVKIT# | EV Kit |
| MAXM17724EVKIT# | EV Kit |

## Evaluates: MAXM17712/MAXM17720/ MAXM17724 Modules Application

## Component Suppliers

| SUPPLIER        | WEBSITE            |
|-----------------|--------------------|
| Murata Americas | www.murata.com     |
| Taiyo Yuden     | www.yuden.co.jp    |
| Nichicon        | www.nichicon.co.jp |
| Vishay          | www.vishay.com     |

Note: Indicate that you are using the MAXM17712/ MAXM17720/MAXM17724 modules when contacting these component suppliers.

## MAXM17712/MAXM17720/MAXM17724 EV Kit Bill of Materials

|   ITEM |   QTY | DESIGNATION   | DESCRIPTION                                                 | MANUFACTURER PART NUMBER      |
|--------|-------|---------------|-------------------------------------------------------------|-------------------------------|
|      1 |     3 | C12, C22, C32 | 4.7μF ± 20%, 100V; Aluminium capacitor                      | NICHICON UUR2A4R7MCL6GS       |
|      2 |     3 | C13, C23, C33 | 1μF ±10%, 100V, X7R ceramic capacitor (1206)                | TAIYO YUDEN HMK316B7105KLHT   |
|      3 |     3 | C14, C24, C34 | 0.1μF ±10%, 100V, X7R ceramic capacitor (0603)              | TAIYO YUDEN HMK107B7104KA     |
|      4 |     3 | C15, C25, C35 | 10μF ±10%, 10V, X7R ceramic capacitor (0603)                | MURATA GRM188Z71A106KA73      |
|      5 |     3 | C17, C27, C37 | 2.2μF ±10%, 10V, X7R ceramic capacitor (0603)               | MURATA GRM188R71A225KE15      |
|      6 |     3 | R11, R21, R31 | 3.32MΩ ±1% resistor (0402)                                  | VISHAY DALE CRCW04023M32FK    |
|      7 |     1 | R12           | 953kΩ ±1% resistor (0402)                                   | VISHAY DALE CRCW0402953KFKEDC |
|      8 |     2 | R22, R32      | 562kΩ ±1% resistor (0402)                                   | VISHAY DALE CRCW0402562KFK    |
|      9 |     1 | R15           | 127kΩ ±1% resistor (0402)                                   | VISHAY DALE CRCW0402127KFK    |
|     10 |     2 | R25, R35      | 78.7kΩ ±1% resistor (0402)                                  | VISHAY DALE CRCW040278K7FK    |
|     11 |     1 | R33           | 261kΩ ±1% resistor (0402)                                   | VISHAY DALE CRCW0402261KFK    |
|     12 |     1 | R34           | 49.9kΩ ±1% resistor (0402)                                  | VISHAY DALE CRCW040249K9FK    |
|     13 |     3 | R16, R26, R36 | 100kΩ ±1% resistor (0402)                                   | VISHAY DALE CRCW0402100KFK    |
|     14 |     1 | U1            | MAXM17712, 10-pin micro-SLIC Power Module                   | MAXIM MAXM17712AMB+T          |
|     15 |     1 | U2            | MAXM17720, 10-pin micro-SLIC Power Modul                    | MAXIM MAXM17720AMB+T          |
|     16 |     1 | U3            | MAXM17724, 10-pin micro-SLIC Power Module                   | MAXIM MAXM17724AMB+T          |
|     17 |     3 | C11,C21,C31   | 0.1μF ± 10%, 100V X7R ceramic capacitor (0603)              | TAIYO YUDEN HMK107B7104KA     |
|     18 |     3 | C18,C28,C38   | 0.1μF ± 10%, 16V X7R ceramic capacitor (0402)               | TAIYO YUDEN EMK105B7104KV     |
|     19 |     1 | LEMI_1        | OPTIONAL: 82μH±20%,150mA Shielded Wirewound Inductor (2016) | MURATA LQH2MPN820MGRL         |
|     20 |     1 | CEMI_1        | OPTIONAL: 0.47μF±10%, 100V, X7R ceramic capacitor (1206)    | MURATA GRM31MR72A474KA35L     |
|     21 |     1 | CEMI_2        | OPTIONAL: 1μF±10%, 100V, X7R ceramic capacitor (1206)       | TAIYO YUDEN HMK316B7105KLHT   |
|     22 |     3 | C16,C26,C36   | OPTIONAL: open (0805)                                       |                               |
|     23 |     3 | C19,C29,C39   | OPTIONAL: open (0603)                                       |                               |

## MAXM17712/MAXM17720/ MAXM17724 Evaluation Kit

## MAXM17712/MAXM17720/MAXM17724 EV Kit Schematics

<!-- image -->

## MAXM17712/MAXM17720/MAXM17724 EV Kit Schematics (continued)

<!-- image -->

## MAXM17712/MAXM17720/MAXM17724 EV Kit Schematics (continued)

<!-- image -->

## MAXM17712/MAXM17720/MAXM17724 EV Kit PCB Layout Diagrams

MAXM17712-20-24 EV kit PCB Layout-Top Silkscreen

<!-- image -->

MAXM17712-20-24 EV kit PCB Layout-Top Layer

<!-- image -->

## MAXM17712/MAXM17720/MAXM17724 EV Kit PCB Layout Diagrams (continued)

MAXM17712-20-24 EV kit PCB Layout-Layer 2

<!-- image -->

MAXM17712-20-24 EV kit PCB Layout-Layer 3

<!-- image -->

## MAXM17712/MAXM17720/MAXM17724 EV Kit PCB Layout Diagrams (continued)

MAXM17712-20-24EV kit PCB Layout-Bottom Layer

<!-- image -->

MAXM17712-20-24EV kit PCB Layout-Bottom Silkscreen

<!-- image -->

## MAXM17712/MAXM17720/ MAXM17724 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/19            | Initial release | -               |
|                .1 |                 | Updated typos   | 1 - 4           |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

## Evaluates: MAXM17712/MAXM17720/ MAXM17724 Modules Application