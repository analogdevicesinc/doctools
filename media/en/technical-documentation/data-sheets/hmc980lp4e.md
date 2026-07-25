<!-- lastmod 2022-03-10 -->
<!-- image -->

## FEATURES

- Automatic gate voltage adjustment (no calibration)
- Supply voltage (5 V to 16.5 V)
- Bias enhancement or depletion mode devices
- Adjustable drain current up to 1.6 A
- Sink or source gate current
- Optional internal negative voltage generation
- Fast enable/disable
- TRIGOUT output for daisy chain
- Power-up and power-down sequencing
- Overcurrent/undercurrent alarm with hysteresis
- 24-lead, 4 mm × 4 mm LFCSP package: 16 mm 2

## APPLICATIONS

- Microwave radio and very small aperture terminals (VSATs)
- Military and space
- Test instrumentation
- Fiber optic modulator driver biasing
- CATV laser driver biasing
- Cellular base station
- Wireless infrastructure equipment

## GENERAL DESCRIPTION

The HMC980LP4E is an active bias controller that can automatically adjust the gate voltage of an external amplifier to achieve constant drain current. Using an integrated controller, the HMC980LP4E allows safe power-up/power-down, and disable/enable of an external amplifier, ensuring the safe powering of the amplifier. The HMC980LP4E can be used to bias any enhancement or depletion type Class A amplifier operating with drain voltages from 5 V to 16.5 V and drain currents up to 1.6 A, thus offering a complete biasing solution.

The HMC980LP4E allows stable RF amplifier biasing over supply, temperature, and process variations, and eliminates the required calibration procedures usually employed to prevent RF performance degradation due to variations in amplifier drain current.

The HMC980LP4E is housed in an RoHS compliant 4 mm × 4 mm LFCSP leadless package with an exposed backside pad to improve thermal characteristics.

## [HMC980LP4E](http://www.analog.com/HMC980LP4E)

## High Current, Active Bias Controller

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

## TABLE OF CONTENTS

| Features................................................................ 1 Applications........................................................... 1 Functional Block Diagram......................................1 General Description...............................................1 Specifications........................................................ 3 Electrical Specifications......................................3 Absolute Maximum Ratings...................................4 Thermal Resistance........................................... 4 Electrostatic Discharge (ESD) Ratings...............4 ESD Caution.......................................................4 Pin Configuration and Function Descriptions........ 5 Interface Schematics..........................................7 Typical Performance Characteristics.....................8 Theory of Operation.............................................12 Overview.......................................................... 12   | Supply Voltages................................................13 Supply Sequencing.......................................... 14 Drain Voltage Output........................................14 Setting the Target Drain Current.......................14 MOSFET Series Resistance............................ 14 Enable Input.....................................................14 VG2 Voltage Adjustment..................................14 Self Protection..................................................15 Overcurrent/Undercurrent Alarm......................15 Negative Voltage Generator.............................16 Disabling the Internal Negative Voltage Generator.......................................................16 Changing the Default VNEG Voltage............... 17 Changing the VGATE Threshold Voltage.........17 Design Examples............................................. 18   |                                                                                                                                                               |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Power-Up and Power-Down.............................12                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Enhancement Mode Operation........................ 19                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                               |
| Negative Voltage Generator.............................12                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Recommended HMC980LP4E Circuits............19                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                               |
| VGATE Output Control Loop............................12                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Daisy-Chain Operation.....................................20                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                               |
| Stability.............................................................12                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Higher Drain Current Applications....................20                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                               |
| Secondary Gate Control...................................12                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Reducing External Component Count..............22                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                               |
| External Amplifier Power Sequencing..............12                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Evaluation Board Circuit......................................23                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                                                                                               |
| Overcurrent/Undercurrent Alarm......................12                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Outline Dimensions............................................. 25                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                               |
| Self Protection..................................................12                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Ordering Guide.................................................25                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                               |
| Applications Information...................................... 13                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Evaluation Boards............................................25                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                               |
| Controlling Depletion Mode RF Amplifiers....... 13                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Controlling Depletion Mode RF Amplifiers....... 13                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Controlling Depletion Mode RF Amplifiers....... 13                                                                                                            |
| REVISION HISTORY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | REVISION HISTORY                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | REVISION HISTORY                                                                                                                                              |
| 3/2022-Rev. B to Rev. C                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | 3/2022-Rev. B to Rev. C                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 3/2022-Rev. B to Rev. C                                                                                                                                       |
| Changes to Table 2..........................................................................................................................................4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Changes to Table 2..........................................................................................................................................4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Changes to Table 2..........................................................................................................................................4 |

## SPECIFICATIONS

## ELECTRICAL SPECIFICATIONS

TA = 25°C, VDD = 12 V, VDIG, EN = 3.3 V, biasing a depletion mode amplifier using the internal negative voltage generator, VNEGFB and VGATEFB pins left floating, unless otherwise noted.

Table 1.

| Parameter                                           | Symbol   | Test Conditions/Comments                  |   Min | Typ         | Max       | Unit   |
|-----------------------------------------------------|----------|-------------------------------------------|-------|-------------|-----------|--------|
| SUPPLY VOLTAGE                                      | V DD     |                                           |     5 |             | 16.5      | V      |
| QUIESCENT CURRENT                                   |          |                                           |       |             |           |        |
| VDD                                                 | I DD     | VDD = 5 V, EN = VDIG                      |       | 19          |           | mA     |
|                                                     |          | VDD = 5 V, EN = ground                    |       | 7.5         |           | mA     |
|                                                     |          | VDD = 12 V, EN = VDIG                     |       | 20          |           | mA     |
|                                                     |          | EN = ground                               |       | 9           |           | mA     |
| VDIG                                                | I DIG    | VDIG = 3.3 V                              |       | 3.5         |           | mA     |
|                                                     |          | VDIG = 5 V                                |       | 6.5         |           | mA     |
| CHARGE PUMP OSCILLATOR FREQUENCY                    | f OSC    |                                           |       | 300         |           | kHz    |
| VOLTAGE REFERENCE (PIN 10)                          | VREF     |                                           |       | 1.44        |           | V      |
| DIGITAL INPUT THRESHOLDS                            |          |                                           |       |             |           |        |
| S0, S1, EN                                          |          | Input voltage (V IN ) = low               |       |             | 1         | V      |
|                                                     |          | V IN = high                               |   1.4 |             |           | V      |
| VDRAIN CHARACTERISTICS                              |          |                                           |       |             |           |        |
| Voltage Range                                       | V DRAIN  |                                           |     5 |             | 16.5      | V      |
| Current Adjustment Range                            | I DRAIN  | S1 = S0 = ground                          |       | 0.05 to 0.3 |           | A      |
|                                                     |          | S1 = ground, S0 = VDIG                    |       | 0.3 to 0.6  |           | A      |
|                                                     |          | S1 = VDIG, S0 = ground                    |       | 0.6 to 1.2  |           | A      |
|                                                     |          | S1 = VDIG, S0 = VDIG                      |       | 1.2 to 1.6  |           | A      |
| Current Change Over Digital Voltage                 | ΔI DRAIN | VDRAIN set to 12 V, I DRAIN set to 400 mA |       | 0.4         |           | %/V    |
| Current Change Over Temperature                     |          |                                           |       | 0.023       |           | %/C    |
| Voltage Change Over Temperature                     | ΔV DRAIN | VDRAIN set to 12 V, I DRAIN set to 400 mA |       | 0.02        |           | %/C    |
| INTERNAL NEGATIVE VOLTAGE GENERATOR CHARACTERISTICS |          |                                           |       |             |           |        |
| Negative Voltage Output                             | V NEG    |                                           |       | -2.46       |           | V      |
| Current Capability                                  | I NEG    |                                           |     0 |             | 60        | mA     |
| VGATE CHARACTERISTICS                               |          |                                           |       |             |           |        |
| Gate Current Supply                                 | I GATE   |                                           |    -4 |             | +4        | mA     |
| VG2 CHARACTERISTICS                                 |          |                                           |       |             |           |        |
| VG2 Current Supply                                  | I G2     | VG2 < 2 V                                 |  -0.1 |             | +0.1      | mA     |
|                                                     |          | 6 V > VG2 > 2 V                           |    -1 |             | +1        | mA     |
|                                                     |          | VG2 > 6 V                                 |    -5 |             | +5        | mA     |
| VG2 Adjustment Range                                | V G2     |                                           |     1 |             | VDD - 1.3 | V      |
| VDIG CHARACTERISTICS                                |          |                                           |       |             |           |        |
| Voltage Range                                       | V DIG    |                                           |   3.3 |             | 5         | V      |
| VDIG Quiescent Current                              | I DIG    | VDD = 12 V, VDIG = EN = 3.3 V             |       | 3.5         |           | mA     |
| SWITCH CHARACTERISTICS                              |          |                                           |       |             |           |        |
| Internal Switch Resistance                          | R DS_ON  | S1 = S0 = ground                          |       | 2.8         |           | Ω      |
|                                                     |          | S1 = ground, S0 = VDIG                    |       | 1.55        |           | Ω      |
|                                                     |          | S1 = VDIG, S0 = ground                    |       | 0.85        |           | Ω      |
|                                                     |          | S1 = VDIG, S0 = VDIG                      |       | 0.7         |           | Ω      |

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter 1                                                                      | Rating                     |
|----------------------------------------------------------------------------------|----------------------------|
| VDD                                                                              | 18 V                       |
| S0, S1, EN, VREF, VNEGFB, VGATEFB, TRIGOUT, ISENSE, ALML, ISET, ALMH, FIXBIAS    | -0.5 V to VDIG + 0.5 V     |
| CP_VDD                                                                           | VDD - 0.5 V to VDD + 0.5 V |
| VG2_CONT                                                                         | -0.5 V to VDD + 0.5 V      |
| VDIG                                                                             | 5.5 V                      |
| VNEG                                                                             | -4 V to ground             |
| Junction Temperature                                                             | 125°C                      |
| Continuous Power Dissipation (P DISS ) (T = 85°C, Derate 94.79 mW/°C Above 85°C) | 3.8W                       |
| Storage Temperature Range                                                        | -65°C to +150°C            |
| Operating Temperature Range                                                      | -40°C to +85°C             |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JA is the natural convection junction to ambient thermal resistance measured in a one cubic foot sealed enclosure. θ JC is the junction to case thermal resistance.

## Table 3. Thermal Resistance

| Package Type   |   θ JA |   θ JC | Unit   |
|----------------|--------|--------|--------|
| HCP-24-2 1     |   49.4 |   10.6 | °C/W   |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD sensitive devices in an ESD protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

## ESD Ratings for HMC980LP4E

## Table 4. HMC980LP4E, 24-Lead LFCSP

| ESD Model   |   Withstand Threshold (V) | Class   |
|-------------|---------------------------|---------|
| HBM         |                      1000 | 1C      |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pin Configuration

<!-- image -->

Table 5. Pin Function Descriptions

| Pin No.   | Mnemonic   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|-----------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 2      | VDD        | Supply Voltage Pins. The voltage applied to VDD must be higher than the intended voltage on the VDRAIN output to account for the drop across the series resistance of the internal metal-oxide semiconductor field effect transistor (MOSFET). The expected voltage drop can be calculated as shown in the MOSFET Series Resistance section. See Figure 34, Figure 35, and Figure 44 for examples of appropriate voltage levels. Power up VDIG (Pin 9) before powering VDD. Decouple VDD with parallel 4.7 µF and 10 nF capacitors. |
| 3, 4      | S0, S1     | Control Pins. S0 and S1 set the R DS_ON of the VDD to VDRAIN MOSFET. Refer to Table 6 for recommended settings. S0 and S1 have internal pull - up resistors to VDIG.                                                                                                                                                                                                                                                                                                                                                                |
| 5         | EN         | Enable Pin. Bias control loop is enabled when the voltage on the EN pin is pulled above 1.4 V and disabled when pulled below 1 V. EN has an internal pull - up resistor to VDIG.                                                                                                                                                                                                                                                                                                                                                    |
| 6         | ALM        | Overcurrent/Undercurrent Alarm Output. Provides an active high signal referenced to VDIG if the drain current exceeds the upper threshold setting or drops below the lower threshold setting. Refer to the Overcurrent/Undercurrent Alarm section for more details.                                                                                                                                                                                                                                                                 |
| 7         | CP_VDD     | Supply Voltage Pin for the Negative Voltage Generator. Connect this pin to VDD and decouple with a 100 pF capacitor.                                                                                                                                                                                                                                                                                                                                                                                                                |
| 8         | CP_OUT     | Negative Voltage Generator Charge Pump Output. The negative voltage generator requires a 1 µF flying capacitor, a 10 µF reservoir capacitor, and two diodes to operate. See the Negative Voltage Generator section for more details.                                                                                                                                                                                                                                                                                                |
| 9         | VDIG       | Supply Voltage Pin for the Digital Sections of the HMC980LP4E. Connect a supply voltage to VDIG between 3.3 V and 5 V. Power VDIG before powering VDD (Pin 1 and Pin 2) or VNEG (Pin 15). Decouple VDIG with parallel 4.7 µF and 10 nF capacitors.                                                                                                                                                                                                                                                                                  |
| 10        | VREF       | 1.44 V Reference Voltage Output from the Internal Low Dropout (LDO) Regulator. VREF is used to alter the voltages on the VNEG and VGATE pins. See the Changing the Default VNEG Voltage and the Changing the VGATE Threshold Voltage sections for more details.                                                                                                                                                                                                                                                                     |
| 11        | VNEGFB     | Feedback Pin for Enabling and Regulating the Output of the Negative Voltage Generator. Float VNEGFB to activate the negative voltage generator, and short VNEGFB to ground to disable the negative voltage generator. VNEGFB can also be used to adjust VNEG with an external resistor. See the Changing the Default VNEG Voltage section for more details.                                                                                                                                                                         |
| 12        | VGATEFB    | Feedback Pin for Regulating the VGATE threshold. Float VGATEFB when a depletion mode amplifier is being biased, or short VGATEFB to ground when an enhancement mode amplifier is being biased. VGATEFB can also be used to adjust the VGATE threshold voltage. See the Changing the VGATE Threshold Voltage section for more details.                                                                                                                                                                                               |
| 13        | VG2_CONT   | Control Voltage Input. VG2_CONT sets the level for the second gate output pin, VG2. Use a resistor divider between VDD and ground to set the voltage. VG2 is typically 1.3 V lower than VG2CONT. See the VG2 Voltage Adjustment section for more details.                                                                                                                                                                                                                                                                           |
| 14        | VG2        | Second Gate Control Output Pin. VG2 is used to drive the secondary gate voltage for amplifiers that require multiple gate voltages. This voltage is fixed and therefore not controlled by the bias loop controller. Note that VG2 can only provide a positive voltage between 1 V and VDD - 1.3 V.                                                                                                                                                                                                                                  |
| 15        | VNEG       | Negative Supply Voltage Input to the Chip. VNEG is supplied from the CP_OUT pin when the negative voltage generator is enabled (see the Negative Voltage Generator section). When the negative voltage generator is disabled, connect VNEG to an external voltage. If using an external voltage, power VNEG after first powering VDIG (Pin 9) and then VDD (Pin 1 and Pin 2). Decouple VNEG with a 10 µF capacitor.                                                                                                                 |
| 16        | VGATE      | Gate Voltage Output Control Pin for Amplifier Under Control. Connect VGATE to the gate or base of the external amplifier. To guarantee stability, a 2.2 μF capacitor must be connected between the gate or base terminal of the external amplifier and ground as close to the amplifier as possible.                                                                                                                                                                                                                                |
| 17, 18    | VDRAIN     | Drain Voltage Output Pins. Connect VDRAIN to the supply terminal of the amplifier under control. Decouple the controlled amplifier with a minimum 10 nF capacitor to ground placed as closely as possible to the VDRAIN or VDD pin of the external amplifier.                                                                                                                                                                                                                                                                       |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Table 5. Pin Function Descriptions

|   Pin No. | Mnemonic     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|-----------|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        19 | TRIGOUT      | Trigger Output Signal. TRIGOUT generates an active high signal referenced to VDIG when the active bias loop stabilizes at the targeted drain current. This signal can be used to trigger the next HMC980LP4E device to turn on if more than one HMC980LP4E is used in a daisy chain. See the Daisy-Chain Operation section and Figure 45 for more details.                                                                                                   |
|        20 | ISENSE       | Amplifier Drain Current Set Pin. Adjust the drain current of the controlled amplifier by connecting a resistor (R SENSE ) from ISENSE to ground. A high precision resistor (for example, 0.5% or ±25 ppm temperature coefficient resistance (TCR) is recommended to ensure optimal bias accuracy.                                                                                                                                                            |
|        21 | ALML         | Low Current Alarm Setting Pin. A precision resistor (for example, 0.5%, ±25 ppm TCR) connected to ISET determines the undercurrent limit at which the ALM output goes high. If the alarm feature is not used, ALML must be shorted to ISET (Pin 22). See Figure 47 for an example circuit with ±6% alarm thresholds.                                                                                                                                         |
|        22 | ISET         | Bias Current Set Pin. The total external resistance from ISET pin to ground must always be within 1% of 5 kΩ. If the ALM feature is used, there must be an extra resistor from ALML (Pin 21) to ground for a total resistance from ISET to ground of 5 kΩ. If the ALML feature is not used, connect ALML (Pin 21) and ALMH (Pin 23) to ISET and connect a 5 kΩ resistor to ground from ISET. See Figure 47 for an example circuit with ±6% alarm thresholds. |
|        23 | ALMH         | High Current Alarm Setting Pin. A precision resistor (for example, 0.5%, ±25 ppm TCR) connected to ISET determines the overcurrent limit at which the ALM output goes high. If the alarm feature is not used, ALMH must be shorted to ISET (Pin 22). See Figure 47 for an example circuit with ±6% alarm thresholds.                                                                                                                                         |
|        24 | FIXBIAS EPAD | Bias Adjustment Pin. Connect a precision 10 kΩ resistor (for example, 0.5%, ±25 ppm TCR) to ground to ensure optimal bias accuracy. Exposed Pad. Connect the EPAD to a ground plane with low thermal and electrical impedance.                                                                                                                                                                                                                               |

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

## INTERFACE SCHEMATICS

<!-- image -->

Figure 3. S1, S0, and EN Interface Schematic (Input)

<!-- image -->

Figure 4. ALM, TRIGOUT Interface Schematic (Output)

<!-- image -->

Figure 5. CP\_OUT Interface Schematic (Output)

<!-- image -->

Figure 6. VREF Interface Schematic (Output)

<!-- image -->

Figure 7. VGATEFB, VNEGFB Interface Schematic (Input)

<!-- image -->

Figure 8. VG2 (Output) and VG2\_CONT (Input) Interface Schematic

<!-- image -->

Figure 9. VGATE Interface Schematic (Output)

<!-- image -->

Figure 10. VDD (Input) and VDRAIN (Output) Interface Schematic

<!-- image -->

Figure 11. ISENSE Interface Schematic (Input)

<!-- image -->

Figure 12. ALML, ISET Interface Schematic (Input)

Figure 13. ALMH Interface Schematic (Input)

<!-- image -->

Figure 14. FIXBIAS Interface Schematic (Input)

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 15. I DRAIN vs. VDIG, HMC637ALP5E Used as External Amplifier, S0 = VDIG, S1 = Ground

<!-- image -->

Figure 16. Power-Up Waveform (Negative Voltage Generator Used and EN Left Floating, HMC637ALP5E Used as External Amplifier)

<!-- image -->

Figure 17. Enable Waveform (Negative Voltage Generator Used, HMC637ALP5E Used as External Amplifier)

<!-- image -->

Figure 18. I DRAIN vs. VDIG, HMC637ALP5E Used as External Amplifier, S0 = VDIG, S1 = VDIG

Figure 19. Shutdown Waveform (Negative Voltage Generator Used and EN Left Floating, HMC637ALP5E Used as External Amplifier)

<!-- image -->

Figure 20. Disable Waveform (Negative Voltage Generator Used, HMC637ALP5E Used as External Amplifier)

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 21. Power-Up Waveform (Negative Voltage Generator Used and EN Controlled, HMC637ALP5E Used as External Amplifier)

<!-- image -->

Figure 22. V DRAIN vs. I DRAIN Across Temperature, VDD = 5 V, VDIG = 3.3 V, S0 = Ground, S1 = Ground

<!-- image -->

Figure 23. V DRAIN vs. I DRAIN Across Temperature, VDD = 16.5 V, VDIG = 5.0 V, S0 = Ground, S1 = VDIG

<!-- image -->

Figure 24. Shutdown Waveform (Negative Voltage Generator Used and EN Controlled, HMC637ALP5E Used as External Amplifier)

Figure 25. V DRAIN vs. I DRAIN Across Temperature, VDD = 16.5 V, VDIG = 5.0 V, S0 = VDIG, S1 = VDIG

<!-- image -->

Figure 26. V DRAIN vs. I DRAIN Across Temperature, VDD = 5 V, VDIG = 3.3 V, S0 = 3.3 V, S1 = Ground

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 27. VNEG Load Regulation at VDD = 5 V

<!-- image -->

Figure 28. VNEG Load Regulation at VDD = 16.5 V

<!-- image -->

Figure 29. VNEG Load Transient, VDD = 5 V

<!-- image -->

Figure 30. VGATE Load Regulation at VDD = 12 V, HMC637ALP5 Used as External Amplifier

Figure 31. VNEG vs. Supply Voltage

<!-- image -->

Figure 32. VNEG Load Transient, VDD = 16.5 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 33. VG2 Load Regulation at VDD = 12 V, HMC637ALP5E Used as External Amplifier

<!-- image -->

## THEORY OF OPERATION

## OVERVIEW

To achieve consistent performance, amplifiers require stable drain current. The HMC980LP4E is a fully integrated biasing solution for amplifiers, which removes the need for discrete biasing. Using an internal feedback loop and a precision external resistor, the automatic gate voltage controller keeps the drain current of the associated amplifier constant over temperature and process variations.

## POWER-UP AND POWER-DOWN

The HMC980LP4E also allows safe power-up and power-down sequencing of the targeted amplifier. The HMC980LP4E can provide the ideal bias solution to virtually any amplifier on the market with a drain current up to 1.6 A and a supply voltage between 5 V and 16.5 V.

## NEGATIVE VOLTAGE GENERATOR

The HMC980LP4E has an integrated negative voltage generator used to create the negative voltage required to drive depletion mode amplifiers. If an external negative supply is already available or an enhancement mode device is targeted, the negative voltage generator can be disabled.

## VGATE OUTPUT CONTROL LOOP

The HMC980LP4E regulates the drain current (I DRAIN ) of the amplifier under bias using the VGATE output, which is connected to the gate bias pin of the external amplifier. The drain current passing through the associated amplifier is sampled and used to automatically adjust the voltage on the VGATE pin to achieve constant drain current through the external amplifier.

This control loop continuously adjusts the VGATE pin voltage to achieve consistent drain current over supply, temperature, and process variations, as well as threshold drifts due to aging. The device to device, temperature, and supply variation of the HMC980LP4E is minimal. Thus, by using an accurate sense resistor connected to the ISENSE pin, expensive calibration procedures in high volume production can be avoided.

The gate control of the HMC980LP4E is designed to both sink and source current into the gate of the targeted amplifier, up to ±4 mA. This unique feature is important to achieve nearly constant drain current through the amplifier while the gate current varies with different input power values.

## STABILITY

The HMC980LP4E allows for stable RF amplifier biasing over supply and temperature variations. The gate control can both sink and source current up to ±4 mA. The gate control is required to compensate for charging the gate current of the amplifier over input power variations.

## SECONDARY GATE CONTROL

The HMC980LP4E also generates a second gate voltage, VG2. VG2 is fixed and can be adjusted through a resistor divider connected to VDD for amplifiers that require a second gate voltage.

## EXTERNAL AMPLIFIER POWER SEQUENCING

To ensure the safety of the external amplifier, the HMC980LP4E provides automatic power-up sequencing. During startup, VDRAIN and VG2 are kept at ground when VGATE is first reduced to VNEG to ensure that the external amplifier is completely pinched off before VDRAIN is applied. When the EN signal is taken high, VDRAIN is then applied and the active bias loop is enabled. After VDRAIN is applied, VG2 is generated and VGATE is increased linearly until the desired drain current is reached.

For power-down and disabling, the same sequencing is applied in reverse order.

## OVERCURRENT/UNDERCURRENT ALARM

The HMC980LP4E has a built in overcurrent and undercurrent alarm feature. If a fault condition arises, ALM goes high, indicating a problem. The current alarm signal provided in the HMC980LP4E does not affect the operation of the controller. This feature is included for monitoring purposes where a system level protection scheme can be implemented with external control circuitry.

## SELF PROTECTION

The HMC980LP4E has a built in sensing feature to protect itself against short-circuit conditions at both the VDRAIN and VNEG pins. When a short-circuit event is detected, VDRAIN and VGATE are both disabled.

## APPLICATIONS INFORMATION

## CONTROLLING DEPLETION MODE RF AMPLIFIERS

Figure 34 and Figure 35 show typical circuits for biasing depletion mode amplifiers using the internal VNEG and an external negative voltage (V EXT ), respectively. The subsequent sections describe how to configure the circuitry around the HMC980LP4E and how to calculate the correct component values.

## SUPPLY VOLTAGES

The HMC980LP4E requires a minimum of two separate supply rails: VDIG and VDD.

Figure 34. Typical Circuit for Controlling a Depletion Mode Amplifier Using the Internal VNEG

<!-- image -->

Figure 35. Typical Circuit for Controlling a Depletion Mode Amplifier Using an External Negative Voltage (V EXT )

<!-- image -->

VDIG (Pin 9, 3.3 V to 5 V) powers the internal logic circuits for the HMC980LP4E. The current drawn on this rail is approximately 3.5 mA.

VDD (Pin 1 and Pin 2, 5 V to 16.5 V) provides the power for the RF amplifier and some of the HMC980LP4E internal circuitry. Depending on the RF amplifier being controlled, the VDD current can be up to 1.6 A.

## APPLICATIONS INFORMATION

## SUPPLY SEQUENCING

To ensure that the HMC980LP4E control circuitry powers up safely and in the correct sequence, it is important to apply the external supply rails in the proper order.

Always apply the VDIG supply (Pin 9) first to the HMC980LP4E. Secondly, apply the VDD (Pin 1 and Pin 2) voltage to the HMC980LP4E. If operating the HMC980LP4E with an external negative voltage on VNEG (see Table 7), apply this voltage to VNEG (Pin 15) last.

After all supply voltages are on, the HMC980LP4E can be enabled by asserting EN (Pin 5) to begin biasing the RF amplifier. Note that EN has an internal pull -up to VDIG.

## DRAIN VOLTAGE OUTPUT

The VDD supply to the HMC980LP4E is connected to the VDRAIN output through an internal MOSFET switch. This MOSFET is controlled through power-up sequencing, which ensures that no voltage is applied to the drain of the RF amplifier until after the gate voltage is pulled down and that the external amplifier is pinched off. Connect the VDRAIN output (Pin 17 and Pin 18) of the HMC980LP4E to the drain (collector) of the RF amplifier.

## SETTING THE TARGET DRAIN CURRENT

The target drain current for the RF amplifier is set using a precision resistor, R SENSE (see Figure 35), connected from ISENSE (Pin 20) to ground. Use the following equation to set the desired drain current through the RF amplifier: R SENSE Ω = 150 I DRAIN

Base the target drain current on the current that the RF amplifier requires to deliver the desired performance and not necessarily on the quiescent current of the RF amplifier with no RF signal present.

## MOSFET SERIES RESISTANCE

There is a small voltage drop between VDD and VDRAIN due to the finite R DS\_ON of the internal MOSFET. To compensate for this, VDD must be set to the value calculated using the following equation:

<!-- formula-not-decoded -->

## where:

I DRAIN is the desired constant drain current through the RF amplifier. RDS\_ON can be varied and is set by the logic levels of S0 and S1 (Pin 3 and Pin 4). As the target drain current increases, reduce the value of R DS\_ON . Use Table 6 to determine the correct settings for S0 and S1. Note that S0 and S1 have pull-up resistors to VDIG. Therefore, if left floating, the S0 and S1 pins default to high.

VDRAIN is the output voltage from the HMC980LP4E that is applied to the VDD pin of the RF amplifier.

Using settings other than the recommended values for S0 and S1 may result in increased power consumption and increased device to device performance variation.

Table 6. Recommended S0 and S1 Settings vs. Drain Current Range

| Drain Current Range (A)   | Condition                |   R DS_ON Value (Ω) |
|---------------------------|--------------------------|---------------------|
| 0.05 to 0.3               | S1 = ground, S0 = ground |                 2.8 |
| 0.3 to 0.6                | S1 = ground, S0 = VDIG   |                1.55 |
| 0.6 to 1.2                | S1 = VDIG, S0 = ground   |                0.85 |
| 1.2 to 1.6                | S1 = VDIG, S0 = VDIG     |                 0.7 |

## ENABLE INPUT

The active bias control loop is enabled when the EN pin is pulled up to VDIG. The loop is disabled when the EN pin is pulled down to ground. If EN is left floating, the HMC980LP4E is enabled through a pull-up resistor internally. The operation of the negative voltage generator is independent of the enable condition. The EN signal only controls the operation of the VGATE, VG2, and VDRAIN outputs. When EN is pulled down to ground, the HMC980LP4E discharges VDRAIN and VG2 down to ground and pulls the VGATE pin to VNEG. VGATE goes down to VNEG regardless of the threshold level setting of VGATEFB. When EN is pulled high, the HMC980LP4E enables VDRAIN and VG2 as well as starting the bias control loop to automatically adjust the VGATE output voltage.

## VG2 VOLTAGE ADJUSTMENT

The HMC980LP4E generates a second fixed gate voltage, VG2 (Pin 14) for amplifiers that require a second gate bias connection. VG2 can be adjusted through a resistor divider connected to VG2\_CONT (Pin 13). VG2 can range between 1 V and VDD - 1.3 V. Therefore, VG2 is always positive. VG2 is typically 1.3 V below the voltage present at the VG2\_CONT pin. See Figure 36 for an example of how to set VG2.

Figure 36. Resistor Divider Used to Set VG2

<!-- image -->

Use the following equations to calculate the voltage at VG2\_CONT (Pin 13) and VG2 (Pin 14): VG2\_CONT (V) = VDD × R4 R3 + R4

## APPLICATIONS INFORMATION

VG2 (V) = VG2\_CONT - 1.3 V

## SELF PROTECTION

Due to the small R DS\_ON of the internal MOSFET between VDD and VDRAIN, a large amount of current may flow through the HMC980LP4E. The HMC980LP4E attempts to protect itself by disabling the VDRAIN and VGATE output voltages during a short-circuit event on either pin. The HMC980LP4E remains in this disabled mode until a full power cycle or an enable/disable cycle is applied.

When the HMC980LP4E is controlling depletion mode amplifiers, VNEG is continuously monitored for short-circuit faults to ground. If VNEG rises above a preset value (typically -0.6 V), the VDRAIN and VG2 outputs are pulled to ground while VGATE is pulled to VNEG. The HMC980LP4E stays in this standby mode until the fault condition at VNEG is corrected.

## OVERCURRENT/UNDERCURRENT ALARM

The HMC980LP4E provides an overcurrent and undercurrent alarm indicator, ALM (Pin 6). The ALM pin is pulled up to VDIG when the amplifier drain current exceeds the set values for minimum or maximum drain currents. Note that the ALM pin status does not affect the operation of HMC980LP4E and is provided only for monitoring purposes.

The overcurrent and undercurrent limits are set using three resistors, as shown in Figure 37. The resistor values shown in Figure 37 represent alarm thresholds of ±6%. However, the thresholds do not need to be symmetrically placed around the target drain current. The threshold values also possess a small built in hysteresis. Note that the total external resistance from the ISET pin to ground (R12

+ R13) must be within 1% of 5 kΩ. The resistor values for Figure 37 can be calculated using the following equations:

## where:

<!-- formula-not-decoded -->

I OCTH is the overcurrent alarm threshold.

I UCTH is the undercurrent alarm threshold.

The ALM pin status is shown with a varying I DRAIN value in Figure 38.

Figure 37. Current Alarm Resistor Configuration for ±6% Thresholds

<!-- image -->

Figure 38. Current Alarm Behavior

<!-- image -->

## APPLICATIONS INFORMATION

## NEGATIVE VOLTAGE GENERATOR

The HMC980LP4E has an internal charge pump that generates the negative voltage rail, VNEG, required for biasing depletion mode devices. By default, the HMC980LP4E generates -2.46 V at the CP\_OUT pin. This charge pump requires two diodes and two capacitors connected externally, as shown in Figure 39.

Figure 39. External Components Required for the Negative Voltage Generator

<!-- image -->

Table 7. Mode Selection

| Mode                                      | VNEGFB   | VGATEFB   | VNEG           | Description                                                                                                                                                                                           |
|-------------------------------------------|----------|-----------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Depletion Mode Amplifier, VNEG = Internal | Float    | Float     | CP_OUT         | Depletion mode amplifier control. Internal negative voltage generator is active and generating -2.46 V. See Figure 34 for an example application schematic.                                           |
| Depletion Mode Amplifier, VNEG = External | Ground   | Float     | External       | Depletion mode amplifier control. Internal negative voltage generator is disabled. Connect an external voltage between -3.5 V and -2.3 V to VNEG. See Figure 35 for an example application schematic. |
| Enhancement Mode Amplifier, VNEG = 0 V    | Ground   | Ground    | Ground         | Enhancement mode amplifier control. Internal negative voltage generator is disabled. See Figure 44 for an example application schematic.                                                              |
| Invalid                                   | Float    | Ground    | Not applicable | Invalid configuration. The HMC980LP4E stays in standby.                                                                                                                                               |

The HMC980LP4E is designed to reject the ripple on the CP\_OUT pin by isolating VGATE from the CP\_OUT pin. Thus, the noise of the charge pump is effectively isolated from the gate of the RF amplifier.

## DISABLING THE INTERNAL NEGATIVE VOLTAGE GENERATOR

The charge pump can be disabled using the VNEGFB pin if an enhancement mode amplifier is being biased or if the desired negative supply is already available in the system. In either case, ground the VNEGFB pin to disable the internal charge pump. If using an external negative voltage, connect the negative supply to VNEG (Pin 15). See Table 7 for more details on selection of the operating modes. When using an external negative voltage for depletion mode amplifiers, the external voltage must be between -2.3 V and -3.5 V for the HMC980LP4E to operate properly.

## APPLICATIONS INFORMATION

## CHANGING THE DEFAULT VNEG VOLTAGE

VNEG limits the range of the VGATE output voltage. By default, the internal charge pump sets VNEG to -2.46 V. In some cases, VNEG may need to be adjusted to force VGATE to operate over a specific voltage range, for example, when an amplifier requires gate voltages more negative than -2 V to fully shut off, or when the absolute maximum rating of an amplifier for VGATE is less negative than -2 V.

VNEG can be adjusted using an external resistor. To set VNEG to a voltage lower (more negative) than the default, a resistor is connected between VNEGFB and VREF (Pin 11 and Pin 10). Use the following equation to calculate the resistor value:

where:

<!-- formula-not-decoded -->

VNEGDESIRED is the more negative voltage than the default. VREF = 1.44 V.

This resistor is connected as shown in Figure 40.

Figure 40. Resistor Used to Reduce VNEG Below -2.46 V (More Negative)

<!-- image -->

To set VNEG to a voltage higher (less negative) than the default, a resistor must be connected between VNEGFB and VNEG (Pin 11 and Pin 15). Use the following equation to calculate the resistor value:

where:

<!-- formula-not-decoded -->

VREF = 1.44 V.

VNEGDESIRED is the less negative voltage than the default.

This resistor is connected as shown in Figure 41.

Figure 41. Resistor Used to Increase VNEG Above -2.46 V (Less Negative)

<!-- image -->

It is important to note that VNEG must always be set lower (more negative) than the VGATE threshold voltage by at least 0.3 V to 0.4 V to ensure a reliable startup. Therefore, the VGATE threshold voltage cannot be equal to VNEG.

## CHANGING THE VGATE THRESHOLD VOLTAGE

During startup, VGATE must first pull down to the threshold voltage before the control loop can start, to ensure that the RF amplifier is pinched off before asserting VDRAIN. By default, the VGATE threshold voltage is approximately -2.06 V. In some cases, this threshold voltage may need to be adjusted to safely bias the RF amplifier, for example, when an amplifier requires gate voltages more negative than -2 V to fully shut off, or when the absolute maximum rating of an amplifier for VGATE is less negative than -2 V.

The VGATE threshold voltage can be adjusted using an external resistor. To set the threshold lower (more negative) than the default, a resistor is connected between VGATEFB and VREF (Pin 12 and Pin 10). Use the following equation to calculate the resistor value:

where: VGATEDESIRED is the more negative threshold voltage than the default. VREF = 1.44 V.

<!-- formula-not-decoded -->

This resistor is connected as shown in Figure 42.

## APPLICATIONS INFORMATION

Figure 42. Resistor Used to Reduce VGATE Threshold Voltage Below the Default (More Negative)

<!-- image -->

To set the threshold higher (less negative) than the default, a resistor must be connected between VGATEFB and VGATE (Pin 12 and Pin 16). Use the following equation to calculate the resistor value.

where: VGATEDESIRED is the less negative threshold voltage than the default. VREF = 1.44 V.

<!-- formula-not-decoded -->

This resistor is connected as shown in Figure 43.

Figure 43. Resistor Used to Increase VGATE Threshold Voltage Above the Default (Less Negative)

<!-- image -->

## DESIGN EXAMPLES

## Controlling a Depletion Mode RF Amplifier Using the Internal Negative Voltage Generator

The following steps describe how to design an HMC980LP4E circuit for controlling the bias current in a depletion mode RF amplifier using the built in negative voltage generator of the HMC980LP4E. For this example, assume that the amplifier requires 10 V for VDD, draws 450 mA, and only has one VGGx pin. Also, note that the VGGx pin of the depletion mode RF amplifier cannot tolerate voltages below -2 V.

1. Choose R SENSE to set the HMC980LP4E target drain current to 450 mA. R SENSE has a 1% tolerance.
3. Calculate the voltage required on VDD to set the correct voltage on VDRAIN when the correct current is being drawn.
3. R SENSE Ω = 150 0.45 A = 333.33 Ω ≈ 332 Ω 2. Choose S0 and S1 states based on the expected current draw. Table 6 shows that for 450 mA, S0 = VDIG (or left floating due to the internal pull -up resistor) and S1 = ground. Table 6 also shows the R DS\_ON value of the internal MOSFET with these switch settings. In this case, R DS\_ON = 1.55 Ω.

VDD (V) = 10 V + (1.55 Ω × 450 mA) = 10.698 V ≈ 10.7 V

4. Adjust the VNEGFB pin to set VNEG to -2 V. This resistor is placed between VNEG (Pin 15) and VNEGFB (Pin 11), and has a 1% tolerance.

<!-- formula-not-decoded -->

5. Setting VNEG to -2 V also requires that the VGATE threshold value be changed to maintain a buffer of 0.3 V to 0.4 V by placing a resistor between VGATE (Pin 16) and VGATEFB (Pin 12). This resistor has a 1% tolerance. Calculate the resistor value as follows:

<!-- formula-not-decoded -->

## Controlling a Depletion Mode RF Amplifier Using an External Negative Voltage

The following steps describe how to design an HMC980LP4E circuit for controlling the bias current in a depletion mode RF amplifier using an external negative voltage for VNEG (Pin 15). For this example, assume that the amplifier requires 12 V for VDD, draws 200 mA, and has two VGGx pins, one of which requires a positive voltage of 6 V.

1. Choose R SENSE to set the HMC980LP4E target drain current to 200 mA. R SENSE has a 1% tolerance.
2. R SENSE Ω = 150 0.2 A = 75 Ω 2. Choose S0 and S1 states based on the expected current draw. Table 6 shows that for 200 mA, and S0 and S1= ground. Table 6 also provides the R DS\_ON value of the internal MOSFET with these switch settings. In this case, R DS\_ON = 2.8 Ω.

## APPLICATIONS INFORMATION

3. Calculate the voltage required on VDD to set the correct voltage on VDRAIN when the correct current is being drawn.

VDD (V) = 12 V + (2.8 Ω × 200 mA) = 12.56 V

4. Calculate the resistor values needed to generate the VG2\_CONT voltage. VG2\_CONT must be set to 1.3 V higher than the desired VG2. Assume the top resistor is 5.1 kΩ to start. R4 has a 1% tolerance.

<!-- formula-not-decoded -->

## ENHANCEMENT MODE OPERATION

The HMC980LP4E can also be configured to bias enhancement mode RF amplifiers. This mode of operation is selected by setting the voltage on the VNEGFB and VGATEFB pins. See Table 7 for a full description. Figure 44 shows a typical circuit for biasing an enhancement mode amplifier. The HMC980LP4E does not allow the internal negative voltage generator to work if enhancement mode is selected. Therefore, if VNEGFB is left floating while VGATEFB is grounded, HMC980LP4E stays in standby mode.

Ensure that the proper mode of operation is selected before powering the HMC980LP4E to avoid biasing the external amplifier incorrectly.

## RECOMMENDED HMC980LP4E CIRCUITS

Many RF amplifier bias control circuits that use the HMC980LP4E have been built and verified for reference. A list of these circuits is available on the Analog Devices wiki. Although this list of circuits is extensive, it is not exhaustive. If a given RF amplifier is not included in this list, that does not mean that it cannot be actively biased using the HMC980LP4E.

For more information about amplifier designs using the HMC980LP4E, visit wiki.analog.com/resources/eval/user-guides/active-bias-controllers/hmc980.

Figure 44. Typical Circuit for Controlling an Enhancement Mode Amplifier

<!-- image -->

## APPLICATIONS INFORMATION

## DAISY-CHAIN OPERATION

The HMC980LP4E produces a logic high signal on the TRIGOUT pin when the drain current of the external amplifier is in regulation. This trigger signal can be used to enable additional HMC980LP4E chips in a chain of amplifiers, thereby allowing proper amplifier chain power sequencing using only a single enable signal. The triggering sequence can be routed in any direction, from input to output, or from output to input, depending on the requirement. Figure 45 shows an example of three HMC980LP4E devices in an amplification chain. Note that only the first HMC980LP4E device in the chain uses the internal negative voltage generator. Subsequent HMC980LP4E devices use the negative voltage generated by the first HMC980LP4E. Also, note that the amplifier modes of operation have no bearing on the daisy-chaining of HMC980LP4E bias controllers. Generating the negative voltage from a single HMC980LP4E reduces the number of the components in the design and decreases the overall current consumption of the system.

## HIGHER DRAIN CURRENT APPLICATIONS

Two or more HMC980LP4E devices can be connected in parallel to bias amplifiers that require more current than the 1.6 A that a single HMC980LP4E can provide.

To connect multiple HMC980LP4E devices in parallel, tie all the ISENSE pins together so that all the bias controllers are using the same resistor for the current reference. Calculate the R SENSE resistor value using the same equation as for a single HMC980LP4E.

If using the internal negative voltage generator, set up only one HMC980LP4E with the negative voltage generator, and the CP\_OUT pin from that device drives the VNEG pins of all parallel devices (up to 10 HMC980LP4E devices).

Connect the VDRAIN outputs from all the HMC980LP4E devices together and apply them to the power supply pin of the amplifier under control.

Figure 45. Daisy-Chain Operation

<!-- image -->

## APPLICATIONS INFORMATION

It is only necessary to use the VGATE output from one HMC980LP4E to drive the VGG1 pin of the amplifier under control. Decouple the VGATE outputs from all other HMC980LP4E devices with 2.2 µF capacitors and left floating. See Figure 46 for an example of how to bias a depletion mode amplifier at 12 V and 2 A using two HMC980LP4E devices.

Figure 46. Biasing High Current Amplifiers Using Two HMC980LP4E Devices

<!-- image -->

## APPLICATIONS INFORMATION

## REDUCING EXTERNAL COMPONENT COUNT

In space critical applications, it is possible to combine or eliminate some of the external components surrounding the HMC980LP4E. It must be understood that eliminating these components results in some features of the HMC980LP4E becoming inaccessible.

## ALM Resistors

If the ALM function is not needed, the three resistors used to set the ALM limits (see the Overcurrent/Undercurrent Alarm section) can be combined into one 5 kΩ resistor. The ALML and ALMH pins (Pin 21 and Pin 23) must be tied directly to the ISET pin (Pin 22). Pin 22 still requires a 5 kΩ resistor to ground.

## VNEG/VGATE Feedback Resistors

Depending on the absolute maximum limits of the RF amplifier being biased, it is possible to eliminate the resistors used to limit the range of VNEG and VGATE.

Assuming the internal negative voltage generator is being used (see the Negative Voltage Generator section) and the amplifier being biased can safely tolerate -2.46 V on the gate pin, Resistors R5, R6, R7, and R8 can be removed.

## VG2 Set Resistors

If the amplifier being biased requires only one gate control voltage, the resistor divider used to set the voltage on VG2 (R3 and R4) can be removed. The VG2\_CONT and VG2 pins (Pin 13 and Pin 14) must be left floating.

## Negative Voltage Generator

If the desired VNEG voltage is available externally, the negative voltage generator can be disabled and the associated components removed. See the Negative Voltage Generator section. In this case, C6, C7, and D1 can be safely removed from the circuit. The externally available VNEG supply must be applied to the VNEG pin (Pin 15) while CP\_OUT (Pin 8) must be left to float.

## Decoupling Capacitors

Depending on the required power supply rejection ratio (PSRR) of the application, the minimal noise of the VDD and VDIG supplies, and the decoupling requirements of the amplifier being biased, some of the decoupling capacitors on the HMC980LP4E can be removed. It is recommended to start by removing the large value capacitors and leaving the small value capacitors for high frequency decoupling.

## EVALUATION BOARD CIRCUIT

Figure 47. Evaluation Board Schematic

<!-- image -->

Figure 48. Evaluation Board Component Side Layout

<!-- image -->

## EVALUATION BOARD CIRCUIT

Table 8. Bill of Materials for Evaluation PCB EVAL01-HMC980LP4E

| Reference Designator   | Description                                     | Default Value   |
|------------------------|-------------------------------------------------|-----------------|
| TP1 to TP12            | Test points                                     | Not applicable  |
| C1, C4                 | VDD and VDIG decoupling capacitors              | 4.7 µF (1210)   |
| C2, C5                 | VDD and VDIG decoupling capacitors              | 10 nF (0402)    |
| C9                     | VDRAIN decoupling capacitor                     | 10 nF (0402)    |
| C3                     | CP_VDD decoupling capacitor                     | 100 pF (0402)   |
| C6                     | Charge pump output flying capacitor             | 1 µF (0603)     |
| C7                     | Charge pump output storage capacitor            | 10 µF (0603)    |
| C8                     | VGATE decoupling capacitor                      | 2.2 µF (X5R)    |
| D1                     | Dual series Schottky barrier diode              | BAT54SLT1       |
| R3                     | Top resistor to set VG2                         | 5.1 kΩ (0402)   |
| R4                     | Bottom resistor to set VG2                      | 3.3 kΩ (0402)   |
| R5, R6                 | VNEG voltage adjustment resistors               | Open (0402)     |
| R7, R8                 | VGATE threshold voltage adjustment resistors    | Open (0402)     |
| R SENSE                | Potentiometer for setting target drain current  | 1 kΩ            |
| R9                     | Fixed resistor for setting target drain current | Open (0402)     |
| R11, R12               | Alarm threshold setting resistors               | 301 Ω (0402)    |
| R13                    | ISET resistor                                   | 4.7 kΩ (0402)   |
| R14                    | FIXBIAS resistor                                | 10 kΩ (0402)    |
| R1, R2                 | S0, S1 pull-down resistors                      | Open (0402)     |
| U1                     | Device under test                               | HMC980LP4E      |
| PCB 1                  | EVAL01-HMC980LP4E evaluation PCB                | Not applicable  |

1 Circuit board material: FR4.

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1      | Temperature Range   | Package Description           | Packing Quantity   | Package Option   |
|--------------|---------------------|-------------------------------|--------------------|------------------|
| HMC980LP4E   | -40°C to +85°C      | 24-Lead QFN (4mm x 4mm w/ EP) | Cut Tape, 500      | HCP-24-2         |
| HMC980LP4ETR | -40°C to +85°C      | 24-Lead QFN (4mm x 4mm w/ EP) | Reel, 500          | HCP-24-2         |

## EVALUATION BOARDS

| Model 1           | Description      |
|-------------------|------------------|
| EVAL01-HMC980LP4E | Evaluation Board |

<!-- image -->

Figure 49. 24-Lead Lead Frame Chip Scale Package [LFCSP] 4 mm × 4 mm Body and 0.90 mm Package Height (HCP-24-2) Dimensions shown in millimeters

<!-- image -->

Updated: February 05, 2022