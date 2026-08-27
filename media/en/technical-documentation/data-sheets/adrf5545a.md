<!-- lastmod 2020-04-28 -->
<!-- image -->

Data Sheet

## FEATURES

Integrated dual-channel RF front end 2-stage LNA and high power SPDT switch On-chip bias and matching Single supply operation

## Gain

High gain mode: 32 dB typical at 3.6 GHz

Low gain mode: 16 dB typical at 3.6 GHz

Low noise figure

High gain mode: 1.45 dB typical at 3.6 GHz

Low gain mode: 1.45 dB typical at 3.6 GHz

High isolation

RXOUT-CHA and RXOUT-CHB: 47 dB typical TERM-CHA and TERM-CHB: 52 dB typical Low insertion loss: 0.65 dB typical at 3.6 GHz High power handling at TCASE = 105°C Full lifetime

LTE average power (9 dB PAR): 40 dBm

Single event (&lt;10 sec operation)

LTE average power (9 dB PAR): 43 dBm

High OIP3: 32 dBm typical

Power-down mode and low gain mode for LNA

Low supply current

High gain mode: 86 mA typical at 5 V

Low gain mode: 36 mA typical at 5 V

Power-down mode: 12 mA typical at 5 V

Positive logic control

6 mm × 6 mm, 40-lead LFCSP package

## APPLICATIONS

Wireless infrastructure

TDD massive multiple input and multiple output and active

antenna systems

TDD-based communication systems

## GENERAL DESCRIPTION

The ADRF5545A is a dual-channel, integrated radio frequency (RF), front-end multichip module designed for time division duplexing (TDD) applications that operates from 2.4 GHz to 4.2 GHz. The ADRF5545A is configured in dual channels with a cascading two-stage low noise amplifier (LNA) and a high power silicon single-pole, double-throw (SPDT) switch.

In high gain mode, the cascaded two-stage LNA and switch offer a low noise figure (NF) of 1.45 dB and a high gain of 32 dB at 3.6 GHz with an output third-order intercept point (OIP3) of 32 dBm (typical). In low gain mode, one stage of the two-stage LNA is in bypass, providing 16 dB of gain at a lower

## [Document Feedback](https://form.analog.com/Form_Pages/feedback/documentfeedback.aspx?doc=ADRF5545A.pdf&product=ADRF5545A&rev=b)

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable.  However,  no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is  granted by implication  or  otherwise  under any patent  or  patent  rights  of  Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## Dual-Channel, 2.4 GHz to 4.2 GHz Receiver Front End

[ADRF5545A](https://www.analog.com/ADRF5545A?doc=ADRF5545A.pdf)

## FUNCTIONAL BLOCK DIAGRAM ADRF5545A

<!-- image -->

current of 36 mA. In power-down mode, the LNAs are turned off and the device draws 12 mA.

In transmit operation, when RF inputs are connected to a termination pin (TERM-CHA or TERM-CHB), the switch provides a low insertion loss of 0.65 dB and handles long-term evolution (LTE) average power (9 dB peak to average ratio (PAR)) of 40 dBm for full lifetime operation and 43 dBm for single event (&lt;10 sec) LNA protection operation.

The device comes in an RoHS compliant, compact, 6 mm × 6 mm, 40-lead LFCSP package.

## [ADRF5545A](https://www.analog.com/ADRF5545A?doc=ADRF5545A.pdf)

## TABLE OF CONTENTS

| Features.............................................................................................. 1   |
|------------------------------------------------------------------------------------------------------------|
| Applications ...................................................................................... 1      |
| Functional Block Diagram.............................................................. 1                   |
| General Description......................................................................... 1             |
| Revision History ............................................................................... 2         |
| Specifications .................................................................................... 3      |
| Electrical Specifications............................................................... 3                 |
| 2.6 GHz Tuned Operation .......................................................... 4                       |
| Absolute Maximum Ratings ........................................................... 5                     |
| Thermal Resistance...................................................................... 5                 |
| ESD Caution.................................................................................. 5            |
| Pin Configuration and Function Descriptions ............................ 6                                 |
| Interface Schematics .................................................................... 7                |
| Typical Performance Characteristics............................................. 8                         |

## REVISION HISTORY

4/2020-Rev. A to Rev. B

| Changes to Theory of Operation Section.................................... 18   |
|---------------------------------------------------------------------------------|
| Changes to Applications Information Section and Figure 47...... 19              |

5/2019-Revision A: Initial Version

| Receive Operation, High Gain Mode.........................................8                   |
|-----------------------------------------------------------------------------------------------|
| Receive Operation, Low Gain Mode....................................... 10                    |
| Transmit Operation................................................................... 12      |
| Receive Operation, High Gain Mode with 2.6 GHz Tuning 13                                      |
| Receive Operation, Low Gain Mode with 2.6 GHz Tuning. 15                                      |
| Transmit Operation at with 2.6 GHz Tuning........................ 17                          |
| Theory of Operation...................................................................... 18  |
| Signal Path Select........................................................................ 18 |
| Biasing Sequence........................................................................ 18   |
| Applications Information ............................................................. 19     |
| 2.6 GHz Operation..................................................................... 19     |
| Outline Dimensions....................................................................... 20  |
| Ordering Guide .......................................................................... 20  |

## SPECIFICATIONS ELECTRICAL SPECIFICATIONS

VDD1-CHA, VDD1-CHB, VDD2-CHA, VDD2-CHB, and SWVDD-CHAB = 5 V; SWCTRL-CHAB = 0 V or SWVDD-CHAB; BP-CHA = VDD1-CHA or 0 V; BP-CHB = VDD1-CHB or 0 V; PD-CHAB = 0 V or VDD1-CHA; case temperature (TCASE) = 25°C, 50 Ω system, unless otherwise noted.

## Table 1.

| Parameter                                     | Test Conditions/Comments                                                       | Min Typ   | Max     | Unit   |
|-----------------------------------------------|--------------------------------------------------------------------------------|-----------|---------|--------|
| FREQUENCY RANGE                               |                                                                                | 2.4       | 4.2     | GHz    |
| GAIN 1                                        | Receive operation at 3.6 GHz                                                   |           |         |        |
| High Gain Mode                                |                                                                                | 32        |         | dB     |
| Low Gain Mode                                 |                                                                                | 16        |         | dB     |
| GAIN FLATNESS 1                               | Receive operation in any 100 MHz bandwidth                                     |           |         |        |
| High Gain Mode                                |                                                                                | 0.6       |         | dB     |
| Low Gain Mode                                 |                                                                                | 0.2       |         | dB     |
| NOISE FIGURE (NF) 1                           | Receive operation at 3.6 GHz                                                   |           |         |        |
| High Gain Mode                                |                                                                                | 1.45      |         | dB     |
| Low Gain Mode                                 |                                                                                | 1.45      |         | dB     |
| OUTPUT THIRD-ORDER INTERCEPT POINT (OIP3) 1   | Receive operation, two-tone output power = 8 dBmper tone at 1 MHz tone spacing |           |         |        |
| High Gain Mode                                |                                                                                | 32        |         | dBm    |
| Low Gain Mode                                 |                                                                                | 29        |         | dBm    |
| OUTPUT 1 dB COMPRESSION (OP1dB)               |                                                                                |           |         |        |
| High Gain Mode                                |                                                                                | 19        |         | dBm    |
| Low Gain Mode                                 |                                                                                | 12        |         | dBm    |
| INSERTION LOSS 1                              | Transmit operation at 3.6 GHz                                                  | 0.65      |         | dB     |
| Channel to Channel Isolation 1                | At 3.6 GHz                                                                     |           |         |        |
| BetweenRXOUT-CHAANDRXOUT-CHB                  | Receive operation                                                              | 47        |         | dB     |
| Between TERM-CHA ANDTERM-CHB                  | Transmit operation                                                             | 52        |         | dB     |
| SWITCH ISOLATION                              |                                                                                |           |         |        |
| ANT-CHA TO TERM-CHA AND ANT-CHB TO TERM-CHB 1 | Transmit operation, PD-CHAB = 0 V                                              | 25        |         | dB     |
| SWITCHING CHARACTERISTICS (t ON , t OFF )     |                                                                                |           |         |        |
|                                               | 50% control voltage to 90%, 10% of RXOUT-CHA or RXOUT-CHB in receive operation | 860       |         | ns     |
|                                               | 50% control voltage to 90%, 10% of TERM-CHA or TERM-CHB in transmit operation  | 800       |         | ns     |
| RFINPUTPOWERATANT-CHA,ANT-CHB 1               | Receive operation, LTE average (9 dB PAR)                                      |           | 15      | dBm    |
| INPUT 0.1dB COMPRESSION (P0.1dB)              | 100 µs pulse width, 10% duty cycle, T CASE = 25°C 2                            | 50        |         | dBm    |
| RECOMMENDED OPERATING                         |                                                                                |           |         |        |
| Bias Voltage Range                            | VDD1-CHA, VDD1-CHB, VDD2-CHA, VDD2-CHB, SWVDD-CHAB                             | 4.75 5    | 5.25    | V      |
| Control Voltage Range                         | SWCTRL-CHAB, BP-CHA, BP-CHB, PD-CHAB                                           | 0         | V DD 3  | V      |
|                                               | T CASE = 105°C 2 Continuous wave                                               |           | 40      | dBm    |
|                                               | 9 dB PAR LTE full lifetime average                                             |           | 40      | dBm    |
|                                               | 9 dB PAR LTE single event (<10 sec) average                                    |           | 43      | dBm    |
| Case Temperature Range (T CASE ) 2            |                                                                                | -40       | +105    | °C     |
| Junction Temperature at Maximum T CASE 2      | Receive operation 1                                                            |           |         |        |
|                                               | Transmit operation 1                                                           |           | 132 134 | °C °C  |

<!-- image -->

<!-- image -->

## [ADRF5545A](https://www.analog.com/ADRF5545A?doc=ADRF5545A.pdf)

| Parameter              | Test Conditions/Comments                               |   Min |    Typ | Max    | Unit   |
|------------------------|--------------------------------------------------------|-------|--------|--------|--------|
| DIGITAL INPUT          |                                                        |       |        |        |        |
| SWCTRL-CHAB, PD-CHAB   |                                                        |       |        |        |        |
| Low (V IL )            |                                                        |     0 |        | 0.7    | V      |
| High (V IH )           |                                                        |   1.4 |        | V DD 3 | V      |
| BP-CHA, BP-CHB         |                                                        |       |        |        |        |
| Low (V IL )            |                                                        |     0 |        | 0.3    | V      |
| High (V IH )           |                                                        |   1.0 |        | V DD 3 | V      |
| SUPPLY CURRENT (I DD ) | VDD1-CHx and VDD2-CHx = 5 V per channel                |       |        |        |        |
| High Gain              |                                                        |       |     86 |        | mA     |
| Low Gain               |                                                        |       |     36 |        | mA     |
| Power-Down Mode        |                                                        |       |     12 |        | mA     |
| TX Current (Switch)    | SWVDD-CHAB = 5 V                                       |       |    4.3 |        | mA     |
| DIGITAL INPUT CURRENTS | SWCTRL-CHAB, PD-CHAB, BP-CHA, BP-CHB = 5 V per channel |       |        |        |        |
| SWCTRL-CHAB            |                                                        |       | 0.0004 |        | mA     |
| PD-CHAB                |                                                        |       |   0.19 |        | mA     |
| BP-CHA, BP-CHB         |                                                        |       |   0.19 |        | mA     |

## 2.6 GHZ TUNED OPERATION

The ADRF5545A-EVALZ can be optimized for 2.6 GHz operation, with external matching (see the ADRF5545A-EVALZ user guide for more information). The typical 2.6 GHz specifications with external matching are shown in Table 2.

Table 2. Typical Specifications at 2.6 GHz

| Parameter                                     | Test Conditions/Comments                   | Min   |   Typ | Max   | Unit   |
|-----------------------------------------------|--------------------------------------------|-------|-------|-------|--------|
| GAIN 1                                        | Receive operation at 2.6 GHz               |       |       |       |        |
| High Gain Mode                                |                                            |       |    34 |       | dB     |
| Low Gain Mode                                 |                                            |       |    17 |       | dB     |
| GAIN FLATNESS 1                               | Receive operation in any 100 MHz bandwidth |       |       |       |        |
| High Gain Mode                                |                                            |       |   0.6 |       | dB     |
| Low Gain Mode                                 |                                            |       |   0.2 |       | dB     |
| NOISE FIGURE (NF) 1                           | Receive operation at 2.6 GHz               |       |       |       |        |
| High Gain Mode                                |                                            |       |   1.5 |       | dB     |
| Low Gain Mode                                 |                                            |       |   1.5 |       | dB     |
| OUTPUT THIRD ORDER INTERCEPT POINT (OIP3) 1   | Receive operation at 1 MHz tone spacing    |       |       |       |        |
| High Gain Mode                                |                                            |       |    31 |       | dBm    |
| Low Gain Mode                                 |                                            |       |    31 |       | dBm    |
| OUTPUT 1 dB COMPRESSION (OP1dB)               |                                            |       |       |       |        |
| High Gain Mode                                |                                            |       |    18 |       | dBm    |
| Low Gain Mode                                 |                                            |       |    13 |       | dBm    |
| INSERTION LOSS 1                              | Transmit operation at 2.6 GHz              |       |  0.60 |       | dB     |
| CHANNEL TO CHANNEL ISOLATION                  | At 2.6 GHz                                 |       |       |       |        |
| Between RXOUT-CHA and RXOUT-CHB 1             | Receive operation                          |       |    40 |       | dB     |
| Between TERM-CHA and TERM-CHB 1               | Transmit operation                         |       |    57 |       | dB     |
| SWITCH ISOLATION                              |                                            |       |       |       |        |
| ANT-CHA to TERM-CHA and ANT-CHB to TERM-CHB 1 | Transmit operation                         |       |    25 |       | dB     |

## ABSOLUTE MAXIMUM RATINGS

## Table 3.

| Parameter                                                                 | Rating                   |
|---------------------------------------------------------------------------|--------------------------|
| Positive Supply Voltage VDD1-CHA, VDD1-CHB, VDD2-CHA, VDD2-CHB SWVDD-CHAB | 7 V 5.4 V                |
| Control Input                                                             |                          |
| Digital Voltage SWCTRL-CHAB BP-CHA, BP-CHB, PD-CHAB                       | -0.3 V to V DD 1 + 0.3 V |
|                                                                           | -0.3 V to V DD 1 + 0.3 V |
| RF Input Power Transmit Input Power (LTE Peak)                            | 53dBm                    |
| Receive Input Power (LTE Peak) Temperature                                | 25 dBm                   |
| Storage Reflow                                                            | -65°C to +150°C          |
| Electrostatic Discharge (ESD) Sensitivity                                 | 260°C                    |
|                                                                           | 500 V, Class 1B          |
| Human Body Model (HBM)                                                    |                          |
| ChargeDeviceModel(CDM)                                                    | 1.25 kV                  |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operation environment. Careful attention to PCB thermal design is required.

θJC is the junction to case bottom (channel to package bottom) thermal resistance.

## Table 4. Thermal Resistance

| Package Type                |   θ JC | Unit   |
|-----------------------------|--------|--------|
| CP-40-15                    |        |        |
| High Gain and Low Gain Mode |     30 | °C/W   |
| Power-Down Mode             |    8.7 | °C/W   |

## ESD CAUTION

<!-- image -->

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

2. EXPOSED PAD. THE EXPOSED PAD MUST BE CONNECTED

TO RF OR DC GROUND.

Figure 2. Pin Configuration

Table 5. Pin Function Descriptions

| Pin No.                                                     | Mnemonic      | Description                                                                                                                                          |
|-------------------------------------------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 2, 4, 7, 9 to 11, 14 to 16, 21, 23, 28, 30, 35 to 37, 40 | GND           | Ground.                                                                                                                                              |
| 3                                                           | ANT-CHA       | RF Input to Channel A.                                                                                                                               |
| 5                                                           | SWCTRL-CHAB   | Control Voltage for Switches on Channel A and Channel B.                                                                                             |
| 6                                                           | SWVDD-CHAB    | Supply Voltage for Switches on Channel A and Channel B.                                                                                              |
| 8                                                           | ANT-CHB       | RF Input to Channel B.                                                                                                                               |
| 12                                                          | TERM-CHB      | Termination Output for Channel B. This pin is the transmitter path for Channel B.                                                                    |
| 13, 18, 19, 25, 32, 33, 38                                  | NIC           | Not Internally Connected. It is recommended to connect NIC to the RF ground of the PCB.                                                              |
| 17                                                          | VDD1-CHB      | Supply Voltage for Stage 1 LNA on Channel B.                                                                                                         |
| 20                                                          | VDD2-CHB      | Supply Voltage for Stage 2 LNA on Channel B.                                                                                                         |
| 22                                                          | RXOUT-CHB     | RF Output. This pin is the receiver path for Channel B.                                                                                              |
| 24                                                          | BP-CHB        | Bypass Second Stage LNA of Channel B.                                                                                                                |
| 26                                                          | PD-CHAB       | Power-Down All Stages of LNA for Channel A and Channel B.                                                                                            |
| 27                                                          | BP-CHA        | Bypass Second Stage LNA of Channel A.                                                                                                                |
| 29                                                          | RXOUT-CHA     | RF Output. This pin is the receiver path for Channel A.                                                                                              |
| 31                                                          | VDD2-CHA      | Supply Voltage for Stage 2 LNA on Channel A.                                                                                                         |
| 34                                                          | VDD1-CHA      | Supply Voltage for Stage 1 LNA on Channel A.                                                                                                         |
| 39                                                          | TERM-CHA EPAD | Termination Output for Channel A. This pin is the transmitter path for Channel A. Exposed Pad. The exposed pad must be connected to RF or dc ground. |

20051-002

## INTERFACE SCHEMATICS

<!-- image -->

<!-- image -->

Figure 4. RXOUT-CHx Interface

<!-- image -->

Figure 5. VDD1-CHx, VDD2-CHx Interface

Figure 6. PD-CHAB, BP-CHx Interface

<!-- image -->

Figure 7. SWCTRL-CHAB, SWVDD-CHAB Interface

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## RECEIVE OPERATION, HIGH GAIN MODE

<!-- image -->

Figure 8. Gain vs. Frequency at Various Temperatures

<!-- image -->

Figure 9. Return Loss vs. Frequency

<!-- image -->

Figure 10. Noise Figure vs. Frequency

<!-- image -->

Figure 11. Gain vs. Frequency at Various Temperatures, 2.4 GHz to 4.2 GHz

Figure 12. Channel to Channel Isolation vs. Frequency

<!-- image -->

Figure 13. OIP3 vs. Frequency, 8 dBm Output Tone Power

<!-- image -->

Figure 14. OIP3 vs. Output Power, 3.6 GHz

<!-- image -->

<!-- image -->

Figure 15. OP1dB vs. Frequency at Various Temperatures

<!-- image -->

<!-- image -->

## RECEIVE OPERATION, LOW GAIN MODE

<!-- image -->

Figure 16. Gain vs. Frequency at Various Temperatures

<!-- image -->

Figure 17. Return Loss vs. Frequency

Figure 18. Gain vs. Frequency at Various Temperatures, 2.2 GHz to 4.2 GHz

<!-- image -->

Figure 19. Channel to Channel Isolation vs. Frequency

<!-- image -->

<!-- image -->

Figure 20. Noise Figure vs. Frequency at Various Temperatures

Figure 21. OIP3 vs. Frequency, -10 dBm Output Tone Power

<!-- image -->

<!-- image -->

Figure 22. OP1dB vs. Frequency at Various Temperatures

<!-- image -->

<!-- image -->

## TRANSMIT OPERATION

<!-- image -->

Figure 23. Insertion Loss vs. Frequency at Various Temperatures

<!-- image -->

Figure 24. Return Loss vs. Frequency

Figure 25. Channel to Channel Isolation vs. Frequency

<!-- image -->

Figure 26. Antenna to Termination Isolation vs. Frequency, LNA On

<!-- image -->

## RECEIVE OPERATION, HIGH GAIN MODE WITH 2.6 GHZ TUNING

<!-- image -->

Figure 27. Gain vs. Frequency at Various Temperatures

<!-- image -->

Figure 28. Return Loss vs. Frequency

<!-- image -->

Figure 29. Noise Figure vs. Frequency at Various Temperatures

<!-- image -->

Figure 30. Gain vs. Frequency at Various Temperatures, 2.0 GHz to 4.0 GHz

Figure 31. Channel to Channel Isolation vs. Frequency

<!-- image -->

Figure 32. OIP3 vs. Frequency, 8 dBm Output Tone Power

<!-- image -->

## [ADRF5545A](https://www.analog.com/ADRF5545A?doc=ADRF5545A.pdf)

Figure 33. OIP3 vs. Output Power, 2.6 GHz

<!-- image -->

Figure 34. OP1dB vs. Frequency at Various Temperatures

<!-- image -->

## RECEIVE OPERATION, LOW GAIN MODE WITH 2.6 GHz TUNING

<!-- image -->

Figure 35. Gain vs. Frequency at Various Temperatures

<!-- image -->

Figure 36. Return Loss vs. Frequency

<!-- image -->

Figure 37. Noise Figure vs. Frequency at Various Temperatures

<!-- image -->

Figure 38. Gain vs. Frequency at Various Temperatures, 2.0 GHz to 4.0 GHz

<!-- image -->

Figure 39. Channel to Channel Isolation vs. Frequency

<!-- image -->

Figure 40. OIP3 vs. Frequency at Various Temperatures, -8 dBm Output Tone Power

<!-- image -->

## [ADRF5545A](https://www.analog.com/ADRF5545A?doc=ADRF5545A.pdf)

Figure 41. OIP3 vs. Output Power at Various Temperatures, 2.6 GHz

<!-- image -->

Figure 42. OP1dB vs. Frequency at Various Temperatures

<!-- image -->

## TRANSMIT OPERATION AT WITH 2.6 GHz TUNING

20051-140

<!-- image -->

Figure 43. Insertion Loss vs. Frequency at Various Temperatures

Figure 44. Return Loss vs. Frequency

<!-- image -->

Figure 45. Channel to Channel Isolation vs. Frequency

<!-- image -->

20051-143

Figure 46. Antenna to Termination Isolation vs. Frequency, LNA On

<!-- image -->

## THEORY OF OPERATION

The ADRF5545A requires a positive supply voltage applied to VDD1-CHA, VDD2-CHA, VDD1-CHB, VDD2-CHB, and SWVDD-CHAB. Use bypassing capacitors on the supply lines to filter noise. Use 300 Ω series resistors on the BP\_CHx and PDCHAB digital control pins for glitch and overcurrent protection.

## SIGNAL PATH SELECT

The ADRF5545A supports transmit operations when 5 V is applied to SWCTRL-CHAB. In transmit operation, when an RF input is applied to ANT-CHA and ANT-CHB, the signal paths are connected from ANT-CHA to TERM-CHA and from ANT-CHB to TERM-CHB.

The ADRF5545A supports receive operations when 0 V is applied to SWCTRL-CHAB. In receive operation, an RF input applied at ANT-CHA and ANT-CHB connects ANT-CHA to RXOUT-CHA and ANT-CHB to RXOUT-CHB.

## Transmit Operation

The ADRF5545 supports insertion loss mode and isolation mode when in transmit operation, that is, when SWCTRLCHAB = 5 V. As detailed in Table 7, with PD-CHAB set to 5 V and BP-CHA or BP-CHB set to 0 V, insertion loss mode is selected. Under the same circumstances, isolation mode is selected by applying 0 V to PD-CHAB.

## Table 6. Truth Table: Signal Path

|             | Signal Path Select   | Signal Path Select   |
|-------------|----------------------|----------------------|
| SWCTRL-CHAB | Transmit Operation 1 | Receive Operation    |
| Low         | Off                  | On                   |
| High        | On                   | Off                  |

## Table 7. Truth Table: Operation

| Operation                                                                                                                      | PD-CHAB           | BP-CHA, BP-CHB    | Signal Path                                                                         |
|--------------------------------------------------------------------------------------------------------------------------------|-------------------|-------------------|-------------------------------------------------------------------------------------|
| Receive Operation High Gain Mode Low Gain Mode Power-Down High Isolation Mode Power-Down Low Isolation Mode Transmit Operation | Low Low High High | Low High Low High | ANT-CHA to RXOUT-CHA, ANT-CHB to RXOUT-CHB ANT-CHA to TERM-CHA, ANT-CHB to TERM-CHB |

## Receive Operation

The ADRF5545A supports high gain mode, low gain mode, power-down high isolation mode, and power-down low isolation mode in receive operation, as detailed in Table 7.

When 0 V is applied to PD-CHAB, the LNA is powered up and the user can select high gain mode or low gain mode. To select high gain mode, apply 0 V to BP-CHA or BP-CHB. To select low gain mode, apply 5 V to BP-CHA or BP-CHB.

When 5 V is applied to PD-CHAB, the ADRF5545A enters power-down mode. To select power-down high isolation mode, apply 0 V to BP-CHA or BP-CHB. To select power-down low isolation mode, apply 5 V to BP-CHA or BP-CHB.

## BIASING SEQUENCE

To bias up the ADRF5545A, perform the following steps:

1. Connect GND to ground.
2. Bias up VDD1-CHA, VDD2-CHA, VDD1-CHB, VDD2 CHB, and SWVDD-CHAB.
3. Bias up SWCTRL-CHAB.
4. Bias up PD-CHAB.
5. Bias up BP-CHA and BP-CHB.
6. Apply an RF input signal.

To bias down, perform these steps in the reverse order.

## APPLICATIONS INFORMATION

To generate the evaluation PCB used in a typical application circuit (see the ADRF5545A-EVALZ user guide for more information), use proper RF circuit design techniques. Signal lines at the RF port must have a 50 Ω impedance, and the package ground leads and the backside ground slug must connect directly to the ground plane. Use 300 Ω series resistors on the BP-CHx and PD-CHAB digital control pins for glitch and overcurrent protection. The evaluation board shown in Figure 47 is available from Analog Devices, Inc., upon request.

20051-047

Figure 47. ADRF5545A-EVALZ Evaluation Board

<!-- image -->

## 2.6 GHZ OPERATION

The ADRF5545A can be used for applications at 2.6 GHz (see the ADRF5545A-EVALZ user guide for more information). Table 2 shows the specifications of this evaluation board tuned at 2.6 GHz. See Figure 27 to Figure 46 for the typical performance plots reflecting these specifications at 2.6 GHz.

## OUTLINE DIMENSIONS

<!-- image -->

02-05-2019-C

Figure 48. 40-Lead Lead Frame Chip Scale Package [LFCSP] 6 mm × 6 mm Body and 0.95 mm Package Height (CP-40-15) Dimensions shown in millimeters

## ORDERING GUIDE

| Model 1                                                            | Temperature Range                               | Package Description                                                                                                                                        | Package Option             |
|--------------------------------------------------------------------|-------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|
| ADRF5545ABCPZN ADRF5545ABCPZN-R7 ADRF5545ABCPZN-RL ADRF5545A-EVALZ | -40°C to +105°C -40°C to +105°C -40°C to +105°C | 40-Lead Lead Frame Chip Scale Package [LFCSP] 40-Lead Lead Frame Chip Scale Package [LFCSP] 40-Lead Lead Frame Chip Scale Package [LFCSP] Evaluation Board | CP-40-15 CP-40-15 CP-40-15 |

<!-- image -->