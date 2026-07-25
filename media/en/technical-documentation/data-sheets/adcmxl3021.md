<!-- lastmod 2021-03-30 -->
<!-- image -->

Data Sheet

## FEATURES

Triaxial, digital output MEMS vibration sensing module ±50 g measurement range

Ultralow output noise density, 26 μ g /√Hz (MTC mode) Wide bandwidth: dc to 10 kHz within 3 dB flatness (RTS mode) Embedded fast data sampling: 220 kSPS per axis

6 digital FIR filters, 32 taps (coefficients), default options: High-pass filter cutoff frequencies: 1 kHz, 5 kHz, 10 kHz Low-pass filter cutoff frequencies: 1 kHz, 5 kHz, 10 kHz User configurable digital filter option (32 coefficients)

Spectral analysis through internal FFT

Extended record length: 2048 bins per axis with user configurable bin sizes from 0.42 Hz to 53.7 Hz Manual or timer-based (automatic) triggering Windowing options: rectangular, Hanning, flat top FFT record averaging, configurable up to 255 records Spectral defined alarm monitoring, 6 alarms per axis

Time domain capture with statistical metrics

Extended record length: 4096 samples per axis Mean, standard deviation, peak, crest factor, skewness, and kurtosis

Configurable alarm monitoring Real-time data streaming 220 kSPS on each axis by default User programmable sample rates

Burst mode communication with CRC-16 error checking Storage: 10 data records for each axis On demand self test with status flags Sleep mode with external and timer driven wakeup Digital temperature and power supply measurements SPI-compatible serial interface

Identification registers: factory preprogrammed serial number, device ID, user programmable ID Single-supply operation: 3.0 V to 3.6 V

Operating temperature range: -40°C to +105°C Automatic shutdown at 125°C (junction temperature)

23.7 mm × 27.0 mm × 12.4 mm aluminum package

36 mm flexible, 14-pin connector interface Mass: 13 g

## APPLICATIONS

Vibration analysis CBM systems Machine health Instrumentation and diagnostics Safety shutoff sensing

## [Document Feedback](https://form.analog.com/Form_Pages/feedback/documentfeedback.aspx?doc=ADcmXL3021.pdf&product=ADcmXL3021&rev=A)

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable.  However ,  no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## Wide Bandwidth, Low Noise, Triaxial Vibration Sensor

[ADcmXL3021](https://www.analog.com/ADcmXL3021?doc=ADcmXL3021.pdf)

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## GENERAL DESCRIPTION

The ADcmXL3021 is a complete vibration sensing system that combines high performance vibration sensing (using microelectromechanical systems (MEMS) accelerometers) with a variety of signal processing functions to simplify the development of smart sensor nodes in condition-based monitoring (CBM) systems. The typical ultralow noise density (26 µ g /√Hz) in the MEMS accelerometers supports excellent resolution. The wide bandwidth (dc to 10 kHz within 3 dB flatness) enables tracking of key vibration signatures on many machine platforms.

The signal processing includes high speed data sampling (220 kSPS), 4096 time sample record lengths, filtering, windowing, fast Fourier transform (FFT), user configurable spectral or time statistic alarms, and error flags. The serial peripheral interface (SPI) provides access to a register structure that contains the vibration data and a wide range of user configurable functions.

The ADcmXL3021 is available in a 23.7 mm × 27.0 mm × 12.4 mm aluminum package with four mounting flanges to support installation with standard machine screws. This package provides consistent mechanical coupling to the core sensors over a broad frequency range. The electrical interface is through a 14-pin connector on a 36 mm flexible cable, which enables a wide range of location and orientation options for system mating connectors.

The ADcmXL3021 requires only a single, 3.3 V power supply and supports an operating temperature range of -40°C to +105°C.

## [ADcmXL3021](https://www.analog.com/ADcmXL3021?doc=ADcmXL3021.pdf)

## TABLE OF CONTENTS

| Features ..............................................................................................   | 1                                                                    |
|-----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| Applications.......................................................................................       | 1                                                                    |
| Functional Block Diagram ..............................................................                   | 1                                                                    |
| General Description.........................................................................              | 1                                                                    |
| Revision History ...............................................................................          | 3                                                                    |
| Specifications.....................................................................................       | 4                                                                    |
| Timing Specifications                                                                                     | .................................................................. 5 |
| Absolute Maximum Ratings............................................................                      | 7                                                                    |
| Thermal Resistance......................................................................                  | 7                                                                    |
| ESD Caution..................................................................................             | 7                                                                    |
| Pin Configuration and Function Descriptions.............................                                  | 8                                                                    |
| Typical Performance Characteristics                                                                       | ............................................. 9                      |
| Theory of Operation ......................................................................                | 14                                                                   |
| Core Sensors................................................................................              | 14                                                                   |
| Signal Processsing ......................................................................                 | 14                                                                   |
| Modes of Operation...................................................................                     | 15                                                                   |
| Data Recording Options............................................................                        | 16                                                                   |
| User Interface..............................................................................              | 19                                                                   |
| Basic Operation...............................................................................            | 22                                                                   |
| Device Configuration ................................................................                     | 22                                                                   |
| Dual Memory Structure ............................................................                        | 22                                                                   |
| Power-Up Sequence ...................................................................                     | 22                                                                   |
| Trigger..........................................................................................         | 22                                                                   |
| Sample Rate.................................................................................              | 23                                                                   |
| Datapath Processing...................................................................                    | 23                                                                   |
| Spectral Alarms...........................................................................                | 25                                                                   |
| Mechanical Mounting Recommendations..............................                                         | 25                                                                   |
| User Register Memory Map..........................................................                        | 26                                                                   |
| User Register Details ......................................................................              | 32                                                                   |
| PAGE_ID (Page Number).........................................................                            | 32                                                                   |
| TEMP_OUT (Internal Temperature)......................................                                     | 32                                                                   |
| SUPPLY_OUT (Power Supply Voltage) ..................................                                      | 32                                                                   |
| FFT_AVG1, Spectral Averaging ...............................................                              | 32                                                                   |
| FFT_AVG2, Spectral Averaging ...............................................                              | 33                                                                   |
| BUF_PNTR, Buffer Pointer ......................................................                           | 33                                                                   |
| REC_PNTR, Record Pointer.....................................................                             | 34                                                                   |
| X_BUF, Buffer Access Register, X-Axis...................................                                  | 34                                                                   |
| Y_BUF, Buffer Access Register, Y-Axis...................................                                  | 35                                                                   |

| Z_BUF/RSS_BUF, Buffer Access Register, Z-Axis.....................                                                                      | 35                                                       |
|-----------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| X_ANULL, X-AXIS Bias Calibration Register.......................                                                                        | 36                                                       |
| Y_ANULL, Y-AXIS Bias Calibration Register.......................                                                                        | 36                                                       |
| Z_ANULL, Z-AXIS Bias Calibration Register .......................                                                                       | 36                                                       |
| REC_CTRL, Recording Control                                                                                                             | .............................................. 36        |
| RT_CTRL, Real TIme Streaming Control                                                                                                    | .............................. 38                        |
| REC_PRD, Record Period.........................................................                                                         | 38                                                       |
| ALM_F_LOW, Alarm Frequency Band                                                                                                         | .................................. 38                    |
| ALM_F_HIGH, Alarm Frequency Band................................                                                                        | 38                                                       |
| ALM_X_MAG1, Alarm Level 1 X-Axis..................................                                                                      | 39                                                       |
| ALM_Y_MAG1, Alarm Level 1 Y-Axis..................................                                                                      | 39                                                       |
| ALM_Z_MAG1, Alarm Level 1 Z-Axis                                                                                                        | .................................. 39                    |
| ALM_X_MAG2, Alarm Level 2 X-Axis..................................                                                                      | 39                                                       |
| ALM_Y_MAG2, Alarm Level 2 Y-Axis..................................                                                                      | 40                                                       |
| ALM_Z_MAG2, Alarm Level 2 Z-Axis                                                                                                        | .................................. 40                    |
| ALM_PNTR, Alarm Pointer.....................................................                                                            | 40                                                       |
| ALM_S_MAG Alarm Level ......................................................                                                            | 40                                                       |
| ALM_CTRL, Alarm Conrol                                                                                                                  | ..................................................... 40 |
| FILT_CTRL, Filter Control.......................................................                                                        | 41                                                       |
| AVG_CNT, Decimation Control..............................................                                                               | 41                                                       |
| DIAG_STAT, Status, and Error Flags.......................................                                                               | 42                                                       |
| GLOB_CMD, Global Commands............................................                                                                   | 42                                                       |
| ALM_X_STAT, Alarm Status X-Axis                                                                                                         | ...................................... 42                |
| ALM_Y_STAT, Alarm Status Y-Axis.......................................                                                                  | 43                                                       |
| ALM_Z_STAT, Alarm Status Z-axis........................................                                                                 | 43                                                       |
| ALM_X_PEAK, Alarm Peak Level X-Axis.............................                                                                        | 43                                                       |
| ALM_Y_PEAK, Alarm Peak LeveL Y-AXIS..........................                                                                           | 43                                                       |
| ALM_Z_PEAK, Alarm Peak Level Z-AXIS............................                                                                         | 43                                                       |
| TIME_STAMP_L and TIME_STAMP_H, Data Record Timestamp................................................................................... | 44 44                                                    |
| DAY_REV, Day and Revision...................................................                                                            |                                                          |
| YEAR_MON, Year and Month.................................................                                                               | 44                                                       |
| PROD_ID, Product Identification ...........................................                                                             | 44                                                       |
| SERIAL_NUM, Serial Number................................................                                                               | 44                                                       |
| USER_SCRATCH......................................................................                                                      | 44                                                       |
| REC_FLASH_CNT, Record Flash Endurance                                                                                                   | ....................... 44                               |
| MISC_CTRL, Miscellaneous Control                                                                                                        | ..................................... 45                 |
| REC_INFO1, Record Information...........................................                                                                | 45                                                       |

## Data Sheet

| Record Information, REC_INFO2                                                                                                                                                                             | ...........................................45                                 |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| REC_CNTR, Record Counter...................................................45                                                                                                                             |                                                                               |
| ALM_X_FREQ, Severe Alarm Frequency...............................45                                                                                                                                       |                                                                               |
| ALM_Y_FREQ, Severe Alarm Frequency...............................45                                                                                                                                       |                                                                               |
| ALM_Z_FREQ, Severe Alarm Frequency                                                                                                                                                                        | ...............................46                                             |
| STAT_PNTR, Statistic Result Pointer                                                                                                                                                                       | ......................................46                                      |
| X_STAT, Statistic Result X-Axis................................................46                                                                                                                         |                                                                               |
| Y_STAT, Statistic Result Y-Axis................................................47                                                                                                                         |                                                                               |
| Z_STAT, Statistic Result Z-Axis ................................................47                                                                                                                        |                                                                               |
| REVISION HISTORY                                                                                                                                                                                          |                                                                               |
| 3/2021-Rev. 0 to Rev.A                                                                                                                                                                                    |                                                                               |
| Changes to Features Section ............................................................1                                                                                                                 |                                                                               |
| Changed Error Parameter to Error Over Temperature Parameter, Table 1 .............................................................................3                                                       |                                                                               |
| Changes to Table 2                                                                                                                                                                                        | ............................................................................5 |
| Changes to Figure 5 Caption ...........................................................6                                                                                                                  |                                                                               |
| Deleted Figure 19; Renumbered Sequentially                                                                                                                                                                | .............................11                                               |
| Changes to Figure 19 ......................................................................11                                                                                                             |                                                                               |
| Changes to MTCData Format Section........................................17                                                                                                                               |                                                                               |
| Changes to Table 9 and RTS Data Format Section.....................18                                                                                                                                     |                                                                               |
| Delete Table 10; Renumbered Sequentially                                                                                                                                                                  | .................................18                                           |
| Changes to Table 20                                                                                                                                                                                       | ........................................................................26    |
| Changes to Table 21                                                                                                                                                                                       | ........................................................................32    |
| Changes to REC_PNTR, Record Pointer Section and Table                                                                                                                                                     | 40.....34                                                                     |
| Changes to X_BUF, Buffer Access Register, X-Axis Section, Table 44, and Table 46.....................................................................35                                                   |                                                                               |
| Deleted Table 44 ..............................................................................35                                                                                                         |                                                                               |
| Changes to Real-Time Burst Mode Timeout Enabled Section Added RT_CTRL, Real-Time Streaming Control Section, Table 56, and Table 57.....................................................................38 | .37                                                                           |

## [ADcmXL3021](https://www.analog.com/ADcmXL3021?doc=ADcmXL3021.pdf)

FUND\_FREQ, Fundamental Frequency .................................  47

FLASH\_CNT\_l, Flash Memory Endurance ............................  47

FLASH\_CNT\_U, Flash Memory Endurance ..........................  48

FIR Filter Registers .....................................................................  48

Applications Information  ...............................................................  49

Mechanical Interface ..................................................................  49

Outline Dimensions  ........................................................................  50

Ordering Guide ...........................................................................  50

Changes to Table 77 and Table 79 .................................................  40

Deleted DIO\_CTRL, Digital Input/Output Line Control

Section, Table 83, and Table 84 .....................................................  40

Changes to Table 84 ........................................................................  41

Changes to Table 88, Table 90, and Table 92 ...............................  42

Changes to Table 94, Table 96, and Table 102 .............................  43

Changes to Table 104, Table 106, Table 108 to Table 112,

Table 114, and Table 118 ................................................................  44

Changed DATE\_REV, Day and Revision Section to DAY\_REV,

Day and Revision Section ..............................................................  44

Added USER\_SCRATCH Section, Table 116, and Table 117 ...  44

Changes to Table 120, Table 122, Table 124, Table 126,

Table 128, and Table 130 ................................................................  45

Changes to Table 132, Table 134, and Table 136 .........................  46

Changes to Table 141, Table 143, and Table 147 .........................  47

Changes to Table 148 and FIR Filter Design Guidelines ...........  48

3/2019-Revision 0: Initial Version

## SPECIFICATIONS

TA = 25°C, VDD = 3.3 V, unless otherwise noted.

Table 1.

| Parameter                      | Test Conditions/Comments                         |    Min | Typ    | Max   | Unit     |
|--------------------------------|--------------------------------------------------|--------|--------|-------|----------|
| ACCELEROMETERS                 |                                                  |        |        |       |          |
| Measurement Range 1            |                                                  |        | ±50    |       | g        |
| Sensitivity                    |                                                  |        |        |       |          |
| FFT                            |                                                  |        | 0.9535 |       | m g /LSB |
| Time Domain                    |                                                  |        | 1.907  |       | m g /LSB |
| Error Over Temperature         |                                                  |        | ±5     |       | %        |
| Nonlinearity                   | Best fit, straight line, full scale (FS) = ±50 g |        | ±0.2   | ±1.25 | %        |
| Cross Axis Sensitivity         |                                                  |        | 2      |       | %        |
| Alignment Error                | With respect to package                          |        | 2      |       | Degrees  |
| Offset Error over Temperature  | T A = -40°C to +105°C                            |        | ±5     |       | g        |
| Offset Temperature Coefficient | T A = -40°C to +105°C                            |        | 34     |       | m g /°C  |
| Output Noise                   | Real-time streaming (RTS) mode                   |        | 3.2    |       | m g rms  |
| Output Noise Density           | 100Hzto10kHz,allaxes,AVG_CNT=0,MTCmode           |        | 26     |       | µ g /√Hz |
| Output Noise Density           | 1 Hz to 10 kHz, all axes, no filtering, RTS mode |        | 32     |       | µ g /√Hz |
| 3 dB Bandwidth                 | All axes                                         | 10,000 |        |       | Hz       |
| Sensor Resonant Frequency      |                                                  |        | 21     |       | kHz      |
| CONVERSION RATE                |                                                  |        |        | 220   | kSPS     |
| Clock Accuracy                 |                                                  |        | 3      |       | %        |
| FUNCTIONALTIMING               |                                                  |        |        |       |          |
| Factory Reset Time Recovery    |                                                  |        | 130    |       | ms       |
| Start UpTime                   | Time from supply voltage reaching 3.0V from      |        | 220    |       | ms       |
| Self Test Time                 |                                                  |        | 93     |       | ms       |
| LOGIC INPUTS                   |                                                  |        |        |       |          |
| Input High Voltage,V INH       |                                                  |    2.5 |        |       | V        |
| Input LowVoltage,V INL         |                                                  |        |        | 0.45  | V        |
| Logic 1 Input Current, I INH   | V IH = 3.3V                                      |        | 0.01   | 0.2   | µA       |
| Logic 0 Input Current, I INL   | V IL = 0V                                        |        |        |       |          |
| All Except RST                 |                                                  |        |        | 100   | µA       |
| RST                            |                                                  |        | 1      |       | mA       |
| Input Capacitance, C IN        |                                                  |        | 10     |       | pF       |
| DIGITAL OUTPUTS                |                                                  |        |        |       |          |
| Output Voltage                 |                                                  |        |        |       |          |
| High,V OH                      | I OH =-1mA                                       |    1.4 |        |       | V        |
| Low,V OL                       | I OL =1mA                                        |        |        | 0.4   | V        |
| Output Current                 |                                                  |        |        |       |          |
| High, I OH                     | I OH =-1mA                                       |        |        | 2     | mA       |
| Low, I OL                      | I OL =1mA                                        |        |        | 2     | mA       |
| FLASH MEMORY                   |                                                  |        |        |       |          |
| Endurance 2                    |                                                  | 10,000 |        |       | Cycles   |
| Data Retention 3               | T J = 85°C, see Figure 52                        |        | 10     |       | Years    |
| THERMALSHUTDOWN                |                                                  |        |        |       |          |
| Thermal ShutdownThreshold      | T J rising                                       |        | 125    |       | °C       |
| Thermal Shutdown Hysteresis    |                                                  |        | 15     |       | °C       |

## Data Sheet

| Parameter                                | Test Conditions/Comments                                                                                   |   Min |   Typ |   Max | Unit   |
|------------------------------------------|------------------------------------------------------------------------------------------------------------|-------|-------|-------|--------|
| OUT_VDDMMONITOR OUTPUT Output Resistance | Logic output; logic high indicates good condition Logic low when internal temperature exceed allowed range |    90 |   100 |   110 | kΩ     |
| POWER SUPPLYVOLTAGE                      | Operating voltage range,VDD                                                                                |   3.0 |   3.3 |   3.6 | V      |
| Power Supply Current                     | Operating mode,VDD = 3.0V                                                                                  |       |  30.2 |       | mA     |
|                                          | Operating mode,VDD = 3.3V                                                                                  |       |  30.6 |       | mA     |
|                                          | Operating mode,VDD = 3.6V                                                                                  |       |  31.6 |       | mA     |
|                                          | Sleep mode,VDD = 3.0V                                                                                      |       |     1 |       | mA     |
|                                          | Sleep mode,VDD = 3.3V                                                                                      |       |   1.5 |       | mA     |
|                                          | Sleep mode,VDD = 3.6V                                                                                      |       |   2.3 |       | mA     |

## TIMING SPECIFICATIONS

TC = 25°C, VDD = 3.3 V, unless otherwise noted.

## Table 2.

|            |                                                                                               | NormalMode   | NormalMode   | NormalMode   | RTSMode   | RTSMode   | RTSMode   |      |
|------------|-----------------------------------------------------------------------------------------------|--------------|--------------|--------------|-----------|-----------|-----------|------|
| Parameter  | Description                                                                                   | Min 1        | Typ          | Max 1        | Min       | Typ       | Max 1     | Unit |
| f SCLK     | SCLK frequency                                                                                | 0.01         |              | 14           | 12.5 2    |           | 14        | MHz  |
| t STALL    | Stall period between data bytes                                                               | 16           |              |              |           | N/A 3     |           | µs   |
| t CLS      | SCLK low period                                                                               | 35.7         |              |              | 35.7      |           |           | ns   |
| t CHS      | SCLK high period                                                                              | 35.7         |              |              | 35.7      |           |           | ns   |
| t CS       | CS to SCLK edge                                                                               | 35.7         |              |              | 35.7      |           |           | ns   |
| t DAV      | DOUT valid after SCLK edge                                                                    |              |              | 20           |           |           | 20        | ns   |
| t DSU      | DIN setup time before SCLKrisingedge                                                          | 6            |              |              | 6         |           |           | ns   |
| t DHD      | DIN hold time after SCLK rising edge                                                          | 8            |              |              | 8         |           |           | ns   |
| t DSOE     | CS assertion to DOUT active                                                                   |              |              | 20           | 0         |           | 20        | ns   |
| t HD       | SCLK edge to DOUT invalid                                                                     |              |              | 20           |           |           | 20        | ns   |
| t SFS      | Last SCLK edge to CS deassertion                                                              | 35.7         |              |              | 35.7      |           |           | ns   |
| t RTS_BUSY | RTS mode only, data out valid burst readout period end before BUSY rising edge for next burst |              | N/A          |              | 5         |           |           | µs   |

## Timing Diagrams

Figure 2. SPI Timing and Sequence

<!-- image -->

## [ADcmXL3021](https://www.analog.com/ADcmXL3021?doc=ADcmXL3021.pdf)

<!-- image -->

Figure 3. Stall Time (Does Not Apply to RTS Mode)

Figure 4. RTS Mode Timing Diagram (Assumes REC\_CTRL, Bits[1:0] = 0b11)

<!-- image -->

Figure 5. RTS Read Function Sequence Diagram, First Five Segments

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

| Table 3.                     |                 |
|------------------------------|-----------------|
| Parameter                    | Rating          |
| Acceleration                 |                 |
| Any Axis, Unpowered          | 2000 g          |
| Any Axis, Powered            | 2000 g          |
| VDD toGND                    | -0.3V to +3.6V  |
| Digital Input Voltage toGND  | -0.3V to +3.6V  |
| Digital Output Voltage toGND | -0.3V to +3.6V  |
| Temperature, T A             |                 |
| Operating Range              | -40°C to +105°C |
| Storage Range                | -65°C to +150°C |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Pay careful attention to PCB thermal design.

θJA is the natural convection junction to ambient thermal resistance measured in a one cubic foot sealed enclosure.

θJC is the junction to case thermal resistance.

The ADcmXL3021 is a multichip module, which includes many active components. The values in Table 4 identify the thermal response of the hottest component inside of the ADcmXL3021,

with respect to the overall power dissipation of the module. temperature of the hottest junction, based on either ambient or

This approach enables a simple method for predicting the case temperature.

For example, when TA = 70°C, under normal operation mode with a typical 34 mA current and 3.3 V supply voltage, the hottest junction temperature in the ADcmXL3021 is 77.3°C.

TJ = θJA × VDD × IDD + 70°C

TJ = 65.1°C/W × 3.3 V × 0.034 A + 70°C

TJ ≈ 77.3°C

where IDD is the current consumption of the device.

## Table 4. Thermal Resistance

| PackageType   | θ JA     | θ JC     |
|---------------|----------|----------|
| ML-14-7 1     | 65.1°C/W | 33.2°C/W |

1 Thermal impedance simulated values come from a case with four machine screws at a size of M2.5 × 0.4 mm (torque = 25 inch-pounds). Secure the ADcmXL3021 to the PCB.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Figure 6. Pin Configuration

Table 5. Pin Function Descriptions

|   Pin No. | Mnemonic   | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|-----------|------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|         1 | GND        | Supply | Ground.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|         2 | ALM1       | Output | Digital Output Only, Alarm 1 Output. This pin is configured by the ALM_CTRL register and is not used in real-time streaming mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|         3 | SYNC/RTS   | Input  | Sync Function (SYNC)/RTS Burst Start/Stop (RTS). This pin is an digital input only, and is edge (not level) sensitive. This pin must be enabled in the MISC_CTRL register (Bit 12) before being used as an external trigger.The SYNC pulse width must be at least 50 ns. In MTC and MFFT modes, the SYNC pin acts as a manual trigger, this pin initiates a record capture event when a low to high transition is detected, equivalent to SPI Command 0x0800 to the GLOB_CMD register. In RTS and AFFT mode, when the logic level on this pin is high, conversion is active.When the logic level on this pin is low, conversion is stopped after the current data record is completed.                                                                     |
|         4 | ALM2       | Output | Digital Output Only, Alarm 2 Output. This pin is configured by the ALM_CTRL register and is not used in real-time streaming mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|         5 | BUSY       | Output | Busy or Data Ready Indicator, Digital Output Only. In RTS mode,this pin is a logical output to indicate that data is ready and available for download. The logical state resets to logic low when data is loading to the output buffers.The pin is set high when data is ready for download. In other capture modes, the busy indicator identifies the state of the module processor and if it is available for external commands.When a command is executing, SPI access is not allowed and the device is in a busy state. After this process completes, whether acommandorarecord,theSPI is released and the BUSYpinis set to logic high state. Note that there is one exception to SPI port access while in the busy state: a capture can be terminated |
|         6 | OUT_VDDM   | Output | Power Supply Monitor (Digital Output). This pin is logic low when temperature exceeds threshold and automatic shutdown occurs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|         7 | RST        | Input  | Hardware Reset, Digital Input Only, Active Low. This pin enters the device in a known state by resetting the microcontroller. This pin also loads the user configurable parameters from flash memory.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|         8 | VDD        | Supply | Power Supply.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|         9 | GND        | Supply | Ground.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|        10 | GND        | Supply | Ground.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|        11 | DIN        | Input  | SPI, Data Input Line.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|        12 | DOUT       | Output | SPI, Data Output. DOUT is an output when CS is low.When CS is high, DOUT is in a three-state, high impedance mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|        13 | SCLK       | Input  | SPI, Serial Clock.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|        14 | CS         | Input  | SPI, Chip Select.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## TYPICAL PERFORMANCE CHARACTERISTICS

16806-200

<!-- image -->

Figure 7. X-Axis Noise Density, Wideband, MTC, AVG\_CNT = 0

<!-- image -->

Figure 8. Y-Axis Noise Density, Wideband, MTC, AVG\_CNT = 0

<!-- image -->

Figure 9. Z-Axis Noise Density, Wideband, MTC, AVG\_CNT = 0

<!-- image -->

Figure 10. X-Axis Sine Sweep Response, RTS Mode

Figure 11. Y-Axis Sine Sweep Response, RTS Mode

<!-- image -->

Figure 12. Z-Axis Sine Sweep Response, RTS Mode

<!-- image -->

## [ADcmXL3021](https://www.analog.com/ADcmXL3021?doc=ADcmXL3021.pdf)

Figure 13. X-Axis Noise Density, Wideband, RTS Mode

<!-- image -->

16806-101

<!-- image -->

Figure 14. Y-Axis Noise Density, Wideband, RTS Mode

<!-- image -->

Figure 15. Z-Axis Noise Density, Wideband, RTS Mode

<!-- image -->

Figure 16. X-Axis Noise Density, Low Frequency, RTS Mode

Figure 17. Y-Axis Noise Density, Low Frequency, RTS Mode

<!-- image -->

Figure 18. Z-Axis Noise Density, Low Frequency, RTS Mode

<!-- image -->

<!-- image -->

Figure 19. Sensitivity Error vs. Ambient Temperature, Normalized at 25°C

<!-- image -->

Figure 20. Offset vs. Temperature

<!-- image -->

Figure 21. Operating Mode Current Distribution at 3.0 V Supply

Figure 22. Operating Mode Current Distribution at 3.3 V Supply

<!-- image -->

Figure 23. Operating Mode Current Distribution at 3.6 V Supply

<!-- image -->

16806-110

Figure 24. Sleep Mode Current Distribution at 3.0 V Supply

<!-- image -->

<!-- image -->

Figure 25. Sleep Mode Current Distribution at 3.3 V Supply

<!-- image -->

Figure 26. Sleep Mode Current Distribution at 3.6 V Supply

<!-- image -->

Figure 27. Digital Filter Frequency Response of the 1 kHz Low-Pass Filter

<!-- image -->

Figure 28. Digital Filter Frequency Response of the 5 kHz Low-Pass Filter

Figure 29. Digital Filter Frequency Response of the 10 kHz Low-Pass Filter

<!-- image -->

Figure 30. Digital Filter Frequency Response of the 1 kHz High-Pass Filter

<!-- image -->

Figure 31. Digital Filter Frequency Response of the 5 kHz High-Pass Filter

<!-- image -->

Figure 32. Digital Filter Frequency Response of the 10 kHz High-Pass Filter

<!-- image -->

## THEORY OF OPERATION

The ADcmXL3021 is a triaxial, vibration monitoring subsystem that includes wide bandwidth, low noise MEMS accelerometers, an analog-to-digital converter (ADC), high performance signal processing, data buffers, record storage, and a user interface that easily interfaces with most embedded processors. See Figure 33 for a basic signal chain. The subsystem is housed in an aluminum module that is mounted using four screws (accepts screw size M2.5) and is designed to be mechanically stable beyond 40 kHz. The combination of this mechanical mounting and oversampling ensures that aliasing artifacts are minimized.

Figure 33. Basic Signal Chain

<!-- image -->

The ADcmXL3021 has a high operating input range of ±50 g and is suitable for vibration measurements in high bandwidth applications, such as vibration analysis systems that monitor and diagnose machine or system health. User configurable internal processing supports both time domain and frequency domain calculations.

The low noise and high frequency bandwidth enable the measurement of both repetitive vibration patterns and single shock events caused by small moving parts, such as internal bearings. The high g range provides the dynamic range to be used in high vibration environments, such as heating, ventilation, and air conditioning systems (HVAC), and heavy machine equipment. To achieve best performance, be aware of system noise, mounting, and signal conditioning for the particular application.

Proper mounting is required to ensure full mechanical transfer of vibration to accurately measure the desired vibration. A common technique for high frequency mechanical coupling is to use a combination of a threaded screw mount system and adhesive where possible. For lower frequencies (below the full capable bandwidth of the sensor), it is possible to use magnetic or adhesive mounting. Proper mounting techniques ensure accurate and repeatable results that are not influenced by measurement system mechanical resonances and/or damping at the desired frequencies, and represents an efficient and proper mechanical transfer to the system being monitored.

## CORE SENSORS

The ADcmXL3021 uses three ADXL1002 MEMS accelerometers, with sensing axes configured to be mutually orthogonal to each other. Figure 34 is a simple mechanical diagram that shows how MEMS accelerometers translate linear acceleration to representative output signals.

The moving component of the sensor is a polysilicon surfacemicromachined structure built on top of a silicon wafer. Polysilicon springs suspend the structure over the surface of the wafer and provide a resistance against acceleration forces.

Deflection of the structure is measured using differential capacitors that consist of independent fixed plates and plates attached to the moving mass. Acceleration deflects the structure and unbalances the differential capacitor, resulting in a sensor output with an amplitude proportional to acceleration. Phase sensitive demodulation determines the magnitude and polarity of the acceleration.

Figure 34. MEMS Sensor Diagram

<!-- image -->

## SIGNAL PROCESSSING

The signal chain of the ADcmXL3021 includes wideband accelerometers to monitor three axes, a low-pass analog filter with a 13.5 kHz cutoff frequency, an oversampling ADC (sampling at 220 kSPS per axis), a microcontroller, and discrete components to provide a flexible vibration monitor subsystem that supports multiple processed output modes. There are four modes of operation. One mode of operation is the full rate real-time streaming (RTS) output. The three other modes include system level signal processing: manual FFT mode (MFFT), automatic FFT mode (AFFT), and manual time capture (MTC) mode

MTC mode supports 4096 consecutive time domain samples to which averaging, finite impulse response (FIR), and windowing signal processing can be enabled, along with the calculation of statistics, alarm configuring, and monitoring. In MTC mode, the raw time domain data is made available in register buffers for all three axes for the user to access and externally process.

In both FFT modes, manual fast Fourier transform (MFFT) and AFFT modes support the process of calculating an FFT of the current time domain record.

Finally, a continuous RTS mode bypasses all device digital computations and alarm monitoring, outputting real-time data over the SPI in burst data output format (see Figure 5).

## MODES OF OPERATION

The ADcmXL3021 supports four different modes of operation: RTS mode, MTC mode, MFFT mode, and AFFT mode. Users can select the mode of operation by writing the corresponding code to the REC\_CTRL register, Bits[1:0] (see Table 55).

In three of these modes (MFFT, AFFT, and MTC), the ADcmXL3021 captures, analyzes, and stores vibration data in discrete events, known as capture events, and generates a record. Each capture event concludes with storing the data as configured in REC\_CTRL register in the user data buffers, which are accessible through the BUF\_PNTR register (see Table 36).

The two different FFT modes that produce vibration data in spectral terms are MFFT and AFFT. The difference between these two modes is the manner in which data capture and analysis starts. In MFFT mode, users trigger a capture event by an external digital signal or through a software command using the GLOB\_CMD register, Bit 11 (see Table 91). In AFFT mode, an internal timer automatically triggers additional spectral record captures without the need for an external trigger. Up to four different sample rate profiles can be selected for the modes to cycle through. The REC\_PRD register (see Table 59) contains the user configuration settings for the time that elapses between each capture event when operating in the AFFT mode.

## Manual Time Capture (MTC) Mode

When operating in MTC mode, the ADcmXL3021 captures 4096 consecutive time domain samples. An offset null signal can be calculated and applied to the data using the command register option. Signal processing functions such as low-pass and high-pass FIR filtering and averaging can be applied. After digital processing is complete, the 4096 time domain sample data (per axis) record of vibration data is stored into the user data buffers, using the signal flow diagram shown in Figure 36.

Capturing is triggered by either a SPI write to the GLOB\_CMD register or by an external trigger. The ADcmXL3021 toggles the output BUSY when the data record is stored and the alarms are checked.

The decimation filter reduces the effective rate of stored data capture in the time record by averaging the sequential samples together and filtering out of band signal and noise. This filter has eight decimation rate settings (1, 2, 4, 8, 16, 32, 64, and 128) and can support up to four different settings. These time data records are time continuous captures with decimation filter acting on real time data from the ADC to produce 4096 samples (to produce the 4096 time domain samples requires 2 N samples to be processed internally, where N is the average count value, AVG\_CNT). When more than one user configured sample record setting is in use, the ADcmXL3021 applies a single filter for each data record and cycles through all desired options, one for each data capture. Time statistic alarms can be configured for three levels of reporting: normal, critical, and warning. A record mode option allows all enabled time domain statistics to be stored, depending on user preference, and is configured by setting the record mode in Register REC\_CTRL, Bits[3:2] (Register 0x1A, 0x1B) = 0b10.

The output data can be configured to provide the root sum of squares (RSS) of all three axes or convert accelerometer data to equivalent velocity.

Figure 35. Signal Processing Diagram for Manual Time Capture (MTC) Mode

<!-- image -->

Figure 36. MTC Signal Flow Diagram

<!-- image -->

## [ADcmXL3021](https://www.analog.com/ADcmXL3021?doc=ADcmXL3021.pdf)

## MFFT Mode

MFFT mode can be used to manually trigger a capture to create a single FFT record with 2048 bins and allows various configuration options. The ADcmXL3021 has configurable high-pass and low-pass filters, decimation filtering, FFT averaging and spectral alarms. The ADcmXL3021 also has options to calculate velocity, apply windowing, and apply offset compensations. MFFT mode is configured by setting the record mode in Register REC\_CTRL, Bits[1:0] (Register 0x1A, 0x1B) = 0b00.

Processing steps collect 4096 consecutive time domain samples and filters the data similar to the MTC case. Additional windowing and FFT averaging can be enabled and configured using the 4096 sample burst captures. The ADcmXL3021 provides three different mathematical filtering options to processes the time record data, prior to performing an FFT, the filter options are rectangular, Hanning, or flat. See the REC\_CTRL register in Table 55 for more information on selecting the window option.

When a capture event is triggered by the user, the event follows the process flow diagram shown in Figure 37. The FIR filter has 32 coefficients and processes at the full internal ADC sample rate of 220 kSPS per axis. Users can select from one of six FIR filter bank options. Three of these filter banks have preset coefficients that provide low-pass responses to support half power bandwidths of 1 kHz, 5 kHz, and 10 kHz, respectively. The other three filter banks have preset coefficients that provide high-pass responses to support half power bandwidths of 1 kHz, 5 kHz, and 10 kHz filter. All six filter banks can be overwritten through user programming and stored to flash memory.

After the FIR filter is applied to the time domain data, if enabled, the data is decimated according to the AVG\_CNT setting until a full 4096 time sample capture fills the data buffer. This decimation produces a time record that is converted to a spectral record and averaged, depending on the FFT\_AVG1 or FFT\_ AVG2 setting, as appropriate (see Figure 49 for the FFT capture datapath and appropriate registers).

Figure 37. Signal Processing Diagram for FFT Modes

<!-- image -->

## AFFT Mode

AFFT mode is configured by setting the record mode in Register REC\_CTRL, Bits[1:0] (Register 0x1A, 0x1B) = 0b01. AFFT mode supports the same functionality as MFFT mode, except AFFT mode automatically advances and independently controls new capture events. New capture events are triggered periodically and are configured in the register map using REC\_PRD.

To save power for long off time durations, the device can be configured to sleep between auto captures using Bit 7 in the REC\_CTRL register.

## RTS Mode

RTS mode is configured by setting the record mode in Register REC\_CTRL, Bits[1:0] (Register 0x1A, 0x1B) = 0b11.

When operating in the RTS mode, the ADcmXL3021 samples each axis at a rate of 220 kSPS and makes this data available through a burst pattern via the SPI.

## DATA RECORDING OPTIONS

The ADcmXL3021 creates data records in FFT and MTC modes and supports three methods of data storage for each data record: immediate only mode, alarm triggered mode, and all mode. In MTC mode, the time domain statistics are stored and are not the time records.

When immediate only mode is selected, only the most recent capture data record is retained and accessible.

In alarm triggered mode, only data that triggered an alarm is stored. When an alarm event is triggered, the ADcmXL3021 stores the header registers and the FFT data to flash memory. Alarm triggered mode is helpful for continuous operation while minimally impacting the limited endurance of the flash memory. In the case of any alarm event, even on a single axis, all available axes are saved.

In all mode, each data record is stored. The data stored includes FFT header information and FFT data for all available axes. Up to 10 FFT records can be stored and retrieved.

The ADcmXL3021 samples, processes, and stores vibration data from three axes (x, y, and z) to the FFT or MTC data. In MTC mode, the record for each axis contains 4096 samples. In MFFT mode and AFFT mode, each record contains the 2048 bin FFT result for each accelerometer axis. Table 6 describes the registers that provide access to processed sensor data.

Table 6. Output Data Registers

| Register     | Address   | Description                      |
|--------------|-----------|----------------------------------|
| TEMP_OUT     | 0x02      | Internal temperature measurement |
| SUPPLY_OUT   | 0x04      | Internalpower supply measurement |
| BUF_PNTR     | 0x0A      | Data buffer index pointer        |
| REC_PNTR     | 0x0C      | FFT record index pointer         |
| X_BUF        | 0x0E      | X-axis accelerometer buffer      |
| Y_BUF        | 0x10      | Y-axis accelerometer buffer      |
| Z_BUF        | 0x12      | Z-axis accelerometer buffer      |
| GLOB_CMD     | 0x3E      | Global commandregister           |
| TIME_STAMP_L | 0x4C      | Timestamp, lower word            |
| TIME_STAMP_H | 0x4E      | Timestamp, upper word            |
| REC_INFO1    | 0x66      | FFT record header information    |
| REC_INFO2    | 0x68      | FFT record header information    |

## Reading Data from the Data Buffer

After completing a spectral record and updating each data buffer, the ADcmXL3021 loads the first data sample from each data buffer to the x\_BUF registers (see Table 10, Table 11, and Table 12) and sets the buffer index pointer in the BUF\_PNTR register (see Table 7) to 0x0000. The index pointer determines which data samples load to the x\_BUF registers. For example, writing 0x009F to the BUF\_PNTR register (DIN = 0x8A9F, DIN = 0x8B00) causes the 160th sample in each data buffer location to load to the x\_BUF registers. The index pointer automatically increments with each x\_BUF read command, which causes the next set of capture data to load to each capture buffer register. This enables an efficient method for reading all 4096 time samples or 2048 FFT points in a record, using sequential read commands, without needing to manipulate the BUF\_PNTR register.

<!-- image -->

Figure 38. Data Buffer Structure and Operation

Table 7. BUF\_PNTR (Base Address = 0x0A), Read/Write

| Bits    | Description (Default = 0x0000)                       |
|---------|------------------------------------------------------|
| [15:12] | Not used                                             |
| [11:0]  | Data bits; range = 0 to 2047 (FFT), 0 to 4095 (time) |

## Accessing FFT Record Data

Up to 10 FFT records can be stored in flash memory. The REC\_PNTR register (see Table 8) and GLOB\_CMD bit (Bit 13, see Figure 39) provide access to the FFT records.

The process when FFT averaging is enabled is as follows:

1. Initiate a capture.
2. Time domain samples are captured and filtered according to AVG\_CNT setting until 4096 time samples fill the buffer.
3. The FFT is calculated from the time samples in the buffer and the record is stored.
4. After the number of FFT averages is reached, all FFT records in memory are averaged and stored.
5. Alarms are checked, flags are set, and the data record is stored as per configuration
6. In either manual or automatic mode, the next sample rate option is set.
7. Finally, the BUSY signal is set.

Note that an FFT record is an FFT stored in flash, and an FFT capture is an FFT stored in RAM.

Table 8. REC\_PNTR (Base Address = 0x0C), Read/Write

<!-- image -->

Figure 39. FFT Record Access

## MTC Data Format

In MTC mode the X\_BUF, Y\_BUF, and Z\_BUF registers each contain a single time domain sample for the noted axis. When reading X\_BUF (as well as Y\_BUF and Z\_BUF), BUF\_PNTR automatically advances from 0 to 4095. The time domain data is 16-bit, twos complement acceleration data by default with a resolution of 1 LSB = 1.907 m g . If velocity data is selected by setting REC\_CTRL, Bit 5 = 1, velocity data is stored in the buffer registers instead. Velocity data is calculated by integrating the acceleration data,  its resolution and scale factor depend on the sample rate and AVG\_CNT value:

<!-- formula-not-decoded -->

For instance, if the default sample rate is 220 kSPS and AVG\_CNT = 5, 1 LSB = 2.72 µm/sec.

Table 10, Table 11, and Table 12 list the bit assignments for the X\_BUF, Y\_BUF, and Z\_BUF registers. The acceleration data format depends on the record type setting in the REC\_CTRL register. Table 42 shows data formatting examples for the 16-bit, twos complement format used in manual time mode.

In MTC mode, time domain statistic can be calculated by enabling Bit 6 in the REC\_CTRL register. The statistics value scales are calculated based on setting of accelerometer or velocity, and if RSS is enabled, all statistics are calculated based on the RSS values. The time domain statistics available are mean, standard deviation, peak, peak-to-peak, crest factor, kurtosis, and skewness.

## [ADcmXL3021](https://www.analog.com/ADcmXL3021?doc=ADcmXL3021.pdf)

The scale of all statistics are consistent with the data format selected (for example, 1 LSB = 1.907 m g for acceleration), except the crest factor, kurtosis, and skew, which require fractional numbers.

Table 9. MTC Mode, 50 g Range, Data Format Examples

|   Acceleration (m g ) (1.907 mg/LSB) |     LSB | Hex    | Binary              |
|--------------------------------------|---------|--------|---------------------|
|                             +62486.7 | +32,767 | 0x7FFF | 0111 1111 1111 1111 |
|                             +12498.5 |   +6554 | 0x199A | 0001 1001 1001 1010 |
|                                 +3.9 |      +2 | 0x0002 | 0000 0000 0000 0010 |
|                                 +1.9 |      +1 | 0x0001 | 0000 0000 0000 0001 |
|                                    0 |       0 | 0x0000 | 0000 0000 0000 0000 |
|                                 -1.9 |      -1 | 0xFFFF | 1111 1111 1111 1111 |
|                                 -3.8 |      -2 | 0xFFFE | 1111 1111 1111 1110 |
|                             -12498.5 |   -6554 | 0xE666 | 1110 0110 0110 0110 |
|                             -62488.6 | -32,768 | 0x8000 | 1000 0000 0000 0000 |

If RSS calculation is enabled in MTC mode, the RSS of all three axes is placed in the Z\_BUF registers. X and y time domain data is still available in the respective buffers, but the contents of Z\_BUF are replaced with the RSS values. If RSS is enabled, the x-axis and y-axis alarms still apply to the respective axes, but the z-axis alarms apply to the RSS values.

Table 10. X\_BUF (Base Address = 0x0E), Read Only

| Bits                                             | Description (Default = 0x8000)                                                                       |
|--------------------------------------------------|------------------------------------------------------------------------------------------------------|
| [15:0]                                           | X-axis acceleration data buffer register. Format = twos complement (time), unsigned integer (FFT).   |
| Table 11. Y_BUF (Base Address = 0x10), Read Only | Table 11. Y_BUF (Base Address = 0x10), Read Only                                                     |
| Bits                                             | Description (Default = 0x8000)                                                                       |
| [15:0]                                           | Y-axis acceleration data buffer register. Format = twos complement (time), unsigned integer (FFT).   |
| Table 12. Z_BUF (Base Address = 0x12), Read Only | Table 12. Z_BUF (Base Address = 0x12), Read Only                                                     |
| Bits                                             | Description (Default = 0x8000)                                                                       |
| [15:0]                                           | Z-acceleration or RSS data buffer register. Format = twos complement (time), unsigned integer (FFT). |

## FFT Data Format (for AFFT and MFFT modes)

In both AFFT and MFFT modes, the X\_BUF, Y\_BUF, and Z\_BUF registers contain a calculated FFT bin magnitude. The values contained in buffer locations from 0 to 2047 represent the magnitude of frequency bins of size, depending on the AVG\_CNT value as shown in Table 19.

The magnitude (x) can be calculated from the value read by using the following equation:

<!-- formula-not-decoded -->

This formula is consistent for the y and z buffer values. Table 13 and Table 43 show the data formatting examples for FFT mode conversions from the X\_BUF value to acceleration.

When reading the X\_BUF register (as well as Y\_BUF and Z\_BUF), BUF\_PNTR automatically advances from 0 to 2047. The FFT data is unsigned 16-bit data.

Table 13. FFT Magnitude Conversion from Register Value, Data Format Examples

| FFT Buffer ReadValue (Bits)   |   FFT Averages | Magnitude   |
|-------------------------------|----------------|-------------|
| 0x0001                        |              1 | 0.953823m g |
| 0x0002                        |              1 | 0.954146m g |
| 0x00FF                        |              1 | 1.039447m g |
| 0x7D00                        |              1 | 48.18528 g  |
| 0x0001                        |              2 | 0.476911m g |
| 0x0002                        |              2 | 0.477073m g |
| 0x00FF                        |              2 | 0.519724m g |
| 0x0005                        |              4 | 0.238779m g |
| 0x05FF                        |              4 | 0.400762m g |
| 0x7530                        |              4 | 6.121809 g  |
| 0x00FF                        |              8 | 0.129931m g |
| 0x7D00                        |              8 | 6.02316 g   |
| 0x7D00                        |             16 | 3.01158 g   |
| 0xAFCE                        |            128 | 30.65768 g  |

## RTS Data Format

In RTS mode, continuous data is burst out of the SPI interface. Each data frame consists of 32 samples each of x-, y-, and z-axis accelerometer data plus a frame header, temperature reading, status bits, and a 16-bit cyclical redundancy check (CRC) code. To calculate CRC, the CCITT-16 bit algorithm with an initial seed of 0xFFFF is used. Each data sample is 16-bit, twos complement acceleration data by default with a resolution of 1 LSB = 1.907 m g . It is important that the external host device is able to retrieve the burst data in a sufficient time allotment, which is approximately 135 µs per data frame. No internal corrections are applied to this data. Therefore, the data may deviate from the results of other capture modes. Data is unsigned and must be offset (subtract) by 0x8000 to obtain ± g (signed data).

When first entering RTS mode capture, the first eight samples are all 0s and the CRC for the first frame is invalid. Anytime a frame is skipped (not read), the subsequent frame CRC is invalid. It is recommended that the first frame be ignored and data for the second frame and all subsequent frames be used.

In RTS mode, the default sample rate is 220 kSPS. Users can set the decimation ratio or select from preset sample rates using the RT\_CTRL register according to Table 56 and Table 57.

Table 14 shows several examples of how to translate RTS data values, assuming nominal sensitivity and zero bias error.

Table 14. RTS Mode Data Format Examples

|   Acceleration ( g ) |    LSB | Hex.   | Binary              |
|----------------------|--------|--------|---------------------|
|              +62.532 | 65,535 | 0xFFFF | 1111 1111 1111 1111 |
|                  +50 | 58,967 | 0xE657 | 1110 0110 0101 0111 |
|            +0.003816 | 32,770 | 0x8002 | 1000 0000 0000 0010 |
|            +0.001908 | 32,769 | 0x8001 | 1000 0000 0000 0001 |
|                    0 | 32,768 | 0x8000 | 1000 0000 0000 0000 |
|            -0.001908 | 32,767 | 0x7FFF | 0111 1111 1111 1111 |
|            -0.003816 | 32,766 | 0x7FFE | 0111 1111 1111 1110 |
|                  -50 |   6567 | 0x19A7 | 0001 1001 1010 0111 |
|              -62.534 |      0 | 0x0000 | 0000 0000 0000 0000 |

## USER INTERFACE

The user interface includes a number of important functions: a data communications port, a trigger input, a busy indicator, and two alarm indicator signals.

Data communication between an embedded processor (master) and the ADcmXL3021 takes place through the SPI, which includes the chip select (CS), serial clock (SCLK), data input (DIN), and data output (DOUT) pins (see Table 5).

The SYNC/RTS (see Table 5) pin provides user triggering options in manual triggering modes. The alarm pins, ALM1 and ALM2, are configurable to alert the user of an event that exceeds a user defined threshold of a parameter.

The SYNC/RTS pin is used in RTS mode to support start and stop control over data capture and analysis operations. The BUSY pin (see Table 5) provides an indication of internal operation when the ADcmXL3021 is executing a command. This signal helps the master processor avoid SPI communication when the ADcmXL3021 cannot support a response and can trigger an external data acquisition after data capture and analysis events are complete.

The ADcmXL3021 uses an SPI for communication, which enables simple connection with most embedded processor platforms, as shown in Figure 40.

## [ADcmXL3021](https://www.analog.com/ADcmXL3021?doc=ADcmXL3021.pdf)

<!-- image -->

Figure 40. Electrical Hookup Diagram

The register structure uses a paged addressing scheme that contains seven pages, with each page containing 64 register locations. Each register is 16 bits wide, with each 2-byte word having its own unique address within the memory map of that page. The SPI port has access to one page at a time. Select the page to activate for SPI access by writing the corresponding code to the PAGE\_ID register. Read the PAGE\_ID register to determine which page is currently active. Table 15 displays the PAGE\_ID contents for each page and the basic functions. The PAGE\_ID register is located at Address 0x00 on each page.

Table 15. User Register Page Assignments

|   PageNo. | PAGE_ID   | Function                        |
|-----------|-----------|---------------------------------|
|         0 | 0x00      | Configuration, data acquisition |
|         1 | 0x01      | FIR Filter Bank A               |
|         2 | 0x02      | FIR Filter Bank B               |
|         3 | 0x03      | FIR Filter Bank C               |
|         4 | 0x04      | FIR Filter BankD                |
|         5 | 0X05      | FIR Filter Bank E               |
|         6 | 0x06      | FIR Filter Bank F               |

The factory default configuration for the BUSY pin provides a busy indicator signal that transitions high when an event completes and data is available for user access and remains low during processing.

Table 16. Generic Master Processor Pin Names and Functions

| PinName    | Function                            |
|------------|-------------------------------------|
| SS         | Slave select                        |
| SCLK       | Serial clock                        |
| MOSI       | Master output, slave input          |
| MISO       | Master input, slave output          |
| IRQ1, IRQ2 | Interrupt request inputs (optional) |

The ADcmXL3021 SPI supports full duplex serial communication (simultaneous transmit and receive) and uses the bit sequence shown in Figure 44. Table 17 shows a list of the most common settings that control the operation of SPI-compatible ports in most embedded processor platforms.

Embedded processors typically use control registers to configure serial ports for communicating with SPI slave devices, such as the ADcmXL3021. Table 17 lists settings that describe the SPI protocol of the ADcmXL3021. The initialization routine of the master processor typically establishes these settings using firmware commands to write them into the serial control registers.

Table 17. Generic Master Processor SPI Settings

| Processor Setting   | Description                          |
|---------------------|--------------------------------------|
| Master              | ADcmXL3021operates as a slave.       |
| SCLKRate≤14MHz      | Bit rate setting.                    |
| SPI Mode 3          | Clock polarity/phase(CPOL=1,CPHA=1). |
| MSB First           | Bit sequence.                        |
| 16-Bit Mode         | Shift register/data length.          |
| Readout Formatting  | Little Endian.                       |

Table 20 lists user registers with lower byte addresses. Each register consists of two bytes. Each byte has a unique 7-bit address. Figure 41 relates the bits of each register to the upper and lower addresses.

Figure 41. Generic Register Bit Definitions

<!-- image -->

## Register Structure

All communication with the ADcmXL3021 involves accessing the user registers. The register structure contains both output data and control registers. The output data registers include the latest sensor data, alarm information, error flags, and identification data. The control register contained in Page 0 includes configurable options, such as time domain averaging, FFT averaging, filtering, alarm parameters, diagnostics, and data collection mode settings. Each user accessible register has two bytes (upper and lower), and each byte has a unique address. See Table 20 for a detailed list of all user registers, along with the corresponding addresses.

All communication between the ADcmXL3021 and an external processor involves either reading or writing these 16 bit user registers.

NOTES

## SPI Write Commands

User control registers govern many internal operations. The DIN bit sequence in Figure 44 provides a description to write to these registers. Each configuration register contains 16 bits (two bytes). Bits[7:0] contain the low byte, and Bits[15:8] contain the high byte of each register. Each byte has a unique address in the user register map (see Table 20). Updating the contents of a register requires writing both bytes in the following sequence: low byte first, high byte second. There are three parts to coding a SPI command (see Figure 44) that write a new byte of data to a register: the write bit (R/W = 1), the address of the byte [A6:A0], followed by the new data for that register address [D7:D0].

Figure 42 provides a coding example for writing 0x2345 to the FFT\_AVG1 register, the 0x8623 command writes 0x23 to Address 0x06 (lower byte) and the 0x8745 command writes 0x45 to Address 0x07 (upper byte).

<!-- image -->

## SPI Read Commands

A single register read requires two 16-bit SPI cycles that use the bit assignments shown in Figure 44. The beginning sequence sets R/W = 0 and communicates the target address (Bits[A6:A0]). Bits[DC7:DC0] are don't care bits for a read DIN sequence. DOUT clocks out the requested register contents during the second sequence. The second sequence can also use DIN to set up the next read.

Figure 43 provides an example that includes two register reads in succession. This example starts with DIN = 0x0C00 to request the contents of the REC\_PNTR register, and follows with 0x0E00, to request the contents of the X\_BUF register. The sequence in Figure 43 also shows the full duplex mode of operation, which means that the ADcmXL3021 can receive requests on DIN while also transmitting data out on DOUT within the same 16-bit SPI cycle.

<!-- image -->

Figure 43. SPI Mulitbyte Read Command Example

<!-- image -->

1. DOUT BITS ARE PRODUCED ONLY WHEN THE PREVIOUS 16-BIT DIN SEQUENCE STARTS WITH R/W = 0.

2. WHEN CS IS HIGH, DOUT IS IN A THREE-STATE, HIGH IMPEDANCE MODE, WHICH ALLOWS MULTIFUNCTIONAL USE OF THE LINE FOR OTHER DEVICES.

Figure 44. SPI Communication, Multibyte Sequence

16806-015

## Data Sheet

## Busy Signal

The factory default configuration provides the user with a busy signal (BUSY), which pulses low when the output data registers are updating (see signal orientation of busy signal in Figure 45). In this configuration, connect BUSY to an interrupt service pin on the embedded processor, which triggers data collection, when this signal pulses high.

<!-- image -->

During the start-up and reset recovery processes, the BUSY signal can exhibit some transient behavior before data production begins. Figure 45 provides an example of the BUSY behavior during command processing. A low signal indicates SPI access is not available with the exception of the escape code that can terminate a capture. Figure 46 shows the BUSY signal during power up.

16806-017

Figure 46. BUSY Response During Startup

<!-- image -->

## RTS

The RTS function provides a method for reading data (time domain acceleration data for each axis, temperature, status, and CRC code) that does not require a stall time between each 16-bit segment and only requires one command on the DIN line to initiate. System processors can execute this mode by reading each segment of data in the response, while holding the CS line in a low state, until after reading the last 16-bit segment of data. If the CS line goes high before the completion of all data acquisition, the data from that read request is lost.

## [ADcmXL3021](https://www.analog.com/ADcmXL3021?doc=ADcmXL3021.pdf)

The RTS burst contains 100  16 bits words (a header, including a incrementing counter, 32 x-axis samples, 32 y-axis samples, 32 zaxis samples, temperature, status, and CRC). The external SCLK rate must be between 12.5 MHz to 14 MHz to ensure the complete burst is read out before current data in the register buffer is overwritten. The maximum SCLK for RTS burst outputs is 14 MHz ± 1%. The minimum SCLK required to support the transfer is 12.5 MHz. The RTS burst response uses the sequencing diagrams shown in Figure 4 and Figure 5 and the data format shown in Table 18.

When first entering RTS mode capture, the first eight samples are all 0s and the CRC for the first frame is invalid. It is recommended that the first frame be ignored and that the data for the second frame and all subsequent frames be used.

## Table 18. RTS Data Format

| ByteLocationin OutputDataset   | 2-ByteValueRepresents                                                                                               |
|--------------------------------|---------------------------------------------------------------------------------------------------------------------|
| 0                              | Fixed header: 0xccAD; where cc is an incrementing counter value from 0x00 to 0xFF, which returns to 0x00 after 0xFF |
| 2                              | X-axis data (0) (oldest data from x-axis)                                                                           |
| 4                              | X-axis data (1)                                                                                                     |
| 6                              | X-axis data (2)                                                                                                     |
| …                              | …                                                                                                                   |
| 64                             | X-axis data (31)                                                                                                    |
| 66                             | Y-axis data (0) (oldest data from y-axis)                                                                           |
| 68                             | Y-axis data (1)                                                                                                     |
| …                              | …                                                                                                                   |
| 128                            | Y-axis data (31)                                                                                                    |
| 130                            | Z-axis data (0) (oldest data from z-axis)                                                                           |
| 132                            | Z-axis data (1)                                                                                                     |
| 134                            | Z-axis data (2)                                                                                                     |
| …                              | …                                                                                                                   |
| 192                            | Z-axis data (31)                                                                                                    |
| 194                            | Temperature                                                                                                         |
| 196                            | Status                                                                                                              |
| 198                            | CRC-16                                                                                                              |

## BASIC OPERATION

## DEVICE CONFIGURATION

Each register contains 16 bits (two bytes). Bits[7:0] contain the low byte and Bits[15:8] contain the high byte. Each byte has a unique address in the user register map (see Table 20). Updating the contents of a register requires writing to the low byte first and the high byte second. There are three parts to coding a SPI command, which writes a new byte of data to a register: the write bit (R/W = 1), the 7-bit address code for the byte that this command is updating, and the 16 bits of new data for that location.

## DUAL MEMORY STRUCTURE

The ADcmXL3021 uses a dual memory structure (see Figure 47) with static random access memory (SRAM), supporting real-time operation and flash memory storing operational code and user configurable register settings. The manual flash update command (Bit 6 in the GLOB\_CMD register) provides a single-command method for storing user configuration settings to flash memory for automatic recall during the next power-on or reset recovery process. During power-on or reset recovery, the ADcmXL3021 performs a CRC on the SRAM and compares this result to a CRC computation from the same memory locations in flash memory. If this memory test fails, the ADcmXL3021 resets and boots up from the other flash memory location. The ADcmXL3021 provides an error flag for detecting when the backup flash memory supported the last power-on or reset recovery. Table 20 shows a memory map for the user registers in the ADcmXL3021, which includes flash backup support (indicated by yes or no in the flash column).

Figure 47. SRAM and Flash Memory Diagram

<!-- image -->

## POWER-UP SEQUENCE

The ADcmXL3021 requires only a single 3.3 V supply voltage and supports communication with most 3 V compliant embedded processor platforms using an SPI protocol. Avoid applying voltage to the SYNC/RTS, CS, SCLK, and DIN input pins until the proper supply voltage is applied to the module.

The power ramp from 0 V to 3.0 V must be monotonic. The module performs internal initialization, tests flash memory, and performs a sensor self test after powering on. No SPI access is allowed during this time. The module signals a completed initialization by setting the BUSY pin logic high.

## TRIGGER

All modes, including RTS mode, require a trigger to start. AFFT mode and RTS mode also require a trigger to stop recording.

Start triggers arise either from using the SYNC/RTS digital input pin or by setting Bit 11 in the GLOB\_CMD register (see Table 91). If using the SYNC/RTS pin as a trigger, the user must set Bit 12 in the MISC\_CTRL register = 1 to enable this feature. While in RTS mode, during a valid capture period, normal SPI access is disabled until a valid stop is received.

The user can stop a capture in RTS mode in two ways: via a hardware pin or using software. The hardware pin method uses the RTS pin, which is enabled in Bit 12 of the MISC\_CTRL register. The software method requires the user to set Bit 15 in the REC\_CTRL register to 1, which enables timeout mode which must be configured prior to initating a capture. In this case, RTS mode stops after 35 ms with no user supplied external readback clocks with CS low. To restart RTS mode, use the normal start trigger options described in this data sheet.

To stop a capture in AFFT mode, the user must issue a stop command during a period when BUSY is high (BUSY is low when the device is configured for power saving mode and sleeps between captures) or by write an escape code to the device at any time. All other SPI writes are ignored. When the ADcmXL3021 is in between active collecting periods (as configured in the REC\_PRD register), setting Bit 11 in the GLOB\_CMD register (see Table 91) to 1 (DIN = 0xBF08) interrupts the operation and the ADcmXL3021 returns to operating in the idle state. The REC\_PRD counter starts at the beginning of the capture and must be set to a period greater than the longest capture time if multiple rate options (Sample Rate 0 to Sample Rate 3) are enabled.

When operating in MFFT or MTC mode, the ADcmXL3021 operates in an idle state until it receives a command to start collecting data. When the ADcmXL3021 is in this idle state, setting Bit 11 in the GLOB\_CMD register (see Table 91) to 1 starts a data collection and processing event. An interruption of data collection and processing causes a loss of all data from the interrupted process. A positive pulse on the SYNC/RTS pin provides the same start function as raising Bit 11 in the GLOB\_CMD register when operating in MFFT mode.

In cases with many averages, a capture event can last an extended period with access to the SPI port (for example, when a device stays in a busy state). In this case, an escape code is used to terminate the active capture. The escape code is 0x00E8 and is written to the GLOB\_CMD register, using the two 16-bit sequence 0xBEE8, followed by 0xBF00 and repeat until BUSY returns to a high logic state. An valid escape is also indicated in Bit 4 of the DIAG\_STAT register. After an escape is issued, any data collected during the last capture is no longer valid. To continue capturing data, refer to the normal start trigger options.

## SAMPLE RATE

RTS mode has a fixed sample rate of 220 kSPS. The output is streamed out in a burst data packet over the SPI communications port. After the device is configured for RTS mode, conversion starts and stops are controlled by the SYNC/RTS pin or by stopping SPI activity for a period of time (see Bit 15 of the REC\_CTRL register). RTS mode is unique in that, when configured, no additional processing is preformed and samples are output directly from the ADC without null, filter, or digital signal processing and alarms are not checked. A low-pass analog filter with a 13.5 kHz cutoff frequency is always in the datapath and, along with the high ADC sample rate, prevents aliasing.

For MTC mode, the sampling rate is always 220 kSPS and captures 4096 samples. The module can be configured to perform internal digital averaging.

For the null function (see Figure 36), the user can write offset correction values into the X\_ANULL register (see Table 49), the Y\_ANULL register (see Table 51), and the Z\_ANULL register (see Table 53). The user can also initiate the autonull command via Bit 0 in the GLOB\_CMD register (see Table 91), which automatically estimates the offset errors for each axis and writes correction values to the X\_ANULL register, Y\_ANULL register, and Z\_ANULL register. The autonull feature uses settings of SR3 to capture and calculate a correction value and requires time to complete.

The AVG\_CNT register allows the selection of the number of averages used in each capture for up to four sample rate options. The REC\_CTRL register selects which sample rate options are enabled. The number of averages determines the sample rate for each sample rate option by the following equation:

Sample Rate = 220 kHz/2 AVG\_CNT[3:0]

Table 19. FFT Bin Sizes, Frequency Limits (Hz)

| AVG_CNT Setting (Averages)   |   Effective Sample Rate, f S (SPS) |   EffectiveFFT BinSize, f _MIN (Hz) |   Effective MaximumFFT Frequency,f _MAX (Hz) |
|------------------------------|------------------------------------|-------------------------------------|----------------------------------------------|
| 0(1)                         |                             220000 |                            53.71094 |                                       110000 |
| 1(2)                         |                             110000 |                            26.85547 |                                        55000 |
| 2(4)                         |                              55000 |                            13.42773 |                                        27500 |
| 3(8)                         |                              27500 |                            6.713867 |                                        13750 |
| 4(16)                        |                              13750 |                            3.356934 |                                         6875 |
| 5(32)                        |                               6875 |                            1.678467 |                                       3437.5 |
| 6(64)                        |                             3437.5 |                            0.839233 |                                      1718.75 |
| 7(128)                       |                            1718.75 |                            0.419617 |                                      859.375 |

In MFFT mode and AFFT mode, each FFT data record starts with a capture of 4096 time domain samples (after decimation, if enabled), as with MTC mode. The data is processed with the null function and FIR filter after the decimation filter, as with MTC mode. An FFT calculation is performed on the data. This data is stored in user accessible buffer, in place of the time domain values, and spectral alarms are checked.

An important note is that the execution of the retrieve record with many FFT averages and a low sample rate may take minutes to hours to complete. Because the device turns off SPI interrupts during a recording the user cannot send a stop command. Instead, the device monitors the SPI receive buffer for the escape code, a SPI write of 0x00E8 to the GLOB\_CMD register, during the data capture portion of the recording. Therefore, the user can escape from a recording by writing 0x00E8 to the GLOB\_CMD register. It is recommended to write only 0x00E8 to the device, provide a small delay, and then monitor the busy indicator or poll the status register. Repeatedly send the 0x00E8 code and check the status register until the status register shows the escape flag and busy indicator/data ready flag.

## DATAPATH PROCESSING

For RTS mode, there is no digital processing of data internal to the ADcmXL3021. Data is buffered internally to 32 sample packets that are burst output over the SPI interface.

For MTC mode, AFFT mode, and MFFT mode, the initial capture and processing procedure is the same, and is as follows:

1. Capture 4096 consecutive time domain samples at 220 kSPS.
2. If AVG\_CNT is enabled, apply the appropriate decimation filter. Continue to collect data until 4096 time sample buffer is filled.
3. Null data, if enabled.
4. Apply the FIR filter, if enabled.

If MTC mode is enabled, the remaining steps are required:

5. Calculate the statistic values enabled.
6. Check the statistics against alarm settings.
7. Write the statistic values to the data buffer.
8. If the RSS option is selected, the RSS of the axes is calculated on a time sample basis and replace the z-axis buffer values.
9. Calculate time domain statistics.
10. Check time domain alarms and set the alarm bit if appropriate.
11. Record statistic data according to the storage option selected.
12. Perform signal completion by setting the BUSY pin.

If AFFT or MFFT mode is enabled, the remaining steps occur after the initial capture and processing:

5. Calculate the FFT based on the AVG\_CNT setting.
6. Record data according to the storage option selected.
7. Check frequency domain alarms, set the alarm bit if appropriate.
8. Signal completion by setting the BUSY pin.

## [ADcmXL3021](https://www.analog.com/ADcmXL3021?doc=ADcmXL3021.pdf)

## Data Sheet

Figure 49. AFFT Mode and MFFT Mode Datapath Processing

<!-- image -->

After null corrections are applied, the data of each inertial sensor passes through an FIR filter (using the FILT\_CTRL register), decimation filter (using the AVG\_CNT register), and windowing filter (using the REC\_CTRL register), all of which have user configurable attributes.

The FIR filter includes six banks of coefficients with 32 taps each. The FILT\_CTRL register (see Table 83) provides the configuration options for the use of the FIR filters of each inertial sensor. Each FIR filter bank includes a preconfigured filter, but the user can design filters and write over these values using the register of each coefficient. Default filter configuration options are either low-pass or high-pass filters with cutoff frequencies of either 1 kHz, 5 kHz, or 10 kHz. Page 1 through Page 6 define the six sets of FIR filter coefficients. Each page is dedicated to a single filter. For example, Page 1 in the register map provides the details for the 1 kHz low-pass FIR filter. These filters represent typical cutoff frequencies for machine vibration monitoring applications.

## FIR Filter

Six FIR filters are preprogrammed by default in memory and available for use. The coefficients for these filters are stored in Page 1 to Page 6 and provide selectable filter options for the 1 kHz, 5 kHz, or 10 kHz low-pass filter, and the 1 kHz, 5 kHz, or 10 kHz high-pass filter. Users can write and store custom filter setting by overwriting existing filter coefficients and saving these values to flash memory.

## Decimation

Averaging options are available within the ADcmXL3021 and reduce the amount of data required to be transferred for a given bandwidth while also reducing random noise impact on the signal to noise ratio. Decimation is set using the AVG\_CNT register and enabled in REC\_CTRL register. The decimation filter can be used when the module is configured for MTC, MFFT, or AFFT operation, but is not available in RTS mode. Table 87 shows selectable sample rates and resulting FFT bin width options.

MTC mode, AFFT mode, and MFFT mode can be configured to cycle automatically through up to four different AVG\_CNT settings (enabled in the REC\_CTRL register): SR0, SR1, SR2, and SR3.

When more than one sample rate option is enabled (REC\_CTRL register, Bit 8 through Bit 11, see Table 55), the device cycles through each one.

## Windowing

There are three windowing options that can be applied to the time domain recording before the FFT is computed. The typical window for vibration monitoring is the Hanning window. This window is provided as a default. A Hanning window is optimal because it offers good amplitude resolution of the peaks between frequency bins and minimal broadening of the peak. The rectangular and flat top windows are also available because they are common windowing options for vibration monitoring. The rectangular window is a window of magnitude 1 providing a flat time domain response. The flat top window is advantageous because it can provide very accurate amplitudes with the disadvantage of significant broadening of the peaks. This window is useful when the magnitude accuracy of the peak is important.

## SPECTRAL ALARMS

When using MFFT mode or AFFT mode, six flexible alarms can be configured with settings for individual axes. There are 144 possible alarm configurations considering there are six alarm bands (× 3 axes × 4 sample rate options × 2 magnitude alarm levels).

The ALM\_PNTR register cycles through up to six alarm band configurations per capture. A lower frequency register (ALM\_F\_LOW) and an upper frequency register (ALM\_F\_HIGH) are set to define a bandwidth of interest. ALM\_X\_MAG1 and ALM\_X\_MAG2 define two levels of magnitude within the band set for the x-axis on which to base two triggers. These levels allow two warning levels for a trigger. Setting ALM\_CTRL allows the setting of enabling and disabling individual axes, two warning levels, the number of events required to trigger alarm, and the clearing options for the trigger alerts.

The alarm status is reported in the ALM\_X\_STAT register, the ALM\_Y\_STAT register, and the ALM\_Z\_STAT register. These registers show which alarm and axis caused the last alarm event. If the alarm is serviced immediately, REC\_INFO contains the last capture settings for additional information about the event. Based on the record mode (REC\_CTRL, Bits[2:3]) setting, up to 10 FFT capture records can be stored in memory.

When an alarm is triggered, the values in registers ALM\_X\_PEAK, ALM\_Y\_PEAK, and ALM\_Z\_PEAK represent the peak value. Only the values that triggered the alarm are stored when the measured value for the given conditions exceed the ALM\_X\_MAG1, ALM\_Y\_MAG1, ALM\_Z\_MAG1, ALM\_X\_MAG2, ALM\_Y\_MAG2, and ALM\_Z\_MAG2 threshold settings. The magnitude is in the resolution as configured by the FFT\_AVG setting for the specific capture.

The alarm frequency bin of the peak deviation point is reported in ALM\_X\_FREQ, ALM\_Y\_FREQ, and ALM\_Z\_FREQ. These results are in units of resolution (Hz), configured through the AVG\_CNT setting for the specific capture.

ALM\_X\_MAG1, ALM\_X\_MAG2, ALM\_X\_STAT, ALM\_X\_PEAK, and ALM\_X\_FREQ apply to the x-axis settings, and similar registers are available for the y-axis (ALM\_Y\_MAG1, ALM\_Y\_MAG2, ALM\_Y\_STAT, ALM\_Y\_PEAK, and ALM\_Y\_FREQ) and the z-axis (ALM\_Z\_MAG1, ALM\_Z\_MAG2, ALM\_Z\_STAT, ALM\_Z\_PEAK, and ALM\_Z\_FREQ).

Figure 50. Spectral Alarm Band Registers

<!-- image -->

## MECHANICAL MOUNTING RECOMMENDATIONS

Mechanical mounting is critical to ensure the best transfer of vibration and avoiding resonances that may affect performance. The ADcmXL3021 module has four mounting holes integrated in the aluminum housing.

The mounting holes accept M2.5 screws to hold the module in place. Stainless steel screws torqued to about 25 inch-pounds are used for many of the characterization curves shown in the data sheet.

In some cases, when permanent mounting is an option, industrial epoxies or adhesives, such as cyanoacrylate adhesive, in addition to the mounting screws can be used to enhance mechanical coupling.

## USER REGISTER MEMORY MAP

Table 20. User Register Memory Map 1

| RegisterName             | R/W   | FlashBackup   | PAGE_ID   | Address               | Default    | Register Description                                              |
|--------------------------|-------|---------------|-----------|-----------------------|------------|-------------------------------------------------------------------|
| PAGE_ID 2                | R/W   | No            | 0x00      | 0x00, 0x01            | 0x0000     | Page identifier                                                   |
| TEMP_OUT                 | R     | No            | 0x00      | 0x02, 0x03            | 0x8000 3   | Internal temperature                                              |
| SUPPLY_OUT               | R     | No            | 0x00      | 0x04, 0x05            | 0x8000 3   | Power supply voltage (VDD)                                        |
| FFT_AVG1                 | R/W   | Yes           | 0x00      | 0x06, 0x07            | 0x0108     | FFT average settings (SR0, SR1)                                   |
| FFT_AVG2                 | R/W   | Yes           | 0x00      | 0x08, 0x09            | 0x0101     | FFT average settings (SR2, SR3)                                   |
| BUF_PNTR                 | R/W   | No            | 0x00      | 0x0A, 0x0B            | 0x0000     | Buffer address pointer                                            |
| REC_PNTR                 | R/W   | No            | 0x00      | 0x0C, 0x0D            | 0x0000     | Data record pointer                                               |
| X_BUF                    | R     | No            | 0x00      | 0x0E, 0x0F            | 0x8000     | Buffer data, x-axis                                               |
| Y_BUF                    | R     | No            | 0x00      | 0x10, 0x11            | 0x8000     | Buffer data, y-axis                                               |
| Z_BUF/RSS_BUF            | R     | No            | 0x00      | 0x12, 0x13            | 0x8000     | Buffer data, z-axis or root sum square (RSS)                      |
| X_ANULL                  | R/W   | Yes           | 0x00      | 0x14, 0x15            | 0x0000     | Bias correction value (from auto null), x-axis                    |
| Y_ANULL                  | R/W   | Yes           | 0x00      | 0x16, 0x17            | 0x0000     | Bias correction value (from auto null), y-axis                    |
| Z_ANULL                  | R/W   | Yes           | 0x00      | 0x18, 0x19            | 0x0000     | Bias correction value (from auto null), z-axis                    |
| REC_CTRL                 | R/W   | Yes           | 0x00      | 0x1A, 0x1B            | 0x1102     | Record control register (mode of operation)                       |
| RT_CTRL                  | R/W   | Yes           | 0x00      | 0x1C, 0x1D            | 0x0000     | Real-time streaming control register                              |
| REC_PRD                  | R/W   | Yes           | 0x00      | 0x1E, 0x1F            | 0x0000     | Record period setting                                             |
| ALM_F_LOW                | R/W   | Yes 4         | 0x00      | 0x20, 0x21            | 0x0000     | Spectral alarm band, low frequency setting                        |
| ALM_F_HIGH               | R/W   | Yes 4         | 0x00      | 0x22, 0x23            | 0x0000     | Spectral alarm band, high frequency setting                       |
| ALM_X_MAG1               | R/W   | Yes 4         | 0x00      | 0x24, 0x25            | 0x0000     | Spectral alarm band, Alarm Magnitude 1, x-axis                    |
| ALM_Y_MAG1               | R/W   | Yes 4         | 0x00      | 0x26, 0x27            | 0x0000     | Spectral alarm band, Alarm Magnitude 1, y-axis                    |
| ALM_Z_MAG1/ ALM_RSS1     | R/W   | Yes 4         | 0x00      | 0x28, 0x29            | 0x0000     | Spectral alarm band, Alarm Magnitude 1, z-axis or RSS Magnitude 1 |
| ALM_X_MAG2               | R/W   | Yes 4         | 0x00      | 0x2A, 0x2B            | 0x0000     | Spectral alarm band, Alarm Magnitude 2, x-axis                    |
| ALM_Y_MAG2               | R/W   | Yes 4         | 0x00      | 0x2C, 0x2D            | 0x0000     | Spectral alarm band, Alarm Magnitude 2, y-axis                    |
| ALM_Z_MAG2/ ALM_RSS2     | R/W   | Yes 4         | 0x00      | 0x2E, 0x2F            | 0x0000     | Spectral alarm band, Alarm Magnitude 2, z-axis or RSS Magnitude 2 |
| ALM_PNTR                 | R/W   | No            | 0x00      | 0x30, 0x31            | 0x0000     | Spectral alarm pointer                                            |
| ALM_S_MAG                | R/W   | No            | 0x00      | 0x32, 0x33            | 0x0000     | System alarm threshold setting                                    |
| ALM_CTRL                 | R/W   | Yes           | 0x00      | 0x34, 0x35            | 0x0080     | Alarm control settings                                            |
| Reserved                 | N/A   | N/A           | N/A       | 0x36, 0x37            | 0x0000     | Not used                                                          |
| FILT_CTRL                | R/W   | Yes           | 0x00      | 0x38, 0x39            | 0x0000     | Filter control settings                                           |
| AVG_CNT                  | R/W   | Yes           | 0x00      | 0x3A, 0x3B            | 0x0000     | Sample rate settings (SR0, SR1, SR2, SR3)                         |
| DIAG_STAT                | R     | No            | 0x00      | 0x3C, 0x3D            | 0x0000     | Diagnostic/status flags                                           |
| GLOB_CMD                 | W     | No            | 0x00      | 0x3E, 0x3F            | 0x0000     | Global command triggers                                           |
| ALM_X_STAT               | R     | Yes 5         | 0x00      | 0x40, 0x41            | 0x0000     | Alarm status register, x-axis                                     |
| ALM_Y_STAT               | R     | Yes 5         | 0x00      | 0x42, 0x43            | 0x0000     | Alarm status register, y-axis                                     |
| ALM_Z_STAT/ ALM_RSS_STAT | R     | Yes 5         | 0x00      | 0x44, 0x45            | 0x0000     | Alarm status register, z-axis or RSSinstead, if enabled           |
| ALM_X_PEAK               | R     | Yes 5         | 0x00      | 0x46, 0x47            | 0x0000     | Alarm peak value, x-axis                                          |
| ALM_Y_PEAK               | R     | Yes 5         | 0x00      | 0x48, 0x49            | 0x0000     | Alarm peak value, y-axis                                          |
| ALM_Z_PEAK/ ALM_RSS_PEAK | R     | Yes 5         | 0x00      | 0x4A, 0x4B            | 0x0000     | Alarm peak value, z-axis or RSS instead, if enabled               |
| TIME_STAMP_L             | R     | N/A           | 0x00      | 0x4D                  |            | Time stamp, lower word                                            |
|                          |       | N/A           |           | 0x4C,                 | 0x0000     |                                                                   |
| TIME_STAMP_H Reserved    | R N/A | N/A           | 0x00 0x00 | 0x4E, 0x4F 0x50, 0x51 | 0x0000 N/A | Time stamp, upper word Reserved                                   |
|                          |       |               | 0x00      | 0x52, 0x53            | N/A        |                                                                   |
| DAY_REV                  | R     | N/A           | 0x00      | 0x54, 0x55            |            | Firmware revision andfirmware day code                            |
| YEAR_MON                 | R     | N/A           |           |                       | N/A        | Firmware date (month, year)                                       |

## Data Sheet

## [ADcmXL3021](https://www.analog.com/ADcmXL3021?doc=ADcmXL3021.pdf)

| RegisterName              | R/W     | FlashBackup   | PAGE_ID   | Address      | Default       | Register Description                                           |
|---------------------------|---------|---------------|-----------|--------------|---------------|----------------------------------------------------------------|
| PROD_ID                   | R       | N/A           | 0x00      | 0x56, 0x57   | 0x0BCD        | Product identification forADcmXL3021models,equals decimal 3021 |
| SERIAL_NUM                | R       | N/A           | 0x00      | 0x58, 0x59   | N/A           | Serial number, lot-specific , unique per device                |
| USER_SCRATCH              | R/W     | Yes           | 0x00      | 0x5A, 0x5B   | N/A           | Scratch register for user ID option                            |
| REC_FLASH_CNT             | R       | N/A           | 0x00      | 0x5C, 0x5D   | N/A           | Write counter for data record portion of flash memory          |
| Reserved                  | N/A     | N/A           | 0x00      | 0x5E to 0x63 | N/A           | Reserved                                                       |
| MISC_CTRL                 | R/W     | No            | 0x00      | 0x64, 0x65   | N/A           | Miscellaneous control                                          |
| REC_INFO1                 | R       | Yes 5         | 0x00      | 0x66, 0x67   | 0x0000        | Record Information 1                                           |
| REC_INFO2                 | R       | Yes 5         | 0x00      | 0x68, 0x69   | 0x0000        | Record Information 2                                           |
| REC_CNTR                  | R       | Yes           | 0x00      | 0x6A, 0x6B   | 0x0000        | Record counter                                                 |
| ALM_X_FREQ                | R       | Yes 5         | 0x00      | 0x6C, 0x6D   | 0x0000        | Frequency bin of most severe alarm, x-axis                     |
| ALM_Y_FREQ                | R       | Yes 5         | 0x00      | 0x6E, 0x6F   | 0x0000        | Frequency bin of most severe alarm, y-axis                     |
| ALM_Z_FREQ                | R       | Yes 5         | 0x00      | 0x70, 0x71   | 0x0000        | Frequency bin of most severe alarm, z-axis                     |
| STAT_PNTR                 | R/W     | N/A           | 0x00      | 0x72, 0x73   | 0x0000        | Pointer for time domain statistics                             |
| X_STAT                    | R       | Yes 5         | 0x00      | 0x74, 0x75   | 0x0000        | Selected statistical value, x-axis                             |
| Y_STAT                    | R       | Yes 5         | 0x00      | 0x76, 0x77   | 0x0000        | Selected statistical value, y-axis                             |
| Z_STAT                    | R       | Yes 5         | 0x00      | 0x78, 0x79   | 0x0000        | Selected statistical value, z-axis                             |
| FUND_FREQ                 | R/W     | Yes           | 0x00      | 0x7A, 0x7B   | 0x0000        | Fundamental frequency setting                                  |
| FLASH_CNT_L               | R       | N/A           | 0x00      | 0x7C, 0x7D   | N/A           | Flash access counter, lower 16 bits                            |
| FLASH_CNT_U               | R       | N/A           | 0x00      | 0x7E, 0X7F   | 0x0000        | Flash access counter, upper 16 bits                            |
| PAGE_ID                   | R/W     | No            | 0x01      | 0x00, 0x01   | 0x0001        | Page identifier                                                |
| FIR_COEF_A00              | R/W     | Yes           | 0x01      | 0x02, 0x03   | 0x0006        | FIR Filter Bank A, Coefficient 0                               |
| FIR_COEF_A01              | R/W     | Yes           | 0x01      | 0x04, 0x05   | 0x0015        | FIR Filter Bank A, Coefficient 1                               |
| FIR_COEF_A02              | R/W     | Yes           | 0x01      | 0x06, 0x07   | 0x0035        | FIR Filter Bank A, Coefficient 2                               |
| FIR_COEF_A03              | R/W     | Yes           | 0x01      | 0x08, 0x09   | 0x006B        | FIR Filter Bank A, Coefficient 3                               |
| FIR_COEF_A04              | R/W     | Yes           | 0x01      | 0x0A, 0x0B   | 0x00C1        | FIR Filter Bank A, Coefficient 4                               |
| FIR_COEF_A05              | R/W     | Yes           | 0x01      | 0x0C, 0x0D   | 0x013C        | FIR Filter Bank A, Coefficient 5                               |
| FIR_COEF_A06              | R/W     | Yes           | 0x01      | 0x0E, 0x0F   | 0x01E0        | FIR Filter Bank A, Coefficient 6                               |
| FIR_COEF_A07              | R/W     | Yes           | 0x01      | 0x10, 0x11   | 0x02AE        | FIR Filter Bank A, Coefficient 7                               |
| FIR_COEF_A08              | R/W     | Yes           | 0x01      | 0x12, 0x13   | 0x03A2        | FIR Filter Bank A, Coefficient 8                               |
| FIR_COEF_A09              | R/W     | Yes           | 0x01      | 0x14, 0x15   | 0x04B3        | FIR Filter Bank A, Coefficient 9                               |
| FIR_COEF_A10              | R/W     | Yes           | 0x01      | 0x16, 0x17   | 0x05D2        | FIR Filter Bank A, Coefficient 10                              |
| FIR_COEF_A11              | R/W     | Yes           | 0x01      | 0x18, 0x19   | 0x06EE        | FIR Filter Bank A, Coefficient 11                              |
| FIR_COEF_A12              | R/W     | Yes           | 0x01      | 0x1A, 0x1B   | 0x07F2        | FIR Filter Bank A, Coefficient 12                              |
| FIR_COEF_A13              | R/W     | Yes           | 0x01      | 0x1C, 0x1D   | 0x08CB        | FIR Filter Bank A, Coefficient 13                              |
| FIR_COEF_A14              | R/W     | Yes           | 0x01      | 0x1E, 0x1F   | 0x0967        | FIR Filter Bank A, Coefficient 14                              |
| FIR_COEF_A15              | R/W     | Yes           | 0x01      | 0x20, 0x21   | 0x09B9        | FIR Filter Bank A, Coefficient 15                              |
| FIR_COEF_A16              | R/W     | Yes           | 0x01      | 0x22, 0x23   | 0x09B9        | FIR Filter Bank A, Coefficient 16                              |
| FIR_COEF_A17              | R/W     | Yes           | 0x01      | 0x24, 0x25   | 0x0967        | FIR Filter Bank A, Coefficient 17                              |
| FIR_COEF_A18              | R/W     | Yes           | 0x01      | 0x26, 0x27   | 0x08CB        | FIR Filter Bank A, Coefficient 18                              |
| FIR_COEF_A19              | R/W     | Yes           | 0x01      | 0x28, 0x29   | 0x07F2        | FIR Filter Bank A, Coefficient 19                              |
| FIR_COEF_A20              | R/W     | Yes           | 0x01      | 0x2A, 0x2B   | 0x06EE        | FIR Filter Bank A, Coefficient 20                              |
| FIR_COEF_A21              | R/W     | Yes           | 0x01      | 0x2C, 0x2D   | 0x05D2        | FIR Filter Bank A, Coefficient 21                              |
| FIR_COEF_A22              | R/W     | Yes           | 0x01      | 0x2E, 0x2F   | 0x04B3        | FIR Filter Bank A, Coefficient 22                              |
| FIR_COEF_A23              | R/W     | Yes           | 0x01      | 0x30, 0x31   | 0x03A2        | FIR Filter Bank A, Coefficient 23                              |
| FIR_COEF_A24              | R/W     | Yes           | 0x01      | 0x32, 0x33   | 0x02AE        | FIR Filter Bank A, Coefficient 24                              |
| FIR_COEF_A25              | R/W     | Yes           | 0x01      | 0x34, 0x35   | 0x01E0        | FIR Filter Bank A, Coefficient 25                              |
| FIR_COEF_A26              | R/W     | Yes           | 0x01      | 0x36, 0x37   | 0x013C        | FIR Filter Bank A, Coefficient 26                              |
| FIR_COEF_A27 FIR_COEF_A28 | R/W R/W | Yes Yes       | 0x01      | 0x38, 0x39   | 0x00C1 0x006B | FIR Filter Bank A, Coefficient 27                              |
|                           |         |               | 0x01      | 0x3A, 0x3B   |               | FIR Filter Bank A, Coefficient 28                              |

## [ADcmXL3021](https://www.analog.com/ADcmXL3021?doc=ADcmXL3021.pdf)

| RegisterName              | R/W     | FlashBackup   | PAGE_ID   | Address               | Default       | Register Description                                              |
|---------------------------|---------|---------------|-----------|-----------------------|---------------|-------------------------------------------------------------------|
| FIR_COEF_A29              | R/W     | Yes           | 0x01      | 0x3C, 0x3D            | 0x0035        | FIR Filter Bank A, Coefficient 29                                 |
| FIR_COEF_A30              | R/W     | Yes           | 0x01      | 0x3E, 0x3F            | 0x0015        | FIR Filter Bank A, Coefficient 30                                 |
| FIR_COEF_A31              | R/W     | Yes           | 0x01      | 0x40, 0x41            | 0x0006        | FIR Filter Bank A, Coefficient 31                                 |
| Reserved                  | N/A     | N/A           | 0x01      | 0x42 to 0x7F          | N/A           | Reserved                                                          |
| PAGE_ID                   | R/W     | No            | 0x02      | 0x00, 0x01            | 0x0002        | Page identifier                                                   |
| FIR_COEF_B00              | R/W     | Yes           | 0x02      | 0x02, 0x03            | 0x0004        | FIR Filter Bank B, Coefficient 0                                  |
| FIR_COEF_B01              | R/W     | Yes           | 0x02      | 0x04, 0x05            | 0x0001        | FIR Filter Bank B, Coefficient 1                                  |
| FIR_COEF_B02              | R/W     | Yes           | 0x02      | 0x06, 0x07            | 0xFFEC        | FIR Filter Bank B, Coefficient 2                                  |
| FIR_COEF_B03              | R/W     | Yes           | 0x02      | 0x08, 0x09            | 0xFFB9        | FIR Filter Bank B, Coefficient 3                                  |
| FIR_COEF_B04              | R/W     | Yes           | 0x02      | 0x0A, 0x0B            | 0xFF62        | FIR Filter Bank B, Coefficient 4                                  |
| FIR_COEF_B05              | R/W     | Yes           | 0x02      | 0x0C, 0x0D            | 0xFEF1        | FIR Filter Bank B, Coefficient 5                                  |
| FIR_COEF_B06              | R/W     | Yes           | 0x02      | 0x0E, 0x0F            | 0xFE8C        | FIR Filter Bank B, Coefficient 6                                  |
| FIR_COEF_B07              | R/W     | Yes           | 0x02      | 0x10, 0x11            | 0xFE76        | FIR Filter Bank B, Coefficient 7                                  |
| FIR_COEF_B08              | R/W     | Yes           | 0x02      | 0x12, 0x13            | 0xFEFE        | FIR Filter Bank B, Coefficient 8                                  |
| FIR_COEF_B09              | R/W     | Yes           | 0x02      | 0x14, 0x15            | 0x006B        | FIR Filter Bank B, Coefficient 9                                  |
| FIR_COEF_B10              | R/W     | Yes           | 0x02      | 0x16, 0x17            | 0x02E1        | FIR Filter Bank B, Coefficient 10                                 |
| FIR_COEF_B11              | R/W     | Yes           | 0x02      | 0x18, 0x19            | 0x0645        | FIR Filter Bank B, Coefficient 11                                 |
| FIR_COEF_B12              | R/W     | Yes           | 0x02      | 0x1A, 0x1B            | 0x0A34        | FIR Filter Bank B, Coefficient 12                                 |
| FIR_COEF_B13              | R/W     | Yes           | 0x02      | 0x1C, 0x1D            | 0x0E13        | FIR Filter Bank B, Coefficient 13                                 |
| FIR_COEF_B14              | R/W     | Yes           | 0x02      | 0x1E, 0x1F            | 0x1130        | FIR Filter Bank B, Coefficient 14                                 |
| FIR_COEF_B15              | R/W     | Yes           | 0x02      | 0x20, 0x21            | 0x12EC        | FIR Filter Bank B, Coefficient 15                                 |
| FIR_COEF_B16              | R/W     | Yes           | 0x02      | 0x22, 0x23            | 0x12EC        | FIR Filter Bank B, Coefficient 16                                 |
| FIR_COEF_B17              | R/W     | Yes           | 0x02      | 0x24, 0x25            | 0x1130        | FIR Filter Bank B, Coefficient 17                                 |
| FIR_COEF_B18              | R/W     | Yes           | 0x02      | 0x26, 0x27            | 0x0E13        | FIR Filter Bank B, Coefficient 18                                 |
| FIR_COEF_B19              | R/W     | Yes           | 0x02      | 0x28, 0x29            | 0x0A34        | FIR Filter Bank B, Coefficient 19                                 |
| FIR_COEF_B20              | R/W     | Yes           | 0x02      | 0x2A, 0x2B            | 0x0645        | FIR Filter Bank B, Coefficient 20                                 |
| FIR_COEF_B21              | R/W     | Yes           | 0x02      | 0x2C, 0x2D            | 0x02E1        | FIR Filter Bank B, Coefficient 21                                 |
| FIR_COEF_B22              | R/W     | Yes           | 0x02      | 0x2E, 0x2F            | 0x006B        | FIR Filter Bank B, Coefficient 22                                 |
| FIR_COEF_B23              | R/W     | Yes           | 0x02      | 0x30, 0x31            | 0XFEFE        | FIR Filter Bank B, Coefficient 23                                 |
| FIR_COEF_B24              | R/W     | Yes           | 0x02      | 0x32, 0x33            | 0xFE76        | FIR Filter Bank B, Coefficient 24                                 |
| FIR_COEF_B25              | R/W     | Yes           | 0x02      | 0x34, 0x35            | 0XFE8C        | FIR Filter Bank B, Coefficient 25                                 |
| FIR_COEF_B26              | R/W     | Yes           | 0x02      | 0x36, 0x37            | 0xFEF1        | FIR Filter Bank B, Coefficient 26                                 |
| FIR_COEF_B27              | R/W     | Yes           | 0x02      | 0x38, 0x39            | 0xFF62        | FIR Filter Bank B, Coefficient 27                                 |
| FIR_COEF_B28              | R/W     | Yes           | 0x02      | 0x3A, 0x3B            | 0xFFB9        | FIR Filter Bank B, Coefficient 28                                 |
| FIR_COEF_B29              | R/W     | Yes           | 0x02      | 0x3C, 0x3D            | 0xFFEC        | FIR Filter Bank B, Coefficient 29 30                              |
| FIR_COEF_B30              | R/W     | Yes           | 0x02      | 0x3E, 0x3F            | 0x0001        | FIR Filter Bank B, Coefficient                                    |
| FIR_COEF_B31              | R/W     | Yes           | 0x02      | 0x40, 0x41            | 0x0004        | FIR Filter Bank B, Coefficient 31                                 |
| Reserved                  | N/A     | N/A           | 0x02      | 0x42 to 0x7F          | N/A           | Reserved                                                          |
| PAGE_ID                   | R/W     | No            | 0x03      | 0x00, 0x01            | 0x0003        | Page identifier                                                   |
| FIR_COEF_C00              | R/W     | Yes           | 0x03      | 0x02, 0x03            | 0x0025        | FIR Filter Bank C, Coefficient 0                                  |
| FIR_COEF_C01              | R/W     | Yes           | 0x03      | 0x04, 0x05            | 0x005A        | FIR Filter Bank C, Coefficient 1                                  |
| FIR_COEF_C02              | R/W     | Yes           | 0x03      | 0x06, 0x07            | 0x008F        | FIR Filter Bank C, Coefficient 2                                  |
| FIR_COEF_C03              | R/W     | Yes           | 0x03      | 0x08, 0x09            | 0x009A        | FIR Filter Bank C, Coefficient 3                                  |
| FIR_COEF_C04              | R/W     | Yes           | 0x03      | 0x0A, 0x0B            | 0x004D        | FIR Filter Bank C, Coefficient 4                                  |
| FIR_COEF_C05              | R/W     | Yes           | 0x03 0x03 | 0x0C, 0x0D 0x0E, 0x0F | 0xFF8D        | FIR Filter Bank C, Coefficient 5                                  |
| FIR_COEF_C06              | R/W     | Yes           | 0x03      | 0x10, 0x11            | 0xFE74        | FIR Filter Bank C, Coefficient 6                                  |
| FIR_COEF_C07              | R/W R/W | Yes Yes       | 0x03      |                       | 0xFD5D        | FIR Filter Bank C, Coefficient 7                                  |
| FIR_COEF_C08 FIR_COEF_C09 | R/W     | Yes           | 0x03      | 0x12, 0x13 0x14, 0x15 | 0xFCDD 0xFD97 | FIR Filter Bank C, Coefficient 8 FIR Filter Bank C, Coefficient 9 |
| FIR_COEF_C10              | R/W     | Yes           | 0x03      | 0x16, 0x17            | 0x0003        | FIR Filter Bank C, Coefficient 10                                 |

| RegisterName              | R/W     | FlashBackup   | PAGE_ID   | Address               | Default       | Register Description                                                |
|---------------------------|---------|---------------|-----------|-----------------------|---------------|---------------------------------------------------------------------|
| FIR_COEF_C11              | R/W     | Yes           | 0x03      | 0x18, 0x19            | 0x0430        | FIR Filter Bank C, Coefficient 11                                   |
| FIR_COEF_C12              | R/W     | Yes           | 0x03      | 0x1A, 0x1B            | 0x09A2        | FIR Filter Bank C, Coefficient 12                                   |
| FIR_COEF_C13              | R/W     | Yes           | 0x03      | 0x1C, 0x1D            | 0x0F5F        | FIR Filter Bank C, Coefficient 13                                   |
| FIR_COEF_C14              | R/W     | Yes           | 0x03      | 0x1E, 0x1F            | 0x142C        | FIR Filter Bank C, Coefficient 14                                   |
| FIR_COEF_C15              | R/W     | Yes           | 0x03      | 0x20, 0x21            | 0x16E8        | FIR Filter Bank C, Coefficient 15                                   |
| FIR_COEF_C16              | R/W     | Yes           | 0x03      | 0x22, 0x23            | 0x16E8        | FIR Filter Bank C, Coefficient 16                                   |
| FIR_COEF_C17              | R/W     | Yes           | 0x03      | 0x24, 0x25            | 0x142C        | FIR Filter Bank C, Coefficient 17                                   |
| FIR_COEF_C18              | R/W     | Yes           | 0x03      | 0x26, 0x27            | 0x0F5F        | FIR Filter Bank C, Coefficient 18                                   |
| FIR_COEF_C19              | R/W     | Yes           | 0x03      | 0x28, 0x29            | 0x09A2        | FIR Filter Bank C, Coefficient 19                                   |
| FIR_COEF_C20              | R/W     | Yes           | 0x03      | 0x2A, 0x2B            | 0x0430        | FIR Filter Bank C, Coefficient 20                                   |
| FIR_COEF_C21              | R/W     | Yes           | 0x03      | 0x2C, 0x2D            | 0x0003        | FIR Filter Bank C, Coefficient 21                                   |
| FIR_COEF_C22              | R/W     | Yes           | 0x03      | 0x2E, 0x2F            | 0xFD97        | FIR Filter Bank C, Coefficient 22                                   |
| FIR_COEF_C23              | R/W     | Yes           | 0x03      | 0x30, 0x31            | 0xFCDD        | FIR Filter Bank C, Coefficient 23                                   |
| FIR_COEF_C24              | R/W     | Yes           | 0x03      | 0x32, 0x33            | 0xFD5D        | FIR Filter Bank C, Coefficient 24                                   |
| FIR_COEF_C25              | R/W     | Yes           | 0x03      | 0x34, 0x35            | 0xFE74        | FIR Filter Bank C, Coefficient 25                                   |
| FIR_COEF_C26              | R/W     | Yes           | 0x03      | 0x36, 0x37            | 0xFF8D        | FIR Filter Bank C, Coefficient 26                                   |
| FIR_COEF_C27              | R/W     | Yes           | 0x03      | 0x38, 0x39            | 0x004D        | FIR Filter Bank C, Coefficient 27                                   |
| FIR_COEF_C28              | R/W     | Yes           | 0x03      | 0x3A, 0x3B            | 0x009A        | FIR Filter Bank C, Coefficient 28                                   |
| FIR_COEF_C29              | R/W     | Yes           | 0x03      | 0x3C, 0x3D            | 0x008F        | FIR Filter Bank C, Coefficient 29                                   |
| FIR_COEF_C30              | R/W     | Yes           | 0x03      | 0x3E, 0x3F            | 0x005A        | FIR Filter Bank C, Coefficient 30                                   |
| FIR_COEF_C31              | R/W     | Yes           | 0x03      | 0x40, 0x41            | 0x0025        | FIR Filter Bank C, Coefficient 31                                   |
| Reserved                  | N/A     | N/A           | 0x03      | 0x42 to 0x7F          | N/A           | Reserved                                                            |
| PAGE_ID                   | R/W     | No            | 0x04      | 0x00, 0x01            | 0x0004        | Page identifier                                                     |
| FIR_COEF_D00              | R/W     | Yes           | 0x04      | 0x02, 0x03            | 0xFD94        | FIR Filter Bank D, Coefficient 0                                    |
| FIR_COEF_D01              | R/W     | Yes           | 0x04      | 0x04, 0x05            | 0xFD62        | FIR Filter Bank D, Coefficient 1                                    |
| FIR_COEF_D02              | R/W     | Yes           | 0x04      | 0x06, 0x07            | 0xFD2A        | FIR Filter Bank D, Coefficient 2                                    |
| FIR_COEF_D03              | R/W     | Yes           | 0x04      | 0x08, 0x09            | 0xFCE8        | FIR Filter Bank D, Coefficient 3                                    |
| FIR_COEF_D04              | R/W     | Yes           | 0x04      | 0x0A, 0x0B            | 0xFC9C        | FIR Filter Bank D, Coefficient 4                                    |
| FIR_COEF_D05              | R/W     | Yes           | 0x04      | 0x0C, 0x0D            | 0xFC43        | FIR Filter Bank D, Coefficient 5                                    |
| FIR_COEF_D06              | R/W     | Yes           | 0x04      | 0x0E, 0x0F            | 0xFBD7        | FIR Filter Bank D, Coefficient 6                                    |
| FIR_COEF_D07              | R/W     | Yes           | 0x04      | 0x10, 0x11            | 0xFB52        | FIR Filter Bank D, Coefficient 7                                    |
| FIR_COEF_D08              | R/W     | Yes           | 0x04      | 0x12, 0x13            | 0xFAAB        | FIR Filter Bank D, Coefficient 8                                    |
| FIR_COEF_D09              | R/W     | Yes           | 0x04      | 0x14, 0x15            | 0xF9D2        | FIR Filter Bank D, Coefficient 9                                    |
| FIR_COEF_D10              | R/W     | Yes           | 0x04      | 0x16, 0x17            | 0xF8AB        | FIR Filter Bank D, Coefficient 10                                   |
| FIR_COEF_D11              | R/W     | Yes           | 0x04      | 0x18, 0x19            | 0xF702        | FIR Filter Bank D, Coefficient 11                                   |
| FIR_COEF_D12              | R/W     | Yes           | 0x04      | 0x1A, 0x1B            | 0xF468        | FIR Filter Bank D, Coefficient 12                                   |
| FIR_COEF_D13              | R/W     | Yes           | 0x04      | 0x1C, 0x1D            | 0xEFBC        | FIR Filter Bank D, Coefficient 13                                   |
| FIR_COEF_D14              | R/W     | Yes           | 0x04      | 0x1E, 0x1F            | 0xE4DC        | FIR Filter Bank D, Coefficient 14                                   |
| FIR_COEF_D15              | R/W     | Yes           | 0x04      | 0x20, 0x21            | 0xAE85        | FIR Filter Bank D, Coefficient 15                                   |
| FIR_COEF_D16              | R/W     | Yes           | 0x04      | 0x22, 0x23            | 0x517B        | FIR Filter Bank D, Coefficient 16                                   |
| FIR_COEF_D17              | R/W     | Yes           | 0x04      | 0x24, 0x25            | 0x1B24        | FIR Filter Bank D, Coefficient 17                                   |
| FIR_COEF_D18              | R/W     | Yes           | 0x04      | 0x26, 0x27            | 0x1044        | FIR Filter Bank D, Coefficient 18                                   |
| FIR_COEF_D19              | R/W     | Yes           | 0x04      | 0x28, 0x29            | 0x0B98        | FIR Filter Bank D, Coefficient 19                                   |
| FIR_COEF_D21              | R/W     |               | 0x04      |                       | 0x0755        |                                                                     |
|                           |         | Yes           |           | 0x2C, 0x2D            |               | FIR Filter Bank D, Coefficient 21                                   |
| FIR_COEF_D22              | R/W     | Yes           | 0x04 0x04 | 0x2E, 0x2F 0x30, 0x31 | 0x062E        | FIR Filter Bank D, Coefficient 22 FIR Filter Bank D, Coefficient 23 |
| FIR_COEF_D23 FIR_COEF_D24 | R/W R/W | Yes Yes       | 0x04      | 0x32, 0x33            | 0x04AE        | FIR Filter Bank D, Coefficient 24                                   |
| FIR_COEF_D25              | R/W     | Yes           | 0x04      | 0x34, 0x35            | 0x0555 0x0429 | FIR Filter Bank D, Coefficient 25                                   |
| FIR_COEF_D26              | R/W     | Yes           | 0x04      | 0x36, 0x37            |               | FIR Filter Bank D, Coefficient                                      |
|                           |         |               |           |                       | 0x03BD        | 26                                                                  |

## [ADcmXL3021](https://www.analog.com/ADcmXL3021?doc=ADcmXL3021.pdf)

| RegisterName              | R/W     | FlashBackup   | PAGE_ID   | Address               | Default       | Register Description                                              |
|---------------------------|---------|---------------|-----------|-----------------------|---------------|-------------------------------------------------------------------|
| FIR_COEF_D27              | R/W     | Yes           | 0x04      | 0x38, 0x39            | 0x0364        | FIR Filter Bank D, Coefficient                                    |
| FIR_COEF_D28              | R/W     | Yes           | 0x04      | 0x3A, 0x3B            | 0x0318        | 27 FIR Filter Bank D, Coefficient 28                              |
| FIR_COEF_D29              | R/W     | Yes           | 0x04      | 0x3C, 0x3D            | 0x02D6        | FIR Filter Bank D, Coefficient 29                                 |
| FIR_COEF_D30              | R/W     | Yes           | 0x04      | 0x3E, 0x3F            | 0x029E        | FIR Filter Bank D, Coefficient 30                                 |
| FIR_COEF_D31              | R/W     | Yes           | 0x04      | 0x40, 0x41            | 0x026C        | FIR Filter Bank D, Coefficient 31                                 |
| Reserved                  | N/A     | N/A           | 0x04      | 0x42 to 0x7F          | N/A           | Reserved                                                          |
| PAGE_ID                   | R/W     | No            | 0x05      | 0x00, 0x01            | 0x0005        | Page identifier                                                   |
| FIR_COEF_E00              | R/W     | Yes           | 0x05      | 0x02, 0x03            | 0xFF2B        | FIR Filter Bank E, Coefficient 0                                  |
| FIR_COEF_E01              | R/W     | Yes           | 0x05      | 0x04, 0x05            | 0xFEF0        | FIR Filter Bank E, Coefficient 1                                  |
| FIR_COEF_E02              | R/W     | Yes           | 0x05      | 0x06, 0x07            | 0xFEAA        | FIR Filter Bank E, Coefficient 2                                  |
| FIR_COEF_E03              | R/W     | Yes           | 0x05      | 0x08, 0x09            | 0xFE59        | FIR Filter Bank E, Coefficient 3                                  |
| FIR_COEF_E04              | R/W     | Yes           | 0x05      | 0x0A, 0x0B            | 0xFDFB        | FIR Filter Bank E, Coefficient 4                                  |
| FIR_COEF_E05              | R/W     | Yes           | 0x05      | 0x0C, 0x0D            | 0xFD8C        | FIR Filter Bank E, Coefficient 5                                  |
| FIR_COEF_E06              | R/W     | Yes           | 0x05      | 0x0E, 0x0F            | 0xFD09        | FIR Filter Bank E, Coefficient 6                                  |
| FIR_COEF_E07              | R/W     | Yes           | 0x05      | 0x10, 0x11            | 0xFC6B        | FIR Filter Bank E, Coefficient 7                                  |
| FIR_COEF_E08              | R/W     | Yes           | 0x05      | 0x12, 0x13            | 0xFBA8        | FIR Filter Bank E, Coefficient 8                                  |
| FIR_COEF_E09              | R/W     | Yes           | 0x05      | 0x14, 0x15            | 0xFAB1        | FIR Filter Bank E, Coefficient 9                                  |
| FIR_COEF_E10              | R/W     | Yes           | 0x05      | 0x16, 0x17            | 0xF96B        | FIR Filter Bank E, Coefficient 10                                 |
| FIR_COEF_E11              | R/W     | Yes           | 0x05      | 0x18, 0x19            | 0xF7A1        | FIR Filter Bank E, Coefficient 11                                 |
| FIR_COEF_E12              | R/W     | Yes           | 0x05      | 0x1A, 0x1B            | 0xF4E5        | FIR Filter Bank E, Coefficient 12                                 |
| FIR_COEF_E13              | R/W     | Yes           | 0x05      | 0x1C, 0x1D            | 0xF017        | FIR Filter Bank E, Coefficient 13                                 |
| FIR_COEF_E14              | R/W     | Yes           | 0x05      | 0x1E, 0x1F            | 0xE512        | FIR Filter Bank E, Coefficient 14                                 |
| FIR_COEF_E15              | R/W     | Yes           | 0x05      | 0x20, 0x21            | 0xAE97        | FIR Filter Bank E, Coefficient 15                                 |
| FIR_COEF_E16              | R/W     | Yes           | 0x05      | 0x22, 0x23            | 0x5169        | FIR Filter Bank E, Coefficient 16                                 |
| FIR_COEF_E17              | R/W     | Yes           | 0x05      | 0x24, 0x25            | 0x1AEE        | FIR Filter Bank E, Coefficient 17                                 |
| FIR_COEF_E18              | R/W     | Yes           | 0x05      | 0x26, 0x27            | 0x0FE9        | FIR Filter Bank E, Coefficient 18                                 |
| FIR_COEF_E19              | R/W     | Yes           | 0x05      | 0x28, 0x29            | 0x0B1B        | FIR Filter Bank E, Coefficient 19                                 |
| FIR_COEF_E20              | R/W     | Yes           | 0x05      | 0x2A, 0x2B            | 0x085F        | FIR Filter Bank E, Coefficient 20                                 |
| FIR_COEF_E21              | R/W     | Yes           | 0x05      | 0x2C, 0x2D            | 0x0695        | FIR Filter Bank E, Coefficient 21                                 |
| FIR_COEF_E22              | R/W     | Yes           | 0x05      | 0x2E, 0x2F            | 0x054F        | FIR Filter Bank E, Coefficient 22                                 |
| FIR_COEF_E23              | R/W     | Yes           | 0x05      | 0x30, 0x31            | 0x0458        | FIR Filter Bank E, Coefficient 23                                 |
| FIR_COEF_E24              | R/W     | Yes           | 0x05      | 0x32, 0x33            | 0x0395        | FIR Filter Bank E, Coefficient 24                                 |
| FIR_COEF_E25              | R/W     | Yes           | 0x05      | 0x34, 0x35            | 0x02F7        | FIR Filter Bank E, Coefficient 25                                 |
| FIR_COEF_E26              | R/W     | Yes           | 0x05      | 0x36, 0x37            | 0x0274        | FIR Filter Bank E, Coefficient 26                                 |
| FIR_COEF_E27              | R/W     | Yes           | 0x05      | 0x38, 0x39            | 0x0205        | FIR Filter Bank E, Coefficient 27                                 |
| FIR_COEF_E28              | R/W     | Yes           | 0x05      | 0x3A, 0x3B            | 0x01A7        | FIR Filter Bank E, Coefficient 28                                 |
| FIR_COEF_E29              | R/W     | Yes           | 0x05      | 0x3C, 0x3D            | 0x0156        | FIR Filter Bank E, Coefficient 29                                 |
| FIR_COEF_E30              | R/W     | Yes           | 0x05      | 0x3E, 0x3F            | 0x0110        | FIR Filter Bank E, Coefficient 30                                 |
| FIR_COEF_E31              | R/W     | Yes           | 0x05      | 0x40, 0x41            | 0x00D5        | FIR Filter Bank E, Coefficient 31                                 |
| Reserved                  | N/A     | N/A           | 0x05      | 0x42 to 0x7F          | N/A           | Reserved                                                          |
| PAGE_ID                   | R/W     | No            | 0x06      | 0x00, 0x01            | 0x0006        | Page identifier                                                   |
| FIR_COEF_F01              | R/W     | Yes           | 0x06      | 0x02, 0x03 0x04, 0x05 | 0xFFD9 0xFFB9 | FIR Filter Bank F, Coefficient 1                                  |
| FIR_COEF_F00              | R/W     | Yes           | 0x06      |                       |               | FIR Filter Bank F, Coefficient 0                                  |
| FIR_COEF_F02              | R/W     | Yes           | 0x06      | 0x06, 0x07            | 0xFF8C        | FIR Filter Bank F, Coefficient 2                                  |
| FIR_COEF_F03              | R/W     | Yes           | 0x06      | 0x08, 0x09            | 0xFF50        | FIR Filter Bank F, Coefficient 3                                  |
|                           |         |               |           |                       |               | FIR Filter Bank F, Coefficient 4                                  |
| FIR_COEF_F04              | R/W     | Yes           | 0x06      | 0x0A, 0x0B            | 0xFF02        | FIR Filter Bank F, Coefficient                                    |
| FIR_COEF_F05              | R/W     | Yes           | 0x06      | 0x0C, 0x0D            | 0xFE9E        | 5                                                                 |
| FIR_COEF_F06 FIR_COEF_F07 | R/W R/W | Yes Yes       | 0x06 0x06 | 0x0E, 0x0F 0x10, 0x11 | 0xFE1F 0xFD7D | FIR Filter Bank F, Coefficient 6 FIR Filter Bank F, Coefficient 7 |
| FIR_COEF_F08              | R/W     | Yes           | 0x06      | 0x12, 0x13            | 0xFCB0        | FIR Filter Bank F, Coefficient 8                                  |

<!-- image -->

| RegisterName   | R/W   | FlashBackup   | PAGE_ID   | Address      | Default   | Register Description              |
|----------------|-------|---------------|-----------|--------------|-----------|-----------------------------------|
| FIR_COEF_F09   | R/W   | Yes           | 0x06      | 0x14, 0x15   | 0xFBA8    | FIR Filter Bank F, Coefficient 9  |
| FIR_COEF_F10   | R/W   | Yes           | 0x06      | 0x16, 0x17   | 0xFA49    | FIR Filter Bank F, Coefficient 10 |
| FIR_COEF_F11   | R/W   | Yes           | 0x06      | 0x18, 0x19   | 0xF861    | FIR Filter Bank F, Coefficient 11 |
| FIR_COEF_F12   | R/W   | Yes           | 0x06      | 0x1A, 0x1B   | 0xF581    | FIR Filter Bank F, Coefficient 12 |
| FIR_COEF_F13   | R/W   | Yes           | 0x06      | 0x1C, 0x1D   | 0xF089    | FIR Filter Bank F, Coefficient 13 |
| FIR_COEF_F14   | R/W   | Yes           | 0x06      | 0x1E, 0x1F   | 0xE558    | FIR Filter Bank F, Coefficient 14 |
| FIR_COEF_F15   | R/W   | Yes           | 0x06      | 0x20, 0x21   | 0xAEAF    | FIR Filter Bank F, Coefficient 15 |
| FIR_COEF_F16   | R/W   | Yes           | 0x06      | 0x22, 0x23   | 0x5151    | FIR Filter Bank F, Coefficient 16 |
| FIR_COEF_F17   | R/W   | Yes           | 0x06      | 0x24, 0x25   | 0x1AA8    | FIR Filter Bank F, Coefficient 17 |
| FIR_COEF_F18   | R/W   | Yes           | 0x06      | 0x26, 0x27   | 0x0F77    | FIR Filter Bank F, Coefficient 18 |
| FIR_COEF_F19   | R/W   | Yes           | 0x06      | 0x28, 0x29   | 0x0A7F    | FIR Filter Bank F, Coefficient 19 |
| FIR_COEF_F20   | R/W   | Yes           | 0x06      | 0x2A, 0x2B   | 0x079F    | FIR Filter Bank F, Coefficient 20 |
| FIR_COEF_F21   | R/W   | Yes           | 0x06      | 0x2C, 0x2D   | 0x05B7    | FIR Filter Bank F, Coefficient 21 |
| FIR_COEF_F22   | R/W   | Yes           | 0x06      | 0x2E, 0x2F   | 0x0458    | FIR Filter Bank F, Coefficient 22 |
| FIR_COEF_F23   | R/W   | Yes           | 0x06      | 0x30, 0x31   | 0x0350    | FIR Filter Bank F, Coefficient 23 |
| FIR_COEF_F24   | R/W   | Yes           | 0x06      | 0x32, 0x33   | 0x0283    | FIR Filter Bank F, Coefficient 24 |
| FIR_COEF_F25   | R/W   | Yes           | 0x06      | 0x34, 0x35   | 0x01E1    | FIR Filter Bank F, Coefficient 25 |
| FIR_COEF_F26   | R/W   | Yes           | 0x06      | 0x36, 0x37   | 0x0162    | FIR Filter Bank F, Coefficient 26 |
| FIR_COEF_F27   | R/W   | Yes           | 0x06      | 0x38, 0x39   | 0x00FE    | FIR Filter Bank F, Coefficient 27 |
| FIR_COEF_F28   | R/W   | Yes           | 0x06      | 0x3A, 0x3B   | 0x00B0    | FIR Filter Bank F, Coefficient 28 |
| FIR_COEF_F29   | R/W   | Yes           | 0x06      | 0x3C, 0x3D   | 0x0074    | FIR Filter Bank F, Coefficient 29 |
| FIR_COEF_F30   | R/W   | Yes           | 0x06      | 0x3E, 0x3F   | 0x0047    | FIR Filter Bank F, Coefficient 30 |
| FIR_COEF_F31   | R/W   | Yes           | 0x06      | 0x40, 0x41   | 0x0027    | FIR Filter Bank F, Coefficient 31 |
| Reserved       | N/A   | N/A           | 0x06      | 0x42 to 0x7F | N/A       | Reserved                          |

## USER REGISTER DETAILS

## PAGE\_ID (PAGE NUMBER)

The contents in the PAGE\_ID register (see Table 21 and Table 22) contain the current page setting. The ADcmXL3021 has output and control registers split over seven pages, numbered from zero to six. Page 1 to Page 6 are the configurable filter coefficients. Page 0 contains user registers for various configuration options and outputs.

As an example, write 0x8002 to select Page 2 for SPI-based user access. After the register map is pointed to Page 2, any register writes are used to configure the Filter Bank B coefficients. The ADcmXL3021 user register map (see Table 20) provides a functional summary of each page and the page assignments associated with each user accessible register.

Table 21. PAGE\_ID Register Definition

| Page 1   | Addresses   | Default   | Access   | Flash Backup   |
|----------|-------------|-----------|----------|----------------|
| 0x0000   | 0x00, 0x01  | 0x0000    | R/W      | No             |

1 This register is located at Address 0x00 and Address 0x01 of each page.

## Table 22. PAGE\_ID Bit Descriptions

| Bits   | Description                          |
|--------|--------------------------------------|
| [15:0] | Page number, binary numerical format |

## TEMP\_OUT (INTERNAL TEMPERATURE)

The TEMP\_OUT register (see Table 23 and Table 24) provides a measurement (uncalibrated) of the temperature inside of the unit at the conclusion of a data capture or analysis event, when the ADcmXL3021 is operating in the MFFT, AFFT, or MTC mode of operation (see Table 55). Table 25 shows several examples of the data format for the TEMP\_OUT register. The TEMP\_OUT value is related to the sensed temperature by the following relationship:

TEMP\_OUT = ( Temperature - 460°C)/( -0.46°C/LSB)

Table 23. TEMP\_OUT Register Definition

| Page   | Addresses   | Default   | Access   | Flash Backup   |
|--------|-------------|-----------|----------|----------------|
| 0x00   | 0x02, 0x03  | 0x8000 1  | R        | No             |

1 The default value is valid until the first capture event, when the measurement data replaces the default value.

## Table 24. TEMP\_OUT Bit Definitions

| Bits   | Description                                                                                                                       |
|--------|-----------------------------------------------------------------------------------------------------------------------------------|
| [15:0] | Internal temperature data. Offset binary format is twos complement,1LSB=-0.46°C and there isan offset of 460°C, except inRTCmode. |

Table 25. TEMP\_OUT Data Format Examples

| Temperature   |   Decimal | Hex    | Binary              |
|---------------|-----------|--------|---------------------|
| +105°C        |       772 | 0x0303 | 0000 0011 0000 0011 |
| +60°C         |       870 | 0x0365 | 0000 0011 0110 0101 |
| +20°C         |       957 | 0x03BC | 0000 0011 1011 1100 |
| +0°C          |      1000 | 0x03E8 | 0000 0011 1110 1000 |
| -40°C         |      1087 | 0x043F | 0000 0100 0011 1111 |

## SUPPLY\_OUT (POWER SUPPLY VOLTAGE)

The SUPPLY\_OUT register (see Table 26 and Table 27) provides a measurement (uncalibrated) of the voltage between the VDD and GND pins at the start of a data capture event, when the ADcmXL3021 is operating in the MFFT, AFFT, or MTC mode of operation (see Table 55). Table 28 shows several examples of the data format for the SUPPLY\_OUT register.

## Table 26. SUPPLY\_OUT Register Definition

| Page   | Addresses   | Default   | Access   | Flash Backup   |
|--------|-------------|-----------|----------|----------------|
| 0x00   | 0x04, 0x05  | 0x8000 1  | R        | No             |

1 Default value is valid until the first capture event, when the measurement data replaces the default value

## Table 27. SUPPLY\_OUT Bit Descriptions

| Bits    | Description                                                    |
|---------|----------------------------------------------------------------|
| [15:12] | Do not use                                                     |
| [11:0]  | Voltage betweenVDD and GNDpins. 0x0000 = 0 V, 1 LSB = 3.22 mV. |

## Table 28. Power Supply Data Format Examples

| Supply Level (V)   |   LSB | Hex   | Binary         |
|--------------------|-------|-------|----------------|
| 3.6                |  1117 | 0x45D | 0100 0101 1101 |
| 3.3 + 0.003226     |  1025 | 0x401 | 0100 0000 0001 |
| 3.3                |  1024 | 0x400 | 0100 0000 0000 |
| 3.3 - 0.003226     |  1023 | 0x3FF | 0011 1111 1111 |
| 3.0                |   930 | 0x3A2 | 0011 1010 0010 |

## FFT\_AVG1, SPECTRAL AVERAGING

The FFT\_AVG1 register (see Table 29 and Table 30) contains the user-configurable, spectral averaging settings for the SR0 and SR1 sample rate settings (see the AVG\_CNT register in Table 86). These settings determine the number of FFT records that the ADcmXL3021 averages when generating the final FFT result. When using the factory default value for the FFT\_AVG1 register, the FFT result for the sample rate, SR0, contains an average of eight separate FFT records. The FFT result for the SR1 sample rate contains a single FFT record (no spectral averaging).

Increasing the number of FFT averages increases the overall time for a record to be generated. The FFT averaging sequence is as follows: 4096 samples are measured, FFT on 4096 samples, Accumulate FFT result, repeat until the number of FFTs specified in FFT\_AVG1 or FFT\_AVG2 is reached. Then compute the average FFT, average power supply, and average temperature. The power supply and temperature are measured after the 4096 samples are captured each time and accumulated.

Table 29. FFT\_AVG1 Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x06, 0x07  | 0x0108    | R/W      | Yes            |

## Table 30. FFT\_AVG1 Bit Descriptions

| Bits   | Description                                                    |
|--------|----------------------------------------------------------------|
| [15:8] | Number of records, SR1, 8 bit unsigned format, range: 1 to 255 |
| [7:0]  | Number of records, SR0, 8 bit unsigned format, range: 1 to 255 |

To eliminate averaging on both SR0 and SR1 settings, set FFT\_AVG1 = 0x0101 by using the following codes (in order) for the DIN serial string: 0x8601 and 0x8701. Table 31 shows three more examples of FFT\_AVG1 settings, along with the number of records that each setting corresponds to, that produces each FFT\_AVG1 value.

Table 31. FFT\_AVG1 Formatting Examples

|               | Numberof FFT Records   | Numberof FFT Records   |
|---------------|------------------------|------------------------|
| FFT_AVG1Value | SR0                    | SR1                    |
| 0x040C        | 12                     | 4                      |
| 0x0E1A        | 26                     | 14                     |
| 0xFF42        | 66                     | 255                    |

## FFT\_AVG2, SPECTRAL AVERAGING

The FFT\_AVG2 register (see Table 32 and Table 33) contains the user-configurable, spectral averaging settings for the SR2 and SR3 sample rate settings (see the AVG\_CNT register in Table 86). These settings determine the number of FFT records that the ADcmXL3021 averages when generating the final FFT result. When using the factory default value for the FFT\_AVG2 register, the FFT result for the SR2 and SR3 sample rates contains a single FFT record (no spectral averaging).

Table 32. FFT\_AVG2 Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x08, 0x09  | 0x0101    | R/W      | Yes            |

## Table 33. FFT\_AVG2 Bit Descriptions

| Bits   | Description                                                    |
|--------|----------------------------------------------------------------|
| [15:8] | Number of records, SR3, 8 bit unsigned format, range: 1 to 255 |
| [7:0]  | Number of records, SR2, 8 bit unsigned format, range: 1 to 255 |

To configure the ADcmXL3021 to average two FFT records for both SR2 and SR3 settings, set FFT\_AVG2 = 0x0202 by using the following codes (in order) for the DIN serial string: 0x8802 and 0x8702. Table 34 shows three more examples of FFT\_AVG2 settings, along with the number of records that each setting correspond to, along with the DIN code sequence that produces each FFT\_AVG2 value.

## Table 34. FFT\_AVG2 Formatting Examples

|               | Numberof FFT Records   | Numberof FFT Records   |
|---------------|------------------------|------------------------|
| FFT_AVG2Value | SR2                    | SR3                    |
| 0x0407        | 7                      | 4                      |
| 0x0D50        | 80                     | 13                     |
| 0x2FFA        | 250                    | 47                     |

## BUF\_PNTR, BUFFER POINTER

The BUF\_PNTR (see Table 35 and Table 36) controls the data sample that loads to the X\_BUF register (see Table 40), the Y\_BUF register (see Table 44), and the Z\_BUF/RSS\_BUF register (see Table 46), from the user data buffers. The BUF\_PNTR register contains 0x0000 at the conclusion of each capture event and increments with each read of the X\_BUF, Y\_BUF, or Z\_BUF/RSS\_BUF register. When BUF\_PNTR contains the maximum value (2047 or 4095, see Table 36), the next increment (caused by a read request of either X\_BUF, Y\_BUF, or Z\_RSS\_BUF) causes the value in the BUF\_PNTR register to wrap around to 0x0000. The depth of the user data buffer and, therefore, the range of numbers that BUF\_PNTR supports, depends on the mode of operation, according to the setting in the REC\_CTRL register, Bit0 and Bit 1 (see Table 55).

## Table 35. BUF\_PNTR Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x0A, 0x0B  | 0x0000    | R/W      | No             |

## Table 36. BUF\_PNTR Bit Descriptions

| Bits    | Description                                                                                         |
|---------|-----------------------------------------------------------------------------------------------------|
| [15:12] | Set these bits to 0, when writing to this register                                                  |
| [11:0]  | Buffer pointer value. Range = 0 to 2047 (in MFFT mode or AFFT mode. Range = 0 to 4095 (in MTC mode) |

Writing a number to the BUF\_PNTR register causes that sample number for each user data buffer (x, y, and z) to load to the X\_BUF register, Y\_BUF register, and Z\_BUF/RSS\_BUF register. For example, using the following code sequence on DIN writes 0x031C to the BUF\_PNTR register: 0x8A1C and 0x8B03. This write causes sample pointer to x (796), y (796) and z (796) from each user data buffer to load to X\_BUF, Y\_BUF, and Z\_BUF/RSS\_BUF (see Figure 51).

16806-034

Figure 51. Register Activity, BUF\_PNTR = 0x031C (MFFT Mode or AFFT Mode)

<!-- image -->

## REC\_PNTR, RECORD POINTER

The REC\_PNTR register (see Table 37 and Table 38) provides access to the statistical metrics from MTC capture events and spectral records from MFFT or AFFT capture events in the data storage bank. Each spectral analysis record in the data storage bank has a number from 0 to 9 that identifies the number to write to the REC\_PNTR register, Bits[3:0]. This write loads that spectral record to the user data buffers. After the data from the spectral record is in the user data buffers, the BUF\_PNTR register (see Table 36), X\_BUF register (see Table 41), Y\_BUF register (see Table 45), and Z\_RSS\_BUF register (see Table 47) provide access to the data in the specified data record through the SPI. For example, using the following DIN codes to set REC\_PNTR = 0x0007 causes Spectral Record 7 to load to the user data buffers. See Table 39 for additional examples.

Each statistical record in the data storage bank has a number from 0 through 31 that identifies the number to write to the REC\_PNTR register, Bits[12:8]. This write loads that statistical record to the user statistical buffers. After the data from a statistical record is in the user statistical buffers, the STAT\_PNTR register (see Table 135), X\_STAT register (see Table 137), Y\_STAT register (see Table 140), and Z\_STAT register (see Table 142) provides access to this data through the SPI. For example, using the following DIN codes to set REC\_PNTR = 0x0B00 causes Statistical Record 11 to load to the user statistical buffers: 0x8C00 and 0x8D0B. See Table 39 for additional examples.

Table 37. REC\_PNTR Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x0C, 0x0D  | 0x0000    | R/W      | No             |

## Table 38. REC\_PNTR Bit Descriptions

| Bits    | Description                                                                         |
|---------|-------------------------------------------------------------------------------------|
| [15:12] | Set these bits to 0 when writing to this register                                   |
| [12:8]  | Record number, statistics(fromMTCmodeonly),range= 0 to 31                           |
| [7:4]   | Set these bits to 0 when writing to this register                                   |
| [3:0]   | Record number, spectral records, range = 0 to 9 (from MFFT mode and AFFT mode only) |

## Table 39. REC\_PNTR Example Use Cases

| DIN Codes      | REC_PNTR Value   | Description                                                                                                 |
|----------------|------------------|-------------------------------------------------------------------------------------------------------------|
| 0x8C05         | 0x0005           | Spectral Record 5 loads to user data buffers.                                                               |
| 0x8D0C         | 0x0C00           | Statistical Record 12 loads to the user statistics buffer                                                   |
| 0x8C03, 0x8D15 | 0x1503           | Spectral Record 3 loads to user data buffers and Statistical Record 21 loads to the user statistics buffer. |

## X\_BUF, BUFFER ACCESS REGISTER, X-AXIS

The X\_BUF register (see Table 40 and Table 41) provides access to x-axis vibration data. When operating in MTC, MFFT, or AFFT mode, X\_BUF contains the x-axis data sample from the user data buffer, which the BUF\_PNTR register (see Table 36) commands. In RTS mode, data is streamed out from the SPI interface and registers data buffers are not used.

In modes other than RTS when data is stored, after a read of the upper byte and lower byte, the buffer automatically updates with the next data sample in the internal buffer, the BUF\_PNTR is autoincremented. For MTC mode, the buffer can support 4096 time domain samples and BUF\_PNTR can advance from 0 to 4095. For AFFT and MFFT mode, the buffer supports 2048 FFT bin values and BUF\_PNTR can advance from 0 to 2047.

Table 40. X\_BUF Register Definition

| Addresses   | Default 1      | Access   | Flash Backup   |
|-------------|----------------|----------|----------------|
| 0x0E, 0x0F  | Not applicable | R        | No             |

## Table 41. X\_BUF Bit Descriptions

| Bits   | Description   |
|--------|---------------|
| [15:0] | X-axis data   |

The numerical format of the data in X\_BUF depends on the mode of operation (see the REC\_CTRL register, Bits[1:0] in Table 55). When operating in MTC mode (REC\_CTRL, Bits[1:0] = 10), the data in the X\_BUF register uses a 16-bit, offset binary format, where 1 LSB represents ~0.001907 g . This format provides enough numerical range to support the measurement range (±50 g ) and the maximum bias/offset from the core sensor. Table 42 shows several examples of how to translate these codes to the acceleration magnitude that they represent for MTC mode, assuming nominal sensitivity and zero bias error.

MTC mode data in the X\_BUF register uses a 16-bit, twos complement format, where 1 LSB represents ~0.001907 g . This format provides enough numerical range to support the measurement range (±50 g ) and the maximum bias and offset from the core sensor. Table 42 shows several examples of how to translate these codes into the acceleration magnitude that they represent, assuming nominal sensitivity and zero bias error.

If velocity calculations are enabled using Bit 5 in the REC\_CTRL register, calculated velocity data is stored in place of default acceleration value.

Table 42. MTC Mode Data Format Examples

|   Acceleration ( g ) |     LSB | Hex    | Binary              |
|----------------------|---------|--------|---------------------|
|             +62.4867 | +32,767 | 0x7FFF | 0111 1111 1111 1111 |
|                  +50 | +26,219 | 0x666B | 0110 0110 0110 1011 |
|            +0.003814 |      +2 | 0x0002 | 0000 0000 0000 0010 |
|            +0.001907 |      +1 | 0x0001 | 0000 0000 0000 0001 |
|                    0 |       0 | 0x0000 | 0000 0000 0000 0000 |
|            -0.001907 |      -1 | 0xFFFF | 1111 1111 1111 1111 |
|            -0.003814 |      -2 | 0xFFFE | 1111 1111 1111 1110 |
|                  -50 | -26,220 | 0x9995 | 1001 1001 1001 0101 |
|             -62.4886 | -32,768 | 0x8000 | 1000 0000 0000 0000 |

When operating in the FFT modes, either MFFT mode (REC\_ CTRL1, Bits[1:0] = 00) or AFFT mode (REC\_CTRL, Bits[1:0] = 01), the X\_BUF register uses a 16-bit, unsigned binary format. Due to the increased resolution capability of FFT values because of averaging, converting the X\_BUF value to acceleration is accomplished using the following equation:

<!-- formula-not-decoded -->

Table 43 shows the conversion from X\_BUF value to acceleration.

Table 43. Spectral Analysis Data Format Examples

|   Acceleration(m g ) |   X_BUFValue |   Numberof FFT Averages |
|----------------------|--------------|-------------------------|
|             62467.43 |        32767 |                       1 |
|              6766.87 |        26200 |                       1 |
|                 1.02 |          200 |                       1 |
|                 0.95 |            1 |                       1 |
|             64377.71 |        39000 |                       8 |
|              3060.90 |        30000 |                       8 |
|                 0.12 |            8 |                       8 |
|                 0.95 |         2048 |                       2 |
|                 1.91 |         2048 |                       1 |

## Y\_BUF, BUFFER ACCESS REGISTER, Y-AXIS

The Y\_BUF register (see Table 44 and Table 45) provides access to y-axis vibration data. The numerical format of the data in Y\_BUF is the same as the format in the X\_BUF register, which depends on the mode of operation (see the REC\_CTRL register, Bits[1:0], in Table 55).

Table 44. Y\_BUF Register Definition

| Addresses   | Default 1   | Access   | Flash Backup   |
|-------------|-------------|----------|----------------|
| 0x10, 0x11  | 0x0000      | R        | No             |

1 Default value is only valid until completion of the first capture event or commencement of RTS mode.

Table 45. Y\_BUF Bit Descriptions

| Bits   | Description   |
|--------|---------------|
| [15:0] | Y-axis data   |

## Z\_BUF/RSS\_BUF, BUFFER ACCESS REGISTER, Z-AXIS

The Z\_BUF register is similar to the X\_BUF and Y\_BUF registers and provides a data storage location for z-axis data values. Optionally, this data can be replaced with an RSS value of all three axes in place of the z-axis data. T o enable RSS calculations, set REC\_CTRL, Bit 4 to 1. Otherwise, the Z\_BUF register (see Table 37 and Table 38) provides access to z-axis vibration data.

When Bit 4 in the REC\_CTRL register = 1, the register provides access to vibration data that represents the RSS combination of all three axes. When the RSS value is reported, the number format is the same as the original data.

Table 46. Z\_RSS\_BUF Register Definition

| Addresses   | Default 1   | Access   | Flash Backup   |
|-------------|-------------|----------|----------------|
| 0x12, 0x13  | 0x0000      | R        | No             |

1 Default value is only valid until completion of the first capture event or commencement of RTS mode.

Table 47. Z\_BUF/RSS\_BUF Bit Descriptions

| Bits   | Description                                |
|--------|--------------------------------------------|
| [15:0] | Z-axis data or RSS data for all three axes |

The numerical format of the data in Z\_BUF/RSS\_BUF is the same as the format in the X\_BUF register, which depends on the mode of operation (see the REC\_CTRL register, Bits[1:0], in Table 55).

## X\_ANULL, X-AXIS BIAS CALIBRATION REGISTER

The X\_ANULL register (see Table 48 and Table 49) contains the bias correction value for the x-axis accelerometer, which the auto-null command (see the GLOB\_CMD register, Bit 0, in Table 91) generates. The X\_ANULL register also supports write access, which enables users to write their own correction factors to the x-axis signal chain. The numerical format examples from Table 42 also apply to the X\_ANULL register. For example, writing the following codes to DIN sets X\_ANULL = 0x0064, which adjusts the offset of the x-axis signal chain by 100 LSB (~0.1907 g = 1 g ÷ 524 LSBs × 100 LSBs): 0x9464 and 0x9500.

## Table 48. X\_ANULL Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x14, 0x15  | 0x0000    | R/W      | Yes            |

## Table 49. X\_ANULL Bit Descriptions

| Bits   | Description                                                          |
|--------|----------------------------------------------------------------------|
| [15:0] | Bias correction factor, x-axis.Twos complement, 1 LSB = 0.001907 g . |

The register is set to 0 at power-up, unless backed up in flash memory, which then loads the value saved in the flash memory. When an autonull command is issued, the null value for each axis is calculated from data collected from 4096 samples at the full internal data rate of 220 kSPS. The autonull command takes approximately 16 ms for all three axes, including data capture, calculations, and register setting.

## Y\_ANULL, Y-AXIS BIAS CALIBRATION REGISTER

The Y\_ANULL register (see Table 50 and Table 51) contains the bias correction value for the y-axis accelerometer, which the autonull command (see the GLOB\_CMD register, Bit 0, in Table 91) generates. The Y\_ANULL register also supports write access, which enables users to write their own correction factors to the y-axis signal chain. The numerical format examples from Table 42 also apply to the Y\_ANULL register. For example, writing the following codes to DIN sets Y\_ANULL = 0xFF9C, which adjusts the offset of the y-axis signal chain by -100 LSB (~0.1907 g = 1 g ÷ 524 LSBs × 100 LSBs): 0x969C and 0x97FF.

## Table 50. Y\_ANULL Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x16, 0x17  | 0x0000    | R/W      | Yes            |

## Table 51. Y\_ANULL Bit Descriptions

| Bits   | Description                                                         |
|--------|---------------------------------------------------------------------|
| [15:0] | Bias correction factor, y-axis.Twos complement, 1 LSB = 0.001908 g. |

## Z\_ANULL, Z-AXIS BIAS CALIBRATION REGISTER

The Z\_ANULL register (see Table 52 and Table 53) contains the bias correction value for the z-axis accelerometer, which the auto-null command (see the GLOB\_CMD register, Bit 0, in Table 91) generates. The Z\_ANULL register also supports write access, which enables users to write their own correction factors to the z-axis signal chain. The numerical format examples from Table 42 also apply to the Z\_ANULL register. For example, writing the following codes to DIN sets Z\_ANULL = 0xFDDE, which adjusts the offset of the z-axis signal chain by -546 LSB (~1.042 g = 1 g ÷ 524 LSBs × 546 LSBs): 0x98DE and 0x99FD.

## Table 52. Z\_ANULL Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x18, 0x19  | 0x0000    | R/W      | Yes            |

## Table 53. Z\_ANULL Bit Descriptions

| Bits   | Description                                                         |
|--------|---------------------------------------------------------------------|
| [15:0] | Bias correction factor, z-axis.Twos complement, 1 LSB = 0.001907 g. |

## REC\_CTRL, RECORDING CONTROL

The REC\_CTRL register (see Table 54 and Table 55) contains the configuration bits for a number of operational settings in the ADcmXL3021: mode of operation, record storage, power management, sample rates, and windowing.

## Table 54. REC\_CTRL Register Definitions

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x1A, 0x1B  | 0x1102    | R/W      | Yes            |

## Table 55. REC\_CTRL Bit Descriptions

| Bits    | Description                                                                                                           |
|---------|-----------------------------------------------------------------------------------------------------------------------|
| 15      | Real-time streaming timeout enable.                                                                                   |
| 14      | Not used.                                                                                                             |
| [13:12] | Windowsetting(MFFTmodeandAFFTmodesonly). 00= rectangular. 01 = Hanning (default). 10 = flat top. 11 = not applicable. |
| 11      | SR3, Sample rate option 3 enable = 1, disable = 0. Sample rate = 220 kSPS ÷ 2 AVG_CNT[15:12] (see Table 86).          |
| 10      | SR2, Sample rate option 2 enable = 1, disable = 0. Sample rate = 220kSPS ÷ 2 AVG_CNT[11:8] (see Table 86).            |
| 9       | SR1, Sample rate option 1 enable = 1, disable = 0. Sample rate = 220kSPS ÷ 2 AVG_CNT[7:4] (see Table 86).             |
| 8       | SR0, Sample rate option 0 enable = 1, disable = 0. Sample rate = 220kSPS ÷ 2 AVG_CNT[3:0] (see Table 86).             |

## Data Sheet

| Bits   | Description                                                                                                                                                                                                                                                                                                                                                                                                               |
|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 7      | Automatic power-down between recordings (MFFT, AFFT, and MTC mode only). Requires a CS toggle to wake up. 0 = no power-down. 1 = power-down after data collection/processing.                                                                                                                                                                                                                                             |
| 6      | Enable compute statistics in MTC mode.                                                                                                                                                                                                                                                                                                                                                                                    |
| 5      | Enable velocity calculations. 0 =acceleration. 1 =calculated velocity.                                                                                                                                                                                                                                                                                                                                                    |
| 4      | Calculate root sum square (MFFT, AFFT, and MTC modesonly).The z-axis portion of the user data buffers contains a root sum square combination of all axes. 0 = disabled. The z-axis portion of the user data buffers contains only z-axis data. 1 = enabled.                                                                                                                                                               |
| [3:2]  | Flash memory record storage method (MFFT, AFFT, MTC modes only). 00 = none. No record storage to flash memory, current data is available in SRAM until the next recording event is stored. 01 = alarm triggered. Record storage occurs when the vibration exceeds one of the configurable alarm settings. 10 = all. Record storage happens at the conclusion of each data collection and processing event. 11 = reserved. |
| [1:0]  | Recording mode. 00 = MFFT mode. 01 = AFFT mode. 10=MTCmode. 11=RTSmode.                                                                                                                                                                                                                                                                                                                                                   |

## Real-Time Burst Mode Timeout Enabled

Bit 15 in the REC\_CTRL register (see Table 55) contains the settings that independently disable RTS mode if the available data is not read. By default, RTS mode is enabled and disabled via the digital pin, RTS. If this bit is enabled, RTS mode is halted after failure to receive SCLK for more than 30 ms.

## Windowing

Bits[13:12] in the REC\_CTRL register (see Table 55) contain the settings for the window function that the ADcmXL3021 uses on the time domain data, prior to performing the FFT. The factory default setting for these bits (01) selects the Hanning window function. The other window options available are rectangular (setting 0b00), or flat top (setting 0b10).

## Spectral Record Selection

Bits[11:8] in the REC\_CTRL register (see Table 55) contain on and off settings for the four different sample rate options that are set using the AVG\_CNT register.

## [ADcmXL3021](https://www.analog.com/ADcmXL3021?doc=ADcmXL3021.pdf)

The sample rate selector bits (SR0, SR1, SR2, and SR3) are used when operating in MFFT, AFFT, or MTC mode. When only one of these bits is set to 1, every data capture event uses that sample rate setting. When two of the bits are set to 1, the ADcmXL3021 uses one of the sample rates for one data capture event, then switches to the other for the next capture event. When all four bits are set to 1, the ADcmXL3021 uses the sample rates in the following order, switching to a new sample rate for each new capture event: SR0, SR1, SR2, SR3, SR0, SR1, and so on.

## Automatic Power-Down

Bit 7 in the REC\_CTRL register (see Table 55) contains the setting for the automated power-down function when the ADcmXL3021 is operating in MFFT, AFFT, or MTC mode. When this bit is set to one, the ADcmXL3021 automatically powers down after completing data collection and processing. When this bit is set to zero, the ADcmXL3021 does not power down after completing data collection and processing functions. After the device is in sleep mode, a CS toggle is required to wake up before the next measurement can be used. If the device is powered down between records in AFFT mode, wake up occurs on its own before the next capture.

## Calculate MTC Statistics

Bit 6 in the REC\_CTRL register (see Table 55) contains the setting to enable statistic calculation on MTC records.

## Calculate Velocity

Bit 5 in the REC\_CTRL register (see Table 55) contains the setting to convert accelerometer data values to velocity values. When this bit is set to zero, the user data buffers contain linear acceleration data. When this bit is set to one, the user data buffers contain linear velocity data, which comes from integrating the acceleration data, with respect to time.

## Root Sum Square (RSS) Combination

Bit 4 in the REC\_CTRL register (see Table 55) contains the setting for the RSS function. When this bit is set to zero, the ADcmXL3021 processes data for each axis independently. When this bit is set to one, the ADcmXL3021 processes data as an RSS combination of all axes.

## Record Storage

Bits[3:2] in the REC\_CTRL register (see Table 55) contain the settings that determine when the ADcmXL3021 stores the result of an FFT capture event to a record location. The MISC\_CTRL register is used for storing time domain statistics.

## Recording Mode

Bits[1:0] in the REC\_CTRL register (see Table 55) establish the mode of operation. When operating in MTC mode, the ADcmXL3021 uses the signal flow diagram and user-accessible registers shown in Figure 35. When operating in AFFT and MFFT mode, the ADcmXL3021 uses the signal flow diagram and user-accessible registers shown in Figure 37.

## RT\_CTRL, REAL TIME STREAMING CONTROL

The RT\_CTRL register (see Table 56 and Table 57) contains the configuration bits for the optional decimation setting for RTS mode. RT\_CTRL is also used to control sample rate options. The decimation or sample rate options are in effect only if Bit 7 is enabled.

Table 56. RT\_CTRL Register Definitions

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x1C, 0x1D  | 0x0000    | R/W      | Yes            |

## Table 57. RT\_CTRL Bit Descriptions

| Bits   | Description                                                                                                                                            |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| [15:8] | Not used.                                                                                                                                              |
| 7      | Sample rate change enabled.                                                                                                                            |
| [6:4]  | N: sets the decimation setting.The numberofaverages used for decimation can becalculatedby2 N .                                                        |
| 3      | Not used.                                                                                                                                              |
| [2:0]  | Sample rates include the following: 000 = 20 kSPS. 001 = 40 kSPS. 010=60 kSPS. 011=80 kSPS. 100 = 100 kSPS. 101 =120 kSPS. 110=140 kSPS. 111=160 kSPS. |

## REC\_PRD, RECORD PERIOD

The REC\_PRD register (see Table 58 and Table 59) contains the settings for the timer function that the ADcmXL3021 uses when operating in AFFT mode.

Table 58. REC\_PRD Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x1E, 0x1F  | 0x0000    | R/W      | Yes            |

## Table 59. REC\_PRD Bit Descriptions

| Bits    | Description                                                                |
|---------|----------------------------------------------------------------------------|
| [15:10] | Don't care                                                                 |
| [9:8]   | Scale for data bits: 00 = 1 second/LSB, 01 = 1 minute/LSB, 10 = 1 hour/LSB |
| [7:0]   | Data bits, binary format; range = 0 to 255                                 |

Setting REC\_PRD is 0x0005, establishes a 5 sec setting for the time that elapses between the completion of one capture event and the beginning of the next capture event. Table 60 shows several more examples of configuration codes for the REC\_PRD register.

## Table 60. REC\_PRD Example Use Cases

| REC_PRDValue   | TimerValue   |
|----------------|--------------|
| 0x0022         | 34 sec       |
| 0x010F         | 15 minutes   |
| 0x0218         | 24 hours     |

## ALM\_F\_LOW, ALARM FREQUENCY BAND

Up to six individual spectral alarm bands can be specified with two magnitude alarm levels. The ALM\_PNTR register setting identifies which alarm is currently addressed and being configured. Spectral alarms apply when the ADcmXL3021 is operating in MFFT or AFFT mode and when the ALM\_F\_LOW register (see Table 61 and Table 62) contains the number of the lowest FFT bin, which is included in the spectral alarm setting that the ALM\_PNTR register (see Table 78) contains.

The value of ALR\_F\_LOW applies to the FFT spectral record. The exact frequency depends on AVG\_CNT register because this register setting reduces the full FFT bandwidth.

## Table 61. ALM\_F\_LOW Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x20, 0x21  | 0x0000    | R/W      | Yes            |

## Table 62. ALM\_F\_LOW Bit Descriptions

| Bits    | Description                                    |
|---------|------------------------------------------------|
| [15:12] | Don't care                                     |
| [11:0]  | Lower frequency, bin number; range = 0 to 2047 |

For example, when setting ALR\_F\_LOW = 0x0064, the lower frequency of the alarm band starts at bin 100. For example, if AVG\_CNT = 8, the lower frequency is set to 600 Hz (600 Hz = (100 LSB × 220 kHz/8)/4096).

If AVG\_CNT = 2, the lower frequency is 2400 Hz if ALR\_F\_LOW = 0x0064.

## ALM\_F\_HIGH, ALARM FREQUENCY BAND

When the ADcmXL3021 is operating in MFFT or AFFT mode, the ALM\_F\_HIGH register (see Table 63 and Table 64) contains the number of the highest FFT bin included in the spectral alarm setting. The ALM\_PNTR register (see Table 78) contains the information regarding which of the six alarms is being set.

## Table 63. ALM\_F\_HIGH Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x22, 0x23  | 0x0000    | R/W      | Yes            |

## Table 64. ALM\_F\_HIGH Bit Descriptions

| Bits    | Description                                    |
|---------|------------------------------------------------|
| [15:12] | Don't care                                     |
| [11:0]  | Upper frequency, bin number; range = 0 to 2047 |

The value of ALR\_F\_LOW applies to the FFT spectral record. The exact frequency depends on the AVG\_CNT register because this setting reduces the full FFT bandwidth.

For example, when setting ALR\_F\_LOW = 0x0064, the lower frequency of the alarm band starts at Bin 200. For example, if AVG\_CNT = 8, the lower frequency is set to 1200 Hz (1200 Hz = (200 LSB × 220 kHz/8)/4096).

If AVG\_CNT = 2, the lower frequency is 4800 Hz if ALR\_F\_LOW = 0x0064.

## ALM\_X\_MAG1, ALARM LEVEL 1 X-AXIS

The ALM\_X\_MAG1 register sets a magnitude limit for the x-axis in which to trigger an alarm warning. A second, higher trigger magnitude can be set in the ALM\_X\_MAG2 register and can be used to distinguish between a warning condition vs. a more critical condition. When the ADcmXL3021 is operating in MFFT or AFFT mode, the ALM\_X\_MAG1 register (see Table 65 and Table 66) contains the magnitude of the vibration on the x-axis, which triggers Alarm 1 for the spectral alarm setting contained in the ALM\_PNTR register (see Table 78). In this mode, the FFT band that is compared to the trigger magnitude limit is between ALM\_L\_LOW and ALM\_F\_HIGH.

When in MTC mode, this limit applies to the statistics of the time domain capture.

ALM\_X\_MAG1 can be used as a warning indicator and ALM\_X\_MAG2 as a critical alarm indicator. Set ALM\_X\_MAG2 to a greater or equal value as ALM\_X\_MAG1.

Table 65. ALM\_X\_MAG1 Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x24, 0x25  | 0x0000    | R/W      | Yes            |

## Table 66. ALM\_X\_MAG1 Bit Descriptions

| Bits   | Description                |
|--------|----------------------------|
| [15:0] | X-Axis AlarmTrigger Level1 |

The data format in the ALM\_X\_MAG1 register is the same as the data format in the X\_BUF register. See Table 43 for several examples of this data format.

## ALM\_Y\_MAG1, ALARM LEVEL 1 Y-AXIS

The setting for the ALM\_Y\_MAG1 register is similar to the ALM\_X\_MAG1 setting, except that the ALM\_Y\_MAG1 limit applies to the y-axis. When the ADcmXL3021 operates in the MFFT or the AFFT mode, the ALM\_Y\_MAG12 (see Table 67 and Table 68) register contains the magnitude of the vibration on the y-axis, which triggers Alarm 1 for the spectral alarm setting that the ALM\_PNTR register (see Table 78) contains.

Table 67. ALM\_Y\_MAG1 Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x26, 0x27  | 0x0000    | R/W      | Yes            |

## Table 68. ALM\_Y\_MAG1 Bit Descriptions

| Bits   | Description                |
|--------|----------------------------|
| [15:0] | Y-axis AlarmTrigger Level1 |

The data format in the ALM\_Y\_MAG1 register is the same as the data format in the Y\_BUF register.

## ALM\_Z\_MAG1, ALARM LEVEL 1 Z-AXIS

When the ADcmXL3021 is operating in MFFT or AFFT mode, the ALM\_Z\_MAG1 register (see Table 69 and Table 70) contains the magnitude of the vibration on the z-axis, which triggers Alarm 1 for the spectral alarm setting that the ALM\_PNTR register (see Table 78) contains.

When in MTC mode, this limit applies to the statistics of the time domain capture for the z-axis or the RSS value if RSS is enabled in the REC\_CTRL register.

Table 69. ALM\_Z\_MAG1 Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x28, 0x29  | 0x0000    | R/W      | Yes            |

## Table 70. ALM\_Z\_MAG1 Bit Descriptions

| Bits   | Description                |
|--------|----------------------------|
| [15:0] | Z-Axis AlarmTrigger Level1 |

The data format in the ALM\_Z\_MAG1 register is the same as the data format in the X\_BUF register.

## ALM\_X\_MAG2, ALARM LEVEL 2 X-AXIS

When the ADcmXL3021 is operating in MFFT or AFFT mode, the ALM\_X\_MAG2 register (see Table 71 and Table 72) contains the magnitude of the vibration on the x-axis, which triggers Alarm 2 for the spectral alarm setting that the ALM\_PNTR register (see Table 78) contains. When in MTC mode, this limit applies to the statistics of the time domain capture.

Table 71. ALM\_X\_MAG2 Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x2A, 0x2B  | 0x0000    | R/W      | Yes            |

Table 72. ALM\_X\_MAG2 Bit Descriptions

| Bits   | Description                |
|--------|----------------------------|
| [15:0] | X-Axis AlarmTrigger Level2 |

The data format in the ALM\_X\_MAG2 register is the same as the data format in the X\_BUF register. See Table 43 for several examples of this data format.

The Alarm 2 magnitudes must be greater than or equal to Alarm 1.

## ALM\_Y\_MAG2, ALARM LEVEL 2 Y-AXIS

When the ADcmXL3021 is operating in MFFT or AFFT mode, the ALM\_Y\_MAG2 register (see Table 73 and Table 74) contains the magnitude of the vibration on the y-axis, which triggers Alarm 2 for the spectral alarm setting that the ALM\_PNTR register (see Table 78) contains.

Table 73. ALM\_Y\_MAG2 Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x2C, 0x2D  | 0x0000    | R/W      | Yes            |

Table 74. ALM\_Y\_MAG2 Bit Descriptions

| Bits   | Description                |
|--------|----------------------------|
| [15:0] | Y-Axis AlarmTrigger Level2 |

The data format in the ALM\_Y\_MAG2 register is the same as the data format in the Y\_BUF register. See Table 43 for several examples of this data format.

## ALM\_Z\_MAG2, ALARM LEVEL 2 Z-AXIS

When the ADcmXL3021 is operating in MFFT or AFFT mode, the ALM\_Z\_MAG2 register (see Table 75 and Table 76) contains the magnitude of the vibration on the z-axis, which triggers Alarm 2 for the spectral alarm setting that the ALM\_PNTR register (see Table 78) contains.

Table 75. ALM\_Z\_MAG2 Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x2E, 0x2F  | 0x0000    | R/W      | Yes            |

Table 76. ALM\_Z\_MAG2 Bit Descriptions

| Bits   | Description                |
|--------|----------------------------|
| [15:0] | Z-Axis AlarmTrigger Level2 |

The data format in the ALM\_Z\_MAG2 register is the same as the data format in the X\_BUF register See Table 43 for several examples of this data format.

When in MTC mode, this limit applies to the statistics of the time domain capture for the z-axis or the RSS value if RSS is enabled in the REC\_CTRL register.

## ALM\_PNTR, ALARM POINTER

When the ADcmXL3021 is operating in MFFT or AFFT mode, the ALM\_PNTR register (see Table 77 and Table 78) contains an alarm pointer that identifies a specific spectral alarm by sample rate (in Bits[9:8]) and spectral band number (in Bits[2:0]). Up to six alarms can be configured per sample rate setting.

Table 77. ALM\_PNTR Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x30, 0x31  | 0x0000    | R/W      | No             |

## Table 78. ALM\_PNTR Bit Descriptions

| Bits    | Description                                                           |
|---------|-----------------------------------------------------------------------|
| [15:10] | Don't care                                                            |
| [9:8]   | Indicates the sample rate setting for which Alarm x is defined 00=SR0 |
|         | 01=SR1                                                                |
|         | 02=SR2                                                                |
|         | 03=SR3                                                                |
| [7:3]   | Don't care                                                            |
| [2:0]   | Spectral band number (1, 2, 3, 4, 5, or 6)                            |

Setting ALM\_PNTR = 0x0203 provides access to the settings for the spectral alarm, which is associated with Sample Rate SR2 and Spectral Band 3. The current attributes from this spectral alarm load to the ALM\_F\_LOW, ALM\_F\_HIGH, ALM\_X\_MAG1, ALM\_Y\_MAG1, ALM\_Z\_MAG1, ALM\_X\_MAG2, ALM\_Y\_MAG2, and ALM\_Z\_MAG2 registers. Writing to these registers changes each setting for the spectral alarm, which is associated with Sample Rate SR2 and Spectral Band 3 as well.

## ALM\_S\_MAG ALARM LEVEL

The ALM\_S\_MAG register (see Table 79 and Table 80) contains the magnitude of the system alarm, which can monitor the temperature or power supply level according to Bits[5:4] in the ALM\_CTRL register (see Table 82).

Table 79. ALM\_S\_MAG Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x32, 0x33  | 0x0000    | R/W      | No             |

## Table 80. ALM\_S\_MAG Bit Descriptions

| Bits   | Description          |
|--------|----------------------|
| [15:0] | System alarm setting |

When Bit 4 in the ALM\_CTRL register is equal to zero, the ALM\_S\_MAG register uses the same data format as the SUPPLY\_OUT register (see Table 27 and Table 28). When Bit 4 in the ALM\_CTRL register is equal to one, the ALM\_S\_MAG register uses the same data format as the TEMP\_OUT register (see Table 24 and Table 25).

## ALM\_CTRL, ALARM CONROL

The ALM\_CTRL register (see Table 81 and Table 82) contains a number of configuration settings for the alarm function.

Table 81. ALM\_CTRL Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x34, 0x35  | 0x0080    | R/W      | Yes            |

## Table 82. ALM\_CTRL Bit Descriptions

| Bits    | Description                                                                                                                               |
|---------|-------------------------------------------------------------------------------------------------------------------------------------------|
| [15:13] | Don't care.                                                                                                                               |
| [12]    | Disables automatic clearing of spectral alarm status bits upon a read of the status register.                                             |
| [11:8]  | Response delay, range =0to15. Represents the number of spectral records for each spectral alarm before a spectral alarm flag is set high. |
| 7       | Latch DIAG_STAT error flags. Requires a clear status command (GLOB_CMD, Bit 4) to reset the flags to 0. 1 = enabled, 0 = disabled.        |
| 6       | Enable Alarm 1 and Alarm 2 on ALM1 and ALM2, respectively.                                                                                |
| 5       | System alarm polarity. 1 = trigger when less than ALM_S_MAG. 0 = trigger when greater than ALM_S_MAG.                                     |
| 4       | System alarm selection. 1 = temperature, 0 = power supply.                                                                                |
| 3       | System alarm:1=enabled,0 =disabled.                                                                                                       |
| 2       | Z-axis alarm: 1 =enabled,0 =disabled.                                                                                                     |
| 1       | Y-axis alarm: 1 =enabled,0 =disabled.                                                                                                     |
| 0       | X-axis alarm:1 =enabled,0 =disabled.                                                                                                      |

## FILT\_CTRL, FILTER CONTROL

The FILT\_CTRL register (see Table 83 and Table 84) provides configuration settings for the 32-tap, FIR filters. When the FILT\_CTRL pin contains the factory default value, the ADcmXL3021 does not use any of the FIR filters on any of the axes. Each axis has its own unique selection for one of the FIR filter bank. For example, set DIN = 0xB871, then set DIN = 0xB901 to write 0x0171 to the FILT\_CTRL register. This code (0x0171) selects Filter Bank 1 for the x-axis, Filter Bank 3 for the y-axis, and Filter Bank 5 for the z-axis.

## Table 83. FILT\_CTRL Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x38, 0x39  | 0x0000    | R/W      | Yes            |

## Table 84. FILT\_CTRL Bit Descriptions

| Bits    | Description                                                                                                                                                                                                                                                                                                                                           |
|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [15:11] | Don't care                                                                                                                                                                                                                                                                                                                                            |
| [10:8]  | Z-axis FIR filter selection. 110: FIR Filter Bank F (high-pass filter, 10 kHz). 101: FIR Filter Bank E (high-pass filter, 5kHz). 100: FIR Filter Bank D(high-pass filter, 1kHz). 011: FIR Filter Bank C(low-pass filter, 10 kHz). 010: FIR Filter Bank B(low-pass filter,5 kHz). 001: FIR Filter Bank A(low-pass filter, 1kHz). 000: noFIR selection. |
| 7       | Reserved                                                                                                                                                                                                                                                                                                                                              |

| Bits   | Description                                                                                                                                                                                                                                                                                                                                   |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [6:4]  | Y-axis FIR filter selection 110: FIR Filter Bank F (high-pass filter, 10 kHz) 101: FIR Filter Bank E (high-pass filter, 5kHz) 100: FIR Filter Bank D(high-pass filter, 1kHz) 011: FIR Filter Bank C(low-pass filter, 10 kHz) 010: FIR Filter Bank B(low-pass filter,5 kHz) 001: FIR Filter Bank A(low-pass filter, 1kHz) 000: noFIR selection |
| 3      | Reserved                                                                                                                                                                                                                                                                                                                                      |
| [2:0]  | X-axis FIR filter selection 110: FIR Filter Bank F (high-pass filter, 10 kHz) 101: FIR Filter Bank E (high-pass filter, 5kHz) 100: FIR Filter Bank D(high-pass filter, 1kHz) 011: FIR Filter Bank C(low-pass filter, 10 kHz) 010: FIR Filter Bank B(low-pass filter,5 kHz) 001: FIR Filter Bank A(low-pass filter, 1kHz) 000: noFIR selection |

## AVG\_CNT, DECIMATION CONTROL

The AVG\_CNT register (see Table 85 and Table 86) provides four different sample rate settings (SR0, SR1, SR2, and SR3) that users can enable using Bits[11:8] in the REC\_CTRL register (see Table 55). These sample rate settings only apply to MFFT, AFFT, and MTC mode.

## Table 85. AVG\_CNT Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x3A, 0x3B  | 0x7421    | R/W      | Yes            |

## Table 86. AVG\_CNT Bit Descriptions

| Bits    | Description                                                                         |
|---------|-------------------------------------------------------------------------------------|
| [15:12] | SR3 sample rate scale factor (1 to 7), SR3 sample rate = 2200000 ÷ 2 AVG_CNT[15:12] |
| [11:8]  | SR2 sample rate scale factor (1 to 7), SR2 sample rate = 2200000 ÷ 2 AVG_CNT[11:8]  |
| [7:4]   | SR1 sample rate scale factor (1 to 7), SR1 sample rate = 2200000 ÷ 2 AVG_CNT[7:4]   |
| [3:0]   | SR0 sample rate scale factor (1 to 7), SR0 sample rate = 2200000 ÷ 2 AVG_CNT[3:0]   |

Each nibble in the AVG\_CNT register offers a setting for each sample rate setting: SR0, SR1, SR2, and SR3. The following formula demonstrates one of the sample rates (SR1) derived from the factory default value (0x7421) in the AVG\_CNT register:

<!-- formula-not-decoded -->

To change one of the sample rate values, write the control value to the specific nibble in the AVG\_CNT register. For example, set DIN = 0xBB35 for set the upper byte of the AVG\_CNT register to 0x35, which causes the SR2 sample rate to be 27,500 SPS and the SR3 sample rate to be 6,875 SPS.

## [ADcmXL3021](https://www.analog.com/ADcmXL3021?doc=ADcmXL3021.pdf)

In MMFT and AFFT mode, the sample rate settings in the AVG\_CNT register influences the bin widths of each FFT result, which has an impact on the noise in each bin. Table 87 shows a list of SR0 sample rate settings (see the AVG\_CNT register, Bits[3:0]), along with the bin widths and noise predictions that come with those settings. The information in Table 87 also applies to the SR1 (AVG\_CNT register, Bits[7:4]), SR2 (AVG\_CNT register, Bits[11:8]), and SR3 (AVG\_CNT register, Bits[15:12]) settings as well.

## Table 87. SR0 Sample Rate Settings and Bin Widths

| AVG_CNT, Bits[3:0]   | Sample Rate (SPS)   | BinWidth(Hz)   |
|----------------------|---------------------|----------------|
| 0                    | Not applicable      | Not applicable |
| 1 (Default)          | 220000              | 53.8           |
| 2                    | 110000              | 26.9           |
| 3                    | 55000               | 13.4           |
| 4                    | 27500               | 6.71           |
| 5                    | 13750               | 3.35           |
| 6                    | 6875                | 1.68           |
| 7                    | 3438.5              | 0.839          |

## DIAG\_STAT, STATUS, AND ERROR FLAGS

The DIAG\_STAT (see Table 88 and Table 89) register contains a number of status flags.

## Table 88. DIAG\_STAT Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x3C, 0x3D  | 0x0000    | R        | No             |

## Table 89. DIAG\_STAT Bit Descriptions

|   Bits | Description                                                                                                                                                 |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     15 | Not used (don't care).                                                                                                                                      |
|     14 | System alarm flag. The temperature or power supply exceeded the user configured alarm.                                                                      |
|     13 | Z-axis, Spectral Alarm 2 flag.                                                                                                                              |
|     12 | Y-axis, Spectral Alarm 2 flag.                                                                                                                              |
|     11 | X-axis, Spectral Alarm 2 flag.                                                                                                                              |
|     10 | Z-axis, Spectral Alarm 1 flag.                                                                                                                              |
|      9 | Y-axis, Spectral Alarm 1 flag.                                                                                                                              |
|      8 | X-axis, Spectral Alarm 1 flag.                                                                                                                              |
|      7 | Data ready/busy indicator (0 = busy, 1 = data ready).                                                                                                       |
|      6 | Flash test result, checksum flag (0 = no error, 1 = error).                                                                                                 |
|      5 | Self test diagnostic error flag.                                                                                                                            |
|      4 | Recording escape flag. Indicates use of the SPI driven interruption command, 0x00E8. This flag is reset automatically after the first successful recording. |
|      3 | SPI communication failure (SCLKs ≠evenmultiple of 16).                                                                                                      |
|      2 | Flash update failure.                                                                                                                                       |
|      1 | Power supply > 3.625 V.                                                                                                                                     |
|      0 | Power supply < 2.975 V.                                                                                                                                     |

## GLOB\_CMD, GLOBAL COMMANDS

The GLOB\_CMD (see Table 90 and Table 91) register contains a number of global commands. To start any of these processes, set the corresponding bit to one. For example, set bit 0 to logic high to execute the autonull function and the bit self clears.

## Table 90. GLOB\_CMD Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x3E, 0x3F  | 0x0000    | W        | No             |

## Table 91. GLOB\_CMD Bit Descriptions

|   Bits | Description                                                                                                                                                                                                     |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     15 | Clear autonull correction.                                                                                                                                                                                      |
|     14 | Retrieve spectral alarm bandinformation from the ALM_PNTRsetting.                                                                                                                                               |
|     13 | Retrieve record data from flash memory.                                                                                                                                                                         |
|     12 | Save spectral alarm band registers to flash memory.                                                                                                                                                             |
|     11 | Record start or stop.                                                                                                                                                                                           |
|     10 | Set BUF_PNTR = 0x0000.                                                                                                                                                                                          |
|      9 | Clear spectral alarm band registers from flash memory.                                                                                                                                                          |
|      8 | Clear all records.                                                                                                                                                                                              |
|      7 | Software reset.                                                                                                                                                                                                 |
|      6 | Save registers to flash memory.                                                                                                                                                                                 |
|      5 | Flash test, compare sumofflash memorywithfactory value.                                                                                                                                                         |
|      4 | Clear DIAG_STAT register once.                                                                                                                                                                                  |
|      3 | Restore factory register settings and clear the capture buffers.                                                                                                                                                |
|      2 | Self test. Executes the automatic self test method. If test does not pass, then the self test diagnostic flag is set in the status register (Bit 5).                                                            |
|      1 | Power-down (wake with CS toggle). Powers down sensor and puts embedded microcontroller in sleep mode.The device wakes up with a toggle of CS or if the automatic timer triggers a new capture (automatic mode). |
|      0 | Autonull.                                                                                                                                                                                                       |

## ALM\_X\_STAT, ALARM STATUS X-AXIS

The ALM\_X\_STAT (see Table 92 and Table 93) register contains status flags for each x-axis alarm.

## Table 92. ALM\_X\_STAT Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x40, 0x41  | 0x0000    | R        | Yes            |

## Table 93. ALM\_X\_STAT Bit Descriptions

|   Bits | Description                                    |
|--------|------------------------------------------------|
|     15 | Alarm 2 on Band 6; 1 = alarm set, 0 = no alarm |
|     14 | Alarm 1 on Band 6; 1 = alarm set, 0 = no alarm |
|     13 | Alarm 2 on Band 5; 1 = alarm set, 0 = no alarm |
|     12 | Alarm 1 on Band 5; 1 = alarm set, 0 = no alarm |
|     11 | Alarm 2 on Band 4; 1 = alarm set, 0 = no alarm |
|     10 | Alarm 1 on Band 4; 1 = alarm set, 0 = no alarm |
|      9 | Alarm 2 on Band 3; 1 = alarm set, 0 = no alarm |

| Bits   | Description                                                                          |
|--------|--------------------------------------------------------------------------------------|
| 8      | Alarm 1 on Band 3; 1 = alarm set, 0 = no alarm                                       |
| 7      | Alarm 2 on Band 2; 1 = alarm set, 0 = no alarm                                       |
| 6      | Alarm 1 on Band 2; 1 = alarm set, 0 = no alarm                                       |
| 5      | Alarm 2 on Band 1; 1 = alarm set, 0 = no alarm                                       |
| 4      | Alarm 1 on Band 1; 1 = alarm set, 0 = no alarm                                       |
| 3      | Not used                                                                             |
| [2:0]  | Alarm bandcontaining the largest alarm delta from the most critical alarm;range=1to6 |

## ALM\_Y\_STAT, ALARM STATUS Y-AXIS

The ALM\_Y\_STAT (see Table 94 and Table 95) register contains status flags for each y-axis alarm.

## Table 94. ALM\_Y\_STAT Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x42, 0x43  | 0x0000    | R        | Yes            |

## Table 95. ALM\_Y\_STAT Bit Descriptions

| Bits   | Description                                            |
|--------|--------------------------------------------------------|
| 15     | Alarm 2 on Band 6; 1 = alarm set, 0 = no alarm         |
| 14     | Alarm 1 on Band 6; 1 = alarm set, 0 = no alarm         |
| 13     | Alarm 2 on Band 5; 1 = alarm set, 0 = no alarm         |
| 12     | Alarm 1 on Band 5; 1 = alarm set, 0 = no alarm         |
| 11     | Alarm 2 on Band 4; 1 = alarm set, 0 = no alarm         |
| 10     | Alarm 1 on Band 4; 1 = alarm set, 0 = no alarm         |
| 9      | Alarm 2 on Band 3; 1 = alarm set, 0 = no alarm         |
| 8      | Alarm 1 on Band 3; 1 = alarm set, 0 = no alarm         |
| 7      | Alarm 2 on Band 2; 1 = alarm set, 0 = no alarm         |
| 6      | Alarm 1 on Band 2; 1 = alarm set, 0 = no alarm         |
| 5      | Alarm 2 on Band 1; 1 = alarm set, 0 = no alarm         |
| 4      | Alarm 1 on Band 1; 1 = alarm set, 0 = no alarm         |
| 3      | Not used                                               |
| [2:0]  | Most critical alarm condition, spectralband;range=1to6 |

## ALM\_Z\_STAT, ALARM STATUS Z-AXIS

The ALM\_Z\_STAT (see Table 96 and Table 97) register contains status flags for each z-axis alarm.

## Table 96. ALM\_Z\_STAT Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x44, 0x45  | 0x0000    | R        | Yes            |

## Table 97. ALM\_Z\_STAT Bit Descriptions

|   Bits | Description                                    |
|--------|------------------------------------------------|
|     15 | Alarm 2 on Band 6; 1 = alarm set, 0 = no alarm |
|     14 | Alarm 1 on Band 6; 1 = alarm set, 0 = no alarm |
|     13 | Alarm 2 on Band 5; 1 = alarm set, 0 = no alarm |
|     12 | Alarm 1 on Band 5; 1 = alarm set, 0 = no alarm |
|     11 | Alarm 2 on Band 4; 1 = alarm set, 0 = no alarm |
|     10 | Alarm 1 on Band 4; 1 = alarm set, 0 = no alarm |

| Bits   | Description                                            |
|--------|--------------------------------------------------------|
| 9      | Alarm 2 on Band 3; 1 = alarm set, 0 = no alarm         |
| 8      | Alarm 1 on Band 3; 1 = alarm set, 0 = no alarm         |
| 7      | Alarm 2 on Band 2; 1 = alarm set, 0 = no alarm         |
| 6      | Alarm 1 on Band 2; 1 = alarm set, 0 = no alarm         |
| 5      | Alarm 2 on Band 1; 1 = alarm set, 0 = no alarm         |
| 4      | Alarm 1 on Band 1; 1 = alarm set, 0 = no alarm         |
| 3      | Not used                                               |
| [2:0]  | Most critical alarm condition, spectralband;range=1to6 |

## ALM\_X\_PEAK, ALARM PEAK LEVEL X-AXIS

The ALM\_X\_PEAK (see Table 98 and Table 99) register contains the magnitude of the FFT bin, which contains the peak alarm value, for the x-axis.

## Table 98. ALM\_X\_PEAK Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x46, 0x47  | 0x0000    | R        | Yes            |

## Table 99. ALM\_X\_PEAK Bit Descriptions

| Bits   | Description                                   |
|--------|-----------------------------------------------|
| [15:0] | Alarm peak, x-axis, accelerometer data format |

## ALM\_Y\_PEAK, ALARM PEAK LEVEL Y-AXIS

The ALM\_Y\_PEAK (see Table 100 and Table 101) register contains the magnitude of the FFT bin, which contains the peak alarm value, for the y-axis.

## Table 100. ALM\_Y\_PEAK Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x48, 0x49  | 0x0000    | R        | Yes            |

## Table 101. ALM\_Y\_PEAK Bit Descriptions

| Bits   | Description                                   |
|--------|-----------------------------------------------|
| [15:0] | Alarm peak, y-axis, accelerometer data format |

## ALM\_Z\_PEAK, ALARM PEAK LEVEL Z-AXIS

The ALM\_Z\_PEAK (see Table 102 and Table 103) register contains the magnitude of the FFT bin, which contains the peak alarm value, for the z-axis.

## Table 102. ALM\_Z\_PEAK Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x4A, 0x4B  | 0x0000    | R        | Yes            |

## Table 103. ALM\_Z\_PEAK Bit Descriptions

| Bits   | Description                                   |
|--------|-----------------------------------------------|
| [15:0] | Alarm peak, z-axis, accelerometer data format |

## [ADcmXL3021](https://www.analog.com/ADcmXL3021?doc=ADcmXL3021.pdf)

## TIME\_STAMP\_L AND TIME\_STAMP\_H, DATA RECORD TIMESTAMP

The TIME\_STAMP\_L (see Table 104 and Table 105) and TIME\_STAMP\_H (see Table 106 and Table 107) registers contain a relative timestamp for the most recent data capture event.

## Table 104. TIME\_STAMP\_L Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x4C, 0x4D  | 0x0000    | R        | Not applicable |

## Table 105. TIME\_STAMP\_L Bit Descriptions

| Bits   | Description                   |
|--------|-------------------------------|
| [15:0] | Timestamp, seconds, lowerword |

## Table 106. TIME\_STAMP\_H Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x4E, 0x4F  | 0x0000    | R        | Not applicable |

## Table 107. TIME\_STAMP\_H Bit Descriptions

| Bits   | Description                  |
|--------|------------------------------|
| [15:0] | Timestamp, seconds,upperword |

## DAY\_REV, DAY AND REVISION

The DAY\_REV (see Table 108 and Table 109) contains part of the factory programming date (day) and the revision of the firmware.

## Table 108. DAY\_REV Register Definition

| Addresses   | Default        | Access   | Flash Backup   |
|-------------|----------------|----------|----------------|
| 0x52, 0x53  | Not applicable | R        | Not applicable |

## Table 109. DAY\_REV Bit Descriptions

| Bits    | Description                                |
|---------|--------------------------------------------|
| [15:12] | Day of the month, most significant digit   |
| [11:8]  | Dayofthemonth, least significant digit     |
| [7:4]   | Firmware revision, most significant digit  |
| [3:0]   | Firmware revision, least significant digit |

## YEAR\_MON, YEAR AND MONTH

The YEAR\_MON (see Table 110 and Table 111) contains the factory programming date (month and year).

## Table 110. YEAR\_MON Register Definition

| Addresses   | Default        | Access   | Flash Backup   |
|-------------|----------------|----------|----------------|
| 0x54, 0x55  | Not applicable | R        | Not applicable |

## Table 111. YEAR\_MON Bit Descriptions

| Bits    | Description                             |
|---------|-----------------------------------------|
| [15:12] | Year, most significant digit            |
| [11:8]  | Year, least significant digit           |
| [7:4]   | Monthoftheyear, most significant digit  |
| [3:0]   | Monthoftheyear, least significant digit |

## PROD\_ID, PRODUCT IDENTIFICATION

The PROD\_ID (see Table 112 and Table 113) register contains the numerical portion of the model number.

## Table 112. PROD\_ID Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x56, 0x57  | 0x0BCD    | R        | Not applicable |

## Table 113. PROD\_ID Bit Descriptions

| Bits   | Description                                                                     |
|--------|---------------------------------------------------------------------------------|
| [15:0] | Binary representation of the numerical portion of the modelnumber: 0x0BCD=3,021 |

## SERIAL\_NUM, SERIAL NUMBER

The SERIAL\_NUM (see Table 114 and Table 115) contains the serial number of the unit, within a particular manufacturing lot.

## Table 114. SERIAL\_NUM Register Definition

| Addresses   | Default        | Access   | Flash Backup   |
|-------------|----------------|----------|----------------|
| 0x58, 0x59  | Not applicable | R        | Not applicable |

## Table 115. SERIAL\_NUM Bit Descriptions

| Bits   | Description               |
|--------|---------------------------|
| [15:0] | Lot specific serialnumber |

## USER\_SCRATCH

The USER\_SCRATCH register allows end users to store a device number to identify the sensor. The register is readable and writable. The last written value is nonvolatile, which allows data recovery upon reset.

## Table 116. USER\_SCRATCH Register Definition

| Addresses   | Default        | Access   | Flash Backup   |
|-------------|----------------|----------|----------------|
| 0x5A, 0x5B  | Not applicable | R/W      | Yes            |

## Table 117. USER\_SCRATCH Bit Descriptions

| Bits   | Description      |
|--------|------------------|
| [15:0] | Optional user ID |

## REC\_FLASH\_CNT, RECORD FLASH ENDURANCE

The REC\_FLASH\_CNT (see Table 118 and Table 119) provides a tool for tracking the endurance of the flash memory bank, which support the 10 record storage locations. The value in the REC\_FLASH\_CNT register increments after clearing the user record (GLOB\_CMD) and each time the record storage fills up (tenth location contains event data)

## Table 118. REC\_FLASH\_CNT Register Definition

| Addresses   | Default        | Access   | Flash Backup   |
|-------------|----------------|----------|----------------|
| 0x5C, 0x5D  | Not applicable | R        | Not applicable |

## Table 119. REC\_FLASH\_CNT Bit Descriptions

| Bits   | Description                                  |
|--------|----------------------------------------------|
| [15:0] | Endurance counter for the record flashmemory |

## MISC\_CTRL, MISCELLANEOUS CONTROL

The MISC\_CTRL register (see Table 120 and Table 121) enables the saving of MTC mode statistic values to memory, enable sensor self-test, and enable SYNC pin to external control.

## Table 120. MISC\_CTRL Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x64, 0x65  | 0x0000    | R/W      | No             |

## Table 121. MISC\_CTRL Bit Descriptions

| Bits    | Description                                                                                                                 |
|---------|-----------------------------------------------------------------------------------------------------------------------------|
| [15:13] | Unused.                                                                                                                     |
| 12      | Enable sensitivity to SYNCpintostart a capture. Must be enabled for external trigger formanual capture modes.               |
| 11      | Unused.                                                                                                                     |
| 10      | Transfers statistics record from flash memory to SRAM. REC_PNTR must point to the appropriate time domain statistic record. |
| 9       | Transfer statistics from SRAM to flash record.                                                                              |
| 8       | Clear time domain statistics.                                                                                               |
| [7:4]   | Unused.                                                                                                                     |
| 3       | Set self test on.                                                                                                           |
| 2       | Clear self test.                                                                                                            |
| [1:0]   | Unused.                                                                                                                     |

## REC\_INFO1, RECORD INFORMATION

The REC\_INFO1 register (see Table 122 and Table 123) contains the sample rate (SRx), window function and FFT average settings associated with the spectral record in the user data buffer. The contents of this register are only relevant for results that come from MFFT and AFFT mode (see the REC\_CTRL register in Table 55).

## Table 122. REC\_INFO1 Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x66, 0x67  | 0x0000    | R        | Yes            |

## Table 123. REC\_INFO1 Bit Descriptions

| Bits    | Description                                                                         |
|---------|-------------------------------------------------------------------------------------|
| [15:14] | Sample rate option. 00 = SR0. 01 = SR1. 10 = SR2. 11 = SR3.                         |
| [13:12] | Window setting. 00 = rectangular. 01 = Hanning. 10 = flat top. 11 = not applicable. |
| [11:8]  | Not used (don't care).                                                              |
| [7:0]   | FFT averages; range = 1 to 2047.                                                    |

## RECORD INFORMATION, REC\_INFO2

The REC\_INFO2 (see Table 124 and Table 125) register contains the contents of the AVG\_CNT register, which relate to the sample rate (SRx) in use for the spectral record in the user data buffer. The contents of this register are only relevant for results that come from MFFT and AFFT mode (see the REC\_CTRL register in Table 55).

## Table 124. REC\_INFO2 Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x68, 0x69  | 0x0000    | R        | Yes            |

## Table 125. REC\_INFO2 Bit Descriptions

| Bits   | Description           |
|--------|-----------------------|
| [15:4] | Not used (don't care) |
| [3:0]  | AVG_CNT setting       |

## REC\_CNTR, RECORD COUNTER

The REC\_CNTR (see Table 126 and Table 127) register contains the record counter, which contains the number of records currently in use.

## Table 126. REC\_CNTR Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x6A, 0x6B  | 0x0000    | R        | Yes            |

## Table 127. REC\_CNTR Bit Descriptions

| Bits   | Description                    |
|--------|--------------------------------|
| [15:4] | Notused                        |
| [3:0]  | Record counter range:0through9 |

## ALM\_X\_FREQ, SEVERE ALARM FREQUENCY

The ALM\_X\_FREQ register (see Table 126 and Table 127) contains the frequency bin associated with the value in the ALM\_X\_PEAK (see Table 99) register.

## Table 128. ALM\_X\_FREQ Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x6C, 0x6D  | 0x0000    | R        | Yes            |

## Table 129. ALM\_X\_FREQ Bit Descriptions

| Bits    | Description                                                                    |
|---------|--------------------------------------------------------------------------------|
| [15:12] | Not used                                                                       |
| [11:0]  | Alarm frequency for x-axis peak alarm level, FFT bin number; range = 0 to 2047 |

## ALM\_Y\_FREQ, SEVERE ALARM FREQUENCY

The ALM\_Y\_FREQ register (see Table 130 and Table 131) contains the frequency bin that is associated with the value in the ALM\_Y\_PEAK (see Table 101) register.

## Table 130. ALM\_Y\_FREQ Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x6E, 0x6F  | 0x0000    | R        | Yes            |

## Table 131. ALM\_Y\_FREQ Bit Descriptions

| Bits    | Description                                                                    |
|---------|--------------------------------------------------------------------------------|
| [15:12] | Not used                                                                       |
| [11:0]  | Alarm frequency for y-axis peak alarm level, FFT bin number; range = 0 to 2047 |

## ALM\_Z\_FREQ, SEVERE ALARM FREQUENCY

The ALM\_Z\_FREQ register (see Table 132 and Table 132) contains the frequency bin that is associated with the value in the ALM\_X\_PEAK (see Table 103) register.

## Table 132. ALM\_Z\_FREQ Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x70, 0x71  | 0x0000    | R        | Yes            |

## Table 133. ALM\_Z\_FREQ Bit Descriptions

| Bits    | Description                                                                    |
|---------|--------------------------------------------------------------------------------|
| [15:12] | Not used                                                                       |
| [11:0]  | Alarm frequency for z-axis peak alarm level, FFT bin number; range = 0 to 2047 |

## STAT\_PNTR, STATISTIC RESULT POINTER

The STAT\_PNTR register (see Table 134 and Table 135) controls which statistic loads to the X\_STAT register (see Table 137), Y\_STAT register (see Table 140), and Z\_STAT register (see Table 142). For example, set DIN = 0xF202 to write 0x02 to the lower byte of the STAT\_PNTR, which causes the Kurtosis results to load to X\_STAT, Y\_STAT. and Z\_STAT.

## Table 134. STAT\_PNTR Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x72, 0x73  | 0x0000    | R/W      | Not applicable |

## Table 135. STAT\_PNTR Bit Descriptions

| Bits   | Description             |
|--------|-------------------------|
| [15:3] | Don't care              |
| [2:0]  | 110 =skewness           |
|        | 101 =Kurtosis           |
|        | 100 =crest factor       |
|        | 011 =peak-to-peak       |
|        | 010=peak                |
|        | 001 =standard deviation |
|        | 000=meanvalue           |

## X\_STAT, STATISTIC RESULT X-AXIS

The X\_STAT register (see Table 136 and Table 137) contains the x-axis statistical metric that represents the settings in the STAT\_PNTR register (see Table 135). The data format for this register depends on the metric that it contains. When the lower byte of the STAT\_PNTR register is equal to 0x00, 0x01, 0x02 or 0x03, the data format is the same as the X\_BUF register (MTC mode). See Table 41 and Table 42 for a definition and some examples of this data format. When the lower byte of the STAT\_PNTR register is equal to 0x01, 0x02, or 0x03, the X\_STAT register uses the binary coded decimal (BCD) format shown in Table 137. Table 138 shows numerical examples of this format.

## Table 136. X\_STAT Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x74, 0x75  | 0x0000    | R        | Yes            |

## Table 137. X\_STAT Bit Descriptions for Crest Factor, Kurtosis and Skewness results

| Bits   | Description                              |
|--------|------------------------------------------|
| [15:8] | Integer, offset binary format, 1 LSB = 1 |
| [7:0]  | Decimal,1LSB=1/256=0.00390625            |

## Table 138. Statistic Data Format Examples for Crest Factor, Kurtosis and Skewness results

| Hex.   |   Integer | Decimal              | Result       |
|--------|-----------|----------------------|--------------|
| 0x0000 |         0 | 0                    | 0            |
| 0x0001 |         0 | 1/256=0.00390625     | 0.00390625   |
| 0x0002 |         0 | 2/256 = 0.0078125    | 0.0078125    |
| 0x000A |         0 | 10/256 = 0.0390625   | 0.0390625    |
| 0x00FE |         0 | 254/256 = 0.9921875  | 0.9921875    |
| 0x00FF |         0 | 255/256 = 0.99609375 | 0.99609375   |
| 0x0100 |         1 | 0                    | 1            |
| 0x016A |         1 | 106/256 = 0.4140625  | 1.4140625    |
| 0x020A |         2 | 10/256 = 0.0390625   | 2.0390625    |
| 0x069A |         6 | 154/256 = 0.6015625  | 6.6015625    |
| 0x1AF2 |        26 | 242/256 = 0.9453125  | 26. 9453125  |
| 0xFFFF |       255 | 255/256 = 0.99609375 | 255.99609375 |

## Y\_STAT, STATISTIC RESULT Y-AXIS

The Y\_STAT register (see Table 139 and Table 140) contains the y-axis statistical metric that represents the settings in the STAT\_PNTR register (see Table 135). The data format for this register depends on the metric that it contains. When the lower byte of the STAT\_PNTR register is equal to 0x00, 0x04, 0x05, or 0x06, the data format is the same as the Y\_BUF register (MTC mode). See Table 45 and Table 42 for a definition and some examples of this data format. When the lower byte of the STAT\_PNTR register is equal to 0x01, 0x02, or 0x03, the Y\_STAT register uses the binary coded decimal (BCD) format shown in Table 140. Table 138 provides some numerical examples of this format.

## Table 139. Y\_STAT Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x74, 0x75  | 0x0000    | R        | Yes            |

## Table 140. Y\_STAT Bit Descriptions for Crest Factor, Kurtosis and Skewness Results

| Bits   | Description                              |
|--------|------------------------------------------|
| [15:8] | Integer, offset binary format, 1 LSB = 1 |
| [7:0]  | Decimal,1LSB=1/256=0.00390625            |

## Z\_STAT, STATISTIC RESULT Z-AXIS

The Z\_STAT register (see Table 141 and Table 142) contains the z-axis statistical metric that represents the settings in the STAT\_PNTR register (see Table 135). The data format for this register depends on the metric that it contains. When the lower byte of the STAT\_PNTR register is equal to 0x00, 0x04, 0x05, or 0x06, the data format is the same as the Z\_BUF\_RSS register (MTC mode). See Table 47 and Table 42 for a definition and some examples of this data format. When the lower byte of the STAT\_PNTR register is equal to 0x01, 0x02, or 0x03, the Z\_STAT register uses the binary coded decimal (BCD) format shown in Table 140. Table 138 provides some numerical examples of this format.

Table 141. Z\_STAT Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x78, 0x79  | 0x0000    | R        | Yes            |

Table 142. Z\_STAT Bit Descriptions for Crest Factor, Kurtosis and Skewness results

| Bits   | Description                              |
|--------|------------------------------------------|
| [15:8] | Integer, offset binary format, 1 LSB = 1 |
| [7:0]  | Decimal,1LSB=1/256=0.00390625            |

## FUND\_FREQ, FUNDAMENTAL FREQUENCY

The FUND\_FREQ register (see Table 143 and Table 144) provides a simple way to configure the spectral alarms to monitor the fundamental vibration frequency on a platform, along with the subsequent harmonic frequencies. Table 145 provides the start and stop frequency settings for each alarm band, which automatically loads after writing to the upper byte of the FUND\_FREQ register, the units are Hz.  Default is disabled.

## Table 143. FUND\_FREQ Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x7A, 0x7B  | 0x0000    | R/W      | Yes            |

## Table 144. FUND\_FREQ Bit Descriptions

| Bits   | Description                                                                                               |
|--------|-----------------------------------------------------------------------------------------------------------|
| [15:0] | Fundamental frequency setting, f F . Offset binary format, 1 LSB =1Hz.0x0000=noinfluence onalarmsettings. |

## Table 145. Statistic Data Format Examples

|   Alarm Band | Start Frequency   | Stop Frequency   | Alarm 1 Level   | Alarm 2 Level   |
|--------------|-------------------|------------------|-----------------|-----------------|
|            1 | 0.2 × f F         | 0.8× f F         | 20% × 0.5 g     | 0.5 g           |
|            2 | 0.8 × f F         | 1.8 × f F        | 90% × 0.5 g     | 0.5 g           |
|            3 | 1.8 × f F         | 2.8 × f F        | 30% × 0.5 g     | 0.5 g           |
|            4 | 2.8 × f F         | 3.8 × f F        | 25% × 0.5 g     | 0.5 g           |
|            5 | 3.8 × f F         | 10.2 × f F       | 20% × 0.5 g     | 0.5 g           |
|            6 | 10.2 × f F        | f MAX            | 15% × 0.5 g     | 0.5 g           |

## FLASH\_CNT\_L, FLASH MEMORY ENDURANCE

FLASH\_CNT\_L (see Table 146 and Table 147) contains the lower 16 bits of a 32-bit counter. This counter tracks the total number of update cycles that the flash memory bank experiences.

## Table 146. FLASH\_CNT\_L Register Definition

| Addresses   | Default        | Access   | Flash Backup   |
|-------------|----------------|----------|----------------|
| 0x7C, 0x7D  | Not applicable | R        | Not applicable |

## Table 147. FLASH\_CNT\_L Bit Descriptions

| Bits   | Description                     |
|--------|---------------------------------|
| [15:0] | Flash update counter, lowerword |

## FLASH\_CNT\_U, FLASH MEMORY ENDURANCE

The FLASH\_CNT\_U register (see Table 148 and Table 149) contains the upper 16 bits of a 32-bit counter. This counter tracks the total number of update cycles that the flash memory bank experiences.

Table 148. FLASH\_CNT\_U Register Definition

| Addresses   | Default   | Access   | Flash Backup   |
|-------------|-----------|----------|----------------|
| 0x7E, 0x7F  | 0x0000    | R        | Not applicable |

## Table 149. FLASH\_CNT\_U Bit Descriptions

Figure 52. Flash/EE Memory Data Retention

| Bits   | Description                    |
|--------|--------------------------------|
| [15:0] | Flash update counter,upperword |

<!-- image -->

## FIR FILTER REGISTERS

The ADcmXL3021 signal chain includes a 32-tap, FIR filter. Register Page 1 through Register Page 6 provide user configuration access to the coefficients for six different FIR filter banks. The FILT\_CTRL (see Table 84) register controls the enabling of the FIR filters and allows the selection of the FIR filter banks. Each FIR filter bank features factory default filter designs, and each filter bank provides write access to support application specific filter designs. To access one of the FIR filter banks, write the corresponding page number to the PAGE\_ID register. For example, set DIN = 0x8003 to set PAGE\_ID = 0x0003, which provides access to FIR Filer Bank C. See Table 20 for a complete listing of the FIR coefficient addresses and pages.

By default, the following filters are preconfigured in the respective filter bank registers:

-  Filter Band A is a 32 tap, low-pass filter at 1 kHz.
-  Filter Band B is a 32 tap, low-pass filter at 5 kHz.
-  Filter Band C is a 32 tap, low-pass filter at 10 kHz.
-  Filter Band D is a 32 tap, high-pass filter at 1 kHz.
-  Filter Band E is a 32 tap, high-pass filter at 5 kHz.
-  Filter Band F is a 32 tap, high-pass filter at 10 kHz.

## FIR Filter Design Guidelines

User defined, 32 tap digital filtering can be programmed and stored. This filter uses 16-bit coefficients. Register Page 1 through Register Page 6 contain filter bank coefficients for Filter A to Filter F, respectively. Each of the 32 coefficients has a 16-bit register. User filters (as well as other register settings) can be stored internally in the ADcmXL3021.

The numerical format for each coefficient is a 16-bit, twos complement signed value.

The 32 taps of the filter must sum to 0 to have unity gain. If values are summed as unsigned binary values, the summed value of 32,767 represents unity gain. By default, the FIR filters are designed to have a linear phase response up to 10 kHz.

## APPLICATIONS INFORMATION

## MECHANICAL INTERFACE

For the best performance, follow the guidelines described in this section when installing the ADcmXL3021 in a system.

Eliminate potential translational forces by aligning the module in a well defined orientation.

Use uniform mounting force on all four corners of the module. Use all four mounting holes and M2.5 screws at a torque of 5 inch-pounds.

## [ADcmXL3021](https://www.analog.com/ADcmXL3021?doc=ADcmXL3021.pdf)

Additional mechanical adhesives (cyanoacrylate adhesive and epoxies such as Dymax 652A gel adhesive) can be used to, in some cases, improve mechanical coupling and frequency response. Application of these additional adhesives are mechanical design and processes dependent. Therefore, the application of these additional adhesives must be evaluated thoroughly during product development.

A minimum bend radius of the flex tail of 1 mm is allowed. At a lower bend radius, delamination or conductor failure may occur. The connector at the end of the flex tail is the DF12(3.0)-14DS0.5V(86) from Hirose Electric Co. Ltd. The mating connector that must be used is the DF12(3.0)-14DP-0.5V(86) from Hirose Electric Co. Ltd.

## OUTLINE DIMENSIONS

Figure 53. 14-Lead Module with Integrated Flex Connector [MODULE]

<!-- image -->

(ML-14-7)

Dimensions shown in millimeters

| Model 1        | Temperature Range   | g Range   | Package Description                                  | Package Option   |
|----------------|---------------------|-----------|------------------------------------------------------|------------------|
| ADcmXL3021BMLZ | -40°C to +105°C     | ±50 g     | 14-Lead Modulewith Integrated Flex Connector[MODULE] | ML-14-7          |

## ORDERING GUIDE

1  Z = RoHS-Compliant Part.

<!-- image -->

02-14-2019-B