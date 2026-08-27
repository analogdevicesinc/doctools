<!-- lastmod 2022-08-02 -->
## MAX17596 Evaluation Kit

## General Description

The MAX17596 evaluation kit (EV kit) is a fully assembled and  tested  circuit  board  that  demonstrates  an  isolated 20W  fly-back  DC-DC  converter.  The  circuit  uses  the device's peak current-mode controller in a 16-pin TQFN package with an exposed pad. The EV kit demonstrates the  IC's  cycle-by-cycle  current  limit,  soft-start,  and  EN/ UVLO features.

The EV kit circuit output is configured for an isolated +24V and provides up to 833mA of output current. The EV kit is configured to operate at a 200kHz switching frequency. An  optocoupler,  along  with  the  transformer,  provides galvanic  isolation  between  the  input  and  output,  up  to 1500VRMS.

## Features

- 18V to 36V Input Range
- Isolated Output: 24V DC at 20W
- Cycle-by-Cycle Current Limit
- Resistor Programmable UVLO/OVI Threshold
- Low-Cost Flyback Design
- Galvanic Isolation Up to 1500V RMS
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX17596

## Quick Start

## Recommended Equipment

- One 18V-36V DC, 2A power supply
- Electronic load
- Four digital multimeters (DMM)
- MAX17596 24V EVKITB#

## Warning:

- Do not turn on the power supply until all connections are completed.
- Wear protective eye gear at all times.
- Do not touch any part of the circuit with bare hands or conductive materials when powered up.
- Make sure all high-voltage capacitors are fully discharged before handling. Allow 5 minutes after disconnecting input power source before touching circuit parts.

## Equipment Setup and Test Procedure

- 1) Set the power supply to +24VDC. Disable the power supply output.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the electronic load to the VOUT PCB pad and the negative terminal to the nearest GND0 PCB pad.
- 3) Set the electronic load to constant-current mode and disable the electronic load.
- 4) Connect a DMM configured in voltmeter mode across the VOUT PCB pad and the nearest GND0 PCB pad.
- 5) Connect another DMM configured in voltmeter mode across the VOUT PCB pad and the GND0 PCB pad.
- 6) Enable the power supply.
- 7) Enable the load and adjust the current to 833mA.
- 8) Verify that the output voltmeter displays 24V
- 9) If required, vary the input voltage from 18V to 36V, the load current from 0mA to 833mA, and verify that the output voltage is 24V.

<!-- image -->

## MAX17596 Evaluation Kit

## Detailed Description

The MAX17596 EV kit provides a proven design to evaluate the high-efficiency, DC-DC, flyback converter in a spacesaving, 16-pin TQFN package. The EV kit is configured for  a  24V  output  voltage  that  can  supply  up  to  840mA of current. The EV kit features a 200kHz fixed switching frequency for optimum efficiency and component size.

This  EV  kit  uses  the  peak-current-mode,  pulse-widthmodulating  (PWM)  controller  IC  in  a  16-pin  TQFN package  with  an  exposed  pad.  This  PWM  controller varies  the  duty  cycle  to  compensate  for  the  variation in  input  voltage  (V IN )  and  the  output  load  to  maintain  a constant  output  voltage.  The  duty  cycle  determines  the on/off duration of the MOSFET (Q1).

## EV Kit Performance Report

<!-- image -->

<!-- image -->

## Evaluates: MAX17596

The  detailed  description  of  flyback  design  methodology and  the  calculations  for  component  value  selection  are described  in  Application  Note  5504: Designing  Flyback Converters  Using  Peak-Current-Mode  Controllers .  The details of soft-start time programming, programming output voltage,  peak-current-limit  setting,  switching  frequency setting, and the EN/UVLO,OVI settings are described in the MAX17595/MAX17596/MAX17597 IC data sheet.

Note: The EV kit is shipped with the frequency dithering disabled and the DITHER/SYNC pin shorted to SGND by a 0Ω resistor. To set the desired frequency dither, replace resistor  R23  with  a  capacitor  of  appropriate  value,  as detailed  in  the  MAX17595/MAX17596/MAX17597  IC data sheet. The DITHER/SYNC PCB pad is available for monitoring the signal at the DITHER/SYNC pin.

<!-- image -->

<!-- image -->

## MAX17596 Evaluation Kit

## Component List and Schematic

See the following links for the component information and schematic:

- MAX17596 EV BOM
- MAX17596 EV Schematic

## Evaluates: MAX17596

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Coilcraft, Inc. | www.coilcraft.com |
| Murata Americas | www.murata.com    |
| Panasonic Corp. | www.panasonic.com |

Note: Indicate that you are using the MAX17596 when contacting these component suppliers.

## MAX17596 Evaluation Kit

Figure 1. MAX17596 EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evaluates: MAX17596

Figure 2. MAX17596 EV Kit PCB LayoutComponent Side

<!-- image -->

Figure 3. MAX17596 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17596EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX17596

## MAX17596 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17596

<!-- image -->

BILL OF MATERIALS (BOM) Revision

<!-- image -->

|   S NO | Designation   |   Qty | Description                                          | Manufacturer Partnumber-1              | Manufacturer Partnumber-2   |
|--------|---------------|-------|------------------------------------------------------|----------------------------------------|-----------------------------|
|      1 | C1            |     1 | 100µF ±20%, 63V,ALUMINUM-ELECTROLYTIC (SMT (CASE_G)) | PANASONIC EEE-FK1J101P                 |                             |
|      2 | C2            |     1 | 4.7µF±10% 50V X7R Ceramic capacitor (1210)           | MURATA GRM32ER71H475KA88K              | KEMET C1210C475K5RAC        |
|      3 | C3            |     1 | 0.22µF±10% 50V X7R Ceramic capacitor (0805)          | MURATA GRM21BR71H224KA                 | KEMET C0805C224K5RAC        |
|      4 | C4            |     1 | 0.22µF±10% 100V X7R Ceramic capacitor (0805)         | MURATA GRM21AR72A224KAC5               | KEMET C0805C224K1RAC        |
|      5 | C5,C14        |     2 | 0.1µF±10% 16V X7R Ceramic capacitor (0603)           | MURATA GRM188R71C104K                  | KEMET C0603C104K4RA         |
|      6 | C6            |     1 | 1000pF±5%,50V,X7R ceramic capacitor (0402)           | MURATA GRM155R71H102JA01D              |                             |
|      7 | C7            |     1 | 1µF±10% 25V X7R Ceramic capacitor (0603)             | MURATA GRM188R71E105KA12D              | MURATA CGA3E1X7R1E105K      |
|      8 | C8            |     1 | 0.01µF±10% 50V X7R Ceramic capacitor (0603)          | MURATA GRM188R71H103K                  | KEMET C0603C103K5RAC        |
|      9 | C9-C11,C17    |     4 | 10µF±10% 50V X7R Ceramic capacitor (1210)            | MURATA GRM32ER71H106KA12L              | MURATA CL32B106KBJNNN       |
|     10 | C15           |     1 | 0.1µF±10% 50V X7R Ceramic capacitor (0603)           | PANASONIC ECJ-1VB1H104K                |                             |
|     11 | C16           |     1 | 680pF±10%,50V,X7R ceramic capacitor (0603)           | MURATA GRM188R71H681KA01               |                             |
|     12 | C19           |     1 | 390pF±5% 100V X7R Ceramic capacitor (0805)           | MURATA GRM2165C2A391JA01               |                             |
|     13 | C20           |     1 | 220pF±10%,250V,X7R ceramic capacitor (0603)          | MURATA GRM188R72E221K                  |                             |
|     14 | D1            |     1 | 100V/1A,SMT (SOD-123FL)                              | MICRO COMMERCIAL SMD110PL              |                             |
|     15 | D2            |     1 | 200V /4A, DPAK                                       | ST MICROELECTRONICS STTH4R02B          |                             |
|     16 | D3            |     1 | 100V/0.3A,SMT (SOD-123)                              | DIODES INCORPORATED 1N4148W-7-F        |                             |
|     17 | Q1            |     1 | 100V/63A/140W, POWER MOSFET(DPAK)                    | INTERNATIONAL RECTIFIER IRLR3110ZTRPBF |                             |
|     18 | R1            |     1 | 3kΩ ± 5 %,1.0W resistor (2512)                       | VISHAY DALE CRCW25123K00JN             |                             |
|     19 | R3            |     1 | 22kΩ ±1 %0 .1W resistor (0603)                       | VISHAY DALE CRCW060322K0FK             |                             |
|     20 | R4,R10        |     2 | 49.9kΩ ± 1% 0.1W resistor (0603)                     | VISHAY DALE CRCW060349K9FK             | PANASONIC ERJ-3EKF4992V     |
|     21 | R5            |     1 | 280kΩ ± 1% 0.1W resistor (0603)                      | VISHAY DALE CRCW0603280KFK             |                             |
|     22 | R6            |     1 | 10.7kΩ ± 1% 0.1W resistor (0603)                     | VISHAY DALE CRCW060310K7FK             | PANASONIC ERJ-3EKF1072V     |
|     23 | R7,R12        |     2 | 10kΩ ± 0.5% 0.063W resistor (0603)                   | PANASONIC ERJ-3RBD1002V                |                             |
|     24 | R8            |     1 | 100Ω ± 1% 0.1W resistor (0603)                       | VISHAY DALE CRCW0603100RFK             | PANASONIC ERJ-3EKF1000V     |
|     25 | R9            |     1 | 0Ω ± 0% 0.1W resistor (0603)                         | VISHAY DALE CRCW06030000ZS             | VISHAY DALE MCR03EZPJ000    |
|     26 | R11           |     1 | 0.082Ω ± 1% 0.5W resistor (1210)                     |                                        |                             |
|     27 | R13           |     1 | 470Ω ± 1% 0.1W resistor (0603)                       | VISHAY DALE CRCW0603470RFK             |                             |
|     28 | R14           |     1 | 7.68kΩ ± 1% 0.1W resistor (0603)                     | VISHAY DALE CRCW06037K68FK             |                             |
|     29 | R15           |     1 | 3.9kΩ ± 1% 0.1W resistor (0603)                      | VISHAY DALE CRCW06033K90FK             |                             |
|     30 | R16           |     1 | 2.55kΩ ± 1% 0.1W resistor (0603)                     | VISHAY DALE CRCW06032K55FK             |                             |
|     31 | R17           |     1 | 453Ω ± 1% 0.1W resistor (0603)                       | PANASONIC ERJ-3EKF4530V                |                             |
|     32 | R21           |     1 | 470Ω ± 5% 0.5W resistor (1210)                       | PANASONIC ERJ-14YJ470U                 |                             |

|   DO NOT PURCHASE(DNP) | DO NOT PURCHASE(DNP)   |   DO NOT PURCHASE(DNP) | DO NOT PURCHASE(DNP)   |
|------------------------|------------------------|------------------------|------------------------|
|                      1 | C12,C13                |                      2 | N/A                    |
|                      2 | C21                    |                      1 | N/A                    |
|                      3 | R2,R18-R20             |                      4 | N/A                    |

<!-- image -->

<!-- image -->

| YAGEO PH RC0603JR-070RL   |
|---------------------------|