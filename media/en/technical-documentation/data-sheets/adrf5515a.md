<!-- lastmod 2021-08-05 -->
<!-- image -->

## Dual-Channel, 3.3 GHz to 4.0 GHz, 20 W Receiver Front End

## FEATURES

- Integrated dual-channel RF front end
- 2-stage LNA and high power silicon SPDT switch
- On-chip bias and matching
- Single-supply operation
- High power handling at T CASE = 105°C
- LTE average power (9 dB PAR) full lifetime: 43 dBm
- Gain
- High gain mode: 36 dB typical at 3.6 GHz
- Low gain mode: 17 dB typical at 3.6 GHz
- Low noise figure
- High gain mode: 1.05 dB typical at 3.6 GHz
- Low gain mode: 1.05 dB typical at 3.6 GHz
- High isolation
- RXOUT-CHA and RXOUT-CHB: 47 dB typical
- TERM-CHA and TERM-CHB: 75 dB typical
- Low insertion loss: 0.5 dB typical at 3.6 GHz
- High OIP3: 35 dBm typical
- Power-down mode and low gain mode
- Low supply current
- High gain mode: 95 mA typical at 5 V
- Low gain mode: 48 mA typical at 5 V
- Power-down mode: 13 mA typical at 5 V
- Positive logic control
- 6 mm × 6 mm, 40-lead LFCSP package
- Pin compatible with the ADRF5515 and the ADRF5519, and the 10 W versions, ADRF5545A and ADRF5549

## APPLICATIONS

- Wireless infrastructure
- TDD massive multiple input and multiple output and active antenna systems
- TDD-based communication systems

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

## GENERAL DESCRIPTION

The ADRF5515A is a dual-channel, integrated RF, front-end, multichip module designed for time division duplexing (TDD) applications. The device operates from 3.3 GHz to 4.0 GHz. The ADRF5515A is configured in dual channels with a cascading, two-stage low noise amplifier (LNA) and a high-power silicon singlepole, double-throw (SPDT) switch.

In high gain mode, the cascaded two-stage LNA and switch offer a low noise figure of 1.05 dB and a high gain of 36 dB at 3.6 GHz, with an output third-order intercept (OIP3) point of 35 dBm (typical). In low gain mode, one stage of the two-stage LNA is in bypass, providing 17 dB of gain at a lower current of 48 mA. In power-down mode, the LNAs are turned off and the device draws 13 mA.

In transmit operation, when RF inputs are connected to a termination pin (TERM-CHA or TERM-CHB), the switch provides low insertion loss of 0.5 dB and handles long-term evolution (LTE) average power (9 dB peak to average ratio (PAR)) of 43 dBm for full lifetime operation.

The device comes in an RoHS-compliant, compact, 6 mm × 6 mm, 40-lead lead frame chip scale package (LFCSP).

## TABLE OF CONTENTS

| Features................................................................   |   1 |
|----------------------------------------------------------------------------|-----|
| Applications...........................................................    |   1 |
| Functional Block Diagram......................................1            |     |
| General Description...............................................1        |     |
| Specifications........................................................     |   3 |
| Electrical Specifications......................................3           |     |
| Absolute Maximum Ratings...................................5               |     |
| Thermal Resistance...........................................              |   5 |
| Electrostatic Discharge (ESD) Ratings...............5                      |     |
| ESD Caution.......................................................5        |     |
| Pin Configuration and Function Descriptions........                        |   6 |
| Interface Schematics..........................................7            |     |

## REVISION HISTORY

6/2021-Revision 0: Initial Version

| Typical Performance Characteristics.....................8          |    |
|--------------------------------------------------------------------|----|
| Receive Operation, High Gain Mode..................8               |    |
| Receive Operation, Low Gain Mode................                   | 10 |
| Transmit Operation...........................................12    |    |
| Theory of Operation.............................................13 |    |
| Signal Path Select............................................13   |    |
| Biasing Sequence............................................       | 13 |
| Applications Information......................................     | 14 |
| Outline Dimensions.............................................    | 15 |
| Ordering Guide.................................................15  |    |
| Evaluation Boards............................................15    |    |

## SPECIFICATIONS

## ELECTRICAL SPECIFICATIONS

VDD1-CHA, VDD1-CHB, VDD2-CHA, VDD2-CHB, and SWVDD-CHAB = 5 V, SWCTRL-CHAB = 0 V or SWVDD-CHAB, BP-CHA = VDD1-CHA or 0 V, BP-CHB = VDD1-CHB or 0 V, PD-CHAB = 0 V or VDD1-CHA, case temperature (T CASE ) = 25°C, and a 50 Ω system, unless otherwise noted.

Table 1.

| Parameter                                     | Test Conditions/Comments                                                          |   Min |   Typ | Max   | Unit   |
|-----------------------------------------------|-----------------------------------------------------------------------------------|-------|-------|-------|--------|
| FREQUENCY RANGE                               |                                                                                   |   3.3 |       | 4.0   | GHz    |
| GAIN 1                                        | Receive operation at 3.6 GHz                                                      |       |       |       |        |
| High Gain Mode                                |                                                                                   |       |    36 |       | dB     |
| Low Gain Mode                                 |                                                                                   |       |    17 |       | dB     |
| GAIN FLATNESS 1                               | Receive operation in any 100 MHz bandwidth                                        |       |       |       |        |
| High Gain Mode                                |                                                                                   |       |   0.6 |       | dB     |
| Low Gain Mode                                 |                                                                                   |       |   0.2 |       | dB     |
| NOISE FIGURE (NF) 1                           | Receive operation at 3.6 GHz                                                      |       |       |       |        |
| High Gain Mode                                |                                                                                   |       |  1.05 |       | dB     |
| Low Gain Mode                                 |                                                                                   |       |  1.05 |       | dB     |
| OUTPUT THIRD-ORDER INTERCEPT POINT (OIP3) 1   |                                                                                   |       |       |       |        |
| High Gain Mode                                | Receive operation, two-tone output power = 11 dBm per tone at 1 MHz tone spacing  |       |    35 |       | dBm    |
| Low Gain Mode                                 | Receive operation, two-tone output power = -10 dBm per tone at 1 MHz tone spacing |       |  23.5 |       | dBm    |
| OUTPUT 1 dB COMPRESSION (OP1dB)               |                                                                                   |       |       |       |        |
| High Gain Mode                                |                                                                                   |       |    19 |       | dBm    |
| Low Gain Mode                                 |                                                                                   |       |  12.5 |       | dBm    |
| INSERTION LOSS 1                              | Transmit operation at 3.6 GHz                                                     |       |   0.5 |       | dB     |
| CHANNEL TO CHANNEL ISOLATION 1                | At 3.6 GHz                                                                        |       |       |       |        |
| Between RXOUT-CHA and RXOUT-CHB               | Receive operation                                                                 |       |    47 |       | dB     |
| Between TERM-CHA and TERM-CHB                 | Transmit operation                                                                |       |    75 |       | dB     |
| SWITCH ISOLATION                              |                                                                                   |       |       |       |        |
| ANT-CHA to TERM-CHA and ANT-CHB to TERM-CHB 1 | Receive operation                                                                 |       |    15 |       | dB     |
| SWITCHING CHARACTERISTICS (t ON , t OFF )     |                                                                                   |       |       |       |        |
|                                               | 50% control voltage to 90%, 10% of RXOUT-CHA or RXOUT- CHB in receive operation   |       |   600 |       | ns     |
|                                               | 50% control voltage to 90%, 10% of TERM-CHA or TERM - CHB in transmit operation   |       |   600 |       | ns     |
| DIGITAL INPUT                                 |                                                                                   |       |       |       |        |
| Low (V IL )                                   |                                                                                   |     0 |       | 0.63  | V      |
| High (V IH )                                  |                                                                                   |  1.17 |       | V DD  | V      |
| SUPPLY CURRENT (I DD )                        | VDD1-CHx and VDD2-CHx = 5 V per channel                                           |       |       |       |        |
| High Gain                                     |                                                                                   |       |    95 |       | mA     |
| Low Gain                                      |                                                                                   |       |    48 |       | mA     |
| Power-Down Mode                               |                                                                                   |       |    13 |       | mA     |
| Transmit Current (Switch)                     | SWVDD-CHAB = 5 V                                                                  |       |   1.4 |       | mA     |
| DIGITAL INPUT CURRENTS                        | SWCTRL-CHAB, PD-CHAB, BP-CHA, BP-CHB = 5 V per channel                            |       |       |       |        |
| SWCTRL-CHAB                                   |                                                                                   |       | 0.075 |       | mA     |
| PD-CHAB                                       |                                                                                   |       |   0.3 |       | mA     |
| BP-CHA, BP-CHB                                |                                                                                   |       |  0.15 |       | mA     |

## SPECIFICATIONS

| Table 1. Parameter                     | Test Conditions/Comments                             |   Min |   Typ | Max   | Unit   |
|----------------------------------------|------------------------------------------------------|-------|-------|-------|--------|
| RECOMMENDED OPERATING CONDITIONS       |                                                      |       |       |       |        |
| Supply Voltage (V DD ) Range           | VDD1-CHA, VDD1-CHB, VDD2-CHA, VDD2-CHB, SWVDD - CHAB |  4.75 |     5 | 5.25  | V      |
| Control Voltage Range                  | SWCTRL-CHAB, BP-CHA, BP-CHB, PD-CHAB                 |     0 |       | V DD  | V      |
|                                        | Continuous wave                                      |       |       | 43    | dBm    |
|                                        | 9 dB PAR LTE full lifetime average                   |       |       | 43    | dBm    |
|                                        | 7 dB PAR LTE single event (<10 sec) average 3        |       |       | 46    | dBm    |
| Case Temperature Range (T CASE ) 2     |                                                      |   -40 |       | +105  | °C     |
| Junction Temperature at Maximum T CASE | Receive operation 1                                  |       |       | 132   | °C     |
|                                        | Transmit operation 1                                 |       |       | 134   | °C     |

## ABSOLUTE MAXIMUM RATINGS

| Table 2.                                                                           | Rating                                            |
|------------------------------------------------------------------------------------|---------------------------------------------------|
| Positive Supply Voltage VDD1-CHA, VDD1-CHB, VDD2-CHA, VDD2-CHB                     | 7 V 5.4 V                                         |
| SWVDD-CHAB                                                                         |                                                   |
| Digital Control Input Voltage SWCTRL-CHAB BP-CHA, BP-CHB, PD-CHAB                  | -0.3 V to V DD 1 + 0.3 V -0.3 V to V DD 2 + 0.3 V |
| Digital Control Input Current SWCTRL-CHAB, BP-CHA, BP-CHB, PD- CHAB                | 20 mA                                             |
| RF Input Power                                                                     | 53 dBm                                            |
| Transmit Input Power (LTE Peak, 9 dB PAR) Receive Input Power (LTE Peak, 9 dB PAR) | 25 dBm                                            |
| Temperature                                                                        | -65°C to +150°C                                   |
| Storage                                                                            |                                                   |
| Reflow (Moisture Sensitivity Level 3 (MSL3) Rating)                                | 260°C                                             |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operation environment. Careful attention to PCB thermal design is required.

θ JC is the junction to case bottom (channel to package bottom) thermal resistance.

## Table 3. Thermal Resistance

| Package Type                        |   θ JC | Unit   |
|-------------------------------------|--------|--------|
| CP-40-15                            |        |        |
| High Gain Mode, Receive Operation   |     25 | °C/W   |
| Low Gain Mode, Receive Operation    |     36 | °C/W   |
| Power-Down Mode, Transmit Operation |      6 | °C/W   |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Charged device model (CDM) per ANSI/ESDA/JEDEC JS-002.

## Table 4. ADRF5515A, 40-Lead LFCSP

| ESD Model   |   Withstand Threshold (V) | Class   |
|-------------|---------------------------|---------|
| HBM         |                      1000 | 1C      |
| CDM         |                       750 | C2      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 5. Pin Function Descriptions

| Pin No.                                                 | Mnemonic         | Description                                                                                                                                                              |
|---------------------------------------------------------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 2, 4, 7, 9 to 11, 15, 16, 21, 23, 28, 30, 35, 36, 40 | GND              | Ground.                                                                                                                                                                  |
| 3                                                       | ANT-CHA SWCTRL - | RF Input to Channel A. Control Voltage for Switches on Channel A and Channel                                                                                             |
| 5                                                       | CHAB             | B.                                                                                                                                                                       |
| 6                                                       | SWVDD - CHAB     | Supply Voltage for Switches on Channel A and Channel B.                                                                                                                  |
| 8                                                       | ANT-CHB          | RF Input to Channel B.                                                                                                                                                   |
| 12                                                      | TERM-CHB         | Termination Output. This pin is the transmitter path for Channel B.                                                                                                      |
| 13, 14, 18, 19, 25, 32, 33, 37, 38                      | NIC              | Not Internally Connected. It is recommended to connect NIC to the RF ground of the PCB.                                                                                  |
| 17                                                      | VDD1-CHB         | Supply Voltage for Stage 1 LNA on Channel B.                                                                                                                             |
| 20                                                      | VDD2-CHB         | Supply Voltage for Stage 2 LNA on Channel B.                                                                                                                             |
| 22                                                      | RXOUT-CHB        | RF Output. This pin is the receiver path for Channel B. The RXOUT-CHB pin is ac-matched to 50 Ω. No matching component is required. A dc blocking capacitor is required. |
| 24                                                      | BP-CHB           | Bypass Second Stage LNA of Channel B.                                                                                                                                    |
| 26                                                      | PD-CHAB          | Power Down All Stages of LNA for Channel A and Channel B.                                                                                                                |
| 27                                                      | BP-CHA           | Bypass Second Stage LNA of Channel A.                                                                                                                                    |
| 29                                                      | RXOUT-CHA        | RF Output. This pin is the receiver path for Channel A. The RXOUT-CHA pin is ac matched to 50 Ω. No matching component is required. A dc blocking capacitor is required. |
| 31                                                      | VDD2-CHA         | Supply Voltage for Stage 2 LNA on Channel A.                                                                                                                             |
| 34                                                      | VDD1-CHA         | Supply Voltage for Stage 1 LNA on Channel A.                                                                                                                             |
| 39                                                      | TERM-CHA         | Termination Output. This pin is the transmitter path for Channel A.                                                                                                      |
|                                                         | EPAD             | Exposed Pad. The exposed pad must be connected to RF or dc ground.                                                                                                       |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

## INTERFACE SCHEMATICS

<!-- image -->

<!-- image -->

Figure 4. RXOUT-CHx Interface

<!-- image -->

000

Figure 5. VDD1-CHx, VDD2-CHx Interface

<!-- image -->

900

Figure 6. PD-CHAB, BP-CHx Interface

Figure 7. SWCTRL -CHAB, SWVDD-CHAB Interface

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

## RECEIVE OPERATION, HIGH GAIN MODE

Figure 8. Gain vs. Frequency at Various Temperatures

<!-- image -->

60

<!-- image -->

Figure 9. Return Loss vs. Frequency

<!-- image -->

010

Figure 10. Noise Figure vs. Frequency

<!-- image -->

Figure 11. Gain vs. Frequency at Various Temperatures, 3.3 GHz to 4.0 GHz

<!-- image -->

012

Figure 12. Channel to Channel Isolation vs. Frequency

<!-- image -->

015

Figure 13. Output P1dB vs. Frequency

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 14. Output IP3 vs. Output Power, 3.6 GHz

<!-- image -->

013

Figure 15. Output IP3 vs. Frequency, 11 dBm Output Tone Power

## TYPICAL PERFORMANCE CHARACTERISTICS

## RECEIVE OPERATION, LOW GAIN MODE

<!-- image -->

Figure 16. Gain vs. Frequency at Various Temperatures

<!-- image -->

017

Figure 17. Return Loss vs. Frequency

<!-- image -->

Figure 18. Gain vs. Frequency at Various Temperatures, 3.3 GHz to 4.0 GHz

Figure 19. Channel to Channel Isolation vs. Frequency

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

020

Figure 20. Noise Figure vs. Frequency at Various Temperatures

<!-- image -->

20

Figure 21. Output IP3 vs. Frequency at -10 dBm Output Tone Power

<!-- image -->

22

Figure 22. Output P1dB vs. Frequency

## TYPICAL PERFORMANCE CHARACTERISTICS

## TRANSMIT OPERATION

<!-- image -->

024

Figure 23. Insertion Loss vs. Frequency at Various Temperatures

<!-- image -->

025

Figure 24. Return Loss vs. Frequency

<!-- image -->

026

Figure 25. TERM-CHA to TERM-CHB Isolation vs. Frequency

<!-- image -->

027

Figure 26. Antenna to Termination Isolation vs. Frequency, LNA On

## THEORY OF OPERATION

The ADRF5515A requires a positive supply voltage applied to the VDD1-CHA pin, VDD2-CHA pin, VDD1-CHB pin, VDD2-CHB pin, and SWVDD-CHAB pin. Use bypassing capacitors on the supply lines to filter noise.

## SIGNAL PATH SELECT

The ADRF5515A supports transmit operations when 5 V is applied to SWCTRL-CHAB. In transmit operation, when an RF input is applied to ANT-CHA and ANT-CHB, the signal paths are connected from ANT-CHA to TERM-CHA and from ANT -CHB to TERM-CHB.

The ADRF5515A supports receive operations when 0 V is applied to SWCTRL-CHAB. In receive operation, an RF input applied at ANT-CHA and ANT-CHB connects ANT-CHA to RXOUT-CHA and ANT-CHB to RXOUT-CHB.

## Receive Operation

The ADRF5515A supports high gain mode, low gain mode, powerdown high isolation mode, and power-down low isolation mode in receive operation, as detailed in Table 7.

When 0 V is applied to PD-CHAB, the LNA is powered up and the user can select high gain mode or low gain mode. To select high gain mode, apply 0 V to BP-CHA or BP-CHB. To select low gain mode, apply 5 V to BP-CHA or BP-CHB.

When 5 V is applied to PD-CHAB, the ADRF5515A enters powerdown mode. To select power-down high isolation mode, apply 0 V to BP-CHA or BP-CHB. To select power-down low isolation mode, apply 5 V to BP-CHA or BP-CHB.

Table 6. Truth Table: Signal Path

|             | Signal Path Select   | Signal Path Select   |
|-------------|----------------------|----------------------|
| SWCTRL-CHAB | Transmit Operation 1 | Receive Operation    |
| Low         | Off                  | On                   |
| High        | On                   | Off                  |

Table 7. Truth Table: Receive Operation, SWCTRL-CHAB = 0 V

| Operation                      | PD-CHAB   | BP-CHA, BP-CHB   | Signal Path                                |
|--------------------------------|-----------|------------------|--------------------------------------------|
| Receive Operation              |           |                  | ANT-CHA to RXOUT-CHA, ANT-CHB to RXOUT-CHB |
| High Gain Mode                 | Low       | Low              |                                            |
| Low Gain Mode                  | Low       | High             |                                            |
| Power-Down High Isolation Mode | High      | Low              |                                            |
| Power-Down Low Isolation Mode  | High      | High             |                                            |

## BIASING SEQUENCE

To bias up the ADRF5515A, perform the following steps:

1. Connect any GND pin to ground.
2. Bias up VDD1-CHA, VDD2-CHA, VDD1-CHB, VDD2-CHB, and SWVDD-CHAB.
3. Bias up SWCTRL-CHAB.
4. Bias up PD-CHAB.
5. Bias up BP-CHA and BP-CHB.
6. Apply an RF input signal.

To bias down, perform these steps in the reverse order.

## APPLICATIONS INFORMATION

To generate the evaluation PCB used in a typical application circuit, use proper RF circuit design techniques. Signal lines at the RF port must have a 50 Ω impedance, and the package ground leads and the backside ground slug must connect directly to the ground plane. Use 300 Ω series resistors on the BP-CHx and PD-CHAB digital control pins for glitch and overcurrent protection.

It is possible to tune the ADRF5515A to obtain better return loss between 3.3 GHz to 3.8 GHz or 3.7 GHz to 4.2 GHz frequency bands. An additional low impedance RF trace at the TERM-CHx pin and a shunt capacitor at the ANT-CHx pin allows better return loss for receive high gain mode, receive low gain mode and transmit mode at the same time. It is possible to switch frequency bands by adding/removing the shunt capacitor at the ANT-CHx pin. When the shunt capacitor at the ANT-CHx pin is mounted, the device is tuned to the 3.3 GHz to 3.8 GHz frequency band (low band). When the capacitor is not mounted, the device is tuned to the 3.7 GHz to 4.2 GHz frequency band (high band).

Figure 27. External Matching Topology

<!-- image -->

The details of the external tuning network can be found in Table 8 and Figure 27. RF trace characteristic impedance and electrical length can be applied to any different substrate of choice. Also in Table 8, dimensions for an example grounded coplanar waveguide implementation with 10 mil Rogers 4350 is shown.

Table 8. Matching Components

| Matching Components   | ANT-CHx Pin                                                                         | TERM-CHx Pin                                                                 |
|-----------------------|-------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| Series RF Trace       | Z 0 = 50 Ω E 0 = λ/20 at 3.6 GHz Width = 18 mil Gap = 13 mil Length = 100 mil       | Z 0 = 40 Ω E 0 = λ/4 at 3.6 GHz Width = 26 mil Gap = 13 mil Length = 500 mil |
| Shunt Capacitor       | Capacitor = 0.3 pF Low band tuning Capacitor = do not insert (DNI) High band tuning | Not applicable                                                               |

Simulated return losses for receive high gain mode, receive low gain mode, and transmit mode are seen in Figure 28 and Figure 29. For high gain mode, the return loss is better than 15 dB, and for low gain mode, the return loss is better than 14 dB. For transmit mode, the return loss is better than 18 dB.

Figure 28. ANT-CHx Return Loss at Receive High Gain and Receive Low Gain Mode for Low Band and High Band Tuning

<!-- image -->

Figure 29. ANT-CHx and TERM-CHx Return Loss at Transmit Mode Compared with and Without External Tuning

<!-- image -->

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1           | Temperature Range   | Package Description             | Packing Quantity   | Package Option   |
|-------------------|---------------------|---------------------------------|--------------------|------------------|
| ADRF5515ABCPZN    | -40°C to +105°C     | 40-Lead LFCSP (6mm × 6mm w/ EP) | Reel, 0            | CP-40-15         |
| ADRF5515ABCPZN-R7 | -40°C to +105°C     | 40-Lead LFCSP (6mm × 6mm w/ EP) | Reel, 750          | CP-40-15         |
| ADRF5515ABCPZN-RL | -40°C to +105°C     | 40-Lead LFCSP (6mm × 6mm w/ EP) | Reel, 2500         | CP-40-15         |

## EVALUATION BOARDS

Figure 30. 40-Lead Lead Frame Chip Scale Package [LFCSP] 6 mm × 6 mm Body and 0.95 mm Package Height (CP-40-15) Dimensions shown in millimeters

| Model           | Description                |
|-----------------|----------------------------|
| ADRF5515A-EVALZ | ADRF5515A Evaluation Board |

<!-- image -->

<!-- image -->

Updated: April 09, 2021