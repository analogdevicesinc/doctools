<!-- lastmod 2022-08-02 -->
## MAXM15067 6.3V Output Evaluation Kit

## General Description

The  MAXM15067  6.3V  output  evaluation  kit  (EV  kit) provides  a  proven  design  to  evaluate  the  MAXM15067 high-voltage,  high-efficiency,  synchronous  step-down DC-DC  module.  The  EV  kit  is  programmed  to  deliver 6.3V output for loads up to 300mA. The EV kit features an  adjustable  input  undervoltage  lockout,  selectable mode, and open-drain RESET signal. The MAXM15067 data sheet provides a complete description of the module that  should  be  read  in  conjunction  with  this  EV  kit  data sheet prior to modifying the demo circuit. For full module features,  benefits  and  parameters,  refer  to  the  MAXM15067 data sheet.

## Features

- Highly Integrated Solution
- Wide 10V to 60V Input Range
- Programmed 6.3V Output, Delivers Up To 300mA Output Current
- High 87.24% Efficiency (V IN = 24V, V OUT  = 6.3V at 170mA)
- 550kHz Switching Frequency
- ENABLE/UVLO Input, Resistor-Programmable UVLO Threshold
- PFM Feature for Better Light-Load Efficiency
- Fixed Internal 3.75ms Soft-Start Time
- RESET Output, with Pullup Resistor to V CC
- Overcurrent and Overtemperature Protection (OCP and OTP)
- Low-Profile, Surface-Mount Components
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR22(EN55022) Class B Conducted and Radiated Emissions

Evaluates: MAXM15067 6.3V

Output-Voltage Application

## Quick Start

## Recommended Equipment

- One 4.5V to 60V DC, 300mA power supply
- 2W resistive load with 300mA sink capacity
- Four digital multimeters (DMM)
- MAXM15067EVKIT#

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation.

## Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Set the power supply at a voltage between 4.5V and 60V. Then, disable the power supply.
- 2) Connect the positive terminal of the power supply to the  VIN  PCB  pad  and  the  negative  terminal  to  the nearest GND PCB pad. Connect the positive termi -nal of the 300mA load to the VOUT PCB pad and the negative terminal to the nearest GND PCB pad.
- 3) Connect  the  DVM  (DMM  in  voltage-measurement mode) across the VOUT PCB pad and the nearest GND PCB pad.
- 4) Verify that shunt is not installed  on  jumper  J1 (see Table 1 for details).
- 5) Turn on the DC power supply.
- 6) Enable the load.
- 7) Verify that the DVM displays 6.3V.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAXM15067 6.3V Output Evaluation Kit

## Detailed Description

The  MAXM15067  EV  kit  is  designed  to  demonstrate salient features of MAXM15067 power module. The EV kit includes an EN/UVLO PCB pad, and jumper J1, to enable the output at a desired input voltage. Jumper J2 allows selection of either PWM or PFM mode of operation based on  light-load  performance  requirements.  An  additional RESET pad  is  available  for  monitoring  if  the  converter output voltage is in regulation.

## Output Capacitor Selection

X7R ceramic output capacitors are preferred due to their stability  over  temperature  in  industrial  applications.  The required output capacitor (C5) for 6.3V output is selected from Table 1 of the MAXM15067 data sheet as 10μF/16V.

## Adjusting Output Voltage

The MAXM15067 supports an adjustable output-voltage range, from 0.9V to 6.3V, using a feedback resistive divid -er from V OUT to FB. Output voltage can be programmed using the values given in Table 1 of the MAXM15067 data sheet. For 6.3V output, R3 is chosen as 453kΩ, and R4 is chosen as 75kΩ.

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The MAXM15067 offers an adjustable input undervoltagelockout feature. In this EV kit, for normal operation, leave jumper J1 open. When J1 is left open, the MAXM15067 is  enabled  when  the  input  voltage  rises  above  10V.  To disable MAXM15067, install a jumper across pins 2-3 on J1. See Table 1 for J1 settings. A potential divider formed by R1 and R2 sets the input voltage (V INU ) at which the module  is  enabled.  The  value  of  resistor  R1  is  chosen to  be  2.2MΩ,  and  R2  is  calculated  using  the  following equation:

<!-- formula-not-decoded -->

where R1 and R2 are in kΩ.

For MAXM15067 to turn on at 10V input, the Resistor R2 is calculated to be 324kΩ.

## Input Capacitor Selection

The input capacitor  serves  to  reduce  the  current  peaks drawn from the input power supply and reduces switching frequency ripple at the input. The input capacitance must be greater than or equal to the value given in Table 1 of MAXM15067 data sheet. Input capacitor C3 is chosen to be 1µF/100V.

## Evaluates: MAXM15067 6.3V Output-Voltage Application

## Electro-Magnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency currents  drawn  by  the  switching  power  converter,  and limits the noise injected back into the input power source.

Use  of  EMI  filter  components  as  shown  in  Figure  1 in conjunction with the schematic  results in lower conducted emissions, below CISPR22 Class B limits. The MAXM15067 EV Kit PCB Layout is also designed to limit radiated  emissions  from  switching  nodes  of  the  power converter, resulting in radiated emissions below CISPR22 Class B limits..

## Hot-Plug-In and Long Input Cables

The  MAXM15067  EV  kit  PCB  provides  an  optional electrolytic  capacitor  (C2,  4.7µF/100V)  to  dampen  input voltage peaks and oscillations that can arise during hotplug-in  and/or  due  to  long  input  cables.  This  capacitor limits  the  peak  voltage  at  the  input  of  the  MAXM15067 power module, when the EV kit is powered directly from a precharged capacitive source or an industrial backplane PCB. Long input cables, between input power source and the EV kit circuit can cause input-voltage oscillations due to  the  inductance  of  the  cables.  The  equivalent  series

## Table 1. UVLO Enable/Disable Configuration (J1)

| POSITION       | EN/UVLO PIN                                                  | MAXM15067_ OUTPUT                                     |
|----------------|--------------------------------------------------------------|-------------------------------------------------------|
| Not Installed* | Connected to the center node of resistor- divider R1 and R2. | Programmed to startup at desired input-voltage level. |
| 1-2            | Connected to V IN                                            | Enabled if V IN is greater than V IN(MIN).            |
| 2-3            | Connected to GND                                             | Disabled                                              |

*Default position

Figure 1. EMI Filter Components

<!-- image -->

## MAXM15067 6.3V Output Evaluation Kit

resistance (ESR) of the electrolytic capacitor helps damp out the oscillations caused by long input cables. Further, capacitor C1 (0.1µF/100V), placed near the input of the board, helps in attenuating high frequency noise.

## Mode of Operation

The  MAXM15067  features  PFM  mode  of  operation  to increase the efficiency at light-load condition. If the MODE pin  is  left  unconnected  during  powerup,  the  module operates in PFM mode at light loads. If the MODE pin is connected to GND during power-up, the part operates in constant-frequency PWM mode at all loads. See Table 2 for J2 settings.

## EV Kit Performance Report

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAXM15067 6.3V Output-Voltage Application

## Internal LDO

An  internal  regulator  provides  a  5V  nominal  supply  to power the internal functions of the module. The output of the linear regulator (V CC ) should be bypassed with a 1µF capacitor C4 to GND.

## Table 2. Mode of Operation (J2)

| POSITION       | MODE PIN                                       |
|----------------|------------------------------------------------|
| 1-2            | Operates in PWM mode.                          |
| Not Installed* | Operates in PFM mode at light-load conditions. |

*Default position

<!-- image -->

OUTPUT VOLTAGE vs. INPUT VOLTAGE VOUT  = 6.3V, PWM MODE

<!-- image -->

## EV Kit Performance Report (continued)

<!-- image -->

<!-- image -->

<!-- image -->

Evaluates: MAXM15067 6.3V

<!-- image -->

<!-- image -->

TUV Rheinland Final\_ScanV

<!-- image -->

1.0G

RE 30MHz-1GHz\_0-360 deg\_90 deg step\_1-4 mtr Height\_QS\_MAXM15067\_5OUT\_0.3OUT\_Test1.TIL CONDITIONS : VIN = 24V, V OUT  = 6.3V, I OUT  = 0.3A

## MAXM15067 6.3V Output Evaluation Kit

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAXM15067EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAXM15067 6.3V EV Kit Bill of Materials

|   ITEM |   QTY | DESIGNATION   | Description                                                    | MANUFACTURER PARTNUMBER-1   | MANUFACTURER PARTNUMBER-2          |
|--------|-------|---------------|----------------------------------------------------------------|-----------------------------|------------------------------------|
|      1 |     1 | C1            | 0.1µF±10%,100V, X7R ceramic capacitor (0603)                   | MURATA GRM188R72A104KA35    | YAGEO PHICOMP CC0603KRX7R0BB104    |
|      2 |     1 | C2            | 4.7µF±20%,100V, Aluminimum Capacitor                           | NICHICON UUR2A4R7MCL6GS     |                                    |
|      3 |     1 | C3            | 1µF±10%,100V, X7R ceramic capacitor (1206)                     | MURATA GRM31CR72A105KA01    | TDK C3216X7R2A105K160AA            |
|      4 |     1 | C4            | 1µF±10%,16V, X7R ceramic capacitor (0603)                      | MURATA GRM188R71C105KA12    | TDK C1608X7R1C105K080AC            |
|      5 |     1 | C5            | 10µF±10%,16V, X7R ceramic capacitor (0805)                     | MURATA GRM21BZ71C106KE15    | SAMSUNG ELECTRONICS CL21B106KOQNNN |
|      6 |     1 | C6            | OPEN (OPTIONAL : 0.1 μ F±10%,50V, X7R ceramic capacitor (0603) | Murata GRM188R71H104KA93    |                                    |
|      7 |     1 | R1            | 2.2M Ω ±1% resistor (0402)                                     | VISHAY DALE CRCW04022M20FK  |                                    |
|      8 |     1 | R2            | 324k Ω ±1% resistor (0402)                                     | VISHAY DALE CRCW0402324KFK  | VENKEL LTD CR0402-16W-3243FT       |
|      9 |     1 | R3            | 453k Ω ±1% resistor (0402)                                     | PANASONIC ERJ-2RKF4533      |                                    |
|     10 |     1 | R4            | 75k Ω ±1% resistor (0402)                                      | VISHAY DALE CRCW040275K0FK  | YAGEO PHICOMP RC0402FR-0775KL      |
|     11 |     1 | R5            | 100k Ω ±1% resistor (0402)                                     | VISHAY DALE CRCW0402100KFK  | YAGEO PHICOMP RC0402FR-07100KL     |
|     12 |     1 | U1            | MAXM15067, 10-pin micro-SLIC Power Module                      | MAXIM MAXM15067AMB+T        |                                    |
|     13 |     1 | L1            | OPTIONAL : 82µH Shielded Wirewound Inductor(2016)              | Murata LQH2MPN820MGRL       |                                    |
|     14 |     1 | C7            | OPTIONAL : 0.1 μ F±10%,100V, X7R ceramic capacitor (0603)      | Murata GRM188R72A104KA35    |                                    |
|     15 |     1 | C8            | OPTIONAL : 0.68 μ F±10%,100V, X7R ceramic capacitor (1206)     | Murata GRM31MR72A684KA35    |                                    |
|     16 |     1 | C9            | OPTIONAL : 1 μ F±10%100V, X7R ceramic capacitor (1206)         | Murata GRM31CR72A105KA01L   |                                    |

Evaluates: MAXM15067 6.3V

Output-Voltage Application

## Component Suppliers

| SUPPLIER                 | WEBSITE                  |
|--------------------------|--------------------------|
| Murata Americas          | www.murata.com           |
| NEC TOKIN America, Inc.  | www.nec-tokinamerica.com |
| Panasonic Corp.          | www.panasonic.com        |
| SANYO Electric Co., Ltd. | www.sanyodevice.com      |
| TDK Corp.                | www.component.tdk.com    |
| TOKOAmerica, Inc.        | www.tokoam.com           |

Note: Indicate that you are using the MAXM15067 when contacting these component suppliers.

## MAXM15067 6.3V EV Kit Schematic

<!-- image -->

## MAXM15067 6.3V Output Evaluation Kit

## MAXM15067 6.3V EV Kit PCB Layout Diagrams

<!-- image -->

MAXM15067 EV Kit PCB Layout-Silk Top

MAXM15067 EV Kit PCB Layout-Top Layer

<!-- image -->

MAXM15065 EV Kit PCB Layout-Layer 2 Ground

<!-- image -->

Evaluates: MAXM15067 6.3V

Evaluates: MAXM15067 6.3V

## MAXM15067 6.3V EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAXM15067 EV Kit PCB Layout-Layer 3 Power

MAXM15067 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAXM15067 EV Kit PCB Layout-Silk Bottom

<!-- image -->

## MAXM15067 6.3V Output Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAXM15067 6.3V

Output-Voltage Application