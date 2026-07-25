<!-- lastmod 2022-08-02 -->
## General Description

The MAX3861 EV kit is a fully assembled demonstration kit  that  provides easy evaluation of the MAX3861 2.7Gbps +3.3V automatic gain-control amplifier. The evaluation kit also includes a calibration circuit that allows bandwidth measurements.

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-448-9411 | 843-448-1943 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Murata     | 814-237-1431 | 814-238-0490 |
| Venkel     | 800-950-8365 | 512-794-0087 |

Note: Please indicate that you are using the MAX3861 when ordering from these suppliers.

| DESIGNATION       |   QTY | DESCRIPTION                                      |
|-------------------|-------|--------------------------------------------------|
| C1-C8             |     8 | 0.1µF ± 10% ceramic capacitors (0402)            |
| C9, C12           |     2 | 0.22µF ± 10% ceramic capacitors (0603)           |
| C10, C11, C13-C17 |     7 | 0.1µF ± 10% ceramic capacitors (0603)            |
| C18               |     1 | 2200pF ± 10% ceramic capacitor (0603)            |
| C19               |     1 | 2.2µF ± 10% ceramic capacitor (1206)             |
| C20               |     1 | 33µF ± 10% tantalum capacitor (1808)             |
| J1-J8             |     8 | SMA connectors, edge mount                       |
| JU1               |     1 | 1 ✕ 3-pin header (0.1in centers)                 |
| JU2-JU7, JU9      |     0 | 1 ✕ 2-pin headers (0.1in centers) DO NOT INSTALL |

<!-- image -->

## Features

- ♦ Easy 3.3V Electrical Evaluation of the MAX3861
- ♦ Fully Assembled and Tested
- ♦ EV Kit Designed for 50 Ω Interfaces

## Ordering Information

| PART         | TEMP RANGE     | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX3861EVKIT | -40°C to +85°C | 24 QFN       |

## Component List

| DESIGNATION             |   QTY | DESCRIPTION                             |
|-------------------------|-------|-----------------------------------------|
| L1, L2, L3              |     3 | 56nH inductors Coilcraft 1206CS-560XKBC |
| LED1                    |     1 | Red LED                                 |
| R1                      |     1 | 221 Ω ± 1% resistor (0603)              |
| R2, R3                  |     2 | 49.9k Ω ± 1% resistors (0603)           |
| R4                      |     1 | 392 Ω ± 1% resistor (0603)              |
| R5                      |     1 | 500 Ω potentiometer                     |
| R6, R7                  |     2 | 50k Ω potentiometers                    |
| TP1-TP7, VCC, GND (JU8) |    10 | Test points                             |
| U1                      |     1 | MAX3861EGG 24-pin QFN*                  |
| None                    |     1 | MAX3861 evaluation circuit board, rev C |
| None                    |     1 | MAX3861 data sheet                      |

* U1 has an exposed pad that requires it to be solder-attached to the circuit board to ensure proper part functionality.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX3861 Evaluation Kit

## Quick Start

- 1) Connect a differential signal source with 100mVP-P amplitude with a 2 23  - 1 PRBS or K28.5 pattern to the differential inputs of the MAX3861 EV kit (J1 and J2). Set the signal source data rate to 2.7Gbps.
- 2) Connect OUT+ (J3) and OUT- (J4) to the 50 Ω inputs of a high-speed oscilloscope
- 3) Connect a +3.3V power supply to the VCC test point, then connect the power-supply ground to the GND test point. Power-up board.
- 4) Adjust potentiometer R7 to set the output amplitude. Turn the potentiometer clockwise to increase amplitude.

## Detailed Description

The MAX3861 EV kit simplifies MAX3861 evaluation. In jumper descriptions, 'top' and 'bottom' refer to the board positioned with the GND and VCC terminals at the top.

## Threshold Resistor Setting

Potentiometers R5 and R6 set the signal detect threshold. The total threshold resistance RTH is the sum of R5, R6, and the 221 Ω resistor R1. If R5 and R6 are both at maximum resistance, the threshold will be set at its minimum value. Refer to the Signal Detect Threshold vs. RTH graph in the Typical Operating Characteristics section in the MAX3861 data sheet for correct sizing.

## Swing Control Setting

The output amplitude is controlled by potentiometer R7. If maximum output amplitude is desired, decrease R7 to its minimum value to create minimal resistance between VREF and SC. If maximum output amplitude is not desired, increase the resistance until the desired output amplitude is reached. Refer to the Output Signal Amplitude vs. SC Pin Voltage graph in the Typical Operating Characteristics section of the MAX3861 data sheet.

## Signal Detection Enable

Jumper JU1 sets the EN pin. To enable signal detection circuitry (SD and RSSI), shunt the top two pins of JU1 or leave the jumper open. To disable, shunt the bottom two pins.

## TH Test Point

The TH test point (TP1) can be used to measure the voltage at the TH pin, or to measure the total resistance RTH to ground. Refer to the Signal Detect Threshold vs. RTH graph in the Typical Operating Characteristics section of the MAX3861 data sheet.

## EN Test Point

The EN test point (TP2) is used to test the EN pin voltage. Make sure the pin has +3.3V to enable the signal detection circuitry and 0V to disable it.

## VREF Test Point

Use the VREF test point (TP3) to ensure VREF = 2V.

## SC Test Point

Use the SC test point (TP4) to measure the voltage on the SC pin. Refer to the Typical Operating Characteristics section of the MAX3861 data sheet.

## OSM Test Point

The OSM test point (TP5) can be used to monitor the output signal strength.

## SD Test Point

Use the SD test point (TP6) to measure the signal detect output. This pin should indicate low (&lt;0.4V) when the input signal falls below the threshold set at the TH pin, and indicate high (&gt;2.4V) in normal operation.

## RSSI Test Point

The RSSI test point (TP7) can be used to monitor the input signal strength.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3861 Evaluation Kit

Figure 1. MAX3861 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3861 Evaluation Kit

Figure 2. MAX3861 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX3861 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 4. MAX3861 EV Kit PC Board Layout-Solder Side

<!-- image -->

## MAX3861 Evaluation Kit

Figure 5. MAX3861 EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3861 Evaluation Kit

Figure 6. MAX3861 EV Kit PC Board Layout-Power Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->