<!-- lastmod 2021-01-22 -->
<!-- image -->

Data Sheet

## FEATURES

MEMS pitch and roll rate gyroscope Ultralow noise: 0.004°/s/√Hz High vibration rejection over a wide frequency range Power saving standby mode

80 µA current consumption in standby mode Fast startup time from standby mode: &lt;100 ms Low delay of &lt;0.5 ms for a 30 Hz input at the widest

## bandwidth setting

Serial peripheral interface (SPI) digital output Programmable high-pass and low-pass filters 2000 g powered acceleration survivability 2.7 V to 5.0 V operation -25°C to +85°C operation 4.5 mm × 5.8 mm × 1.2 mm cavity laminate package

## APPLICATIONS

Optical image stabilization Platform stabilization Wearable products

## GENERAL DESCRIPTION

The ADXRS290 is a high performance MEMS pitch and roll (dual-axis in-plane) angular rate sensor (gyroscope) designed for use in stabilization applications.

The ADXRS290 provides an output full-scale range of ±100°/s with a sensitivity of 200 LSB/°/s. Its resonating disk sensor structure enables angular rate measurement about the axes normal to the sides of the package around an in-plane axis. Angular rate data is formatted as 16-bit twos complement and is accessible through a SPI digital interface. The ADXRS290 exhibits a low noise floor of 0.004°/s/ √ Hz and features programmable high-pass and lowpass filters.

The ADXRS290 is available in a 4.5 mm × 5.8 mm × 1.2 mm, 18-terminal cavity laminate package.

## FUNCTIONAL BLOCK DIAGRAM

Figure 1.

<!-- image -->

## Ultralow Noise,

## Dual-Axis MEMS Gyroscope

[ADXRS290](http://www.analog.com/ADXRS290?doc=ADXRS290.pdf)

## ADXRS290

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Applications....................................................................................... 1       |
| General Description......................................................................... 1              |
| Functional Block Diagram .............................................................. 1                   |
| Revision History ............................................................................... 2          |
| Specifications..................................................................................... 3       |
| Absolute Maximum Ratings............................................................ 4                      |
| Rate Sensitive Axes....................................................................... 4                |
| Package Information.................................................................... 4                   |
| ESD Caution.................................................................................. 4             |
| Pin Configuration and Function Descriptions............................. 5                                  |
| Typical Performance Characteristics ............................................. 6                         |
| Theory of Operation ......................................................................10                |
| Applications Information ..............................................................11                   |
| Application Circuit.....................................................................11                  |
| Power Supply Decoupling .........................................................11                         |
| Power Sequencing ......................................................................11                   |
| Setting Bandwidth......................................................................11                   |
| Analog Evaluation Mode...........................................................12                         |

## REVISION HISTORY

12/14-Rev.0 to Rev. A

| Changes to Title ................................................................................   |
|-----------------------------------------------------------------------------------------------------|
| Changes to Features Section and General Description Section.......                                  |

10/14-Revision 0: Initial Version

| Mechanical Considerations for Mounting..............................                             |   13 |
|--------------------------------------------------------------------------------------------------|------|
| Serial Communications.................................................................           |   14 |
| Register Map ................................................................................... |   16 |
| Register Descriptions.....................................................................       |   17 |
| Analog Devices Identifier..........................................................              |   17 |
| MEMSIdentifier.........................................................................          |   17 |
| Device Identifier.........................................................................       |   17 |
| Silicon Revision Number ..........................................................               |   17 |
| Serial Number (SNx) .................................................................            |   17 |
| Rate Output Data .......................................................................         |   17 |
| Temperature Data.......................................................................          |   17 |
| Power Control.............................................................................       |   17 |
| Band-Pass Filter..........................................................................       |   17 |
| Data Ready ..................................................................................    |   17 |
| Recommended Soldering Profile .................................................                  |   18 |
| PCB Footprint Pattern...............................................................             |   18 |
| Outline Dimensions.......................................................................        |   19 |
| Ordering Guide ..........................................................................        |   19 |

## SPECIFICATIONS

Specified conditions at TA = 25°C. VS = VDD I/O = 3 V , angular rate = 0°/sec, bandwidth = dc to 480 Hz, CS = CREG = CI/O = CCP = 1 µF, digital mode, temperature sensor = off, unless otherwise noted. All minimum and maximum specifications are guaranteed. Typical specifications are not tested or guaranteed.

Table 1.

| Parameter                               | Test Conditions/Comments                                  |   Min | Typ   |   Max | Unit    |
|-----------------------------------------|-----------------------------------------------------------|-------|-------|-------|---------|
| MEASUREMENT RANGE                       | Each axis                                                 |       |       |       |         |
| Output Full-Scale Range                 |                                                           |       | ±100  |       | °/s     |
| Resolution                              |                                                           |       | 16    |       | Bits    |
| Gyroscope Data Update Rate              |                                                           |       | 4250  |       | Hz      |
| LINEARITY                               |                                                           |       |       |       |         |
| Nonlinearity                            |                                                           |       | ±0.5  |       | %FS     |
| Cross Axis Sensitivity                  |                                                           |       | ±2.0  |       | %       |
| SENSITIVITY                             |                                                           |       |       |       |         |
| Sensitivity                             |                                                           |       | 200   |       | LSB/°/s |
| Initial Sensitivity Tolerance 1         | T A = 25°C                                                |   -12 | ±3    |   +12 | %       |
| Change Due to Temperature               | T A = -20°C to +60°C                                      |       | ±1    |       | %       |
| OFFSET                                  |                                                           |       |       |       |         |
| Offset Error                            | T A = -20°C to +60°C                                      |       | ±9    |       | °/s     |
| NOISE PERFORMANCE                       |                                                           |       |       |       |         |
| Rate Noise Density                      | T A = 25°C at 10 Hz                                       |       | 0.004 |       | °/s/√Hz |
| FREQUENCY RESPONSE                      | Programmable (see the Setting Bandwidth section)          |       |       |       |         |
| -3 dB Frequency 2                       |                                                           |       |       |       |         |
| Low-Pass Filter                         |                                                           |    20 |       |   480 | Hz      |
| High-Pass Filter                        | DC output setting available                               | 0.011 |       |  11.3 | Hz      |
| Delay                                   | 30 Hz input, low-pass filter (LPF) = 480 Hz               |       | <0.5  |       | ms      |
| POWER SUPPLY                            |                                                           |       |       |       |         |
| Operating Voltage Range (V S ,V DDI/O ) |                                                           |   2.7 |       |   5.0 | V       |
| Supply Current                          | Measurement mode                                          |       | 7.8   |       | mA      |
| Start-Up Time (Standby)                 | Power off to standby mode                                 |       | <5    |       | ms      |
| Start-Up Time (Measurement Mode)        | Standby tomeasurement mode(towithin ±1°/s of final value) |       | <100  |       | ms      |
| TEMPERATURE SENSOR                      |                                                           |       |       |       |         |
| Resolution                              |                                                           |       | 12    |       | Bits    |
| Sensitivity                             |                                                           |       | 0.1   |       | °C/LSB  |
| OPERATINGTEMPERATURE RANGE              |                                                           |       |       |       |         |
| Operating Temperature Range             |                                                           |   -25 |       |   +85 | °C      |

1  Initial sensitivity tolerance minimum and maximum specifications are guaranteed by characterization and are not tested in production.

2  Guaranteed by design and are not tested in production.

## ABSOLUTE MAXIMUM RATINGS

## Table 2.

| Parameter                                         | Rating          |
|---------------------------------------------------|-----------------|
| Acceleration (Any Axis, Unpowered, 0.5 ms)        | 2000 g          |
| Acceleration (Any Axis, Powered, 0.5 ms)          | 2000 g          |
| V S ,V DDI/O                                      | 2.7V to 5.25V   |
| All Other Pins                                    | 2.7V to 5.25V   |
| Output Short-Circuit Duration (Any Pin to Common) | Indefinite      |
| Operating Temperature Range                       | -40°C to +105°C |
| Storage Temperature Range                         | -40°C to +105°C |

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## RATE SENSITIVE AXES

The ADXRS290 is an x-axis and y-axis rate sensing device that is also called a roll and pitch rate sensing device. It produces a positive output voltage for clockwise rotation about the x-axis and y-axis, as shown in Figure 2.

12636-002

Figure 2. Axes of Sensitivity

<!-- image -->

## PACKAGE INFORMATION

The information in Figure 2 and Table 3 provide details about the package branding for the ADXRS290. For a complete listing of product availability, see the Ordering Guide section.

Table 3. Package Branding Information

| Branding Key   | Field Description                      |
|----------------|----------------------------------------|
| XR290          | Part identifier for ADXRS290           |
| #yyyy          | Date code                              |
| ● XXXXXX       | Pin 1 and factory lot code identifiers |

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

Figure 3. Pin Configuration (Top View)

|            |            | Description                                                                | Description                                                                |
|------------|------------|----------------------------------------------------------------------------|----------------------------------------------------------------------------|
| Pin No.    | Mnemonic   | DigitalMode                                                                | Analog EvaluationMode                                                      |
| 1          | V REG      | Regulator Output. Connect a 1µFcapacitor to this pin.                      | Regulator Output. Connecta1µFcapacitor to this pin.                        |
| 2          | V DDI/O    | Digital Interface Supply Voltage.                                          | Digital Interface Supply Voltage.                                          |
| 3          | AST        | This pin is internally pulled to ground.                                   | Self Test.                                                                 |
| 4          | SENS       | This pin is internally pulled to ground.                                   | Sensitivity Select.                                                        |
| 5          | PDMX       | This pin is internally pulled to ground.                                   | Pulse-Density Modulation (PDM) X OUT .                                     |
| 6          | PDMY       | This pin is internally pulled to ground.                                   | PDMY OUT .                                                                 |
| 7          | CS         | Chip Select. Active low.                                                   | Chip Select. Active low.                                                   |
| 8          | MISO (SDO) | Serial Data Out.                                                           | Serial Data Out.                                                           |
| 9          | MOSI (SDI) | Serial Data In.                                                            | Serial Data In.                                                            |
| 10         | SCLK       | Serial Communications Clock.                                               | Serial Communications Clock.                                               |
| 11         | SYNC/ASEL  | Data Ready Out (SYNC). Connect this pin to ground if it is not used.       | Analog Enable (ASEL).                                                      |
| 12         | CP         | Charge Pump Output. Connect a 1 µF capacitor (rated for 50 V) to this pin. | Charge Pump Output. Connect a 1 µF capacitor (rated for 50 V) to this pin. |
| 13, 15, 16 | GND        | Ground. Connect to ground.                                                 | Ground. Connect to ground.                                                 |
| 14         | V S        | Analog Supply Voltage.                                                     | Analog Supply Voltage.                                                     |
| 17         | V REG      | Regulator Output. Connect a 1µFcapacitor to this pin.                      | Regulator Output. Connecta1µFcapacitor to this pin.                        |
| 18         | V S        | Analog Supply Voltage.                                                     | Analog Supply Voltage.                                                     |

## Table 4. Pin Function Descriptions

## TYPICAL PERFORMANCE CHARACTERISTICS

N &gt; 240 for all typical performance characteristics plots, unless otherwise noted.

<!-- image -->

Figure 4. X-Axis Offset at 25°C

<!-- image -->

Figure 5. X-Axis Offset vs. Temperature (N = 16)

<!-- image -->

<!-- image -->

Figure 7. Y-Axis Offset at 25°C

<!-- image -->

Figure 8. Y-Axis Offset vs. Temperature (N = 16)

<!-- image -->

12636-010

Figure 10. X-Axis Sensitivity vs. Temperature (N = 16)

<!-- image -->

Figure 11. Rate Output Saturation Behavior

<!-- image -->

12636-012

Figure 12. Response to 50 g , 10 ms Half-Sine Shock Along the Z-Axis (Out-of-Plane), HPF = Off and LPF = 480 Hz

<!-- image -->

Figure 13. Y-Axis Sensitivity vs. Temperature (N = 16)

<!-- image -->

12636-014

Figure 14. Response to 10 g Sine Vibration Along the Z-Axis (Out-of-Plane), HPF = Off and LPF = 480 Hz

<!-- image -->

Figure 15. Typical Noise Spectral Density

<!-- image -->

<!-- image -->

Figure 16. Start-Up Time (Standby to Measurement Mode)

<!-- image -->

Figure 17. Temperature Sensor Output vs. Ambient Temperature (N = 16)

<!-- image -->

Figure 18. Low-Pass Filter Group Delay

<!-- image -->

Figure 19. Low-Pass Filter Phase Delay

Figure 20. Rate Output Nonlinearity (N = 15)

<!-- image -->

Figure 21. Standby Mode Current Consumption

<!-- image -->

Figure 22. Measurement Mode Current Consumption

<!-- image -->

## THEORY OF OPERATION

The ADXRS290 is designed to sense x-axis and y-axis (roll and pitch) angular rate. The ADXRS290 operates on the principle of a vibratory rate gyroscope. Figure 23 presents a simplified illustration of one of four, coupled polysilicon sensing structures. Each sensing structure contains a resonating disk that is electrostatically driven to resonance, which produces the necessary rotating velocity element needed to generate a Coriolis torque when experiencing angular rate.

Figure 23. Simplified Gyroscope Sensing Structure

<!-- image -->

When the sensing structure is exposed to an angular rate, the resulting Coriolis torque drives each of the disks into a tilting motion, which is sensed by plates under the disk. The disk and plate form a capacitive pickoff structure that senses angular rate. The resulting signal is fed to a series of gain and demodulation stages that produce the electrical rate signal output. The sensor design rejects linear and angular acceleration because external g -forces appear as common-mode signals that are removed by the fully differential architecture of the ADXRS290.

The resonator requires 31 V (typical) for operation. Because only 5 V is typically available in most applications, a switching regulator is included on-chip. An external 1 µF capacitor rated for 50 V is required for proper operation of the charge pump circuit.

After demodulation and analog-to-digital conversion, the rate signal is filtered using a single-pole band-pass filter. The highpass and low-pass poles of this filter are programmable via the digital interface.

## APPLICATIONS INFORMATION APPLICATION CIRCUIT

The ADXRS290 application circuit is shown in Figure 24. The primary communications port is the 4-wire SPI interface. For this device, external pull-up/pull-down resistors are not required for the SPI interface, and these pins can be connected directly to the system microcontroller. Four capacitors are required for proper operation of the device. For optimum device performance, separate the capacitors placed on the VS, VDD I/O, VREG, and CP pins.

12636-026

Figure 24. Recommended Application Circuit

<!-- image -->

## POWER SUPPLY DECOUPLING

In many applications, bypass capacitors at VS, VREG, and VDD I/O (as shown in Figure 24) placed close to the ADXRS290 supply pins adequately decouple the gyroscope from noise on the power supply. However, in applications where noise is present at the internal clock frequency, or any harmonic thereof, additional care in power supply bypassing is required because this noise may cause errors in angular rate measurement. If additional decoupling is necessary, a 10 Ω resistor or ferrite bead in series with VS and an additional larger bypass capacitor (2.2 µF or greater) at VS may be helpful.

Ensure that the connection from the ADXRS290 ground to the power supply ground be low impedance because noise transmitted through ground has an effect similar to noise transmitted through VS.

## POWER SEQUENCING

The interface voltage level is set with the interface supply voltage VDD I/O, which must be present to ensure that the ADXRS290 does not create a conflict on the communications bus. For singlesupply operation, VDD I/O can be the same as the main supply (VS). Conversely, in a dual-supply application, VDD I/O can differ from VS to accommodate the desired interface voltage. When VS is applied, the device enters standby state, where power consumption is minimized, and the device waits for VDD I/O to be applied and for a command to enter measurement mode. Measurement mode is activated by setting Bit B1 in Register 0x10 (POWER\_CTL). Clear this bit to return the device to a standby state.

In standby mode, the current consumption is reduced to 80 µA (typical). In standby mode, only single-address SPI transactions are performed, which includes reading from or writing to a single register, but does not include writing to or reading from several registers in one command. In standby mode, the gyroscope does not respond to rate outputs. Transition time to measurement mode where offsets settle to within ±1°/s of the final value is &lt;100 ms.

## SETTING BANDWIDTH

The ADXRS290 includes an internal configurable band-pass filter. Both the high-pass and low-pass poles of the filter are adjustable, as shown in Table 5 and Table 6. The filter frequency response is shown in Figure 25 and Figure 26. The group delay of the wideband filter option is less than 0.5 ms (see Figure 18 for filter delay). At power-up, the default condition for the filters is dc for the high-pass filter and 480 Hz for the low-pass filter.

## Table 5. Low-Pass Filter Pole Locations

|   Bit 2 Filter |   Bit 1 Filter |   Bit 0 Filter | Frequency (Hz)   |
|----------------|----------------|----------------|------------------|
|              0 |              0 |              0 | 480 (Default)    |
|              0 |              0 |              1 | 320              |
|              0 |              1 |              0 | 160              |
|              0 |              1 |              1 | 80               |
|              1 |              0 |              0 | 56.6             |
|              1 |              0 |              1 | 40               |
|              1 |              1 |              0 | 28.3             |
|              1 |              1 |              1 | 20               |

## Table 6. High-Pass Filter Pole Locations

|   Bit 7 Filter |   Bit 6 Filter |   Bit 5 Filter |   Bit 4 Filter | Frequency (Hz)     |
|----------------|----------------|----------------|----------------|--------------------|
|              0 |              0 |              0 |              0 | All pass (default) |
|              0 |              0 |              0 |              1 | 0.011              |
|              0 |              0 |              1 |              0 | 0.022              |
|              0 |              0 |              1 |              1 | 0.044              |
|              0 |              1 |              0 |              0 | 0.087              |
|              0 |              1 |              0 |              1 | 0.175              |
|              0 |              1 |              1 |              0 | 0.350              |
|              0 |              1 |              1 |              1 | 0.700              |
|              1 |              0 |              0 |              0 | 1.400              |
|              1 |              0 |              0 |              1 | 2.800              |
|              1 |              0 |              1 |              0 | 11.30              |

Figure 25. High-Pass Filter Frequency Response

<!-- image -->

Figure 26. Low-Pass Filter Frequency Response

<!-- image -->

## Offset Preservation in the High-Pass Filter

One of the functions of the high-pass filter is to remove offset. The high-pass filter effectively estimates the offset and subtracts it from the output. When the high-pass filter settings are changed, the output remains unchanged; the filter preserves its estimate of offset. The high-pass filter can be set to the fast settling option, allowed to converge to zero offset, and then set to any other high-pass filter option while maintaining near zero offset. Exiting measurement mode clears the preserved offset.

## ANALOG EVALUATION MODE

An analog output evaluation mode has been incorporated in the ADXRS290. In this mode, the output of the ADXRS290 is formatted as a pulse density modulated data stream at a frequency of 144 kHz via the PDMX and PDMY pins. The PDMX and PDMY pins high and low voltage levels are ratiometric to VDD I/O. This signal can be decoded into an analog baseband using a low-pass filter. Higher order filters allow for greater attenuation of the 144 kHz switching noise while maintaining the integrity of the baseband signal. A recommended application circuit with a third-order Sallen-Key filter is shown in Figure 27. Figure 28 shows the recommended low-pass filter for demodulating the PDM output in analog mode operation.

Figure 27. Recommended Application Circuit for Analog Mode Operation

<!-- image -->

12636-030

Figure 28. Recommended Low-Pass Filter for Demodulating the PDM Output in Analog Mode Operation

<!-- image -->

In analog mode, the band-pass filter is disabled and the device cannot be placed in standby mode. SPI communication to the ADXRS290 is available but not required. Sensitivity in this mode is 5 mV/°/s.

## MECHANICAL CONSIDERATIONS FOR MOUNTING

Mount the ADXRS290 on the printed circuit board (PCB) in a location close to a hard mounting point of the PCB to the case. Mounting the ADXRS290 at an unsupported PCB location, as shown in Figure 29, may result in large, apparent measurement errors due to undamped PCB vibration. Locating the ADXRS290 near a hard mounting point ensures that any PCB vibration at the device is above the resonant frequencies of the MEMS elements and, therefore, effectively invisible to the device. In applications where the gyroscope may be subjected to large shock events or excessive vibration, consider the use of damping materials (such as Polyurethane) at the mounting locations to dampen the vibration. A thicker PCB can also help to reduce the effect of system resonance on the performance of the ADXRS290.

Figure 29. Two Examples of Incorrectly Mounted Gyroscopes

<!-- image -->

## SERIAL COMMUNICATIONS

In digital mode, the ADXRS290 communicates via 4-wire SPI and operates as a slave. Ignore data transmitted from the ADXRS290 to the master device during writes to the ADXRS290.

Wire the ADXRS290 for SPI communication as shown in the connection diagram in Figure 30. The maximum SPI clock speed is 5 MHz, with 12 pF maximum loading. The timing scheme follows clock phase (CPHA) = clock polarity (CPOL) = 1.

Figure 30. 4-Wire SPI Connection

<!-- image -->

CS is the serial port enable line and is controlled by the SPI master. It must go low at the start of transmissions and high at the end as shown in Figure 31. SCLK is the serial port clock and is supplied by the SPI master. It is stopped high when CS is high, during periods of no transmission. At the rising edge of SCLK, data can be sampled. Unless the ADXRS290 is in standby mode, multiple bytes can be written to or read from in a single transmission. In standby mode, only single register transactions are supported. Deasserting the CS pin is necessary between commands for transmissions with multiple commands. For SPI operation greater than 1 MHz, it is necessary to deassert the CS pin to ensure a total delay of 10 µs between the register addressing portion of the transmission. The delay is required to allow settling of the internal voltage controlled oscillator. For SPI operation of 1 MHz or lower, the communication rate is low enough to ensure a sufficient delay between register writes.

SPI read and write operations are completed in 16 or more clock cycles, as shown in Figure 31. Setting the R/W bit to 1 indicates a read operation and setting it to 0 indicates a write operation. For R/W = 0 (write), [D7:D0] data is written to the device in the register map based on the [A6:A0] addresses. For R/W = 1 (read), [D7:D0] is the data read by the external master device based on the [A6:A0] addresses. Examples of SPI write and read are shown in Figure 32 and Figure 33.

Figure 31. SPI Timing Diagram

<!-- image -->

Table 7. SPI Timing Specifications (TA = 25°C, VS = VDD I/O = 2.7 V)

| Parameter   | Limit        | Unit    | Description                                                                    |
|-------------|--------------|---------|--------------------------------------------------------------------------------|
| f SCLK      | 5            | MHz max | SPI clock frequency                                                            |
| t SCLK      | 200          | ns min  | 1/(SPI clock frequency), mark/space ratio for the SCLK input is 40/60 to 60/40 |
| t DELAY     | 200          | ns min  | CS falling edge to SCLK falling edge                                           |
| t QUIET     | 200          | ns min  | SCLK rising edge to CS rising edge                                             |
| t S         | 0.4 × t SCLK | ns min  | SCLK low pulse width (space)                                                   |
| t M         | 0.4 × t SCLK | ns min  | SCLK high pulse width (mark)                                                   |
| t SDO       | 20           | ns max  | SCLK falling edge to SDO transition                                            |
| t SETUP     | 10           | ns min  | SDI valid before SCLK rising edge                                              |
| t HOLD      | 10           | ns min  | SDI valid after SCLK rising edge                                               |

## Data Sheet

Figure 32. SPI Write Example: Writing to Register 0x10 (Write 0x02 to Enter Measurement Mode)

<!-- image -->

Figure 33. SPI Read Example: Reading Register 0x01 (Output = 0x1D)

<!-- image -->

## REGISTER MAP

Table 8.

| Register No. (Hex)   | Name       | Bit 7         | Bit 6         | Bit 5         | Bit 4         | Bit 3         | Bit 2         | Bit 1         | Bit 0         | Reset     | R/W   |
|----------------------|------------|---------------|---------------|---------------|---------------|---------------|---------------|---------------|---------------|-----------|-------|
| 0x00                 | ADI_ID     | ADI_ID[7:0]   | ADI_ID[7:0]   | ADI_ID[7:0]   | ADI_ID[7:0]   | ADI_ID[7:0]   | ADI_ID[7:0]   | ADI_ID[7:0]   | ADI_ID[7:0]   | 10101101  | R     |
| 0x01                 | MEMS_ID    | MEMS_ID[7:0]  | MEMS_ID[7:0]  | MEMS_ID[7:0]  | MEMS_ID[7:0]  | MEMS_ID[7:0]  | MEMS_ID[7:0]  | MEMS_ID[7:0]  | MEMS_ID[7:0]  | 00011101  | R     |
| 0x02                 | DEV_ID     | DEV_ID[7:0]   | DEV_ID[7:0]   | DEV_ID[7:0]   | DEV_ID[7:0]   | DEV_ID[7:0]   | DEV_ID[7:0]   | DEV_ID[7:0]   | DEV_ID[7:0]   | 10010010  | R     |
| 0x03                 | REV_ID     | REV_ID[7:0]   | REV_ID[7:0]   | REV_ID[7:0]   | REV_ID[7:0]   | REV_ID[7:0]   | REV_ID[7:0]   | REV_ID[7:0]   | REV_ID[7:0]   | 00001001  | R     |
| 0x04                 | SN0        | SN[7:0]       | SN[7:0]       | SN[7:0]       | SN[7:0]       | SN[7:0]       | SN[7:0]       | SN[7:0]       | SN[7:0]       | SN[7:0]   | R     |
| 0x05                 | SN1        | SN[15:8]      | SN[15:8]      | SN[15:8]      | SN[15:8]      | SN[15:8]      | SN[15:8]      | SN[15:8]      | SN[15:8]      | SN[15:8]  | R     |
| 0x06                 | SN2        | SN[23:16]     | SN[23:16]     | SN[23:16]     | SN[23:16]     | SN[23:16]     | SN[23:16]     | SN[23:16]     | SN[23:16]     | SN[23:16] | R     |
| 0x07                 | SN3        | SN[31:24]     | SN[31:24]     | SN[31:24]     | SN[31:24]     | SN[31:24]     | SN[31:24]     | SN[31:24]     | SN[31:24]     | SN[31:24] | R     |
| 0x08                 | DATAX0     | X0[7:0]       | X0[7:0]       | X0[7:0]       | X0[7:0]       | X0[7:0]       | X0[7:0]       | X0[7:0]       | X0[7:0]       | 00000000  | R     |
| 0x09                 | DATAX1     | X1[15:8]      | X1[15:8]      | X1[15:8]      | X1[15:8]      | X1[15:8]      | X1[15:8]      | X1[15:8]      | X1[15:8]      | 00000000  | R     |
| 0x0A                 | DATAY0     | Y0[7:0]       | Y0[7:0]       | Y0[7:0]       | Y0[7:0]       | Y0[7:0]       | Y0[7:0]       | Y0[7:0]       | Y0[7:0]       | 00000000  | R     |
| 0x0B                 | DATAY1     | Y1[15:8]      | Y1[15:8]      | Y1[15:8]      | Y1[15:8]      | Y1[15:8]      | Y1[15:8]      | Y1[15:8]      | Y1[15:8]      | 00000000  | R     |
| 0x0C                 | TEMP0      | TEMP[7:0]     | TEMP[7:0]     | TEMP[7:0]     | TEMP[7:0]     | TEMP[7:0]     | TEMP[7:0]     | TEMP[7:0]     | TEMP[7:0]     | 00000000  | R     |
| 0x0D                 | TEMP1      | 0             | 0             | 0             | 0             | TEMP[11:8]    | TEMP[11:8]    | TEMP[11:8]    | TEMP[11:8]    | 00000000  | R     |
| 0x0E                 | Reserved   | Reserved[7:0] | Reserved[7:0] | Reserved[7:0] | Reserved[7:0] | Reserved[7:0] | Reserved[7:0] | Reserved[7:0] | Reserved[7:0] | 00000000  | R     |
| 0x0F                 | Reserved   | Reserved[7:0] | Reserved[7:0] | Reserved[7:0] | Reserved[7:0] | Reserved[7:0] | Reserved[7:0] | Reserved[7:0] | Reserved[7:0] | 00000011  | R     |
| 0x10                 | POWER_CTL  | 0             | 0             | 0             | 0             | 0             | 0             | Measurement   | TSM           | 00000000  | R/W   |
| 0x11                 | Filter     | HPF[3:0] 0    | HPF[3:0] 0    | HPF[3:0] 0    | HPF[3:0] 0    | HPF[3:0] 0    | LPF[2:0]      | LPF[2:0]      | LPF[2:0]      | 00000000  | R/W   |
| 0x012                | DATA_READY | 0             | 0             | 0             | 0             | 0             | 0             | Sync[1:0]     | Sync[1:0]     | 00000000  | R/W   |

## REGISTER DESCRIPTIONS

This section describes the functions of the ADXRS290 registers. The ADXRS290 powers up with default register values as shown in the reset column of Table 8.

## ANALOG DEVICES IDENTIFIER

## Table 9. Register 0x00, ADI\_ID (Read Only)

|   Bit 7 |   Bit 6 |   Bit 5 |   Bit 4 |   Bit 3 |   Bit 2 |   Bit 1 |   Bit 0 |
|---------|---------|---------|---------|---------|---------|---------|---------|
|       1 |       0 |       1 |       0 |       1 |       1 |       0 |       1 |

The ADI\_ID register holds a fixed code 0xAD.

## MEMS IDENTIFIER

## Table 10. Register 0x01, MEMS\_ID (Read Only)

|   Bit 7 |   Bit 6 |   Bit 5 |   Bit 4 |   Bit 3 |   Bit 2 |   Bit 1 |   Bit 0 |
|---------|---------|---------|---------|---------|---------|---------|---------|
|       0 |       0 |       0 |       1 |       1 |       1 |       0 |       1 |

The MEMS\_ID register holds a fixed code of 0x1D.

## DEVICE IDENTIFIER

## Table 11. Register 0x02, DEV\_ID (Read Only)

|   Bit 7 |   Bit 6 |   Bit 5 |   Bit 4 |   Bit 3 |   Bit 2 |   Bit 1 |   Bit 0 |
|---------|---------|---------|---------|---------|---------|---------|---------|
|       1 |       0 |       0 |       1 |       0 |       0 |       1 |       0 |

The DEV\_ID register holds a fixed code of 0x92.

## SILICON REVISION NUMBER

## Table 12. Register 0x03, REV\_ID (Read Only)

|   Bit 7 |   Bit 6 |   Bit 5 |   Bit 4 |   Bit 3 |   Bit 2 |   Bit 1 |   Bit 0 |
|---------|---------|---------|---------|---------|---------|---------|---------|
|       0 |       0 |       0 |       0 |       1 |       0 |       0 |       1 |

The REV\_ID register holds a revision ID code that increments with each subsequent silicon revision.

## SERIAL NUMBER (SNx)

These four bytes (Register 0x04 to Register 0x07) store the unique electronic serial number for the part.

## RATE OUTPUT DATA

## Register 0x08 to Register 0x0B: DATAX0, DATAX1, DATAY0, and DATAY1 (Read Only)

These four bytes (Register 0x08 to Register 0x0B) hold the rate output data for each axis. Register 0x08 and Register 0x09 hold the output data for the x-axis, and Register 0x0A and Register 0x0B hold the output data for the y-axis. The output data is written in twos complement. In each two byte set, DATAx0 is the least significant byte, and DATAx1 is the most significant byte, where x represents the x-axis or the y-axis. To prevent a change in data between reads of the sequential registers, perform a multiple byte read of all rate output data registers.

## TEMPERATURE DATA

## Register 0x0C to Register 0x0D: TEMP0 and TEMP1 (Read Only)

These two bytes hold temperature output data written in twos complement. Register 0x0C contains Bits[7:0] and Register 0x0D contains Bits[11:8] of the 12-bit temperature reading. When concurrent temperature and output data points are desired, perform a multiple byte read of the TEMP1:TEMP0, DATAX1:DATAX0, and DATAY1:DATAY0 registers. The scale factor of the temperature reading is 10 LSB/°C, and 0 codes is equivalent to 0°C.

## POWER CONTROL

Table 13. Register 0x10, POWER\_CTL (Read/Write)

|   Bit7 |   Bit6 |   Bit5 |   Bit4 |   Bit3 |   Bit2 | Bit1        | Bit0   |
|--------|--------|--------|--------|--------|--------|-------------|--------|
|      0 |      0 |      0 |      0 |      0 |      0 | Measurement | TSM    |

## TSM Bit

The TSM bit controls the temperature sensor. The default value of this bit is 0 (temperature sensor off) and setting this bit to 1 enables the temperature sensor.

## Measurement Bit

To set the ADXRS290 to standby mode, set the measurement bit to 0. T o set the ADXRS290 to measurement mode, set this bit to 1.

The ADXRS290 powers up in standby mode with a current consumption of 80 µA (typical).

## BAND-PASS FILTER

## Table 14. Register 0x11, Filter (Read/Write)

| Bit 7 Bit   |   6 Bit 5 Bit 4 Bit | Bit 2 Bit 1 Bit 0   |
|-------------|---------------------|---------------------|
| HPF[3:0]    |                   0 | LPF[2:0]            |

## LPF Bits

The three LPF bits define the low-pass filter pole (see Table 5).

## HPF Bits

The four HPF bits define the high-pass filter pole (see Table 6).

## DATA READY

Table 15. Register 0x12, DATA\_READY (Read/Write)

|   Bit 7 |   Bit 6 |   Bit 5 |   Bit 4 |   Bit 3 |   Bit 2 | Bit 1     | Bit 0   |
|---------|---------|---------|---------|---------|---------|-----------|---------|
|       0 |       0 |       0 |       0 |       0 |       0 | Sync[1:0] |         |

## Sync Bits

Set the sync bits to 01 to generate a data ready interrupt at the SYNC/ASEL pin when new data becomes available.

## Table 16. SYNC Pin Functions

| Bit 1   |   Bit 0 | Description                     |
|---------|---------|---------------------------------|
| X       |       0 | Read for analog enable          |
| 0       |       1 | Data ready out, high until read |

## RECOMMENDED SOLDERING PROFILE

Figure 34 and Table 17 provide details about the recommended soldering profile.

Figure 34. Recommended Soldering Profile

<!-- image -->

Table 17. Recommended Soldering Profile 1, 2

|                                                                             | Condition                 | Condition                 |
|-----------------------------------------------------------------------------|---------------------------|---------------------------|
| Profile Feature                                                             | Sn63/Pb37                 | Pb-Free                   |
| Average Ramp Rate from Liquid Temperature (T L ) to Peak Temperature (T P ) | 3°C/sec maximum           | 3°C/sec maximum           |
| Preheat                                                                     |                           |                           |
| MinimumTemperature (T SMIN )                                                | 100°C                     | 150°C                     |
| MaximumTemperature (T SMAX )                                                | 150°C                     | 200°C                     |
| Time from T SMIN to T SMAX (t S )                                           | 60 seconds to 120 seconds | 60 seconds to 180 seconds |
| T SMAX to T L Ramp-Up Rate                                                  | 3°C/second maximum        | 3°C/second maximum        |
| Liquid Temperature (T L )                                                   | 183°C                     | 217°C                     |
| TimeMaintainedAboveT L (t L )                                               | 60 seconds to 150 seconds | 60 seconds to 150 seconds |
| Peak Temperature (T P )                                                     | 240 + 0/-5°C              | 260 + 0/-5°C              |
| Time of Actual T P - 5°C (t P )                                             | 10 seconds to 30 seconds  | 20 seconds to 40 seconds  |
| Ramp-Down Rate                                                              | 6°C/sec maximum           | 6°C/sec maximum           |
| Time 25°C to Peak Temperature                                               | 6 minutes maximum         | 8 minutes maximum         |

## PCB FOOTPRINT PATTERN

Figure 35. PCB Footprint Pattern and Dimensions

<!-- image -->

## OUTLINE DIMENSIONS

Figure 36. 18-Terminal Chip Array Small Outline No Lead Cavity [LGA\_CAV] 5.80 mm × 4.50 mm Body (CE-18-2)

<!-- image -->

Dimensions shown in millimeters

| Model 1                                                                                                                            | Temperature Range                            | Package Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Package Option          |
|------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|
| ADXRS290BCEZ ADXRS290BCEZ-RL ADXRS290BCEZ-RL7 EVAL-ADXRS290Z EVAL-ADXRS290Z-M EVAL-ADXRS290Z-S EVAL-ADXRS290Z-M2 EVAL-ADXRS290Z-S2 | -25°C to +85°C -25°C to +85°C -25°C to +85°C | 18-Terminal Chip Array Small Outline No Lead Cavity [LGA_CAV] 18-Terminal Chip Array Small Outline No Lead Cavity [LGA_CAV] 18-Terminal Chip Array Small Outline No Lead Cavity [LGA_CAV] Breakout Evaluation Board Analog Devices Inertial Sensor Evaluation System, which includes a socket version of the satellite (ADXRS290-S) board ADXRS290 Satellite, Standalone Socket Version Analog Devices Inertial Sensor Evaluation System, which includes a soldered version of the satellite (ADXRS290-S2) board ADXRS290 Satellite, Standalone Soldered Version | CE-18-2 CE-18-2 CE-18-2 |

## ORDERING GUIDE

1  Z = RoHS Compliant Part.

<!-- image -->

04-26-2012-A