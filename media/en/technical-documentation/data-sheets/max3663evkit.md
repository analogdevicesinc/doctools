<!-- lastmod 2022-08-02 -->
## General Description

The MAX3663 evaluation kit (EV kit) is an assembled demonstration board that provides easy optical or electrical evaluation of the MAX3663, a 622Mbps laser driver with current monitors and automatic power control (APC) circuitry. Although the MAX3663 EV kit is shipped in the electrical configuration, this EV kit also provides configuration instructions for optical operation.

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-448-9411 | 843-448-1943 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Murata     | 770-436-1300 | 770-436-3030 |
| Zetex      | 631-360-2222 | 631-360-8222 |

Note: Please indicate that you are using the MAX3663 when contacting these component suppliers.

## Component List for Electrical Configuration

| DESIGNATION            |   QTY | DESCRIPTION                                                  |
|------------------------|-------|--------------------------------------------------------------|
| C1, C2, C6, C12, C20   |     5 | 0.01µF ±10% ceramic capacitors (0402)                        |
| C4, C7, C10, C11       |     4 | 1µF ±10% ceramic capacitors (0603)                           |
| C5                     |     1 | Do not install                                               |
| C8                     |     1 | 100pF ±10% ceramic capacitor (0402)                          |
| C16                    |     1 | 0.1µF ±10% ceramic capacitor (0603)                          |
| C19                    |     1 | 10µF ±10%, 10V min tantalum capacitor case B AVX TAJC106K016 |
| C21                    |     1 | 5pF ±5% ceramic capacitor (0402)                             |
| D1                     |     1 | LED                                                          |
| J1, J2, J3             |     3 | SMA connectors, edge mount                                   |
| JU1-JU4                |     4 | 3-pin headers, 0.1in centers                                 |
| L2                     |     1 | Open                                                         |
| L3                     |     1 | 1.2µH inductor Coilcraft 1008LS-122XKBC                      |
| Q1                     |     1 | PNP transistor Zetex FMMT591A                                |
| R1, R2, R24            |     3 | 1.5k Ω ±5% resistors (0402)                                  |
| R3                     |     1 | 1k Ω ±5% resistor (0603)                                     |
| R4, R17, R25, R27, R29 |     5 | Do not install                                               |

| DESIGNATION        |   QTY | DESCRIPTION                           |
|--------------------|-------|---------------------------------------|
| R5                 |     1 | 12.4 Ω ±1% resistor (0402)            |
| R6, R7, R21        |     3 | 84.5 Ω ±1% resistors (0603)           |
| R8, R9             |     2 | 124 Ω ±1% resistors (0603)            |
| R10, R11           |     2 | 20 Ω ±1% resistors (0402)             |
| R12                |     1 | 10 Ω ±1% resistor (0402)              |
| R13, R22           |     2 | 0 Ω resistors (0603)                  |
| R14                |     1 | 50k Ω variable resistor Bourns 3296W  |
| R15                |     1 | 200k Ω variable resistor Bourns 3296W |
| R16                |     1 | 100k Ω variable resistor Bourns 3296W |
| R18                |     1 | 110 Ω ±5% resistor (0603)             |
| R20                |     1 | 0 Ω resistor (0402)                   |
| R23                |     1 | 15 Ω ±5% resistor (0603)              |
|                    |       | Ω ±1% resistors (0402)                |
| U1                 |     1 | MAX3663 24-pin QFN                    |
| U2                 |     1 | MAX495ESA 8-pin SOIC                  |
| VCC, GND, TP1-TP13 |    15 | Test points                           |
| None               |     1 | MAX3663 data sheet                    |
| None               |     1 | MAX3663ETG EV kit PC board, rev A     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

<!-- image -->

Features

- ♦ Fully Assembled and Tested
- ♦ +3.3V or +5V Operation
- ♦ On-Board Input Termination
- ♦ Independent Electrical Monitoring of Modulation and Bias Currents

## Ordering Information

| PART         | TEMP RANGE         | IC PACKAGE   |
|--------------|--------------------|--------------|
| MAX3663EVKIT | -40 ° C to +85 ° C | 24 QFN       |

## MAX3663 Evaluation Kit

## Component Modifications for Optical Configuration

| DESIGNATION   |   QTY | DESCRIPTION                       |
|---------------|-------|-----------------------------------|
| D3            |     1 | User-supplied laser diode         |
| J3            |     1 | Remove                            |
| L2            |     1 | Ferrite bead Murata BLM18HG601SN1 |
| R5            |     1 | Remove                            |
| R13           |     1 | Remove                            |
| R19           |     1 | 20 Ω ±5% resistor (0402)          |
| R20           |     1 | 5 Ω ±5% resistor (0402)           |
| R22           |     1 | Remove                            |
| R23           |     1 | Remove                            |

## Quick Start

## Electrical Setup (Default)

In  the  electrical  configuration, an APC test circuit is included to emulate a semiconductor laser with a monitor photodiode. Monitor diode current is provided by Q1, which is controlled by an operational amplifier (U2). The APC test circuit, consisting of U2 and Q1, applies the simulated monitor diode current to the MAX3663's MD pin. The ratio of IBIAS / IMD is R24 / R23 = 100. To ensure proper operation in the electrical configuration, set up the evaluation board as follows:

- 1) Verify that inductor L2 is not installed.
- 2) Shunt JU4 to ground to enable the output.

Note: When performing the following resistance checks, manually set the ohmmeter to a high range to avoid forward biasing the on-chip ESD protection diodes.

- 3) Shunt JU2 to R14. Adjust R14, the MOD (RMODSET) potentiometer, for 10k Ω resistance between pins 2 and 3 (test point 5 and ground).
- 4) Shunt JU1 to R15. Adjust R15, the BIAS (RBIASMAX) potentiometer, for 10k Ω resistance between pins 2 and 3 (test point 4 and ground).
- 5) Shunt JU3 to R16. Adjust R16, the APC (RAPCSET) potentiometer, for 10k Ω resistance between pins 2 and 3 (test point 6 and ground).
- 6) Power up the board with a +3.3V supply.
- 7) Apply a differential input signal (max amplitude ≤ 800mV per side) to J1 and J2 (DATA+ and DATA-).
- 8) Attach a high-speed oscilloscope with 50 Ω inputs to J3.
- 9) Adjust RBIASMAX (R15) and RAPCSET (R16) until the desired laser bias current is achieved (refer to the note in the Applications Information section of the MAX3663 data sheet).
- 10) Adjust RMODSET (R14) until the desired laser-modulation current is achieved.

Note: See the Adjustment and Control Descriptions table.

## Optical Setup

For optical operation, the electrical APC test circuit must be disabled. For optical evaluation of the MAX3663, configure the EV kit as described in the Component Modifications for Optical Configuration table:

- 1) Shunt JU4 to ground to enable the output.
- 2) Connect a TO-style header laser and monitor diode (Figure 1) as follows:
- Keeping the leads to the laser diode as short as possible, connect the laser diode on the component side of the board between R20 and VCC with the cathode connected to R20 and the anode connected to VCC.
- Connect the monitor diode on the underside of the the board with the anode connected to the MAX3663's MD pin and the cathode connected to VCC.

Note: When performing resistance checks, manually set the ohmmeter to a high range to avoid forward biasing the on-chip ESD protection diodes.

- 3) Shunt JU2 to R14. Adjust R14, the MOD (RMODSET) potentiometer, for maximum resistance between pins 2 and 3 (test point 5 and ground).
- 4) Shunt JU1 to R15. Adjust R15, the BIAS (RBIASMAX) potentiometer, for maximum resistance between pins 2 and 3 (test point 4 and ground).
- 5) Shunt JU3 to R16. Adjust R16, the APC (RAPCSET) potentiometer, for desired optical power. (Refer to the Design Procedure section of the MAX3663 data sheet.)
- 6) Power up the board with a +3.3V supply.
- 7) Apply a differential input signal ( ≤ 800mV per side) to J1 and J2 (DATA+ and DATA-).
- 8) Attach the laser-diode output to an optical/electrical converter.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- 9) Adjust R15 until LED D1 is no longer illuminated. Laser power can be monitored at the laser diode with an optical/electrical converter (refer to the note in  the Applications Information section of the MAX3663 data sheet).

See Quick Start first.

| COMPONENT   | NAME                      | FUNCTION                                                                                                                                                                                                                                |
|-------------|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D1          | APC Fail Indicator LED    | Refer to the Design Procedure section of the MAX3663 data sheet. Set the APC current, and then increase the bias current until the LED goes off (the LED is illuminated when the APC loop is open and off when the APC loop is closed). |
| J3          | Electrical Output SMA     | Electrical Output. Remove for optical operation.                                                                                                                                                                                        |
| JU1         | R BIASMAX Selector        | Selects R BIASMAX resistor. Shunt to supplied potentiometer R15 or to fixed resistor R17.                                                                                                                                               |
| JU2         | R MODSET Selector         | Selects R MODSET resistor. Shunt to supplied potentiometer R14 or to fixed resistor R25.                                                                                                                                                |
| JU3         | R APCSET Selector         | Selects R APCSET resistor. Shunt to supplied potentiometer R16 or to fixed resistor R4.                                                                                                                                                 |
| JU4         | OUTPUT DISABLE            | Enable/Disable the Output Currents. Shunt to V CC to disable the part. Shunt to ground or leave open to enable the part.                                                                                                                |
| R14         | R MODSET                  | Laser Modulation Current Adjustment                                                                                                                                                                                                     |
| R15         | R BIASMAX                 | Laser Bias-Current Adjustment. In open-loop mode, R15 adjusts the laser bias current. In closed-loop operation, R15 adjusts the maximum laser bias current.                                                                             |
| R16         | R APCSET                  | Automatic Power-Control Adjustment. For closed-loop operation, R16 adjusts the monitor-diode current level.                                                                                                                             |
| TP1         | Fail Indicator Test Point | TTL low level indicates a failure in the APC loop.                                                                                                                                                                                      |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3663 Evaluation Kit

- 10) Adjust R14 until the desired optical amplitude is achieved. Optical amplitude can be observed on an oscilloscope connected to an optical/electrical converter.

## Adjustment and Control Descriptions

## MAX3663 Evaluation Kit

Figure 1. Attachment of Laser Diode/Monitor Diode to MAX3663 EV Kit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3663 Evaluation Kit

Figure 2. MAX3663 EV Kit Schematic-Electrical Configuration

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3663 Evaluation Kit

Figure 3. MAX3663 EV Kit Schematic-Optical Configuration

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3663 Evaluation Kit

<!-- image -->

Figure 4. MAX3663 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3663 Evaluation Kit

Figure 5. MAX3663 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 6. MAX3663 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 7. MAX3663 EV Kit PC Board Layout-Ground Plane

<!-- image -->

## MAX3663 Evaluation Kit

Figure 8. MAX3663 EV Kit PC Board Layout-Power Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9