<!-- lastmod 2022-08-02 -->
## MAX17690B No-Opto Flyback Evaluation Kit

## General Description

The MAX17690B evaluation kit (EV kit) is a fully assembled and  tested  circuit  board  that  demonstrates  the  operation of  an  isolated  5W  no-opto  flyback  DC-DC  converter.  This circuit uses a MAX17690 in a 16-pin TQFN package with an exposed pad. The data sheet must be read in conjunction with this quick start guide for demo circuit.

The EV kit output is configured for an isolated +5V and provides up to 1A of output current. The device switches at a 180kHz switching  frequency.  The  transformer  provides  the  galvanic isolation between input and output, up to 1875VAC.

## Features

- 18V to 36V Input Range
- Isolated Output: 5V/1A DC
- Compact Design with High-Frequency (180kHz) Switching
- Minimum Number of External Components
- 85.8% Peak Efficiency
- Low-Cost Flyback Design
- Galvanic Isolation up to 1875VAC
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX17690

## Quick Start

## Recommended Equipment

- One 18V-36V DC, 1A power supply
- 5W resistive load with 1A sink capacity
- Four digital multimeters (DMM)
- MAX17690EVKITB#

## Warning:

- Do not turn on the power supply until all connections are completed.
- Wear protective eye gear at all times.
- Do not touch any part of the circuit with bare hands or conductive materials when powered up.
- Make sure all high-voltage capacitors are fully discharged before handling. Allow 5 minutes after disconnecting the input power source before touching circuit parts.

## Equipment Setup and Test Procedure

- 1) Set the power supply to +24VDC. Disable the power supply output.
- 2) Connect the positive terminal of the power supply to the V IN  PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the electronic load to the V OUT PCB pad and the negative terminal to the nearest GND0 PCB pad.
- 3) Connect the resistive load across the output terminals.
- 4) Connect a DMM configured in voltmeter mode across the V OUT PCB pad and the nearest GND0 PCB pad.
- 5) Enable the power supply.
- 6) Verify that the output voltmeter displays 5V and, if required, measure the output current using a DMM in Ammeter mode.
- 7) If required, vary the input voltage from 18V to 36V, the load current from 0mA to 1A, and verify that output voltage is 5V.

<!-- image -->

## MAX17690B No-Opto Flyback Evaluation Kit

## Detailed Description

The  MAX17690B  EV  kit  provides  a  proven  design  to evaluate  the  MAX17690  high-efficiency  DC-DC  flyback converter. The  device  uses  a  novel  sampling  technique to eliminate the optocoupler in the output voltage sensing across the isolation boundary. The transformer design, as

## EV Kit Performance Report

<!-- image -->

<!-- image -->

## Component Suppliers

| SUPPLIER         | WEBSITE           |
|------------------|-------------------|
| Wurth Electronik | www.we-online.com |
| Murata Americas  | www.murata.com    |
| Panasonic Corp.  | www.panasonic.com |

Note: Indicate that you are using the MAX17690B when contacting these component suppliers.

Evaluates: MAX17690

well as the selection of different components, are detailed in the MAX17690 IC data sheet.

This  EV  kit  provides  the  programmable  soft-start  time to  limit  the  inrush  current.  The  IC  has  overcurrent  and thermal protection.

<!-- image -->

<!-- image -->

## MAX17690B No-Opto Flyback Evaluation Kit

## MAX17690 EV Kit Bill of Materials

| KEMET C1210C475K5RAC                                                                                                                          | KEMET C0402S471K5RAC                                                                                                                                |                                                                                                |                  | SAMSUNG ELECTRONICS CL21B105KBFNNNE KEMET C0402C103K5RAC                                                                                      |                                 | CENTRAL SEMICONDUCTOR CMZ5919B                                                                                                   | YAGEO PHICOMP RC0402FR-0710K                              | PANASONIC ERJ-3EKF2553V                                |                             |                                                        | VISHAY DALE D1004020B4421F                                |                                             | YAGEO PHICOMP RC0402FR-07100KL                           |                                    |                        | BOURNS CR0603-J/-000ELF          |                            |                            |                            |                                                                                  |                            |                            |                                             |                            |                            |                            |                            |                            |                            |                            |
|-----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|--------------------------------------------------------|-----------------------------|--------------------------------------------------------|-----------------------------------------------------------|---------------------------------------------|----------------------------------------------------------|------------------------------------|------------------------|----------------------------------|----------------------------|----------------------------|----------------------------|----------------------------------------------------------------------------------|----------------------------|----------------------------|---------------------------------------------|----------------------------|----------------------------|----------------------------|----------------------------|----------------------------|----------------------------|----------------------------|
| PANASONIC EEEFK1H470P Murata GRM32ER71H475KA88K TDK C2012X7R1H225K                                                                            | KEMET C0805C682K1RAC Murata GRM155R71C473KA01 Murata GRM155R71H471K Murata GRM155R72A221KA01                                                        | Murata GRM32EC70J107ME15                                                                       | AVX 1206SC102KAT | Murata GRM21BR71H105KA12 Murata GRM155R71H103KA88                                                                                             |                                 | DIODES INCORPORATED DFLS2100 DIODES INCORPORATED SBR8U60P5 DIODES INCORPORATED SMAZ5V6-FDITR-ND VISHAY SILICONIX SIR698DP-T1-GE3 | VISHAY DALE CRCW040210K0FK PANASONIC ERJ-2RKF2803X        | VISHAY DALE CRCW040210K7FK DALE CRCW0603255KFK         | VISHAY                      | VISHAY DALE CRCW0402124KFK VISHAY DALE CRCW120615K0FK  | VISHAY DALE CRCW0603150KFK VISHAY DALE                    | CRCW040227K4FK VENKEL LTD CR0402-16W-4421FT | PANASONIC ERJ6BWFR056                                    | VISHAY DRALORIC CRCW121047R0JNEAHP | PANASONIC ERJ-2GE0R00X | SAMSUNG ELECTRONICS RC1608J000CS | VISHAY DALE CRCW0402100KFK | VISHAY DALE CRCW0402100KFK | VISHAY DALE CRCW04022R20FK | WURTH ELECTRONICS INC. 750343444                                                 | VISHAY DALE CRCW0402100KFK | VISHAY DALE CRCW060349R9FK | MAX17690ATE+                                | VISHAY DALE CRCW0402100KFK | VISHAY DALE CRCW0402100KFK | VISHAY DALE CRCW0402100KFK | VISHAY DALE CRCW0402100KFK | VISHAY DALE CRCW0402100KFK | VISHAY DALE CRCW0402100KFK | VISHAY DALE CRCW0402100KFK |
| 1 47µF±20%, 50V,ALUMINUM-ELECTROLYTIC SMT(CASE_D8) 2 4.7µF±10% 50V X7R Ceramic capacitor (1210) 1 2.2µF±10%,50V, X7R ceramic capacitor (0805) | C5 1 6800pF, 10%, 100V, X7R ceramic capacitor (0805) 2 0.047uF±10%,16V, X7R ceramic capacitor (0402) 1 470pF ±10%,50V, X7R ceramic capacitor (0402) | 1 220pF ±10%,100V, X7R ceramic capacitor (0402) 2 100µF±20%, 6.3V, X7S ceramic capacitor(1210) | OPEN (0402)      | 1000PF±10%, 1500V, 7R ceramic capacitor (1206) C14 1 1uF±10%, 50V, X7R ceramic capacitor(0805) 1 0.01uF±10%, 50V, X7R ceramic capacitor(0402) | 1 100V/2A, (POWERDI-123), DIODE | 1 0.53V/8A, (POWERDI-5), DIODE 1 5.6V/1W, (SMA,DO-214AC), ZENER DIODE (SO-8), MOSFET: NCH                                        | R5 2 10kΩ ±1% resistor (0402) 1 280kΩ ±1% resistor (0402) | 10.7kΩ ±1% resistor (0402) 1 255kΩ ±1% resistor (0603) | 1 124kΩ ±1% resistor (0402) | 1 15kΩ ±1% resistor (1206) 1 150kΩ ±1% resistor (0603) | 1 27.4kΩ ±1% resistor (0402) 1 4.42kΩ ±1% resistor (0402) | 1 47Ω ±5% resistor (1210)                   | 1 0.056Ω ±1% resistor (0805) 1 100kΩ ±1% resistor (0402) |                                    |                        |                                  |                            | 1 0Ω ±0% resistor (0402)   |                            | 49.9Ω ±1% resistor (0603) EP10,8-pin SMT, 36µH ±10% ,1.6A,(1-4):(5-8)= 4.5:1,±1% | 0Ω ±5% resistor (0603)     | 2.2Ω ±1% resistor (0402)   | 1 1 MAX17690, TQFN16-EP, Flyback converters |                            |                            |                            |                            |                            |                            |                            |
| C2, C3                                                                                                                                        |                                                                                                                                                     |                                                                                                | 1 1              | C15                                                                                                                                           | D1                              | Q1 1 100V/7.5A/23W,                                                                                                              | 1                                                         | R4                                                     |                             | R7 R8                                                  | R10                                                       | R11                                         | R13                                                      |                                    | 1                      | 1                                |                            |                            |                            | 1                                                                                |                            |                            |                                             |                            |                            |                            |                            |                            |                            |                            |
|                                                                                                                                               | C8                                                                                                                                                  | C11                                                                                            | C12              |                                                                                                                                               |                                 | D2                                                                                                                               | R2                                                        | R6                                                     |                             | R12                                                    |                                                           |                                             | R14                                                      |                                    |                        |                                  |                            |                            |                            | T1                                                                               |                            |                            |                                             |                            |                            |                            |                            |                            |                            |                            |
| C4                                                                                                                                            |                                                                                                                                                     |                                                                                                | C13              |                                                                                                                                               |                                 | R1,                                                                                                                              |                                                           |                                                        |                             |                                                        | R9                                                        |                                             |                                                          |                                    |                        | R15                              |                            |                            | R16                        |                                                                                  |                            |                            |                                             |                            |                            |                            |                            |                            |                            |                            |
| C1                                                                                                                                            | C6,C7                                                                                                                                               | C9 C10,                                                                                        |                  |                                                                                                                                               |                                 | D3                                                                                                                               | R3                                                        |                                                        |                             |                                                        |                                                           |                                             |                                                          |                                    |                        |                                  | U1                         | U1                         | U1                         | U1                                                                               | U1                         | U1                         | U1                                          | U1                         | U1                         | U1                         | U1                         | U1                         | U1                         | U1                         |
| 1                                                                                                                                             |                                                                                                                                                     | 9                                                                                              | 10               |                                                                                                                                               | 15                              |                                                                                                                                  | 20                                                        | 21                                                     | 23                          | 27                                                     |                                                           |                                             |                                                          | 28                                 |                        |                                  |                            |                            |                            | R17                                                                              |                            |                            |                                             |                            |                            |                            |                            |                            |                            |                            |
|                                                                                                                                               | 5                                                                                                                                                   |                                                                                                |                  | 13                                                                                                                                            | 14                              | 16 17                                                                                                                            |                                                           | 22                                                     | 24                          | 25                                                     |                                                           |                                             | 30                                                       |                                    | 31                     |                                  |                            |                            |                            |                                                                                  |                            |                            |                                             |                            |                            |                            |                            |                            |                            |                            |
| 2 3                                                                                                                                           | 4 7                                                                                                                                                 | 8                                                                                              | 11               | 12                                                                                                                                            |                                 |                                                                                                                                  | 18 19                                                     |                                                        |                             | 26                                                     |                                                           |                                             |                                                          | 29                                 |                        |                                  | 33                         |                            | 32                         | 34 35                                                                            |                            |                            |                                             |                            |                            |                            |                            |                            |                            |                            |

Evaluates: MAX17690

## MAX17690B No-Opto Flyback Evaluation Kit

## MAX17690 EV Kit Schematic

<!-- image -->

Evaluates: MAX17690

## MAX17690B No-Opto Flyback Evaluation Kit

## MAX17690 EV Kit PCB Layout Diagrams

MAX17690 EV Kit-Top Silkscreen

<!-- image -->

MAX17690 EV Kit-Top

<!-- image -->

Evaluates: MAX17690

MAX17690 EV Kit-Layer 2

<!-- image -->

MAX17690 EV Kit-Layer 3

<!-- image -->

## MAX17690B No-Opto Flyback Evaluation Kit

## MAX17690 EV Kit PCB Layout Diagrams (continued)

MAX17690 EV Kit-Bottom

<!-- image -->

Evaluates: MAX17690

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17690EVKITB# | EV Kit |

## MAX17690B No-Opto Flyback Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 2/16            | Initial release                                                                                            | -               |
|                 1 | 8/16            | Updated Typical Operating Characteristics , Bill of Materials , Ordering Information table, and schematic. | 2-6             |
|                 2 | 1/17            | Updated TOCs, Bill of Materials , and schematic for 180kHz switching frequency                             | 1-7             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

Evaluates: MAX17690