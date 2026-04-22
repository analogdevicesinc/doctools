<!-- lastmod 2024-12-02 -->
## TMCM-1690-CoE Hardware Manual

HWVersion V1.0 | 19-101826, Rev 2: 07/24 The TMCM-1690-CoE is a single axis /uniFB01eld-oriented control (FOC) servo controller gate driver module for 3-phase brushless DC (BLDC) and DC motors with up to 1.5A gate drive current and +60V (+48 V nominal) supply. It offers a universal asynchronous receiver transmitter (UART) debug interface and an EtherCAT ® serial peripheral interface (SPI) process data interface with CANopen-overEtherCAT protocol support for communication. TMCM-1690-CoE supports incremental encoders, digital hall sensors, and absolute encoders as position feedback.

<!-- image -->

<!-- image -->

## Applications

- Robotics
- Laboratory Automation
- Manufacturing

## Simpli/uniFB01ed Block Diagram

<!-- image -->

©2024 TRINAMIC Motion Control GmbH &amp; Co. KG, Hamburg, Germany Terms of delivery and rights to technical change reserved. Download newest version at www.analog.com.

EtherCAT® is a registered trademark and patented technology, licensed by Beckhoff Automation GmbH, Germany.

<!-- image -->

<!-- image -->

## Features

- Supply Voltage +10V to +60V DC
- FOCServoControllerGateDriverModule for BLDC and DC Motors
- 0.5A/1.0A/1.5A Gate Drive Current
- Up to 120kHz PWM Frequency
- Onboard Current-Sense Ampli/uniFB01ers
- SupportsEtherCATSPIProcessData Interface
- SupportsIncrementalEncoders(ABN), Digital HALL Sensors, Absolute SPI Encoders
- Reference Switch Inputs
- Compact size 27mm x 22.5mm
- Industrial BLDC and DC Motor Drives
- Factory Automation
- Servo Drives
- Motorized Tables and Chairs

## Contents

| 2 Order Codes 3                       | 2 Order Codes 3                                                          | 2 Order Codes 3                                                                | 4     |
|---------------------------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------------|-------|
| Mechanical and Electrical Interfacing | Mechanical and Electrical Interfacing                                    | Mechanical and Electrical Interfacing                                          | 5     |
|                                       | 3.1                                                                      | Size of the Board . . . . . . . . . . . .                                      | 5     |
|                                       | 3.2                                                                      | . . . . Board Mounting Considerations . . . . . . .                            | 5     |
| 4 Pinout and Pin Descriptions         | 4 Pinout and Pin Descriptions                                            | 4 Pinout and Pin Descriptions                                                  | 6     |
|                                       | 4.1                                                                      | Package Pinout . . . . . . . . . . . . . . . . .                               | 6     |
|                                       | 4.2                                                                      | Pin Table . . . . . . . . . . . . . . . . . . . . .                            | 7     |
| 5                                     | System Architecture                                                      | System Architecture                                                            | 10    |
|                                       | External Components                                                      | External Components                                                            | 11    |
| 6                                     | 6.1                                                                      | 6.1                                                                            | 11    |
| 6.2                                   | Analog Input . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | Analog Input . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       |       |
|                                       | Power Supply Requirements . . .                                          | Power Supply Requirements . . .                                                | 11    |
| 6.3                                   |                                                                          | Power Stage - MOSFET Bridge . . . . . . . .                                    | 12    |
|                                       | 6.3.1                                                                    | Tuning of the MOSFET Bridge . . . . .                                          | 14    |
|                                       | 6.3.2                                                                    | Bridge Optimization Example . . . . .                                          | 16    |
|                                       | 6.3.3                                                                    | Bridge Layout Considerations . . . .                                           | 17    |
|                                       | 6.3.4                                                                    | Current Sensing Resistors . . . . . . .                                        | 17    |
|                                       | 6.4                                                                      | Diagnostics and Protections . . . . . . . . .                                  | 19    |
|                                       | 6.4.1                                                                    | Temperature Sensors                                                            | 19    |
|                                       | 6.4.2                                                                    | . . . . . . . . . Gate Driver Short Circuit Protection .                       | 19    |
|                                       | 6.4.3                                                                    | Avoiding Power Supply Overshoot . .                                            | 21    |
| 7                                     | CANopen-over-EtherCAT Protocol Version                                   | CANopen-over-EtherCAT Protocol Version                                         | 21    |
| 8                                     | Communication Interfaces                                                 | Communication Interfaces                                                       | 21    |
|                                       | 8.1 EtherCAT SPI PDI . . . . . . . . . . . . . . . . . . .               | 8.1 EtherCAT SPI PDI . . . . . . . . . . . . . . . . . . .                     | 21    |
| 9                                     | Absolute Maximum Ratings                                                 | Absolute Maximum Ratings                                                       | 22    |
| 10                                    | Electrical Characteristics                                               | Electrical Characteristics                                                     | 23    |
| 11                                    | Figures Index                                                            | Figures Index                                                                  | 26    |
| 12                                    | Tables Index                                                             | Tables Index                                                                   | 27    |
| 13                                    | Supplemental Directives                                                  | Supplemental Directives                                                        | 28    |
| 13.1                                  |                                                                          | Producer Information . . . . . . . . . . . . . Copyright .                     | 28    |
| 13.3                                  | 13.2                                                                     | . . . . . . . . . . . . . . . . . . . Trademark Designations and Symbols . . . | 28 28 |
|                                       |                                                                          | . . . .                                                                        |       |
| 13.4                                  |                                                                          | Target User . . . . . . . . . . . . . . .                                      | 28    |
|                                       | 13.5                                                                     | Disclaimer: Life Support Systems . . . . . .                                   | 28    |
| 13.6                                  |                                                                          | Disclaimer: Intended Use . . . . . . . . . . .                                 | 28    |
| 14 Revision                           |                                                                          |                                                                                |       |
|                                       |                                                                          |                                                                                | 30    |
| 14.1                                  | History Hardware Revision                                                | . . . . . . . . . . . . . . .                                                  | 30    |
| 14.2                                  | Document Revision                                                        | . . . . . . . . . . . . . .                                                    | 30    |

3

<!-- image -->

1

Features

## 1 Features

The TMCM-1690-CoE is a single axis FOC servo controller gate driver module for 3-phase BLDC and DC motors with up to 1.5A gate drive current and +60V supply. It offers a UART debug interface and an EtherCAT ® SPI PDI with CANopen-over-EtherCAT protocol support for communication. TMCM-1690-CoE supports incremental encoders, digital hall sensors, and absolute SPI encoders as position feedback.

## Controller and Driver

- Gate drive current: 1.5A
- Supply voltage +10V to +60V DC, (+48V nominal)
- Field-oriented control (FOC) with up to 100kHz PWM and current control loop
- Temperature rating: -30 °C to +60 °C (standard version)

## Position Feedback

- Incremental encoders (ABN)
- Digital HALL sensors
- Absolute SPI encoder support for Analog Devices ADA4573 and RLS AM4096

## Interfaces

- Digital UART debug interface (RS232 with external transceiver on base board)
- EtherCATSPIprocessdatainterface (PDI) (external Ethercat MAC controller and Ethernet PHYs needed on base board)
- 2x general purpose digital inputs/outputs (0V to +3.3V input range)
- 1x analog input (0V to +3.3V input range)

## Mechanical data

- Board size: 27.0mm x 22.5mm
- Edge castellation with 54 half-cut plated through-hole pins at 1.5mm pin pitch

## Software

- EtherCAT communication protocol stack with CANopen-over-EtherCAT (COE) with DS402 pro/uniFB01le. Refer to the TMCM-1690-CoE COE /uniFB01rmware manual for more details.

<!-- image -->

## 2 Order Codes

The TMCM-1690-CoE comes preprogrammed with CANopen-over-EtherCAT (CoE) protocol /uniFB01rmware. Speci/uniFB01c information on the CoE protocol implementation is provided in the separate /uniFB01rmware manual.

Table 1: TMCM-1690-CoE Order Codes

| Order Code      | Description                                                                                                                      | Size (L x WxH)      |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------|---------------------|
| TMCM-1690-CoE   | 60V/10A RMS FOC servo controller and gate driver module for BLDC and DC motors with CANopen-over-EtherCAT (CoE) soft- ware stack | 27.0mm x 22.5mmx3mm |
| TMCM-1690-CoE-T | 60V/10A RMS FOC servo controller and gate driver module for BLDC and DC motors with CANopen-over-EtherCAT (CoE) soft- ware stack | 27.0mm x 22.5mmx3mm |

( -T = tape and reel version )

<!-- image -->

## 3 Mechanical and Electrical Interfacing

## 3.1 Size of the Board

The board with the controller/driver electronics has an overall size of 27.0mm x 22.5mm x 3mm.

Figure 1: Board Dimensions and Pin Positions (All Values in mm)

<!-- image -->

## 3.2 Board Mounting Considerations

The pins of the board have the dimensions of 1.0mm x 0.65mm. The recommended pad size is 1.0mm x 1.3mm with the center positioned on the board outline such that the part extending under the board is 1:1 with the pin.

<!-- image -->

Figure 2: Pin Dimensions and Recommended Pad Size (All Values in mm)

<!-- image -->

## 4 Pinout and Pin Descriptions

## 4.1 Package Pinout

Pin numbers are also printed in the top silkscreen of TMCM-1690-CoE.

<!-- image -->

<!-- image -->

Figure 3: TMCM-1690-CoE Pinout (Top View)

<!-- image -->

## 4.2 Pin Table

| Pin Assignments   | Pin Assignments   | Pin Assignments   | Pin Assignments   | Pin Assignments                                                                                                                                                                                                                                                                                                                                                                                  |
|-------------------|-------------------|-------------------|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Pin               | Name              | Direction         | Ref Supply        | Description                                                                                                                                                                                                                                                                                                                                                                                      |
| 1,17, 27,43       | GND               | -                 | -                 | System ground                                                                                                                                                                                                                                                                                                                                                                                    |
| 2                 | IRQ_PDI           | input             | +3.3V             | Interrupt signal for PDI from external ESC                                                                                                                                                                                                                                                                                                                                                       |
| 3                 | SPI1_CSN          | output            | +3.3V             | SPI1 PDI to external ESC, chip select output                                                                                                                                                                                                                                                                                                                                                     |
| 4                 | SPI1_MOSI         | output            | +3.3V             | SPI1 PDI to external ESC, serial data output                                                                                                                                                                                                                                                                                                                                                     |
| 5                 | SPI1_MISO         | input             | +3.3V             | SPI1 PDI to external ESC, serial data input                                                                                                                                                                                                                                                                                                                                                      |
| 6                 | SPI1_SCK          | output            | +3.3V             | SPI1 PDI to external ESC, serial clock output                                                                                                                                                                                                                                                                                                                                                    |
| 7                 | W_RS-             | input             | +3.3V             | Motor phase Wload-side current sense resistor connection                                                                                                                                                                                                                                                                                                                                         |
| 8                 | W_RS+             | input             | +3.3V             | Motor phase Wpower-side current sense resis- tor connection                                                                                                                                                                                                                                                                                                                                      |
| 9                 | V_RS-             | input             | +3.3V             | Motor phase V load-side current sense resistor connection                                                                                                                                                                                                                                                                                                                                        |
| 10                | V_RS+             | input             | +3.3V             | Motor phase V power-side current sense resis- tor connection                                                                                                                                                                                                                                                                                                                                     |
| 11                | U_RS-             | input             | +3.3V             | Motor phase U load-side current sense resistor connection                                                                                                                                                                                                                                                                                                                                        |
| 12                | U_RS+             | input             | +3.3V             | Motor phase U power-side current sense resis- tor connection                                                                                                                                                                                                                                                                                                                                     |
| 13                | GPIO2             | in/out            | +3.3V             | SW con/uniFB01gurable general purpose IO. Output mode = push-pull. Input mode with con/uniFB01g- urable built-in pull-up resistor.                                                                                                                                                                                                                                                               |
| 14                | +12V              | in/out            | -                 | Output of internal gate voltage regulator and supply pin of low side gate drivers. Attach 2.2 µ F to 22 µ F ceramic capacitor to GNDplane near to pin for best performance. Use at least 5 to 10 times more capacity than for bootstrap capaci- tors. In case an external gate voltage supply is available, tie VSA and +12V to the external sup- ply. See section on power supply requirements. |
| 15                | +VSA              | input             | -                 | Analoggatedriver supply for internal regulators. Provide a 100nF /uniFB01ltering capacitor to GND. See power supply requirements section.                                                                                                                                                                                                                                                        |
| 16                | +VM               | input             | -                 | Motor supply voltage. Provide /uniFB01ltering capacity near pin with short loop to GND plane. Must be tied to the positive bridge supply voltage. Se- vere ringing must be avoided. See power supply requirements section.                                                                                                                                                                       |

<!-- image -->

|   Pin | Name   | Direction   | Ref Supply   | Description                                                                                                                                                                                                                               |
|-------|--------|-------------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    18 | LSW    | output      | +VM          | Low-side gate drive output. Connect to gate of the Wphase low-side n-channel MOSFET.                                                                                                                                                      |
|    19 | W      | input       | +VM          | Bridge center and bootstrap capacitor negative connection. Connect to source pin of the high side Wphase MOSFET.                                                                                                                          |
|    20 | HSW    | output      | +VM          | High-side gate drive output. Connect to gate of the Wphase high-side n-channel MOSFET.                                                                                                                                                    |
|    21 | LSV    | output      | +VM          | Low-side gate drive output. Connect to gate of the V phase low-side n-channel MOSFET.                                                                                                                                                     |
|    22 | V      | input       | +VM          | Bridge center and bootstrap capacitor negative connection. Connect to source pin of the high side V phase MOSFET.                                                                                                                         |
|    23 | HSV    | output      | +VM          | High-side gate drive output. Connect to gate of the V phase high-side n-channel MOSFET.                                                                                                                                                   |
|    24 | LSU    | output      | +VM          | Low-side gate drive output. Connect to gate of the U phase low-side n-channel MOSFET.                                                                                                                                                     |
|    25 | U      | input       | +VM          | Bridge center and bootstrap capacitor negative connection. Connect to source pin of the high side U phase MOSFET.                                                                                                                         |
|    26 | HSU    | output      | +VM          | High-side gate drive output. Connect to gate of the U phase high-side n-channel MOSFET.                                                                                                                                                   |
|    28 | REF_R  | input       | +3.3V        | Right reference switch input. When enabled in software, the REF_R switch input stops mo- tor movement in positive direction (position counter increasing) while activated.                                                                |
|    29 | REF_L  | input       | +3.3V        | Left reference switch input. When enabled in software, the REF_L input stops motor move- ment in negative direction (position counter de- creasing) while activated.                                                                      |
|    30 | AIN    | input       | +3.3V        | General purpose analog input using the inte- grated ADC of the on-board microcontroller. The resolution of this converter is 12 bit. The analog input can also be used as a digital input. The analog input voltage range is 0V to +3.3V. |
|    31 | TEMP   | input       | +3.3V        | Analog input for temperature measurement. Connect a 10kΩ thermal resistor (NTC) to +3.3V and a 2.2kΩ resistor to ground from this pin.                                                                                                    |
|    32 | HALL_U | input       | +3.3V        | Digital HALL sensor input, channel U                                                                                                                                                                                                      |
|    33 | HALL_V | input       | +3.3V        | Digital HALL sensor input, channel V                                                                                                                                                                                                      |
|    34 | HALL_W | input       | +3.3V        | Digital HALL sensor input, channelW                                                                                                                                                                                                       |
|    35 | ENC_N  | input       | +3.3V        | Incremental encoder input index channel                                                                                                                                                                                                   |
|    36 | ENC_B  | input       | +3.3V        | Incremental encoder input channel B                                                                                                                                                                                                       |

<!-- image -->

|   Pin | Name            | Direction   | Ref Supply   | Description                                                                                                                                                                           |
|-------|-----------------|-------------|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    37 | ENC_A           | input       | +3.3V        | Incremental encoder input channel A                                                                                                                                                   |
|    38 | BRAKE           | output      | +3.3V        | PWM output for brake chopper circuit. The BRAKE output can be used to limit the supply voltage. Connect it to an external MOSFET with load resistor to dump energy into the resistor. |
|    39 | NC              | -           | -            | Not connected.                                                                                                                                                                        |
|    40 | ENABLE          | input       | +3.3V        | Enable pin. Drive low to put TMCM-1690-CoE in low power mode. Drive high to +3.3V rail for op- eration. Pulled low by a built-in pull-up resistor when left open.                     |
|    41 | nRST            | input       | +3.3V        | Resets the entire module when pulled low. As the module is reset automatically on power up, the nRST pin can normally be left open: it is pulled high by a built-in pull-up resistor. |
|    42 | +3.3V           | input       | -            | +3.3V logic and interface supply voltage. See section on power supply requirements.                                                                                                   |
|    44 | RXD             | input       | +3.3V        | UART interface receive line                                                                                                                                                           |
|    45 | TXD             | output      | +3.3V        | UART interface transmit line                                                                                                                                                          |
|    46 | LED_ERROR       | output      | +3.3V        | LED output for CANopen-over-EtherCAT ERROR signal.                                                                                                                                    |
|    47 | ENC2_A_SPI_MOSI | in/out      | +3.3V        | SPI serial data output (for external absolute en- coder) or incremental encoder 2 A input.                                                                                            |
|    48 | ENC2_B_SPI_MISO | input       | +3.3V        | SPI serial data input (for external absolute en- coder) or incremental encoder 2 B input.                                                                                             |
|    49 | ENC2_N_SPI_SCK  | in/out      | +3.3V        | SPI serial clock (for external absolute encoder) or incremental encoder 2 N input.                                                                                                    |
|    50 | SPI_CSN         | output      | +3.3V        | SPI chip select output (for external absolute en- coder)                                                                                                                              |
|    51 | ECAT_SYNC0      | input       | +3.3V        | EtherCAT SYNC0 input signal from external ESC                                                                                                                                         |
|    52 | ECAT_SYNC1      | input       | +3.3V        | EtherCAT SYNC1 input signal from external ESC                                                                                                                                         |
|    53 | LED_RUN         | output      | +3.3V        | LED output for CANopen-over-EtherCAT RUN signal.                                                                                                                                      |
|    54 | CSM             | input       | +3.3V        | Tie to Ground. For future use.                                                                                                                                                        |

Table 2: Pin Assignments TMCM-1690-CoE

<!-- image -->

## 5 System Architecture

TMCM-1690-CoE comes with an MCU containing motion control algorithms, a MOSFET gate driver, and 3 current-sense ampli/uniFB01ers (CSAs). It is designed to be easily mounted either by hand soldering or re/uniFB02ow to a carrier board containing the power stage, user-de/uniFB01ned connectors, and minimal support components. The TMCM-1690-CoE features state-of-the-art /uniFB01eld-oriented control (FOC) algorithm using hall or incremental encoder signals for permanent magnet synchronous motors (PMSM) motors as well as block hall commutation (six step mode) for BLDC motors. Current-, velocity- and position controller are implemented for all commutation modes and can be parameterized through the supported communication protocol and interfaces. Absolute encoders can be connected to the encoder SPI if required by the application. The high-level system architecture is shown in Figure 4.

<!-- image -->

Figure 4: TMCM-1690-CoE System Architecture

<!-- image -->

## 6 External Components

Very few external components are required to get started with the TMCM-1690-CoE. The following sections highlight the requirements.

## 6.1 Analog Input

The analog input signal of TMCM-1690-CoE can be used as a target value to, for example, control torque, velocity, or other parameters. The analog input voltage is routed directly to the TMCM-1690-CoE µ C and is converted with a resolution of 12 bit. AIN is designed for a voltage range between 0V and 3.3V. For higher voltages, use a voltage divider plus optional protection diode, as shown in Figure 5.

Figure 5: Protection of AIN for Higher Voltage Control

<!-- image -->

## 6.2 Power Supply Requirements

Two power supplies are required for the operation of TMCM-1690-CoE in addition to the motor supply. A 12V VSA supply powers the gate driver, which is used to drive the power stage. A 3.3V I/O power supply is required to operate the motion controller and current-sense ampli/uniFB01ers. The MAXM15068 is a great low-touch candidate for use for the 12V supply and the MAXM17502 is an excellent choice for the 3.3V I/O supply.

In cases where the motor runs at or below 24V, it is possible to eliminate the need for the external 12V power supply by instead relying on the internal 12V LDO on the gate driver. When this con/uniFB01guration is desired, simply separate the +12V and VSA rails, powering VSA from the VM supply and leaving +12V /uniFB02oating. When the motor is operated with a supply greater than 24V nominal, the power dissipation in the LDO is too high, VSA should be connected externally to +12V, and both should be supplied by a 12V power supply (see Figure 6).

<!-- image -->

Figure 6: Power Supply Con/uniFB01gurations

<!-- image -->

The TMCM-1690-CoE includes small bypass capacitances, which are intended to /uniFB01lter power supply ripple arising from small local inductances. External bulk capacitances must be placed to handle the much larger board level parasitics and to provide a stable power supply for the TMCM-1690-CoE. It is recommended that the 3.3V rail be bypassed by at minimum 10 µ F of capacitance. The VM and VSA (12V) supplies should be bypassed externally by roughly 9 µ F to 10 µ F minimum as well. To minimize equivalent series resistance (ESR) it may be best to accomplish this with two 4.7 µ F capacitors in parallel. All bypass capacitors should be placed as close to the pin as possible.

## 6.3 Power Stage - MOSFET Bridge

The TMCM-1690-CoE utilizes the TMC6100 gate driver, offering high-power gate-driver for PMSM servo or BLDC motors. Using six external MOSFETs, the TMCM-1690-CoE controls motors in power ranges from watts to kilowatts. Software-controlled drive strength allows in-system electromagnetic emissions (EME) optimization. Programmable safety features like short detection and overtemperature thresholds together with an SPI for diagnostics allow robust and reliable designs. With the TMCM-1690-CoE, minimal external components are required to build a rugged drive with full protection and diagnostics. The driver is capable of driving the MOSFETS' gates with controlled gate charge current options of 0.5A, 1A, or 1.5A. This allows the user to reduce dynamic losses and improve system e/uniFB03ciency over a broad power range. External series resistors can also be used to further shape the slope of the curve, if necessary.

The selection of power MOSFETs depends on a number of factors, like package size, on-resistance, gate charge, voltage rating, and supplier availability. It is not true that larger, lower RDS-ON MOSFETs are always better since a larger device also has higher capacitances. Larger capacitances may add more ringing in trace inductance and may also lead to increased power dissipation in the gate drive circuitry. MOSFETs should be selected /uniFB01rst based on the required motor voltage (adding 5V to 10V of reserve to the peak supply voltage for margin) and the desired maximum current. Current requirements must be

<!-- image -->

met both in terms of the rated current of the device as well as in terms of resistive power losses, which result in power losses that can be dissipated by the chosen MOSFET package. The TMCM-1690-CoE drives the MOSFET gates with roughly 10V. Therefore, normal 10V speci/uniFB01ed gate voltage MOSFETs are su/uniFB03cient. Logic level FETs (4.5V speci/uniFB01ed RDS-ON) also work but may be more susceptible to bridge cross-conduction due to lower V GS ( th ) .

The gate-drive current and MOSFET gate resistors R G (optional) should be chosen based on the MOSFET gate-drain charge (Miller charge) to yield reasonable slope times. Figure 7 shows the in/uniFB02uence of the Miller charge on the switching event.

Figure 7: Miller Charge Determines Switching Slope

<!-- image -->

Figure 8 additionally shows the switching events in different load situations (load pulling the output up or down), and the required bridge brake-before-make time. Note that modern MOSFETs with fast and soft recovery bulk diodes and low reverse recovery charge should be chosen. A small, SMD MOSFET package allows for more compact routing, which reduces the effects of parasitic inductances.

<!-- image -->

Figure 8: Slopes, Miller Plateau, and Blanking Time

<!-- image -->

Table 3 offers a rule of thumb for the MOSFET driver current (DRVSTRENGTH setting) and the selection of gate resistors ( R G ).

Miller Charge [nC] (typ)

DRVSTRENGTH setting

Gate Resistor

|          |        | R G Ω              |
|----------|--------|--------------------|
| < 10     | 0 or 1 | ≤ 10 (recommended) |
| 10 to 20 | 0 to 2 | ≤ 5 (optional)     |
| 20 to 80 | 1 to 3 | ≤ 2.5 (optional)   |
| > 80     | 3      | ≤ 1 (optional)     |

[

]

Table 3: MOSFET Miller Charge vs. DRVSTRENGTH Setting and Gate Resistor R G

Use the lowest gate driver strength setting DRVSTRENGTH giving favorable switching slopes, before increasing the value of the gate series resistors. A slope time of 40ns to 80ns is su/uniFB03cient and is normally covered by a break-before-make (BBM) time setting of 1 to 4 (4 is default). In case slower slopes have to be used, for example with large MOSFETs, ensure that the BBM time su/uniFB03ciently covers the switching event to avoid bridge cross conduction. The shortest break-before-make time, safely covering the switching event, gives best results. Add roughly 30% of margin to cover manufacturing variations in the MOSFETs and driver.

The TMCM-1690-CoE provides an increased hold OFF gate current to avoid cross-conduction in the bridge, which can be induced by high dV/dt on the U/V/W node. This protection is less effective when using gate resistors ( R G ). Therefore, a diode in parallel with R G may be required to ensure that the high-side (lowside) MOSFETs are held safely OFF during switching events on the low-side (high-side) MOSFET.

Break-before-make timing on the gate driver can be con/uniFB01gured per the appropriate /uniFB01rmware user guide based on the version in use.

## 6.3.1 Tuning of the MOSFET Bridge

To ensure low power dissipation and good eletromagnetic compatibility (EMC) behavior, a clean switching event with limited ringing is essential. Poor layout and/or improperly selected components can endanger stable operation of the circuit. Therefore, it is important to understand the effect of parasitic trace inductivity and MOSFET reverse recovery.

Stray inductances in power routing cause ringing whenever the opposite MOSFET is in diode conduction prior to switching on a low-side or high-side MOSFET. Diode conduction occurs during break-before make time whenever the load current is inverse to the following bridge polarity. The MOSFET bulk diode has a certain, type-speci/uniFB01c reverse recovery time and charge. This time typically is in the range of a few 10ns. During reverse recovery time, the bulk diode causes high current /uniFB02ow across the bridge. This current is taken from the power supply /uniFB01lter capacitors (see the thick lines in Figure 9). Once the diode opens, parasitic inductances try to keep the current /uniFB02owing.

<!-- image -->

Figure 9: Bridge Protection Options and Power Routing Ringing Mitigation

<!-- image -->

A high, fast slope results and leads to ringing in all parasitic inductances (see Figure 10, Figure 11, and Figure 12). This ringing may lead to bridge voltage undershooting the GND level as well as fast pulses on the gate driver source and all MOSFET connections. The driver IC must not see spikes on its U/V/W pins to GND going below -5V. Additionally, severe gate driver source ripple can potentially overload the charge-pump circuitry. Measure the voltage directly at the driver pins to driver GND to see the effects of the parasitics with a given layout. The amount of undershoot depends on energy stored in parasitic inductances from low side drain to low side source and to GND (including any sense resistances). When using relatively small MOSFETs, a soft slope control requires a high gate series resistance. This endangers safe MOSFET switch off. Add additional diodes to ensure safe MOSFET off conditions with slow switch-on slopes (Figure 13).

<!-- image -->

Figure 10: Ringing of Output (Green) and Gate Voltages (Yellow, Blue) with DRVSTRENGTH = 0

<!-- image -->

Figure 11: Ringing of Output (Green) and Gate Voltages (Yellow, Blue) with DRVSTRENGTH = 2

<!-- image -->

Figure 12: Ringing of Output (Green) and Gate Voltages (Yellow, Blue) with DRVSTRENGTH = 3

<!-- image -->

## Tips for success:

1. Use SMD MOSFETs and short interconnections.
2. Provide su/uniFB03cient power /uniFB01ltering capacity close to the bridge and close to VM pin.
3. Tune MOSFET switching slopes (measure switch-on event at MOSFET gate) to be slower than the MOSFET bulk diode reverse recovery time. This reduces cross conduction.
4. Add optional gate resistors close to MOSFET gate and output capacitors to ensure clean switching and reliable operation by minimizing ringing.
5. Some MOSFETs eliminate reverse recovery charge by integrating a fast diode from source to drain.

## 6.3.2 Bridge Optimization Example

In Figure 13, a driver for a 15A, 60V application has been designed using the MOSFET BSC037N08NS (3.7mΩ, 80V, QG = 56nC, t RR = 41ns in the standard schematic). The MOSFETs offer roughly 20ns slope time at the lowest driver strength setting. Switching quality is good and signals are clean (see Figure 8). At double drive strength, the slope time halves, and switching events still are clean. When increasing to full gate drive strength, faster slopes lead to increased ringing on all signals. Low or medium slope setting is best. Additional gate resistors or 1nF output capacitors do not bring any additional improvement. The layout already proves to be good with no additional components required!

<!-- image -->

Figure 13: Bridge Design Example

<!-- image -->

## 6.3.3 Bridge Layout Considerations

- Tune the bridge layout for minimum loop inductivity. A compact layout is best.
- Keep MOSFET gate connections short and straight, and avoid loop inductivity between bridge feedback (U,V,W) and corresponding HS driver pin. Loop inductance is minimized with parallel traces, or adjacent traces on adjacent layers. A wider trace reduces inductivity (do not use minimum trace width).
- Place the TMCM-1690-CoE near the low side MOSFETs GND connections, with its GND connections directly connected to the same GND plane.
- Optimize switching behavior by using lowest acceptable gate current setting.
- Check in/uniFB02uence of optional components shown in Figure 9.
- Measure the performance of the bridge by probing BM pins directly at the bridge or at the TMC6100 using a short GND tip on the scope probe rather than a GND cable, if available.

## 6.3.4 Current Sensing Resistors

Direct coil current measurement is recommended for FOC in both hall- or encoder-mode operation. Therefore, the TMCM-1690-CoE includes three current-sense ampli/uniFB01ers capable of handling high common mode ranges.

The following equation can be used to select the appropriate sense resistor.

<!-- formula-not-decoded -->

The power losses in these sense resistors can be calculated by the following formula:

<!-- formula-not-decoded -->

TMCM-1690-CoE supports bottom shunt current sensing as shown in Figure 14. For bottom shunt current sensing, the internal current-sense ampli/uniFB01ers have a gain of 10 and the outputs should again remain in the range of 0V to +3.3V. The output of the ampli/uniFB01ers is internally connected to a 12-bit ADC, which centers the zero current at +3.3V/2 = 1.65V. Margin of roughly 10% at the high side should be included to prevent saturation of the ampli/uniFB01ers and/or exceeding the full-scale range of the ADC when close to maximum current.

<!-- image -->

<!-- image -->

Figure 14: Bottom Shunt Current Sense

<!-- image -->

## 6.4 Diagnostics and Protections

TMCM-1690-CoE supplies a complete set of diagnostic and protection capabilities, like short circuit protection and undervoltage detection. Refer to the /uniFB01rmware manual for full details.

## 6.4.1 Temperature Sensors

TheTMCM-1690-CoEincludesaTEMPinputfortemperaturemonitoringoftheexternalpowerstage. Place a thermistor in thermal contact with one of the external MOSFETs as shown in Figure 15 to monitor the temperature of the bridge.

The TMCM-1690-CoE's on-board gate driver also integrates a four-level temperature sensor (120°C prewarning and selectable 136°C/143°C/150°C thermal shutdown) for diagnostics, and for protection of the IC, the power MOSFETs, and adjacent components against excess heat. Choose the overtemperature level to safely cover error conditions like missing heat convection. In typical applications, however, heat is mainly generated by the power MOSFETs, and, at increased voltage, by the internal voltage regulators. For many applications, already the overtemperature pre-warning indicates an abnormal operation situation and can be used to initiate user warning or power reduction measures like motor current reduction. The thermal shutdown is just an emergency measure and temperature rising to the shutdown level should be prevented by design.

After triggering the overtemperature sensor (ot /uniFB02ag), the driver remains switched off until the system temperature falls below the pre-warning level (otpw) to avoid continuous heating to the shutdown level. Full details on software implementation of all temperature sensors can be found in the /uniFB01rmware user guide for each /uniFB01rmware version.

Figure 15: Thermistor Implementation

<!-- image -->

## 6.4.2 Gate Driver Short Circuit Protection

The TMCM-1690-CoE protects the MOSFET power stages against a short circuit or overload condition by monitoring the voltage drop in the high-side MOSFETs, as well as the voltage drop in the low-side MOSFETs (Figure 16). A programmable short detection delay allows adjusting the detector to work with very slow switching slopes. Additionally, the short detector allows /uniFB01ltering of the signal. This helps to prevent spurious triggering caused by effects of PCB layout, or long, adjacent motor cables. All control bits are available through an internal register. Additionally, the short detection is protected against single events, for example, caused by electrostatic discharges (ESD), by retrying up to three times (con/uniFB01gurable between one and three) before switching off the motor continuously.

<!-- image -->

Figure 16: Short Detection (U/V/W Outputs)

<!-- image -->

The following is a list of con/uniFB01gurable aspects of the short circuit protection scheme. How to change the speci/uniFB01c settings can be found in the /uniFB01rmware manuals.

- Short or overcurrent detector level for lowside FETs. Checks for voltage drop in LS MOSFET and/or bottom shunt sense resistor when in low side mode. This parameter may be tuned for sensitive detection.
- Short to GND detector level for highside FETs. Checks for voltage drop on high side MOSFET. Use high setting to avoid false detection.
- Spike /uniFB01ltering bandwidth for short detection. Increase value if erroneous short detection occurs.
- Number of retries after short detection until permanent bridge shutdown.
- Short detection delay. Ensure the delay covers the bridge switching time.
- Disable short to VS protection.
- Disable short to GND protection.
- Option to respond individually to half bridge protection needs or to disable all bridges upon single half-bridge short condition

<!-- image -->

## 6.4.3 Avoiding Power Supply Overshoot

To avoid power supply overshoot during events like deceleration where energy is fed back from the motor to the supply, the TMCM-1690-CoE includes a brake chopper output, which can be connected to a low-side N-channel MOSFET. The brake chopper duty cycle is actively adapted to control overshoot on the supply. Figure 14 shows an example circuit.

## 7 CANopen-over-EtherCAT Protocol Version

CANopenoverEthercat, or CoE, is a protocol that supports all CANopen products to be used over EtherCAT. Making direct use of the service data objects protocol, existing CANopen stacks can be used with minimal modi/uniFB01cation. By using EtherCAT instead of CAN bus for transmitting and receiving data, it merges the advantages of the widely used CANopen protocol with the high-speed /uniFB01eld-bus system. As such, CoE enables CANopen for use in applications with real-time requirements, making it ideal for robotics and industrial automation, as well as other devices requiring high reliability, high synchronicity, and high bandwidth. Details on implementation are found in the TMCM-1690-CoE CoE /uniFB01rmware manual.

TMCM-1690-CoE requires an external ESC (EtherCAT MAC controller chip) to be connected to the SPI process data interface.

## 8 Communication Interfaces

## 8.1 EtherCAT SPI PDI

The TMCM-1690-CoE provides an SPI for communication. The SPI is used as the so-called process data interface (PDI) to the external ESC.

The SPI uses SPI mode 3. The SPI\_MISO pin is set to high impedance when the SPI\_nCS pin is high. It is not possible to daisy-chain the TMCM-1690-CoE with other SPI devices or used multiple SPI devices in parallel on the same bus. The SPI is reserved to function as the PDI for the CANopen-over-EtherCAT version only. The following pins are used for this SPI PDI. It is used as the host interface while the external ESC is the peripheral:

- SPI1\_CSN: SPI chip select output to ESC.
- SPI1\_SCK: SPI clock signal output to ESC.
- SPI1\_MOSI: SPI data output to ESC.
- SPI1\_MISO: SPI data input from ESC.
- IRQ\_PDI: Input from ESC used for signaling application layer events and handshaking.
- ECAT\_SYNC0: Optional input from ESC for real-time synchronization.
- ECAT\_SYNC1: Optional input from ESC for real-time synchronization.

<!-- image -->

## 9 Absolute Maximum Ratings

Table 4: Absolute Maximum Ratings

| Symbol                                         | Description                                                                                            | Min   | Max   | Unit   |
|------------------------------------------------|--------------------------------------------------------------------------------------------------------|-------|-------|--------|
| VM                                             | Motor supply voltage range                                                                             | -0.5  | 65    | V      |
| VM                                             | Short duration max (limited by peak voltage on charge pump output and internal bootstrap cap voltages) |       | 70    | V      |
| VSA                                            | Motor driver supply voltage range                                                                      | -0.5  | 65    | V      |
| +12V                                           | Motor driver supply voltage range                                                                      | -0.5  | 15    | V      |
| +3.3V                                          | Logic supply voltage range                                                                             | -0.3  | 4     | V      |
| U, V,W                                         | Peak voltage due to inductive kick                                                                     | -6    | VSA+6 | V      |
| LSU, LSV, LSW                                  |                                                                                                        | -0.5  | 15    | V      |
| HSU, HSV, HSW                                  |                                                                                                        | -0.5  | VM+15 | V      |
| _RS+, U_RS-, V_RS+, V_RS-, W_RS+, W_RS-        |                                                                                                        | -5    | 70    | V      |
| U_RS+ to U_RS-, V_RS+ to V_RS-, W_RS+ to W_RS- |                                                                                                        | -2    | 2     | V      |
| All other pins                                 |                                                                                                        | -0.3  | 4     | V      |
| Continuous cur- rent into RS+ and RS-          |                                                                                                        | -10   | 10    | mA     |
| Continuous cur- rent into any other pin        |                                                                                                        | -5    | 5     | mA     |
| T ENV                                          | Operating temperature range                                                                            | -30   | 60    | °C     |
| T SHELF                                        | Storage temperature range                                                                              | -40   | 125   | °C     |

Stresses outside the ranges listed in Table 4 may cause permanent damage to the device. This is a stress rating only and functional operation of the device at those or any other conditions above those indicated in the operation listings of this speci/uniFB01cation is not implied. Exposure close to or outside the maximum rating conditions for extended periods may affect device reliability.

<!-- image -->

## NOTICE

## 10 Electrical Characteristics

| Symbol                                                         | Description                                                                | Min                                                            | Typ                                                            | Max                                                            | Unit                                                           |
|----------------------------------------------------------------|----------------------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------|
| POWER SUPPLY INPUTS OPERATING VOLTAGE RANGES                   | POWER SUPPLY INPUTS OPERATING VOLTAGE RANGES                               | POWER SUPPLY INPUTS OPERATING VOLTAGE RANGES                   | POWER SUPPLY INPUTS OPERATING VOLTAGE RANGES                   | POWER SUPPLY INPUTS OPERATING VOLTAGE RANGES                   | POWER SUPPLY INPUTS OPERATING VOLTAGE RANGES                   |
| V VM_IN                                                        | VM Input Operating Voltage Range                                           | 10                                                             | 48                                                             | 60                                                             | V                                                              |
| V VSA_IN                                                       | VSA Input Operating Voltage Range                                          | 10                                                             | 12                                                             | 60                                                             | V                                                              |
| V +12V_IN                                                      | +12V Input Operating Voltage Range                                         | 11                                                             | 12                                                             | 13                                                             | V                                                              |
| V +3.3V_IN                                                     | +3.3V Input Operating Voltage Range                                        | 3.0                                                            | 3.3                                                            | 3.6                                                            | V                                                              |
| GATE DRIVER POWER SUPPLY CURRENT RATINGS                       | GATE DRIVER POWER SUPPLY CURRENT RATINGS                                   | GATE DRIVER POWER SUPPLY CURRENT RATINGS                       | GATE DRIVER POWER SUPPLY CURRENT RATINGS                       | GATE DRIVER POWER SUPPLY CURRENT RATINGS                       | GATE DRIVER POWER SUPPLY CURRENT RATINGS                       |
| I S                                                            | Total gate driver supply current, driver disabled                          |                                                                | 10                                                             | 15                                                             | mA                                                             |
| I VSA                                                          | VSA Supply current with f CLK = 24MHz, in- ternal clock, driver disabled   |                                                                | 7                                                              |                                                                | mA                                                             |
| LINEAR REGULATOR (+12V OUT PIN -ONLY WHEN OPERATING BELOW 24V) | LINEAR REGULATOR (+12V OUT PIN -ONLY WHEN OPERATING BELOW 24V)             | LINEAR REGULATOR (+12V OUT PIN -ONLY WHEN OPERATING BELOW 24V) | LINEAR REGULATOR (+12V OUT PIN -ONLY WHEN OPERATING BELOW 24V) | LINEAR REGULATOR (+12V OUT PIN -ONLY WHEN OPERATING BELOW 24V) | LINEAR REGULATOR (+12V OUT PIN -ONLY WHEN OPERATING BELOW 24V) |
| V 12VOUT                                                       | See section on power supply require- ments.                                | 10.8                                                           | 11.5                                                           | 12.2                                                           | V                                                              |
| DIGITAL PINS                                                   | DIGITAL PINS                                                               | DIGITAL PINS                                                   | DIGITAL PINS                                                   | DIGITAL PINS                                                   | DIGITAL PINS                                                   |
| V IL                                                           | Input logic level low                                                      |                                                                |                                                                | 0.3 x V +3.3V                                                  | V                                                              |
| V IH                                                           | Input logic level high                                                     | 0.7 x V +3.3V                                                  |                                                                |                                                                | V                                                              |
| V IN_HYST                                                      | Input logic level hysteresis                                               |                                                                | 0.1 x V +3.3V                                                  |                                                                | V                                                              |
| V OL                                                           | Output low voltage, I OUT_LO = 2mA                                         |                                                                |                                                                | 0.2                                                            | V                                                              |
| V OH                                                           | Output high voltage, I OUT_HI = -2mA                                       | V +3.3V - 0.2                                                  |                                                                |                                                                | V                                                              |
| I LEAK                                                         | Input leakage current                                                      | -10                                                            |                                                                | 10                                                             | µ A                                                            |
| AIN, TEMP                                                      | AIN, TEMP                                                                  | AIN, TEMP                                                      | AIN, TEMP                                                      | AIN, TEMP                                                      | AIN, TEMP                                                      |
| V I                                                            | Input voltage range                                                        | 0                                                              |                                                                | 3.3                                                            | V                                                              |
|                                                                | Resolution                                                                 |                                                                | 12                                                             |                                                                | bits                                                           |
| GATE DRIVER                                                    | GATE DRIVER                                                                | GATE DRIVER                                                    | GATE DRIVER                                                    | GATE DRIVER                                                    | GATE DRIVER                                                    |
| R ONL                                                          | R DS_ON Low-Side Off-State Driver                                          |                                                                | 1.0                                                            | 1.6                                                            | Ω                                                              |
| R ONH                                                          | R DS_ON High-Side Off-State Driver                                         |                                                                | 1.3                                                            | 2.0                                                            | Ω                                                              |
| I SLPONLS0_2V                                                  | Low-Side Gate Driver Current, Turning on, at V GS = 2V, DRIVESTRENGTH = 0  |                                                                | 400                                                            |                                                                | mA                                                             |
| I SLPONLS2_2V                                                  | Low-Side Gate Driver Current, Turning on, at V GS = 2V, DRIVESTRENGTH = 2  |                                                                | 800                                                            |                                                                | mA                                                             |
| I SLPONLS3_2V                                                  | Low-Side Gate Driver Current, Turning on, at V GS = 2V, DRIVESTRENGTH = 3  |                                                                | 1200                                                           |                                                                | mA                                                             |
| I SLPOFFLS0_4V                                                 | Low-Side Gate Driver Current, Turning off, at V GS = 4V, DRIVESTRENGTH = 0 |                                                                | 600                                                            |                                                                | mA                                                             |

<!-- image -->

| I SLPOFFLS2_4V                            | Low-Side Gate Driver Current, Turning off, at V GS = 4V, DRIVESTRENGTH = 2                                        |              | 1200          |      | mA   |
|-------------------------------------------|-------------------------------------------------------------------------------------------------------------------|--------------|---------------|------|------|
| I SLPOFFLS3_4V                            | Low-Side Gate Driver Current, Turning off, at V GS = 4V, DRIVESTRENGTH = 3                                        |              | 1800          |      | mA   |
| I SLPONHS0_2V                             | High-Side Gate Driver Current, Turning on, at V GS = 2V, DRIVESTRENGTH = 0                                        |              | 400           |      | mA   |
| I SLPONHS2_2V                             | High-Side Gate Driver Current, Turning on, at V GS = 2V, DRIVESTRENGTH = 2                                        |              | 800           |      | mA   |
| I SLPONHS3_2V                             | High-Side Gate Driver Current, Turning on, at V GS = 2V, DRIVESTRENGTH = 3                                        |              | 1200          |      | mA   |
| I SLPOFFHS0_4V                            | High-Side Gate Driver Current, Turning off, at V GS = 4V, DRIVESTRENGTH = 0                                       |              | 600           |      | mA   |
| I SLPOFFHS2_4V                            | High-Side Gate Driver Current, Turning off, at V GS = 4V, DRIVESTRENGTH = 2                                       |              | 1200          |      | mA   |
| I SLPOFFHS3_4V                            | High-Side Gate Driver Current, Turning off, at V GS = 4V, DRIVESTRENGTH = 3                                       |              | 1800          |      | mA   |
| t BBM0                                    | MinimumEffective BBMTime,Individual LS and HS signals (Singleline = 0)                                            | 30           | 50            | 70   | ns   |
| t DLY                                     | Propagation Delay Time, Time from LS/HS Input signal change to start of driver output change                      | 65           | 85            | 110  | ns   |
| t DLY_MATCH                               | Propagation Delay Matching, Individual LS and HS signals (Singleline = 0)                                         |              |               | 10   | ns   |
| V CP                                      | Charge Pump Output Voltage                                                                                        | V 12VOUT - 2 | V 12VOUT - 1  |      | V    |
| V VCP - V VM                              | Charge Pump Voltage Threshold for Un- dervoltage Detection, rising, using inter- nal 5V regulator voltage         | 4.5          | 5.5           | 6.5  | V    |
| f CP                                      | Charge Pump Frequency                                                                                             |              | 1/32 f CLKOSC |      | Hz   |
| GATE DRIVER INTERNAL CLOCK                | GATE DRIVER INTERNAL CLOCK                                                                                        |              |               |      |      |
| f CLKOSC                                  | T J = -50°C                                                                                                       |              | 23.4          |      | MHz  |
| f CLKOSC                                  | T J = 50°C                                                                                                        | 23.0         | 24.0          | 26.0 | MHz  |
| f CLKOSC                                  | T J = 150°C                                                                                                       |              | 24.2          |      | MHz  |
| SHORT DETECTION (VS CONNECTS TO VM INSIDE | SHORT DETECTION (VS CONNECTS TO VM INSIDE                                                                         | TMCM-1690)   |               |      |      |
| t SD0                                     | Short-to-GND Detection Delay, FILT_ISENSE = 0, S2xx_LEVEL = 6, shortdelay = 0                                     | 0.5          | 0.85          | 1.1  | µ s  |
| t SD1                                     | Short-to-GND Detection Delay, shortde- lay = 1                                                                    | 1.1          | 1.6           | 2.2  | µ s  |
| V BM                                      | Short Detection Level S2VS , Measure- ment includes drop in case of bottom shunt current sensing, S2VS_LEVEL = 15 | 1.4          | 1.56          | 1.72 | V    |

<!-- image -->

| V BM                 | Short Detection Level S2VS, Measure- ment includes drop in case of bottom shunt current sensing, S2VS_LEVEL = 6   | 0.550   | 0.625   | 0.700   | V   |
|----------------------|-------------------------------------------------------------------------------------------------------------------|---------|---------|---------|-----|
| V VS - V BM          | S2G_LEVEL = 15, VM < 52V                                                                                          | 1.30    | 1.56    | 1.85    | V   |
| V VS - V BM          | S2G_LEVEL = 15, VM < 60V                                                                                          | 1.00    |         |         | V   |
| V VS - V BM          | S2G_LEVEL = 6, VM < 52V                                                                                           | 0.460   | 0.625   | 0.850   | V   |
| V VS - V BM          | S2G_LEVEL = 6, VM < 60V                                                                                           | 0.200   |         |         | V   |
| CURRENT SENSE INPUTS | CURRENT SENSE INPUTS                                                                                              |         |         |         |     |
| V CM                 | Input common-mode range                                                                                           | -0.3    |         | 65      | V   |
| V SENSE              | Input differential voltage range                                                                                  | -0.165  |         | 0.165   | V   |
|                      | Nominal gain                                                                                                      |         | 10      |         | V/V |

Table 5: General Operational Ratings of the Module

<!-- image -->

## 11 Figures Index

| 1   | Board Dimensions and Pin Positions                                                                                           | 5    | 10   | Ringing of Output                                              | (Green)                         | and        |    |
|-----|------------------------------------------------------------------------------------------------------------------------------|------|------|----------------------------------------------------------------|---------------------------------|------------|----|
| 2   | . Pin Dimensions and Recommended Pad Size . . . . . . . . . . . . . . . . .                                                  | 5    |      | Gate Voltages (Yellow, DRVSTRENGTH = 0 . . .                   | Blue) . . . . .                 | with . . . | 15 |
| 3   | TMCM-1690-CoE Pinout (Top View) . . TMCM-1690-CoE System                                                                     | 6 10 | 11   | Ringing of Output Gate Voltages (Yellow, DRVSTRENGTH = 2 . . . | (Green) Blue) . . . . .         | and with   | 15 |
| 4 5 | Architecture                                                                                                                 | 12   |      |                                                                |                                 | . . .      |    |
| 6   | Protection of AIN for Higher Voltage Control . . . . . . . . . . . . . . . . . . Power Supply Con/uniFB01gurations . . . . . | 11   | 12   | Ringing of Output                                              | (Green)                         | and        |    |
| 7   | Miller Charge Determines Switching Slope . . . . . . . . . . . . . . . . . . .                                               |      |      | Gate Voltages (Yellow, DRVSTRENGTH = 3 . . .                   | Blue) . . . . .                 | with . . . | 16 |
|     | Slopes, Miller Plateau, and Blanking                                                                                         | 13   | 13   | Bridge Design Example                                          | . . . . . .                     | . . .      | 16 |
| 8   | Time . . . . . . . . . . . . . . . . . . . .                                                                                 | 13   | 14   |                                                                | Bottom Shunt Current Sense . .  | . . .      | 18 |
|     | Bridge Protection Options and Power                                                                                          |      | 15   |                                                                | Thermistor Implementation . . . | . . .      | 19 |
| 9   | Routing Ringing Mitigation . . . . . . .                                                                                     | 15   | 16   |                                                                | Short Detection (U/V/W Outputs) | . . .      | 20 |

<!-- image -->

## 12 Tables Index

| 1 TMCM-1690-CoE Order Codes         | 4 5 General Operational Ratings of the          |
|-------------------------------------|-------------------------------------------------|
| 2 Pin Assignments TMCM-1690-CoE     | 9 Module . . . . . . . . . . . . . . . . . . 25 |
| 3 MOSFETMillerChargevs. DRVSTRENGTH | 6 Hardware Revision . . . . . . . . . . . 30    |
| Setting and Gate Resistor R G       | 14 7 Document Revision . . . . . . . . . . . 30 |
| 4 Absolute Maximum Ratings .        | 22                                              |

<!-- image -->

## 13 Supplemental Directives

## 13.2 Copyright

## 13.1 Producer Information

ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG owns the content of this user manual in its entirety, including but not limited to pictures, logos, trademarks, and resources.

Redistribution of sources or derived formats (for example, Portable Document Format or Hypertext Markup Language) must retain the above copyright notice, and the complete data sheet, user manual, and documentation of this product including associated application notes; and a reference to other available product-related documentation.

## 13.3 Trademark Designations and Symbols

Trademark designations and symbols used in this documentation indicate that a product or feature is owned and registered as trademark and/or patent either by ADI Trinamic or by other manufacturers, whose products are used or referred to in combination with ADI Trinamic's products and ADI Trinamic's product documentation.

This Hardware Manual is a non-commercial publication that seeks to provide concise scienti/uniFB01c and technical user information to the target user. Thus, trademark designations and symbols are only entered in the Short Spec of this document that introduces the product at a quick glance. The trademark designation /symbol is also entered when the product or feature name occurs for the /uniFB01rst time in the document. All trademarks and brand names used are property of their respective owners.

## 13.4 Target User

The documentation provided here, is for programmers and engineers only, who are equipped with the necessary skills and have been trained to work with this type of product.

The Target User knows how to responsibly make use of this product without causing harm to himself or others, and without causing damage to systems or devices, in which the user incorporates the product.

## 13.5 Disclaimer: Life Support Systems

ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life support systems, without the speci/uniFB01c written consent of ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG.

Life support systems are equipment intended to support or sustain life, and whose failure to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

Information given in this document is believed to be accurate and reliable. However, no responsibility is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties which may result from its use. Speci/uniFB01cations are subject to change without notice.

## 13.6 Disclaimer: Intended Use

The data speci/uniFB01ed in this user manual is intended solely for the purpose of product description. No representations or warranties, either express or implied, of merchantability, /uniFB01tness for a particular purpose

<!-- image -->

or of any other nature are made hereunder with respect to information/speci/uniFB01cation or the products to which information refers and no guarantee with respect to compliance to the intended use is given.

In particular, this also applies to the stated possible applications or areas of applications of the product. TRINAMIC products are not designed for and must not be used in connection with any applications where the failure of such products would reasonably be expected to result in signi/uniFB01cant personal injury or death (safety-Critical Applications) without ADI Trinamic's/Trinamic Motion Control GmbH &amp; Co. KG speci/uniFB01c written consent.

ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG products are not designed nor intended for use in military or aerospace applications or environments or in automotive applications unless speci/uniFB01cally designated for such use by ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG.

ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG conveys no patent, copyright, mask work right or other trade mark right to this product. ADI Trinamic/Trinamic Motion Control GmbH &amp; Co. KG assumes no liability for any patent and/or other trade mark rights of a third party resulting from processing or handling of the product and/or any other use of the product.

## 13.7 Collateral Documents &amp; Tools

This product documentation is related and/or associated with additional tool kits, /uniFB01rmware and other items, as provided on the product page at: www.analog.com.

<!-- image -->

## 14 Revision History

## 14.1 Hardware Revision

Table 6: Hardware Revision

| Version   | Date   | Description             |
|-----------|--------|-------------------------|
| V1.00     | 12/23  | Initial release version |

## 14.2 Document Revision

|   Version | Date   | Description                                                                                            |
|-----------|--------|--------------------------------------------------------------------------------------------------------|
|         0 | 12/23  | Initial release version                                                                                |
|         1 | 04/24  | Order codes updated Section "Current Sensing Resistors" updated Figure 6 and Figure 8 quality improved |
|         2 | 07/24  | Simpli/uniFB01ed block diagram improved                                                                |

Table 7: Document Revision

<!-- image -->