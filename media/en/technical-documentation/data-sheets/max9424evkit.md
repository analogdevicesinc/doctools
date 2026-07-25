<!-- lastmod 2022-08-02 -->
## General Description

The MAX9424 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed circuit (PC) board. The EV kit includes the MAX9424, a four-channel lowskew PECL/LVPECL-to-ECL/LVECL translator. The EV kit accepts differential PECL/LVPECL input signals and converts these differential ECL/LVECL signals at an operating frequency up to 3GHz.

The MAX9424 EV kit is a four-layer PC board with 50 Ω controlled-impedance traces. It can also be used to evaluate the MAX9425/MAX9426/MAX9427 PECL/ LVPECL-to-ECL/LVECL translators with different internal input and output terminations (Table 3).

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                            |
|---------------|-------|------------------------------------------------------------------------------------------------------------------------|
| C1, C2, C3    |     3 | 10µF ± 10%, 10V tantalum capacitors (case B) AVX TAJB106K010R or Kemet T494B106010AS                                   |
| C4-C12        |     9 | 0.1µF ± 10%, 16V X7R ceramic chip capacitors (0603) Taiyo Yuden EMK107BJ104KA or Murata GRM39X7R104K016A or equivalent |
| C13-C21       |     9 | 0.01µF ± 10%, 16V X7R ceramic capacitors (0402) Taiyo Yuden EMK105BJ103KW or Murata GRM36X7R103K016AD or equivalent    |
| JU1-JU4       |     4 | 3-pin headers                                                                                                          |

<!-- image -->

Features

- ♦ Controlled 50 Ω Coplanar Impedance Traces
- ♦ Output Trace Lengths Matched to &lt; 1mil (25.4 x 10 -3 mm)
- ♦ Frequency Range 2GHz (min) at Asynchronous Mode 3GHz (min) at Synchronous Mode
- ♦ 32-Pin TQFP 5mm x 5mm Package
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE        |
|--------------|--------------|-------------------|
| MAX9424EVKIT | 0°C to +70°C | 32 TQFP 5mm ✕ 5mm |

Note: To evaluate the MAX9425EHJ/MAX9426EHJ/MAX9427EHJ, request a MAX9425EHJ/MAX9426EHJ/MAX9427EHJ free sample with the MAX9424EVKIT.

## Component List

| DESIGNATION                                        |   QTY | DESCRIPTION                        |
|----------------------------------------------------|-------|------------------------------------|
| R1, R2, R5-R8                                      |     6 | 49.9 Ω ± 1% resistors (0402)       |
| R3, R4                                             |     0 | Not installed, resistor (0402)     |
| R9-R36                                             |    28 | 100 Ω ± 1% resistors (1210), 1/4W  |
| IN0-IN3, IN0-IN3 , OUT0-OUT3, OUT0-OUT3 , CLK, CLK |    18 | SMA edge-mount connectors          |
| U1                                                 |     1 | MAX9424EHJ (32-pin TQFP 5mm x 5mm) |
| None                                               |     4 | Shunts                             |
| None                                               |     1 | MAX9424 PC board                   |
| None                                               |     1 | MAX9424 EV kit data sheet          |
| None                                               |     1 | MAX9424 data sheet                 |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE         |
|-------------|--------------|--------------|-----------------|
| AVX         | 843-946-0238 | 843-626-3123 | www.avxcorp.com |
| Kemet       | 864-963-6300 | 864-963-6322 | www.kemet.com   |
| Murata      | 770-436-1300 | 770-436-3030 | www.murata.com  |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com |

Note: Please indicate that you are using the MAX9424/MAX9425/MAX9426/MAX9427 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX9424 Evaluation Kit

## Quick Start

The MAX9424 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not turn on the power supplies until all connections are completed.

## Recommended Equipment

- Signal generator (e.g., Agilent 8133A 3GHz pulse generator)
- 12GHz (min) bandwidth oscilloscope with internal 50 Ω termination (e.g., Tektronix11801C digital sampling oscilloscope with the SD-24 sampling head)
- Three power supplies:
- a) One 2.0V ±0.001V with 1A current capability
- b) One adjustable -3.50V to -0.375V with 200mA current capability
- c) One adjustable 4.375V to 7.50V with 300mA current capability
- Additional power supply (for VBAIS): one adjustable 2.50V to 5.00V with 1A current capability

## Asynchronous Operation

- 1) Verify  that  shunts  are  across  jumpers JU1 (SEL) and JU3 (EN) pins 1 and 2, and jumpers JU2 ( SEL ) and JU4 ( EN ), pins 2 and 3.
- 2) Connect two matched coax cables to OUT1 and OUT1 .  Connect the other end of the cables to an oscilloscope.
- 3) Connect two matched coax cables to IN1 and IN1 . Connect the other end of the cables to a signal generator that provides differential square waves with the following settings:
- a) Frequency = 2GHz
- b) VIH = 3.4V, VIL = 3.2V
- c) Duty cycle = 50%
- 4) Connect one coax cable to the trigger output of the signal generator. Connect the other end to the trigger input of the oscilloscope.
- 5) Connect a 2.000V power supply to the VGG pad. Connect the supply ground to the GND pad closest to VGG.
- 6) Connect a 5.30V power supply to the VCC pad. Connect the supply ground to the GND pad closest to VCC.
- 7) Connect a -1.30V power supply to the VEE pad. Connect the supply ground to the GND pad closest to VEE.
- 8) Connect a 3.40V power supply to the VBIAS pad. Connect the supply ground to the GND pad closest to VBAIS.
- 9) Connect CLK and all unused positive inputs (IN0, IN2, IN3) to the VBIAS pad.
- 10) Connect CLK and all unused negative inputs ( IN0 , IN2 , IN3 ) to VGG.
- 11) Turn on the power supplies in the following order: VCC, VGG, VEE, then VBIAS.
- 12) Enable the pulse generator and verify the differential output signal:
- a) Frequency = 2GHz
- b) VOD ≥ 400mV
- c) Duty cycle = 50%

Note: To evaluate other channels, make sure corresponding output termination resistors on the EV kit board are removed, and the unused outputs are terminated with a 50 Ω termination resistor. To eliminate signal  distortion,  use  matched cables of the same type and length for both the inputs and outputs. All unused inputs should be biased.

## Detailed Description

The MAX9424 EV kit contains an extremely fast, lowskew quad PECL/LVPECL-to-ECL/LVECL translator. The EV kit demonstrates ultra-low propagation delay and channel-to-channel skew, and can be operated synchronously with an external clock, or in asynchronous mode, depending on the state of the SEL input.

## Power Supply

MAX9424-MAX9427 are specified with outputs terminated with 50 Ω to  VCC -  2V.  In  order  to  terminate  the outputs with 50 Ω to  VCC -  2V  using  the  50 Ω oscilloscope input termination, VGG is set to 2.000V. An additional 2.50V to 5.00V power supply is required to bias all unused positive inputs to a known state. All unused negative inputs should be connected to VGG. To avoid damaging the IC, turn on the power supply in the following sequence: VCC, VGG, VEE, then VBIAS. In an actual application, VCC, VGG, and VEE can have different supplies (refer to the MAX9424-MAX9427 data sheet), and VBIAS can be eliminated.

## Enable and Select

The MAX9424 provides pins EN and EN to enable the outputs, and pins SEL and SEL to select asynchronous or  synchronous operation. The MAX9424 EV kit incorporates jumpers JU1-JU4 to drive these pins to either VBIAS or VGG (see Tables 1 and 2).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Table 1. Jumpers JU1 and JU2 Functions

| JU1 SHUNT LOCATION                             | MAX9424 SEL PIN                                | JU2 SHUNT LOCATION                             | MAX9424 SEL PIN                                | MAX9424 OPERATING MODE   |
|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|--------------------------|
| 1 and 2                                        | Connected to VBIAS                             | 2 and 3                                        | Connected to VGG                               | Asynchronous mode        |
| 2 and 3                                        | Connected to VGG                               | 1 and 2                                        | Connected to VBIAS                             | Synchronous mode         |
| All other combinations (not driven externally) | All other combinations (not driven externally) | All other combinations (not driven externally) | All other combinations (not driven externally) | Undefined                |

## Table 2. Jumpers JU3 and JU4 Functions

| JU3 SHUNT LOCATION                             | MAX9424 EN PIN                                 | JU4 SHUNT LOCATION                             | MAX9424 EN PIN                                 | MAX9424 OUTPUTS   |
|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|-------------------|
| 1 and 2                                        | Connected to VBIAS                             | 2 and 3                                        | Connected to VGG                               | Enabled           |
| 2 and 3                                        | Connected to VGG                               | 1 and 2                                        | Connected to VBIAS                             | Disabled          |
| All other combinations (not driven externally) | All other combinations (not driven externally) | All other combinations (not driven externally) | All other combinations (not driven externally) | Undefined         |

An external signal can be used to drive any of the EN, EN ,  SEL,  and SEL control pins by removing the shunt completely from the appropriate jumpers and connecting the external signal to the appropriate SMA connector.  The MAX9424 EV kit does not provide SMA connectors for EN, EN , SEL, and SEL . Before connecting external signals to the EN, EN , SEL, and SEL pins, verify there are no shunts across jumpers JU1-JU4, and add SMA connectors to the appropriate pads.

## Evaluating the MAX9425/MAX9426/MAX9427

The MAX9424 EV kit is a four-layer PC board with 50 Ω controlled-impedance input traces with 50 Ω termination (two parallel 100 Ω resistors).  All  output  signal  traces are also 50 Ω controlled-impedance traces with 49.9 Ω termination resistors.

The MAX9424 EV kit can be used to evaluate the MAX9425/MAX9426/MAX9427 after some modifications. Table 3 shows the on-chip input and output termination resistor arrangement for each part.

## Table 3. On-Chip Input and Output Termination

| PART    | INPUT TERMINATION RESISTOR   | OUTPUT TERMINATION RESISTOR   |
|---------|------------------------------|-------------------------------|
| MAX9424 | Open                         | Open                          |
| MAX9425 | Open                         | 50 Ω                          |
| MAX9426 | 100 Ω                        | Open                          |
| MAX9427 | 100 Ω                        | 50 Ω                          |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- To evaluate the MAX9425, replace the MAX9424EHJ with a MAX9425EHJ and remove all output termination resistors R1 to R8. The output is half-amplitude compared to an open output because of the voltagedivider formed by the on-chip series 50 Ω and the 50 Ω oscilloscope input.
- To evaluate the MAX9426, replace the MAX9424EHJ with a MAX9426EHJ and remove all input termination resistors R9 to R24.
- To evaluate the MAX9427, replace the MAX9424EHJ with a MAX9427EHJ and remove all input and output termination resistors R1 to R24. The output is halfamplitude compared to an open output because of the voltage-divider formed by the on-chip series 50 Ω and the 50 Ω oscilloscope input.

## MAX9424 Evaluation Kit

## MAX9424 Evaluation Kit

Figure 1. MAX9424 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX9424 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX9424 Evaluation Kit

Figure 3. MAX9424 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX9424 EV Kit PC Board Layout-Inner Layer 2 (GND Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9424 Evaluation Kit

<!-- image -->

Figure 5. MAX9424 EV Kit PC Board Layout-Inner Layer 3 (VCC Layer)

Figure 6. MAX9424 EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 7. MAX9424 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

<!-- image -->