<!-- lastmod 2021-01-14 -->
<!-- image -->

Data Sheet

## FEATURES

Multipurpose accelerometer with 10- to 13-bit resolution for use in a wide variety of applications

Digital output accessible via SPI (3- and 4-wire) and I 2 C Built-in motion detection features make tap, double-tap, activity, inactivity, orientation, and free-fall detection trivial

User-adjustable thresholds

Interrupts independently mappable to two interrupt pins Low power operation down to 23 µA and embedded FIFO for

reducing overall system power

Wide supply and I/O voltage range: 1.7 V to 2.75 V Wide operating temperature range (-40°C to +85°C) 10,000 g shock survival

Small, thin Pb free, RoHS compliant 3 mm × 3 mm × 0.95 mm

LGA package

## APPLICATIONS

Handsets Gaming and pointing devices Hard disk drive (HDD) protection

## 3-Axis, ±2 g /±4 g /±8 g /±16 g Ultralow

## Power Digital MEMS Accelerometer

[ADXL344](http://www.analog.com/ADXL344)

## GENERAL DESCRIPTION

The ADXL344 is a versatile 3-axis, digital-output, low g MEMS accelerometer. Selectable measurement range and bandwidth and configurable, built-in motion detection make it suitable for sensing acceleration in a wide variety of applications. Robustness to 10,000 g of shock and a wide temperature range (-40°C to +85°C) enable use of the accelerometer even in harsh environments.

The ADXL344 measures acceleration with high resolution (13-bit) measurement at up to ±16 g . Digital output data is formatted as 16-bit twos complement and is accessible through either a SPI (3- or 4-wire) or I 2 C digital interface. The ADXL344 can measure the static acceleration of gravity in tilt-sensing applications, as well as dynamic acceleration resulting from motion or shock. Its high resolution (3.9 m g /LSB) enables measurement of inclination changes less than 1.0°.

Several special sensing functions are provided. Activity and inactivity sensing detect the presence or lack of motion. Tap sensing detects single and double taps in any direction. Free-fall sensing detects if the device is falling. Orientation detection reports four- and six-position orientation and can trigger an interrupt upon change in orientation. These functions can be mapped individually to either of two interrupt output pins.

An integrated memory management system with a 32-level first in, first out (FIFO) buffer can be used to store data to minimize host processor activity and lower overall system power consumption.

The ADXL344 is supplied in a small, thin, 3 mm × 3 mm ×

0.95 mm, 16-terminal, plastic package.

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## ADXL344

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Applications....................................................................................... 1       |
| General Description......................................................................... 1              |
| Functional Block Diagram .............................................................. 1                   |
| Revision History ............................................................................... 2          |
| Specifications..................................................................................... 3       |
| Absolute Maximum Ratings............................................................ 5                      |
| Thermal Resistance ...................................................................... 5                 |
| Package Information.................................................................... 5                   |
| ESD Caution.................................................................................. 5             |
| Pin Configuration and Function Descriptions............................. 6                                  |
| Typical Performance Characteristics ............................................. 7                         |
| Theory of Operation ......................................................................10                |
| Power Sequencing ......................................................................10                   |
| Power Savings..............................................................................11               |
| Serial Communications .................................................................12                   |
| SPI.................................................................................................12      |
| I 2 C.................................................................................................15    |
| FIFO.............................................................................................18         |
| Self-Test........................................................................................19         |
| Register Map....................................................................................20          |

## REVISION HISTORY

4/12-Revision 0: Initial Version

| Register Definitions ...................................................................         |   21 |
|--------------------------------------------------------------------------------------------------|------|
| Applications Information..............................................................           |   27 |
| Power Supply Decoupling.........................................................                 |   27 |
| Mechanical Considerations for Mounting..............................                             |   27 |
| Tap Detection..............................................................................      |   27 |
| Improved Tap Detection............................................................               |   28 |
| Tap Sign ....................................................................................... |   28 |
| Threshold ....................................................................................   |   29 |
| Link Mode...................................................................................     |   29 |
| Sleep Mode vs. Low Power Mode.............................................                       |   29 |
| Offset Calibration.......................................................................        |   29 |
| Using Self-Test ............................................................................     |   30 |
| Orientation Sensing ...................................................................          |   31 |
| Data Formatting of Upper Data Rates.....................................                         |   32 |
| Noise Performance.....................................................................           |   33 |
| Operation at Voltages Other Than 2.6 V................................                           |   33 |
| Offset Performance at Lowest Data Rates...............................                           |   34 |
| Axes of Acceleration Sensitivity ...............................................                 |   35 |
| Layout and Design Recommendations ...................................                            |   36 |
| Outline Dimensions.......................................................................        |   37 |
| Ordering Guide ..........................................................................        |   37 |

## SPECIFICATIONS

TA = 25°C, VS = 2.6 V, VDD I/O = 1.8 V , acceleration = 0 g , CS = 10 μF tantalum, CI/O = 0.1 μF, output data rate (ODR) = 800 Hz, unless otherwise noted.

Table 1.

| Parameter                                            | Test Conditions/Comments                                              |   Min 1 | Typ 2          | Max 1   | Unit     |
|------------------------------------------------------|-----------------------------------------------------------------------|---------|----------------|---------|----------|
| SENSOR INPUT                                         | Each axis                                                             |         |                |         |          |
| Measurement Range                                    | User selectable                                                       |         | ±2, ±4, ±8,±16 |         | g        |
| Nonlinearity                                         | Percentage of full scale                                              |         | ±0.5           |         | %        |
| Inter-Axis Alignment Error                           |                                                                       |         | ±0.1           |         | Degrees  |
| Cross-Axis Sensitivity 3                             |                                                                       |         | ±1             |         | %        |
| OUTPUT RESOLUTION                                    | Each axis                                                             |         |                |         |          |
| All g Ranges                                         | 10-bit resolution                                                     |         | 10             |         | Bits     |
| ±2 g Range                                           | Full resolution                                                       |         | 10             |         | Bits     |
| ±4 g Range                                           | Full resolution                                                       |         | 11             |         | Bits     |
| ±8 g Range                                           | Full resolution                                                       |         | 12             |         | Bits     |
| ±16 g Range                                          | Full resolution                                                       |         | 13             |         | Bits     |
| SENSITIVITY                                          | Each axis                                                             |         |                |         |          |
| Sensitivity at X OUT ,Y OUT , Z OUT                  | All g ranges, full resolution                                         |         | 256            |         | LSB/ g   |
|                                                      | ±2 g , 10-bit resolution                                              |         | 256            |         | LSB/ g   |
|                                                      | ±4 g , 10-bit resolution                                              |         | 128            |         | LSB/ g   |
|                                                      | ±8 g, 10-bit resolution                                               |         | 64             |         | LSB/ g   |
|                                                      | ±16 g, 10-bit resolution                                              |         | 32             |         | LSB/ g   |
| Sensitivity Deviation from Ideal                     | All g ranges                                                          |         | ±1.0           |         | %        |
| Scale Factor at X OUT ,Y OUT , Z OUT                 | All g ranges, full resolution                                         |         | 3.9            |         | m g/ LSB |
|                                                      | ±2 g , 10-bit resolution                                              |         | 3.9            |         | m g/ LSB |
|                                                      | ±4 g, 10-bit resolution                                               |         | 7.8            |         | m g/ LSB |
|                                                      | ±8 g, 10-bit resolution                                               |         | 15.6           |         | m g/ LSB |
|                                                      | ±16 g, 10-bit resolution                                              |         | 31.2           |         | m g/ LSB |
| Sensitivity Change Due to Temperature                |                                                                       |         | ±0.02          |         | %/°C     |
| 0 g OFFSET                                           | Each axis                                                             |         |                |         |          |
| 0 g Output Deviation from Ideal for X-, Y-, Z-Axes   |                                                                       |         | ±35            |         | m g      |
| 0 g Offset vs.Temperature for X-, Y-, Z-Axes         |                                                                       |         | ±1.0           |         | m g /°C  |
| NOISE                                                |                                                                       |         |                |         |          |
| X-, Y-, Z-Axes                                       | ODR=100Hzfor±2 g , 10-bit resolution or all g ranges, full resolution |         | 1.5            |         | LSB rms  |
| OUTPUT DATA RATE AND BANDWIDTH                       | User selectable                                                       |         |                | 3200    |          |
| Output Data Rate (ODR) 4, 5, 6, 7                    |                                                                       |    0.10 |                |         | Hz       |
| SELF-TEST 8                                          |                                                                       |         |                |         |          |
| Output Change in X-Axis                              |                                                                       |    0.27 |                | 1.55    | g        |
| Output Change in Y-Axis                              |                                                                       |   -1.55 |                | -0.27   | g        |
| Output Change in Z-Axis                              |                                                                       |    0.40 |                | 1.95    | g        |
| POWER SUPPLY                                         |                                                                       |         |                |         |          |
| Operating Voltage Range (V S )                       |                                                                       |     1.7 | 2.6            | 2.75    | V        |
| Interface Voltage Range (V DDI/O )                   |                                                                       |     1.7 | 1.8            | V S     | V        |
| Measurement Mode Supply Current                      | ODR≥100Hz                                                             |         | 140            |         | µA       |
|                                                      | ODR<10Hz                                                              |         | 30             |         | µA       |
| Standby Mode Supply Current Turn-On andWake-UpTime 9 | ODR=3200 Hz                                                           |         | 0.2 1.4        |         | µA ms    |

## ADXL344

| Parameter                   | Test Conditions/Comments   |   Min 1 |   Typ 2 |   Max 1 | Unit   |
|-----------------------------|----------------------------|---------|---------|---------|--------|
| TEMPERATURE                 |                            |         |         |         |        |
| Operating Temperature Range |                            |     -40 |         |     +85 | °C     |
| WEIGHT                      |                            |         |         |         |        |
| Device Weight               |                            |         |      18 |         | mg     |

- 9  Turn-on and wake-up times are determined by the user-defined bandwidth. At a 100 Hz data rate, the turn-on and wake-up times are each approximately 11.1 ms. For other data rates, the turn-on and wake-up times are each approximately τ + 1.1 in milliseconds, where τ = 1/(data rate).

## ABSOLUTE MAXIMUM RATINGS

Table 2.

| Parameter                                         | Rating                                             |
|---------------------------------------------------|----------------------------------------------------|
| Acceleration Any Axis, Unpowered                  | 10,000 g 10,000 g                                  |
| Any Axis, Powered                                 |                                                    |
| V S                                               | -0.3V to +3.0V                                     |
| V DD I/O                                          | -0.3V to +3.0V                                     |
| Digital Pins                                      | -0.3V toV DDI/O + 0.3V or 3.0 V, whichever is less |
| All Other Pins                                    | -0.3V to +3.0V                                     |
| Output Short-Circuit Duration (Any Pin to Ground) | Indefinite                                         |
| Temperature Range Powered                         | -40°C to +105°C                                    |
| Storage                                           | -40°C to +105°C                                    |

Stresses above those listed under Absolute Maximum Ratings may cause permanent damage to the device. This is a stress rating only; functional operation of the device at these or any other conditions above those indicated in the operational section of this specification is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## THERMAL RESISTANCE

## Table 3. Package Characteristics

| PackageType     | θ JA    | θ JC   | DeviceWeight   |
|-----------------|---------|--------|----------------|
| 16-Terminal LGA | 150°C/W | 85°C/W | 18mg           |

## PACKAGE INFORMATION

The information in Figure 2 and Table 4 provide details about the package branding for the ADXL344. For a complete listing of product availability, see the Ordering Guide section.

Figure 2. Product Information on Package (Top View)

<!-- image -->

## Table 4. Package Branding Information

| Branding Key   | Field Description               |
|----------------|---------------------------------|
| Y4S            | Part identifier for the ADXL344 |
| vvvv           | Factory lot code                |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 3. Pin Configuration (Top View)

<!-- image -->

Table 5. Pin Function Descriptions

|   Pin No. | Mnemonic        | Description                                                                                   |
|-----------|-----------------|-----------------------------------------------------------------------------------------------|
|         1 | V DD I/O        | Digital Interface Supply Voltage.                                                             |
|         2 | NC              | Not Internally Connected.                                                                     |
|         3 | NC              | Not Internally Connected.                                                                     |
|         4 | SCL/SCLK        | Serial Communications Clock.                                                                  |
|         5 | NC              | Not Internally Connected.                                                                     |
|         6 | SDA/SDI/SDIO    | Serial Data (I 2 C)/Serial Data Input (SPI 4-Wire)/Serial Data Input and Output (SPI 3-Wire). |
|         7 | SDO/ALT ADDRESS | Serial Data Output (SPI 4-Wire)/Alternate I 2 C Address Select (I 2 C).                       |
|         8 | CS              | Chip Select.                                                                                  |
|         9 | INT2            | Interrupt 2 Output.                                                                           |
|        10 | NC              | Not Internally Connected.                                                                     |
|        11 | INT1            | Interrupt 1 Output.                                                                           |
|        12 | GND             | Must be connected to ground.                                                                  |
|        13 | GND             | Must be connected to ground.                                                                  |
|        14 | V S             | Supply Voltage.                                                                               |
|        15 | RESERVED        | Reserved. This pin must be connected toV S .                                                  |
|        16 | GND             | Must be connected to ground.                                                                  |

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 4. Zero g Offset at 25°C, VS = 2.6 V, All Axes

<!-- image -->

Figure 5. Zero g Offset at 25°C, VS = 1.8 V, All Axes

<!-- image -->

Figure 6. Zero g Offset Temperature Coefficient, VS = 2.6 V, All Axes

<!-- image -->

Figure 7. X-Axis Zero g Offset vs. TemperatureEight Parts Soldered to PCB, VS = 2.6 V

Figure 8. Y-Axis Zero g Offset vs. TemperatureEight Parts Soldered to PCB, VS = 2.6 V

<!-- image -->

Figure 9. Z-Axis Zero g Offset vs. TemperatureEight Parts Soldered to PCB, VS = 2.6 V

<!-- image -->

<!-- image -->

Figure 10. Sensitivity at 25°C, VS = 2.6 V, Full Resolution, All Axes

Figure 11. Sensitivity at 25°C, VS = 1.8 V, Full Resolution, All Axes

<!-- image -->

Figure 12. Sensitivity Temperature Coefficient, VS = 2.6 V, All Axes

<!-- image -->

10628-025

Figure 13. X-Axis Sensitivity vs. TemperatureEight Parts Soldered to PCB, VS = 2.6 V, Full Resolution

<!-- image -->

10628-026

Figure 14. Y-Axis Sensitivity vs. TemperatureEight Parts Soldered to PCB, VS = 2.6 V, Full Resolution

<!-- image -->

Figure 15. Z-Axis Sensitivity vs. TemperatureEight Parts Soldered to PCB, VS = 2.6 V, Full Resolution

<!-- image -->

<!-- image -->

Figure 16. X-Axis Self-Test Response at 25°C, VS = 2.6 V

<!-- image -->

Figure 17. Y-Axis Self-Test Response at 25°C, VS = 2.6 V

<!-- image -->

Figure 18. Z-Axis Self-Test Response at 25°C, VS = 2.6 V

<!-- image -->

Figure 19. Supply Current at 25°C, 100 Hz Output Data Rate, VS = 2.6 V

Figure 20. Supply Current vs. Output Data Rate at 25°C-10 Parts, VS = 2.6 V

<!-- image -->

Figure 21. Supply Current vs. Supply Voltage at 25°C

<!-- image -->

## THEORY OF OPERATION

The ADXL344 is a complete 3-axis acceleration measurement system with a selectable measurement range of ±2 g, ± 4 g, ± 8 g , or ±16 g . It measures both dynamic acceleration resulting from motion or shock and static acceleration, such as gravity, which allows the device to be used as a tilt sensor.

The sensor is a polysilicon surface-micromachined structure built on top of a silicon wafer. Polysilicon springs suspend the structure over the surface of the wafer and provide a resistance against forces due to applied acceleration.

Deflection of the structure is measured using differential capacitors that consist of independent fixed plates and plates attached to the moving mass. Acceleration deflects the proof mass and unbalances the differential capacitor, resulting in a sensor output with an amplitude proportional to acceleration. Phase-sensitive demodulation is used to determine the magnitude and polarity of the acceleration.

Table 6. Power Sequencing

## POWER SEQUENCING

Power can be applied to VS or VDD I/O in any sequence without damaging the ADXL344. All possible power-on modes are summarized in Table 6. The interface voltage level is set with the interface supply voltage, VDD I/O, which must be present to ensure that the ADXL344 does not create a conflict on the communication bus. For single-supply operation, VDD I/O can be the same as the main supply, VS. In a dual-supply application, however, VDD I/O can differ from VS to accommodate the desired interface voltage, as long as VS is greater than or equal to VDD I/O.

After VS is applied, the device enters standby mode, where power consumption is minimized and the device waits for VDD I/O to be applied and for the command to enter measurement mode to be received. (This command can be initiated by setting the measure bit (Bit D3) in the POWER\_CTL register (Address 0x2D).) In addition, any register can be written to or read from to configure the part while the device is in standby mode. It is recommended to configure the device in standby mode and then to enable measurement mode. Clearing the measure bit returns the device to the standby mode.

| Condition                  | V S   | V DDI/O   | Description                                                                                                                                                                                                               |
|----------------------------|-------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Power Off                  | Off   | Off       | The device is completely off, but there is a potential for a communication bus conflict.                                                                                                                                  |
| Bus Disabled               | On    | Off       | The device is on in standby mode, but communication is unavailable and will create a conflict on the communication bus. The duration of this state should be minimized during power-up to prevent a conflict.             |
| Bus Enabled                | Off   | On        | No functions are available, but the device will not create a conflict on the communication bus.                                                                                                                           |
| Standby or MeasurementMode | On    | On        | At power-up, the device is in standby mode, awaiting a command to enter measurement mode, and all sensor functions are off. After the device is instructed to enter measurement mode, all sensor functions are available. |

## POWER SAVINGS

## Power Modes

The ADXL344 automatically modulates its power consumption in proportion to its output data rate, as outlined in Table 7. If additional power savings is desired, a lower power mode is available. In this mode, the internal sampling rate is reduced, allowing for power savings in the 12.5 Hz to 400 Hz data rate range at the expense of slightly greater noise. To enter low power mode, set the LOW\_POWER bit (Bit D4) in the BW\_RATE register (Address 0x2C). The current consumption in low power mode is shown in Table 8 for cases where there is an advantage to using low power mode. Use of low power mode for a data rate not shown in Table 8 does not provide any advantage over the same data rate in normal power mode. Therefore, it is recommended that only data rates listed in Table 8 be used in low power mode. The current consumption values shown in Table 7 and Table 8 are for a VS of 2.6 V .

Table 7. Typical Current Consumption vs. Data Rate

(TA = 25°C, VS = 2.6 V , VDD I/O = 1.8 V)

|   Output Data Rate (Hz) |   Bandwidth (Hz) |   Rate Code |   I DD (µA) |
|-------------------------|------------------|-------------|-------------|
|                    3200 |             1600 |        1111 |         140 |
|                    1600 |              800 |        1110 |          90 |
|                     800 |              400 |        1101 |         140 |
|                     400 |              200 |        1100 |         140 |
|                     200 |              100 |        1011 |         140 |
|                     100 |               50 |        1010 |         140 |
|                      50 |               25 |        1001 |          90 |
|                      25 |             12.5 |        1000 |          55 |
|                    12.5 |             6.25 |        0111 |          40 |
|                    6.25 |             3.13 |        0110 |          31 |
|                    3.13 |             1.56 |        0101 |          27 |
|                    1.56 |             0.78 |        0100 |          23 |
|                    0.78 |             0.39 |        0011 |          23 |
|                    0.39 |             0.20 |        0010 |          23 |
|                    0.20 |             0.10 |        0001 |          23 |
|                    0.10 |             0.05 |        0000 |          23 |

Table 8. Typical Current Consumption vs. Data Rate, Low Power Mode (TA = 25°C, VS = 2.6 V, VDD I/O = 1.8 V)

|   Output Data Rate (Hz) |   Bandwidth (Hz) |   Rate Code |   I DD (µA) |
|-------------------------|------------------|-------------|-------------|
|                     400 |              200 |        1100 |          90 |
|                     200 |              100 |        1011 |          55 |
|                     100 |               50 |        1010 |          40 |
|                      50 |               25 |        1001 |          31 |
|                      25 |             12.5 |        1000 |          27 |
|                    12.5 |             6.25 |        0111 |          23 |

## Autosleep Mode

Additional power can be saved if the ADXL344 automatically switches to sleep mode during periods of inactivity. To enable this feature, set the THRESH\_INACT register (Address 0x25) and the TIME\_INACT register (Address 0x26) each to a value that signifies inactivity (the appropriate value depends on the application), and then set the AUTO\_SLEEP bit (Bit D4) and the link bit (Bit D5) in the POWER\_CTL register (Address 0x2D). Current consumption at the sub-8 Hz data rates used in this mode is typically 23 µA for a VS of 2.6 V .

## Standby Mode

For even lower power operation, standby mode can be used. In standby mode, current consumption is reduced to 0.2 µA (typical). In this mode, no measurements are made. Standby mode is entered by clearing the measure bit (Bit D3) in the POWER\_CTL register (Address 0x2D). Placing the device into standby mode preserves the contents of FIFO.

## SERIAL COMMUNICATIONS

I 2 C and SPI digital communications are available. In both cases, the ADXL344 operates as a slave. I 2 C mode is enabled if the CS pin is tied high to VDD I/O. The CS pin should always be tied high to VDD I/O or be driven by an external controller because there is no default mode if the CS pin is left unconnected. Therefore, not taking these precautions may result in an inability to communicate with the part. In SPI mode, the CS pin is controlled by the bus master. In both SPI and I 2 C modes of operation, data transmitted from the ADXL344 to the master device should be ignored during writes to the ADXL344.

## SPI

For SPI, either 3- or 4-wire configuration is possible, as shown in the connection diagrams in Figure 22 and Figure 23. Clearing the SPI bit (Bit D6) in the DATA\_FORMAT register (Address 0x31) selects 4-wire mode, whereas setting the SPI bit selects 3-wire mode. The maximum SPI clock speed is 5 MHz with 100 pF maximum loading, and the timing scheme follows clock polarity (CPOL) = 1 and clock phase (CPHA) = 1. If power is applied to the ADXL344 before the clock polarity and phase of the host processor are configured, the CS pin should be brought high before changing the clock polarity and phase. When using 3-wire SPI, it is recommended that the SDO pin be either pulled up to VDD I/O or pulled down to GND via a 10 kΩ resistor.

Figure 22. 3-Wire SPI Connection Diagram

<!-- image -->

Figure 23. 4-Wire SPI Connection Diagram

<!-- image -->

CS is the serial port enable line and is controlled by the SPI master. This line must go low at the start of a transmission and high at the end of a transmission, as shown in Figure 25. SCLK is the serial port clock and is supplied by the SPI master. SCLK should idle high during a period of no transmission. SDI and SDO are the serial data input and output, respectively. Data is updated on the falling edge of SCLK and should be sampled on the rising edge of SCLK.

To read or write multiple bytes in a single transmission, the multiple-byte bit, located after the R/W bit in the first byte transfer

(MB in Figure 25 to Figure 27), must be set. After the register addressing and the first byte of data, each subsequent set of clock pulses (eight clock pulses) causes the ADXL344 to point to the next register for a read or write. This shifting continues until the clock pulses cease and CS is deasserted. To perform reads or writes on different, nonsequential registers, CS must be deasserted between transmissions and the new register must be addressed separately.

The timing diagram for 3-wire SPI reads or writes is shown in Figure 27. The 4-wire equivalents for SPI writes and reads are shown in Figure 25 and Figure 26, respectively. For correct operation of the part, the logic thresholds and timing parameters in Table 9 and Table 10 must be met at all times.

Use of the 3200 Hz and 1600 Hz output data rates is only recommended with SPI communication rates greater than or equal to 2 MHz. The 800 Hz output data rate is recommended only for communication speeds greater than or equal to 400 kHz, and the remaining data rates scale proportionally. For example, the minimum recommended communication speed for a 200 Hz output data rate is 100 kHz. Operation at an output data rate above the recommended maximum may result in undesirable effects on the acceleration data, including missing samples or additional noise.

## Preventing Bus Traffic Errors

The ADXL344 CS pin is used both for initiating SPI transactions and for enabling I 2 C mode. When the ADXL344 is used on a SPI bus with multiple devices, its CS pin is held high while the master communicates with the other devices. There may be conditions where a SPI command transmitted to another device looks like a valid I 2 C command. In this case, the ADXL344 interprets this as an attempt to communicate in I 2 C mode, and may interfere with other bus traffic. Unless bus traffic can be adequately controlled to assure such a condition never occurs, it is recommended to add a logic gate in front of the SDI pin as shown in Figure 24. This OR gate holds the SDI line high when CS is high to prevent SPI bus traffic at the ADXL344 from appearing as an I 2 C start command. Note that this recommendation applies only in cases where the ADXL344 is used on a SPI bus with multiple devices.

Figure 24. Recommended SPI Connection Diagram when Using Multiple SPI Devices on a Single Bus

<!-- image -->

## Data Sheet

## ADXL344

Figure 27. SPI 3-Wire Read/Write

<!-- image -->

## Table 9. SPI Digital Input/Output

|                                   |                          | Limit 1      | Limit 1      |      |
|-----------------------------------|--------------------------|--------------|--------------|------|
| Parameter                         | Test Conditions          | Min          | Max          | Unit |
| Digital Input                     |                          |              |              |      |
| Low Level Input Voltage (V IL )   |                          |              | 0.3×V DD I/O | V    |
| High Level Input Voltage (V IH )  |                          | 0.7×V DD I/O |              | V    |
| Low Level Input Current (I IL )   | V IN =V DDI/O            |              | 0.1          | µA   |
| High Level Input Current (I IH )  | V IN = 0V                | -0.1         |              | µA   |
| Digital Output                    |                          |              |              |      |
| Low Level Output Voltage (V OL )  | I OL =10mA               |              | 0.2×V DD I/O | V    |
| High Level Output Voltage (V OH ) | I OH =-4mA               | 0.8×V DD I/O |              | V    |
| Low Level Output Current (I OL )  | V OL =V OL, max          | 10           |              | mA   |
| High Level Output Current (I OH ) | V OH =V OH, min          |              | -4           | mA   |
| Pin Capacitance                   | f IN = 1 MHz,V IN = 2.6V |              | 8            | pF   |

Table 10. SPI Timing (TA = 25°C, VS = 2.6 V, VDD I/O = 1.8 V) 1

|           | Limit 2, 3   | Limit 2, 3   |      |                                                                               |
|-----------|--------------|--------------|------|-------------------------------------------------------------------------------|
| Parameter | Min          | Max          | Unit | Description                                                                   |
| f SCLK    |              | 5            | MHz  | SPI clock frequency                                                           |
| t SCLK    | 200          |              | ns   | 1/(SPI clock frequency) mark-space ratio for the SCLK input is 40/60 to 60/40 |
| t DELAY   | 5            |              | ns   | CS falling edge to SCLK falling edge                                          |
| t QUIET   | 5            |              | ns   | SCLK rising edge to CS rising edge                                            |
| t DIS     |              | 10           | ns   | CS rising edge to SDO disabled                                                |
| t CS ,DIS | 150          |              | ns   | CS deassertion between SPI communications                                     |
| t S       | 0.3 × t SCLK |              | ns   | SCLK low pulse width (space)                                                  |
| t M       | 0.3 × t SCLK |              | ns   | SCLK high pulse width (mark)                                                  |
| t SETUP   | 5            |              | ns   | SDI valid before SCLK rising edge                                             |
| t HOLD    | 5            |              | ns   | SDI valid after SCLK rising edge                                              |
| t SDO     |              | 40           | ns   | SCLK falling edge to SDO/SDIO output transition                               |
| t R 4     |              | 20           | ns   | SDO/SDIO output low to output high transition                                 |
| t F 4     |              | 20           | ns   | SDO/SDIO output high to output low transition                                 |

## I 2 C

With CS tied high to VDD I/O, the ADXL344 is in I 2 C mode, requiring a simple 2-wire connection as shown in Figure 28. The ADXL344 conforms to the UM10204 I 2 C-Bus Specification and User Manual , Rev. 03-19 June 2007, available from NXP Semiconductor. It supports standard (100 kHz) and fast (400 kHz) data transfer modes if the bus parameters given in Table 11 and Table 12 are met. Single- or multiple-byte reads/writes are supported, as shown in Figure 29. With the ALT ADDRESS pin (Pin 7) high, the 7-bit I 2 C address for the device is 0x1D, followed by the R/W bit. This translates to 0x3A for a write and 0x3B for a read. An alternate I 2 C address of 0x53 (followed by the R/W bit) can be chosen by grounding the ALT ADDRESS pin. This translates to 0xA6 for a write and 0xA7 for a read.

There are no internal pull-up or pull-down resistors for any unused pins; therefore, there is no known state or default state for the CS or ALT ADDRESS pin if left floating or unconnected. It is required that the CS pin be connected to VDD I/O and that the ALT ADDRESS pin be connected to either VDD I/O or GND when using I 2 C.

Table 11. I 2 C Digital Input/Output

Due to communication speed limitations, the maximum output data rate when using 400 kHz I 2 C is 800 Hz and scales linearly with a change in the I 2 C communication speed. For example, using I 2 C at 100 kHz limits the maximum ODR to 200 Hz. Operation at an output data rate above the recommended maximum may result in an undesirable effect on the acceleration data, including missing samples or additional noise.

Figure 28. I 2 C Connection Diagram (Address 0x53)

<!-- image -->

If other devices are connected to the same I 2 C bus, the nominal operating voltage level of these other devices cannot exceed VDD I/O by more than 0.3 V . External pull-up resistors, RP, are necessary for proper I 2 C operation. Refer to the UM10204 I 2 C-Bus Specification and User Manual , Rev. 03-19 June 2007, when selecting pull-up resistor values to ensure proper operation.

|                                                                                                                                                                                                                                                |                                                                                                               | Limit 1             | Limit 1                             |                      |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|---------------------|-------------------------------------|----------------------|
| Parameter                                                                                                                                                                                                                                      | Test Conditions                                                                                               | Min                 | Max                                 | Unit                 |
| Digital Input Low Level Input Voltage (V IL ) High Level Input Voltage (V IH ) Low Level Input Current (I IL ) High Level Input Current (I IH ) Digital Output Low Level Output Voltage (V OL Low Level Output Current (I OL ) Pin Capacitance | V IN =V DDI/O V IN = 0V V DD I/O < 2V, I OL =3mA V DD I/O ≥ 2V, I OL =3mA V OL =V OL, max f IN = 1 MHz,V IN = | 0.7×V DD I/O -0.1 3 | 0.3×V DD I/O 0.1 0.2×V DD I/O 400 8 | V V µA µA V mV mA pF |

<!-- image -->

| SINGLE-BYTE WRITE                  |                    |                       |     |
|------------------------------------|--------------------|-----------------------|-----|
| MASTER START SLAVE ADDRESS + WRITE |                    |                       |     |
| SLAVE                              |                    |                       | ACK |
| MULTIPLE-BYTE WRITE                |                    |                       |     |
| SLAVE                              | MASTER START SLAVE | ADDRESS + WRITE       | ACK |
| SINGLE-BYTE READ                   |                    |                       |     |
| MASTER START                       |                    | SLAVE ADDRESS + WRITE |     |
| SLAVE                              |                    |                       | ACK |
| MULTIPLE-BYTE READ                 |                    |                       |     |
| MASTER START                       |                    | SLAVE ADDRESS + WRITE |     |
| SLAVE                              |                    |                       | ACK |

1 THIS START IS EITHER A RESTART OR A STOP FOLLOWED BY A START.

NOTES 1. THE SHADED AREAS REPRESENT WHEN THE DEVICE IS LISTENING.

Table 12. I 2 C Timing (TA = 25°C, VS = 2.6 V, VDD I/O = 1.8 V)

|                | Limit 1, 2   | Limit 1, 2   |      |                                                                      |
|----------------|--------------|--------------|------|----------------------------------------------------------------------|
| Parameter      | Min          | Max          | Unit | Description                                                          |
| f SCL          |              | 400          | kHz  | SCL clock frequency                                                  |
| t 1            | 2.5          |              | µs   | SCL cycle time                                                       |
| t 2            | 0.6          |              | µs   | t HIGH , SCL high time                                               |
| t 3            | 1.3          |              | µs   | t LOW , SCL low time                                                 |
| t 4            | 0.6          |              | µs   | t HD, STA , start/repeated start condition hold time                 |
| t 5            | 100          |              | ns   | t SU, DAT , data setup time                                          |
| t 6 3, 4, 5, 6 | 0            | 0.9          | µs   | t HD, DAT , data hold time                                           |
| t 7            | 0.6          |              | µs   | t SU, STA , setup time for repeated start                            |
| t 8            | 0.6          |              | µs   | t SU, STO , stop condition setup time                                |
| t 9            | 1.3          |              | µs   | t BUF , bus-free time between a stop condition and a start condition |
| t 10           |              | 300          | ns   | t R , rise time of both SCL and SDA when receiving                   |
|                | 0            |              | ns   | t R , rise time of both SCL and SDA when receiving or transmitting   |
| t 11           |              | 300          | ns   | t F , fall time of SDA when receiving                                |
|                |              | 250          | ns   | t F , fall time of both SCL and SDA when transmitting                |
| C B            |              | 400          | pF   | Capacitive load for each bus line                                    |

- 1 Limits are based on characterization results, with fSCL = 400 kHz and a 3 mA sink current; not production tested.
- 2 All values referred to the VIH and the VIL levels given in Table 11.
- 3 t6 is the data hold time that is measured from the falling edge of SCL. It applies to data in transmission and acknowledge.
- 4 A transmitting device must internally provide an output hold time of at least 300 ns for the SDA signal (with respect to VIH,min of the SCL signal) to bridge the undefined region of the falling edge of SCL.
- 5 The maximum t6 value must be met only if the device does not stretch the low period (t3) of the SCL signal.
- 6 The maximum value for t6 is a function of the clock low time (t3), the clock rise time (t10), and the minimum data setup time (t5(min)). This value is calculated as t6(max) = t3 - t10 - t5(min).

Figure 30. I 2 C Timing Diagram

<!-- image -->

## INTERRUPTS

The ADXL344 provides two output pins for driving interrupts: INT1 and INT2. Both interrupt pins are push-pull, low impedance pins with the output specifications listed in Table 13. The default configuration of the interrupt pins is active high. This can be changed to active low by setting the INT\_INVERT bit (Bit D5) in the DATA\_FORMAT (Address 0x31) register. All functions can be used simultaneously, with the only limiting feature being that some functions may need to share interrupt pins.

Interrupts are enabled by setting the appropriate bit in the INT\_ENABLE register (Address 0x2E) and are mapped to either the INT1 or INT2 pin based on the contents of the INT\_MAP register (Address 0x2F). When initially configuring the interrupt pins, it is recommended that the functions and interrupt mapping be done before enabling the interrupts. When changing the configuration of an interrupt, it is recommended that the interrupt be disabled first, by clearing the bit corresponding to that function in the INT\_ENABLE register, and then the function be reconfigured before enabling the interrupt again. Configuration of the functions while the interrupts are disabled helps to prevent the accidental generation of an interrupt before it is desired.

The interrupt functions are latched and cleared by either reading the DATAX, DATAY, and DATAZ registers (Address 0x32 to Address 0x37) until the interrupt condition is no longer valid for the data-related interrupts or by reading the INT\_SOURCE register (Address 0x30) for the remaining interrupts. This section describes the interrupts that can be set in the INT\_ENABLE register and monitored in the INT\_SOURCE register.

## DATA\_READY Bit

The DATA\_READY bit is set when new data is available and is cleared when no new data is available.

## SINGLE\_TAP Bit

The SINGLE\_TAP bit is set when a single acceleration event that is greater than the value in the THRESH\_TAP register (Address 0x1D) occurs for less time than is specified in the DUR register (Address 0x21).

Table 13. Interrupt Pin Digital Output

## DOUBLE\_TAP Bit

The DOUBLE\_TAP bit is set when two acceleration events that are greater than the value in the THRESH\_TAP register (Address 0x1D) occur for less time than is specified in the DUR register (Address 0x21). The second tap starts after the time specified by the latent register (Address 0x22) but within the time specified in the window register (Address 0x23). See the Tap Detection section for more details.

## Activity Bit

The activity bit is set when acceleration greater than the value stored in the THRESH\_ACT register (Address 0x24) is experienced on any participating axis, as set by the ACT\_INACT\_CTL register (Address 0x27).

## Inactivity Bit

The inactivity bit is set when acceleration of less than the value stored in the THRESH\_INACT register (Address 0x25) is experienced for more time than is specified in the TIME\_INACT register (Address 0x26) on all participating axes, as set by the ACT\_INACT\_CTL register (Address 0x27). The maximum value for TIME\_INACT is 255 sec.

## FREE\_FALL Bit

The FREE\_FALL bit is set when acceleration of less than the value stored in the THRESH\_FF register (Address 0x28) is experienced for more time than is specified in the TIME\_FF register (Address 0x29) on all axes (logical AND). The FREE\_FALL interrupt differs from the inactivity interrupt as follows: all axes always participate and are logically AND' ed, the timer period is much smaller (1.28 sec maximum), and the mode of operation is always dc-coupled.

## Watermark Bit

The watermark bit is set when the number of samples in FIFO equals the value stored in the samples bits (Register FIFO\_CTL, Address 0x38). The watermark bit is cleared automatically when FIFO is read, and the content returns to a value below the value stored in the samples bits.

|                                                                                                                                                                                                                         |                                                                                                                       | Limit 1          | Limit 1                 |                    |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|------------------|-------------------------|--------------------|
| Parameter                                                                                                                                                                                                               | Test Conditions                                                                                                       | Min              | Max                     | Unit               |
| Digital Output Low Level Output Voltage (V OL ) High Level Output Voltage (V OH Low Level Output Current (I OL ) High Level Output Current (I OH ) Pin Capacitance Rise/Fall Time Rise Time (t R ) 2 Fall Time (t F ) 3 | I OL = 300 µA I OH = -150 µA V OL =V OL, max V OH =V OH, min f IN = 1 MHz,V IN = 2.6V C LOAD = 150 pF C LOAD = 150 pF | 0.8×V DD I/O 300 | 0.2×V DD -150 8 210 150 | V V µA µA pF ns ns |

1 Limits are based on characterization results; not production tested.

2 Rise time is measured as the transition time from VOL, max to VOH, min of the interrupt pin.

3 Fall time is measured as the transition time from VOH, min to VOL, max of the interrupt pin.

## Overrun Bit

The overrun bit is set when new data replaces unread data. The precise operation of the overrun function depends on the FIFO mode. In bypass mode, the overrun bit is set when new data replaces unread data in the DATAX, DATAY , and DATAZ registers (Address 0x32 to Address 0x37). In all other modes, the overrun bit is set when FIFO is filled. The overrun bit is automatically cleared when the contents of FIFO are read.

## Orientation Bit

The orientation bit is set when the orientation of the accelerometer changes from a valid orientation to a different valid orientation. An interrupt is not generated, however, if the orientation of the accelerometer changes from a valid orientation to an invalid orientation, or from a valid orientation to an invalid orientation and then back to the same valid orientation. An invalid orientation is defined as an orientation within the dead zone, or the region of hysteresis. This region helps to prevent rapid orientation change due to noise when the accelerometer orientation is close to the boundary between two valid orientations.

The orientations that are valid for the interrupt depend on which mode, 2D or 3D, is linked to the orientation interrupt. The mode is selected with the INT\_3D bit (Bit D3) in the ORIENT\_CONF register (Address 0x3B). See the Register 0x3B-ORIENT\_CONF (Read/Write) section for more details on how to enable the orientation interrupt.

## FIFO

The ADXL344 contains an embedded memory management system with a 32-level FIFO memory buffer that can be used to minimize host processor burden. This buffer has four modes: bypass, FIFO, stream, and trigger (see Table 22). Each mode is selected by the settings of the FIFO\_MODE bits (Bits[D7:D6]) in the FIFO\_CTL register (Address 0x38).

If use of the FIFO is not desired, the FIFO should be placed in bypass mode.

## Bypass Mode

In bypass mode, FIFO is not operational and, therefore, remains empty.

## FIFO Mode

In FIFO mode, data from measurements of the x-, y-, and z-axes are stored in FIFO. When the number of samples in FIFO equals the level specified in the samples bits of the FIFO\_CTL register (Address 0x38), the watermark interrupt is set. FIFO continues accumulating samples until it is full (32 samples from measurements of the x-, y-, and z-axes) and then stops collecting data. After FIFO stops collecting data, the device continues to operate; therefore, features such as tap detection can be used after FIFO is full. The watermark interrupt continues to occur until the number of samples in FIFO is less than the value stored in the samples bits of the FIFO\_CTL register.

## Stream Mode

In stream mode, data from measurements of the x-, y-, and zaxes are stored in FIFO. When the number of samples in FIFO equals the level specified in the samples bits of the FIFO\_CTL register (Address 0x38), the watermark interrupt is set. FIFO continues accumulating samples and holds the latest 32 samples from measurements of the x-, y-, and z-axes, discarding older data as new data arrives. The watermark interrupt continues occurring until the number of samples in FIFO is less than the value stored in the samples bits of the FIFO\_CTL register.

## Trigger Mode

In trigger mode, FIFO accumulates samples, holding the latest 32 samples from measurements of the x-, y-, and z-axes. After a trigger event occurs and an interrupt is sent to the INT1 or INT2 pin (determined by the trigger bit in the FIFO\_CTL register), FIFO keeps the last n samples (where n is the value specified by the samples bits in the FIFO\_CTL register) and then operates in FIFO mode, collecting new samples only when FIFO is not full. A delay of at least 5 μs should be present between the trigger event occurring and the start of reading data from the FIFO to allow the FIFO to discard and retain the necessary samples. Additional trigger events cannot be recognized until the trigger mode is reset. To reset the trigger mode, set the device to bypass mode and then set the device back to trigger mode. Note that the FIFO data should be read first because placing the device into bypass mode clears FIFO.

## Retrieving Data from FIFO

The FIFO data is read through the DATAX, DATAY, and DATAZ registers (Address 0x32 to Address 0x37). When the FIFO is in FIFO, stream, or trigger mode, reads to the DATAX, DATAY, and DATAZ registers read data stored in the FIFO. Each time data is read from the FIFO, the oldest x-, y-, and z-axes data are placed into the DATAX, DATAY, and DATAZ registers.

If a single-byte read operation is performed, the remaining bytes of data for the current FIFO sample are lost. Therefore, all axes of interest should be read in a burst (or multiple-byte) read operation. To ensure that the FIFO has completely popped (that is, that new data has completely moved into the DATAX, DATAY, and DATAZ registers), there must be at least 5 μs between the end of reading the data registers and the start of a new read of the FIFO or a read of the FIFO\_STATUS register (Address 0x39). The end of reading a data register is signified by the transition of data from Register 0x37 to Register 0x38 or by the CS pin going high.

For SPI operation at 1.6 MHz or less, the register addressing portion of the transmission is a sufficient delay to ensure that the FIFO has completely popped. For SPI operation greater than 1.6 MHz, it is necessary to deassert the CS pin to ensure a total delay of 5 μs; otherwise, the delay is not be sufficient. The total delay necessary for 5 MHz operation is at most 3.4 μs. This is not a concern when using I 2 C mode because the communication rate is low enough to ensure a sufficient delay between FIFO reads.

## SELF-TEST

The ADXL344 incorporates a self-test feature that effectively tests its mechanical and electronic systems simultaneously. When the self-test function is enabled (via the SELF\_TEST bit (Bit D7 in the DATA\_FORMAT register, Address 0x31), an electrostatic force is exerted on the mechanical sensor. This electrostatic force moves the mechanical sensing element in the same manner as acceleration would, and it is additive to the acceleration experienced by the device. This added electrostatic force results in an output change in the x-, y-, and z-axes. Because the electrostatic force is proportional to VS 2 , the output change varies with VS. This effect is shown in Figure 31.

The scale factors listed in Table 14 can be used to adjust the expected self-test output limits for different supply voltages, VS. The self-test feature of the ADXL344 also exhibits a bimodal behavior. However, the limits listed in Table 1 and Table 15 to Table 18 are valid for both potential self-test values due to bimodality. Use of the self-test feature at data rates less than 100 Hz or at 1600 Hz may yield values outside these limits. Therefore, the part must be in normal power operation (LOW\_POWER bit = 0 in the BW\_RATE register, Address 0x2C) and be placed into a data rate of 100 Hz through 800 Hz or 3200 Hz for the self-test function to operate correctly.

Figure 31. Self-Test Output Change Limits vs. Supply Voltage

<!-- image -->

Table 14. Self-Test Output Scale Factors for Different Supply Voltages, VS

| Supply Voltage,V S   |   X-, Y-Axes |   Z-Axis |
|----------------------|--------------|----------|
| 1.70 V               |         0.43 |     0.38 |
| 1.80 V               |         0.48 |     0.47 |
| 2.00 V               |         0.59 |     0.58 |
| 2.60 V               |         1.00 |     1.00 |
| 2.75 V               |         1.13 |     1.11 |

Table 15. Self-Test Output in LSB for ±2 g , 10-Bit or Full Resolution (TA = 25°C, VS = 2.6 V, VDD I/O = 1.8 V)

| Axis   |   Min |   Max | Unit   |
|--------|-------|-------|--------|
| X      |    70 |   400 | LSB    |
| Y      |  -400 |   -70 | LSB    |
| Z      |   100 |   500 | LSB    |

Table 16. Self-Test Output in LSB for ±4 g , 10-Bit Resolution (TA = 25°C, VS = 2.6 V, VDD I/O = 1.8 V)

| Axis   |   Min |   Max | Unit   |
|--------|-------|-------|--------|
| X      |    35 |   200 | LSB    |
| Y      |  -200 |   -35 | LSB    |
| Z      |    50 |   250 | LSB    |

Table 17. Self-Test Output in LSB for ±8 g , 10-Bit Resolution (TA = 25°C, VS = 2.6 V, VDD I/O = 1.8 V)

| Axis   |   Min |   Max | Unit   |
|--------|-------|-------|--------|
| X      |    17 |   100 | LSB    |
| Y      |  -100 |   -17 | LSB    |
| Z      |    25 |   125 | LSB    |

Table 18. Self-Test Output in LSB for ±16 g , 10-Bit Resolution (TA = 25°C, VS = 2.6 V, VDD I/O = 1.8 V)

| Axis   |   Min |   Max | Unit   |
|--------|-------|-------|--------|
| X      |     8 |    50 | LSB    |
| Y      |   -50 |    -8 | LSB    |
| Z      |    12 |    63 | LSB    |

## REGISTER MAP

Table 19. Register Map

| Address      | Address   |                |      |             |                                                            |
|--------------|-----------|----------------|------|-------------|------------------------------------------------------------|
| Hex          | Dec       | Name           | Type | Reset Value | Description                                                |
| 0x00         | 0         | DEVID          | R    | 11100110    | Device ID.                                                 |
| 0x01 to 0x1C | 1 to 28   | Reserved       |      |             | Reserved. Do not access.                                   |
| 0x1D         | 29        | THRESH_TAP     | R/W  | 00000000    | Tap threshold.                                             |
| 0x1E         | 30        | OFSX           | R/W  | 00000000    | X-axis offset.                                             |
| 0x1F         | 31        | OFSY           | R/W  | 00000000    | Y-axis offset.                                             |
| 0x20         | 32        | OFSZ           | R/W  | 00000000    | Z-axis offset.                                             |
| 0x21         | 33        | DUR            | R/W  | 00000000    | Tap duration.                                              |
| 0x22         | 34        | Latent         | R/W  | 00000000    | Tap latency.                                               |
| 0x23         | 35        | Window         | R/W  | 00000000    | Tap window.                                                |
| 0x24         | 36        | THRESH_ACT     | R/W  | 00000000    | Activity threshold.                                        |
| 0x25         | 37        | THRESH_INACT   | R/W  | 00000000    | Inactivity threshold.                                      |
| 0x26         | 38        | TIME_INACT     | R/W  | 00000000    | Inactivity time.                                           |
| 0x27         | 39        | ACT_INACT_CTL  | R/W  | 00000000    | Axis enable control for activity and inactivity detection. |
| 0x28         | 40        | THRESH_FF      | R/W  | 00000000    | Free-fall threshold.                                       |
| 0x29         | 41        | TIME_FF        | R/W  | 00000000    | Free-fall time.                                            |
| 0x2A         | 42        | TAP_AXES       | R/W  | 00000000    | Axis control for single tap/double tap.                    |
| 0x2B         | 43        | ACT_TAP_STATUS | R    | 00000000    | Source of single tap/double tap.                           |
| 0x2C         | 44        | BW_RATE        | R/W  | 00001010    | Data rate and power mode control.                          |
| 0x2D         | 45        | POWER_CTL      | R/W  | 00000000    | Power-saving features control.                             |
| 0x2E         | 46        | INT_ENABLE     | R/W  | 00000000    | Interrupt enable control.                                  |
| 0x2F         | 47        | INT_MAP        | R/W  | 00000000    | Interrupt mapping control.                                 |
| 0x30         | 48        | INT_SOURCE     | R    | 00000010    | Source of interrupts.                                      |
| 0x31         | 49        | DATA_FORMAT    | R/W  | 00000000    | Data format control.                                       |
| 0x32         | 50        | DATAX0         | R    | 00000000    | X-Axis Data 0.                                             |
| 0x33         | 51        | DATAX1         | R    | 00000000    | X-Axis Data 1.                                             |
| 0x34         | 52        | DATAY0         | R    | 00000000    | Y-Axis Data 0.                                             |
| 0x35         | 53        | DATAY1         | R    | 00000000    | Y-Axis Data 1.                                             |
| 0x36         | 54        | DATAZ0         | R    | 00000000    | Z-Axis Data 0.                                             |
| 0x37         | 55        | DATAZ1         | R    | 00000000    | Z-Axis Data 1.                                             |
| 0x38         | 56        | FIFO_CTL       | R/W  | 00000000    | FIFO control.                                              |
| 0x39         | 57        | FIFO_STATUS    | R    | 00000000    | FIFO status.                                               |
| 0x3A         | 58        | TAP_SIGN       | R    | 00000000    | Sign and source for single tap/double tap.                 |
| 0x3B         | 59        | ORIENT_CONF    | R/W  | 00100101    | Orientation configuration.                                 |
| 0x3C         | 60        | Orient         | R    | 00000000    | Orientation status.                                        |

## REGISTER DEFINITIONS

## Register 0x00-DEVID (Read Only)

|   D7 |   D6 |   D5 |   D4 |   D3 |   D2 |   D1 |   D0 |
|------|------|------|------|------|------|------|------|
|    1 |    1 |    1 |    0 |    0 |    1 |    1 |    0 |

The DEVID register holds a fixed device ID code of 0xE6 (346 octal).

## Register 0x1D-THRESH\_TAP (Read/Write)

The THRESH\_TAP register is eight bits and holds the threshold value for tap interrupts. The data format is unsigned, therefore, the magnitude of the tap event is compared with the value in THRESH\_TAP for normal tap detection. For information on improved tap detection, refer to the Improved Tap Detection section. The scale factor is 62.5 m g /LSB (that is, 0xFF = +16 g ). A value of 0 may result in undesirable behavior if single-tap/ double-tap interrupts are enabled.

## Register 0x1E, Register 0x1F, Register 0x20-OFSX, OFSY, OFSZ (Read/Write)

The OFSX, OFSY, and OFSZ registers are each eight bits and offer user-set offset adjustments in twos complement format with a scale factor of 15.6 m g /LSB (that is, 0x7F = 2 g ). The values stored in the offset registers are automatically added to the acceleration data, and the resulting value is stored in the output data registers. For additional information regarding offset calibration and the use of the offset registers, refer to the Offset Calibration section.

## Register 0x21-DUR (Read/Write)

The DUR register is eight bits and contains an unsigned time value representing the maximum time that an event must be above the THRESH\_TAP threshold to qualify as a tap event. For information on improved tap detection, refer to the Improved Tap Detection section. The scale factor is 625 µs/LSB. A value of 0 disables the single-tap/double-tap functions.

## Register 0x22-Latent (Read/Write)

The latent register is eight bits and contains an unsigned time value representing the wait time from the detection of a tap event to the start of the time window (defined by the window register) during which a possible second tap event can be detected. For information on improved tap detection, refer to the Improved Tap Detection section. The scale factor is 1.25 ms/LSB. A value of 0 disables the double-tap function.

## Register 0x23-Window (Read/Write)

The window register is eight bits and contains an unsigned time value representing the amount of time after the expiration of the latency time (determined by the latent register) during which a second valid tap can begin. For information on improved tap detection, refer to the Improved Tap Detection section. The scale factor is 1.25 ms/LSB. A value of 0 disables the double-tap function.

## Register 0x24-THRESH\_ACT (Read/Write)

The THRESH\_ACT register is eight bits and holds the threshold value for detecting activity. The data format is unsigned, therefore, the magnitude of the activity event is compared with the value in the THRESH\_ACT register. The scale factor is 62.5 m g /LSB. A value of 0 may result in undesirable behavior if the activity interrupt is enabled.

## Register 0x25-THRESH\_INACT (Read/Write)

The THRESH\_INACT register is eight bits and holds the threshold value for detecting inactivity. The data format is unsigned, therefore, the magnitude of the inactivity event is compared with the value in the THRESH\_INACT register. The scale factor is 62.5 m g /LSB. A value of 0 may result in undesirable behavior if the inactivity interrupt is enabled.

## Register 0x26-TIME\_INACT (Read/Write)

The TIME\_INACT register is eight bits and contains an unsigned time value representing the amount of time that acceleration must be less than the value in the THRESH\_INACT register for inactivity to be declared. The scale factor is 1 sec/LSB. Unlike the other interrupt functions, which use unfiltered data (see the Threshold section), the inactivity function uses filtered output data. At least one output sample must be generated for the inactivity interrupt to be triggered. This results in the function appearing unresponsive if the TIME\_INACT register is set to a value less than the time constant of the output data rate. A value of 0 results in an interrupt when the output data is less than the value in the THRESH\_INACT register.

## Register 0x27-ACT\_INACT\_CTL (Read/Write)

| D7          | D6            | D5            | D4            |
|-------------|---------------|---------------|---------------|
| ACT ac/dc   | ACT_X enable  | ACT_Y enable  | ACT_Z enable  |
| D3          | D2            | D1            | D0            |
| INACT ac/dc | INACT_Xenable | INACT_Yenable | INACT_Zenable |

## ACT AC/DC and INACT AC/DC Bits

A setting of 0 selects dc-coupled operation, and a setting of 1 enables ac-coupled operation. In dc-coupled operation, the current acceleration magnitude is compared directly with THRESH\_ACT and THRESH\_INACT to determine whether activity or inactivity is detected.

In ac-coupled operation for activity detection, the acceleration value at the start of activity detection is taken as a reference value. New samples of acceleration are then compared to this reference value, and if the magnitude of the difference exceeds the THRESH\_ACT value, the device triggers an activity interrupt.

Similarly, in ac-coupled operation for inactivity detection, a reference value is used for comparison and is updated whenever the device exceeds the inactivity threshold. After the reference value is selected, the device compares the magnitude of the difference between the reference value and the current acceleration with THRESH\_INACT. If the difference is less than the value in THRESH\_INACT for the time in TIME\_INACT, the device is considered inactive and the inactivity interrupt is triggered.

## ACT\_x Enable Bits and INACT\_x Enable Bits

A setting of 1 enables x-, y-, or z-axis participation in detecting activity or inactivity. A setting of 0 excludes the selected axis from participation. If all axes are excluded, the function is disabled. For activity detection, all participating axes are logically OR' ed, causing the activity function to trigger when any of the participating axes exceeds the threshold. For inactivity detection, all participating axes are logically AND' ed, causing the inactivity function to trigger only if all participating axes are below the threshold for the specified period of time.

## Register 0x28-THRESH\_FF (Read/Write)

The THRESH\_FF register is eight bits and holds the threshold value, in unsigned format, for free-fall detection. The acceleration on all axes is compared with the value in THRESH\_FF to determine if a free-fall event occurred. The scale factor is 62.5 m g /LSB. Note that a value of 0 m g may result in undesirable behavior if the free-fall interrupt is enabled. Values between 300 m g and 600 m g (0x05 to 0x09) are recommended.

## Register 0x29-TIME\_FF (Read/Write)

The TIME\_FF register is eight bits and stores an unsigned time value representing the minimum time that the value of all axes must be less than THRESH\_FF to generate a free-fall interrupt. The scale factor is 5 ms/LSB. A value of 0 may result in undesirable behavior if the free-fall interrupt is enabled. V alues between 100 ms and 350 ms (0x14 to 0x46) are recommended.

## Register 0x2A-TAP\_AXES (Read/Write)

|   D7 |   D6 |   D5 | D4           | D3       | D2           | D1           | D0           |
|------|------|------|--------------|----------|--------------|--------------|--------------|
|    0 |    0 |    0 | Improved tap | Suppress | TAP_X enable | TAP_Y enable | TAP_Z enable |

## Improved Tap Bit

The improved tap bit is used to enable improved tap detection. This mode of operation improves tap detection by performing an ac-coupled differential comparison of the output acceleration data. The improved tap detection is performed on the same output data available in the DATAX, DATAY, and DATAZ registers. Due to the dependency on the output data rate and the ac-coupled differential measurement, the threshold and timing values for single taps and double taps must be adjusted for improved tap detection. For further explanation of improved tap detection, see the Improved Tap Detection section. Improved tap is enabled by setting the improved tap bit to a value of 1 and is disabled by clearing the bit to a value of 0.

## Suppress Bit

Setting the suppress bit suppresses double-tap detection if acceleration greater than the value in THRESH\_TAP is present between taps. See the Tap Detection section for more details.

## TAP\_x Enable Bits

A setting of 1 in the TAP\_X enable, TAP\_Y enable, or TAP\_Z enable bit enables x-, y-, or z-axis participation in tap detection. A setting of 0 excludes the selected axis from participation in tap detection.

## Register 0x2B-ACT\_TAP\_STATUS (Read Only)

|   D7 | D6           | D5           | D4           | D3     | D2           | D1           | D0           |
|------|--------------|--------------|--------------|--------|--------------|--------------|--------------|
|    0 | ACT_X source | ACT_Y source | ACT_Z source | Asleep | TAP_X source | TAP_Y source | TAP_Z source |

## ACT\_x Source and TAP\_x Source Bits

These bits indicate the first axis involved in a tap or activity event. A setting of 1 corresponds to involvement in the event, and a setting of 0 corresponds to no involvement. When new data is available, these bits are not cleared but are overwritten by the new data. The ACT\_TAP\_STATUS register should be read before clearing the interrupt. Disabling an axis from participation clears the corresponding source bit when the next activity or single-tap/double-tap event occurs.

## Asleep Bit

A setting of 1 in the asleep bit indicates that the part is asleep, and a setting of 0 indicates that the part is not asleep. This bit toggles only if the device is configured for autosleep. See the Register 0x2D-POWER\_CTL (Read/Write) section for more information on autosleep mode.

## Register 0x2C-BW\_RATE (Read/Write)

|   D7 |   D6 |   D5 | D4        | D3   | D2   | D1   | D0   |
|------|------|------|-----------|------|------|------|------|
|    0 |    0 |    0 | LOW_POWER | Rate |      |      |      |

## LOW\_POWER Bit

A setting of 0 in the LOW\_POWER bit selects normal operation, and a setting of 1 selects reduced power operation, which is associated with somewhat higher noise (see the Power Modes section for details).

## Rate Bits

These bits select the device bandwidth and output data rate (see Table 7 and Table 8 for details). The default value is 0x0A, which translates to a 100 Hz output data rate. An output data rate should be selected that is appropriate for the communication protocol and frequency selected. Selecting too high of an output data rate with a low communication speed results in samples being discarded.

## Register 0x2D-POWER\_CTL (Read/Write)

|   D7 |   D6 | D5   | D4         | D3      | D2    | D1 D0   |
|------|------|------|------------|---------|-------|---------|
|    0 |    0 | Link | AUTO_SLEEP | Measure | Sleep | Wakeup  |

## Link Bit

A setting of 1 in the link bit with both the activity and inactivity functions enabled delays the start of the activity function until inactivity is detected. After activity is detected, inactivity detection begins, preventing the detection of activity. This bit serially links the activity and inactivity functions. When this bit is set to 0, the inactivity and activity functions are concurrent. Additional information can be found in the Link Mode section.

When clearing the link bit, it is recommended that the part be placed into standby mode and then set back to measurement mode with a subsequent write. This is done to ensure that the device is properly biased if sleep mode is manually disabled; otherwise, the first few samples of data after the link bit is cleared may have additional noise, especially if the device was asleep when the bit was cleared.

## AUTO\_SLEEP Bit

If the link bit is set, a setting of 1 in the AUTO\_SLEEP bit enables the autosleep functionality. In this mode, the ADXL344 automatically switches to sleep mode if the inactivity function is enabled and inactivity is detected (that is, when acceleration is below the THRESH\_INACT value for at least the time indicated by TIME\_INACT). If activity is also enabled, the ADXL344 automatically wakes up from sleep after detecting activity and returns to operation at the output data rate set in the BW\_RATE register. A setting of 0 in the AUTO\_SLEEP bit disables automatic switching to sleep mode. See the description of the sleep bit in this section for more information on sleep mode.

If the link bit is not set, the AUTO\_SLEEP feature is disabled, and setting the AUTO\_SLEEP bit does not have any impact on device operation. Refer to the Link Bit section or the Link Mode section for more information about using the link feature.

When clearing the AUTO\_SLEEP bit, it is recommended that the part be placed into standby mode and then set back to measurement mode with a subsequent write. This is done to ensure that the device is properly biased if sleep mode is manually disabled; otherwise, the first few samples of data after the AUTO\_SLEEP bit is cleared may have additional noise, especially if the device was asleep when the bit was cleared.

## Measure Bit

A setting of 0 in the measure bit places the part into standby mode, and a setting of 1 places the part into measurement mode. The ADXL344 powers up in standby mode with minimum power consumption.

## Sleep Bit

A setting of 0 in the sleep bit puts the part into the normal mode of operation, and a setting of 1 places the part into sleep mode. Sleep mode suppresses DATA\_READY, stops transmission of data to FIFO, and switches the sampling rate to one specified by the wakeup bits. In sleep mode, only the activity function can be used. While the DATA\_READY interrupt is suppressed, the output data registers are still updated at the sampling rate set by the wakeup bits.

When clearing the sleep bit, it is recommended that the part be placed into standby mode and then set back to measurement mode with a subsequent write. This is done to ensure that the device is properly biased if sleep mode is manually disabled; otherwise, the first few samples of data after the sleep bit is cleared may have additional noise, especially if the device was asleep when the bit was cleared.

## Wakeup Bits

These bits control the frequency of readings in sleep mode as described in Table 20.

## Table 20. Frequency of Readings in Sleep Mode

| Setting   | Setting   | Frequency (Hz)   |
|-----------|-----------|------------------|
| D1        | D0        | Frequency (Hz)   |
| 0         | 0         | 8                |
| 0         | 1         | 4                |
| 1         | 0         | 2                |
| 1         | 1         | 1                |

## Register 0x2E-INT\_ENABLE (Read/Write)

| D7         | D6         | D5         | D4                   |
|------------|------------|------------|----------------------|
| DATA_READY | SINGLE_TAP | DOUBLE_TAP | Activity             |
| D3         | D2         | D1         | D0                   |
| Inactivity | FREE_FALL  | Watermark  | Overrun/ orientation |

Setting bits in this register to a value of 1 enables their respective functions to generate interrupts, whereas a value of 0 prevents the functions from generating interrupts. The DATA\_READY, watermark, and overrun/orientation bits enable only the interrupt output; the functions are always enabled. It is recommended that interrupts be configured before enabling their outputs.

## Register 0x2F-INT\_MAP (Read/Write)

| D7         | D6         | D5         | D4                   |
|------------|------------|------------|----------------------|
| DATA_READY | SINGLE_TAP | DOUBLE_TAP | Activity             |
| D3         | D2         | D1         | D0                   |
| Inactivity | FREE_FALL  | Watermark  | Overrun/ orientation |

Bits set to 0 in this register send their respective interrupts to the INT1 pin, whereas bits set to 1 send their respective interrupts to the INT2 pin. All selected interrupts for a given pin are OR' ed.

## Register 0x30-INT\_SOURCE (Read Only)

| D7         | D6         | D5         | D4                   |
|------------|------------|------------|----------------------|
| DATA_READY | SINGLE_TAP | DOUBLE_TAP | Activity             |
| D3         | D2         | D1         | D0                   |
| Inactivity | FREE_FALL  | Watermark  | Overrun/ orientation |

Bits set to 1 in this register indicate that their respective functions have triggered an event, whereas bits set to 0 indicate that the corresponding events have not occurred. The DATA\_READY, watermark, and overrun/orientation bits are always set if the corresponding events occur, regardless of the INT\_ENABLE register settings, and are cleared by reading data from the DATAX, DATAY, and DATAZ registers. The DATA\_READY and watermark bits may require multiple reads, as indicated in the FIFO mode descriptions in the FIFO section. Other bits, and the corresponding interrupts, including orientation if enabled, are cleared by reading the INT\_SOURCE register.

## Register 0x31-DATA\_FORMAT (Read/Write)

| D7        | D6   | D5         |   D4 | D3       | D2      | D1   | D0    |
|-----------|------|------------|------|----------|---------|------|-------|
| SELF_TEST | SPI  | INT_INVERT |    0 | FULL_RES | Justify |      | Range |

The DATA\_FORMAT register controls the presentation of data to Register 0x32 through Register 0x37. All data, except that for the ±16 g range, must be clipped to avoid rollover.

## SELF\_TEST Bit

A setting of 1 in the SELF\_TEST bit applies a self-test force to the sensor, causing a shift in the output data. A value of 0 disables the self-test force.

## SPI Bit

A value of 1 in the SPI bit sets the device to 3-wire SPI mode, and a value of 0 sets the device to 4-wire SPI mode.

## INT\_INVERT Bit

A value of 0 in the INT\_INVERT bit sets the interrupts to active high, and a value of 1 sets the interrupts to active low.

## FULL\_RES Bit

When this bit is set to a value of 1, the device is in full resolution mode, where the output resolution increases with the g range set by the range bits to maintain a 4 m g /LSB scale factor. When the FULL\_RES bit is set to 0, the device is in 10-bit mode, and the range bits determine the maximum g range and scale factor.

## Justify Bit

A setting of 1 in the justify bit selects left-justified (MSB) mode, and a setting of 0 selects right-justified mode with sign extension.

## Range Bits

These bits set the g range as described in Table 21.

## Table 21. g Range Setting

| Setting   | Setting   |         |
|-----------|-----------|---------|
| D1        | D0        | g Range |
| 0         | 0         | ±2 g    |
| 0         | 1         | ±4 g    |
| 1         | 0         | ±8 g    |
| 1         | 1         | ±16 g   |

## Register 0x32 to Register 0x37-DATAX0, DATAX1, DATAY0, DATAY1, DATAZ0, DATAZ1 (Read Only)

These six bytes (Register 0x32 to Register 0x37) are eight bits each and hold the output data for each axis. Register 0x32 and Register 0x33 hold the output data for the x-axis, Register 0x34 and Register 0x35 hold the output data for the y-axis, and Register 0x36 and Register 0x37 hold the output data for the z-axis. The output data is twos complement, with DATAx0 as the least significant byte and DATAx1 as the most significant byte, where x represents X, Y, or Z. The DATA\_FORMAT register (Address 0x31) controls the format of the data. It is recommended that a multiple-byte read of all registers be performed to prevent a change in data between reads of sequential registers.

## Register 0x38-FIFO\_CTL (Read/Write)

| D7 D6     | D5      | D4      | D3      | D2      | D1      | D0      |
|-----------|---------|---------|---------|---------|---------|---------|
| FIFO_MODE | Trigger | Samples | Samples | Samples | Samples | Samples |

## FIFO\_MODE Bits

These bits set the FIFO mode, as described in Table 22.

## Table 22. FIFO Modes

| Setting   | Setting   |         |                                                                                                                                                                                                       |
|-----------|-----------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D7        | D6        | Mode    | Function                                                                                                                                                                                              |
| 0         | 0         | Bypass  | FIFO is bypassed.                                                                                                                                                                                     |
| 0         | 1         | FIFO    | FIFO collects up to 32 values and then stops collecting data, collecting new data only when FIFO is not full.                                                                                         |
| 1         | 0         | Stream  | FIFO holds the last 32 data values. When FIFO is full, the oldest data is overwritten with newer data.                                                                                                |
| 1         | 1         | Trigger | When triggered by the trigger bit, FIFO holds the last data samples before the trigger event and then continues to collect data until FIFO is full. New data is collected only when FIFO is not full. |

## Trigger Bit

A value of 0 in the trigger bit links the trigger event of trigger mode to INT1, and a value of 1 links the trigger event to INT2.

## Samples Bits

The function of these bits depends on the FIFO mode selected (see Table 23). Entering a value of 0 in the samples bits immediately sets the watermark bit in the INT\_SOURCE register (Address 0x30), regardless of which FIFO mode is selected. Undesirable operation may occur if a value of 0 is used for the samples bits when trigger mode is used.

## Table 23. Samples Bits Functions

| FIFOMode   | Samples Bits Function                                                                   |
|------------|-----------------------------------------------------------------------------------------|
| Bypass     | None.                                                                                   |
| FIFO       | Specifies how many FIFO entries are needed to trigger a watermark interrupt.            |
| Stream     | Specifies how many FIFO entries are needed to trigger a watermark interrupt.            |
| Trigger    | Specifies how many FIFO samples are retained in the FIFO buffer before a trigger event. |

## Register 0x39-FIFO\_STATUS (Read Only)

| D7        |   D6 | D5      | D4      | D3      | D2      | D1      | D0      |
|-----------|------|---------|---------|---------|---------|---------|---------|
| FIFO_TRIG |    0 | Entries | Entries | Entries | Entries | Entries | Entries |

## FIFO\_TRIG Bit

A 1 in the FIFO\_TRIG bit corresponds to a trigger event occurring, and a 0 means that a FIFO trigger event has not occurred.

## Entries Bits

These bits report how many data values are stored in FIFO. Access to collect the data from FIFO is provided through the DATAX, DATAY, and DATAZ registers. FIFO reads must be done in burst or multiple-byte mode because each FIFO level is cleared after any read (single- or multiple-byte) of FIFO. FIFO stores a maximum of 32 entries, which equates to a maximum of 33 entries available at any given time because an additional entry is available at the output filter of the device.

## Register 0x3A-TAP\_SIGN (Read Only)

|   D7 | D6    | D5    | D4    |   D3 | D2   | D1   | D0   |
|------|-------|-------|-------|------|------|------|------|
|    0 | XSIGN | YSIGN | ZSIGN |    0 | XTAP | YTAP | ZTAP |

## xSIGN Bits

These bits indicate the sign of the first axis involved in a tap event. A setting of 1 corresponds to acceleration in the negative direction, and a setting of 0 corresponds to acceleration in the positive direction. These bits update only when a new singletap/double-tap event is detected, and only the axes enabled in the TAP\_AXES register (Address 0x2A) are updated. The TAP\_SIGN register should be read before clearing the interrupt. See the Tap Sign section for more details.

## xTAP Bits

These bits indicate the first axis involved in a tap event. A setting of 1 corresponds to involvement in the event, and a setting of 0 corresponds to no involvement. When new data is available, these bits are not cleared but are overwritten by the new data. The TAP\_SIGN register should be read before clearing the interrupt. Disabling an axis from participation clears the corresponding source bit when the next single-tap/double-tap event occurs.

## Register 0x3B-ORIENT\_CONF (Read/Write)

| D7          | D6        | D5        | D4        | D3      | D2      | D1      | D0      |
|-------------|-----------|-----------|-----------|---------|---------|---------|---------|
| INT_ ORIENT | Dead zone | Dead zone | Dead zone | INT_ 3D | Divisor | Divisor | Divisor |

## INT\_ORIENT Bit

Setting the INT\_ORIENT bit enables the orientation interrupt. A value of 1 overrides the overrun function of the device and replaces overrun in the INT\_MAP (Address 0x2F), INT\_ENABLE (Address 0x2E), and INT\_SOURCE (Address 0x30) registers with the orientation function. After setting the INT\_ORIENT bit, the orientation bits in the INT\_MAP and INT\_ENABLE registers must be configured to map the orientation interrupt to INT1 or INT2 and to enable generation of the interrupt to the pin.

An orientation interrupt is generated whenever the orientation status for the mode selected by the INT\_3D bit changes in the orient register (Address 0x3C). The orientation interrupt is cleared by reading the INT\_SOURCE register. Clearing the INT\_ORIENT bit or the orientation bit in the INT\_ENABLE register (Address 0x2E) disables and clears the interrupt.

Writing to the BW\_RATE register (Address 0x2C) or placing the part into standby mode resets the orientation feature, clearing the orientation filter and the interrupt. However, resetting the orientation feature also resets the orientation status in the orient register (Address 0x3C) and, therefore, causes an interrupt to be generated when the next output sample is available if the present orientation is not the default orientation. A value of 0 for the INT\_ORIENT bit disables generation of the orientation interrupt and permits the use of the overrun function.

## Dead Zone Bits

These bits determine the region between two adjacent orientations, where the orientation is considered invalid and is not updated. A value of 0 may result in undesirable behavior when the orientation is close to the bisector between two adjacent regions. The dead zone angle is determined by these bits, as described in Table 24. See the Orientation Sensing section for more details.

## Table 24. Dead Zone and Divisor Codes

|   Decimal |   Binary |   Dead Zone Angle (Degrees) | Divisor Bandwidth (Hz)   |
|-----------|----------|-----------------------------|--------------------------|
|         0 |      000 |                         5.1 | ODR/9                    |
|         1 |      001 |                        10.2 | ODR/22                   |
|         2 |      010 |                        15.2 | ODR/50                   |
|         3 |      011 |                        20.4 | ODR/100                  |
|         4 |      100 |                        25.5 | ODR/200                  |
|         5 |      101 |                        30.8 | ODR/400                  |
|         6 |      110 |                        36.1 | ODR/800                  |
|         7 |      111 |                        41.4 | ODR/1600                 |

## INT\_3D Bit

If the orientation interrupt is enabled, the INT\_3D bit determines whether 2D or 3D orientation detection generates an interrupt. A value of 0 generates an interrupt only if the 2D orientation changes from a valid 2D orientation to a different valid 2D orientation. A value of 1 generates an interrupt only if the 3D orientation changes from a valid 3D orientation to a different valid 3D orientation.

## Divisor Bits

These bits set the bandwidth of the filter used to low-pass filter the measured acceleration for stable orientation sensing. The divisor bandwidth is determined by these bits, as detailed in Table 24, where ODR is the output data rate set in the BW\_RATE register (Address 0x2C). See the Orientation Sensing section for more details.

## Register 0x3C-Orient (Read Only)

|   D7 | D6   | D5 D4     | D3   | D2   | D1        | D0   |
|------|------|-----------|------|------|-----------|------|
|    0 | V2   | 2D_ORIENT | V3   |      | 3D_ORIENT |      |

## Vx Bits

These bits show the validity of the 2D (V2) and 3D (V3) orientations. A value of 1 corresponds to the orientation being valid. A value of 0 means that the orientation is invalid because the current orientation is in the dead zone.

## xD\_ORIENT Bits

These bits represent the current 2D (2D\_ORIENT) and 3D (3D\_ORIENT) orientations of the accelerometer. If the orientation interrupt is enabled, this register is read to determine the orientation of the device when the interrupt occurs. Because this register updates with each new sample of acceleration data, it should be read at the time of the orientation interrupt to ensure that the orientation change that caused the interrupt has been identified. Orientation values are shown in Table 25 and Table 26. See the Orientation Sensing section for more details.

Writing to the BW\_RATE register (Address 0x2C) or placing the part into standby mode resets the orientation feature, clearing the orientation filter and the orientation status. An orientation interrupt (if enabled) results from these actions if the orientation during the next output sample is different from the default value (+X for 2D orientation detection and undefined for 3D orientation).

## Table 25. 2D Orientation Codes

|   Decimal |   Binary | Orientation        | Dominant Axis   |
|-----------|----------|--------------------|-----------------|
|         0 |       00 | Portrait positive  | +X              |
|         1 |       01 | Portrait negative  | -X              |
|         2 |       10 | Landscape positive | +Y              |
|         3 |       11 | Landscape negative | -Y              |

## Table 26. 3D Orientation Codes

|   Decimal |   Binary | Orientation   | Dominant Axis   |
|-----------|----------|---------------|-----------------|
|         3 |      011 | Front         | +X              |
|         4 |      100 | Back          | -X              |
|         2 |      010 | Left          | +Y              |
|         5 |      101 | Right         | -Y              |
|         1 |      001 | Top           | +Z              |
|         6 |      110 | Bottom        | -Z              |

## APPLICATIONS INFORMATION

## POWER SUPPLY DECOUPLING

A 1 μF tantalum capacitor (CS) at VS and a 0.1 μF ceramic capacitor (CI/O) at VDD I/O placed close to the ADXL344 supply pins is recommended to adequately decouple the accelerometer from noise on the power supply. If additional decoupling is necessary, a resistor or ferrite bead, no larger than 100 Ω, in series with VS may be helpful. Additionally, increasing the bypass capacitance on VS to a 10 μF tantalum capacitor in parallel with a 0.1 μF ceramic capacitor may also improve noise.

Care should be taken to ensure that the connection from the ADXL344 ground to the power supply ground has low impedance because noise transmitted through ground has an effect similar to noise transmitted through VS. It is recommended that VS and VDD I/O be separate supplies to minimize digital clock noise on the VS supply. If this is not possible, additional filtering of the supplies as previously mentioned may be necessary.

10628-035

Figure 32. Applications Diagram

<!-- image -->

## MECHANICAL CONSIDERATIONS FOR MOUNTING

The ADXL344 should be mounted on the PCB in a location close to a hard mounting point of the PCB to the case. Mounting the ADXL344 at an unsupported PCB location, as shown in Figure 33, may result in large, apparent measurement errors due to undampened PCB vibration. Locating the accelerometer near a hard mounting point ensures that any PCB vibration at the accelerometer is above the accelerometer's mechanical sensor resonant frequency and, therefore, effectively invisible to the accelerometer. Multiple mounting points close to the sensor and/or a thicker PCB also help to reduce the effect of system resonance on the performance of the sensor.

Figure 33. Incorrectly Placed Accelerometers

<!-- image -->

## TAP DETECTION

The tap interrupt function is capable of detecting either single or double taps. The following parameters are shown in Figure 34 for a valid single-tap event and a valid double-tap event:

- The tap detection threshold is defined by the THRESH\_TAP register (Address 0x1D).
- The maximum tap duration time is defined by the DUR register (Address 0x21).
- The tap latency time is defined by the latent register (Address 0x22) and is the waiting period from the end of the first tap until the start of the time window when a second tap can be detected, which is determined by the value in the window register (Address 0x23).
- The interval after the latency time (set by the latent register) is defined by the window register. Although a second tap must begin after the latency time has expired, it need not finish before the end of the time defined by the window register.

Figure 34. Tap Interrupt Function with Valid Single and Double Taps

<!-- image -->

If only the single-tap function is in use, the single-tap interrupt is triggered when the acceleration goes below the threshold, as long as DUR has not been exceeded. If both single and doubletap functions are in use, the single-tap interrupt is triggered when the double-tap event has been either validated or invalidated.

Several events can occur to invalidate the second tap of a double-tap event. First, if the suppress bit in the TAP\_AXES register (Address 0x2A) is set, any acceleration spike above the threshold during the latency time (set by the latent register) invalidates the double-tap detection, as shown in Figure 35.

Figure 35. Double-Tap Event Invalid Due to High g Event When the Suppress Bit Is Set

<!-- image -->

A double-tap event can also be invalidated if acceleration above the threshold is detected at the start of the time window for the second tap (set by the window register (Address 0x23)). This results in an invalid double tap at the start of this window, as shown in Figure 36. Additionally, a double-tap event can be invalidated if an acceleration exceeds the time limit for taps (set by the DUR register (Address 0x21)), resulting in an invalid double tap at the end of the DUR time limit for the second tap event, also shown in Figure 36.

Figure 36. Tap Interrupt Function with Invalid Double Taps

<!-- image -->

Single taps, double taps, or both can be detected by setting the respective bits in the INT\_ENABLE register (Address 0x2E). Control over participation of each of the three axes in single-tap/ double-tap detection is exerted by setting the appropriate bits in the TAP\_AXES register (Address 0x2A). For the double-tap function to operate, both the latent and window registers must be set to a nonzero value.

Every mechanical system has somewhat different single-tap/ double-tap responses based on the mechanical characteristics of the system. Therefore, some experimentation with values for the DUR, latent, window, and THRESH\_TAP registers is required. In general, a good starting point is to set the DUR register to a value greater than 0x10 (10 ms), the latent register to a value greater than 0x10 (20 ms), the window register to a value greater than 0x40 (80 ms), and the THRESH\_TAP register to a value greater than 0x30 (3 g ). Setting a very low value in the latent, window, or THRESH\_TAP register may result in an unpredictable response due to the accelerometer picking up echoes of the tap inputs.

After a tap interrupt has been received, the first axis to exceed the THRESH\_TAP level is reported in the ACT\_TAP\_STATUS register (Address 0x2B). This register is never cleared but is overwritten with new data.

## IMPROVED TAP DETECTION

Improved tap detection is enabled by setting the improved tap bit of the TAP\_AXES register (Address 0x2A). When improved tap detection is enabled, the filtered output data corresponding to the output data rate set in the BW\_RATE register (Address 0x2C) is processed to determine if a tap event occurred. In addition, an ac-coupled differential measurement is used. This results in the timing values and threshold values for improved tap detection being different from those used for normal tap detection.

When improved tap detection is used, new values must be determined based on test results. In general, no timing values (in the DUR, latent, or window registers) should be set that are less than the time step resolution set by the output data rate. The threshold value for improved tap detection can typically be set much lower than the threshold for normal tap detection. The value used depends on the value in the BW\_RATE register and should be determined through system testing. Refer to the Threshold section for more details.

## TAP SIGN

A negative sign is produced by experiencing a negative acceleration, which corresponds to tapping on the positive face of the device for the desired axis. The positive face of the device is the face such that movement in that direction is positive acceleration. For example, tapping on the face that corresponds to the +X direction, labeled as front in Figure 37, results in a negative sign for the x-axis. Tapping on the face labeled as left in Figure 37 results in a negative sign for the y-axis, and tapping on the face labeled top results in a negative sign for the z-axis. Conversely, tapping on the back, right, or bottom side results in positive signs for the corresponding axes.

<!-- image -->

10628-046

Figure 37. 3D Orientation with Coordinate System

## THRESHOLD

The lower output data rates are achieved by decimating a common sampling frequency inside the device. The activity, free-fall, and single-tap/double-tap detection functions without improved tap enabled are performed using undecimated data. As the bandwidth of the output data varies with the data rate and is lower than the bandwidth of the undecimated data, the high frequency and high g data that is used to determine activity, free-fall, and single-tap/double-tap events may not be present if the output of the accelerometer is examined. This may result in functions triggering when acceleration data does not appear to meet the conditions set by the user for the corresponding function.

## LINK MODE

The function of the link bit is to reduce the number of activity interrupts that the processor must service by setting the device to look for activity only after inactivity. For proper operation of this feature, the processor must still respond to the activity and inactivity interrupts by reading the INT\_SOURCE register (Address 0x30) and, therefore, clearing the interrupts. If an activity interrupt is not cleared, the part cannot go into autosleep mode. The asleep bit in the ACT\_TAP\_STATUS register (Address 0x2B) indicates whether the part is asleep.

## SLEEP MODE VS. LOW POWER MODE

In applications where a low data rate and low power consumption are desired (at the expense of noise performance), it is recommended that low power mode be used. The use of low power mode preserves the functionality of the DATA\_READY interrupt and FIFO for postprocessing of the acceleration data. Sleep mode, while offering a low data rate and power consumption, is not intended for data acquisition.

However, when sleep mode is used in conjunction with the AUTO\_SLEEP mode and the link mode, the part can automatically switch to a low power, low sampling rate mode when inactivity is detected. To prevent the generation of redundant inactivity interrupts, the inactivity interrupt is automatically disabled and activity is enabled. When the ADXL344 is in sleep mode, the host processor can also be placed into sleep mode or low power mode to save significant system power. Once activity is detected, the accelerometer automatically switches back to the original data rate of the application and provides an activity interrupt that can be used to wake up the host processor. Similar to when inactivity occurs, detection of activity events is disabled and inactivity is enabled.

## OFFSET CALIBRATION

Accelerometers are mechanical structures containing elements that are free to move. These moving parts can be very sensitive to mechanical stresses, much more so than solid-state electronics. The 0 g bias or offset is an important accelerometer metric because it defines the baseline for measuring acceleration. Additional stresses can be applied during assembly of a system containing an accelerometer. These stresses can come from, but are not limited to, component soldering, board stress during mounting, and application of any compounds on or over the component. If calibration is deemed necessary, it is recommended that calibration be performed after system assembly to compensate for these effects.

A simple method of calibration is to measure the offset while assuming that the sensitivity of the ADXL344 is as specified in Table 1. The offset can then be automatically accounted for by using the built-in offset registers (Register 0x1E, Register 0x1F , and Register 0x20). This results in the data acquired from the DATAX, DATAY, and DATAZ registers (Address 0x32 to Address 0x37) already compensating for any offset.

In a no-turn or single-point calibration scheme, the part is oriented such that one axis, typically the z-axis, is in the 1 g field of gravity and the remaining axes, typically the x- and y-axes, are in a 0 g field. The output is then measured by taking the average of a series of samples. The number of samples averaged is a choice of the system designer, but a recommended starting point is 0.1 sec worth of data for data rates of 100 Hz or greater. This corresponds to 10 samples at the 100 Hz data rate. For data rates of less than 100 Hz, it is recommended that at least 10 samples be averaged together. These values are stored as X0 g , Y0 g , and Z+1 g for the 0 g measurements on the x- and y-axes and the 1 g measurement on the z-axis, respectively.

The values measured for X0 g and Y0 g correspond to the offset of the x- and y-axes, and compensation is done by subtracting those values from the output of the accelerometer to obtain the actual acceleration:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Because the z-axis measurement is done in a 1 g field, a no-turn or single-point calibration scheme assumes an ideal sensitivity, SZ, for the z-axis. This is subtracted from Z+1 g to attain the z-axis offset, which is then subtracted from future measured values to obtain the actual value:

<!-- formula-not-decoded -->

The ADXL344 can automatically compensate the output for offset by using the offset registers (Register 0x1E, Register 0x1F, and Register 0x20). These registers contain an 8-bit, twos complement value that is automatically added to all measured acceleration values, and the result is then placed into the DATAX, DATAY, and DATAZ registers. Because the value placed in an offset register is additive, a negative value is placed into the register to eliminate a positive offset and vice versa for a negative offset. The register has a scale factor of 15.6 m g /LSB and is independent of the selected g range.

As an example, assume that the ADXL344 is placed into fullresolution mode with a sensitivity of typically 256 LSB/ g . The part is oriented such that the z-axis is in the field of gravity and the outputs of the x-, y-, and z-axes are measured as +10 LSB, -13 LSB, and +9 LSB, respectively. Using the previous equations, X0 g is +10 LSB, Y0 g is -13 LSB, and Z0 g is +9 LSB. Each LSB of output in full-resolution is 3.9 m g or one-quarter of an LSB of the offset register.

Because the offset register is additive, the 0 g values are negated and rounded to the nearest LSB of the offset register:

<!-- formula-not-decoded -->

These values are programmed into the OFSX, OFSY, and OFXZ registers, respectively, as 0xFD, 0x03, and 0xFE. As with all registers in the ADXL344, the offset registers do not retain the value written into them when power is removed from the part. Power-cycling the ADXL344 returns the offset registers to their default value of 0x00.

Because the no-turn or single-point calibration method assumes an ideal sensitivity in the z-axis, any error in the sensitivity results in offset error. For instance, if the actual sensitivity was 250 LSB/ g in the previous example, the offset would be 15 LSB, not 9 LSB. To help minimize this error, an additional measurement point can be used with the z-axis in a 0 g field, and the 0 g measurement can be used in the ZACTUAL equation.

## USING SELF-TEST

The self-test change is defined as the difference between the acceleration output of an axis with self-test enabled and the acceleration output of the same axis with self-test disabled (see Endnote 8 of Table 1). This definition assumes that the sensor does not move between these two measurements. If the sensor moves, the additional shift, which is unrelated to self-test, corrupts the test.

Proper configuration of the ADXL344 is also necessary for an accurate self-test measurement. The part should be set with a data rate of 100 Hz through 800 Hz, or 3200 Hz. This is done by ensuring that a value of 0x0A through 0x0D, or 0x0F is written into the rate bits (Bit D3 through Bit D0) in the BW\_RATE register (Address 0x2C). The part also must be placed into normal power operation by ensuring that the LOW\_POWER bit (Bit D4) in the BW\_RATE register is cleared (LOW\_POWER bit = 0) for accurate self-test measurements. It is recommended that the part be set to full-resolution 16 g mode to ensure that there is sufficient dynamic range for the entire self-test shift. This is done by setting the FULL\_RES bit (Bit D3) and writing a value of 0x03 to the range bits (Bit D1 and Bit D0) of the DATA\_FORMAT register (Address 0x31). This results in a high dynamic range for measurement and a 3.9 m g /LSB scale factor.

After the part is configured for accurate self-test measurement, several samples of acceleration data for the x-, y-, and z-axes should be retrieved from the sensor and averaged together. The number of samples averaged is a choice of the system designer, but a recommended starting point is 0.1 sec worth of data for data rates of 100 Hz or greater. This corresponds to 10 samples at the 100 Hz data rate. For data rates of less than 100 Hz, it is recommended that at least 10 samples be averaged together. The averaged values should be stored and labeled appropriately as the self-test disabled data, that is, XST\_OFF, YST\_OFF, and ZST\_OFF.

Next, self-test should be enabled by setting Bit D7 of the DATA\_FORMAT register (Address 0x31). The output needs some time (about four samples) to settle once self-test is enabled. After allowing the output to settle, several samples of acceleration data for the x-, y-, and z-axes should be taken again and averaged. It is recommended that the same number of samples be taken for this average as was previously taken. These averaged values should again be stored and labeled appropriately as the value with selftest enabled, that is, XST\_ON, YST\_ON, and ZST\_ON. Self-test can then be disabled by clearing Bit D7 of the DATA\_FORMAT register (Address 0x31).

With the stored values for self-test enabled and disabled, the self-test change is as follows:

<!-- formula-not-decoded -->

Because the measured output for each axis is expressed in LSBs, XST, YST, and ZST are also expressed in LSBs. These values can be converted to g ' s of acceleration by multiplying each value by the 3.9 m g /LSB scale factor, if configured for full-resolution mode. Additionally, Table 15 through Table 18 correspond to the self-test range converted to LSBs and can be compared with the measured self-test change when operating at a VS of 2.6 V . For other voltages, the minimum and maximum self-test output values should be adjusted based on (multiplied by) the scale factors shown in Table 14. If the part was placed into ±2 g , 10-bit or full-resolution mode, the values listed in Table 15 should be used. Although the fixed 10-bit mode or a range other than 16 g can be used, a different set of values, as indicated in Table 16 through Table 18, would need to be used. Using a range below 8 g may result in insufficient dynamic range and should be considered when selecting the range of operation for measuring self-test.

If the self-test change is within the valid range, the test is considered successful. Generally, a part is considered to pass if the minimum magnitude of change is achieved. However, a part that changes by more than the maximum magnitude is not necessarily a failure.

Another effective method for using the self-test to verify accelerometer functionality is to toggle the self-test at a certain rate and then perform an FFT on the output. The FFT should have a corresponding tone at the frequency the self-test was toggled. This methodology removes the dependency of the test on supply voltage and on self-test magnitude, which can vary within a rather wide range.

## ORIENTATION SENSING

The orientation function of the ADXL344 reports both 2D and 3D orientation concurrently through the orient register (Address 0x3C). The V2 and V3 bits (Bit D6 and Bit D3 in the orient register) report the validity of the 2D and 3D orientation codes. If V2 or V3 are set, their respective code is a valid orientation. If V2 or V3 are cleared, the orientation of the accelerometer is unknown, such as when the orientation is within the dead zone between valid regions.

For 2D orientation sensing, the relation of the x- and y-axes to gravity is used to determine the accelerometer orientation (see Figure 38 and Table 25). Portrait positive corresponds to the x-axis being most closely aligned to the gravity vector and directed upwards, opposite the gravity vector. Portrait negative is the opposite of portrait positive, with the x-axis pointing downwards along the gravity vector. Landscape positive corresponds to the y-axis being most closely aligned with the gravity vector and directed upwards, away from the gravity vector. Landscape negative is the orientation opposite landscape positive. The dead zone regions are shown in the orientations for portrait positive (+X) and portrait negative (-X) of Figure 38. These regions also exist for landscape positive (+Y) and landscape negative (-Y), as shown in Figure 38.

In 3D orientation, the z-axis is also included. If the accelerometer is placed in a Cartesian coordinate system, as shown in Figure 37 in the Tap Sign section, the top of the device corresponds to the positive z-axis direction, the front of the device corresponds to the positive x-axis direction, and the right side of the device corresponds to the positive y-axis direction.

The states shown in Table 26 correspond to which side of the accelerometer is directed upwards, opposite the gravity vector. As shown in Figure 37, the accelerometer is oriented in the top state. If the device is flipped over such that the top of the device is facing down, toward gravity, the orientation is reported as the bottom state. If the device is adjusted such that the positive x-axis or positive y-axis direction is pointing upwards, away from the gravity vector, the accelerometer reports the orientation as front or left, respectively.

The algorithm to detect orientation change is performed after filtering the output acceleration data to eliminate the effects of high frequency motion. This is performed by using a low-pass filter with a bandwidth set by the divisor bits (ORIENT\_CONF register, Address 0x3B). The orientation filter uses the same output data available in the output data registers (Address 0x32 to Address 0x37); therefore, the orient register (Address 0x3C) is updated at the same rate as the data rate that is set in the BW\_RATE register (Address 0x2C). Because the output data is used, the bandwidth of the orientation filter depends on the value set in the BW\_RATE register, and the divisor bandwidth values in Table 24 are referenced to the selected output data rate.

To eliminate most human motion, such as walking or shaking, the value in the divisor bits (Bits[D2:D0]) of the ORIENT\_CONF register (Address 0x3B) should be selected to effectively limit the orientation bandwidth to 1 Hz or 2 Hz. For example, with an output data rate of 100 Hz, a divisor selection of 3 (ODR/100) results in a 1 Hz bandwidth for orientation detection. For best results, it is recommended that an output data rate of ≥25 Hz in normal power mode and ≥200 Hz in low power operation be used.

Figure 38. 2D Orientation with Corresponding Codes

<!-- image -->

The width of the dead zone region between two orientation positions is determined by setting the value of the dead zone bits (Bits[D6:D4]) in the ORIENT\_CONF register (Address 0x3B). The dead zone region size can be specified as per the values shown in Table 24. The dead zone angle represents the total angle where the orientation is considered invalid. Therefore, a dead zone of 15.4° corresponds to 7.7° in either direction away from the bisector of two bordering regions. An example with a dead zone region of 15.4° is shown in Figure 39. It should be noted that the values shown in Table 24 correspond to the typical dead zone angle when the gravity vector is completely contained in only two axes (xy, xz, or yz) and should be used only as a starting point. If the device is oriented such that the projection of gravity onto all three axes is nonzero, the effective sensitivity is reduced, causing an increase in the dead zone angle. Therefore, evaluation needs to be performed for specific application uses to determine the optimal setting for the dead zone.

Figure 39. Orientation Showing a 15.4° Dead Zone Region

<!-- image -->

By setting the INT\_ORIENT bit (Bit D7) of the ORIENT\_CONF register (Address 0x3B), an interrupt can be generated when the device is placed into a new valid orientation. Only one mode of orientation detection, 2D or 3D, can generate an interrupt at a time. The orientation detection mode is selected by setting or clearing the INT\_3D bit (Bit D3) of the ORIENT\_CONF register (Address 0x3B). For more details, refer to the Register 0x3B-ORIENT\_CONF (Read/Write) section.

Writing to the BW\_RATE register or placing the part into standby mode resets the orientation feature, clearing the orientation filter and the orientation status. These actions cause an orientation interrupt (if enabled), however, if the orientation during the next output sample is different from the default value (+X for 2D orientation detection and undefined for 3D orientation).

## DATA FORMATTING OF UPPER DATA RATES

Formatting of output data at the 3200 Hz and 1600 Hz output data rates changes depending on the mode of operation (fullresolution or fixed 10-bit) and the selected output range.

When using the 3200 Hz or 1600 Hz output data rates in full-resolution or ±2 g , 10-bit operation, the LSB of the output data-word is always 0. When data is right justified, this corresponds to Bit D0 of the DATAx0 register, as shown in Figure 40. When data is left justified and the part is operating in ±2 g , 10-bit mode, the LSB of the output data-word is Bit D6 of the DATAx0 register. In full-resolution operation when data is left justified, the location of the LSB changes according to the selected output range. For a range of ±2 g , the LSB is Bit D6 of the DATAx0 register; for ±4 g , Bit D5 of the DATAx0 register; for ±8 g , Bit D4 of the DATAx0 register; and for ±16 g , Bit D3 of the DATAx0 register. This is shown in Figure 41.

The use of 3200 Hz and 1600 Hz output data rates for fixed 10-bit operation in the ±4 g , ±8 g , and ±16 g output ranges provides an LSB that is valid and that changes according to the applied acceleration. Therefore, in these modes of operation, Bit D0 is not always 0 when output data is right justified, and Bit D6 is not always 0 when output data is left justified. Operation at any data rate of 800 Hz or lower also provides a valid LSB in all ranges and modes that change according to the applied acceleration.

10628-145

<!-- image -->

## NOISE PERFORMANCE

The specification of noise shown in Table 1 corresponds to the typical noise performance of the ADXL344 in normal power operation with an output data rate of 100 Hz (LOW\_POWER bit = 0, rate = 0x0A in the BW\_RATE register, Address 0x2C). For normal power operation at data rates below 100 Hz, the noise of the ADXL344 is equivalent to the noise at 100 Hz ODR in LSBs. For data rates greater than 100 Hz, the noise increases approximately by a factor of √2 per doubling of the data rate. For example, at 400 Hz ODR, the noise on the x- and y-axes is typically less than 2 LSB rms, and the noise on the z-axis is typically less than 3 LSB rms.

For low power operation (LOW\_POWER bit = 1 in the BW\_RATE register, Address 0x2C), the noise of the ADXL344 is constant for all valid data rates shown in Table 8. This value is typically less than 2.83 LSB rms for the x- and y-axes and typically less than 4.25 LSB rms for the z-axis.

The trend of noise performance for both normal power and low power modes of operation of the ADXL344 is shown in Figure 42.

Figure 43 shows the typical Allan deviation for the ADXL344. The 1/f corner of the device, as shown in this figure, is very low, allowing absolute resolution of approximately 100 µg (assuming that there is sufficient integration time). The figure also shows that the noise density is 420 µg/√Hz for the x- and y-axes and 530 µg/√Hz for the z-axis.

Figure 44 shows the typical noise performance trend of the ADXL344 over supply voltage. The performance is normalized to the tested and specified supply voltage, VS = 2.6 V . The x-axis offers the best noise performance over supply voltage, increasing by typically less than 25% from nominal at a supply voltage of 1.8 V . The performance of the y- and z-axes is comparable, with both axes increasing by typically less than 35% when operating with a supply voltage of 1.8 V . It should be noted, as shown in Figure 42, that the noise on the z-axis is typically higher than that on the y-axis; therefore, although the noise on the z- and y-axes change roughly the same in percentage over supply voltage, the magnitude of change on the z-axis is greater than the magnitude of change on the y-axis.

Figure 42. Noise vs. Output Data Rate for Normal and Low Power Modes, Full Resolution (256 LSB/ g )

<!-- image -->

Figure 44. Normalized Noise vs. Supply Voltage

<!-- image -->

## OPERATION AT VOLTAGES OTHER THAN 2.6 V

The ADXL344 is tested and specified at a supply voltage of VS = 2.6 V; however, it can be powered with a VS as high as 2.75 V or as low as 1.7 V . Some performance parameters change as the supply voltage changes, including the offset, sensitivity, noise, self-test, and supply current.

Due to minuscule changes in the electrostatic forces as supply voltage is varied, the offset and sensitivity change slightly. When operating at a supply voltage of VS = 1.8 V , the offset of the x- and y-axes is typically 25 m g higher than at VS = 2.6 V operation. The z-axis is typically 20 m g lower when operating at a supply voltage of 1.8 V than when operating at VS = 2.6 V. Sensitivity on the x- and y-axes typically shifts from a nominal 256 LSB/ g (fullresolution or ±2 g , 10-bit operation) at VS = 2.6 V operation to 250 LSB/ g when operating with a supply voltage of 1.8 V . The z-axis sensitivity is unaffected by a change in supply voltage and is the same at VS = 1.8 V operation as it is at VS = 2.6 V operation. Simple linear interpolation can be used to determine typical shifts in offset and sensitivity at other supply voltages.

Changes in noise performance, self-test response, and supply current are discussed elsewhere throughout the data sheet. For more information about noise performance, review the Noise Performance section. The Self-Test section discusses both the operation of self-test over voltage (a square relationship with the supply voltage) and the conversion of the self-test response in g ' s to LSBs. Finally, Figure 21 shows the impact of supply voltage on typical current consumption at a 100 Hz output data rate, with all other output data rates following the same trend.

## OFFSET PERFORMANCE AT LOWEST DATA RATES

The ADXL344 offers several output data rates and bandwidths designed for a wide range of applications. However, at the lowest data rates, described as those data rates below 6.25 Hz, the offset performance over temperature can vary significantly from the remaining data rates. Figure 45, Figure 46, and Figure 47 show the typical offset performance of the ADXL344 over temperature for data rates of 6.25 Hz and lower. All plots are normalized to the offset at 100 Hz output data rate; therefore, a nonzero value corresponds to additional offset shift due to the temperature for that data rate.

When using the lowest data rates, it is recommended that the operating temperature range of the device be limited to provide minimal offset shift across the operating temperature range. Due to variability between parts, it is also recommended that calibration over temperature be performed if any data rates below 6.25 Hz are in use.

<!-- image -->

Figure 45. Typical X-Axis Output vs. Temperature at Lower Data Rates, Normalized to 100 Hz Output Data Rate, VS = 2.6 V

Figure 46. Typical Y-Axis Output vs. Temperature at Lower Data Rates, Normalized to 100 Hz Output Data Rate, VS = 2.6 V

<!-- image -->

Figure 47. Typical Z-Axis Output vs. Temperature at Lower Data Rates, Normalized to 100 Hz Output Data Rate, VS = 2.6 V

<!-- image -->

## AXES OF ACCELERATION SENSITIVITY

Figure 48. Axes of Acceleration Sensitivity (Corresponding Output Increases When Accelerated Along the Sensitive Axis)

<!-- image -->

Figure 49. Output Response vs. Orientation to Gravity

<!-- image -->

## LAYOUT AND DESIGN RECOMMENDATIONS

Figure 50 shows the recommended printed wiring board land pattern. Figure 51 and Table 27 provide details about the recommended soldering profile.

<!-- image -->

Figure 50. Recommended Printed Wiring Board Land Pattern (Dimensions shown in millimeters)

<!-- image -->

10628-045

Figure 51. Recommended Soldering Profile

Table 27. Recommended Soldering Profile 1, 2

|                                                                            | Condition         | Condition         |
|----------------------------------------------------------------------------|-------------------|-------------------|
| Profile Feature                                                            | Sn63/Pb37         | Pb-Free           |
| Average Ramp Rate from LiquidTemperature (T L ) to Peak Temperature (T P ) | 3°C/sec max       | 3°C/sec max       |
| Preheat                                                                    |                   |                   |
| MinimumTemperature (T SMIN )                                               | 100°C             | 150°C             |
| MaximumTemperature (T SMAX )                                               | 150°C             | 200°C             |
| Time from T SMIN to T SMAX (t S )                                          | 60 sec to 120 sec | 60 sec to 180 sec |
| T SMAX to T L Ramp-Up Rate                                                 | 3°C/sec max       | 3°C/sec max       |
| Liquid Temperature (T L )                                                  | 183°C             | 217°C             |
| Time MaintainedAboveT L (t L )                                             | 60 sec to 150 sec | 60 sec to 150 sec |
| Peak Temperature (T P )                                                    | 240 + 0/-5°C      | 260 + 0/-5°C      |
| Time of Actual T P - 5°C (t P )                                            | 10 sec to 30 sec  | 20 sec to 40 sec  |
| Ramp-Down Rate                                                             | 6°C/sec max       | 6°C/sec max       |
| Time 25°C to Peak Temperature                                              | 6 minutes max     | 8 minutes max     |

## OUTLINE DIMENSIONS

Figure 52. 16-Terminal Land Grid Array [LGA]

<!-- image -->

(CC-16-3) Solder Terminations Finish Is Au over Ni Dimensions shown in millimeters

| Model 1                                                                                       | Measurement Range ( g )   | Specified Voltage(V)   | Temperature Range             | Package Description                                                                                                                                                                                                     | Package Option   | Branding Code   |
|-----------------------------------------------------------------------------------------------|---------------------------|------------------------|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|-----------------|
| ADXL344ACCZ-RL ADXL344ACCZ-RL7 EVAL-ADXL344Z EVAL-ADXL344Z-DB EVAL-ADXL344Z-M EVAL-ADXL344Z-S | ±2,±4,±8,±16 ±2,±4,±8,±16 | 2.6 2.6                | -40°C to +85°C -40°C to +85°C | 16-Terminal Land Grid Array [LGA] 16-Terminal Land Grid Array [LGA] Breakout Board Datalogger and Development Board Analog Devices Inertial Sensor Evaluation System, Includes ADXL344 Satellite ADXL344 Satellite Only | CC-16-3 CC-16-3  | Y4S Y4S         |

## ORDERING GUIDE

1  Z = RoHS Compliant Part.

01-13-2010-B

ADXL344

## NOTES

Data Sheet

## Data Sheet

## NOTES

ADXL344

Data Sheet

NOTES

I 2 C refers to a communications protocol originally developed by Philips Semiconductors (now NXP Semiconductors).

Analog Devices offers specific products designated for automotive applications; please consult your local Analog Devices sales representative for details. Standard products sold by Analog Devices are not designed, intended, or approved for use in life support, implantable medical devices, transportation, nuclear, safety, or other equipment where malfunction of the product can reasonably be expected to result in personal injury, death, severe property damage, or severe environmental harm. Buyer uses or sells standard products for use in the above critical applications at Buyer's own risk and Buyer agrees to defend, indemnify, and hold harmless Analog Devices from any and all damages, claims, suits, or expenses resulting from such unintended use.

© 2012 Analog Devices, Inc. All rights reserved. Trademarks and registered  trademarks  are  the  property  of  their  respective  owners. D10628-0-4/12(0)

<!-- image -->