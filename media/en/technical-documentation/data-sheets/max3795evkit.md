<!-- lastmod 2022-08-02 -->
<!-- image -->

MAX3795 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ General Description

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Features

The MAX3795 evaluation kit (EV kit) is an assembled demonstration board that provides complete optical and electrical evaluation of the MAX3795 VCSEL driver. The output of the EV kit is interfaced to an SMA connector that can be connected to a 50 Ω terminated oscilloscope. A site for a common cathode VCSEL is provided to allow optical testing.

| DESIGNATION                      |   QTY | DESCRIPTION                                        |
|----------------------------------|-------|----------------------------------------------------|
| C1, C2, C4-C9, C11-C13, C15- C17 |    14 | 0.01 µ F 10% ceramic capacitor (0402)              |
| C3                               |     1 | 0.047 µ F 10% ceramic capacitor (0402)             |
| C10                              |     1 | OPEN                                               |
| C14                              |     1 | 10 µ F ceramic capacitor (0805)                    |
| C18                              |     1 | 10 µ F 10% tantalum capacitor, case B              |
| C19, C20                         |     2 | OPEN*                                              |
| D1                               |     1 | VCSEL laser and photodiode*                        |
| D2                               |     1 | LED, red T1 package                                |
| J1-J7                            |     7 | SMA connectors, tab contact, Johnson 142-0701- 851 |
| JU1-JU7, JU10, JU12-JU13         |    11 | 2-pin header, 0.1in centers                        |
| JU14                             |     1 | 3-pin header, 0.1in centers                        |
| None                             |    12 | Shunts                                             |
| L1-L3                            |     3 | Ferrite Bead, Murata BLM18HD102SN1 (0603)          |
| L4                               |     1 | 1.2 µ H inductor (1008LS) Coilcraft 1008CS-122XKBC |
| Q1, Q2                           |     2 | NPN transistor (SOT23) Zetex FMMT491A              |

- Fully Assembled and Tested
- Single +3.3V Power Supply Operation
- Allows Optical and Electrical Evaluation

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART         | TEMP RANGE     | IC-PACKAGE   |
|--------------|----------------|--------------|
| MAX3795EVKIT | -40°C to +85°C | 24 Thin QFN  |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component List

| DESIGNATION                                    |   QTY | DESCRIPTION                           |
|------------------------------------------------|-------|---------------------------------------|
| R1, R15                                        |     2 | 50k Ω variable resistor Bourns 3296W  |
| R2                                             |     1 | 10k Ω variable resistor Bourns 3296W  |
| R14                                            |     1 | 20k Ω variable resistor Bourns 3296W  |
| R16                                            |     1 | 500k Ω variable resistor Bourns 3296W |
| R3                                             |     1 | 402 Ω 1% resistor (0402)              |
| R4                                             |     1 | 2.49k Ω 1% resistor (0402)            |
| R5, R12                                        |     2 | 499 Ω 1% resistor (0402               |
| R6, R13, R28                                   |     3 | 10.0k Ω 1% resistor (0402)            |
| R7, R10                                        |     2 | OPEN*                                 |
| R8                                             |     1 | 4.75k Ω 1% resistor (0402)            |
| R9, R11                                        |     2 | 49.9 Ω 1% resistor (0402)             |
| R26                                            |     1 | 10 Ω 1% resistor (0402)               |
| R27                                            |     1 | 1.0k Ω 1% resistor (0402)             |
| R34                                            |     1 | 1.0k Ω 1% resistor (0402)             |
| R35                                            |     1 | 15k Ω 1% resistor (0402)              |
| R36                                            |     1 | 1.69k Ω 1% resistor (0402)            |
| R51, R53, R56-57                               |     4 | 806 Ω 1% resistor (0402)              |
| TP1-TP3, TP5 TP6-9, TP11-12, TP13-15, TP20- 21 |    15 | Test Point                            |
| U1                                             |     1 | MAX3795ETG (24 QFN)                   |
| U2                                             |     1 | MAX495 (8 SO)                         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Com ponent   Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-946-0690 | 803-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Murata     | 814-237-1431 | 814-238-0490 |
| Zetex      | 516-543-7100 | 516-864-7630 |

Note: Please indicate that you are using the MAX3795 when contacting these component suppliers.

<!-- formula-not-decoded -->

## Electric al Evaluat ion

In the electrical configuration, an automatic power control (APC) test circuit is included to emulate a semiconductor laser with a monitor photodiode. Monitor diode current is provided by transistor Q1, which is controlled by an operational amplifier (U2). The APC test circuit, consisting of U2 and Q1, applies the simulated monitor diode current to the MD pin of the MAX3795. To ensure proper operation in the electrical configuration, set up the evaluation board as follows:

- 1) Place shunts on JU4, JU5, JU6, JU7, JU10, JU13 and JU14 (Refer to Table 1 for details).
- 2) Remove shunts JU1 and JU2 (Refer to table 1 for detail).
- 3) To enable the outputs, connect TX\_DISABLE to GND by placing a shunt on JU3.

Note: When performing the following resistance checks auto ranging DMMS may forward bias the on-chip ESD protection and cause inaccurate measurements. To avoid this manually set the DMM to a high range.

- 4) Adjust R15, the RBIASSET potentiometer, for 2.5k Ω resistance between TP14 (BIASSET) and ground.
- 5) Adjust R1, the RPWRSET potentiometer, for 10k Ω resistance between TP2 (REF) and TP12 (MD).
- 6) Remove JU12 or Adjust R14, the RPEAKSET potentiometer, for 20k Ω resistance between TP15 (PEAKSET) and ground, to disable peaking.
- 7) Adjust R16, the RTC potentiometer, for 0 Ω resistance between TP7 (TC1) and TP8 (TC2), to disable temperature compensation.
- 8) Adjust R2, the RMODSET potentiometer, for 10k Ω resistance between TP9 (MODSET) and ground.
- 9) Apply a differential input signal (250mVP-P to 2400mVP-P) between SMA connectors J5 and J7 (IN+ and IN-).
- 10)  Attach a high-speed oscilloscope with a 50 Ω input to the SMA connector J6 (OUT).
- 11)  Connect a +3.3V supply between TP20 (VCC) and TP21 (GND). Set the current limit to about 200mA. Adjust the power supply until the voltage between TP11 and ground is +3.3V.
- 12)  Adjust R1 (RPWRSET) until desired laser bias current is achieved.

<!-- formula-not-decoded -->

- 13)  The MD and BIAS currents can be monitored at TP1 (VPWRMON) and TP3 (VBIASMON) using the equations below:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Note: If the voltage at TP1 exceeds VPMTH (typical 0.8V) or TP3 exceeds VBMTH (typical 0.8V), the FAULT signal will be asserted and latched.

- 14)  Adjust R2 until the desired laser modulation current is achieved.

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

- 15)  If peaking is desired, Install JU12. Adjust R14 (RPEAKSET) until the desired amount of peaking is achieved.

## Optical Evaluation

For optical evaluation of the MAX3795, configure the evaluation kit as follows:

- 1) Place shunts on JU2, JU6, JU7, JU13 and JU14 (Refer to Table 1 for details).
- 2) Remove components L2 and C9. Remove the shunts from JU1, JU4 and JU5.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 3) Install a 0 Ω resistor at R7 to connect the anode of the VCSEL to the output.
- 4) To enable the outputs, connect TX\_DISABLE to GND by placing a shunt on JU3.
- 5) Connect a common cathode VCSEL as shown in figure 1. Keep leads short to reduce reflection.

Note: When performing the following resistance checks auto ranging DMMS may forward bias the on-chip ESD protection and cause inaccurate measurements. To avoid this manually set the DMM to a high range.

- 6) Adjust R15, the RBIASSET potentiometer, for 2.5k Ω resistance between TP14 (BIASSET) and ground.
- 7) Adjust R1, the RPWRSET potentiometer, for 10k Ω resistance between TP2 (REF) and TP12 (MD).
- 8) Open JU12 or adjust R14, the RPEAKSET potentiometer, for 20k Ω resistance between TP10 (PEAKSET) and ground, to disable peaking.
- 9) Adjust R16, the RTC potentiometer, for 0 Ω resistance between TP7 (TC1) and TP8 (TC2), to disable temperature compensation.
- 10)  Adjust R2, the RMODSET potentiometer, for 10k Ω resistance between TP9 (MODSET) and ground.
- 11)  Apply a differential input signal (250mVP-P to 2400mVP-P) between SMA connectors J5 and J7 (IN+ and IN-).
- 12)  Attach the VCSEL fiber connector to an optical/electrical converter.
- 13)  Connect a +3.3V supply between TP20 (VCC) and TP21 (GND). Set the current limit to

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 200mA. Adjust the power supply until the voltage between TP11 and ground is +3.3V.
- 14)  Adjust R1 (RPWRSET) until desired average optical power is achieved.
- 15)  The MD and BIAS currents can be monitored at TP1 (VPWRMON) and TP3 (VBIASMON) using the equations below:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Note: If the voltage at TP1 exceeds VPMTH (typical 0.8V) or TP3 exceeds VBMTH (typical 0.8V), the FAULT signal will be asserted and latched.

- 16)  Adjust R2 (RMODSET) until the desired optical amplitude is achieved. Optical amplitude can be observed on an oscilloscope connected to an optical/electrical converter. VCSEL overshoot and ringing may be improved by appropriate selection of R10 and C10.
- 16)  The falling edge of the optical waveform may improve with peaking. Install JU12 and adjust R14 (RPEAKSET) until the desired amount of peaking is achieved.

## MAX3795 Evaluation Kit

Table 1. Adjustment and Control Descriptions (see Quick Start)

| COMPONENT   | NAME            | FUNCTION                                                                                                                                                   |
|-------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1         | COMP            | Enables/disables the APC circuit. Remove shunt to enable APC circuit.                                                                                      |
| JU2         | PHOTODIODE      | Installing a shunt will connect the photodiode of the VCSEL to the MD pin. Used when a VCSEL is installed.                                                 |
| JU3         | TX_DISABLE      | Enables/disables the output currents. Install a shunt to enable output currents.                                                                           |
| JU4         | IPD             | Determines the gain of the photodiode emulator. When JU4 is open the gain is 0.02 A/A. When JU4 is shunted the gain is 0.12 A/A.                           |
| JU5         | APC_OPEN        | Installing a shunt connects the electrical output of the part to the emulation circuit.                                                                    |
| JU6         | FAULT           | Installing a shunt enables the external fault indicator circuit.                                                                                           |
| JU7         | SQUELCH         | Installing a shunt enables the squelch function.                                                                                                           |
| JU10        | VCCEXT          | Installing a shunt provides power to the emulation and fault indicator circuits.                                                                           |
| D2          | Fault Indicator | LED is illuminated when a fault condition has occurred (Refer to the Detailed Description section of the MAX3740 data sheet).                              |
| R1          | R PWRSET        | Adjusts transmit optical power to be maintained by the APC loop.                                                                                           |
| R2          | R MODSET        | Adjusts the laser modulation current.                                                                                                                      |
| R14         | R PEAKSET       | Adjusts the peaking for the falling edge of the VCSEL.                                                                                                     |
| R15         | R BIASSET       | In closed-loop configuration it adjusts the maximum bias current available to the APC. In open-loop configuration it adjusts the bias level of the output. |
| R16         | R TC            | Adjusts the temperature compensation of the modulation current.                                                                                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

✁

✁

✁

✁

/a0

/a0

<!-- image -->

/a0

Figure 1.  MAX3795 EV Kit Schematic

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

✁

✁

✁

✁

✁

✁

/a0

✁

/a0

/a0

/a0

✁

/a0

/a0

/a0

/a0

/a0

✁

/a0

✁

✁

/a0

✁

/a0

/a0

/a0

/a0

/a0

/a0

/a0

✁

/a0

✁

/a0

/a0

<!-- image -->

Figure 2. MAX3795 EV Kit PC Component Placement Guide-Component Side

Figure 3. MAX3795 EV Kit PC Board LayoutComponent Side

<!-- image -->

Figure 4. MAX3795 EV Kit PC Board LayoutGround Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

✂

<!-- image -->

Figure 5. MAX3795 EV Kit PC Board LayoutPower Plane

<!-- image -->

Figure 6. MAX3795 EV Kit PC Board LayoutSolder Side

<!-- image -->

6