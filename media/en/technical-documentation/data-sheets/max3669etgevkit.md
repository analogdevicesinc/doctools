<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX3669ETG evaluation kit (EV kit) is an assembled demonstration board that provides easy optical or electrical  evaluation  of  the  MAX3669ETG, a 622Mbps laser driver with current monitors and automatic power control (APC) circuitry. Although the MAX3669ETG EV kit is shipped in the electrical configuration, this EV kit also provides configuration instructions for optical operation.

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-448-9411 | 843-448-1943 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Murata     | 770-436-1300 | 770-436-3030 |
| Zetex      | 631-360-2222 | 631-360-8222 |

Note: Please indicate that you are using the MAX3669ETG when contacting these component suppliers.

## Component List for Electrical Configuration

| DESIGNATION          |   QTY | DESCRIPTION                                                   |
|----------------------|-------|---------------------------------------------------------------|
| C1, C2, C6, C12, C20 |     5 | 0.01µF ±10% ceramic capacitors (0402)                         |
| C4, C7, C10, C11     |     4 | 1µF ±10% ceramic capacitors (0603)                            |
| C5                   |     1 | Do not install                                                |
| C8                   |     1 | 100pF ±10% ceramic capacitor (0402)                           |
| C16                  |     1 | 0.1µF ±10% ceramic capacitor (0603)                           |
| C19                  |     1 | 10µF ±10%, 10V min tantalum capacitor, case B AVX TAJC106K016 |
| C21                  |     1 | 5pF ±5% ceramic capacitor (0402)                              |
| D1                   |     1 | LED                                                           |
| J1, J2, J3           |     3 | SMA connectors, edge mount                                    |
| L3                   |     1 | 1.2µH inductor Coilcraft 1008LS-122XKBC                       |
| P1                   |     1 | 2-pin header, 0.1in centers                                   |
| None                 |     1 | Shunt for P1                                                  |
| Q1                   |     1 | PNP transistor Zetex FMMT591A                                 |
| R1, R2, R24          |     3 | 1.5k Ω ±5% resistors (0402)                                   |
| R3                   |     1 | 1k Ω ±5% resistor (0603)                                      |
| R5                   |     1 | 12.4 Ω ±1% resistor (0402)                                    |

| DESIGNATION                            |   QTY | DESCRIPTION                           |
|----------------------------------------|-------|---------------------------------------|
| R6, R7, R21                            |     3 | 84.5 Ω ±1% resistors (0603)           |
| R8, R9                                 |     2 | 124 Ω ±1% resistors (0603)            |
| R10, R11                               |     2 | 20 Ω ±1% resistors (0402)             |
| R12                                    |     1 | 10 Ω ±1% resistor (0402)              |
| R13, R22                               |     2 | 0 Ω resistors (0603)                  |
| R14                                    |     1 | 50k Ω variable resistor Bourns 3296W  |
| R15                                    |     1 | 200k Ω variable resistor Bourns 3296W |
| R16                                    |     1 | 100k Ω variable resistor Bourns 3296W |
| R18                                    |     1 | 110 Ω ±5% resistor (0603)             |
| R20                                    |     1 | 0 Ω resistor (0402)                   |
| R23                                    |     1 | 15 Ω ±5% resistor (0603)              |
| R26, R28                               |     2 | 392 Ω ±1% resistors (0402)            |
| R27, R29                               |     2 | Do not install                        |
| VCC, GND, TP1, TP4, TP5, TP6, TP8-TP11 |    10 | Test points                           |
| U1                                     |     1 | MAX3669ETG (24-pin QFN)               |
| U3                                     |     1 | MAX495ESA (8-pin SO)                  |
| None                                   |     1 | MAX3669 data sheet                    |
| None                                   |     1 | MAX3669ETG EV kit PC board, rev A     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

Features

- ♦ Fully Assembled and Tested
- ♦ +3.3V or +5V Operation
- ♦ On-Board Input Termination
- ♦ Independent Electrical Monitoring of Modulation and Bias Currents

## Ordering Information

| PART            | TEMP RANGE         | IC PACKAGE   |
|-----------------|--------------------|--------------|
| MAX3669ETGEVKIT | -40 ° C to +85 ° C | 24 QFN       |

## MAX3669ETG Evaluation Kit

## Component Modifications for Optical Configuration

| DESIGNATION   |   QTY | DESCRIPTION                       |
|---------------|-------|-----------------------------------|
| J3            |     1 | Remove                            |
| L2            |     1 | Ferrite bead Murata BLM18HG601SN1 |
| R5            |     1 | Remove                            |
| R13           |     1 | Remove                            |
| R19           |     1 | 20 Ω ±5% resistor (0402)          |
| R20           |     1 | 5 Ω ±5% resistor (0402)           |
| R22           |     1 | Remove                            |
| R23           |     1 | Remove                            |
| U2            |     1 | User-supplied laser diode         |

## Quick Start

## Electrical Setup (Default)

In  the  electrical  configuration, an APC test circuit is included to emulate a semiconductor laser with a monitor photodiode. Monitor diode current is provided by Q1, which is controlled by an operational amplifier (U3). The APC test circuit, consisting of U3 and Q1, applies the simulated monitor diode current to the MAX3669ETG's MD pin. The ratio of IBIAS / IMD is R24 / R23 = 100. To ensure proper operation in the electrical configuration, set up the evaluation board as follows:

- 1) Verify inductor L2 is not installed.
- 2) Remove the shunt from P1 to enable the output.

Note: When performing the following resistance checks, manually set the ohmmeter to a high range to avoid forward biasing the on-chip ESD protection diodes.

- 3) Adjust R14, the MOD (RMODSET) potentiometer, for 10k Ω resistance between pins 2 and 3 (test point 5 and ground).
- 4) Adjust R15, the BIAS (RBIASMAX) potentiometer, for 10k Ω resistance between pins 2 and 3 (test point 4 and ground).
- 5) Adjust R16, the APC (RAPCSET) potentiometer, for 10k Ω resistance between pins 2 and 3 (test point 6 and ground).
- 6) Power up the board with a +3.3V supply.
- 7) Apply a differential input signal (max amplitude ≤ 800mV per side) to J1 and J2 (DATA+ and DATA-).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 8) Attach a high-speed oscilloscope with 50 Ω inputs to J3.
- 9) Adjust RBIASMAX (R15) and RAPCSET (R16) until the desired laser-bias current is achieved (refer to the note in the Applications Information section of the MAX3669 data sheet).
- 10) Adjust RMODSET (R14) until the desired laser-modulation current is achieved.

Note: See the Adjustment and Control Descriptions table.

## Optical Setup

For optical operation, the electrical APC test circuit must  be  disabled.  For  optical  evaluation  of  the MAX3669ETG, configure the EV kit as described in Component Modifications for Optical Configuration :

- 1) Remove the shunt from P1 to enable the output.
- 2) Connect a TO-style header laser and monitor diode (Figure 1) as follows:
- Keeping the leads to the laser diode as short as possible, connect the laser diode on the component side of the board between R20 and VCC with the cathode connected to R20 and the anode connected to VCC.
- Connect the monitor diode on the underside of the the board with the anode connected to the MAX3669ETG's MD pin and the cathode connected to VCC.

Note: When performing resistance checks, manually set the ohmmeter to a high range to avoid forward biasing the on-chip ESD protection diodes.

- 3) Adjust R14, the MOD (RMODSET) potentiometer, for maximum resistance between pins 2 and 3 (test point 5 and ground).
- 4) Adjust R15, the BIAS (RBIASMAX) potentiometer, for maximum resistance between pins 2 and 3 (test point 4 and ground).
- 5) Adjust R16, the APC (RAPCSET) potentiometer, for desired  optical  power.  (Refer  to  the Design Procedure section of the MAX3669 data sheet.)
- 6) Power up the board with a +3.3V supply.
- 7) Apply a differential input signal ( ≤ 800mV per side) to J1 and J2 (DATA+ and DATA-).
- 8) Attach the laser-diode output to an optical/electrical converter.

<!-- image -->

## MAX3669ETG Evaluation Kit

- 9) Adjust R15 until LED D1 is no longer illuminated. Laser power can be monitored at the laser diode with an optical/electrical converter (refer to the note in  the Applications Information section of the MAX3669 data sheet).

See Quick Start first.

| COMPONENT   | NAME                      | FUNCTION                                                                                                                                                                                                  |
|-------------|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D1          | APC Fail Indicator LED    | Refer to the Design section of the MAX3669 data sheet. Set APC current; then increase bias current until LED goes off (LED is illuminated when the APC loop is open and off when the APC loop is closed). |
| J3          | Electrical Output SMA     | Electrical output. Remove for optical operation.                                                                                                                                                          |
| P1          | OUTPUT DISABLE            | Enable/disable the output currents. Shunting disables the part. Remove shunt for normal operation.                                                                                                        |
| R14         | RMODSET                   | Laser modulation current adjustment                                                                                                                                                                       |
| R15         | RBIASMAX                  | Laser-bias current adjustment. In open-loop mode, R15 adjusts the laser-bias current. In closed-loop operation, R15 adjusts the maximum laser-bias current.                                               |
| R16         | RAPCSET                   | Automatic power-control adjustment. For closed-loop operation, R16 adjusts the monitor-diode current level.                                                                                               |
| TP1         | Fail Indicator Test Point | TTL low level indicates a failure in the APC loop.                                                                                                                                                        |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 10) Adjust R14 until the desired optical amplitude is achieved. Optical amplitude can be observed on an oscilloscope connected to an optical/electrical converter.

## Adjustment and Control Descriptions

## MAX3669ETG Evaluation Kit

Figure 1. Attachment of Laser Diode/Monitor Diode to MAX3669ETG EV Kit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3669ETG Evaluation Kit

Figure 2. MAX3669ETG EV Kit Schematic-Electrical Configuration

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3669ETG Evaluation Kit

Figure 3. MAX3669ETG EV Kit Schematic-Optical Configuration

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3669ETG Evaluation Kit

<!-- image -->

<!-- image -->

Figure 4. MAX3669ETG EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 6. MAX3669ETG EV Kit PC Board Layout-Solder Side

Figure 5. MAX3669ETG EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 7. MAX3669ETG EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3669ETG Evaluation Kit

Figure 8. MAX3669ETG EV Kit PC Board Layout-Power Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600