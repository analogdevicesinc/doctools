<!-- lastmod 2022-10-04 -->
<!-- image -->

## FEATURES

- ±200 g measurement range
- Low power: 170 µA in measurement mode and 17 µA in standby mode at V S = 2.5 V (typical)
- User selectable bandwidth up to 3200 Hz ODR
- Fixed 13-bit output resolution
- Supply voltage range: 2.0 V to 3.6 V
- Embedded memory management system with FIFO technology minimizes host processor load
- Shock event detection
- Activity/inactivity monitoring
- SPI (3- or 4-wire) and I 2 C digital interfaces
- Wide temperature range: -40 to +125°C
- 10,000 g shock survival
- Pb free and RoHS compliant
- Small and thin: 32-lead, 5 mm × 5 mm × 1.45 mm LFCSP
- AEC-Q100 qualified for automotive applications

## APPLICATIONS

- Tire and battery pack monitoring
- High force event detection

## ±200 g Range, 3-Axis Digital Accelerometer

## SIMPLIFIED FUNCTIONAL BLOCK DIAGRAM

Figure 1. Simplified Functional Block Diagram

<!-- image -->

## GENERAL DESCRIPTION

The ADXL314 is a ±200 g range, 13-bit resolution, 3-axis digital accelerometer. The digital output data is formatted as 16-bit, twos complement data and is accessible through a serial peripheral interface (SPI), 3-wire or 4-wire, or an I 2 C digital interface.

An integrated memory management system with a 32 level, first in, first out (FIFO) buffer can store data to minimize host processor activity and lower overall system power consumption.

Low power modes enable intelligent motion-based power management with threshold sensing and active acceleration measurement at low power dissipation, typically 65 μA for V S = 2.5 V at a 100 Hz output data rate (ODR).

The ADXL314 is supplied in a small, thin 5 mm × 5 mm × 1.45 mm, 32-lead LFCSP.

## TABLE OF CONTENTS

| Features................................................................                                                                                      | 1                                                                                                                                                             | SPI....................................................................14   |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| Applications........................................................... 1                                                                                     | I 2 C....................................................................                                                                                     | 17                                                                          |
| Simplified Functional Block Diagram.....................1                                                                                                     | Register Map.......................................................                                                                                           | 19                                                                          |
| General Description...............................................1                                                                                           | Register Definitions..........................................19                                                                                              |                                                                             |
| Specifications........................................................ 3                                                                                      | Applications Information......................................                                                                                                | 23                                                                          |
| Absolute Maximum Ratings...................................5                                                                                                  | Power Supply Requirements ...........................23                                                                                                       |                                                                             |
| Thermal Resistance........................................... 5                                                                                               | Mechanical Considerations for Mounting.........23                                                                                                             |                                                                             |
| Solder Profile......................................................5                                                                                         | Threshold.........................................................                                                                                            | 23                                                                          |
| Electrostatic Discharge (ESD) Ratings...............5                                                                                                         | Link Mode.........................................................23                                                                                          |                                                                             |
| ESD Caution.......................................................5                                                                                           | Sleep Mode vs. Low Power Mode....................23                                                                                                           |                                                                             |
| Pin Configuration and Function Descriptions........ 6                                                                                                         | Offset Compensation........................................24                                                                                                 |                                                                             |
| Typical Performance Characteristics.....................7                                                                                                     | Using Self Test.................................................                                                                                              | 24                                                                          |
| Theory of Operation.............................................10                                                                                            | Asynchronous Data Readings..........................24                                                                                                        |                                                                             |
| Power Sequencing...........................................10 Power Savings................................................. 10                               | Data Formatting at Output Data Rate of 3200 Hz and 1600                                                                                                       | Hz.....................................24                                   |
| FIFO Buffer.......................................................11                                                                                          | Axes of Acceleration Sensitivity.......................                                                                                                       | 25                                                                          |
| Interrupts..........................................................12                                                                                        | Outline Dimensions.............................................                                                                                               | 26                                                                          |
| Self Test............................................................13                                                                                       | Ordering Guide.................................................26                                                                                             |                                                                             |
| Serial Communications........................................14                                                                                               | Evaluation Boards............................................26                                                                                               |                                                                             |
| Serial Port Input and Output Default States.....14                                                                                                            | Automotive Products........................................27                                                                                                 |                                                                             |
| REVISION HISTORY                                                                                                                                              |                                                                                                                                                               |                                                                             |
| 10/2022-Rev. 0 to Rev. A                                                                                                                                      |                                                                                                                                                               |                                                                             |
| Moved Solder Profile Section, Figure 2, and Table 4.......................................................................................5                   | Moved Solder Profile Section, Figure 2, and Table 4.......................................................................................5                   |                                                                             |
| Change to Figure 3..........................................................................................................................................6 | Change to Figure 3..........................................................................................................................................6 |                                                                             |
| Change to Power Sequencing Section..........................................................................................................10                | Change to Power Sequencing Section..........................................................................................................10                |                                                                             |
| Changes to Table 16......................................................................................................................................19   | Changes to Table 16......................................................................................................................................19   |                                                                             |
| Changed Enable Bits Section to Entries Bits Section....................................................................................22                     | Changed Enable Bits Section to Entries Bits Section....................................................................................22                     |                                                                             |
| Changes to Entries Bits Section....................................................................................................................           | Changes to Entries Bits Section....................................................................................................................           | 22                                                                          |

5/2022-Revision 0: Initial Version

## SPECIFICATIONS

TA = 25°C, V S = 2.5 V, V DD I/O = 2.5 V, acceleration = 0 g , V S capacitance (C VS ) = 1 μF tantalum, V DD I/O capacitance (C VDDI/O ) = 0.1 μF, and ODR = 100 Hz, unless otherwise noted.

Table 1. Specifications

| Parameter                                        | Test Conditions/Comments                    |   Min 1 | Typ 2   | Max 1   | Unit      |
|--------------------------------------------------|---------------------------------------------|---------|---------|---------|-----------|
| SENSOR INPUT                                     | Each axis                                   |         |         |         |           |
| Measurement Range                                |                                             |         | ±200    |         | g         |
| Nonlinearity                                     | Percentage of full scale                    |         | ±0.5    |         | %         |
| Cross-Axis Sensitivity 3                         |                                             |         | ±2.5    |         | %         |
| Sensor Resonant Frequency                        |                                             |         | 16      |         | kHz       |
| OUTPUT RESOLUTION                                | Each axis                                   |         |         |         |           |
| All Operation Modes                              |                                             |         | 13      |         | Bits      |
| SENSITIVITY                                      | All axes                                    |         |         |         |           |
| Sensitivity                                      | ODR = 100 Hz                                |         | 20.48   |         | LSB/ g    |
| Scale Factor                                     | ODR = 100 Hz                                |         | 48.83   |         | mg /LSB   |
| Scale Factor Calibration Error                   |                                             |         | ±10     |         | %         |
| Sensitivity Change due to Temperature            | -40°C ≥ T A ≤ +25°C or +25°C ≥ T A ≤ +125°C |         | 8       |         | %         |
| 0 g OFFSET                                       |                                             |         |         |         |           |
| 0 g Output                                       | X-axis and Y-axis                           |      -7 | ±1      | +7      | g         |
|                                                  | Z-axis                                      |      -7 | ±3      | +7      | g         |
| 0 g Offset Change due to Temperature             | -40°C to +105°C                             |         | ±20     |         | mg /°C    |
|                                                  | 105°C to +125°C                             |         | ±100    |         | mg /°C    |
| NOISE PERFORMANCE (RMS)                          |                                             |         |         |         |           |
| Noise Density                                    |                                             |         |         |         |           |
| X-Axis and Y-Axis                                |                                             |         | 5.65    |         | mg/√Hz    |
| Z-Axis                                           |                                             |         | 6.8     |         | mg/√Hz    |
| Noise Density Change with Temperature (All Axes) |                                             |         |         |         | mg/√Hz/°C |
| 4, 5                                             |                                             |         | 0.5     |         |           |
| OUTPUT DATA RATE AND BANDWIDTH Measurement Rate  | User-selectable                             |    6.25 |         | 3200    | Hz        |
| SELF TEST 6                                      | Z-axis only                                 |         |         |         |           |
| Self Test Change                                 | At 100 Hz ODR, -40°C ≥ T A ≤ +125°C         |     0.1 | 4       | 8       | g         |
| Self Test Change vs. Temperature                 |                                             |         | -12.5   |         | m g /°C   |
| POWER SUPPLY                                     |                                             |         |         |         |           |
| Operating Voltage Range (V S )                   |                                             |     2.0 |         | 3.6     | V         |
| Interface Voltage Range (V DD I/O )              |                                             |     2.0 |         | V S     | V         |
| Supply Current                                   |                                             |         |         |         |           |
| Measurement Mode                                 |                                             |         |         |         |           |
|                                                  | ODR ≥ 100 Hz, -40°C to +125°C               |      70 | 170     |         | µA        |
|                                                  | ODR ≤ 10 Hz, -40°C to +125°C                |      20 | 50      |         | µA        |
| Low Power Mode                                   |                                             |         |         |         |           |
|                                                  | ODR = 100 Hz, -40°C to +125°C               |      22 | 65      |         | µA        |
| Standby Mode                                     |                                             |         |         |         |           |
|                                                  | 25°C                                        |         | 0.1     |         | µA        |
|                                                  | -40°C to 125°C                              |         | 17      |         | µA        |
| Turn-On and Wake-up Time 7                       |                                             |         | 1.4     |         | ms        |

## SPECIFICATIONS

## Table 1. Specifications

| Parameter                   | Test Conditions/Comments   |   Min 1 | Typ 2   |   Max 1 | Unit   |
|-----------------------------|----------------------------|---------|---------|---------|--------|
| TEMPERATURE (T)             |                            |         |         |         |        |
| Operating Temperature Range |                            |     -40 |         |    +125 | °C     |

- 2 Typical specifications are for at least 68% of the population of parts and are based on the worst case of mean ± 1 σ distribution, except for sensitivity, which represents the target value.
- 3 Cross-axis sensitivity is defined as coupling between any two axes.
- 4 The output format for the 1600 Hz and 3200 Hz output data rates is different from the output format for the other output data rates. For more information, see the Data Formatting at Output Data Rate of 3200 Hz and 1600 Hz section.
- 5 Bandwidth is the -3 dB frequency and is half the output data rate: bandwidth = ODR/2.
- 6 Self test change is defined as the output ( g ) when the SELF\_TEST bit = 1 (DATA\_FORMAT register, Address 0x31) minus the output ( g ) when the SELF\_TEST bit = 0. Due to device filtering, the output reaches its final value after 4 × τ when enabling or disabling self test, where τ = 1/(data rate). For the self test to operate correctly, the device must be in normal power operation (LOW\_POWER bit = 0 in the BW\_RATE register, Address 0x2C).
- 7 The turn-on time and wake-up time are determined by the user-defined bandwidth. At a 100 Hz data rate, the turn-on time and wake-up time are each approximately 11.1 ms. For other data rates, the turn-on time and wake-up time are each approximately τ + 1.1 ms, where τ = 1/(data rate).

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

## Table 2.

| Parameter                                         | Rating                                                  |
|---------------------------------------------------|---------------------------------------------------------|
| Acceleration, Any Axis                            |                                                         |
| Unpowered                                         | 10,000 g for 0.1 ms                                     |
| Powered                                           | 10,000 g for 0.1 ms                                     |
| V S                                               | -0.3 V to +3.9 V                                        |
| V DD I/O                                          | -0.3 V to +3.9 V                                        |
| All Other Pins                                    | -0.3 V to V DD I/O + 0.3 V or +3.9 V, whichever is less |
| Output Short-Circuit Duration (Any Pin to Ground) | Indefinite                                              |
| Temperature Range                                 |                                                         |
| Unpowered                                         | -40°C to +125°C                                         |
| Powered                                           | -40°C to +125°C                                         |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θ JA is the natural convection junction-to-ambient thermal resistance measured in a one cubic foot sealed enclosure. θ JC is the junctionto-case thermal resistance.

Table 3. Thermal Resistance

| Package Type   |   θ JA |   θ JC | Unit   |
|----------------|--------|--------|--------|
| CP-32-17       |    150 |     85 | °C/W   |

## SOLDER PROFILE

Figure 2. Recommended Soldering Profile

<!-- image -->

Table 4. Recommended Soldering Profile 1, 2

|                                                                                             | Condition                     | Condition                     |
|---------------------------------------------------------------------------------------------|-------------------------------|-------------------------------|
| Profile Feature                                                                             | Sn63/Pb37                     | Pb-Free                       |
| Average Ramp Rate (T L to T P )                                                             | 3°C/sec maximum               | 3°C/sec maximum               |
| Preheat                                                                                     |                               |                               |
| Minimum Temperature (T SMIN ) Maximum Temperature (T SMAX ) Time (T SMIN to T SMAX ) (t S ) | 100°C 150°C 60 sec to 120 sec | 150°C 200°C 60 sec to 180 sec |
| T SMAX to T L Ramp-Up Rate                                                                  | 3°C/sec                       | 3°C/sec                       |
| Time Maintained Above Liquidous (T L ) Liquidous Temperature (T L ) Time (t L )             | 183°C 60 sec to 150 sec       | 217°C 60 sec to 150 sec       |
| Peak Temperature (T P )                                                                     | 240°C + 0°C/ -5°C             | 260°C + 0°C/ -5°C             |
| Time Within 5°C of Actual Peak Temperature (t P )                                           | 10 sec to 30 sec              | 20 sec to 40 sec              |
| Ramp-Down Rate                                                                              | 6°C/sec maximum               | 6°C/sec maximum               |
| Time 25°C to Peak Temperature                                                               | 6 min maximum                 | 8 min maximum                 |

## ELECTROSTATIC DISCHARGE (ESD) RATINGS

The following ESD information is provided for handling of ESD-sensitive devices in and ESD-protected area only.

Human body model (HBM) per ANSI/ESDA/JEDEC JS-001.

Field induced charged-device model (FICDM) per ANSI/ESDA/JEDEC JS-002.

## ESD Rating for the ADXL314

Table 5. ADXL314, 32-Lead LFCSP

| ESD Model   | Withstand Threshold (V)   | Class          |
|-------------|---------------------------|----------------|
| FICDM       | ±1250                     | Not applicable |
| HBM         | ±2000                     | 2              |

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Figure 3. Pin Configuration (Top View)

| Pin No.   | Mnemonic        | Description                                                                                           |
|-----------|-----------------|-------------------------------------------------------------------------------------------------------|
| 1         | GND             | This pin must be connected to ground.                                                                 |
| 2         | Reserved        | Reserved. This pin must be connected to V S or left open.                                             |
| 3         | GND             | This pin must be connected to ground.                                                                 |
| 4         | GND             | This pin must be connected to ground.                                                                 |
| 5         | V S             | Supply Voltage.                                                                                       |
| 6         | CS              | Chip Select.                                                                                          |
| 7         | Reserved        | Reserved. This pin must be left open.                                                                 |
| 8 to 19   | NC              | No Connect. Do not connect to this pin.                                                               |
| 20        | INT1            | Interrupt 1 Output.                                                                                   |
| 21        | INT2            | Interrupt 2 Output.                                                                                   |
| 22        | Reserved        | Reserved. This pin must be connected to GND or left open.                                             |
| 23        | SDO/ALT ADDRESS | Serial Data Out (SDO), or Alternate I 2 C Address Select (ALT ADDRESS).                               |
| 24        | SDA/SDI/SDIO    | Serial Data (SDA, I 2 C), Serial Data In (SDI, SPI 4-Wire), or Serial Data In/Out (SDIO, SPI 3-Wire). |
| 25        | NC              | No Connect. Do not connect to this pin.                                                               |
| 26        | SCL/SCLK        | Serial Clock Line for I 2 C (SCL). Serial Clock Line for SPI (SCLK).                                  |
| 27 to 30  | NC              | No Connect. Do not connect to this pin.                                                               |
| 31        | V DD I/O        | Digital Interface Supply Voltage.                                                                     |
| 32        | NC              | No Connect.                                                                                           |
|           | EP              | Exposed Pad. The exposed pad must be soldered to the ground plane.                                    |

## Table 6. Pin Function Descriptions

## TYPICAL PERFORMANCE CHARACTERISTICS

Figure 6. Z-Axis Zero g Offset at 25°C, V S = 2.5 V

<!-- image -->

Figure 9. Z-Axis Sensitivity Deviation at 25°C, V S = 2.5 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 10. X-Axis Zero g Offset Deviation from 25°C vs. Temperature, V S = 2.5 V

<!-- image -->

Figure 11. Y-Axis Zero g Offset Deviation from 25°C vs. Temperature, V S = 2.5 V

<!-- image -->

Figure 12. Z-Axis Zero g Offset Deviation from 25°C vs. Temperature, V S = 2.5 V

<!-- image -->

Figure 13. X-Axis Sensitivity Deviation from 25°C vs. Temperature, V S = 2.5 V

Figure 14. Y-Axis Sensitivity Deviation from 25°C vs. Temperature, V S = 2.5 V

<!-- image -->

Figure 15. Z-Axis Sensitivity Deviation from 25°C vs. Temperature, V S = 2.5 V

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 16. Z-Axis Self Test Response at 25°C, V S = 2.5 V

<!-- image -->

Figure 17. Measurement Mode Current Consumption at 25°C, V S = 2.5 V

Figure 18. Standby Mode Current Consumption at 25°C, V S = 2.5 V

<!-- image -->

Figure 19. Clock Frequency Deviation from Ideal at 25°C, V S = 2.5 V

<!-- image -->

## THEORY OF OPERATION

The ADXL314 is a complete 3-axis acceleration measurement system with a measurement range of ±200 g . The device measures both dynamic accelerations resulting from motion or shock and static accelerations, such as gravity.

The sensor is a polysilicon, surface-micromachined structure built on top of a silicon wafer. Polysilicon springs suspend the structure over the surface of the wafer and provide resistance against forces due to applied acceleration.

Deflection of the structure is measured using differential capacitors that consist of independent fixed plates and plates attached to the moving mass. Acceleration deflects the proof mass and unbalances the differential capacitor, resulting in a sensor output whose amplitude is proportional to acceleration. Phase sensitive demodulation is used to determine the magnitude and polarity of the acceleration.

## POWER SEQUENCING

Power can be applied to V S or V DD I/O in any sequence without damaging the ADXL314.

All possible power-on modes are summarized in Table 7. The interface voltage level is set with the interface supply voltage, V DD I/O , which must be present to ensure that the ADXL314 does not create a conflict on the communication bus. For single-supply operation, VDD I/O can be the same as the main supply, V S . In a dual-supply application, however, V DD I/O can differ from V S to accommodate the desired interface voltage, as long as V S is greater than or equal to VDD I/O .

After V S is applied, the device enters standby mode, where power consumption is minimized and the device waits for V DD I/O to be applied and for the command to enter measurement mode to be received. (This command can be initiated by setting the measure bit in the POWER\_CTL register (Address 0x2D).) In addition, any register can be written to or read from to configure the device while the device is in standby mode. It is recommended to configure the device in standby mode and then to enable measurement mode. Clearing the measure bit returns the device to standby mode.

Table 7. Power Sequencing

| Condition              | V S   | V DD I/O   | Description                                                                                                                                                                                                  |
|------------------------|-------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Power Off              | Off   | Off        | The device is completely off, but there is a potential for a communication bus conflict.                                                                                                                     |
| Bus Disabled           | On    | Off        | The device is on in standby mode, but communication is unavailable and creates a conflict on the communication bus. Minimize the duration of this state during power-up to prevent a conflict.               |
| Bus Enabled            | Off   | On         | No functions are available, but the device does not create a conflict on the communication bus.                                                                                                              |
| Standby or Measurement | On    | On         | The device is in standby mode, awaiting a command to enter measurement mode, and all sensor functions are off. After the device is instructed to enter measurement mode, all sensor functions are available. |

## POWER SAVINGS

## Power Modes

The ADXL314 automatically modulates its power consumption in proportion to its output data rate, as outlined in Table 8. If additional power savings are desired, a lower power mode is available. In this mode, the internal sampling rate is reduced, allowing for power savings in the 12.5 Hz to 400 Hz data rate range at the expense of slightly greater noise. To enter low power mode, set the LOW\_POWER bit (Bit 4) in the BW\_RATE register (Address 0x2C). The current consumption in low power mode is shown in Table 9 for cases where there is an advantage to using low power mode. Use of low power mode for a data rate not shown in Table 9 does not provide any advantage over the same data rate in normal power mode. Therefore, it is recommended that only data rates shown in Table 9 be used in low power mode. The current consumption values shown in Table 8 and Table 9 are for a V S of 2.5 V.

Table 8. Current Consumption vs. Data Rate (T A = 25°C, V S = V DD I/O = 2.5 V)

|   Output Data Rate (Hz) |   Bandwidth (Hz) |   Rate Code |   I DD (µA) |
|-------------------------|------------------|-------------|-------------|
|                    3200 |             1600 |        1111 |         170 |
|                    1600 |              800 |        1110 |         115 |
|                     800 |              400 |        1101 |         170 |
|                     400 |              200 |        1100 |         170 |
|                     200 |              100 |        1011 |         170 |
|                     100 |               50 |        1010 |         170 |
|                      50 |               25 |        1001 |         115 |
|                      25 |             12.5 |        1000 |          82 |
|                    12.5 |             6.25 |        0111 |          65 |
|                    6.25 |            3.125 |        0110 |          57 |

Table 9. Current Draw vs. Data Rate, Low Power Mode (T A = 25°C, V S = V DD I/O = 2.5 V)

|   Output Data Rate (Hz) |   Bandwidth (Hz) |   Rate Code |   I DD (µA) |
|-------------------------|------------------|-------------|-------------|
|                     400 |              200 |        1100 |         115 |
|                     200 |              100 |        1011 |          82 |
|                     100 |               50 |        1010 |          65 |
|                      50 |               25 |        1001 |          57 |
|                      25 |             12.5 |        1000 |          50 |
|                    12.5 |             6.25 |        0111 |          43 |

## Autosleep Mode

Additional power savings can be accomplished by having the ADXL314 automatically switch to sleep mode during periods of inactivity. To enable this feature, set the THRESH\_INACT register (Address 0x25) to an acceleration threshold value. Levels of acceleration below this threshold are regarded as no activity levels. Set TIME\_INACT (Address 0x26) to an appropriate inactivity time period. Then, set the AUTO\_SLEEP bit and the link bit in the POW-ER\_CTL register (Address 0x2D). If the device does not detect a level of acceleration in excess of THRES\_INACT for TIME\_INACT seconds, the device is transitioned to sleep mode automatically.

## THEORY OF OPERATION

Current consumption at the sub 8 Hz data rates used in this mode is typically 30 µA for a V S of 2.5 V.

## Standby Mode

For even lower power operation, standby mode can be used. In standby mode, current consumption is reduced to 0.1 µA (typical). In this mode, no measurements are made. Standby mode is entered by clearing the measure bit (Bit 3) in the POWER\_CTL register (Address 0x2D). Placing the device into standby mode preserves the contents of the FIFO.

## FIFO BUFFER

The ADXL314 contains patented technology for an embedded memory management system with a 32-level FIFO buffer that can be used to minimize host processor burden. This buffer has four modes: bypass, FIFO, stream, and trigger. Each mode can be selected by setting the FIFO\_MODE bits (Bits[D7:D6]) in the FIFO\_CTL register (Address 0x38; see Table 10).

Table 10. FIFO Modes (FIFO\_CTL Register, Address 0x38)

| Setting   | Setting   | FIFO    |                                                                                                                                                                        |
|-----------|-----------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D7        | D6        | Mode    | Description                                                                                                                                                            |
| 0         | 0         | Bypass  | The FIFO buffer is bypassed.                                                                                                                                           |
| 0         | 1         | FIFO    | The FIFO buffer collects up to 32 samples and then stops collecting data. The FIFO buffer only collects new data when the buffer is not full.                          |
| 1         | 0         | Stream  | The FIFO buffer holds the last 32 samples. When the FIFO buffer is full, the oldest data is overwritten with newer data.                                               |
| 1         | 1         | Trigger | The FIFO buffer holds the last samples before the trigger event and continues to collect data until full. New data is collected only when the FIFO buffer is not full. |

For an in-depth description of the FIFO buffer and FIFO modes, see the AN-1025 Application Note, Utilization of the First In, First Out (FIFO) Buffer in Analog Devices, Inc., Digital Accelerometers .

## Bypass Mode

In bypass mode, the FIFO buffer is not operational and, therefore, remains empty. Data is erased when switching from other FIFO modes to bypass mode.

## FIFO Mode

In FIFO mode, data from measurements of the x-axis, y-axis, and z-axis is stored in the FIFO buffer. When the number of samples in the FIFO buffer equals the level specified by the samples bits of the FIFO\_CTL register (Address 0x38), the watermark interrupt is set (see the Watermark section). The FIFO buffer continues to accumulate samples until it is full (32 samples from measurements of the x-axis, y-axis, and z-axis) and then stops collecting data.

After the FIFO buffer stops collecting data, the device continues to operate; therefore, features such as shock detection can be used after the FIFO buffer is full. The watermark interrupt bit remains set until the number of samples in the FIFO buffer is less than the value stored in the samples bits of the FIFO\_CTL register.

## Stream Mode

In stream mode, data from measurements of the x-axis, y-axis, and z-axis is stored in the FIFO buffer. When the number of samples in the FIFO buffer equals the level specified by the samples bits of the FIFO\_CTL register (Address 0x38), the watermark interrupt is set (see the Watermark section). The FIFO buffer continues to accumulate samples; the buffer stores the latest 32 samples from measurements of the x-axis, y-axis, and z-axis, discarding older data as new data arrives. The watermark interrupt bit remains set until the number of samples in the FIFO buffer is less than the value stored in the samples bits of the FIFO\_CTL register.

## Trigger Mode

In trigger mode, the FIFO buffer accumulates samples, storing the latest 32 samples from measurements of the x-axis, y-axis, and z-axis. After a trigger event occurs, an interrupt is sent to the INT1 or INT2 pin (determined by the trigger bit in the FIFO\_CTL register), and the FIFO\_TRIG bit (Bit D7) is set in the FIFO\_STATUS register (Address 0x39).

The FIFO buffer keeps the last n samples (n is the value specified by the samples bits in the FIFO\_CTL register) and then operates in FIFO mode, collecting new samples only when the FIFO buffer is not full. A delay of at least 5 µs must elapse between the occurrence of the trigger event and the start of data read back from the FIFO buffer to allow the buffer to discard and retain the necessary samples.

Additional trigger events cannot be recognized until the device is reset to trigger mode. To reset the device to trigger mode, take the following steps:

1. If desired, read data from the FIFO buffer (see the Retrieving Data from the FIFO Buffer section). Before resetting the device to trigger mode, read back the FIFO data; placing the device into bypass mode clears the FIFO buffer.
2. Configure the device for bypass mode by setting Bits[D7:D6] at Address 0x38 to 00.
3. Configure the device for trigger mode by setting Bits[D7:D6] at Address 0x38 to 11.

## Retrieving Data from the FIFO Buffer

When the FIFO buffer operates in FIFO, stream, or trigger mode, FIFO data can be read from the data registers (Address 0x32 to Address 0x37). Each time data is read from the FIFO buffer, the oldest x-axis, y-axis, and z-axis data is moved into the DATAXx, DATAYx, and DATAZx registers.

## THEORY OF OPERATION

If a single-byte read operation is performed, the remaining bytes of data for the current FIFO sample are lost. Therefore, data for all axes of interest must be read in a burst (multiple byte) read operation. To ensure that the FIFO buffer is empty (that is, all new data has moved into the data registers), an interval of at least 5 µs must elapse between the end of the read back from the data registers and the start of a new read of the data registers or the FIFO\_STATUS register (Address 0x39). The end of a read operation from the data registers is signified by the transition from Register 0x37 to Register 0x38 or by the CS pin going high.

When SPI operation is enabled at a frequency of 1.6 MHz or lower, the register addressing portion of the transmission provides a sufficient delay to ensure that the FIFO buffer has completely emptied. When SPI operation is enabled at a frequency higher than 1.6 MHz, the CS pin must be deasserted to ensure a total delay of 5 µs; otherwise, the delay is not sufficient. When SPI operation is enabled at 5 MHz, the total delay necessary is at most 3.4 µs.

When I 2 C mode is enabled on the device, the communication rate is low enough to ensure a sufficient delay between FIFO reads.

## INTERRUPTS

The ADXL314 provides two output pins for driving interrupts: INT1 and INT2. Both interrupt pins are push-pull, low impedance pins with output specifications shown in Table 11. The default configuration of the interrupt pins is active high. This configuration can be changed to active low by setting the INT\_INVERT bit in the DATA\_FORMAT (Address 0x31) register. All functions can be used simultaneously, with the only limiting feature being that some functions may need to share interrupt pins.

Interrupts are enabled by setting the appropriate bit in the INT\_EN-ABLE register (Address 0x2E) and are mapped to either the INT1 or INT2 pin based on the contents of the INT\_MAP register (Address 0x2F). When initially configuring the interrupt pins, it is recommended that the functions and interrupt mapping be done before enabling the interrupts. When changing the configuration of an interrupt, it is recommended that the interrupt be disabled first, by clearing the bit corresponding to that function in the INT\_ENABLE register, and then the function be reconfigured before enabling the interrupt again. Configuration of the functions while the interrupts are disabled helps to prevent the accidental generation of an interrupt before desired.

## Table 11. Interrupt Pin Digital Output

|                                   |                                                                | Limit 1        | Limit 1        |      |
|-----------------------------------|----------------------------------------------------------------|----------------|----------------|------|
| Parameter                         | Test Conditions                                                | Min            | Max            | Unit |
| Digital Output                    |                                                                |                |                |      |
| Low Level Output Voltage (V OL )  | I OL = 300 µA                                                  |                | 0.2 × V DD I/O | V    |
| High Level Output Voltage (V OH ) | I OH = -150 µA                                                 | 0.8 × V DD I/O |                | V    |
| Low Level Output Current (I OL )  | V OL = V OL, max                                               | 300            |                | µA   |
| High Level Output Current (I OH ) | V OH = V OH, min                                               |                | -150           | µA   |
| Pin Capacitance                   | Input frequency (f IN ) = 1 MHz, input voltage (V IN ) = 2.5 V |                | 8              | pF   |

The interrupt functions are latched and cleared by either reading the data registers (Address 0x32 to Address 0x37) until the interrupt condition is no longer valid for the data-related interrupts or by reading the INT\_SOURCE register (Address 0x30) for the remaining interrupts. This section describes the interrupts that can be set in the INT\_ENABLE register and monitored in the INT\_SOURCE register.

## DATA\_READY

The DATA\_READY bit is set when new data is available and is cleared when no new data is available.

## Activity

The activity bit is set when acceleration greater than the value stored in the THRESH\_ACT register (Address 0x24) is experienced.

## Inactivity

The inactivity bit is set when acceleration of less than the value stored in the THRESH\_INACT register (Address 0x25) is experienced for more time than is specified in the TIME\_INACT register (Address 0x26). The maximum value for TIME\_INACT is 255 sec.

## Watermark

The watermark bit is set when the number of samples in FIFO equals the value stored in the samples bits (Register FIFO\_CTL, Address 0x38). The watermark bit is cleared automatically when FIFO is read, and the content returns to a value less than the value stored in the samples bits.

## Overrun

The overrun bit is set when new data replaces unread data. The precise operation of the overrun function depends on the FIFO mode. In bypass mode, the overrun bit is set when new data replaces unread data in the DATAX, DATAY, and DATAZ registers (Address 0x32 to Address 0x37). In all other modes, the overrun bit is set when FIFO is filled. The overrun bit is automatically cleared when the FIFO content is read.

## THEORY OF OPERATION

Table 11. Interrupt Pin Digital Output

|                         |                                     | Limit 1   | Limit 1   |      |
|-------------------------|-------------------------------------|-----------|-----------|------|
| Parameter               | Test Conditions                     | Min       | Max       | Unit |
| Rise Time and Fall Time |                                     |           |           |      |
| Rise Time (t R ) 2      | Load capacitance (C LOAD ) = 150 pF |           | 210       | ns   |
| Fall Time (t F ) 3      | C LOAD = 150 pF                     |           | 150       | ns   |

## SELF TEST

The ADXL314 incorporates a self test feature that effectively tests its mechanical and electronic systems simultaneously. When the self test function is enabled (via the SELF\_TEST bit in the DATA\_FORMAT register, Address 0x31), an electrostatic force is exerted on the mechanical sensor.

This electrostatic force moves the mechanical sensing element in the same manner as acceleration, and it is additive to the external acceleration experienced by the device. This added electrostatic force results in an output change in the x-axis, y-axis, and z-axis. Because the electrostatic force is proportional to V S 2 , the output change varies with V S .

The self test response exhibits bimodal behavior in all axes. However, the z-axis self test change can be used to effectively perform a self test check. For the self test function to operate correctly, the device must be in normal power operation (LOW\_POWER bit = 0 in the BW\_RATE register, Address 0x2C) and be configured for a data rate from 100 Hz to 800 Hz, or for a data rate of 3200 Hz.

The self test response cannot be used as a reliable indicator of potential shift in device sensitivity.

For more information about the self test feature, see the Using Self Test section.

## SERIAL COMMUNICATIONS

The ADXL314 can communicate via I 2 C and SPI digital communications interfaces. In both cases, the ADXL314 operates as a subordinate. If I 2 C is the desired interface for the application, tie the CS pin directly to V DD I/O as shown in Figure 26. If SPI is the desired interface for the application, drive the CS pin with an external controller, as demonstrated in Figure 20 and Figure 21.

Because the I 2 C interface is enabled any time the CS pin is brought up to V DD I/O , there is a potential for bus conflicts to occur when the ADXL314 is implemented into a SPI network. Refer to the Preventing Bus Traffic Errors section for information on how to avoid such conditions. In both SPI and I 2 C modes of operation, ignore data transmitted from the ADXL314 to the controller device during writes to the ADXL314.

Note that throughout this section, multifunction pins, such as SDA/SDI/SDIO, are referred to either by the entire pin name or by a single function of the pin, for example, SDA, when only that function is relevant.

## SERIAL PORT INPUT AND OUTPUT DEFAULT STATES

Ensure that all serial port inputs and outputs are in a defined state and that pins are not allowed to float when they are not in use. These two conditions are applicable to all serial port inputs and outputs, regardless of SPI or I 2 C operation.

For I 2 C applications, always tie the pin high to V DD I/O . Connect the SCL and SDA pins to an external controller, with pull-up resistors implemented according to the UM10204 I 2 C-Bus Specification and User Manual , Rev. 03-19 June 2007, available from NXP Semiconductor. The ALT ADDRESS pin must be tied to either V DD I/O or ground, thereby selecting the desired I 2 C address for the ADXL314.

If SPI is the intended communications interface, drive the CS pin with an external controller, as shown in Figure 20 and Figure 21. When communications with the ADXL314 are suspended (CS = VDD I/O ), ensure that the SCLK, SDI/SDIO, and SDO pins are not floating.

For either SPI or I 2 C operation, not taking these precautions may result in an inability to communicate with the device or excessive current consumption.

## SPI

For the SPI, either 3-wire or 4-wire configuration is possible, as shown in the connection diagrams in Figure 20 and Figure 21. Clearing the SPI bit in the DATA\_FORMAT register (Address 0x31) selects 4-wire mode, whereas setting the SPI bit in the DATA\_FOR-MAT register (Address 0x31) selects 3 -wire mode. The maximum SPI clock speed is 5 MHz with 100 pF maximum loading, and the timing scheme follows clock polarity (CPOL) = 1 and clock phase (CPHA) = 1. If power is applied to the ADXL314 before the clock polarity and phase of the host processor are configured, bring the pin high before changing the clock polarity and phase.

When using 3-wire SPI, pull the SDO pin up to V DD I/O or down to ground via a 10 kΩ resistor, as shown in Figure 20.

CS is the serial port enable line and is controlled by the SPI controller. This line must go low at the start of a transmission and high at the end of a transmission, as shown in Figure 23. SCLK is the serial port clock and is supplied by the SPI controller. SDI and SDO are the serial data input and output, respectively.

Figure 20. 3-Wire SPI Connection Diagram

<!-- image -->

Figure 21. 4-Wire SPI Connection Diagram

<!-- image -->

To read or write multiple bytes in a single transmission, the multiple byte bit, located after the R/W bit in the first byte transfer (MB in Figure 23 to Figure 25), must be set. After the register addressing and the first byte of data, each subsequent set of clock pulses (eight clock pulses) causes the ADXL314 to point to the next register for a read or write. This shifting continues until the clock pulses cease and CS is deasserted. To perform reads or writes on different nonsequential registers, CS must be deasserted between transmissions, and the new register must be addressed separately.

The timing diagram for 3-wire SPI reads or writes is shown in Figure 25. The 4-wire equivalents for SPI writes and reads are shown in Figure 23 and Figure 24, respectively. For correct operation of the device, the logic thresholds and timing parameters in Table 12 and Table 13 must be met at all times.

Use of the 3200 Hz and 1600 Hz output data rates is only recommended with SPI communication rates greater than or equal to 2 MHz. The 800 Hz output data rate is recommended only for communication speeds greater than or equal to 400 kHz, and the remaining data rates scale proportionally. For example, the minimum recommended communication speed for a 200 Hz output data rate is 100 kHz. Operation at an output data rate less than

## SERIAL COMMUNICATIONS

the recommended minimum may result in undesirable effects on the acceleration data, including missing samples or additional noise.

## Preventing Bus Traffic Errors

The ADXL314 pin initiates SPI transactions and enables I 2 C mode. When the ADXL314 is used on a SPI bus with multiple devices, its pin is held high while the controller communicates with the other devices. There may be conditions where a SPI command transmitted to another device looks like a valid I 2 C command. In this case, the ADXL314 interprets this as an attempt to communicate in I 2 C mode and may interfere with other bus traffic. Unless bus traffic can be adequately controlled to ensure such a condition never occurs, it is recommended to add a logic OR gate in front of the SDI pin, as shown in Figure 22.

Table 12. SPI Digital Input and Output

|                                   |                            | Limit 1        | Limit 1        |      |
|-----------------------------------|----------------------------|----------------|----------------|------|
| Parameter                         | Test Conditions            | Min            | Max            | Unit |
| Digital Input                     |                            |                |                |      |
| Low Level Input Voltage (V IL )   |                            |                | 0.3 × V DD I/O | V    |
| High Level Input Voltage (V IH )  |                            | 0.7 × V DD I/O |                | V    |
| Low Level Input Current (I IL )   | V IN = V DD I/O            |                | 0.1            | µA   |
| High Level Input Current (I IH )  | V IN = 0 V                 | -0.1           |                | µA   |
| Digital Output                    |                            |                |                |      |
| Low Level Output Voltage (V OL )  | I OL = 10 mA               |                | 0.2 × V DD I/O | V    |
| High Level Output Voltage (V OH ) | I OH = -4 mA               | 0.8 × V DD I/O |                | V    |
| Low Level Output Current (I OL )  | V OL = V OL, max           | 10             |                | mA   |
| High Level Output Current (I OH ) | V OH = V OH, min           |                | -4             | mA   |
| Pin Capacitance                   | f IN = 1 MHz, V IN = 2.5 V |                | 8              | pF   |

1 Limits based on characterization results, not production tested.

Table 13. SPI Timing (T A = 25°C, V S = V DD I/O = 3.3 V) 1

| Parameter   | Limit 2,     | Limit 2,   |      |                                                                               |
|-------------|--------------|------------|------|-------------------------------------------------------------------------------|
| Parameter   | Min          | Max        | Unit | Description                                                                   |
| f SCLK      |              | 5          | MHz  | SPI clock frequency                                                           |
| t SCLK      | 200          |            | ns   | 1/(SPI clock frequency) mark-space ratio for the SCLK input is 40/60 to 60/40 |
| t DELAY     | 5            |            | ns   | CS falling edge to SCLK falling edge                                          |
| t QUIET     | 5            |            | ns   | SCLK rising edge to CS rising edge                                            |
| t DIS       |              | 10         | ns   | CS rising edge to SDO disabled                                                |
| t CS,DIS    | 150          |            | ns   | CS deassertion between SPI communications                                     |
| t S         | 0.3 × t SCLK |            | ns   | SCLK low pulse width (space)                                                  |
| t M         | 0.3 × t SCLK |            | ns   | SCLK high pulse width (mark)                                                  |
| t SETUP     | 5            |            | ns   | SDI valid before SCLK rising edge                                             |
| t HOLD      | 5            |            | ns   | SDI valid after SCLK rising edge                                              |
| t SDO       |              | 40         | ns   | SCLK falling edge to SDO/SDIO output transition                               |
| t R 4       |              | 20         | ns   | SDO/SDIO output high to output low transition                                 |
| t F 4       |              | 20         | ns   | SDO/SDIO output low to output high transition                                 |

This OR gate holds the SDA line high when CS is high to prevent bus traffic at the ADXL314 from appearing as an I 2 C start command.

Figure 22. Recommended SPI Connection Diagram when Using Multiple SPI Devices on a Single Bus

<!-- image -->

## SERIAL COMMUNICATIONS

- 3 Output rise and fall times measured with capacitive load of 150 pF.

<!-- image -->

Figure 23. SPI 4-Wire Write

Figure 24. SPI 4-Wire Read

<!-- image -->

Figure 25. SPI 3-Wire Read and Write

<!-- image -->

## SERIAL COMMUNICATIONS

## I 2 C

With CS tied high to V DD I/O , the ADXL314 is in I 2 C mode, requiring a simple 2-wire connection as shown in Figure 26. The ADXL314 conforms to the UM10204 I 2 C-Bus Specification and User Manual , Rev. 03-19 June 2007, available from NXP Semiconductor. It supports standard (100 kHz) and fast (400 kHz) data transfer modes if the bus parameters given in Table 14 and Table 15 are met. Single-byte or multiple-byte reads and writes are supported, as shown in Figure 27. With the ALT ADDRESS pin high, the 7-bit I 2 C address for the device is 0x1D, followed by the R/W bit, which translates to 0x3A for a write and 0x3B for a read. An alternate I 2 C address of 0x53 (followed by the R/W bit) can be chosen by grounding the ALT ADDRESS pin (Pin 23), which translates to 0xA6 for a write and 0xA7 for a read.

## Table 14. I 2 C Digital Input and Output

Figure 26. I 2 C Connection Diagram (Address 0x53)

<!-- image -->

If other devices are connected to the same I 2 C bus, the nominal operating voltage level of these other devices cannot exceed V DD I/O by more than 0.3 V. External pull-up resistors, R P , are necessary for proper I 2 C operation. Refer to the UM10204 I 2 C-Bus Specification and User Manual , Rev. 03-19 June 2007, when selecting pull-up resistor values to ensure proper operation.

|                                  |                             | Limit 1        | Limit 1        |      |
|----------------------------------|-----------------------------|----------------|----------------|------|
| Parameter                        | Test Conditions             | Min            | Max            | Unit |
| Digital Input                    |                             |                |                |      |
| Low Level Input Voltage (V IL )  |                             |                | 0.3 × V DD I/O | V    |
| High Level Input Voltage (V IH ) |                             | 0.7 × V DD I/O |                | V    |
| Low Level Input Current (I IL )  | V IN = V DD I/O             |                | 0.1            | µA   |
| High Level Input Current (I IH ) | V IN = 0 V                  | -0.1           |                | µA   |
| Digital Output                   |                             |                |                |      |
| Low Level Output Voltage (V OL ) | V DD I/O < 2 V, I OL = 3 mA |                | 0.2 × V DD I/O | V    |
|                                  | V DD I/O ≥ 2 V, I OL = 3 mA |                | 400            | mV   |
| Low Level Output Current (I OL ) | V OL = V OL, max            | 3              |                | mA   |
| Pin Capacitance                  | f IN = 1 MHz, V IN = 2.5 V  |                | 8              | pF   |

1 Limits based on characterization results; not production tested.

Figure 27. I 2 C Device Addressing

<!-- image -->

Table 15. I 2 C Timing (T A = 25°C, V S = V DD I/O = 3.3 V)

|           | Limit 1, 2   | Limit 1, 2   |      |                     |
|-----------|--------------|--------------|------|---------------------|
| Parameter | Min          | Max          | Unit | Description         |
| f SCL     | 2.5          | 400          | kHz  | SCL clock frequency |
| t 1       |              |              | µs   | SCL cycle time      |

## SERIAL COMMUNICATIONS

Table 15. I 2 C Timing (T A = 25°C, V S = V DD I/O = 3.3 V)

| Parameter      | Limit 1, 2     | Limit 1, 2   | Unit   | Description                                                          |
|----------------|----------------|--------------|--------|----------------------------------------------------------------------|
| Parameter      | Min            | Max          | Unit   | Description                                                          |
| t 2            | 0.6            |              | µs     | t HIGH , SCL high time                                               |
| t 3            | 1.3            |              | µs     | t LOW , SCL low time                                                 |
| t 4            | 0.6            |              | µs     | t HD, STA , start/repeated start condition hold time                 |
| t 5            | 100            |              | ns     | t SU, DAT , data setup time                                          |
| t 6 3, 4, 5, 6 | 0              | 0.9          | µs     | t HD, DAT , data hold time                                           |
| t 7            | 0.6            |              | µs     | t SU, STA , setup time for repeated start                            |
| t 8            | 0.6            |              | µs     | t SU, STO , stop condition setup time                                |
| t 9            | 1.3            |              | µs     | t BUF , bus-free time between a stop condition and a start condition |
| t 10           |                | 300          | ns     | t R , rise time of both SCL and SDA when receiving                   |
|                | 0              |              | ns     | t R , rise time of both SCL and SDA when receiving or transmitting   |
| t 11           |                | 250          | ns     | t F , fall time of SDA when receiving                                |
|                |                | 300          | ns     | t F , fall time of both SCL and SDA when transmitting                |
|                | 20 + 0.1 C b 7 |              | ns     | t F , fall time of both SCL and SDA when transmitting or receiving   |
| C b            |                | 400          | pF     | Capacitive load for each bus line                                    |

- 1 Limits based on characterization results, with f SCL = 400 kHz and a 3 mA sink current; not production tested.
- 2 All values referred to the V IH and the V IL levels given in Table 14.
- 3 t 6 is the data hold time that is measured from the falling edge of SCL. It applies to data in transmission and acknowledge.
- 4 A transmitting device must internally provide an output hold time of at least 300 ns for the SDA signal (with respect to V IH(min) of the SCL signal) to bridge the undefined region of the falling edge of SCL.
- 5 The maximum t 6 value must be met only if the device does not stretch the low period (t 3 ) of the SCL signal.
- 6 The maximum value for t 6 is a function of the clock low time (t 3 ), the clock rise time (t 10 ), and the minimum data setup time (t 5(min) ). This value is calculated as t 6(max) = t 3 -t 10 - t 5(min) .
- 7 Cb  is the total capacitance of one bus line in picofarads.

Figure 28. I 2 C Timing Diagram

<!-- image -->

## REGISTER MAP

## Table 16. Register Map

| Address (Hex)   | Name          | Type   | Reset Value (Hex)   | Description                                                |
|-----------------|---------------|--------|---------------------|------------------------------------------------------------|
| 0x00            | DEVID         | R      | 0xE5                | Device ID.                                                 |
| 0x01 to 0x1D    | Reserved      |        |                     | Reserved. Do not access.                                   |
| 0x1E            | OFSX          | R/W    | 0x00                | X-axis offset.                                             |
| 0x1F            | OFSY          | R/W    | 0x00                | Y-axis offset.                                             |
| 0x20            | OFSZ          | R/W    | 0x00                | Z-axis offset.                                             |
| 0x21            | Reserved      |        |                     | Reserved. Do not access.                                   |
| 0x22            | Reserved      |        |                     | Reserved. Do not access.                                   |
| 0x23            | Reserved      |        |                     | Reserved. Do not access.                                   |
| 0x24            | THRESH_ACT    | R/W    | 0x00                | Activity threshold.                                        |
| 0x25            | THRESH_INACT  | R/W    | 0x00                | Inactivity threshold.                                      |
| 0x26            | TIME_INACT    | R/W    | 0x00                | Inactivity time.                                           |
| 0x27            | ACT_INACT_CTL | R/W    | 0x00                | Axis enable control for activity and inactivity detection. |
| 0x28            | Reserved      |        |                     | Reserved. Do not access.                                   |
| 0x29            | Reserved      |        |                     | Reserved. Do not access.                                   |
| 0x2A            | Reserved      |        |                     | Reserved. Do not access.                                   |
| 0x2B            | Reserved      |        |                     | Reserved. Do not access.                                   |
| 0x2C            | BW_RATE       | R/W    | 0x0A                | Data rate and power mode control.                          |
| 0x2D            | POWER_CTL     | R/W    | 0x00                | Power-saving features control.                             |
| 0x2E            | INT_ENABLE    | R/W    | 0x00                | Interrupt enable control.                                  |
| 0x2F            | INT_MAP       | R/W    | 0x00                | Interrupt mapping control.                                 |
| 0x30            | INT_SOURCE    | R      | 0x02                | Source of interrupts.                                      |
| 0x31            | DATA_FORMAT   | R/W    | 0x0B                | Data format control.                                       |
| 0x32            | DATAX0        | R      | 0x00                | X-Axis Data 0.                                             |
| 0x33            | DATAX1        | R      | 0x00                | X-Axis Data 1.                                             |
| 0x34            | DATAY0        | R      | 0x00                | Y-Axis Data 0.                                             |
| 0x35            | DATAY1        | R      | 0x00                | Y-Axis Data 1.                                             |
| 0x36            | DATAZ0        | R      | 0x00                | Z-Axis Data 0.                                             |
| 0x37            | DATAZ1        | R      | 0x00                | Z-Axis Data 1.                                             |
| 0x38            | FIFO_CTL      | R/W    | 0x00                | FIFO control.                                              |
| 0x39            | FIFO_STATUS   | R      | 0x00                | FIFO status.                                               |

## REGISTER DEFINITIONS

## Register 0x00-DEVID (Read Only)

| Table 17. Register 0x00   | Table 17. Register 0x00   | Table 17. Register 0x00   | Table 17. Register 0x00   | Table 17. Register 0x00   | Table 17. Register 0x00   | Table 17. Register 0x00   | Table 17. Register 0x00   |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| D7                        | D6                        | D5                        | D4                        | D3                        | D2                        | D1                        | D0                        |
| 1                         | 1                         | 1                         | 0                         | 0                         | 1                         | 0                         | 1                         |

The DEVID register holds a fixed device ID code of 0xE5.

## Register 0x1E, Register 0x1F, Register 0x20OFSX, OFSY, OFSZ (Read/Write)

The OFSX, OFSY, and OFSZ registers are each eight bits and offer user-set offset adjustments in twos complement format with a scale factor of 195 m g /LSB. The value stored in the offset registers is automatically added to the acceleration data, and the resulting value is stored in the output data registers.

## Register 0x24-THRESH\_ACT (Read/Write)

The THRESH\_ACT register is eight bits and holds the threshold value for detecting activity. The data format is unsigned; therefore, the magnitude of the activity event is compared with the value in the THRESH\_ACT register. The scale factor is 784 m g /LSB. A value of 0 may result in undesirable behavior if the activity interrupt is enabled.

## Register 0x25-THRESH\_INACT (Read/Write)

The THRESH\_INACT register is eight bits and holds the threshold value for detecting inactivity. The data format is unsigned; therefore, the magnitude of the inactivity event is compared with the value in the THRESH\_INACT register. The scale factor is 784 m g /LSB. A value of 0 may result in undesirable behavior if the inactivity interrupt is enabled.

## REGISTER MAP

## Register 0x26-TIME\_INACT (Read/Write)

The TIME\_INACT register is eight bits and contains an unsigned time value representing the amount of time that acceleration must be less than the value in the THRESH\_INACT register for inactivity to be declared. The scale factor is 1 sec/LSB. Unlike the other interrupt functions, which use unfiltered data (see the Threshold section), the inactivity function uses filtered output data. At least one output sample must be generated for the inactivity interrupt to be triggered. This results in the function appearing unresponsive if the TIME\_INACT register is set to a value less than the time constant of the output data rate. A value of 0 results in an interrupt when the output data is less than the value in the THRESH\_INACT register.

## Register 0x27-ACT\_INACT\_CTL (Read/Write)

Table 18. Register 0x27-Bits[D7:D4]

| D7                                  | D6                                  | D5                                  | D4                                  |
|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|
| ACT ac/dc                           | ACT_X enable                        | ACT_Y enable                        | ACT_Z enable                        |
| Table 19. Register 0x27-Bits[D3:D0] | Table 19. Register 0x27-Bits[D3:D0] | Table 19. Register 0x27-Bits[D3:D0] | Table 19. Register 0x27-Bits[D3:D0] |
| D3                                  | D2                                  | D1                                  | D0                                  |
| INACT ac/dc                         | INACT_X enable                      | INACT_Y enable                      | INACT_Z enable                      |

## ACT AC/DC and INACT AD/DC Bits

A setting of 0 selects dc-coupled operation, and a setting of 1 enables ac-coupled operation.

In dc-coupled operation, the current acceleration magnitude is compared directly with THRESH\_ACT and THRESH\_INACT to determine whether activity or inactivity is detected.

In ac-coupled operation for activity detection, the acceleration value at the start of activity detection is taken as a reference value. New samples of acceleration are then compared to this reference value and, if the magnitude of the difference exceeds the THRESH\_ACT value, the device triggers an activity interrupt.

Similarly, in ac-coupled operation for inactivity detection, a reference value is used for comparison and is updated whenever the device exceeds the inactivity threshold. After the reference value is selected, the device compares the magnitude of the difference between the reference value and the current acceleration with THRESH\_INACT. If the difference is less than the value in THRESH\_INACT for the time in TIME\_INACT, the device is considered inactive and the inactivity interrupt is triggered.

## ACT\_x Enable Bits and INACT\_x Enable Bits

A setting of 1 enables x-axis, y-axis, or z-axis participation in detecting activity or inactivity. A setting of 0 excludes the selected axis from participation. If all axes are excluded, the function is disabled. For activity detection, all participating axes are logically OR'ed, causing the activity function to trigger when any of the participating axes exceeds the threshold. For inactivity detection, all participating axes are logically AND'ed, causing the inactivity function to trigger only if all participating axes are less than the threshold for the specified period of time.

## Register 0x2C-BW\_RATE (Read/Write)

Table 20. Register 0x2C

|   D7 |   D6 |   D5 | D4        | D3   | D2   | D1   |
|------|------|------|-----------|------|------|------|
|    0 |    0 |    0 | LOW_POWER |      | Rate |      |

## LOW\_POWER Bit

A setting of 0 in the LOW\_POWER bit selects normal operation, and a setting of 1 selects reduced power operation, which has somewhat higher noise (see the Power Modes section for details).

## Rate Bits

The rate bits select the device bandwidth and output data rate (see Table 8 and Table 9 for details). The default value is 0x0A, which translates to a 100 Hz output data rate. An output data rate must be selected that is appropriate for the communication protocol and frequency selected. Selecting too high of an output data rate with a low communication speed results in samples being discarded.

## Register 0x2D-POWER\_CTL (Read/Write)

Table 21. Register 0x2D

|   D7 |   D6 | D5   | D4         | D3      | D2    | D1 D0   |
|------|------|------|------------|---------|-------|---------|
|    0 |    0 | Link | AUTO_SLEEP | Measure | Sleep | Wakeup  |

## Link Bit

A setting of 1 in the link bit with both the activity and inactivity functions enabled delays the start of the activity function until inactivity is detected. After activity is detected, inactivity detection begins, preventing the detection of activity. This bit serially links the activity and inactivity functions.

When this bit is set to 0, the inactivity and activity functions are concurrent. Additional information can be found in the Link Mode section.

When clearing the link bit, it is recommended that the device be placed into standby mode and then set back to measurement mode with a subsequent write. This recommendation is advised to ensure that the device is properly biased if sleep mode is manually disabled. Otherwise, the first few samples of data after the link bit is cleared may have additional noise, especially if the device was asleep when the bit was cleared.

## AUTO\_SLEEP Bit

If the link bit is set, a setting of 1 in the AUTO\_SLEEP bit sets the ADXL314 to switch to sleep mode when inactivity is detected (that is, when acceleration has been less than the THRESH\_INACT value for at least the time indicated by TIME\_INACT). A setting of 0

## REGISTER MAP

disables automatic switching to sleep mode. See the description of the sleep bit in the Sleep Bit section for more information.

When clearing the AUTO\_SLEEP bit, it is recommended that the device be placed into standby mode and then set back to measurement mode with a subsequent write. This recommendation is advised to ensure that the device is properly biased if sleep mode is manually disabled. Otherwise, the first few samples of data after the AUTO\_SLEEP bit is cleared may have additional noise, especially if the device was asleep when the bit was cleared.

## Measure Bit

A setting of 0 in the measure bit places the device into standby mode, and a setting of 1 places the device into measurement mode. The ADXL314 powers up in standby mode with minimum power consumption.

## Sleep Bit

A setting of 0 in the sleep bit puts the device into the normal mode of operation, and a setting of 1 places the device into sleep mode. Sleep mode suppresses DATA\_READY (see Register 0x2E, Register 0x2F, and Register 0x30), stops transmission of data to FIFO, and switches the sampling rate to one specified by the wake-up bits. In sleep mode, only the activity function can be used.

When clearing the sleep bit, it is recommended that the device be placed into standby mode and then set back to measurement mode with a subsequent write. This recommendation is advised to ensure that the device is properly biased if sleep mode is manually disabled. Otherwise, the first few samples of data after the sleep bit is cleared may have additional noise, especially if the device was asleep when the bit was cleared.

## Wake-Up Bits

These bits control the frequency of readings in sleep mode as described in Table 22.

Table 22. Frequency of Readings in Sleep Mode

|    | Setting   |                |
|----|-----------|----------------|
| D1 | D0        | Frequency (Hz) |
| 0  | 0         | 8              |
| 0  | 1         | 4              |
| 1  | 0         | 2              |
| 1  | 1         | 1              |

## Register 0x2E-INT\_ENABLE (Read/Write)

## Table 23. Register 0x2E-Bits[D7:D4]

| D7                                  | D6                                  | D5                                  | D4                                  |
|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|
| DATA_READY                          | Not applicable                      | Not applicable                      | Activity                            |
| Table 24. Register 0x2E-Bits[D3:D0] | Table 24. Register 0x2E-Bits[D3:D0] | Table 24. Register 0x2E-Bits[D3:D0] | Table 24. Register 0x2E-Bits[D3:D0] |
| D3                                  | D2                                  | D1                                  | D0                                  |
| Inactivity                          | Not applicable                      | Watermark                           | Overrun                             |

Setting bits in this register to 1 enables their respective functions to generate interrupts, whereas setting bits in this register to 0 prevents the functions from generating interrupts. The DATA\_READY, watermark, and overrun bits enable only the interrupt output; the functions are always enabled. It is recommended that interrupts be configured before enabling their outputs.

## Register 0x2F-INT\_MAP (Read/Write)

Table 25. Register 0x2F-Bits[D7:D4]

| D7                                  | D6                                  | D5                                  | D4                                  |
|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|
| DATA_READY                          | Not applicable                      | Not applicable                      | Activity                            |
| Table 26. Register 0x2F-Bits[D3:D0] | Table 26. Register 0x2F-Bits[D3:D0] | Table 26. Register 0x2F-Bits[D3:D0] | Table 26. Register 0x2F-Bits[D3:D0] |
| D3                                  | D2                                  | D1                                  | D0                                  |
| Inactivity                          | Not applicable                      | Watermark                           | Overrun                             |

Any bits set to 0 in this register send their respective interrupts to the INT1 pin, whereas bits set to 1 in this register send their respective interrupts to the INT2 pin. All selected interrupts for a given pin are OR'ed.

## Register 0x30-INT\_SOURCE (Read Only)

## Table 27. Register 0x30-Bits[D7:D4]

| D7                                  | D6                                  | D5                                  | D4                                  |
|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|
| DATA_READY                          | Not applicable                      | Not applicable                      | Activity                            |
| Table 28. Register 0x30-Bits[D3:D0] | Table 28. Register 0x30-Bits[D3:D0] | Table 28. Register 0x30-Bits[D3:D0] | Table 28. Register 0x30-Bits[D3:D0] |
| D3                                  | D2                                  | D1                                  | D0                                  |
| Inactivity                          | Not applicable                      | Watermark                           | Overrun                             |

Bits set to 1 in this register indicate that their respective functions have triggered an event, whereas bits set to 0 indicate that the corresponding event has not occurred. The DATA\_READY, watermark, and overrun bits are always set if the corresponding events occur, regardless of the INT\_ENABLE register settings, and are cleared by reading data from the DATAX, DATAY, and DATAZ registers. Other bits, and the corresponding interrupts, are cleared by reading the INT\_SOURCE register.

## Register 0x31-DATA\_FORMAT (Read/Write)

| Table 29. Register 0x31   | Table 29. Register 0x31   | Table 29. Register 0x31   | Table 29. Register 0x31   | Table 29. Register 0x31   | Table 29. Register 0x31   | Table 29. Register 0x31   | Table 29. Register 0x31   |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| D7                        | D6                        | D5                        | D4                        | D3                        | D2                        | D1                        | D0                        |
| SELF_TEST                 | SPI                       | INT_INVERT                | 0                         | 1                         | Justify                   | 1                         | 1                         |

The DATA\_FORMAT register controls the presentation of data to Register 0x32 through Register 0x37.

## SELF\_TEST Bit

A setting of 1 in the SELF\_TEST bit applies a self test force to the sensor, causing a shift in the output data. A value of 0 disables the self test force. For more information about the self test function, see the Self Test section and the Using Self Test section.

## REGISTER MAP

## SPI Bit

Set the SPI bit to 1 to set the device to 3-wire SPI mode, and set the SPI bit to 0 to set the device to 4-wire SPI mode.

## INT\_INVERT Bit

Set the INT\_INVERT bit to 1 to set the interrupts to active high, and set the INT\_INET bit to 1 to set the interrupts to active low.

## Justify Bit

A setting of 1 in the justify bit selects left (MSB) justified mode, and a setting of 0 in the justify bit selects right justified mode with a sign extension.

## Register 0x32 to Register 0x37-DATAX0, DATAX1, DATAY0, DATAY1, DATAZ0, DATAZ1 (Read Only)

These six bytes (Register 0x32 to Register 0x37) are eight bits each and hold the output data for each axis. Register 0x32 and Register 0x33 hold the output data for the x-axis, Register 0x34 and Register 0x35 hold the output data for the y-axis, and Register 0x36 and Register 0x37 hold the output data for the z-axis.

The output data is twos complement, with DATAx0 as the least significant byte, and DATAx1 as the most significant byte, where x represent X, Y, or Z. The DATA\_FORMAT register (Address 0x31) controls the format of the data. It is recommended that a multiplebyte read of all registers be performed to prevent a change in data between reads of sequential registers.

## Register 0x38-FIFO\_CTL (Read/Write)

| Table 30. Register 0x38   | Table 30. Register 0x38   | Table 30. Register 0x38   | Table 30. Register 0x38   | Table 30. Register 0x38   | Table 30. Register 0x38   | Table 30. Register 0x38   |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| D7                        | D6                        | D5                        | D4                        | D3 D2                     | D1                        | D0                        |
| FIFO_MODE                 | Trigger                   |                           |                           | Samples                   |                           |                           |

## FIFO\_MODE Bits

The FIFO\_MODE bits set the FIFO mode, as described in Table 31.

Table 31. FIFO Modes

| Setting   | Setting   |         |                                                                                                                                                                                                                     |
|-----------|-----------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D7        | D6        | Mode    | Function                                                                                                                                                                                                            |
| 0         | 0         | Bypass  | The FIFO buffer is bypassed.                                                                                                                                                                                        |
| 0         | 1         | FIFO    | The FIFO buffer collects up to 32 values and then stops collecting data. The FIFO buffer only collects new data when the FIFO buffer is not full.                                                                   |
| 1         | 0         | Stream  | The FIFO buffer holds the last 32 data values. When the FIFO buffer is full, the oldest data is overwritten with newer data.                                                                                        |
| 1         | 1         | Trigger | When triggered by the trigger bit, the FIFO buffer holds the last data samples before the trigger event and then continues to collect data until full. New data is collected only when the FIFO buffer is not full. |

## Trigger Bit

A value of 0 in the trigger bit links the trigger event of trigger mode to INT1, and a value of 1 in the trigger bit links the trigger event to INT2.

## Samples Bits

The function of the samples bits depends on the FIFO mode selected (see Table 32). Entering a value of 0 in the samples bits immediately sets the watermark status bit in the INT\_SOURCE register, regardless of which FIFO mode is selected. Undesirable operation may occur if a value of 0 is used for the samples bits when trigger mode is used.

Table 32. Samples Bits Functions

| FIFO Mode   | Samples Bits Function                                                                   |
|-------------|-----------------------------------------------------------------------------------------|
| Bypass      | None.                                                                                   |
| FIFO        | Specifies how many FIFO entries are needed to trigger a watermark interrupt.            |
| Stream      | Specifies how many FIFO entries are needed to trigger a watermark interrupt.            |
| Trigger     | Specifies how many FIFO samples are retained in the FIFO buffer before a trigger event. |

## Register 0x39-FIFO\_STATUS (Read Only)

| Table 33. Register 0x39   | Table 33. Register 0x39   | Table 33. Register 0x39   | Table 33. Register 0x39   | Table 33. Register 0x39   | Table 33. Register 0x39   | Table 33. Register 0x39   | Table 33. Register 0x39   |
|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|
| D7                        | D6                        | D5                        | D4                        | D3                        | D2                        | D1                        | D0                        |
| FIFO_TRIG                 | 0                         |                           |                           |                           | Entries                   |                           |                           |

## FIFO\_TRIG Bit

A 1 in the FIFO\_TRIG bit corresponds to a trigger event occurring, and a 0 means that a FIFO trigger event has not occurred.

## Entries Bits

The entries bits report how many data values are stored in the FIFO. Access to collect the data from the FIFO is provided through the DATAX, DATAY, and DATAZ registers. The FIFO reads must be done in burst or multiple-byte mode because each FIFO level is cleared after any read (single- or multiple-byte) of the FIFO. The FIFO stores a maximum of 32 entries, which equates to a maximum of 33 entries available at any given time because an additional entry is available at the output filter of the device.

## APPLICATIONS INFORMATION

## POWER SUPPLY REQUIREMENTS

The ADXL314 operates using supply voltage rails ranging from 2.0 V to 3.9 V. The operating voltage range (V S ) specified in Table 1 ranges from 2.0 V to 3.6 V to account for inaccuracies and transients of up to ±10% on the supply voltage.

When powering up the ADXL314, the V S and V DD I/O rise time must be linear and within 250 µs to reach 2.0 V. When powering down, VS  and V DD I/O must be fully discharged to ground level (0 V) for at least 200 ms before the device is powered back up. To enable supply discharge, it is recommended to power the device from a microcontroller general-purpose input and output (GPIO), connect a shutdown discharge switch to the supply, or use a voltage regulator with a shutdown discharge feature.

A 1 µF tantalum capacitor (C S ) at V S and a 0.1 µF ceramic capacitor (C I/O ) at V DD I/O placed close to the ADXL314 supply pins are recommended to adequately decouple the accelerometer from noise on the power supply. If additional decoupling is necessary, a resistor or ferrite bead (no larger than 100 Ω) in series with V S may be helpful. Additionally, increasing the bypass capacitance on VS  to a 10 µF tantalum capacitor in parallel with a 0.1 µF ceramic capacitor may also improve noise performance.

Make sure that the connection from the ADXL314 ground to the power supply ground has low impedance because noise transmitted through ground has an effect similar to noise transmitted through V S . It is recommended that V S and V DD I/O be separate supplies to minimize digital clocking noise on the V S supply. If it is not possible to use separate supplies, additional filtering of the supplies, as previously mentioned, may be necessary.

Figure 29. Application Diagram

<!-- image -->

## MECHANICAL CONSIDERATIONS FOR MOUNTING

Mount the ADXL314 on the PCB in a location close to a hard mounting point of the PCB to the case. Mounting the ADXL314 at an unsupported PCB location, as shown in Figure 30, may result in large, apparent measurement errors due to undampened PCB vibration. Locating the accelerometer near a hard mounting point ensures that any PCB vibration at the accelerometer is above the mechanical sensor resonant frequency of the accelerometer and is, therefore, effectively invisible to the accelerometer. Multiple mounting points, close to the sensor, and/or a thicker PCB also help to reduce the effects of system resonance on the performance of the sensor.

Figure 30. Incorrectly Placed Accelerometers

<!-- image -->

## THRESHOLD

The lower output data rates are achieved by decimating a common sampling frequency inside the device. The activity detection function is performed using undecimated data. Because the bandwidth of the output data varies with the data rate and is lower than the bandwidth of the undecimated data, the high frequency and high g data that determine activity may not be present if the output of the accelerometer is examined, which can result in functions triggering when acceleration data does not appear to meet the conditions set by the user for the corresponding function.

## LINK MODE

The function of the link bit is to reduce the number of activity interrupts that the processor must service by setting the device to look for activity only after inactivity. For proper operation of this feature, the processor must still respond to the activity and inactivity interrupts by reading the INT\_SOURCE register (Address 0x30) and, therefore, clearing the interrupts. If an activity interrupt is not cleared, the device cannot go into autosleep mode.

## SLEEP MODE VS. LOW POWER MODE

In applications where a low data rate and low power consumption are desired (at the expense of noise performance), it is recommended that low power mode be used. The use of low power mode preserves the functionality of the DATA\_READY interrupt and the FIFO for postprocessing of the acceleration data. Sleep mode, while offering a low data rate and power consumption, is not intended for data acquisition.

However, when sleep mode is used in conjunction with the autosleep mode and the link mode, the device can automatically switch to a low power, low sampling rate mode when inactivity is detected. To prevent the generation of redundant inactivity interrupts, the inactivity interrupt is automatically disabled and activity is enabled. When the ADXL314 is in sleep mode, the host processor can also be placed into sleep mode or low power mode to save significant system power. Once activity is detected, the accelerometer automatically switches back to the original data rate of the application and provides an activity interrupt that can be used to wake up the host processor. Similar to when inactivity occurs, detection of activity events is disabled and inactivity is enabled.

## APPLICATIONS INFORMATION

## OFFSET COMPENSATION

Accelerometers are mechanical structures containing elements that are free to move. These moving parts can be sensitive to mechanical stresses, much more so than solid state electronics.

The 0 g bias, or offset, is an important accelerometer metric because it defines the baseline for measuring acceleration. Additional stresses can be applied during assembly of a system containing an accelerometer. These stresses can come from, but are not limited to, component soldering, board stress during mounting, and application of any compounds on or over the component. If offset compensation is deemed necessary, it is recommended that it be performed after system assembly.

## USING SELF TEST

The self test change is defined as the difference between the acceleration output of an axis with self test enabled and the acceleration output of the same axis with self test disabled. Due to device filtering, the output reaches its final value after 4 × τ when enabling or disabling self test, where τ = 1/(data rate). This definition assumes that the sensor does not move between these two measurements; if the sensor moves, a nonself test related shift corrupts the test.

The self test response in all axes exhibits bimodal behavior. However, performing the self test check in the z-axis is a reliable way to corroborate the integrity of the sensor.

Proper configuration of the ADXL314 is necessary for an accurate self test measurement. To configure the device for self test, take the following steps:

1. Set the data rate from 100 Hz to 800 Hz, or set the data rate to 3200 Hz by writing to the rate bits (Bits[D3:D0]) in the BW\_RATE register (Address 0x2C). Write a value from 0x0A to 0x0D, or write 0x0F to the BW\_RATE register.
2. Configure the device for normal power operation by clearing the LOW\_POWER bit (Bit D4) in the BW\_RATE register (Address 0x2C).
3. Retrieve samples of z-axis acceleration data from the sensor and average them together. Averaging at least 10 samples is recommended.
4. Store the averaged value and label it as ZST\_OFF.
5. Enable self test by setting the SELF\_TEST bit (Bit D7) in the DATA\_FORMAT register (Address 0x31). Note that the output
6. requires approximately four samples to settle after self test is enabled.
6. Retrieve samples of z-axis acceleration data and average them together. Averaging at least 10 samples is recommended.
7. Store the averaged value and label it as ZST\_ON.
8. Disable self test by clearing the SELF\_TEST bit (Bit D7) in the DATA\_FORMAT register (Address 0x31).

With the stored value for self test enabled and disabled, the self test change is as follows:

<!-- formula-not-decoded -->

This value can be converted to g by multiplying by the 48.83 m g /LSB scale factor.

If the self test change is within the valid range, the test is considered successful. Generally, a device is considered to pass if the minimum magnitude of change is achieved. However, a device that changes by more than the maximum magnitude is not necessarily a failure.

Another effective method for using the self test to verify that accelerometer functionality is to toggle the self test at a certain rate and then perform an FFT on the output. The FFT must have a corresponding tone at the frequency where the self test was toggled. Using an FFT in this way removes the dependency of the test on supply voltage and self test magnitude, which can vary within a rather wide range.

## ASYNCHRONOUS DATA READINGS

Asynchronous readings of acceleration data can lead to accessing the acceleration data registers while they are being updated. To avoid this, it is recommended to either enable FIFO stream mode or to synchronize a SPI/I 2 C transaction to the DATA\_READY interrupt functionality, so that the host processor samples immediately after the DATA\_READY interrupt goes high.

## DATA FORMATTING AT OUTPUT DATA RATE OF 3200 HZ AND 1600 HZ

When using the 3200 Hz or 1600 Hz output data rate, the LSB of the output data-word is always 0. When the data is right justified, the LSB corresponds to Bit D0 of the DATAx0 register, and when the data is left justified, the LSB corresponds to Bit D3 of the DATAx0 register.

## APPLICATIONS INFORMATION

## AXES OF ACCELERATION SENSITIVITY

Figure 31. Axes of Acceleration Sensitivity (Corresponding Output Voltage Increases When Accelerated Along the Sensitive Axis)

<!-- image -->

Figure 32. Output Response vs. Orientation to Gravity

<!-- image -->

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1, 2      | Temperature Range   | Package Description                           | Packing Quantity   | Package Option   |
|-----------------|---------------------|-----------------------------------------------|--------------------|------------------|
| ADXL314WBCPZ-RL | -40°C to +125°C     | 32-Lead Lead Frame Chip Scale Package [LFCSP] | Reel, 4000         | CP-32-17         |

## EVALUATION BOARDS

| Model 1       | Description      |
|---------------|------------------|
| EVAL-ADXL314Z | Evaluation Board |

Figure 33. 32-Lead Lead Frame Chip Scale Package [LFCSP] 5 mm × 5 mm Body and 1.45 mm Package Height (CP-32-17) Dimensions shown in millimeters

<!-- image -->

Figure 34. Sample Solder Pad Layout (Land Pattern)

<!-- image -->

## OUTLINE DIMENSIONS

## AUTOMOTIVE PRODUCTS

The ADXL314W model is available with controlled manufacturing to support the quality and reliability requirements of automotive applications. Note that this automotive model may have specifications that differ from the commercial models; therefore, designers should review the Specifications section of this data sheet carefully. Only the automotive grade product shown is available for use in automotive applications. Contact your local Analog Devices account representative for specific product ordering information and to obtain the specific Automotive Reliability reports for these models.

I 2 C refers to a communications protocol originally developed by Philips Semiconductors (now NXP Semiconductors).

<!-- image -->