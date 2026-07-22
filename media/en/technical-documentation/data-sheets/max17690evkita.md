<!-- lastmod 2022-08-02 -->
## MAX17690 No-Opto Flyback Evaluation Kit

## Evaluates: MAX17690 No-Opto Flyback with Secondary-Side Synchronous Rectification

## General Description

The MAX17690A evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the operation of an isolated 5W no-opto flyback DC-DC converter with secondary-side  synchronous  rectification.  This  circuit  is implemented  using  the  MAX17690,  a  no-opto,  flyback controller  in  a  16-pin  TQFN  package  with  an  exposed pad.  The  synchronous  rectification  on  the  secondaryside is enabled by replacing the secondary diode with a MOSFET to achieve 89.5% efficiency. The circuit uses the MAX17606, a secondary-side synchronous rectifier driver in a 6-pin SOT23 package for driving the secondary-side MOSFET.

The  EV  kit  output  is  configured  for  an  isolated  +5V and  provides  up  to  1A  of  output  current.  The  EV  kit  is programmed to operate at a 150kHz switching frequency. The transformer provides the galvanic isolation between input and output, up to 1875V RMS . The EV kit regulates the  output  voltage  within  ±5%  over  the  line,  load,  and temperature without using the auxiliary winding/optocoupler for output voltage feedback.

## Features

- 18V to 36V Input Range
- Isolated Output: 5V/1A DC
- Compact Design with High Frequency (150kHz) Switching
- No Optocoupler/Third Winding Required to Derive Feedback Signal
- 90% Peak Efficiency
- Galvanic Isolation up to 1875V RMS
- Proven PCB Layout
- Fully Assembled and Tested
- Minimum Load for ±5% Regulation: 1% of Full-Load

Ordering Information appears at end of data sheet.

## Quick Start

## Recommended Equipment

- One 18V-36V DC, 1A power supply
- 5W resistive load with 1A sink capacity
- Four digital multimeters (DMM)
- MAX17690EVKITA#

## Warning

- Do not turn on the power supply until all connections are completed.
- Wear protective eye gear at all times.
- Do not touch any part of the circuit with bare hands/ conductive materials when powered up.
- Make  sure all high-voltage capacitors are fully discharged  before  handling.  Allow  5  minutes  after disconnecting  input  power  source  before  touching circuit parts.

## Equipment Setup and Test Procedure

- 1) Set the power supply to +24VDC. Disable the power supply output.
- 2) Connect the positive terminal of the power supply to the  VIN  PCB  pad  and  the  negative  terminal  to  the nearest PGND PCB pad. Connect the positive terminal of the electronic load to the VOUT PCB pad and the negative terminal to the nearest GND0 PCB pad.
- 3) Connect the resistive load across the output terminals.
- 4) Connect a DMM configured in voltmeter mode across the VOUT PCB pad and the nearest GND0 PCB pad.
- 5) Enable the power supply.
- 6) Verify  that  the  output  voltmeter  displays  5V  and,  if required,  measure  the  output  current  using  a  DMM programmed in ammeter mode.
- 7) If  required,  vary  the  input  voltage  from  18V  to  36V, and the load current from 10mA to 1A. Verify that the output voltage is 5V ±5%.

<!-- image -->

## MAX17690 No-Opto Flyback Evaluation Kit

## Detailed Description

The MAX17690 EV kit provides a proven design to evaluate the  MAX17690,  a  high-efficiency  no-opto  DC-DC  flyback controller. The device uses a novel sampling technique to eliminate the optocoupler/third winding in sensing the output voltage across the isolation boundary. The MAX17606, a secondary-side synchronous driver, is used, along with the MAX17690, to improve the converter efficiency.

This EV kit provides the programmable soft-start feature to limit the inrush current. The EN/UVLO is used to start the converter at the desired input voltage. The OVI is used to  turn-off  the  converter  at  the  desired  input  overvoltage level.  The  MAX17690 provides overcurrent and thermal protection.  The  details  of  soft-start  time  programming, programming the output voltage, peak-current-limit setting, switching frequency setting, and the EN/UVLO, OVI settings are described in the MAX17690 IC data sheet.

## EV Kit Performance Report

<!-- image -->

<!-- image -->

## Evaluates: MAX17690 No-Opto Flyback with Secondary-Side Synchronous Rectification

The MAX17606 has provision to program the turn-off trip point of the secondary synchronous rectifier. An external resistor (R18) connects the drain of the external MOSFET to IC's DRN pin. This resistor sets the turn-off trip point using  the  precise  internal  current  source.  After  the synchronous  rectifier  is  turned-off  to  avoid  the  false tripping  due  to  DCM  ringing,  the  MAX17606  programs the  minimum  turn-off  time.  The  MAX17606  uses  the resistor (R20) connected between TOFF pin to GND0 to program  the  minimum  turn-off  time.  For  selecting  R18, R20 and other components related to MAX17606, refer the MAX17606 IC data sheet.

<!-- image -->

<!-- image -->

## MAX17690 No-Opto Flyback Evaluation Kit

## Component Suppliers

|   S NO | Designation   |   Qty | Description                                      | Manufacturer Partnumber-1                  | Manufacturer Partnumber-2           |
|--------|---------------|-------|--------------------------------------------------|--------------------------------------------|-------------------------------------|
|      1 | C1            |     1 | 47µF±20%, 50V,ALUMINUM-ELECTROLYTIC SMT(CASE_D8) | PANASONIC EEEFK1H470P                      |                                     |
|      2 | C2, C3        |     2 | 2.2µF±10% 100V X7R Ceramic capacitor (1210)      | Murata GRM32ER72A225KA35                   | TDK CGA6N3X7R2A225K230              |
|      3 | C4,C16,C17    |     3 | 2.2µF±10%,50V, X7R ceramic capacitor (0805)      | TDK C2012X7R1H225K                         |                                     |
|      4 | C5            |     1 | 2200pF, 10%, 100V, X7R ceramic capacitor (0402)  | Murata GRM155R71C473KA01                   |                                     |
|      5 | C6            |     1 | 0.047uF±10%,16V, X7R ceramic capacitor (0402)    | Murata GRM155R71C473KA01                   |                                     |
|      6 | C7            |     1 | 00.047uF±10%,50V, X7R ceramic capacitor 0402)    | Murata GRM155R71H473KE14                   |                                     |
|      7 | C8            |     1 | 470pF ±10%,50V, X7R ceramic capacitor (0402)     | Murata GRM155R71H471K or GRM155R71H471KA01 | KEMET C0402S471K5RAC                |
|      8 | C9            |     1 | 220pF ±10%,100V, X7R ceramic capacitor (0402)    | Murata GRM155R72A221KA01                   |                                     |
|      9 | C10, C11      |     2 | 100µF±20%, 6.3V, X7S ceramic capacitor(1210)     | Murata GRM32EC70J107ME15                   |                                     |
|     10 | C12           |     1 | OPEN (0402)                                      |                                            |                                     |
|     11 | C13           |     1 | 1000PF±10%, 1500V, 7R ceramic capacitor (1206)   | AVX 1206SC102KAT                           |                                     |
|     12 | C14           |     1 | 1uF±10%, 50V, X7R ceramic capacitor(0805)        | Murata GRM21BR71H105KA12                   | SAMSUNG ELECTRONICS CL21B105KBFNNNE |
|     13 | C15           |     1 | 0.01uF±10%, 50V, X7R ceramic capacitor(0402)     | Murata GRM155R71H103KA88                   | TDK C0402C103K5RAC                  |
|     14 | D1            |     1 | 100V/2A, (POWERDI-123), DIODE                    | DIODES INCORPORATED DFLS2100               |                                     |
|     15 | D2            |     1 | 100V/0.3A, (SOD-123), DIODE                      | DIODES INCORPORATED 1N4148W-7-F            |                                     |
|     16 | D3            |     1 | 5.6V/1W, (SMA,DO-214AC), ZENER DIODE             | DIODES INCORPORATED SMAZ5V6-FDITR-ND       | CENTRAL SEMICONDUCTOR CMZ5919B      |
|     17 | Q1            |     1 | 150V/16A/69W, (POWER-56), MOSFET: NCH            | FAIRCHILD SEMICONDUCTOR FDMS86252          |                                     |
|     18 | Q2            |     1 | 30V/51A/62.5W, (POWERFLAT-56 ), MOSFET: NCH      | ST MICROELECTRONICS STL51N3LLH5            |                                     |
|     19 | R1, R5        |     2 | 10kΩ ±1% resistor (0402)                         | VISHAY DALE CRCW040210K0FK                 | YAGEO PHICOMP RC0402FR-0710K        |
|     20 | R2            |     1 | 280kΩ ±1% resistor (0402)                        | PANASONIC ERJ-2RKF2803X                    |                                     |
|     21 | R3            |     1 | 10.7kΩ ±1% resistor (0402)                       | VISHAY DALE CRCW040210K7FK                 |                                     |
|     22 | R4            |     1 | 274kΩ ±1% resistor (0402)                        | VISHAY DALE CRCW0402274KFK                 |                                     |
|     23 | R6            |     1 | 124kΩ ±1% resistor (0402)                        | VISHAY DALE CRCW0402124KFK                 |                                     |
|     24 | R7            |     1 | 60.4kΩ ±1% resistor (1206)                       | VISHAY CRCW120660K4FK                      |                                     |
|     25 | R8            |     1 | 165kΩ ±1% resistor (0402)                        | VISHAY CRCW0402165KFK                      |                                     |
|     26 | R9            |     1 | 33.2kΩ ±1% resistor (0402)                       | VISHAY DALE CRCW04023322FK                 |                                     |
|     27 | R10           |     1 | 4.3kΩ ±5% resistor (0402)                        | YAGEO RC0402JR-074K3L                      |                                     |
|     28 | R11           |     1 | 47Ω ±5% resistor (1210)                          | VISHAY DRALORIC CRCW121047R0JNEAHP         |                                     |
|     29 | R12           |     1 | 0.062Ω ±1% resistor (0805)                       | PANASONIC ERJ6BWFR062                      |                                     |
|     30 | R13,R19       |     2 | OPEN (0402)                                      |                                            |                                     |
|     31 | R14           |     1 | 0Ω ±0% resistor (0402)                           | PANASONIC ERJ-2GE0R00X                     |                                     |
|     32 | R15           |     1 | 3.74kΩ ±1% resistor (0402)                       | PANASONIC ERJ2RKF3741                      |                                     |
|     33 | R16           |     1 | 2.2Ω ±1% resistor (0402 )                        | VISHAY DALE CRCW04022R20FK                 |                                     |
|     34 | R17           |     1 | 10Ω ±1% resistor (0402 )                         | VISHAY DALE CRCW040210R0FK                 | YAGEO 9C04021A10R0FL                |
|     35 | R18           |     1 | 2.49kΩ ±1% resistor (0402)                       | VISHAY DALE CRCW04022K49FK                 |                                     |
|     36 | R20           |     1 | 147kΩ ±1% resistor (0402)                        | VISHAY DALE CRCW0402147KFK                 |                                     |
|     37 | R21           |     1 | 22Ω ±1% resistor (0402)                          | VISHAY DALE CRCW040222R0FK                 |                                     |
|     38 | T1            |     1 | EP10,8-pin SMT, 46.4μH,1.5A,(1-4):(5-8)=1:0.18   | SUMIDA 12387-T104                          |                                     |
|     39 | U1            |     1 | MAX17690, TQFN16-EP, Flyback converters          | MAX17690ATE+                               |                                     |
|     40 | U2            |     1 | MAX17606, TSOT23-6, Flyback converters           | MAX17606AZT+                               |                                     |

## Component Suppliers

| SUPPLIER         | WEBSITE           |
|------------------|-------------------|
| Wurth Elektronik | www.we-online.com |
| Murata Americas  | www.murata.com    |
| Panasonic Corp.  | www.panasonic.com |

Note: Indicate that you are using the MAX17690A EV when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17690EVKITA# | EV Kit |

#Denotes RoHS compliant.

## Evaluates: MAX17690 No-Opto Flyback with Secondary-Side Synchronous Rectification

## MAX17690 No-Opto Flyback Evaluation Kit

## MAX17690 EV Kit Schematic

<!-- image -->

## Evaluates: MAX17690 No-Opto Flyback with Secondary-Side Synchronous Rectification

## MAX17690 No-Opto Flyback Evaluation Kit

## MAX17690 EV Kit PCB Layout

Silk Topscreen

<!-- image -->

Top Layer

<!-- image -->

## MAX17690 No-Opto Flyback Evaluation Kit

## MAX17690 EV Kit PCB Layout (continued)

Ground Layer

<!-- image -->

Power Layer

<!-- image -->

## MAX17690 No-Opto Flyback Evaluation Kit

## MAX17690 EV Kit PCB Layout (continued)

Bottom Layer

<!-- image -->

## MAX17690 No-Opto Flyback Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                       | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 5/16            | Initial release                                                                                                                                   | -               |
|                 1 | 7/17            | Updated Typical Operating Characteristics, Bill of Materials, Schematic, PCB Layout and efficiency percentage in the General Description section. | 1- 2, 4 -6      |
|                 2 | 11/17           | Updated the Bill of Materials                                                                                                                     | 3               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

## Evaluates: MAX17690 No-Opto Flyback with Secondary-Side Synchronous Rectification