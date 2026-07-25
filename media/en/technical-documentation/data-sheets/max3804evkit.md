<!-- lastmod 2022-08-02 -->
## General Description

The MAX3804 DC-coupled evaluation kit (EV kit) simplifies  evaluation of the MAX3804 12.5Gbps settable equalizer. The EV kit enables full testing of the device functions including all equalization settings. SMA connectors with 50 Ω controlled-impedance transmission lines  to  the  MAX3804 are provided for all CML input and output ports.

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX3804EVKIT# | EV Kit |

#Denotes RoHS compliant.

## Component List

| DESIGNATION                                 |   QTY | DESCRIPTION                                                        |
|---------------------------------------------|-------|--------------------------------------------------------------------|
| C1-C5                                       |     5 | 0.1µF ±10% ceramic capacitors (0402)                               |
| C6                                          |     1 | 0.1µF ±10% ceramic capacitor (0603)                                |
| C7-C10                                      |     4 | 33µF ±10% tantalum capacitors (case-B)                             |
| J1-J4                                       |     4 | SMA connectors, tab contact                                        |
| JP1, JP2, JP3                               |     3 | 2-pin headers, 0.1in centers                                       |
| JPEQ1, JPEQ2, JPEQ3                         |     3 | 3-pin headers, 0.1in centers                                       |
| R3                                          |     1 | 10k resistor (0402)                                                |
| R4                                          |     1 | 12k resistor (0402)                                                |
| R5                                          |     1 | 8k resistor (0402)                                                 |
| GND, V CC , V CC1 , V CC2 , V EE , TP4, TP5 |     7 | Test points                                                        |
| U1                                          |     1 | 12.5Gbps settable receive equalizer (16 TQFN) Maxim MAX3804ETE#G16 |
| None                                        |     5 | Shunts                                                             |
| None                                        |     1 | PCB: MAX3804 EV kit board#                                         |
| None                                        |     1 | MAX3804 data sheet                                                 |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                      |
|----------------------------------------|--------------|------------------------------|
| AVX                                    | 803-946-0238 | www.avxcorp.com              |
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com            |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata- northamerica.com |
| Zetex Semiconductors                   | 631-543-7100 | www.zetex.com                |

<!-- image -->

## MAX3804 Evaluation Kit

Features

- ♦ DC-Coupled EV Kit
- ♦ SMA Connectors for All High-Speed Inputs and Outputs
- ♦ Fully Assembled and Tested

## Quick Start

Note: The MAX3804 EV kit is a DC-coupled evaluation board. Care must be taken to ensure that no direct short between the supply voltage and supply ground exists. Use external coupling capacitors on the input and output when AC-coupling is desired. DC-coupled operation with positive VCC supplies normally causes permanent damage to laboratory test equipment (typical oscilloscope, BERT). The MAX3804 EV kit must be operated from a negative VEE supply when DC-coupled to normal laboratory equipment.

- 1) Connect a -3.3V power supply to TP3 (VEE). Connect the power-supply ground to TP2 (GND) and J6 (VCC). Install shunts in JP2 and JP3, and remove shunt from JP1.
- 2) Install shunts across pins 2 and 3 of JPEQ1, JPEQ2, and JPEQ3 for minimal equalization (0, 0, 0). See Table 1 for the relationship between nominal path loss and FR-4 microstrip path length.
- 3) Apply a differential input signal (400mVP-P to 1200mVP-P) between SMA connectors J1 and J2 (SDI+ and SDI-).
- 4) Attach a differential high-speed oscilloscope with a 50 Ω input to SMA connectors J3 and J4 (SDO+ and SDO-) to observe the output of the equalizer.

## Table 1. Relationship Between Nominal Path Loss and FR-4 Microstrip Path Length

|   JPEQ3 |   JPEQ2 |   JPEQ1 |   NOMINAL 6-mil FR-4 MICROSTRIP LENGTH (in) |
|---------|---------|---------|---------------------------------------------|
|       0 |       0 |       0 |                                           2 |
|       0 |       0 |       1 |                                           6 |
|       0 |       1 |       0 |                                          10 |
|       0 |       1 |       1 |                                          14 |
|       1 |       0 |       0 |                                          18 |
|       1 |       0 |       1 |                                          22 |
|       1 |       1 |       0 |                                          26 |
|       1 |       1 |       1 |                                          30 |

Note: 0 refers to pins 2 and 3 shunted. 1 refers to pins 1 and 2 shunted.

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX3804 Evaluation Kit

## Adjustment and Control Descriptions (see Quick Start)

| COMPONENT   | NAME   | FUNCTION                                |
|-------------|--------|-----------------------------------------|
| JPEQ1       | EQ1    | Equalizer boost control logic input LSB |
| JPEQ2       | EQ2    | Equalizer boost control logic input     |
| JPEQ3       | EQ3    | Equalizer boost control logic input MSB |

## Alternative Supply Configurations

## AC-Coupled Operation with VCC1 = VCC2 = +1.65V

Connect a +3.3V power supply to J6 (VCC). Connect a +1.65V power supply to TP1 (VCC1) and J5 (VCC2). Connect the power-supply ground to TP2 (GND). Remove shunts JP2 and JP3. Install shunt JP1. Use external AC-coupling for connecting to external laboratory equipment (typical oscilloscope, BERT).

## DC-Coupled Operation with Laboratory Equipment

Connect a +1.85V power supply to J6 (VCC). Connect a -1.65V power supply to TP3 (VEE). Connect the power-supply ground to TP2 (GND). Install shunts JP2 and JP3. Remove shunt JP1. With this setup the part can be DC-coupled to external laboratory equipment (typical oscilloscope, BERT).

## DC-Coupled Operation with Oscilloscopes and BERTs

The MAX3804 is designed with DC-coupled inputs and outputs, implemented with internal 50 Ω terminations to VCC1 (SDI±) and VCC2 (SDO±). Laboratory oscilloscopes and BERTs normally terminate their inputs and outputs with 50 Ω to ground. When the MAX3804 VCCs are connected to a positive supply, a DC path exists from the power supply to the ports of the oscilloscope or BERT. This configuration can cause permanent damage to the oscilloscope or BERT.

When the MAX3804 EV kit is being used with normal oscilloscopes or BERTs, either external AC-coupling must be provided or VCC1 and VCC2 must be connected to ground (i.e., using a negative VEE supply). Failure to do so may permanently damage laboratory equipment.

Figure 1. MAX3804 Schematic Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 2. MAX3804 Component Placement Guide

<!-- image -->

## MAX3804 Evaluation Kit

Figure 3. MAX3804 PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3804 Evaluation Kit

Figure 4. MAX3804 PCB Layout-Ground Plane

<!-- image -->

Figure 5. MAX3804 PCB Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

## MAX3804 Evaluation Kit

Figure 6. MAX3804 PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3804 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                    | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------|-----------------|
|                 0 | 4/03            | Initial release.                                               | -               |
|                 1 | 2/09            | Changed the Ordering Information to include RoHS compliance.   | 1               |
|                 1 | 2/09            | Updated the MAX3804 part number for U1 in the Component List . | 1               |
|                 1 | 2/09            | Replaced figures 2 to 6.                                       | 3, 4, 5         |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->