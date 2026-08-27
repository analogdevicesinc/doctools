<!-- lastmod 2019-04-26 -->
<!-- image -->

Data Sheet

## FEATURES

High output power: 46 dBm typical at PIN = 23 dBm High small signal gain: 32.5 dB typical High power gain: 23 dB typical at PIN = 23 dBm Frequency range: 9 GHz to 10.5 GHz High power added efficiency: 40% typical at PIN = 23 dBm Supply voltage: VDDxA/VDDxB = 28 V at 1000 mA 6 mm × 6 mm, 40-lead LFSCP

## APPLICATIONS

Weather radars Marine radars Military radars

## GENERAL DESCRIPTION

The HMC8415LP6GE is a gallium nitride (GaN), power amplifier, delivering 40 W (46 dBm) with more than 37.5% power added efficiency (PAE) across a bandwidth of 9 GHz to 10.5 GHz.

## 40 W (46 dBm), 9 GHz to 10.5 GHz,

## GaN Power Amplifier

[HMC8415LP6GE](https://www.analog.com/HMC8415?doc=HMC8415LP6GE.pdf)

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

The HMC8415LP6GE is ideal for pulsed applications, such as wireless weather, marine, and military radar applications.

## [HMC8415LP6GE](https://www.analog.com/HMC8415?doc=HMC8415LP6GE.pdf)

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Applications....................................................................................... 1       |
| Functional Block Diagram .............................................................. 1                   |
| General Description......................................................................... 1              |
| Revision History ............................................................................... 2          |
| Specifications..................................................................................... 3       |
| Electrical Specifications............................................................... 3                  |
| Total Target Quiescent Current byV DDxA /V DDxB ....................... 4                                   |
| Absolute Maximum Ratings............................................................ 5                      |
| Thermal Resistance ...................................................................... 5                 |
| ESD Caution.................................................................................. 5             |
| Pin Configuration and Function Descriptions............................. 6                                  |
| Interface Schematics..................................................................... 7                 |

## REVISION HISTORY

4/2019-Rev. 0 to Rev. A

Change to Table 5 ............................................................................. 5

Updated Outline Dimensions ....................................................... 23

Changes to Ordering Guide .......................................................... 23

9/2018-Revision 0: Initial Version

| Typical Performance Characteristics ..............................................8                                                                       |    |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|----|
| Theory of Operation ......................................................................                                                                | 14 |
| Applications Information..............................................................                                                                    | 15 |
| Typical Application Circuit and Pulsor Circuit .....................                                                                                      | 17 |
| Using the EV1HMC8415LP6G with the Drain Bias Pulsor Board................................................................................................ | 19 |
| Recommended Bias Sequence..................................................                                                                               | 20 |
| Making Average to Pulsed Approximations ...............................                                                                                   | 21 |
| Evaluation PCB...............................................................................                                                             | 22 |
| Bill of Materials...........................................................................                                                              | 22 |
| Outline Dimensions.......................................................................                                                                 | 23 |
| Ordering Guide ..........................................................................                                                                 | 23 |

## SPECIFICATIONS

## ELECTRICAL SPECIFICATIONS

TA = 25°C, VDDxA/VDDxB = 28 V , target quiescent current (IDQ) = 1000 mA, drain bias pulse width = 100 µs, 10% duty cycle, and the frequency range = 9 GHz to 10 GHz, unless otherwise noted.

Table 1.

| Parameter                 | Symbol   |   Min |   Typ |   Max | Unit   | Test Conditions/Comments                                                                                                                                     |
|---------------------------|----------|-------|-------|-------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FREQUENCY RANGE           |          |     9 |       |    10 | GHz    |                                                                                                                                                              |
| GAIN                      |          |       |       |       |        |                                                                                                                                                              |
| Small Signal Small Signal |          |    30 |  32.5 |       | dB     |                                                                                                                                                              |
| Flatness                  |          |       |     1 |       | dB     |                                                                                                                                                              |
| Power Gain                |          |       |    23 |       | dB     | Input power (P IN ) = 23dBm                                                                                                                                  |
|                           |          |       |    24 |       | dB     | P IN = 21dBm                                                                                                                                                 |
| RETURN LOSS               |          |       |       |       |        |                                                                                                                                                              |
| Input                     |          |       |    20 |       | dB     |                                                                                                                                                              |
| Output                    |          |       |    10 |       | dB     |                                                                                                                                                              |
| POWER                     |          |       |       |       |        |                                                                                                                                                              |
| Output Power              | P OUT    |       |    46 |       | dBm    | P IN = 23dBm                                                                                                                                                 |
|                           |          |       |    45 |       | dBm    | P IN = 21dBm                                                                                                                                                 |
| Power Added Efficiency    | PAE      |       |    40 |       | %      | P IN = 23dBm                                                                                                                                                 |
|                           |          |       |  37.5 |       | %      | P IN = 21dBm                                                                                                                                                 |
| TARGET QUIESCENT CURRENT  | I DQ     |       |  1000 |       | mA     | Adjust theV GG (V GGxA /V GGxB ) between -4.0V and -1.5V to achieve an I DQ = 1000 mAtypical,V GG (V GGxA /V GGxB ) = -2.5V typical to achieve I DQ = 1000mA |

TA = 25°C, VDDxA/VDDxB = 28 V , IDQ = 1000 mA, drain bias pulse width = 100 µs, 10% duty cycle, and the frequency range = 10 GHz to 10.5 GHz, unless otherwise noted.

Table 2.

| Parameter                | Symbol      | Typ         | Unit        | Test Conditions/Comments                                                                                                                                     |             |             |
|--------------------------|-------------|-------------|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------|
| FREQUENCY RANGE          |             |             | GHz         |                                                                                                                                                              |             |             |
| GAIN                     | GAIN        | GAIN        | GAIN        | GAIN                                                                                                                                                         | GAIN        | GAIN        |
| Small Signal             |             | 28          | dB          |                                                                                                                                                              |             |             |
| Small Signal Flatness    |             | 5           | dB          |                                                                                                                                                              |             |             |
| Power Gain               |             | 22          | dB          | P IN = 23dBm                                                                                                                                                 |             |             |
|                          |             | 23.5        | dB          | P IN = 21dBm                                                                                                                                                 |             |             |
| RETURN LOSS              | RETURN LOSS | RETURN LOSS | RETURN LOSS | RETURN LOSS                                                                                                                                                  | RETURN LOSS | RETURN LOSS |
| Input                    |             | 17          | dB          |                                                                                                                                                              |             |             |
| Output                   |             | 8           | dB          |                                                                                                                                                              |             |             |
| POWER                    | POWER       | POWER       | POWER       | POWER                                                                                                                                                        | POWER       | POWER       |
| Output Power             | P OUT       | 45          | dBm         | P IN = 23dBm                                                                                                                                                 |             |             |
|                          |             | 44.5        | dBm         | P IN = 21dBm                                                                                                                                                 |             |             |
| Power Added Efficiency   | PAE         | 37.5        | %           | P IN = 23dBm                                                                                                                                                 |             |             |
|                          |             | 37.5        | %           | P IN = 21dBm                                                                                                                                                 |             |             |
| TARGET QUIESCENT CURRENT | I DQ        | 1000        | mA          | Adjust theV GG (V GGxA /V GGxB ) between -4.0V and -1.5V to achieve an I DQ = 1000 mAtypical,V GG (V GGxA /V GGxB ) = -2.5V typical to achieve I DQ = 1000mA |             |             |

<!-- image -->

## [HMC8415LP6GE](https://www.analog.com/HMC8415?doc=HMC8415LP6GE.pdf)

## TOTAL TARGET QUIESCENT CURRENT BY VDDxA/VDDxB

Table 3.

| Parameter                                                      | Symbol   | Min   | Typ            | Max   | Unit   | Test Conditions/Comments                                                                 |
|----------------------------------------------------------------|----------|-------|----------------|-------|--------|------------------------------------------------------------------------------------------|
| TARGET QUIESCENT CURRENT                                       | I DQ     |       |                |       |        | Adjust theV GG (V GGxA /V GGxB ) from -4.0V to -1.5V to achieve an I DQ = 1000 mAtypical |
| V DDxA /V DDxB = 24V V DDxA /V DDxB = 28V V DDxA /V DDxB = 32V |          |       | 1000 1000 1000 |       | mA mA  |                                                                                          |
|                                                                |          |       |                |       | mA     |                                                                                          |

## ABSOLUTE MAXIMUM RATINGS

Table 4.

| Parameter                                                                                                                           | Rating                 |
|-------------------------------------------------------------------------------------------------------------------------------------|------------------------|
| Bias Voltage                                                                                                                        |                        |
| Drain (V DDxA /V DDxB )                                                                                                             | 35V dc                 |
| Gate (V GGxA /V GGxB )                                                                                                              | -8V dc to -1V dc       |
| Radio Frequency Input Power (RFIN)                                                                                                  | 30 dBm                 |
| Maximum Drain Bias                                                                                                                  |                        |
| Pulse Width (PW)                                                                                                                    | 500 µs                 |
| Duty Cycle                                                                                                                          | 20%                    |
| MaximumPulsedPowerDissipation,P DISS (T BASE =85°C, Derate 752 mW/°C Above 85°C), Drain Bias Pulse Width = 200 µs at 20% Duty Cycle | 105.3W                 |
| Nominal Pulsed Peak ChannelTemperature, Drain Bias Pulse Width = 200 µs at 20% Duty Cycle, P IN = 23 dBm, P DISS = 58Wat 9.0 GHz    | 162°C                  |
| Maximum Channel Temperature                                                                                                         | 225°C                  |
| Maximum Peak Reflow Temperature for Moisture Sensitivity Level 3 (MSL3) 1                                                           | 260°C                  |
| Storage Temperature Range                                                                                                           | -65°Cto+150°C          |
| Operating Temperature Range                                                                                                         | -40°C to +85°C         |
| Electrostatic Discharge (ESD) Sensitivity Human Body Model (HBM)                                                                    | Class 1A, Passed 250 V |

1 See the Ordering Guide section for additional information.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θJC is the junction to case thermal resistance.

## Table 5. Thermal Resistance

| PackageType 1, 2   |   θ JC | Unit   |
|--------------------|--------|--------|
| CP-40-7            |   1.33 | °C/W   |

1  The thermal resistance (θJC) was determined by measuring θJC under the following conditions: the heat transfer is due solely to the thermal conduction from the channel through the ground pad to the PCB, and the ground pad is held constant at the operating temperature of 85°C. 2

Drain bias pulse width = 200 µs at 20% duty cycle.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Figure 2. Pin Configuration

| Pin No.                                                | Mnemonic                                        | Description                                                                                                                                                                                        |
|--------------------------------------------------------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1to 3, 7to10, 14, 17, 18, 21to24, 28 to 30, 33, 34, 37 | NIC                                             | No Internal Connection. These pins must be connected to RF and dc ground.                                                                                                                          |
| 4, 6, 25, 27                                           | GND                                             | Ground. These pins must be connected to RF and dc ground. See Figure 3 for the GNDinterface schematic.                                                                                             |
| 5                                                      | RFIN                                            | RF Input. This pin is ac-coupled and matched to 50 Ω. See Figure 4 for the RFIN interface schematic.                                                                                               |
| 11 to13, 38 to 40                                      | V GG1B ,V GG2B, V GG3B , V GG1A ,V GG2A, V GG3A | Gate Control Voltage Pins. External bypass capacitors of 1 µF, 100 pF, and 2.2 nF are required. See Figure 5 for theV GG1B ,V GG2B ,V GG3B ,V GG1A ,V GG2A , andV GG3A interface schematic.        |
| 15, 16, 19, 20, 31, 32, 35, 36                         | V DD1B ,V DD2B ,V DD3B , V DD1A ,V DD2A ,V DD3A | Drain Bias Pins for the Amplifier. External bypass capacitors of 1 nF and 3.3Ω resistors are required. See Figure 7 for theV DD1B ,V DD2B ,V DD3B ,V DD1A ,V DD2A , andV DD3A interface schematic. |
| 26                                                     | RFOUT                                           | RF Output. This pin is ac-coupled and matched to 50 Ω. See Figure 6 for the RFOUT interface schematic.                                                                                             |
|                                                        | EPAD                                            | Exposed Pad. The exposed pad must be connected to RF and dc ground.                                                                                                                                |

## Table 6. Pin Function Descriptions

## INTERFACE SCHEMATICS

Figure 4. RFIN Interface Schematic

<!-- image -->

<!-- image -->

Figure 5. VGG1A, VGG1B, VGG2A, VGG2B, VGG3A, and VGG3B Interface Schematic

<!-- image -->

## [HMC8415LP6GE](https://www.analog.com/HMC8415?doc=HMC8415LP6GE.pdf)

VDD1A /V DD1B /V DD2A /V DD2B /V DD3A /V DD3B

<!-- image -->

Figure 7. VDD1A, VDD1B, VDD2A, VDD2B, VDD3A, and VDD3B Interface Schematic

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 8. Small Signal Gain and Return Loss (Response) vs. Frequency

<!-- image -->

Figure 9. Input Return Loss vs. Frequency at Various Temperatures

<!-- image -->

Figure 10. Small Signal Gain vs. Frequency at Various Supply Voltages at IDQ = 1000 mA

<!-- image -->

Figure 11. Small Signal Gain vs. Frequency at Various Temperatures

Figure 12. Output Return Loss vs. Frequency at Various Temperatures

<!-- image -->

Figure 13. Small Signal Gain vs. Frequency at Various Quiescent Currents at VDDxA/VDDxB = 28 V

<!-- image -->

<!-- image -->

Figure 14. Output Power (POUT) vs. Frequency at Various Input Power (PIN) Levels

Figure 15. POUT vs. Frequency at Various Temperatures at PIN = 23 dBm

<!-- image -->

Figure 16. POUT at PIN = 23 dBm vs. Frequency at Various Supply Voltages at IDQ = 1000 mA

<!-- image -->

16688-017

<!-- image -->

Figure 17. Power Added Efficiency vs. Frequency at Various PIN Levels

Figure 18. POUT vs. Frequency at Various Temperatures at PIN = 21 dBm

<!-- image -->

Figure 19. POUT at PIN = 21 dBm vs. Frequency at Various Supply Voltages at IDQ = 1000 mA

<!-- image -->

<!-- image -->

Figure 20. POUT at PIN = 23 dBm vs. Frequency at Various Quiescent Currents at VDDxA/VDDxB = 28 V

<!-- image -->

Figure 21. Power Added Efficiency at PIN = 23 dBm vs. Frequency at Various Temperatures

<!-- image -->

Figure 22. Power Added Efficiency at PIN = 23 dBm vs. Frequency at Various Supply Voltages at IDQ = 1000 mA

<!-- image -->

Figure 23. POUT at PIN = 21 dBm vs. Frequency at Various Quiescent Currents at VDDxA/VDDxB = 28 V

Figure 24. Power Added Efficiency at PIN = 21 dBm vs. Frequency at Various Temperatures

<!-- image -->

Figure 25. Power Added Efficiency at PIN = 21 dBm vs. Frequency at Various Supply Voltages at IDQ = 1000 mA

<!-- image -->

## Data Sheet

<!-- image -->

Figure 26. Power Added Efficiency at PIN = 23 dBm vs. Frequency at Various Quiescent Currents, VDDxA/VDDxB = 28 V

Figure 27. Power Gain, POUT, PAE, and Supply Current (IDD) vs. Frequency at PIN = 23 dBm

<!-- image -->

Figure 28. POUT vs. Frequency at Various Pulse Widths (PW) and Duty Cycles (DC) at PIN = 23 dBm

<!-- image -->

## [HMC8415LP6GE](https://www.analog.com/HMC8415?doc=HMC8415LP6GE.pdf)

<!-- image -->

Figure 29. Power Added Efficiency at PIN = 21 dBm vs. Frequency at Various Quiescent Currents, VDDxA/VDDxB = 28V

Figure 30. Power Gain, POUT, PAE, and IDD vs. Frequency at PIN = 21 dBm

<!-- image -->

Figure 31. POUT vs. Frequency at Various Pulse Widths (PW) and Duty Cycles (DC) at PIN = 21 dBm

<!-- image -->

## [HMC8415LP6GE](https://www.analog.com/HMC8415?doc=HMC8415LP6GE.pdf)

<!-- image -->

Figure 32. Power Added Efficiency vs. Frequency at Various Pulse Widths (PW) and Duty Cycles (DC) at PIN = 23 dBm

<!-- image -->

Figure 33. POUT, Power Gain, PAE, and IDD vs. Input Power at 9.0 GHz

<!-- image -->

Figure 34. POUT, Power Gain, PAE, and IDD vs. Input Power at 10 GHz

<!-- image -->

Figure 35. Power Added Efficiency vs. Frequency at Various Pulse Widths (PW) and Duty Cycles (DC) at PIN = 21 dBm

Figure 36. POUT, Power Gain, PAE, and IDD vs. Input Power at 9.5 GHz

<!-- image -->

Figure 37. POUT, Power Gain, PAE, and IDD vs. Input Power at 10.5 GHz

<!-- image -->

<!-- image -->

Figure 38. Power Dissipation vs. Input Power, Drain Bias Pulse Width = 100 µs at 10% Duty Cycle

<!-- image -->

Figure 39. Power Dissipation vs. Input Power, Drain Bias Pulse Width = 20 µs at 2% Duty Cycle

Figure 40. Power Dissipation vs. Input Power, Drain Bias Pulse Width = 50 µs at 5% Duty Cycle

<!-- image -->

Figure 41. Power Dissipation (PDISS) vs. Input Power, Drain Bias Pulse Width = 100 µs at 10% Duty Cycle, Base Temperature (TBASE) = 85°C

<!-- image -->

16688-142

Figure 42. Power Dissipation vs. Input Power, Drain Bias Pulse Width = 200 µs at 20% Duty Cycle

<!-- image -->

Figure 43. IDQ vs. VGG (VGGxA/VGGxB), VDDxA/VDDxB = 28 V, Representative of a Typical Device

<!-- image -->

## THEORY OF OPERATION

The HMC8415LP6GE is a gallium nitride (GaN) power amplifier capable of delivering 40 W (46 dBm) of pulsed power. The device consists of three cascaded gain stages and is configured with near mirror symmetry about the axis from RFIN to RFOUT. A simplified view of this architecture is shown in Figure 44.

The recommended dc bias conditions put the device into deep Class AB operation, allowing a moderate PIN of 23 dBm to produce a typical pulsed POUT and PAE of 46 dBm and 40%, respectively, in the lower specified operating frequency range of 9 GHz to 10 GHz. The pulsed bias applied to the VDD1A/VDD1B, VDD2A/VDD2B, and VDD3A/VDD3B pins bias the drains of the first, second, and third gain stages, respectively. The dc voltages applied to the VGG1A/VGG1B, VGG2A/VGG2B, and VGG3A/VGG3B pins bias the gates of the first, second, and third gain stages, respectively, allowing control of the drain currents for each stage.

The HMC8415LP6GE has single-ended RFIN and RFOUT ports that are dc blocked, and whose impedances are nominally 50 Ω over the 9 GHz to 10.5 GHz operating frequency range. Consequently, the HMC8415LP6GE can be directly inserted into a 50 Ω system without the need for external impedance matching components. Multiple HMC8415LP6GE amplifiers can be cascaded together without the need for external matching components or dc blocking capacitors.

16688-038

Figure 44. Basic Block Diagram

<!-- image -->

## APPLICATIONS INFORMATION

Figure 47 shows the basic connections required for pulsed bias operation of the HMC8415LP6GE. To ensure stable operation, it is critical to provide the package base and all ground pins with low inductance connections to ground. Individually, bypass the six VDDxx pins using the 1 nF capacitors and 3.3 Ω resistors shown in Figure 47, then connect the pins to the drain bias supply farther away from the device. Similarly, individually bypass the six VGGxx pins capacitively, then connect the pins to the gate bias supply farther away from the device.

To achieve the specified performance and rated operating life, proper thermal management is critical. Thermal management is assisted by pulsed bias operation, which helps limit the average power dissipated, and thus, minimizing the channel temperature. Decreasing channel temperature corresponds with increasing the mean time to fail (MTTF). To better understand pulsed bias thermal parameters and the calculation of the resulting channel temperature, adjust the concept of thermal resistance from that of usual continuous bias conditions.

First, consider a continuous bias case (see Figure 45). When bias is applied, the channel temperature (TCHAN) of the device rises through a turn-on transient interval and eventually settles to a steady state value. Calculate the thermal resistance of the device as the rise in TCHAN above the starting base temperature (TBASE) divided by the total power dissipated by the device.

<!-- formula-not-decoded -->

## where:

θJC is the channel to base thermal resistance (°C/W) of the device.

t RISE is the rise in the TCHAN of the device above the TBASE (°C). PDISS is the power dissipation (W) of the device.

<!-- image -->

Now, consider a pulsed bias case at low duty cycle (see Figure 46). When bias is applied, the TCHAN of the device can be described as a series of exponentially rising and decaying pulses. The peak channel temperature reached during consecutive pulses increases during the turn-on transient interval, eventually settling to a steady state condition, where peak channel temperatures from pulse to pulse stabilize. Calculate the thermal resistance of the device as the rise in TCHAN above the starting TBASE divided by the total power dissipated by the device.

<!-- formula-not-decoded -->

where:

θJC is the channel to base thermal resistance (°C/W) of the device.

t RISE is the peak rise in the TCHAN of the device above the TBASE (°C). PDISS is the power dissipation (W) of the device during a bias pulse.

Figure 46. Pulsed Bias at Low Duty Cycle

<!-- image -->

Transient thermal measurements were performed on the HMC8415LP6GE amplifier at several different bias pulse widths and duty cycles to obtain the thermal resistance values in Table 7.

Table 7. Pulse Settings and Thermal Resistance Values

| Pulse Settings   | Pulse Settings   |             |
|------------------|------------------|-------------|
| PulseWidth (µs)  | Duty Cycle (%)   | θ JC (°C/W) |
| 20               | 2                | 0.5         |
| 50               | 5                | 0.69        |
| 100              | 10               | 0.95        |
| 200              | 20               | 1.33        |

The largest total θJC listed in Table 7 is the same value as listed in Table 5 because this value represents the worst case, pulsed bias operation. Narrower pulse widths and/or lower duty cycles can result in greater reliability.

Even though the HMC8415LP6GE amplifier is designed for low duty cycle pulsed applications, there can be brief periods when the device operates (perhaps accidently) under continuous bias conditions. The thermal resistance increases to 4°C/W under such conditions. Even at the nominal quiescent bias (VDD (VDDxA/VDDxB) = 28 V and IDD = 1 A), the 28 W power dissipation results in a 112°C channel temperature rise above the base temperature. Exercise extreme caution in such situations so that the device does not exceed the device maximum channel temperature of 225°C. If applying an RF input greater than -10 dBm during continuous wave (CW) operation, the device power dissipation increases above 28 W , resulting in an even greater temperature rise, possibly approaching the damage level of the device.

## [HMC8415LP6GE](https://www.analog.com/HMC8415?doc=HMC8415LP6GE.pdf)

Pulsed bias can be achieved in different ways. However, typical applications hold the gate bias constant, pulse the drain bias on (28 V) when amplification is required, and pulse the drain bias off (0 V) when the drain bias is no longer required. Drain bias pulsing typically requires implementation of a pulsor circuit that consists of heavy duty power components, such as power metaloxide semiconductor field effect transistors (MOSFETs), MOSFET drivers, and power rectifiers. Large capacitors are also required because these capacitors serve as local reservoirs of charge, helping to provide the drain current demanded by the HMC8415LP6GE while maintaining a steady drain voltage during the on time of the pulse.

An example of such a pulsor is the Analog Devices, Inc., custom drain pulsor board shown in Figure 48. The pulsor board was developed specifically for this application and is included with the HMC8415LP6GE evaluation kit, EV1HMC8415LP6G. The HMC8415LP6GE characterization was performed on the evaluation board, with VDD pulsing achieved through use of the pulsor board in combination with external dc voltage supplies for VDDxx and VGGxx and a pulse generator for triggering the VDD pulses. The dc connectors of both boards allow the boards to connect directly together without the need for extraneous flexible cabling. This rigid connection between the boards helps maintain a low inductance and low resistance connection, minimizing the occurrence of ringing and voltage drop. To help simplify the implementation of the HMC8415LP6GE with a drain bias pulsor circuit into customer applications, the complete drawing packages and bill of materials for both boards are available by submitting a Technical Support Request.

Before attempting to connect the EV1HMC8415LP6G to the pulsor board, closely review the schematics of both boards (see Figure 47 and Figure 48).

## TYPICAL APPLICATION CIRCUIT AND PULSOR CIRCUIT

Figure 47 shows the typical application circuit, and Figure 48 shows the drain bias typical pulsor circuit.

Rev. A | Page 17 of 23 Figure 47. Typical Application Circuit

<!-- image -->

## [HMC8415LP6GE](https://www.analog.com/HMC8415?doc=HMC8415LP6GE.pdf)

Figure 48. Typical Pulsor Circuit

<!-- image -->

16688-040

## USING THE EV1HMC8415LP6G WITH THE DRAIN BIAS PULSOR BOARD

The following description assumes that pulsed measurements were made and that a current probe was used to measure IDD. When neither is possible with the equipment available, approximations must be made as described in the Making Average to Pulsed Approximations section.

The connections required for using the EV1HMC8415LP6G with the drain bias pulsor board are shown in Figure 49. Before applying any bias or signals, the pulsor board must interconnect with the EV1HMC8415LP6G so that the pulsor board (J2) mates with the EV1HMC8415LP6G (J3) and the pulsor board (J3) mates with the EV1HMC8415LP6G (J4). The only externally wired connections needed are to the J1 connector of the pulsor board: VDD, SENSE (from the +S VDD supply), VG1, PULSE, and all signal GNDs, including the -S VDD supply. VG1 passes from the Pulsor J1-VG1 directly through the pulsor board to the gate pins of the evaluation board. For the Pulsor J1-VDD and its GND connections, the use of heavy gauge twister pair wires is recommended to minimize voltage drop. The J4 coaxial connector of the pulsor board allows the convenient monitoring of the VDD\_PULSE signal by using an oscilloscope.

Figure 49. Setup Block Diagram

<!-- image -->

## RECOMMENDED BIAS SEQUENCE

## Power-Up Bias Concept for the EV1HMC8415LP6G with the Pulsor

A proper set of dc bias conditions always requires that the gate be biased to a voltage that does not result in excessive drain current, regardless of whether the drain bias is constant or pulsed. For this reason, always apply a gate bias voltage to Pulsor J1-VG1 prior to the application of a voltage to Pulsor J1VDD. VG1 = -6 V is considered a safe starting value. With a pulsed logic signal applied to Pulsor J1-PULSE and 28 V applied to Pulsor J1-VDD, a pulsed voltage between 0 V (for PULSE = logic low) and VDD = 28 V (for PULSE = logic high) becomes available at Pulsor J2-VDD\_PULSE and Pulsor J3-VDD\_PULSE and, therefore, at the drains of the device under test (DUT). When the gate bias voltage (applied to Pulsor J1-VG1) is available at the gates simultaneously with VDD\_PULSE at the drains, a drain current proportional to VG1 flows. VG1 can be adjusted until the target pulsed IDQ is achieved. With this pulsor board, J1-VDD has a 35 V maximum above which damage can occur to the pulsor.

The J1-PULSE and VDD\_PULSE pulse width and duty cycle limits for reliable operation are as follows:

-  Pulse width = 500 µs maximum
-  Duty cycle = 20% maximum

## Power-Down Bias Concept for the EV1HMC8415LP6G with the Pulsor

The power-down bias sequence follows from the power-up bias sequence. Bring Pulsor J1-PULSE to logic low to remove VDD\_PULSE, and then power down Pulsor J1-VDD followed by powering down Pulsor J1-VG1.

## MAKING AVERAGE TO PULSED APPROXIMATIONS

To measure RF power, IDD, and PAE accurately in a pulsed manner, use instruments offering pulse triggered measurements. When pulse triggered instruments are not available but simpler instruments with adequate averaging capabilities are, approximations can be made with the understanding that the approximations can result in lower accuracy of measurement. The most common approximations involve measuring the average values of parameters and then adjusting those values to account for the duty cycle of operation. Approximating in this manner can result in errors due to the limited measurement bandwidths of the instruments and/or the inclusion of on/off transients and/or partial periods in the measurement. So that partial periods do not contribute significant errors to the measurements, perform the averaging over a large number of pulse periods. The results of such approximations can vary with the instruments and settings used. Therefore, experimentation can be necessary to achieve credible and repeatable results. When it is not possible to make pulse triggered measurements, the only pulse connection required is the one from the pulse generator to the J1 connector of the pulsor (see Figure 49).

Depending on the implementation of the HMC8415LP6GE and the pulsor into customer applications, adjustments of the pulse circuit may be desired if the on and off transitions are accompanied by excessive drain supply ringing. Synchronous with the drain pulses, the VGGxx bias and RFIN signal can also be pulsed.

Unless otherwise noted, all measurement data shown within this data sheet was taken using the typical application circuit (see Figure 47) as implemented on the evaluation board (see Figure 50), with the drain bias pulsed at 28 V by the pulsor board (see Figure 48) to achieve the nominal IDQ of 1000 mA at a pulse width of 100 µs, and 10% duty cycle. Operating at different drain voltages or different drain quiescent currents affects performance, as shown in the Typical Performance Characteristics section. For applications having lower power and gain requirements, operation at lower VDDxx and IDQ can help reduce power consumption. Due to thermal considerations, the use of lower duty cycles and shorter pulse widths can sometimes result in improved power and PAE.

## [HMC8415LP6GE](https://www.analog.com/HMC8415?doc=HMC8415LP6GE.pdf)

## EVALUATION PCB

The EV1HMC8415LP6G (600-01639-00-2) evaluation PCB is shown in Figure 50.

## BILL OF MATERIALS

Use RF circuit design techniques for the circuit board used in the application. Provide 50 Ω impedance for the signal lines and directly connect the package ground leads and exposed pad to the ground plane, similar to that shown in Figure 50. Use a sufficient number of via holes to connect the top and bottom ground planes. The evaluation PCB shown in Figure 50 is available from Analog Devices upon request.

Figure 50. Evaluation PCB

<!-- image -->

Table 8. Bill of Materials for the Evaluation PCB EV1HMC8415LP6G (600-01639-00-2)

| Item                                                                 | Description                                                                      |
|----------------------------------------------------------------------|----------------------------------------------------------------------------------|
| J1, J2                                                               | SMA connectors                                                                   |
| J3, J4                                                               | DC pins                                                                          |
| R1 to R9, R13 to R15, R19 to R21, R25 to R27, R31 to R33, R37 to R39 | 0 Ωresistors, 0402 package                                                       |
| C2, C4, C6, C8, C10, C12                                             | 1000 pF capacitors, 0402 package                                                 |
| C1, C3, C5, C7, C9, C11                                              | 100 pF capacitors, 0402 package                                                  |
| C13, C15, C17, C19, C21, C23                                         | 2200 pF capacitors, 0603 package                                                 |
| C25, C27, C29, C31, C33, C35                                         | 1 µF capacitors, 0603 package                                                    |
| U1                                                                   | HMC8415LP6GE                                                                     |
| PCB                                                                  | 600-01639-00-2 evaluation PCB; circuit board material: Rogers 4350 or Arlon 25FR |

## OUTLINE DIMENSIONS

PKG-005131

10-08-2018-A

<!-- image -->

COMPLIANT TO JEDEC STANDARDS MO-220-WJJD-5

Figure 51. 40-Lead Lead Frame Chip Scale Package [LFCSP] 6 mm × 6 mm Body and 0.75 mm Package Height (CP-40-7) Dimensions shown in millimeters

## ORDERING GUIDE

| Model 1        | Temperature Range   |   MSLRating 2 | Package Description 3                         | Package Option   |
|----------------|---------------------|---------------|-----------------------------------------------|------------------|
| HMC8415LP6GE   | -40°C to +85°C      |             3 | 40-Lead Lead Frame Chip Scale Package [LFCSP] | CP-40-7          |
| HMC8415LP6GETR | -40°C to +85°C      |             3 | 40-Lead Lead Frame Chip Scale Package [LFCSP] | CP-40-7          |
| EV1HMC8415LP6G |                     |               | Evaluation Board                              |                  |

<!-- image -->