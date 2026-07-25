<!-- lastmod 2022-08-02 -->
## MAX17606 Synchronous Flyback Evaluation Kit

## General Description

The MAX17606 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates an isolated 15W synchronous  flyback  DC-DC  converter.  The  circuit  uses the  MAX17606  secondary  synchronous  rectifier  driver  in a 6-pin SOT23 package, as well as the MAX17597 peak current mode flyback controller in a 16-pin TQFN package.

The EV kit circuit is configured to deliver an isolated +5V output voltage and provides up to 3A of output current. The EV kit is programmed to operate at a 200kHz switching frequency. An optocoupler, along with the transformer, provides the galvanic isolation between input and output, up to 1875V RMS.

## Features

- 18V to 36V DC Input Range
- Isolated Output: +5V DC, 3A
- Compact Design with High (200kHz) Switching Frequency
- 90% Peak Efficiency
- Low-Cost Flyback Design
- Galvanic Isolation up to 1875V RMS
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX17606

## Quick Start

## Recommended Equipment

- One 18V-36V DC, 2A power supply
- Load capable of sinking 3A
- Four digital multimeters (DMM)
- MAX17606\_SYNC\_FB EVKITA#

## Warning:

- 1) Do not turn on the power supply until all connections are completed.
- 2) Wear protective eye gear at all times.
- 3) Do not touch any part of the circuit with bare hands or conductive materials when powered up.
- 4) Make sure all high-voltage capacitors are fully discharged before handling. Allow 5 minutes after disconnecting input power source before touching circuit parts.

## Equipment Setup and Test Procedure

- 1) Set the power supply to +24VDC. Disable the power supply output.
- 2) Connect the positive terminal of the power supply to the V IN  PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the 3A load to the V OUT PCB pad and the negative terminal to the nearest GND0 PCB pad.
- 3) Connect  two  DMMs,  configured  in  voltmeter  mode, across the input and output terminals to measure the input and output voltage, respectively.
- 4) Connect two DMMs configured in ammeter mode at the input and output to measure the input current and output current.
- 5) Enable the power supply.
- 6) Verify that the output voltmeter displays 5V and the output load current is 3A.
- 7) If required, vary the input voltage from 18V to 36V, the load current from 0mA to 3A, and verify that the output voltage is 5V.

<!-- image -->

## MAX17606 Synchronous Flyback Evaluation Kit

## Detailed Description

The  MAX17606  EV  kit  provides  a  proven  design  to evaluate the MAX17606. The device is a secondary-side synchronous  driver  and  controller  specifically  designed for the isolated flyback topology.  By  replacing  the secondary diode with a MOSFET, the MAX17606 improves efficiency  and  makes  thermal  management  easier.  The device  EV  kit  is  configured  for  a  5V  output  voltage, supplying up to 3A of current.

This  EV  kit  uses  the  peak  current  mode,  pulse-width modulating  (PWM)  controller  IC  MAX17597  in  a  16-pin TQFN package with an exposed pad as the primary-side flyback  controller.  This  PWM  controller  varies  the  duty cycle to compensate for the variation in input voltage (V IN ) and the output load to maintain a constant output voltage.

The detailed description of flyback design calculations are described  in Application  Note  5504,  'Designing  Flyback Converters  Using  Peak  Current-Mode  Controllers.'  The details  of  soft-start  time  programming,  programming output voltage, peak-current limit setting, switching frequency  setting  and  the  EN/UVLO,  OVI  settings  are described in the MAX17595/6/7 data sheet.

The MAX17606 has a wide range of input voltage from 4.5V  to  36V.  The  input  range  makes  it  simple  to  drive using one of the following two methods. When the output voltage is 5V and greater, V OUT can be used to directly drive V IN .  When the output voltage is less than 5V, use the rectified drain voltage of the secondary synchronous MOSFET to drive V IN . The EV kit circuit  has  an  option for both of these configurations. By default, the EV kit is programmed to run from the rectified drain voltage of the synchronous  MOSFET.  When  running  the  MAX17606 from the output voltage is required, remove R1 and set R31 to 10Ω.

## Evaluates: MAX17606

The  device  has  a  provision  to  program  the  turn-off  trip point of the secondary synchronous rectifier. An external resistor (R25) connects the drain of the external MOSFET to  the  IC's  DRN  pin.  This  resistor  sets  the  turn-off  trip point  with  a  precise  internal  current  source.  Once  the synchronous rectifier  is  turned  off,  the  MAX17606  uses resistor  R26  (connected  between  the  T OFF   pin  and GND0) to  program  the  turn-off  time  in  order  to  provide immunity from DCM ringing. For the selection of R25 and R26 resistors, refer to the MAX17606 data sheet.

Note: The  EV  kit  is  shipped  with  frequency  dithering disabled and the DITHER/SYNC pin shorted to SGND by a 0Ω resistor. To set the desired frequency dither, replace R23 with a capacitor of appropriate value, as detailed in the MAX17595/6/7 data sheet. The DITHER /SYNC PCB pad is available for monitoring the signal at the DITHER/ SYNC pin.

## MAX17606 Synchronous Flyback Evaluation Kit

## EV Kit Performance Report

100

EFFICIENCY vs. LOAD CURRENT

90

80

70

60

50

40

30

20

10

0

V IN

= 18V

V IN

= 24V

1000

2000

toc1

3000

LOAD CURRENT (mA)

<!-- image -->

<!-- image -->

4ms/div

<!-- image -->

V IN

= 36V

EFFICIENCY (%)

0

EN/UVLO

GATE

V OUT

I OUT

Evaluates: MAX17606

SOFT START

5V/div

5V/div

5V/div

2.5A/div

toc3

5V output

## MAX17606 Synchronous Flyback Evaluation Kit

## Component Suppliers

| SUPPLIER         | WEBSITE           |
|------------------|-------------------|
| Wurth Electronik | www.we-online.com |
| Murata Americas  | www.murata.com    |
| Panasonic Corp.  | www.panasonic.com |

Note: Indicate that you are using the MAX17606SFBEVKIT when contacting these component suppliers.

## Component List, PCB Layout, and Schematics

See the following links for component information, PCB layout, and schematic.

- MAX17606 EV BOM
- MAX17606 EV PCB Layout
- MAX17606 EV Schematic

Evaluates: MAX17606

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX17606SFBEVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX17606 Synchronous Flyback Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/15           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17606

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

|   S NO | Designation                 |   Qty | Description                                           | Manufacturer Partnumber - 1         | Manufacturer Partnumber - 2   | Manufacturer Partnumber - 3     |
|--------|-----------------------------|-------|-------------------------------------------------------|-------------------------------------|-------------------------------|---------------------------------|
|      1 | C1                          |     1 | 47µF±20%, 50V,ALUMINUM - ELECTROLYTIC SMT(CASE_D8)    | PANASONIC EEEFK1H470XP              |                               |                                 |
|      2 | C2, C22 - C24               |     4 | 4.7µF±10% 50V X7R Ceramic capacitor (1210)            | Murata GRM32ER71H475KA88K           | KEMET C1210C475K5RAC          |                                 |
|      3 | C3, C27                     |     2 | 0.22µF±10%,50V, X7R ceramic capacitor (0805)          | Murata GRM21BR71H224KA              | KEMET C0805C224K5RAC          | TDK CGJ4J2X7R1H224K125AA        |
|      4 | C4                          |     1 | 1000pF±10%,100V,X7R ceramic capacitor (0402)          | Murata GRM155R72A102KA01            |                               |                                 |
|      5 | C5,C14                      |     2 | 0.1µF±10%, 25V, X7R ceramic capacitor(0603)           | TDK C1608X7R1E104K080AA             |                               |                                 |
|      6 | C6                          |     1 | 1000pF±5%,50V, X7R ceramic capacitor (0402)           | Murata GRM155R71H102JA01D           |                               |                                 |
|      7 | C7, C25, C26                |     3 | 2.2µF ±10%,50V, X7R ceramic capacitor (0805)          | TDK C2012X7R1H225K                  |                               |                                 |
|      8 | C8                          |     1 | 0.01µF±5%, 50V, X7R ceramic capacitor(0603)           | KEMET C0603X7R500103JNP             | KEMET C0603C103J5             |                                 |
|      9 | C9 - C11, C18, C30, C31     |     6 | 100µF±20%, 6.3V, X5R ceramic capacitor (1210)         | Murata GRM32ER60J107ME20            | KEMET C1210C107M9PAC          | VENKEL LTD C1210X5R6R3 - 107MNE |
|     10 | C12                         |     1 | 120pF, 1%, 50V, COG ceramic capacitor (0603)          | KEMET C0603C121K5GAC                |                               |                                 |
|     11 | C13                         |     1 | 22000pF, 10%, 25V, X7R ceramic capacitor (0603)       | KEMET C0603C223K3RAC                |                               |                                 |
|     12 | C15,C29,C32                 |     3 | OPEN (0603)                                           |                                     |                               |                                 |
|     13 | C16                         |     1 | 0.22uF±10%, 25V, X7R ceramic capacitor(0603)          | KEMET C0603C224K3RAC                | Murata GRM188R71E224KA8       | KEMET C1608X7R1E224K08          |
|     14 | C17                         |     1 | 4.7µF ±10%,16V, X7R ceramic capacitor (0805)          | Murata GRM21BR71C475KA73            |                               |                                 |
|     15 | C21                         |     1 | OPEN (1812)                                           |                                     |                               |                                 |
|     16 | D1                          |     1 | OPEN (SOD - 123FL)                                    |                                     |                               |                                 |
|     17 | D2 - D5,D8                  |     5 | 100V/0.3A, (SOD123), DIODE                            | DIODES INCORPORATED 1N4148W - 7 - F |                               |                                 |
|     18 | D6                          |     1 | 6.8V/3UA, (SOD123), DIODE, ZENER                      | ON SEMICONDUCTOR MMSZ5235BT1G       |                               |                                 |
|     19 | Q1                          |     1 | 100V/22A/69W, POWER - 56(8 - PQFN),POWER - TRANSISTOR | FAIRCHILD SEMICONDUCTOR FDMS86102LZ |                               |                                 |
|     20 | Q2                          |     1 | 40V/73A/5W, TSDSON - 8 PACKAGE ,POWER - TRANSISTOR    | INFINEON BSZ040N04LSG               |                               |                                 |
|     21 | Q3                          |     1 | 60V/0.5A/0.35W, SOT - 23 ,HIGH VOLTAGE AMPLIFIER      | FAIRCHILD SEMICONDUCTOR MMBTA05     |                               |                                 |
|     22 | R1                          |     1 | 4.7 Ω ±5% resistor (0603)                             | VISHAY DALE CRCW06034R70JN          |                               |                                 |
|     23 | R2,R12,R16,R18, R20,R29,R31 |     7 | OPEN (0603)                                           |                                     |                               |                                 |
|     24 | R3                          |     1 | 22k Ω ±1% resistor (0603)                             | VISHAY DALE CRCW060322K0FK          |                               |                                 |
|     25 | R4, R10                     |     2 | 49.9k Ω ±1% resistor (0603)                           | VISHAY DALE CRCW060349K9FK          | PANASONIC ERJ - 3EKF4992V     |                                 |

<!-- image -->

|   26 | R5           |   1 | 280k Ω ±1% resistor (0603)                                        | VISHAY CRCW0603280KFK                       |                                 |                          |
|------|--------------|-----|-------------------------------------------------------------------|---------------------------------------------|---------------------------------|--------------------------|
|   27 | R6           |   1 | 10.7k Ω ±5% resistor (0603)                                       | VISHAY CRCW060310K7FK                       | PANASONIC ERJ - 3EKF1072V       |                          |
|   28 | R7           |   1 | 10k Ω ±1% resistor (0603)                                         | VISHAY DALE CHPHT0603K1002FGT               |                                 |                          |
|   29 | R8           |   1 | 220 Ω ±1% resistor (0603)                                         | VISHAY DALE CRCW0603220RFK                  |                                 |                          |
|   30 | R9, R23, R28 |   3 | 0 Ω ±0% resistor (0603)                                           | VISHAY DALE CRCW06030000ZS                  | ROHM MCR03EZPJ000               | PANASONIC ERJ - 3GEY0R00 |
|   31 | R11          |   1 | 0.02 Ω ±1% resistor (2010)                                        | TT ELECTRONICS LRC - LRF2010LF - 01 - R020F |                                 |                          |
|   32 | R13, R14     |   2 | 470 Ω ±1% resistor (0603)                                         | VISHAY DALE CRCW0603470RFK                  | PANASONIC ERJ - 3EKF4700        |                          |
|   33 | R15          |   1 | 1.5k Ω ±1% resistor (0603)                                        | VISHAY DALE CRCW06031K50FK                  |                                 |                          |
|   34 | R17          |   1 | 487 Ω ±1% resistor (0603)                                         | PANASONIC ERA - 3AEB4870                    |                                 |                          |
|   35 | R19          |   1 | 10.5k Ω ±1% resistor (0603)                                       | VENKEL LTD CR0603 - 16W - 1052FT            |                                 |                          |
|   36 | R21          |   1 | 22.1k Ω ±1% resistor (0805)                                       | VISHAY DALE CRCW080522K1FK                  |                                 |                          |
|   37 | R22          |   1 | 4.99k Ω ±1% resistor (0603)                                       | VISHAY DALE CRCW06034K99FK                  | PANASONIC ERJ - ERJ - 3EKF4991V |                          |
|   38 | R24          |   1 | 47 Ω ±1% resistor (1210)                                          | VISHAY DRALORIC CRCW121047R0JNEAHP          |                                 |                          |
|   39 | R25          |   1 | 2.74k Ω ±1% resistor (0603)                                       | VISHAY DALE CRCW06032K74FK                  |                                 |                          |
|   40 | R26          |   1 | 100k Ω ±1% resistor (0603)                                        | VISHAY DALE CRCW06031003FK                  | PANASONIC ERJ - 3EKF1003        |                          |
|   41 | R27          |   1 | 1k Ω ±1% resistor (0603)                                          | VISHAY DALE CRCW06031001FK                  | PANASONIC ERJ - 3EKF1001V       |                          |
|   42 | R32          |   1 | OPEN (1210)                                                       |                                             |                                 |                          |
|   43 | T1           |   1 | EP13,10 - pin SMT, 9µH,5A, (3 - 5):(10 - 6):(2 - 1) = 1:0.33:0.55 | WURTH ELECTRONICS INC. 750342955            |                                 |                          |
|   44 | U1           |   1 | MAX17606, 6L THIN SOT23, Flyback converters                       | MAX17606AZT+                                |                                 |                          |
|   45 | U2           |   1 | Shunt regulator ,SOT23                                            | DIODES INCORPORATED TLV431BFTA              |                                 |                          |
|   46 | U3           |   1 | PHOTOTRANSISTOR OPTOCOUPLER                                       | AVAGO TECHNOLOGIES ACPL - 217 - 56AE        |                                 |                          |
|   47 | U4           |   1 | MAX17597 TQFN16 - EP,PEAK - CURRENT - MODE CONTROLLERFOR FLYBACK  | MAX17597ATE+                                |                                 |                          |

<!-- image -->