<!-- lastmod 2022-08-02 -->
## General Description

The MAX3996 evaluation kit (EV kit) is an assembled demonstration board that provides both optical and electrical evaluation of the MAX3996 2.5Gbps laser driver.

The output of the electrical evaluation section is interfaced to an SMA connector that can be connected to a 50 Ω terminated oscilloscope. The output of the optical evaluation section is configured for attachment to a laser/monitor diode.

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-946-0690 | 803-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Murata     | 814-237-1431 | 814-238-0490 |
| Zetex      | 516-543-7100 | 516-864-7630 |

| DESIGNATION                                            |   QTY | DESCRIPTION                                   |
|--------------------------------------------------------|-------|-----------------------------------------------|
| C1                                                     |     1 | 0.1µF ±10% 10V ceramic capacitor (0402)       |
| C2, C3, C7, C9, C10, C15, C16, C21, C26, C44, C48, C49 |    12 | 0.01µF ±10% ceramic capacitors (0402)         |
| C4, C24                                                |     2 | 10µF ±10% tantalum capacitors AVX TAJC106K016 |
| C18                                                    |     1 | Open, user-supplied*                          |
| C33                                                    |     1 | 0.01µF ±10% ceramic capacitor (0603)          |
| D1                                                     |     1 | LED, T1 Package                               |
| D2                                                     |     1 | Open, user-supplied laser                     |
| J1, J2, J3                                             |     3 | SMA connectors (edge mount)                   |
| J4                                                     |     1 | 1 × 3-pin header (0.1in centers)              |
| J5, J8, J9                                             |     3 | Test points                                   |
| JU7                                                    |     1 | Shunt                                         |
| L1, L7                                                 |     2 | Ferrite beads Murata BLM18HG601SN-1           |

- ♦ Drives Common-Anode Lasers
- ♦ Fully Assembled and Tested
- ♦ LED Fault Indicator
- ♦ Adjustable Laser Bias Current
- ♦ Adjustable Laser Modulation Current
- ♦ Adjustable Laser Modulation Temperature Coefficient
- ♦ Configured for Electrical Operation; No Laser Necessary

## Ordering Information

| PART         | TEMP RANGE       | PIN- PACKAGE   | TOP MARK   |
|--------------|------------------|----------------|------------|
| MAX3996EVKIT | 0 ° C to +70 ° C | 20 QFN         | -          |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                         |
|---------------|-------|-------------------------------------|
| L2, L3, L6    |     3 | Ferrite beads Murata BLM18HG102SN-1 |
| Q1, Q7        |     2 | Transistors Zetex FMMT591A NPN      |
| Q3            |     1 | Transistor Zetex FMMT491A PNP       |
| R1            |     1 | 10k Ω variable resistor             |
| R2, R16       |     2 | 0 Ω resistors (0402)                |
| R3            |     1 | Open, user-supplied                 |
| R4            |     1 | 4.3k Ω ±5% resistor (0402)          |
| R5            |     1 | 1k Ω ±5% resistor (0402)            |
| R6            |     1 | 1.8k Ω ±5% resistor (0402)          |
| R7, R14       |     2 | 100k Ω variable resistors           |
| R8            |     1 | 50k Ω variable resistor             |
| R15           |     1 | 511 Ω ±1% resistor (0402)           |
| R17           |     1 | 24.9 Ω ±1% resistor (0402)*         |
| R19           |     1 | 49.9 Ω ±1% resistor (0402)          |
| R27           |     1 | 24.9 Ω ±1% resistor (0402)**        |
| R39           |     1 | 1k Ω ±5% resistor (0603)            |
| R40           |     1 | 10 Ω ±5% resistor (0603)            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

## Features

## MAX3996 Evaluation Kit

## Component List (continued)

| DESIGNATION         |   QTY | DESCRIPTION                         |
|---------------------|-------|-------------------------------------|
| TP1-TP6, TP11, TP12 |     8 | Test points                         |
| U1                  |     1 | MAX3996CGP (20-QFN)                 |
| U6                  |     1 | MAX4322EUK-T (5-SOT23)              |
| None                |     1 | MAX3996 EV kit circuit board, rev B |
| None                |     1 | MAX3996 data sheet                  |

** For electrical evaluation only.

## Quick Start

## Electrical Evaluation

In the electrical configuration, a test circuit is included to emulate a semiconductor laser with a monitor photodiode. Monitor diode current is provided by Q7, which is  controlled by an operational amplifier (U6). The test circuit  consisting  of  U6  and  Q7  applies  the  simulated monitor diode current (the laser bias current divided by a factor of 100) to the MD pin of the MAX3996. To ensure proper operation in the electrical configuration, set up the evaluation board as follows:

- 1) Ensure that SP9 and SP10 are shorted in order to use the photodiode emulator circuitry. Ensure that SP1 is open.
- 2) Make sure nothing is installed in the laser socket (Figure 1).
- 3) Ensure that R27 is installed.
- 4) Confirm that C18 is open.
- 5) Set potentiometers R1 and R14 (RSET = R1 + R14) to  midscale by turning their screws clockwise at least  30  revolutions  or  until  they  faintly  click,  and then counterclockwise for 15 revolutions. This sets the regulation point for the simulated photodiode current to 1.12V/(5k Ω + 50k Ω ) = 20.4µA. The photodiode emulator circuit regulates the DC bias current into Q7 to 100 ✕ 20.4µA ≈ 2mA.
- 6) Set the potentiometer R8 (RMODSET) to maximum resistance by turning the screw counterclockwise

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- until it clicks faintly (30 full revolutions in the 0 Ω to 50k Ω range of the multiturn potentiometer). This minimizes the modulation current.
- 7) Set the potentiometer R7 (RTC) to maximum resistance by turning the screw counterclockwise until it clicks faintly  (30  revolutions  in  the  0 Ω to  100k Ω range of the multiturn potentiometer). This minimizes the temperature coefficient (tempco) of the modulation current.
- 8) Place jumpers across pin 2 (TX\_DISABLE) and pin 3 (GND) of J4 (pin 1 is the square pad). This enables the output.
- 9) Attach a high-speed oscilloscope with 50 Ω inputs to J1 (OUT+) through a 50 Ω characteristic impedance cable.
- 10) Apply a differential input signal to J2 (IN+) and J3 (IN-). Set the differential amplitude between 200mVP-P and 2200mVP-P. Note that the differential amplitude is twice the single-ended amplitude.
- 11) Apply a power-supply voltage of either 3.3V or 5V between J8 (VCC) and J9 (GND). Set the current limit to 300mA.
- 12) Apply 5V between J5 (5V) and J9 (GND). Set the current limit  to  100mA. This provides power to the photodiode feedback emulator.
- 13) Adjust R8 (RMODSET) until the desired laser modulation current is achieved.

<!-- image -->

## Optical Evaluation

For optical evaluation of the MAX3996, configure the evaluation kit as follows:

- 1) Open SP9 and SP10 and short SP1. This disconnects the photodiode emulator circuitry and attaches the bias to the laser.
- 2) Remove R27.
- 3) Connect a laser to the board (Figure 1).
- 4) Set potentiometers R1 and R14 (RSET = R1 + R14) to midscale by turning the screws clockwise at least 30 revolutions or until they click faintly, and then counterclockwise 15 revolutions. This sets the regulation point for the photodiode current to 1.12V/(5k Ω + 50k Ω )  = 20.4µA. The resulting laser bias current depends on the relationship between laser power and photodiode output current.

<!-- image -->

WARNING: Consult your laser data sheet to ensure that  20µA of photodiode monitor current does not correspond to excessive laser power.

- 5) Set the potentiometer R8 (RMODSET) to maximum resistance by turning the screw counterclockwise until it clicks faintly (30 full revolutions in the 0 Ω to 50k Ω range of the multiturn potentiometer). This minimizes the modulation current.
- 6) Set the potentiometer R7 (RTC) to maximum resistance by turning the screw counterclockwise until it clicks faintly  (30  revolutions  in  the  0 Ω to  100k Ω range of the multiturn potentiometer). This minimizes the temperature coefficient (tempco) of the modulation current.
- 7) Attach a 50 Ω SMA terminator to J1 (OUT+). This balances the load on the differential outputs of the MAX3966.
- 8) Place jumpers across pin 2 (TX\_DISABLE) and pin 3 (GND) of J4 (pin 1 is the square pad). This enables the output.

## MAX3996 Evaluation Kit

- 9) Apply a differential input signal to J2 (IN+) and J3 (IN-). Set the differential amplitude between 200mVP-P and 2200mVP-P. Note that the differential amplitude is twice the single-ended amplitude.
- 10) Apply a power-supply voltage of either 3.3V or 5V between J8 (VCC) and J9 (GND). Set the current limit to 300mA.
- 11) Adjust R1 and R14 (RSET = R1 + R14) until the desired laser bias current is achieved. Turning the R1 and R14 potentiometer screws clockwise increases the laser bias current.
- 12) Adjust R8 (RMODSET) until the desired modulation current is achieved. Turning the R8 potentiometer screw clockwise increases the laser modulation current.
- 13) Look at the 'eye' output on an oscilloscope. Laser overshoot and ringing can be improved by appropriate selection of R17 and C18, as described in the Design Procedure section of the MAX3996 data sheet.

## Adjustment and Control Descriptions (see Quick Start first)

| COMPONENT      | NAME            | FUNCTION                                                                                                                                                                                                                                             |
|----------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| C21            | CPORDLY         | Removing C21 floats PORDLY pin and minimizes the power-on reset time. Refer to the Design Procedures section of the MAX3996 data sheet.                                                                                                              |
| D1             | Fault Indicator | The LED is illuminated when a fault condition has occurred. The fault condition can be cleared by removing and then reinstalling the jumper at J4.                                                                                                   |
| J4             | TX_DISABLE      | Placing a jumper across pin 1 (VCC) and pin 2 (TX_DISABLE) of J4 disables the output (active high). Place a jumper across pin 2 (TX_DISABLE) and pin 3 (GND) of J4 to enable the outputs (pin 1 is the square pad).                                  |
| R1, R14        | R SET           | The series combination of potentiometers R1 and R14 sets the desired laser DC-current bias point. They set the resistance from MD to ground. Turn the potentiometer screws clockwise to increase average power (decrease the resistance).            |
| R7             | R TC            | Potentiometer R7 (R TC ), in conjunction with potentiometer R8 (R MODSET ), sets the tempco of the laser modulation current. Turn the potentiometer screw clockwise (decrease the resistance) to increase the tempco.                                |
| R8             | R MODSET        | Potentiometer R8 (R MODSET ), in conjunction with potentiometer R7 (R TC ), sets the peak-to- peak amplitude of the laser modulation current. Turn the potentiometer screw clockwise (decrease the resistance) to increase the modulation amplitude. |
| SP1, SP9, SP10 |                | Open SP1, short SP9, and short SP10 with a solder bridge for electrical evaluation. Short SP1, open SP9, and open SP10 for optical evaluation.                                                                                                       |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3996 Evaluation Kit

Figure 1. Optical Connection Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3996 Evaluation Kit

Figure 2. MAX3996 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3996 Evaluation Kit

Figure 3. MAX3996 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX3996 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 5. MAX3996 EV Kit PC Board Layout-Ground Plane

<!-- image -->

## MAX3996 Evaluation Kit

Figure 6. MAX3996 EV Kit PC Board Layout-Power Plane

<!-- image -->

Figure 7. MAX3996 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.