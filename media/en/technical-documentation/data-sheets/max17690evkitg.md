<!-- lastmod 2022-08-02 -->
## MAX17690EVKITG# No-Opto Flyback Evaluation Kit

## General Description

The MAX17690G evaluation kit (EV kit) is a fully assembled and  tested  circuit  board  that  demonstrates  the  operation of  an  isolated  5W  no-opto  flyback  DC-DC  converter.  This circuit uses a MAX17690 in a 16-pin TQFN package with an exposed pad. The data sheet must be read in conjunction with this quick start guide for demo circuit.

The EV kit output is configured for an isolated +5V and provides up to 1A of output current. The device switches at  a  180kHz  switching  frequency.  The  transformer  pro -vides the galvanic isolation between input and output, up to 1500VAC.

## Features

- 4.5V to 5.5V Input Range
- Isolated Output: 5V/1A DC
- Compact Design with High-Frequency (180kHz) Switching
- Minimum Number of External Components
- 86.4% Peak Efficiency
- Low-Cost Flyback Design
- Galvanic Isolation up to 1500VAC
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX17690

## Quick Start

## Recommended Equipment

- One 4.5V to 5.5V DC, 1.5A power supply
- 5W resistive load with 1A sink capacity
- Four digital multimeters (DMM)
- MAX17690EVKITG#

## Warning:

- Do not turn on the power supply until all connections are completed.
- Wear protective eye gear at all times.
- Do not touch any part of the circuit with bare hands or conductive materials when powered up.
- Make sure all high-voltage capacitors are fully discharged before handling. Allow 5 minutes after disconnecting the input power source before touching circuit parts.

## Equipment Setup and Test Procedure

- 1) Set the power supply to +5VDC. Disable the power supply output.
- 2) Connect the positive terminal of the power supply to the V IN  PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the electronic load to the V OUT PCB pad and the negative terminal to the nearest GND0 PCB pad.
- 3) Connect the resistive load across the output terminals.
- 4) Connect a DMM configured in voltmeter mode across the V OUT PCB pad and the nearest GND0 PCB pad.
- 5) Enable the power supply.
- 6) Verify that the output voltmeter displays 5V and, if required, measure the output current using a DMM in Ammeter mode.
- 7) If required, vary the input voltage from 4.5V to 5.5V, the load current from 15mA to 1A, and verify that output voltage is 5V.

<!-- image -->

## MAX17690EVKITG# No-Opto Flyback Evaluation Kit

## Detailed Description

The  MAX17690G  EV  kit  provides  a  proven  design  to evaluate  the  MAX17690  high-efficiency  DC-DC  flyback converter. The  device  uses  a  novel  sampling  technique to eliminate the optocoupler in the output voltage sensing across the isolation boundary. The transformer design, as

## EV Kit Performance Report

<!-- image -->

EFFICIENCY vs. LOAD CURRENT

<!-- image -->

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| SUMIDA          | www.sumida.com    |
| Murata Americas | www.murata.com    |
| Panasonic Corp. | www.panasonic.com |

Note: Indicate that you are using the MAX17690G when contacting these component suppliers.

Evaluates: MAX17690

well as the selection of different components, are detailed in the MAX17690 IC data sheet.

This  EV  kit  provides  the  programmable  soft-start  time to  limit  the  inrush  current.  The  IC  has  overcurrent  and thermal protection.

<!-- image -->

<!-- image -->

## MAX17690EVKITG# No-Opto Flyback Evaluation Kit

## MAX17690 EV Kit Bill of Materials

| DESIGNATION   | QTY   | DESCRIPTION                                                                                              |
|---------------|-------|----------------------------------------------------------------------------------------------------------|
| C2            | 1     | 22uF±10%, 10V, X7R Ceramic capacitor (1210) MURATA GRM32ER71A226K                                        |
| C4            | 1     | 2.2uF±10%, 50V, X7R Ceramic capacitor (0805) TDK C2012X7R1H225K                                          |
| C5            | 1     | 6800pF±10%, 100V, X7R Ceramic capacitor (0805) KEMET C0805C682K1RAC                                      |
| C6, C7        | 2     | 0.047uF±10%, 16V, X7R Ceramic capacitor (0402) MURATA GRM155R71C473KA01                                  |
| C8            | 1     | 330pF±10%, 50V, X7R Ceramic capacitor (0402) MURATA GRM155R71H331KA01                                    |
| C9            | 1     | 220pF±10%, 100V, X7R Ceramic capacitor (0402) MURATA GRM155R72A221KA01                                   |
| C10, C11      | 2     | 100uF±20%, 6.3V, X7S Ceramic capacitor (1210) MURATA GRM32EC70J107ME15                                   |
| C13           | 1     | 1000pF±10%, 2000V, X7R Ceramic capacitor (1206) AVX 1206GC102KAT2A                                       |
| C14           | 1     | 1uF±10%, 50V, X7R Ceramic capacitor (0805) SAMSUNG ELECTRONICS CL21B105KBFNFNE MURATA GCJ21BR71H105KA01L |
| C15           | 1     | 0.01uF±10%, 50V, X7R Ceramic capacitor (0402) KEMET C0402C103K5RAC MURATA GRM155R71H103KA88              |
| D1            | 1     | 100V/2A, (POWERDI-123), DIODE DIODES INCORPORATED DFLS2100                                               |
| D2            | 1     | 60V/8A, (POWERDI-5), DIODE DIODES INCORPORATED SBR8U60P5                                                 |
| D3            | 1     | 5.6V/1W, (SMA, DO-214AC), DIODE, ZNR DIODES INCORPORATED SMAZ5V6 CENTRAL SEMICONDUCTOR CMZ5919B          |
| Q1            | 1     | 30V/29A/2.8W, 8-PowerVDFN, POWER TRANSISTOR INTERNATIONAL RECTIFIER IRFH3707PBF                          |
| R1            | 1     | 20kΩ±1% resistor, 0402 VISHAY DALE CRCW040220K0FK                                                        |
| R2            | 1     | 73.2kΩ±1% resistor, 0402 PANASONIC ERJ-2RKF7322                                                          |
| R3            | 1     | 6.65kΩ±1% resistor, 0402 PANASONIC ERJ-2RKF6651                                                          |
| R4            | 1     | 69.8kΩ±1% resistor, 0603 VISHAY DALE CRCW060369K8FK                                                      |
| R5            | 1     | 10kΩ±1% resistor, 0402 VISHAY DALE CRCW040210K0FK                                                        |
| R6            | 1     | 174kΩ±1% resistor, 0402 PANASONIC ERJ-2RKF1743X                                                          |
| R7            | 1     | 15kΩ±1% resistor, 1206 VISHAY DALE CRCW120615K0FK                                                        |
| R8            | 1     | 42.2kΩ±1% resistor, 0603 VISHAY DALE CRCW060342K2FK                                                      |
| R9            | 1     | 27.4kΩ±1% resistor, 0402 VISHAY DALE CRCW040227K4FK                                                      |
| R10           | 1     | 5.76kΩ±1% resistor, 0402 YAGEO RC0402FR-075K76L                                                          |
| R11           | 1     | 47Ω±5% resistor, 1210 VISHAY DRALORIC CRCW121047R0JNEAHP                                                 |
| R12           | 1     | 0.016Ω±1% resistor, 1206 ROHM UCR18EVHFSR016                                                             |
| R13           | 1     | 100kΩ±1% resistor, 0402 VISHAY DALE CRCW0402100KFKED                                                     |
| R14           | 1     | 0Ω resistor, 0402 PANASONIC ERJ-2GE0R00X                                                                 |
| R15           | 1     | 0Ω resistor, 0603 SAMSUNG ELECTRONICS RC1608J000CS                                                       |
| R16           | 1     | 2.2Ω±1% resistor, 0402 VISHAY DALE CRCW04022R20FK                                                        |
| R17           | 1     | 49.9Ω±1% resistor, 0603 VISHAY DALE CRCW060349R9FK                                                       |
| T1            | 1     | 8-pin SMT, 3uH, 5.6A, (1,2-3,4):(5-8) = 1:0.8 SUMIDA CEP1110-12387-T116                                  |
| U1            | 1     | MAX17690, TQFN16-EP, NO-OPTO ISOLATED FLYBACK CONTORLLER IC MAXIM MAX17690ATE+                           |
| C1            | 0     | OPEN                                                                                                     |
| C3 C12        | 0 0   | OPEN OPEN                                                                                                |

Evaluates: MAX17690

## MAX17690 EV Kit Schematic

<!-- image -->

Evaluates: MAX17690

## MAX17690EVKITG# No-Opto Flyback Evaluation Kit

## MAX17690 EV Kit PCB Layout Diagrams

MAX17690 EV Kit-Silk Top

<!-- image -->

MAX17690 EV Kit-GND Layer 2

<!-- image -->

Evaluates: MAX17690

MAX17690 EV Kit-Top Layer

<!-- image -->

MAX17690 EV Kit-PWR Layer 3

<!-- image -->

## MAX17690 EV Kit PCB Layout Diagrams (continued)

MAX17690 EV Kit-Bottom Layer

<!-- image -->

## Ordering Information

MAX17690 EV Kit-Silk Bottom

| PART            | TYPE   |
|-----------------|--------|
| MAX17690EVKITG# | EV Kit |

<!-- image -->

Evaluates: MAX17690

## MAX17690EVKITG# No-Opto Flyback Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                       | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------|-----------------|
|                 0 | 4/18            | Initial release                                   | -               |
|                 1 | 8/18            | Updated Quick Start section and PCB Layout images | 1, 5-6          |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

Evaluates: MAX17690