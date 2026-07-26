<!-- lastmod 2022-08-02 -->
## MAXM17624 3.3V Output Evaluation Kit

## General Description

The MAXM17624 3.3V output evaluation kit (EV kit) provides a proven design to evaluate the MAXM17624 high frequency, high-efficiency, synchronous step-down DC-DC power module. The EV kit is programmed to deliver 3.3V output for loads up to 1A. The EV kit features selectable mode, and open-drain PGOOD signal. The MAXM17624 data sheet provides a complete description of the module that  should  be  read  in  conjunction  with  this  EV  kit  data sheet prior to modifying the demo circuit. For full module features,  benefits  and  parameters,  refer  to  the  MAXM17624 data sheet.

## Features

- Highly Integrated Solution
- 3.6V to 5.5V Input Range
- Programmed 3.3V Output, Delivers Up To 1A Output Current
- High 95.2% Efficiency (V IN  = 5V, V OUT = 3.3V at 0.4A)
- 4MHz Switching Frequency
- PFM Feature for Better Light-Load Efficiency
- Fixed Internal 1ms Soft-Start Time
- PGOOD Output, with Pullup Resistor to V IN
- Overcurrent and Overtemperature Protection (OCP and OTP)
- Low-Profile, Surface-Mount Components
- Proven PCB Layout
- Fully Assembled and Tested

Evaluates: MAXM17624 3.3V

## Output-Voltage Application

## Quick Start

## Recommended Equipment

- One 3.6V to 5.5V DC, 1A power supply
- One resistive load with 3.3V, 1A sink capacity
- One digital multimeter (DMM)
- MAXM17624EVKIT#

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation.

## Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Set the power supply at a voltage between 3.6V and 5.5V. Then, disable the power supply.
- 2) Connect the positive terminal of the power supply to the  VIN  PCB  pad  and  the  negative  terminal  to  the nearest  PGND  PCB  pad.  Connect  the  positive  ter -minal of the 1A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect  the  DVM  (DMM  in  voltage-measurement mode) across the VOUT PCB pad and the nearest PGND PCB pad.
- 4) Verify that shunt is installed in the default position on jumper J1 (see Table 1 for details).
- 5) Turn on the DC power supply.
- 6) Enable the load.
- 7) Verify that the DVM displays 3.3V.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAXM17624 3.3V Output Evaluation Kit

## Detailed Description

The  MAXM17624  EV  kit  is  designed  to  demonstrate salient  features  of  MAXM17624 power module. The EV kit  includes  an  EN  PCB  pad,  and  jumper  J1,  to  enable the output. Jumper J2 allows selection of either PWM or PFM mode of operation based on light-load performance requirements. An additional PGOOD pad is available for monitoring if the converter output voltage is in regulation.

## Output Capacitor Selection

X7R ceramic output capacitors are preferred due to their stability  over  temperature  in  industrial  applications.  The required output capacitor (C4) for 3.3V output is selected from Table 1 of the MAXM17624 data sheet as 10µF/16V.

## Adjusting Output Voltage

The MAXM17624 supports an adjustable output-voltage range, from 1.5V to 3.3V, using a feedback resistive divid -er from V OUT  to FB. Output voltage can be programmed using the values given in Table 1 of the MAXM17624 data sheet. For 3.3V output, R1 is chosen as 118kΩ, and R2 is chosen as 37.4kΩ.

## Input Capacitor Selection

The input capacitor  serves  to  reduce  the  current  peaks drawn from the input power supply and reduces switching frequency ripple at the input. The input capacitance must be greater than or equal to the value given in Table 1 of

## Table 1. Enable/Disable Configuration (J1)

| POSITION   | EN PIN            | MAXM17624 OUTPUT                           |
|------------|-------------------|--------------------------------------------|
| 1-2*       | Connected to V IN | Enabled if V IN is greater than V EN_HIGH. |
| 2-3        | Connected to SGND | Disabled                                   |

*Default position

## Table 2. Mode of Operation (J2)

| POSITION       | MODE PIN                                       |
|----------------|------------------------------------------------|
| 1-2            | Operates in PWM mode at all load conditions.   |
| Not Installed* | Operates in PFM mode at light-load conditions. |

## Evaluates: MAXM17624 3.3V Output-Voltage Application

the MAXM17624 data sheet. Input capacitor C3 is chosen to be 2.2µF/10V.

## Hot-Plug-In and Long Input Cables

The  MAXM17624  EV  kit  PCB  provides  an  optional Tantalum  capacitor  (C2,  47µF/8V)  to  dampen  input voltage  peaks  and  oscillations  that  can  arise  during hot-plug-in and/or due to long input cables. This capacitor limits  the  peak  voltage  at  the  input  of  the  MAXM17624 power module, when the EV kit is powered directly from a precharged capacitive source or an industrial backplane PCB. Long input cables, between input power source and the EV kit circuit can cause input-voltage oscillations due to  the  inductance  of  the  cables.  The  equivalent  series resistance (ESR) of the Tantalum capacitor helps damp out the oscillations caused by long input cables. Further, capacitor C1 (0.1µF/100V), placed near the input of the board, helps in attenuating high frequency noise.

## Mode of Operation

The  MAXM17624  features  PFM  mode  of  operation  to increase the efficiency at light-load condition. If the MODE pin is left unconnected during powerup, the module oper -ates in PFM mode at light loads. If the MODE pin is con -nected  to  SGND  during  power-up,  the  part  operates  in constant-frequency PWM mode at all loads. See Table 2 for J2 settings.

## MAXM17624 3.3V Output Evaluation Kit

## EV Kit Performance Report

MAXM17624 EFFICIENCY vs. LOAD CURRENT VIN = 5V, VOUT = 3.3V, PWM AND PFM MODE

<!-- image -->

MAXM17624 BODE PLOT VIN  = 5V, V OUT  = 3.3V, FULL LOAD, PWM MODE

<!-- image -->

<!-- image -->

Evaluates: MAXM17624 3.3V

Output-Voltage Application

<!-- image -->

MAXM17624 OUTPUT VOLTAGE vs. LOAD CURRENT VIN = 5V, V OUT = 3.3V, PWM AND PFM MODE

<!-- image -->

<!-- image -->

## EV Kit Performance Report (continued)

<!-- image -->

Evaluates: MAXM17624 3.3V

<!-- image -->

## MAXM17624 3.3V Output Evaluation Kit

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAXM17624EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAXM17624 3.3V EV Kit Bill of Materials

|   Item |   Quantity | Designation                       | Description                                   | Manufacturer Part No.    |
|--------|------------|-----------------------------------|-----------------------------------------------|--------------------------|
|      1 |          2 | C1, C6                            | 0.1µF±10%, 10V, X7R, ceramic capacitor (0402) | TDK C1005X5R1A104K       |
|      2 |          1 | C2                                | 47µF±20%, 8V, Tantalum capacitor (3528)       | Kemet T520B476M008ATE035 |
|      3 |          1 | C3                                | 2.2µF±10%, 10V, X7R, ceramic capacitor (0603) | Murata GRM188R71A225KE15 |
|      4 |          1 | C4                                | 10µF±10%, 16V, X7R, ceramic capacitor (0805)  | Murata GRM21BZ71C106KE15 |
|      5 |          1 | R1                                | 118k Ω±1% resistor (0402)                     | Yageo RC0402FR-07118KL   |
|      6 |          1 | R2                                | 37.4k Ω±1% resistor (0402)                    | Yageo RC0402FR-0737K4L   |
|      7 |          1 | R3                                | 100k Ω±1% resistor (0402)                     | Panasonic ERJ-2RKF1003X  |
|      8 |          1 | U1                                | MAXM17624 10pin u-SLIC Power Module           | Maxim MAXM17624AMB+      |
|      9 |          1 | PCB                               | MAXM17624 EVKIT PCB                           | -                        |
|     10 |          1 | JU1                               | Jumper pins                                   | Sullins PBC03SAAN        |
|     11 |          1 | JU2                               | Jumper pins                                   | Sullins PBC02SAAN        |
|     12 |          2 | SU1, SU2                          | Jumper heads                                  | Sullins NPB02SVAN-RC     |
|     13 |          6 | EN, VIN, PGND, VOUT, PGND1, PGOOD | Test Loops                                    | Weico Wire 9020 BUSS     |

Evaluates: MAXM17624 3.3V

Output-Voltage Application

## Component Suppliers

| SUPPLIER        | WEBSITE               |
|-----------------|-----------------------|
| Murata Americas | www.murata.com        |
| Panasonic Corp. | www.panasonic.com     |
| TDK Corp.       | www.component.tdk.com |
| Yageo           | www.yageo.com         |

Note: Indicate that you are using the MAXM17624 when contacting these component suppliers.

## MAXM17624 3.3V EV Kit Schematic

<!-- image -->

## MAXM17624 3.3V Output Evaluation Kit

## MAXM17624 3.3V EV Kit PCB Layout Diagrams

MAXM17624 EV Kit PCB Layout-Silk Top

<!-- image -->

MAXM17624 EV Kit PCB Layout-Top Layer

<!-- image -->

Evaluates: MAXM17624 3.3V

Output-Voltage Application

## MAXM17624 3.3V Output Evaluation Kit

Evaluates: MAXM17624 3.3V

Output-Voltage Application

## MAXM17624 3.3V EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAXM17624 EV Kit PCB Layout-Layer 2 Ground

<!-- image -->

MAXM17624 EV Kit PCB Layout-Layer 3 Power

Evaluates: MAXM17624 3.3V

Output-Voltage Application

## MAXM17624 3.3V EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAXM17624 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAXM17624 EV Kit PCB Layout-Bottom Silkscreen

## MAXM17624 3.3V Output Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                  | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 1/19            | Initial release                                                                                                                                                                              | -               |
|                 1 | 8/19            | Updated TOC1-TOC02 and TOC12                                                                                                                                                                 | 3-4             |
|                 2 | 1/20            | Updated the Recommended Equipment, Equipment Setup and Test Procedure, Mode of Operation , and MAXM17624 3.3V EV Kit Bill of Materials sections; updated Table 1, and TOC09, TOC11 and TOC12 | 1-2, 4-5        |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAXM17624 3.3V

Output-Voltage Application