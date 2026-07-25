<!-- lastmod 2022-08-02 -->
## MAXM15068 12V Output Evaluation Kit

## General Description

The  MAXM15068  12V  output  evaluation  kit  (EV  kit) provides  a  proven  design  to  evaluate  the  MAXM15068 high-voltage,  high-efficiency,  synchronous  step-down DC-DC module. The EV kit is programmed to deliver 12V output  for  loads  up  to  200mA.  The  EV  kit  features  an adjustable  input  undervoltage  lockout,  selectable  mode, and  open-drain RESET signal.  The  MAXM15068  data sheet  provides  a  complete  description  of  the  module that  should  be  read  in  conjunction  with  this  EV  kit  data sheet prior to modifying the demo circuit. For full module features,  benefits  and  parameters,  refer  to  the  MAXM15068 data sheet.

## Features

- Highly Integrated Solution
- Wide 15.5V to 60V Input Range
- Programmed 12V Output, Delivers Up To 200mA Output Current
- High 91.13% Efficiency (V IN = 24V, V OUT  = 12V at 120mA)
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

Evaluates: MAXM15068 12V

Output-Voltage Application

## Quick Start

## Recommended Equipment

- One 15.5V to 60V DC, 200mA power supply
- 2.4W resistive load with 200mA sink capacity
- Four digital multimeters (DMM)
- MAXM15068EVKIT#

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation.

## Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Set the power supply at a voltage between 15.5V and 60V. Then, disable the power supply.
- 2) Connect the positive terminal of the power supply to the  VIN  PCB  pad  and  the  negative  terminal  to  the nearest GND PCB pad. Connect the positive termi -nal of the 200mA load to the VOUT PCB pad and the negative terminal to the nearest GND PCB pad.
- 3) Connect  the  DMM  in  voltage-measurement  mode across the VOUT PCB pad and the nearest GND PCB pad.
- 4) Verify that shunt is not installed  on  jumper  J1 (see Table 1 for details).
- 5) Turn on the DC power supply.
- 6) Enable the load.
- 7) Verify that the DMM displays 12V.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAXM15068 12V Output Evaluation Kit

## Detailed Description

The  MAXM15068  EV  kit  is  designed  to  demonstrate salient features of MAXM15068 power module. The EV kit includes an EN/UVLO PCB pad, and jumper J1, to enable the output at a desired input voltage. Jumper J2 allows selection of either PWM or PFM mode of operation based on  light-load  performance  requirements.  An  additional RESET pad  is  available  for  monitoring  if  the  converter output voltage is in regulation.

## Output Capacitor Selection

X7R ceramic output capacitors are preferred due to their stability  over  temperature  in  industrial  applications.  The required output capacitor (C6) for 12V output is selected from Table 1 of the MAXM15068 data sheet as 4.7μF/25V.

## Adjusting Output Voltage

The MAXM15068 supports an adjustable output-voltage range, from 5V to 12V, using a feedback resistive divider from  V OUT to  FB.  Output  voltage  can  be  programmed using the values given in Table 1 of the MAXM15068 data sheet. For 12V output, R3 is chosen as 931kΩ, and R4 is chosen as 75kΩ.

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The MAXM15068 offers an adjustable input undervoltagelockout feature. In this EV kit, for normal operation, leave jumper J1 open. When J1 is left open, the MAXM15068 is enabled when the input voltage rises above 15.5V. To disable MAXM15068, install a jumper across pins 2-3 on J1. See Table 1 for J1 settings. A potential divider formed by R1 and R2 sets the input voltage (V INU ) at which the module  is  enabled.  The  value  of  resistor  R1  is  chosen to  be  2.2MΩ,  and  R2  is  calculated  using  the  following equation:

<!-- formula-not-decoded -->

where R1 and R2 are in kΩ,

For MAXM15068 to turn on at 15.5V input, the Resistor R2 is calculated to be 191kΩ.

## Input Capacitor Selection

The input capacitor  serves  to  reduce  the  current  peaks drawn from the input power supply and reduces switching frequency ripple at the input. The input capacitance must be greater than or equal to the value given in Table 1 of MAXM15068 data sheet. Input capacitor C3 is chosen to be 1µF/100V.

## Evaluates: MAXM15068 12V Output-Voltage Application

## Electro-Magnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency currents  drawn  by  the  switching  power  converter,  and limits the noise injected back into the input power source.

Use of EMI filter components as shown in Figure 1 in con -junction with the schematic results in lower conducted emis -sions below CISPR22 Class B limits. The MAXM15068 EV kit PCB layout is also designed to limit radiated emissions from  switching  nodes  of  the  power  converter  resulting  in radiated emissions below CISPR22 Class B limits. Further, capacitors (C1, C4, 0.1μF/100V) and (C7, 0.1μF/16V), help in attenuating high frequency noise.

## Hot-Plug-In and Long Input Cables

The  MAXM15068  EV  kit  PCB  provides  an  optional electrolytic  capacitor  (C2,  4.7µF/100V)  to  dampen  input voltage peaks and oscillations that can arise during hotplug-in  and/or  due  to  long  input  cables.  This  capacitor limits  the  peak  voltage  at  the  input  of  the  MAXM15068 power module, when the EV kit is powered directly from a precharged capacitive source or an industrial backplane PCB. Long input cables, between input power source and the EV kit circuit can cause input-voltage oscillations due

## Table 1. UVLO Enable/Disable Configuration (J1)

*Default position

| POSITION       | EN/UVLO PIN                                                 | MAXM15068_ OUTPUT                                     |
|----------------|-------------------------------------------------------------|-------------------------------------------------------|
| Not Installed* | Connected to the center node of resistor-divider R1 and R2. | Programmed to startup at desired input-voltage level. |
| 1-2            | Connected to V IN                                           | Enabled if V IN is greater than V IN(MIN).            |
| 2-3            | Connected to GND                                            | Disabled                                              |

Figure 1. EMI Filter Components

<!-- image -->

## MAXM15068 12V Output Evaluation Kit

to  the  inductance  of  the  cables.  The  equivalent  series resistance (ESR) of the electrolytic capacitor helps damp out the oscillations caused by long input cables.

## Mode of Operation

The  MAXM15068  features  PFM  mode  of  operation  to increase the efficiency at light-load condition. If the MODE pin  is  left  unconnected  during  powerup,  the  module operates in PFM mode at light loads. If the MODE pin is connected to GND during power-up, the part operates in constant-frequency PWM mode at all loads. See Table 2 for J2 settings.

## EV Kit Performance Report

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAXM15068 12V Output-Voltage Application

## Internal LDO

An  internal  regulator  provides  a  5V  nominal  supply  to power the internal functions of the module. The output of the linear regulator (V CC ) should be bypassed with a 1µF capacitor C5 to GND.

Table 2. Mode of Operation (J2)

| POSITION       | MODE PIN                                       |
|----------------|------------------------------------------------|
| 1-2            | Operates in PWM mode.                          |
| Not Installed* | Operates in PFM mode at light-load conditions. |

*Default position

<!-- image -->

<!-- image -->

## EV Kit Performance Report (continued)

<!-- image -->

<!-- image -->

CONDUCTED EMISSION PLOT WITH FILTERLEML\_1 = 82uH, CeMI\_1 = 0.47uF,CEMI\_2 = 1μF

<!-- image -->

CONDITIONS : VIn = 24V, VouT = 12V, louT = 0.2A

Evaluates: MAXM15068 12V

<!-- image -->

<!-- image -->

RADIATED EMISSION PLOT L EMI\_1 = SHORT, C EMI\_1 = C EMI\_2 = OPEN

<!-- image -->

CONDITIONS : V IN  = 24V, V OUT = 12V, I OUT  = 0.2A

## MAXM15068 12V Output Evaluation Kit

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAXM15068EVKIT# | EV Kit |

## MAXM15068 12V EV Kit Bill of Materials

|   ITEM |   QTY | DESIGNATION   | DESCRIPTION                                                 | MANUFACTURER PART NUMBER    |
|--------|-------|---------------|-------------------------------------------------------------|-----------------------------|
|      1 |     2 | C1, C4        | 0.1μF±10%, 100V, X7R ceramic capacitor (0603)               | TAIYO YUDEN HMK107B7104KA   |
|      2 |     1 | C2            | 4.7μF±20%, 100V, Aluminum Electrolytic capacitor            | NICHICON UUR2A4R7MCL6GS     |
|      3 |     1 | C3            | 1μF±10%, 100V, X7R ceramic capacitor (1206)                 | TAIYO YUDEN HMK316B7105KLHT |
|      4 |     1 | C5            | 1μF±10%, 16V, X7R ceramic capacitor (0603)                  | TAIYO YUDEN EMK107B7105KA   |
|      5 |     1 | C6            | 4.7μF±10%, 25V, X7R ceramic capacitor (0805)                | MURATA GRM21BZ71E475KE15    |
|      6 |     1 | C7            | 0.1μF±10%, 16V, X7R ceramic capacitor (0402)                | TAIYO YUDEN EMK105B7104KV-F |
|      7 |     1 | R1            | 2.2MΩ±1% resistor (0402)                                    | VISHAY DALE CRCW04022M20FK  |
|      8 |     1 | R2            | 191kΩ±1% resistor (0402)                                    | VISHAY DALE CRCW0402191KFK  |
|      9 |     1 | R3            | 931kΩ±1% resistor (0402)                                    | VISHAY DALE CRCW0402931KFK  |
|     10 |     2 | R4            | 75kΩ±1% resistor (0402)                                     | VISHAY DALE CRCW040275K0FK  |
|     11 |     1 | R5            | 100kΩ±1% resistor (0402)                                    | VISHAY DALE CRCW0402100KFK  |
|     12 |     1 | U1            | MAXM15068, 10-pin micro-SLIC Power Module                   | MAXIM MAXM15068AMB+T        |
|     13 |     1 | L EMI_1       | OPTIONAL: 82µH±20%,150mA Shielded Wirewound Inductor (2016) | MURATA LQH2MPN820MGRL       |
|     14 |     1 | C EMI_1       | OPTIONAL: 0.47μF±10%, 100V, X7R ceramic capacitor (1206)    | MURATA GRM31MR72A474KA35L   |
|     15 |     1 | C EMI_2       | OPTIONAL: 1μF±10%, 100V, X7R ceramic capacitor (1206)       | TAIYO YUDEN HMK316B7105KLHT |

Evaluates: MAXM15068 12V

Output-Voltage Application

## Component Suppliers

| SUPPLIER        | WEBSITE            |
|-----------------|--------------------|
| Murata Americas | www.murata.com     |
| Nichicon        | www.nichicon.co.jp |
| Vishay Dale     | www.vishay.com     |
| Taiyo Yuden     | www.yuden.co.jp    |

Note: Indicate that you are using the MAXM15068 when contacting these component suppliers.

## MAXM15068 12V EV Kit Schematic

<!-- image -->

## MAXM15068 12V Output Evaluation Kit

## MAXM15068 12V EV Kit PCB Layout Diagrams

<!-- image -->

MAXM15068 EV Kit PCB Layout-Silk Top

<!-- image -->

MAXM15068 EV Kit PCB Layout-Layer 2 Ground

MAXM15068 EV Kit PCB Layout-Top Layer

<!-- image -->

MAXM15068 EV Kit PCB Layout-Layer 3 Power

<!-- image -->

Evaluates: MAXM15068 12V

Evaluates: MAXM15068 12V

## MAXM15068 12V EV Kit PCB Layout Diagrams (continued)

MAXM15068 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAXM15068 EV Kit PCB Layout-Silk Bottom

<!-- image -->

## MAXM15068 12V Output Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/19           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAXM15068 12V

Output-Voltage Application