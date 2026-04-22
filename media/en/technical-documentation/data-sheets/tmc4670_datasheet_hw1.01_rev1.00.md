<!-- lastmod 2023-08-03 -->
## TMC4670 Datasheet

IC Version V1.01 | Document Revision V1.00 · 2018-Oct-08

The TMC4670 is servo controller, providing Field Oriented Control for BLDC/PMSM and 2-phase Stepper Motors. Main control functions as torque, velocity and position control are implemented in hardware. Integrated ADCs, position sensor interfaces, position interpolators, enables a fully functional servo controller.

<!-- image -->

## Applications

- Robotics
- Pick and Place Machines
- Semiconductor Handling

## Simpli/uniFB01ed Block Diagram

<!-- image -->

<!-- image -->

<!-- image -->

## Features

- Field Oriented Control (FOC) w/ Servo Controller
- Torque Control (FOC), Velocity Control, Position Control
- Feed Forward Offsets
- Integraded ADCs
- Encoder Engine: Hall analog/digital, Encoder analog/digital, 2nd digital Encoder
- Supports 3-Phase PMSM (FOC3) and 2-Phase Stepper Motors (FOC2)
- PWMEngine including SVPWM
- SPI Communication Interface
- Blowers
- Pumps
- Factory Automation
- E-Mobility
- Laboratory Automation

## Contents

| 1 Order Codes            | 1 Order Codes                                                                | 1 Order Codes                                                                           |   4 |
|--------------------------|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|-----|
| 2 Functional Summary     | 2 Functional Summary                                                         | 2 Functional Summary                                                                    |   5 |
| 3 Functional Description | 3 Functional Description                                                     | 3 Functional Description                                                                |   6 |
| 3.1                      | Functional Blocks . . . .                                                    | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                     |   6 |
| 3.2                      | Communication Interface . . .                                                | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                             |   7 |
|                          | 3.2.1 SPI Slave User Interface .                                             | . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                               |   7 |
| 3.3                      | Register Bank .                                                              | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .           |   8 |
|                          | 3.3.1                                                                        | Register Bank - Read and Write . . . . . . . . . . . . . . . . . . . . . . . . . .      |   8 |
|                          | 3.3.2                                                                        | Register Access Datagram Examples . . . . . . . . . . . . . . . . . . . . . . .         |   9 |
|                          | 3.3.3                                                                        | Identi/uniFB01cation of Silicon via Type, Version, Date, and Time . . . . . . . . . .   |   9 |
|                          | 3.3.4                                                                        | Read of RAW Inputs & RAW Outputs . . . . . . . . . . . . . . . . . . . . . . .          |   9 |
| 3.4                      | Numerical Representation, Electrical Angle, Mechanical Angle, and Pole Pairs | . .                                                                                     |   9 |
|                          | 3.4.1                                                                        | Numerical Representation . . . . . . . . . . . . . . . . . . . . . . . . . . . .        |   9 |
|                          | 3.4.2                                                                        | N_POLE_PAIRS, PHI_E, PHI_M . . . . . . . . . . . . . . . . . . . . . . . . . . .        |  10 |
|                          | 3.4.3                                                                        | Numerical Representation of Angles PHI . . . . . . . . . . . . . . . . . . . .          |  11 |
| 3.5                      | ADC Engine . . .                                                             | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .             |  12 |
|                          | 3.5.1                                                                        | Internal ADC . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  |  13 |
|                          | 3.5.2                                                                        | External ADC (LTC2351) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      |  13 |
|                          | 3.5.3                                                                        | ADC Selector & ADC Scaler w/ Offset Correction . . . . . . . . . . . . . . . .          |  13 |
| 3.6                      | Encoder Engine . . . . . . .                                                 | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                         |  15 |
|                          | 3.6.1                                                                        | Open Loop Encoder . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       |  15 |
|                          | 3.6.2                                                                        | Incremental ABN Encoder . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       |  15 |
|                          | 3.6.3                                                                        | Secondary Incremental ABN Encoder . . . . . . . . . . . . . . . . . . . . . .           |  17 |
|                          | 3.6.4                                                                        | Digital Hall Sensor Interface with optional Interim Position Interpolation .            |  17 |
|                          | 3.6.5                                                                        | Digital Hall Sensor - Interim Position Interpolation . . . . . . . . . . . . . .        |  18 |
|                          | 3.6.6                                                                        | Digital Hall together with Incremental Encoder . . . . . . . . . . . . . . . .          |  18 |
|                          | 3.6.7                                                                        | Analog Hall and Analog Encoder Interface (SinCos of 0°90° or 0°120°240°)                |  19 |
|                          | 3.6.8                                                                        | Analog Position Decoder (SinCos of 0°90° or 0°120°240°) . . . . . . . . . .             |  20 |
| 3.7                      | FOC23 Engine . .                                                             | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .             |  20 |
|                          | 3.7.1                                                                        | PI(D) Controllers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   |  20 |
|                          | 3.7.2                                                                        | PI(D) Controller Calculations . . . . . . . . . . . . . . . . . . . . . . . . . . .     |  21 |
|                          | 3.7.3                                                                        | PI(D) Controller - Clipping . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   |  21 |
|                          | 3.7.4                                                                        | PI Flux & PI Torque . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   |  22 |
|                          | 3.7.5                                                                        | PI Velocity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . |  22 |
|                          | 3.7.6                                                                        | P(I) Position . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . |  23 |
|                          | 3.7.7                                                                        | Inner FOC Control Loop - Flux & Torque . . . . . . . . . . . . . . . . . . . . .        |  23 |
|                          | 3.7.8                                                                        | FOC Transformations and PI(D) for control of Flux & Torque . . . . . . . . .            |  23 |
|                          | 3.7.9                                                                        | Motion Modes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    |  24 |
| 3.8                      | PWMEngine . . . . .                                                          | . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                 |  24 |
|                          | 3.8.1                                                                        | PWMPolarites . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    |  25 |
|                          | 3.8.2                                                                        | PWMfrequency . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      |  25 |
|                          | 3.8.3                                                                        | PWMResolution . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       |  25 |
|                          | 3.8.4                                                                        | PWMModes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      |  25 |
|                          | 3.8.5                                                                        | Brake-Before-Make (BBM) . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       |  25 |
| 4                        | Safety Functions                                                             | Safety Functions                                                                        |  26 |
| 5                        | Register Map                                                                 | Register Map                                                                            |  27 |
| 6                        | Pinning                                                                      | Pinning                                                                                 |  85 |

<!-- image -->

| 7 Package Dimensions   | 7 Package Dimensions    | 7 Package Dimensions                        |   95 |
|------------------------|-------------------------|---------------------------------------------|------|
| 8                      | Characteristics         | Characteristics                             |   96 |
|                        | 8.1                     | Absolute Maximum Ratings . . . . . .        |   96 |
|                        | 8.2                     | Recommended Operation Conditions            |   96 |
|                        | 8.3                     | DC Characteristics . . . . . . . . . . . .  |   97 |
|                        | 8.4                     | Timing Characteristics . . . . . . . . .    |   97 |
|                        | 8.5                     | Power Dissipation . . . . . . . . . . . .   |   97 |
| 9                      | Supplemental Directives | Supplemental Directives                     |   98 |
|                        | 9.1                     | Producer Information . . . . . . . . .      |   98 |
|                        | 9.2                     | Copyright . . . . . . . . . . . . . . . . . |   98 |
|                        | 9.3                     | Trademark Designations and Symbols          |   98 |
|                        | 9.4                     | Target User . . . . . . . . . . . . . . . . |   98 |
|                        | 9.5                     | Disclaimer: Life Support Systems . . .      |   98 |
|                        | 9.6                     | Disclaimer: Intended Use . . . . . . .      |   98 |
|                        | 9.7                     | Collateral Documents & Tools . . . . .      |   99 |
| 10                     | Figures Index           | Figures Index                               |  100 |
| 11 Tables Index        | 11 Tables Index         | 11 Tables Index                             |  101 |
| 12 Revision History    | 12 Revision History     | 12 Revision History                         |  102 |
|                        | 12.1 IC Revision        | . . . . . . . . . . . . . . . .             |  102 |
|                        | 12.2 Document Revision  | . . . . . . . . . . .                       |  102 |

<!-- image -->

## 1 Order Codes

| Order Code   | Description                     | Size [mm]     |
|--------------|---------------------------------|---------------|
| TMC4670-BI   | TMC4670 FOC Servo Controller IC | 17 x 17 x 2.5 |
| TMC4670-EVAL | TMC4670 Evaluation Board        | 85 x 79       |

Table 1: Order codes

<!-- image -->

## 2 Functional Summary

## · Field Oriented Control (FOC) Servo Controller

- -torque (and /uniFB02ux) control mode
- -velocity control mode
- -position control mode
- -update rate 200 kHz (w/ 4 kHz velocity meter sampling frequency)

## · PI Controllers

- -programmable clipping of inputs and outputs of interim results
- -error sum (error integral over time) clipping
- -programmable target torque change in time (dTargetTorque/dt) limiter
- -programmable circular ( √ U 2 D + U 2 Q ) limiter
- -PI controller clipping status bit vector for real time Monitoring
- -Feed Forward Offsets for Target Values

## · Supported Motor Types

- -FOC3 : three-phase permanent magnet synchronous motors (PMSM)
- -FOC2 : two-phase stepper motors

## · ADC Engine with Offset Correction and Scaling

- -integrated 12 bit ADCs as analog interface for currents and analog encoders
- -interface to external AD (LTC2351, 14 bit or 12 bit)
- -ADC register to write externally sampled data via SPI communication interface

## · Encoder Engine

- -open loop position generator (programmable [rpm], [rpm/s]) for initial setup
- -digital incremental encoder (ABN resp. ABZ, up to 5MHz)
- -secondary digital incremental encoder
- -digital hall sensor interface (H 1 , H 2 , H 3 resp. H U , H V , H W )
- -digital hall sensor interface with interpolation of interim positions
- -analog encoder/analog hall sensor interface (SinCos (0°, 90°) or 0°, 120°, 240°)
- -position multi-turn counter (32 Bit)

## · PWMEngine including SVPWM

- -programmable PWM frequency within range 25kHz ...200kHz
- -programmable Brake-Before-Make (BBM) times (high side, low side) 0ns ...2.5 µ s in 10ns steps
- -PWMauto scaling for transparent change of PWM frequency during motion

## · SPI Communication Interface

- -40 bit datagram length (1 ReadWrite bit + 7 address bits + 32 data bits)
- -immediate SPI read response (register read access by single datagram)
- Supply Voltages 3.3V, 2.5V, 1.2V
- IO Voltage 3.3V
- Clock Frequency 25MHz
- Package 17mm x 17mm BGA w/ 1mm ball pitch

<!-- image -->

## 3 Functional Description

TMC4670 is a fully integrated controller for /uniFB01eld-oriented control (FOC) of either one 2-phase stepper motor (FOC2) or one 3-phase brushless motor (FOC3). It contains the complete control loop core architecture (position, velocity, torque) as well as required peripheral interfaces for communication with an application controller, for feedback (digital encoder, analog interpolator encoder, digital Hall, decoder Hall position interpolator, analog inputs for current and motor supply voltage measurement), and helpful additional IO. It supports highest control loop speed and PWM frequencies.

The TMC4670 is the building block for the user application that takes care of all real time critical tasks of /uniFB01eld oriented motor control. It decouples the real time /uniFB01eld oriented motor control and its real sub-tasks as current measurement, real time sensor signal processing, real time PWM signal generation from the user application layer as outlined by /uniFB01gure 17.

Figure 1: Hardware FOC Application Diagram

<!-- image -->

## 3.1 Functional Blocks

Application interface, register bank, ADC engine, encoder engine, FOC torque PI controller, velocity PI controller, position P controller, and PWM engine form the TMC4670. The TMC4670 supports 3-phase PMSM motors (FOC3) and 2-phase PMSM stepper motors (FOC2).

<!-- image -->

Figure 2: Hardware FOC Block Diagram

<!-- image -->

The ADC engine interfaces integrated ADC channels and maps raw ADC values to signed 16 bit (s16) values for the inner FOC current control loop based on programmable offset and scaling factors. The FOC torque PI controller forms the inner base component including required transformations (Clark, Park, inverse Park, inverse Clark). All functional blocks are pure hardware.

## 3.2 Communication Interface

The TMC4670 is equipped with an SPI interface for access to all registers of the TMC4670.

## 3.2.1 SPI Slave User Interface

The SPI of the TMC4670 for the user application has an easy command and control structure. The TMC4670 user SPI acts as a slave. The SPI datagram length is 40 bit with up to 2Mbit/s. The MSB (bit#39) is sent /uniFB01rst. The LSB (bit#0) is sent last. The MSB (bit#39) is the WRITE\_notREAD (WRnRD) bit. The bits (bit#39 to bit#32) are the address bits (ADDR). Bits (bit#31) to (bit#0) are (up to) 32 data bits. The SPI of the TMC4670 immediately responses within the actual SPI datagram on read and write for ease-of-use communication.

<!-- image -->

Figure 3: SPI Timing

| SPI Interface Timing                           | Characteristics, fCLK = 25MHz   | Characteristics, fCLK = 25MHz   | Characteristics, fCLK = 25MHz   | Characteristics, fCLK = 25MHz   | Characteristics, fCLK = 25MHz   | Characteristics, fCLK = 25MHz   |
|------------------------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|
| Parameter                                      | Symbol                          | Condition                       | Min                             | Typ                             | Max                             | Unit                            |
| SCK valid before or after change of nSCS       | t CC                            |                                 | 250                             |                                 |                                 | ns                              |
| nSCS high time                                 | t CSH                           |                                 | 250                             |                                 |                                 | ns                              |
| nSCS low time                                  | t CSL                           |                                 | 250                             |                                 |                                 | ns                              |
| SCK high time                                  | t CH                            |                                 | 250                             |                                 |                                 | ns                              |
| SCK low time                                   | t CL                            |                                 | 250                             |                                 |                                 | ns                              |
| SCK low time                                   | t CL                            |                                 | 250                             |                                 |                                 | ns                              |
| SCK frequency                                  | f SCK                           |                                 |                                 |                                 | 2                               | MHz                             |
| MOSI setup time before rising edge of SCK      | t DU                            |                                 | 250                             |                                 |                                 | ns                              |
| MOSI hold time after falling edge of SCK       | t DH                            |                                 | 250                             |                                 |                                 | ns                              |
| MISO data valid time after falling edge of SCK | t DO                            |                                 |                                 |                                 | 10                              | ns                              |

Table 2: SPI Timing Parameter

<!-- image -->

Figure 4: SPI Datagram Structure

| 40 BIT DATAGRAM   | 40 BIT DATAGRAM   | 40 BIT DATAGRAM   |
|-------------------|-------------------|-------------------|
|                   | 8 BIT ADDR        | 32 DATA           |
|                   | 7BITADDR          | 32DATA            |

## 3.3 Register Bank

Info

This section gives a functional description as an overview. The section 5 starting page 27 gives the detailed description of each register.

The register bank is the interface to the user application. Each register of the TMC4670 has 8 bit address followed by up to 32 data bits. Some addresses hold more then one data registers for simultaneous access or composed control bit vectors. Section 5 page 27 describes all registers in detail.

During initialization, the user writes parameters into associated registers. These parameters are scaling factors and offsets, sensor con/uniFB01guration parameters, limits for clipping, selections, P and I parameters for the FOC torque controller, P and I parameters for velocity controller, and P parameter for the position controller.

During application, the user writes application parameters into associated registers. These are - depending on the motion mode - target torque, target velocity, or target position.

The TMC4670 has direct access registers and indirect access registers. Most registers are direct access registers with read or write access by a single datagram. Some less often used registers (e.g. silicon version registers, internal values for read out) are accessed via two registers: address register and data register. The address register selects the address, the second register holds the data.

## 3.3.1 Register Bank - Read and Write

From the access point of view there are two kind of registers: read-only and read-write. The most signi/uniFB01cant bit (MSB) of each register access datagram de/uniFB01nes read (=0) or write (=1). So, there are 128 read addresses (0x00 h . . . 0x7F h ) and 128 write addresses (0x80 h . . . 0xFF h ) available. The TMC4670 ignores write accesses to read-only registers.

- Fixed Read Only Register (e.g. SILICON\_TYPE, SILICON\_VERSION, SILICON\_DATE, SILICON\_TIME)
- Read Only Register for internal values (e.q. scaled ADC values)
- Read Only Register for external Signals (e.g. ADC raw values, ABN encoder inputs, Hall signal inputs)
- Read Write Register for con/uniFB01gurations (e.g. P and I parameter of PI controller, clipping parameters)
- Read Write Register for target values (e.g. target torque, target velocity, target position)
- Dual Ported Read Write Register (e.g. encoder count, actual position)

<!-- image -->

## 3.3.2 Register Access Datagram Examples

0x0100000000h : reads data from address 0x01 h 0x8123456789h : writes data 0x23456789 h

to address 0x01 h

## 3.3.3 Identi/uniFB01cation of Silicon via Type, Version, Date, and Time

The read-only registers of silicon type, version with date and time identify the type of the silicon, the version of the silicon together with unique date stamp and time stamp. This enables the automatic identi/uniFB01cation of IC and version and enable the automatic handling of different IC and different versions.

## 3.3.4 Read of RAW Inputs &amp; RAW Outputs

For ease-of-use while setting up the con/uniFB01guration, raw input signals and raw output signals are mapped into the register bank for user read out. With this, the user can initially check without a scope that the desired signals come into the TMC4670 as expected. Examples of readable raw input signals are digital Hall signals and incremental encoder signals.

## 3.4 Numerical Representation, Electrical Angle, Mechanical Angle, and Pole Pairs

The TMC4670 uses different numerical representations for different parameters, measured values, and interim results. The terms electrical angle PHI\_E, mechanical angle PHI\_M, and number of pole pairs (N\_POLE\_PAIRS) of the motor are important for setup of FOC. This section describes the different numerical representations of parameters and terms.

## 3.4.1 Numerical Representation

The TMC4670 uses singed and unsigned values of different length and /uniFB01xed point representation for parameters that require a non-integer granularity.

Table 3: Numerical Representations

| Symbol   | Description                                                                      | Min         | Max                   |
|----------|----------------------------------------------------------------------------------|-------------|-----------------------|
| u16      | unsigned 16 bit value                                                            | 0           | 65535                 |
| s16      | signed 16 bit values, 2'th complement                                            | -32767      | 32767                 |
| u32      | unsigned 32 bit value                                                            | 0           | 2 32 = 4294967296     |
| s32      | signed 32 bit values, 2'th complement                                            | -2147483647 | 2 31 - 1 = 2147483647 |
| q8.8     | signed /uniFB01x point value with 8 bit interger part and 8 bit fractional part  | -32767/256  | 32767/256             |
| q4.12    | signed /uniFB01x point value with 4 bit interger part and 12 bit fractional part | -32767/4096 | -32767/4096           |

Two's complement of n bit is -2 n -1 . . . -2 n -1 -1 . To avoid un-wanted over/uniFB02ow, the range is clipped to -2 n -1 +1 . . . -2 n -1 -1 .

Info

Because the zero is interpreted as a positive number for 2'th complement representation of interger n bit number, the smallest negative number is -2 ( n -1) where the largest positive number is 2 ( n -1) -1 . Using

<!-- image -->

the smallest negative number -2 ( n -1) might cause critical under-/uniFB02ow or over-/uniFB02ow. Internal clipping takes this into account by mapping -2 ( n -1) to -2 ( n -1) +1 .

Table 4: Examples of u16, s16, q8.8, q4.12

| Hexadecimal Value   |   u16 |    s16 | q8.8         | q4.12         |
|---------------------|-------|--------|--------------|---------------|
| 0x0000 h            |     0 |      0 | 0.0          | 0.0           |
| 0x0001 h            |     1 |      1 | 1 / 256      | 1 / 4096      |
| 0x0001 h            |     2 |      2 | 2 / 256      | 2 / 4096      |
| 0x0080 h            |   128 |    128 | 0.5          | 0.03125       |
| 0x0100 h            |   256 |    256 | 1.0          | 0.0625        |
| 0x0200 h            |   512 |    512 | 2.0          | 0.125         |
| 0x3FFF h            | 16383 |  16383 | 16383 / 256  | 16383 / 4096  |
| 0x5A81 h            | 23169 |  23169 | 23169 / 256  | 23169 / 4096  |
| 0x7FFF h            | 32767 |  32767 | 32767 / 256  | 32767 / 4096  |
| 0x8000 h            | 32768 | -32768 | -32768 / 256 | -32768 / 4096 |
| 0x8001 h            | 32769 | -32767 | -32767 / 256 | -32767 / 4096 |
| 0x8002 h            | 32770 | -32766 | -32766 / 256 | -32766 / 4096 |
| 0xC001 h            | 49153 | -16383 | -16383 / 256 | -16383 / 4096 |
| 0xFFFE h            | 65534 |     -2 | -2 / 256     | -2 / 4096     |
| 0xFFFF h            | 65535 |     -1 | -1 / 256     | -1 / 4096     |

The q8.8 and q4.12 are used for P and I parameters which are positive numbers but q8.8 and q4.12 are used as signed numbers. This is because theses values are multiplied with signed error values resp. error integral values.

## 3.4.2 N\_POLE\_PAIRS, PHI\_E, PHI\_M

The parameter N\_POLE\_PAIRS de/uniFB01nes the factor between electrical angle PHI\_E and mechanical angle PHI\_M of a motor (pls. refer /uniFB01gure 5).

A motor with one (1) pole pair turns once for each electrical period. A motor with two (2) pole pairs turns once for each two electrical periods. A motor with three (3) pole pairs turns once for each three electrical periods. A motor with four pole (4) pairs turns once for each four electrical periods.

The electrical angle PHI\_E is relevant for the commutation of the motor. It is relevant for the torque control of the inner FOC loop.

<!-- formula-not-decoded -->

The mechanical angle PHI\_M is primarily relevant for velocity control and for positioning. This is because one wants to control the motor speed in terms of mechanical turns and not in terms of electrical turns.

<!-- image -->

<!-- formula-not-decoded -->

Different encoders give different kind of position angles. Analog hall sensors normally give the electrical position PHI\_E that can be used for commutation. Analog encoders give - depending on their resolution - angles that have to be scaled /uniFB01rst to mechanical angles PHI\_M and to electrical angles PHI\_E for commutation.

Figure 5: N\_POLE\_PAIRS - Number of Pole Pairs

<!-- image -->

## 3.4.3 Numerical Representation of Angles PHI

Electrical angels and mechanical angles are represented as 16 bit integer values. One full revolution of 360deg is equivalent to 2 16 = 65536 steps. Any position coming from a sensor is mapped to this interger range. Adding an offset of PHI\_OFFSET causes a rotation of an angle PHI\_OFFSET / 2 16 . Subtraction of an offset causes a rotation of an angle PHI\_OFFSET in opposite direction.

<!-- image -->

Figure 6: Integer Representation of Angles with 16 Bit as s16 resp. u16

<!-- image -->

Table 5: Examples of u16, s16, q8.8

| Hexadecimal Value   |   u16 |    s16 |   PHI[°] |   ± PHI[°] |
|---------------------|-------|--------|----------|------------|
| 0x0000 h            |     0 |      0 |        0 |          0 |
| 0x1555 h            |  5461 |   5461 |       30 |       -330 |
| 0x2AAA h            | 10922 |  10922 |       60 |       -300 |
| 0x4000 h            | 16384 |  16384 |       90 |       -270 |
| 0x5555 h            | 21845 |  21845 |      120 |       -240 |
| 0x6AAA h            | 27306 |  27768 |      150 |       -210 |
| 0x8000 h            | 32768 | -32768 |      180 |       -180 |
| 0x9555 h            | 38229 | -27307 |      210 |       -150 |
| 0xAAAA h            | 43690 | -21846 |      240 |       -120 |
| 0xC000 h            | 49152 | -16384 |      270 |        -90 |
| 0xD555 h            | 54613 | -10923 |      300 |        -60 |
| 0xEAAA h            | 60074 |  -5462 |      330 |        -30 |

The option of adding an offset is for adjustment of angle shift between motor and stator and rotor and encoder. Finally, the relative orientations between motor and stator and rotor and encoder can be adjusted by just one offset. Alternatively, one can set the counter position of an incremental encoder to zero on initial position. For absolute encoders one needs to use the offset to set an initial position.

## 3.5 ADC Engine

The ADC engine controls the sampling of different available ADC channels.

The FOC engine expects offset corrected ADC values, scaled into the FOC engine 16 bit (s16) /uniFB01xed point representation. The integrated scaler and offseter maps raw ADC samples of current measurement channels to 16 bit two's complement values (s16). Both, offset and scale calculations are signed. With this, the user can change the signs of current according to the application by the scaling factors.

The s16 scaled ADC values are available for read out from the register by the user. ADC samples for motor supply voltage (VM), MOSFET temperature, motor temperature, general purpose analog input (AIN) are only raw values without scaling.

- ADC samples of integrated ADC
- ADC samples from external ADC (LTC2351)
- ADC samples from external sources can be written into dedicated registers (ADC EXT)
- ADC values are for:
- -phase current measurement (most important task)
- -Supply voltage measurement (for monitoring or brake chopper)
- -Analog Hall signal measurement
- -analog Sine/Cosine encoder signal measurement
- -analog voltage input for MOS-FET temperature signal monitoring

<!-- image -->

- -analog voltage input for motor temperature signal monitoring

Info

Wrong scaling factors or wrong offsets might cause damages when the closed current regulation is active. Integrated hardware limiters allow protection especially in the setup phase when using carful limits.

## 3.5.1 Internal ADC

The TMC4670 is equipped with internal ADCs with input voltage range of 0V ...2.5V for current measurement, supply voltage measurement, analog hall signal measurement, analog encoder.

## 3.5.2 External ADC (LTC2351)

Alternatively to the integrated ADCs, the TMC4670 supports external SPI ADCs LTC2351 from Linear Technology for current measurements. This is intended for current sensing on separate power stages.

## 3.5.2.1 ADC RAW

The sampled raw ADC values are available for read out by the user. This is important during the system setup phase to determine offset and scaling factors.

## 3.5.2.2 ADC EXT

The user can write ADC values into the ADC EXT registers of the register bank from external ADC sources. For example it there are high precision ADC values availbale from an external ADC.

## 3.5.3 ADC Selector &amp; ADC Scaler w/ Offset Correction

The ADC selector selects ADC channles for FOC. The 3-phase FOC used two of three ADC channles for measurement and calculates the third channel via Kirchhoff's Law from the scaled an offset corrected ADC values. The 2-phase FOC just used two ADC channels because for the 2-phase stepper motor the two phases are independent from each other.

Note

The Open Loop Encoder is useful for setup of ADC channel selection, scaling, and offset by turning a motor open loop.

The FOC23 Engine processes currents as 16 bit signed (s16) values. Raw ADC values are expanded to 16 bit width independent of their resolution. With this, each ADC is available for read out a a 16 bit number. The ADC scaler w/ offset correction is for pre-processing of measured raw current values. It might be used to map to own units (e.g. A or mA). For scaling, gains of current ampli/uniFB01ers, reference voltages, and offsets have to be takin into account.

Info

Raw ADC values generally are of 16 bit width independent of their real resolution.

<!-- image -->

<!-- image -->

The job of the ADC scaler is to map raw ADC values to the 16 bit signed (s16) range and to center the values to zero by removing of offsets.

Figure 7: ADC Selector &amp; Scaler w/ Offset Correction

<!-- image -->

ADC offsets and ADC scalers for the analog current measurement input channels need to be programmed into the associated registers. Each ADC\_I\_U, ADC\_I\_V, ADC\_I\_UX, ADC\_I\_WY, ADCSD\_I\_UX, ADCSD\_I\_WY, ADC\_I0\_EXT, ADC\_I1\_EXT is mapped either to ADC\_I0\_RAW or to ADC\_I1\_RAW by ADC\_I0\_SELECT and ADC\_I1\_SELECT.

In addition, the ADC\_OFFSET is for conversion of unsigned ADC values into signed ADC values as required for the FOC.

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

For FOC3 the third current ADC\_I2 is calculated via Kirchhoff's Law. This requires the correct scaling and offset correction before. For FOC2 there is no calculation of a third current.

The ADC\_UX\_SELECT selects one of the three ADC channels ADC\_I0 ADC\_I1, ADC\_I2 for ADC\_UX.

The ADC\_V\_SELECT selects one of the three ADC channels ADC\_I0 ADC\_I1, ADC\_I2 for ADC\_V.

The ADC\_WY\_SELECT selects one of the three ADC channels ADC\_I0 ADC\_I1, ADC\_I2 for ADC\_WY.

For FOC3 the third current ADC\_I2 is calculated via Kirchhoff's Law. This requires the correct scaling and offset correction before. For FOC2 there is no calculation of a third current.

<!-- image -->

The ADC\_UX, ADC\_V, ADC\_WY are for the FOC3 (U, V, W). The ADC\_UX. and ADC\_WY (X, Y) are for the FOC2.

| Note   | The Open Loop Encoder is useful for setup of ADC channel selection, scaling, and offset by turning a motor open loop.   |
|--------|-------------------------------------------------------------------------------------------------------------------------|

## 3.6 Encoder Engine

The encoder engine is an uni/uniFB01ed position sensor interface. It maps the selected encoder position information to electrical position (PHI\_E) and to mechanical position (PHI\_M). Both are 16 bit values. The encoder engine maps single turn positions from position sensors to multi-turn position. The user can overwrite the multi-turn position for initialization.

The different position sensors are the position sources for torque and /uniFB02ux control via FOC, for velocity control, and for position control. The PHI\_E\_SELECTION selects the source of the electrical angel PHI\_E for the inner FOC control loop. VELOCITY\_SELECTION selects the source for velocity measurement. With PHI\_E selected as source for velocity measurement, one gets the electrical velocity. With the mechanical angle PHI\_M selected as source for velocity measurement one gets the mechanical velocity taking the set number of pole pairs (N\_POLE\_PAIRS) of the motor into account. Nevertheless, for high precision position it might be useful to do positioning based on the electrical angel PHI\_E.

## 3.6.1 Open Loop Encoder

For initial system setup the encoder engine is equipped with an open loop position generator. With one can turn the motor open-loop by specifying speed in rpm and acceleration in rpm/s together with a voltage UD\_EXT in D direction. So, the open-loop encoder it is not a real encoder, it just gives positions as an encoder does. The open-loop decoder has a direction bit to de/uniFB01ne once the direction of motion for the application.

| Note   | The open loop encoder is useful for initial ADC setup, encoder setup, hall signal validation, and for validation of the number of pole pairs of a motor. The open loop encoder turns a motor open with programmable velocity in unit [RPM] with programmable acceleration in unit [RPM/s].   |
|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

So, with the open loop encoder one can turn a motor without any position sensor and without any current measurement as the /uniFB01rst step of doing the system setup. With the turning motor one can adjust the ADC scales and offsets and set up positions sensors (hall, incremental encoder, . . . ) according to resolution, orientation, direction of rotation.

## 3.6.2 Incremental ABN Encoder

Incremental encoders give two phase shifted incremental pulse signals A and B. Some incremental encoders have an additional null position signal N or zero pulse signal Z. An incremental encoder (called ABN encoder or ABZ encoder) has an individual number of incremental pulses per revolution. The number of incremental pulses de/uniFB01nes the number of positions per revolution (PPR). The PPR might mean pulses per revolution or periods per revolution. Instead of positions per revolution some incremental encoder vendors call these CPR counts per revolution.

The PPR parameter is the most important parameter of the incremental encoder interface. With that, it forms a modulo (PPR) counter, counting from 0 to (PPR-1). Depending on the direction, it counts up or

<!-- image -->

down. The modulo PPR counter is mapped into the register bank as a dual ported register. the user can overwrite it with an initial position. The ABN encoder interface provides both, the electrical position and the multi-turn position are dual-ported read-write registers.

## Note

The PPR parameter must be set exactly according to the used encoder.

The N pulse from an encoder triggers either sampling of the actual encoder count to fetch the position at the N pulse or it re-writes the fetched N position on an N pulse. The N pulse can either be used as stand alone pulse or and-ed with NAB = N and A and B. It depends on the decoder what kind of N pulse has to be used, either N or NAB. For those encoders with precise N pulse within on AB quadrature, the N pulse must be used. For those encoders with N pulse over four AB quadratures the user can enhance the precision of the N pulse position detection by using NAB instead of N, which is recommended.

## Note

Incremental encoders are available with N pulse and without N pulse.

Figure 8: ABN Incremental Encoder N Pulse

<!-- image -->

The polarity of N pulse, A pulse and B pulse are programmable. The N pulse is for re-initialization with each turn of the motor. Once fetched, the ABN decoder can be con/uniFB01gured to write back the fetched N pulse position with each N pulse.

## Note

The ABN encoder interface has a direction bit to set once the direction of motion for the application.

Logical ABN = A and B and N might be useful for incremental encoders with low resolution N pulse to enhance the resolution. On the other hand, for incremental encoders with high resolution n pulse a logical abn = a and b and n might totally suppress the resulting n pulse.

<!-- image -->

Figure 9: Encoder ABN Timing - high precise n pulse and less precise N pulse

<!-- image -->

## 3.6.3 Secondary Incremental ABN Encoder

For commutating a motor with FOC one selects a position sensor source (digital incremental encoder, digital hall, analog hall, analog incremental encoder, . . . ) that is mounted close to the motor. The inner FOC loop controls torque and /uniFB02ux of the motor based on the measured phase currents and the electrical angle of the rotor.

The TMC4670 is equipped with a secondary incremental encoders interface. This secondary encoder interface is available as source for velocity control or position control. This is for applications where a motor turns an object with a gear to position the object. An example is a robot arm where a motor moves an angle with a the mechanical angle of the arm as the target.

Info

The secondary incremental encoder is not available for commutation (PHI\_E) for the inner FOC. In others words, there is no electrical angle PHI\_E selectable from the secondary encoder.

## 3.6.4 Digital Hall Sensor Interface with optional Interim Position Interpolation

The digital hall interface is the position sensor interface for digital hall signals. The digital hall signal interface /uniFB01rst maps the digital hall signals to an electrical position PHI\_E\_RAW. An offset PHI\_E\_OFFSET can be used to rotate the orientation of the hall signal angle. The electrical angle PHI\_E is for commutation. Optionally, the default electrical positions of the Hall sensors can be adjusted by writes into the associated registers.

<!-- image -->

Figure 10: Hall Sensor Angles

<!-- image -->

<!-- image -->

Hall Sensors give absolute positions within an electrical period with a resolution of 60° as 16 bit positions (s16 resp. u16) PHI. With activated interim hall position interpolation the TMC4670 additionally generates high resolution interim positions, when the motor is running at speed beyond 60 rpm.

## 3.6.5 Digital Hall Sensor - Interim Position Interpolation

For lower torque ripple the user can enable the position interpolation of interim hall positions. This function is useful for motors, which are compatible with sine wave commutation, but are equipped with digital hall sensors.

When the position interpolation is switched on, it becomes active on speed beyond 60 rpm. For lower speed it is automatically disabled. This is important especially when the motor has to be at rest.

Motors that are intended for block commutation might smarter turn with hall signal interpolation but the user should not expect too much for those motors.

## 3.6.6 Digital Hall together with Incremental Encoder

If a motor is equipped with both Hall sensors and incremental encoder, the hall sensors can be used for the initialization as a low resolution absolute position sensor and later the incremental encoder can be used a a high resolution sensor for commutation.

<!-- image -->

H3

## 3.6.7 Analog Hall and Analog Encoder Interface (SinCos of 0°90° or 0°120°240°)

An analog encoder interface is part of the decoder engine. It is able to handle analog position signals of 0° and 90° and 0° 120° 240°. The analog decoder engine adds offset, scales the raw analog encoder signals and calculates the electrical angle PHI\_E from these analog position signals.

ADC offsets and ADC scalers need to be programmed into the associated registers to use analog Hall sensors or analog encoders. Each AENC\_0\_SELECT, AENC\_1\_SELECT, AENC\_2\_SELECT, and AENC\_3\_SELECT, selects one raw analog ADC input channel AENC out of AENC\_UX\_RAW, AENC\_VN\_RAW, AENC\_WY\_RAW, AENC\_N\_RAW, or one AENC register channel AENC\_UX\_EXT, AENC\_VN\_EXT, AENC\_WY\_EXT, AENC\_NEXT.

An individual signed offset is added to each associated raw ADC channel and scaled by its associated scaling factor according to

<!-- formula-not-decoded -->

In addition, the AENC\_OFFSET is for conversion of unsigned ADC values into signed ADC values as required for the FOC.

<!-- image -->

Figure 11: Analog Encoder (AENC) Selector &amp; Scaler w/ Offset Correction

<!-- image -->

Info

The analog N pulse is just a raw ADC value. Scaling, offset correction, manual handling of analog N pulse similar to N pulse handling of digital encoder N pulse is not implemented for analog encoder.

## 3.6.8 Analog Position Decoder (SinCos of 0°90° or 0°120°240°)

The extracted positions from the analog decoder are available for read out from registers.

## 3.6.8.1 Multi-Turn Counter

Electrical angles are mapped to a multi-turn position counter. The user can overwrite this multi-turn position for initialization purposes.

## 3.6.8.2 Encoder Engine Phi Selector

The angle selector selects the source for the commutation angel PHI\_E. That electrical angle is available for commutation.

## 3.6.8.3 External Position Register

A register value written via the application interface into the register bank is available for commutation also. With this, the user can interface to any encoder by just writing positions extracted from external encoder into this regulator. From the decoder engine point of view this is just one more selectable encoder source. As the application interface is not fast enough for high commutation frequencies, this mode of operation is only recommended for initialization.

## 3.7 FOC23 Engine

| Info   | Support for the TMC4670 is integrated into the TMCL-IDE including wizards for system setup, which allow easy and fast commissioning and even turn the motor with a few steps. With the TMCL-IDE the user has direct access to all registers of the TMC4670.   |
|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

The FOC23 engine performs the inner current control loop for the torque current I Q and the /uniFB02ux current I D including the required transformations. Programmable limiters take care of clipping of interim results. Per default, the programmable circular limiter clips U\_D and U\_Q to U\_D\_R = √ (2) · U\_Q and U\_R\_R = √ (2) · U\_D. PI controllers perform the control tasks.

## 3.7.1 PI(D) Controllers

PI controllers are used for current control and velocity control. A P controller is used for position control. The D part is not yet supported, it is just a register place holder for future variants.

<!-- image -->

## 3.7.2 PI(D) Controller Calculations

The PI controllers performs the calculation

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where X\_TARGET stands for target /uniFB02ux, target torque, target velocity, or target position with error e that is the difference between target value and actual values. The time constant d t is 1 µs with the integral part is divided by 256.

## 3.7.3 PI(D) Controller - Clipping

The limiting of target values for PI controllers and output values of PI controllers is programmable. Per power on default theses limiter are set to maximum values. Before one starts a motor one should set the limiters for clipping.

The target input is clipped to X\_TARGET\_LIMIT. The output of a PI(D) is named dXdT because it gives the desired derivative d/dt as a target value to the following stage: The position (x) controller gives velocity (dx/dt). The output of the PI(D) is clipped to dXdT\_LIMIT. The error integral of (6) is clipped to dXdT\_LIMIT / I.

<!-- image -->

with

targetvalue

PI Controller

FLUX&amp;TORQUE

Xtarget[S16]

Xtarget input \_imit target offset

Xoffset e (error)

Xactual actualvalue

Se(t)dt

Pparameter

<!-- image -->

targetpositionoffset

PI Controller

Xoffset

POSITION

target position

Xtarget[S32]

## 3.7.4 PI Flux &amp; PI Torque

The P part is represented as q8.8 and I is the I part represented as q0.15.

## 3.7.5 PI Velocity

The P part is represented as q8.8 and I is the I part represented as q0.15.

Xtarget\_input\_limit e (error)

Xactual actual position

Se(t)dt

d

positionPparameter

Figure 12: PID Architectures

position Iparameter(normally set to 0)

dXdT\_LIMIT / 1

undnoLPXP

dXdT\_LIMIT / 1

Iparameter ndnoPxpm

dXdT[s16]

dXdT[s32]

outputvalue outputtargetvelocity

<!-- image -->

## 3.7.6 P(I) Position

For the position regulator, the P part is represented as q4.12 to be compatible with the high resolution positions - one single rotation is handled as an s16.

This is because e = x - x\_target might result in larger e[s32] for x[s32] and x\_target[s32] represented as s32 for e = x - x\_target for x[s16] and x\_target[s16] represented as s16.

## 3.7.7 Inner FOC Control Loop - Flux &amp; Torque

The inner FOC loop (/uniFB01gure 13) controls the /uniFB02ux current to a /uniFB02ux target and the torque current to the desired torque target. The inner FOC loop performs the desired transformations according to /uniFB01gure 14 for 3-phase motors (FOC3). For 2-phase motors (FOC2) both Clarke (CLARKE) transformation and inverse Clarke (iCLARKE) a by-passed.

The inner FOC control loop gets a target torque value (I\_Q\_TARGET) that represents acceleration, the rotor position, and the measured currents as input data. Together with the programmed P and I parameters, the inner FOC loop calculates three target voltage values as input for the PWM engine.

Figure 13: Inner FOC Control Loop

<!-- image -->

## 3.7.8 FOC Transformations and PI(D) for control of Flux &amp; Torque

The Clarke transformation (CLARKE) maps three motor phase currents ( I U , I V , I W ) to a two dimensional coordinate system with two currents ( I α , I β ). Based on the actual rotor angle determined by an encoder or via sensorless techniques, the Park transformation (PARK) maps these two currents to a quasi-static coordinate system with two currents ( I D , I Q ). The current I D represents /uniFB02ux and the current I Q corresponds to the torque. The /uniFB02ux just pulls on the rotor and effects the torque constant. The torque is effected by I Q . Two PI controllers determine two voltages ( U D , U Q ) to drive desired currents for a target torque and a target /uniFB02ux of zero. The determined voltages ( U D , U Q ) are re-transformed into the stator system by the inverse Parke transformation (iPARK). The inverse Clarke Transformation (iCLARKE) transforms these two currents into three voltages ( U U , U V , U W ). Theses three voltage are the input of the PWM engine to drive the power stage.

In case of the FOC2, Clarke transformation CLARKE and inverse Clarke Transformation iCLARKE are skipped.

<!-- image -->

Figure 14: FOC3 Transformations (FOC2 just skips CLARKE and iCLARKE)

<!-- image -->

## 3.7.9 Motion Modes

Figure 15: Motion Modes

<!-- image -->

## 3.8 PWMEngine

The PWM engine takes care of converting voltage vectors to pulse width modulated (PWM) control signals. These digital PWM signals control the gate drivers of the power stage. For detailed description of the PWM control registers and PWM register control bits pls. refer section 5 page 27.

The ease-of-use PWM Engine requires just a couple of parameter settings. Primarily, the polarities for the gate control signal of high side and low side must be set. The power on default PWM mode is 0 that

<!-- image -->

means PWM = OFF. For operation, the centered PWM mode must be set on by setting the PWM mode to 7. A single bit controls the Space vector PWM (SVPWM). For 3-phase PMSM the SVPWM = ON gives more effective voltage. Nevertheless, for some applications it makes sense to switch the SVPWM = OFF to keep the star point voltage of the motor almost at rest.

## 3.8.1 PWMPolarites

The PWM polarities register PWM\_POLARITES controls the polarities of the control signals. Positive polarity for gate control means 1 represents ON and 0 represents OFF. The gate control signal polarities are individually programmable for high side gate control and for low side gate control. The PWM polarities register controls the polarity of other control signals as well.

## 3.8.2 PWMfrequency

The PWM counter maximum length register PWM\_MAXCNT controls the PWM frequency. For a clock frequency fCLK = 25 MHz, the PWM frequency fPWM[Hz] = is (4.0 * fCLK[Hz]) / (PWM\_MAXCNT + 1). With fCLK = 25 MHz and power-on reset (POR) default of PWM\_MAXCNT = 3999 the PWM frequency is fPWM = 25 kHz. The PWM frequency fPWM is recommended to be in the range of 25 kHz to 200 kHz by setting PWM\_MAXCNT between 3999 to 499.

Note

The PWM frequency can be changed any time also during motion.

## 3.8.3 PWMResolution

The base resolution of the PWM is 12 bit internally mapped to 16 bit range. MAX\_PWMCNT=4095 gives the full resolution of 12 bit with ≈ 25kHz w/ fCLK = 25 MHz. MAX\_PWMCNT = 2047 results in 11 bit resolution but with ≈ 50 kHz w/ fCLK = 25 MHz. So the PWM\_MAXCNT de/uniFB01nes the PWM frequency but effects the resolution of the PWM.

## 3.8.4 PWMModes

The power-on reset (POR) default of the PWM is OFF. The standard PWM scheme is the centered PWM. Passive Breaking and Free Wheeling Modes are available on demand. Please refer [ ? ] concerning the settings.

## 3.8.5 Brake-Before-Make (BBM)

One register controls BBM time for the high side. One register controls BBM time for the low side. The BBM times are programmable in 10 ns steps. The BBM time can be set to zero for gate drivers that have there own integrated BBM timers.

<!-- image -->

<!-- image -->

Figure 16: BBM Timing

| Info   | Measured BBM times at MOS-FET gates differs from programmed BBM times due to driver delays and possible additional gate driver BBM times. The programmed BBM times are for the digital control signals.   |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Note   | Too small BBM times cause electrical short of the MOS-FET bridges - so called shoot through - that shorts the power supply and might damage the power stage and the power supply.                         |

## 3.8.6 Space Vector PWM (SVPWM)

A single bit controls the internal Space vector PWM (SVPWM) enable. No further settings are required for the space vector PWM - just ON or OFF. The power on default for the SVPM is OFF.

Note

The SVPWM is for 3-phase motors only. For 2-phase motors there is no SVPWM.

## 4 Safety Functions

Different safety functions are integrated and mapped to status bits. Two programmable mask register select those bits for WARNING or ERROR. Warning just indicated the warning status at the WARNING output. An Error will cause programmable actions on error conditions and indicate the error status directly at ERROR output, as PWM = OFF on over current condition or ADC raw values with permanent zero or ADC raw values at maximum.

Info

Programmable autonomous error handling or warning handling is not available.

Internal hardware limiters for real time clipping and monitoring of interim values are available. LIMIT or LIMITS is part of register names of registers associated to internal limiters. Please refer 5.

<!-- image -->

## 5 Register Map

| Register Map for TMC4670   | Register Map for TMC4670                       | Register Map for TMC4670                       | Register Map for TMC4670                       | Register Map for TMC4670                       | Register Map for TMC4670   |
|----------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|----------------------------|
| Address                    | Registername                                   | Registername                                   | Registername                                   | Registername                                   | Access                     |
| 0x00 h                     | CHIPINFO_DATA                                  | CHIPINFO_DATA                                  | CHIPINFO_DATA                                  | CHIPINFO_DATA                                  | R                          |
|                            | Variant 0                                      | Variant 0                                      | Variant 0                                      | Variant 0                                      |                            |
|                            | Mask                                           | Name                                           | Name                                           | Type                                           |                            |
|                            | 0xFFFFFFFF h                                   | SI_TYPE                                        | SI_TYPE                                        | ASCII                                          |                            |
|                            |                                                | Min                                            | Max Default                                    | Unit                                           |                            |
|                            |                                                | 0                                              | 4294967295 0                                   |                                                |                            |
|                            |                                                | Hardware type (ASCII).                         | Hardware type (ASCII).                         | Hardware type (ASCII).                         |                            |
|                            | Variant 1                                      | Variant 1                                      | Variant 1                                      | Variant 1                                      |                            |
|                            | Mask                                           | Name                                           | Name                                           | Type                                           |                            |
|                            | 0xFFFFFFFF h                                   | SI_VERSION                                     | SI_VERSION                                     | Version                                        |                            |
|                            |                                                | Min                                            | Max Default                                    | Unit                                           |                            |
|                            |                                                | 0                                              | 4294967295 0                                   |                                                |                            |
|                            | version (u16.u16). Variant 2                   | version (u16.u16). Variant 2                   | version (u16.u16). Variant 2                   | version (u16.u16). Variant 2                   |                            |
|                            | Mask                                           | Name                                           | Name                                           | Type                                           |                            |
|                            | 0xFFFFFFFF h                                   | SI_DATE                                        | SI_DATE                                        | Date                                           |                            |
|                            |                                                | Min                                            | Max Default                                    | Unit                                           |                            |
|                            |                                                | 0                                              | 4294967295 0                                   |                                                |                            |
|                            | Variant 3                                      | Variant 3                                      | Variant 3                                      | Variant 3                                      |                            |
|                            | Mask                                           | Name                                           | Name                                           | Type                                           |                            |
|                            | 0xFFFFFFFF h                                   | SI_TIME                                        | SI_TIME                                        | Time                                           |                            |
|                            |                                                | Min                                            | Max Default                                    | Unit                                           |                            |
|                            | Hardware time (nibble wise time stamp -hhmmss) | Hardware time (nibble wise time stamp -hhmmss) | Hardware time (nibble wise time stamp -hhmmss) | Hardware time (nibble wise time stamp -hhmmss) |                            |
|                            | Variant 4                                      | Variant 4                                      | Variant 4                                      | Variant 4                                      |                            |
|                            | Mask                                           | Name                                           | Name                                           | Type                                           |                            |
|                            | 0xFFFFFFFF h                                   | SI_VARIANT                                     | SI_VARIANT                                     | Unsigned                                       |                            |
|                            |                                                | Min Max                                        | Default                                        | Unit                                           |                            |
|                            |                                                | 0                                              | 4294967295 0                                   |                                                |                            |
| 0x01 h                     | CHIPINFO_ADDR                                  | CHIPINFO_ADDR                                  | CHIPINFO_ADDR                                  | CHIPINFO_ADDR                                  | RW                         |
|                            | Mask                                           |                                                | Name                                           | Type                                           |                            |

<!-- image -->

| Address   | Registername                                          | Registername                                          | Registername                                          | Registername                                          | Registername                                          | Access       | Access       | Access       | Access       | Access       | Access       | Access       | Access       | Access       | Access       | Access       | Access       | Access       | Access       | Access       | Access       | Access       |
|-----------|-------------------------------------------------------|-------------------------------------------------------|-------------------------------------------------------|-------------------------------------------------------|-------------------------------------------------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|--------------|
|           | 0x000000FF h                                          | CHIP_INFO_ADDRESS                                     | CHIP_INFO_ADDRESS                                     | CHIP_INFO_ADDRESS                                     | Choice                                                |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           | 0x000000FF h                                          | Min                                                   | Max                                                   | Default                                               | Unit                                                  |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           |                                                       | 0 0: SI_TYPE 1: SI_VERSION                            | 4                                                     | 0                                                     |                                                       |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           | 4: SI_VARIANT                                         | 4: SI_VARIANT                                         | 4: SI_VARIANT                                         | 4: SI_VARIANT                                         | 4: SI_VARIANT                                         | R            | R            | R            | R            | R            | R            | R            | R            | R            | R            | R            | R            | R            | R            | R            | R            | R            |
| 0x02 h    | Variant 0                                             | Variant 0                                             | Variant 0                                             | Variant 0                                             | Variant 0                                             |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           | Mask                                                  |                                                       |                                                       |                                                       | Type                                                  | Name         | Name         | Name         | Name         | Name         | Name         | Name         | Name         | Name         | Name         | Name         | Name         | Name         | Name         | Name         | Name         | Name         |
|           | 0x0000FFFF h                                          | Min                                                   | Max                                                   |                                                       | Unsigned                                              | ADC_I_UX_RAW | ADC_I_UX_RAW | ADC_I_UX_RAW | ADC_I_UX_RAW | ADC_I_UX_RAW | ADC_I_UX_RAW | ADC_I_UX_RAW | ADC_I_UX_RAW | ADC_I_UX_RAW | ADC_I_UX_RAW | ADC_I_UX_RAW | ADC_I_UX_RAW | ADC_I_UX_RAW | ADC_I_UX_RAW | ADC_I_UX_RAW | ADC_I_UX_RAW | ADC_I_UX_RAW |
|           |                                                       |                                                       |                                                       | Default                                               | Unit                                                  |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           |                                                       | 0                                                     | 65535                                                 | 0                                                     |                                                       |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           |                                                       | Raw phase current U resp. X (LTC2351).                | Raw phase current U resp. X (LTC2351).                | Raw phase current U resp. X (LTC2351).                | Raw phase current U resp. X (LTC2351).                |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           | Mask                                                  | Name                                                  | Name                                                  | Name                                                  | Type                                                  |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           | 0xFFFF0000 h                                          | ADC_I_WY_RAW                                          | ADC_I_WY_RAW                                          | ADC_I_WY_RAW                                          | Unsigned                                              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           |                                                       | Min                                                   | Max                                                   | Default                                               | Unit                                                  |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           |                                                       | 0                                                     | 65535                                                 | 0                                                     |                                                       |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           | Raw phase                                             | current                                               |                                                       |                                                       | (LTC2351).                                            | Wresp.       | Wresp.       | Wresp.       | Wresp.       | Wresp.       | Wresp.       | Wresp.       | Wresp.       | Wresp.       | Wresp.       | Wresp.       | Wresp.       | Wresp.       | Wresp.       | Wresp.       | Wresp.       | Wresp.       |
|           | Variant 1                                             | Variant 1                                             | Variant 1                                             | Variant 1                                             | Variant 1                                             |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           | Mask                                                  | Name                                                  | Name                                                  | Name                                                  | Type                                                  |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           | 0x0000FFFF h                                          | ADC_I_U_RAW                                           | ADC_I_U_RAW                                           | ADC_I_U_RAW                                           | Unsigned                                              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           |                                                       | Min                                                   | Max                                                   | Default                                               | Unit                                                  |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           |                                                       | Raw phase current U (ADC_I_UX analog input for FOC2). | Raw phase current U (ADC_I_UX analog input for FOC2). | Raw phase current U (ADC_I_UX analog input for FOC2). | Raw phase current U (ADC_I_UX analog input for FOC2). |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           | Mask                                                  | Name                                                  | Name                                                  | Name                                                  | Type                                                  |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           | 0xFFFF0000 h                                          | ADC_I_V_RAW                                           | ADC_I_V_RAW                                           | ADC_I_V_RAW                                           | Unsigned                                              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           |                                                       | Min                                                   | Max                                                   | Default                                               | Unit                                                  |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           |                                                       | 0 Raw phase                                           | 65535                                                 | 0                                                     |                                                       |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           | current V (ADC_I_WY analog input for FOC2). Variant 2 | current V (ADC_I_WY analog input for FOC2). Variant 2 | current V (ADC_I_WY analog input for FOC2). Variant 2 | current V (ADC_I_WY analog input for FOC2). Variant 2 | current V (ADC_I_WY analog input for FOC2). Variant 2 |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           | Mask                                                  | Name                                                  | Name                                                  | Name                                                  | Type                                                  |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           | 0x0000FFFF h                                          | ADC_I_B_RAW                                           | ADC_I_B_RAW                                           | ADC_I_B_RAW                                           | Unsigned                                              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           |                                                       | Min Max                                               | Min Max                                               | Min Max                                               | Unit                                                  |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |
|           |                                                       |                                                       |                                                       | Default                                               |                                                       |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |              |

<!-- image -->

|                                          |                                          | Registername                             | Registername                             | Registername                             | Access   |
|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|----------|
|                                          | 0                                        | 65535                                    | 0                                        |                                          | Access   |
| Raw phase current Bottom (analog input). | Raw phase current Bottom (analog input). | Raw phase current Bottom (analog input). | Raw phase current Bottom (analog input). | Raw phase current Bottom (analog input). |          |
| Variant                                  | Variant                                  | Variant                                  | Variant                                  | Variant                                  |          |
| Mask                                     | Name                                     |                                          |                                          | Type                                     |          |
| 0x0000FFFF h                             | ADC_VM_RAW                               | ADC_VM_RAW                               | ADC_VM_RAW                               | Unsigned                                 |          |
|                                          | Min                                      | Max                                      | Default                                  | Unit                                     |          |
|                                          | 0                                        | 65535                                    | 0                                        |                                          |          |
| supply voltage.                          | supply voltage.                          | supply voltage.                          | supply voltage.                          | supply voltage.                          |          |
| Variant 4                                | Variant 4                                | Variant 4                                | Variant 4                                | Variant 4                                |          |
| Mask                                     | Name                                     | Name                                     | Name                                     | Type                                     |          |
| 0x0000FFFF h                             | ADC_T_MOSFETS_RAW                        | ADC_T_MOSFETS_RAW                        | ADC_T_MOSFETS_RAW                        | Unsigned                                 |          |
|                                          | Min                                      | Max                                      | Default                                  | Unit                                     |          |
|                                          | 0                                        | 65535                                    | 0                                        |                                          |          |
| Raw mosfet                               | temperature.                             | temperature.                             | temperature.                             | temperature.                             |          |
| Mask                                     | Name                                     | Name                                     | Name                                     | Type                                     |          |
| 0xFFFF0000 h                             | ADC_T_MOTOR_RAW                          | ADC_T_MOTOR_RAW                          | ADC_T_MOTOR_RAW                          | Unsigned                                 |          |
|                                          | Min                                      | Max                                      | Default                                  | Unit                                     |          |
|                                          | 0                                        | 65535                                    | 0                                        |                                          |          |
| Raw motor temperature.                   | Raw motor temperature.                   | Raw motor temperature.                   | Raw motor temperature.                   | Raw motor temperature.                   |          |
| Variant 5                                | Variant 5                                | Variant 5                                | Variant 5                                |                                          |          |
| Mask                                     | Name                                     | Name                                     | Name                                     | Type                                     |          |
| 0x0000FFFF h                             | ADC_U_UX_RAW                             | ADC_U_UX_RAW                             | ADC_U_UX_RAW                             | Unsigned                                 |          |
|                                          | Min                                      | Max                                      | Default                                  | Unit                                     |          |
|                                          | 0                                        | 65535                                    | 0                                        |                                          |          |
|                                          | Raw voltage terminal U resp. X.          | Raw voltage terminal U resp. X.          | Raw voltage terminal U resp. X.          | Raw voltage terminal U resp. X.          |          |
| Mask                                     | Name                                     | Name                                     | Name                                     | Type                                     |          |
| 0xFFFF0000 h                             | ADC_U_WY_RAW                             | ADC_U_WY_RAW                             | ADC_U_WY_RAW                             | Unsigned                                 |          |
|                                          | Min                                      | Max                                      | Default                                  | Unit                                     |          |
|                                          | 0                                        | 65535                                    | 0                                        |                                          |          |
| Raw voltage terminal Wresp. Y.           | Raw voltage terminal Wresp. Y.           | Raw voltage terminal Wresp. Y.           | Raw voltage terminal Wresp. Y.           | Raw voltage terminal Wresp. Y.           |          |
| Variant 6                                | Variant 6                                | Variant 6                                | Variant 6                                | Variant 6                                |          |
| Mask                                     | Name                                     | Name                                     | Name                                     | Type                                     |          |
| 0x0000FFFF h                             | ADC_U_V_RAW                              | ADC_U_V_RAW                              | ADC_U_V_RAW                              | Unsigned                                 |          |
|                                          | Min                                      | Max                                      | Default                                  | Unit                                     |          |
|                                          | 0                                        | 65535                                    | 0                                        |                                          |          |

<!-- image -->

| Registername                                   | Registername                                   | Registername                                   | Registername                                   | Registername                                   | Access   |
|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|----------|
| Raw voltage terminal V.                        | Raw voltage terminal V.                        | Raw voltage terminal V.                        | Raw voltage terminal V.                        | Raw voltage terminal V.                        |          |
| Variant                                        | Variant                                        | Variant                                        | Variant                                        | Variant                                        |          |
| Mask                                           | Name                                           | Name                                           | Name                                           | Type                                           |          |
| 0x0000FFFF h                                   | AENC_UX_RAW                                    | AENC_UX_RAW                                    | AENC_UX_RAW                                    | Unsigned                                       |          |
|                                                | Min                                            | Max                                            | Default                                        | Unit                                           |          |
|                                                | 0                                              | 65535                                          | 0                                              |                                                |          |
| Raw analog encoder voltage U resp. X.          | Raw analog encoder voltage U resp. X.          | Raw analog encoder voltage U resp. X.          | Raw analog encoder voltage U resp. X.          | Raw analog encoder voltage U resp. X.          |          |
| Mask                                           | Name                                           | Name                                           | Name                                           | Type                                           |          |
| 0xFFFF0000 h                                   | AENC_WY_RAW                                    | AENC_WY_RAW                                    | AENC_WY_RAW                                    | Unsigned                                       |          |
|                                                | Min                                            | Max                                            | Default                                        | Unit                                           |          |
|                                                | 0                                              | 65535                                          | 0                                              |                                                |          |
| Raw analog encoder voltage Wresp. Y. Variant 8 | Raw analog encoder voltage Wresp. Y. Variant 8 | Raw analog encoder voltage Wresp. Y. Variant 8 | Raw analog encoder voltage Wresp. Y. Variant 8 | Raw analog encoder voltage Wresp. Y. Variant 8 |          |
| Mask                                           | Name                                           | Name                                           | Name                                           | Type                                           |          |
| 0x0000FFFF h                                   | AENC_V_RAW                                     | AENC_V_RAW                                     | AENC_V_RAW                                     | Unsigned                                       |          |
|                                                | Min                                            | Max                                            | Default                                        | Unit                                           |          |
|                                                | analog encoder voltage V.                      | analog encoder voltage V.                      | analog encoder voltage V.                      | analog encoder voltage V.                      |          |
| Mask                                           | Name                                           | Name                                           | Name                                           | Type                                           |          |
| 0xFFFF0000 h                                   | AENC_N_RAW                                     | AENC_N_RAW                                     | AENC_N_RAW                                     | Unsigned                                       |          |
|                                                | Min                                            | Max                                            | Default                                        | Unit                                           |          |
|                                                | 0                                              | 65535                                          | 0                                              |                                                |          |
| Raw analog encoder zero position               | Raw analog encoder zero position               | Raw analog encoder zero position               | Raw analog encoder zero position               | Raw analog encoder zero position               |          |
| Variant 9                                      | Variant 9                                      | Variant 9                                      | Variant 9                                      | Variant 9                                      |          |
| Mask                                           | Name                                           | Name                                           | Name                                           | Type                                           |          |
| 0x0000FFFF h                                   | ANALOG_GPI_RAW                                 | ANALOG_GPI_RAW                                 | ANALOG_GPI_RAW                                 | Unsigned                                       |          |
|                                                | Min                                            | Max                                            | Default                                        | Unit                                           |          |
|                                                | 0                                              | 65535                                          | 0                                              |                                                |          |
| Raw analog input voltage.                      | Raw analog input voltage.                      | Raw analog input voltage.                      | Raw analog input voltage.                      | Raw analog input voltage.                      |          |
| Variant 10                                     | Variant 10                                     | Variant 10                                     | Variant 10                                     | Variant 10                                     |          |
| Mask                                           | Name                                           | Name                                           | Name                                           | Type                                           |          |
| 0x0000FFFF h                                   | ADCSD_I_UX_RAW                                 | ADCSD_I_UX_RAW                                 | ADCSD_I_UX_RAW                                 | Signed                                         |          |
|                                                | Min                                            | Max                                            | Default                                        | Unit                                           |          |
|                                                | -32768                                         | 32767                                          | 0                                              |                                                |          |
| SigmaDeltaADC current UX.                      | SigmaDeltaADC current UX.                      | SigmaDeltaADC current UX.                      | SigmaDeltaADC current UX.                      | SigmaDeltaADC current UX.                      |          |

<!-- image -->

| Address   | Registername                                                                                                                                                                                                                                                                         | Registername                                                                                                                                                                                                                                                                         | Registername                                                                                                                                                                                                                                                                         | Registername                                                                                                                                                                                                                                                                         | Registername                                                                                                                                                                                                                                                                         | Access   |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Address   | Mask                                                                                                                                                                                                                                                                                 | Name                                                                                                                                                                                                                                                                                 | Name                                                                                                                                                                                                                                                                                 | Name                                                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                                                 | Access   |
| Address   | 0xFFFF0000 h                                                                                                                                                                                                                                                                         | ADCSD_I_WY_RAW                                                                                                                                                                                                                                                                       | ADCSD_I_WY_RAW                                                                                                                                                                                                                                                                       | ADCSD_I_WY_RAW                                                                                                                                                                                                                                                                       | Signed                                                                                                                                                                                                                                                                               | Access   |
| Address   | 0xFFFF0000 h                                                                                                                                                                                                                                                                         | Min                                                                                                                                                                                                                                                                                  | Max                                                                                                                                                                                                                                                                                  | Default                                                                                                                                                                                                                                                                              | Unit                                                                                                                                                                                                                                                                                 | Access   |
| Address   | 0xFFFF0000 h                                                                                                                                                                                                                                                                         | -32768 SigmaDeltaADC                                                                                                                                                                                                                                                                 | 32767 current                                                                                                                                                                                                                                                                        | 0                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                      | Access   |
| Address   | Variant 11                                                                                                                                                                                                                                                                           | Variant 11                                                                                                                                                                                                                                                                           | Variant 11                                                                                                                                                                                                                                                                           | Variant 11                                                                                                                                                                                                                                                                           | Variant 11                                                                                                                                                                                                                                                                           | Access   |
| Address   | Mask                                                                                                                                                                                                                                                                                 | Name                                                                                                                                                                                                                                                                                 | Name                                                                                                                                                                                                                                                                                 | Name                                                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                                                 | Access   |
| Address   | 0x0000FFFF h                                                                                                                                                                                                                                                                         | ADCSD_I_B_RAW                                                                                                                                                                                                                                                                        | ADCSD_I_B_RAW                                                                                                                                                                                                                                                                        | ADCSD_I_B_RAW                                                                                                                                                                                                                                                                        | Signed                                                                                                                                                                                                                                                                               | Access   |
| Address   |                                                                                                                                                                                                                                                                                      | Min                                                                                                                                                                                                                                                                                  | Max                                                                                                                                                                                                                                                                                  | Default                                                                                                                                                                                                                                                                              | Unit                                                                                                                                                                                                                                                                                 | Access   |
| Address   |                                                                                                                                                                                                                                                                                      | -32768                                                                                                                                                                                                                                                                               | 32767                                                                                                                                                                                                                                                                                | 0                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                      | Access   |
| Address   |                                                                                                                                                                                                                                                                                      | SigmaDeltaADC current at bottom (PCB S (sense) instead of B (bottom).                                                                                                                                                                                                                | SigmaDeltaADC current at bottom (PCB S (sense) instead of B (bottom).                                                                                                                                                                                                                | SigmaDeltaADC current at bottom (PCB S (sense) instead of B (bottom).                                                                                                                                                                                                                | SigmaDeltaADC current at bottom (PCB S (sense) instead of B (bottom).                                                                                                                                                                                                                | Access   |
| 0x03 h    | ADC_RAW_ADDR                                                                                                                                                                                                                                                                         | ADC_RAW_ADDR                                                                                                                                                                                                                                                                         | ADC_RAW_ADDR                                                                                                                                                                                                                                                                         | ADC_RAW_ADDR                                                                                                                                                                                                                                                                         | ADC_RAW_ADDR                                                                                                                                                                                                                                                                         | RW       |
| 0x03 h    | Mask                                                                                                                                                                                                                                                                                 | Name                                                                                                                                                                                                                                                                                 | Name                                                                                                                                                                                                                                                                                 | Name                                                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                                                 | RW       |
| 0x03 h    | 0x000000FF h                                                                                                                                                                                                                                                                         | ADC_RAW_ADDR                                                                                                                                                                                                                                                                         | ADC_RAW_ADDR                                                                                                                                                                                                                                                                         | ADC_RAW_ADDR                                                                                                                                                                                                                                                                         | Choice                                                                                                                                                                                                                                                                               | RW       |
| 0x03 h    | 0x000000FF h                                                                                                                                                                                                                                                                         | Min                                                                                                                                                                                                                                                                                  | Max                                                                                                                                                                                                                                                                                  | Default                                                                                                                                                                                                                                                                              | Unit                                                                                                                                                                                                                                                                                 | RW       |
| 0x03 h    | 0x000000FF h                                                                                                                                                                                                                                                                         | 0 0: ADC_I_WY_RAW 1: ADC_I_V_RAW 2: 3: 4: 5: 6: 7: 8: 9: 10:                                                                                                                                                                                                                         | 11 & & ADC_I_U_RAW                                                                                                                                                                                                                                                                   | 0 ADC_I_UX_RAW                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                      | RW       |
| 0x03 h    | ADC_I_B_RAW ADC_VM_RAW ADC_T_MOSFETS_RAW & ADC_T_MOTOR_RAW ADC_U_WY_RAW & ADC_U_UX_RAW ADC_U_V_RAW AENC_WY_RAW & AENC_UX_RAW AENC_N_RAW & AENC_V_RAW ANALOG_GPI_RAW ADCSD_I_WY_RAW & ADCSD_I_UX_RAW 11: ADCSD_I_B_RAW ADCSD_CLKCFG Mask Name Type 0x0000FFFF h ADCSD_CLKCFG Unsigned | ADC_I_B_RAW ADC_VM_RAW ADC_T_MOSFETS_RAW & ADC_T_MOTOR_RAW ADC_U_WY_RAW & ADC_U_UX_RAW ADC_U_V_RAW AENC_WY_RAW & AENC_UX_RAW AENC_N_RAW & AENC_V_RAW ANALOG_GPI_RAW ADCSD_I_WY_RAW & ADCSD_I_UX_RAW 11: ADCSD_I_B_RAW ADCSD_CLKCFG Mask Name Type 0x0000FFFF h ADCSD_CLKCFG Unsigned | ADC_I_B_RAW ADC_VM_RAW ADC_T_MOSFETS_RAW & ADC_T_MOTOR_RAW ADC_U_WY_RAW & ADC_U_UX_RAW ADC_U_V_RAW AENC_WY_RAW & AENC_UX_RAW AENC_N_RAW & AENC_V_RAW ANALOG_GPI_RAW ADCSD_I_WY_RAW & ADCSD_I_UX_RAW 11: ADCSD_I_B_RAW ADCSD_CLKCFG Mask Name Type 0x0000FFFF h ADCSD_CLKCFG Unsigned | ADC_I_B_RAW ADC_VM_RAW ADC_T_MOSFETS_RAW & ADC_T_MOTOR_RAW ADC_U_WY_RAW & ADC_U_UX_RAW ADC_U_V_RAW AENC_WY_RAW & AENC_UX_RAW AENC_N_RAW & AENC_V_RAW ANALOG_GPI_RAW ADCSD_I_WY_RAW & ADCSD_I_UX_RAW 11: ADCSD_I_B_RAW ADCSD_CLKCFG Mask Name Type 0x0000FFFF h ADCSD_CLKCFG Unsigned | ADC_I_B_RAW ADC_VM_RAW ADC_T_MOSFETS_RAW & ADC_T_MOTOR_RAW ADC_U_WY_RAW & ADC_U_UX_RAW ADC_U_V_RAW AENC_WY_RAW & AENC_UX_RAW AENC_N_RAW & AENC_V_RAW ANALOG_GPI_RAW ADCSD_I_WY_RAW & ADCSD_I_UX_RAW 11: ADCSD_I_B_RAW ADCSD_CLKCFG Mask Name Type 0x0000FFFF h ADCSD_CLKCFG Unsigned | RW       |
| 0x03 h    |                                                                                                                                                                                                                                                                                      | Min                                                                                                                                                                                                                                                                                  | Max                                                                                                                                                                                                                                                                                  | Default                                                                                                                                                                                                                                                                              | Unit                                                                                                                                                                                                                                                                                 | RW       |
| 0x03 h    |                                                                                                                                                                                                                                                                                      | 0                                                                                                                                                                                                                                                                                    | 65535                                                                                                                                                                                                                                                                                | 0                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                      | RW       |
| 0x06 h    |                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                      | ADC_I1_I0_EXT                                                                                                                                                                                                                                                                        | ADC_I1_I0_EXT                                                                                                                                                                                                                                                                        | ADC_I1_I0_EXT                                                                                                                                                                                                                                                                        | RW       |
| 0x03 h    |                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                      | RW       |

<!-- image -->

| Address   | Registername        | Registername                                                       | Registername                                                       | Registername                                                       | Registername                                                       | Access   |
|-----------|---------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------------------|----------|
| Address   | Mask                | Name                                                               | Name                                                               | Name                                                               | Type                                                               |          |
| Address   | 0x0000FFFF h        | ADC_I0_EXT                                                         | ADC_I0_EXT                                                         | ADC_I0_EXT                                                         | Unsigned                                                           |          |
| Address   | 0x0000FFFF h        | Min                                                                | Max                                                                | Default                                                            | Unit                                                               |          |
| Address   | 0x0000FFFF h        | 0                                                                  | 65535                                                              | 0                                                                  |                                                                    |          |
| Address   | 0x0000FFFF h        | Register for write of ADC_I0 value from external source (eg. CPU). | Register for write of ADC_I0 value from external source (eg. CPU). | Register for write of ADC_I0 value from external source (eg. CPU). | Register for write of ADC_I0 value from external source (eg. CPU). |          |
| Address   | Mask                | Name                                                               | Name                                                               | Name                                                               | Type                                                               |          |
| Address   | 0xFFFF0000 h        | ADC_I1_EXT                                                         | ADC_I1_EXT                                                         | ADC_I1_EXT                                                         | Unsigned                                                           |          |
| Address   |                     | Min                                                                | Max                                                                | Default                                                            | Unit                                                               |          |
| Address   |                     | 0                                                                  | 65535                                                              | 0                                                                  |                                                                    |          |
| Address   |                     | Register for write of ADC_I1 value from external source (eg. CPU). | Register for write of ADC_I1 value from external source (eg. CPU). | Register for write of ADC_I1 value from external source (eg. CPU). | Register for write of ADC_I1 value from external source (eg. CPU). | RW       |
| 0x08 h    | ADC_I1_SCALE_OFFSET | ADC_I1_SCALE_OFFSET                                                | ADC_I1_SCALE_OFFSET                                                | ADC_I1_SCALE_OFFSET                                                | ADC_I1_SCALE_OFFSET                                                |          |
| 0x08 h    | Mask                | Name                                                               | Name                                                               | Name                                                               | Type                                                               |          |
| 0x08 h    | 0x0000FFFF h        | ADC_I1_OFFSET                                                      | ADC_I1_OFFSET                                                      | ADC_I1_OFFSET                                                      | Signed                                                             |          |
| 0x08 h    | 0x0000FFFF h        | Min                                                                | Max                                                                | Default                                                            | Unit                                                               |          |
| 0x08 h    | 0x0000FFFF h        | -32768                                                             | 32767                                                              | 0                                                                  |                                                                    |          |
| 0x08 h    | 0x0000FFFF h        | Offset for current ADC channel 1.                                  | Offset for current ADC channel 1.                                  | Offset for current ADC channel 1.                                  | Offset for current ADC channel 1.                                  |          |
| 0x08 h    | Mask                | Name                                                               | Name                                                               | Name                                                               | Type                                                               |          |
| 0x08 h    | 0xFFFF0000 h        | ADC_I1_SCALE                                                       | ADC_I1_SCALE                                                       | ADC_I1_SCALE                                                       | Signed                                                             |          |
| 0x08 h    |                     | Min                                                                | Max                                                                | Default                                                            | Unit                                                               |          |
| 0x08 h    |                     | -32768                                                             | 32767                                                              | 0                                                                  |                                                                    |          |
| 0x08 h    |                     | Scaling factor for current ADC channel 1.                          | Scaling factor for current ADC channel 1.                          | Scaling factor for current ADC channel 1.                          | Scaling factor for current ADC channel 1.                          |          |
| 0x09 h    | ADC_I0_SCALE_OFFSET | ADC_I0_SCALE_OFFSET                                                | ADC_I0_SCALE_OFFSET                                                | ADC_I0_SCALE_OFFSET                                                | ADC_I0_SCALE_OFFSET                                                | RW       |
| 0x09 h    | Mask                | Name                                                               | Name                                                               | Name                                                               | Type                                                               |          |
| 0x09 h    | 0x0000FFFF h        | ADC_I0_OFFSET                                                      | ADC_I0_OFFSET                                                      | ADC_I0_OFFSET                                                      | Signed                                                             |          |
| 0x09 h    | 0x0000FFFF h        | Min                                                                | Max                                                                | Default                                                            | Unit                                                               |          |
| 0x09 h    | 0x0000FFFF h        | -32768                                                             | 32767                                                              | 0                                                                  |                                                                    |          |
| 0x09 h    | 0x0000FFFF h        | Offset for current ADC channel 0.                                  | Offset for current ADC channel 0.                                  | Offset for current ADC channel 0.                                  | Offset for current ADC channel 0.                                  |          |
| 0x09 h    | Mask                | Name                                                               | Name                                                               | Name                                                               | Type                                                               |          |
| 0x09 h    | 0xFFFF0000 h        | ADC_I0_SCALE                                                       | ADC_I0_SCALE                                                       | ADC_I0_SCALE                                                       | Signed                                                             |          |
| 0x09 h    |                     | Min                                                                | Max                                                                | Default                                                            | Unit                                                               |          |
| 0x09 h    |                     | -32768                                                             | 32767                                                              | 0                                                                  |                                                                    |          |
| 0x09 h    |                     | Scaling factor for current ADC channel 0.                          | Scaling factor for current ADC channel 0.                          | Scaling factor for current ADC channel 0.                          | Scaling factor for current ADC channel 0.                          |          |
| 0x0A h    | ADC_I_SELECT        | ADC_I_SELECT                                                       | ADC_I_SELECT                                                       | ADC_I_SELECT                                                       | ADC_I_SELECT                                                       | RW       |

<!-- image -->

<!-- image -->

| Address   | Registername   | Registername                                                                                                                                                                                                                                                                                                             | Registername                           | Registername                           | Registername   | Access   |
|-----------|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|----------------------------------------|----------------|----------|
|           | Mask           | Name                                                                                                                                                                                                                                                                                                                     | Name                                   | Name                                   | Type           |          |
|           | 0x000000FF h   | ADC_I0_SELECT                                                                                                                                                                                                                                                                                                            | ADC_I0_SELECT                          | ADC_I0_SELECT                          | Choice         |          |
|           |                | Min                                                                                                                                                                                                                                                                                                                      | Max                                    | Default                                | Unit           |          |
|           |                | 0 7 Select input for raw current ADC_I0_RAW. 0: ADC_I0_RAW (analog input 1: ADC_I1_RAW (analog input 2: ADC_I0_EXT (from register) 3: ADC_I1_EXT (from register) 4: ADCSD_I0_RAW (sigma delta 5: ADCSD_I1_RAW (sigma delta 6: ADCSPI_I0_RAW (SPI ADC_I_UX) 7: ADCSPI_I1_RAW (SPI ADC_I_WY)                               |                                        | 0 ADC_I_U) ADC_I_V) ADC) ADC)          |                |          |
|           | Mask           | Name                                                                                                                                                                                                                                                                                                                     | Name                                   | Name                                   | Type           |          |
|           | 0x0000FF00 h   | ADC_I1_SELECT                                                                                                                                                                                                                                                                                                            | ADC_I1_SELECT                          | ADC_I1_SELECT                          | Choice         |          |
|           |                | Min                                                                                                                                                                                                                                                                                                                      | Max                                    | Default                                | Unit           |          |
|           |                | 0 7 0 Select input for raw current ADC_I1_RAW. 0: ADC_I0_RAW (analog input ADC_I_U) 1: ADC_I1_RAW (analog input ADC_I_V) 2: ADC_I0_EXT (from register) 3: ADC_I1_EXT (from register) 4: ADCSD_I0_RAW (sigma delta ADC) 5: ADCSD_I1_RAW (sigma delta ADC) 6: ADCSPI_I0_RAW (SPI ADC_I_UX) 7: ADCSPI_I1_RAW (SPI ADC_I_WY) |                                        |                                        |                |          |
|           | Mask           | Name                                                                                                                                                                                                                                                                                                                     | Name                                   | Name                                   | Type           |          |
|           | 0x03000000 h   | ADC_I_UX_SELECT                                                                                                                                                                                                                                                                                                          | ADC_I_UX_SELECT                        | ADC_I_UX_SELECT                        | Choice         |          |
|           |                | Min                                                                                                                                                                                                                                                                                                                      | Max                                    | Default                                | Unit           |          |
|           |                | 0 0: UX = 1: UX =                                                                                                                                                                                                                                                                                                        | 2                                      | 0                                      |                |          |
|           |                | ADC_I0 (default) ADC_I1 2: UX = ADC_I2                                                                                                                                                                                                                                                                                   | ADC_I0 (default) ADC_I1 2: UX = ADC_I2 | ADC_I0 (default) ADC_I1 2: UX = ADC_I2 |                |          |
|           | Mask           | Name                                                                                                                                                                                                                                                                                                                     | Name                                   | Name                                   | Type           |          |
|           | 0x0C000000 h   | ADC_I_V_SELECT                                                                                                                                                                                                                                                                                                           | ADC_I_V_SELECT                         | ADC_I_V_SELECT                         | Choice         |          |

<!-- image -->

| Address   | Registername        |                                                        |                                                  |                                                        |                                                        | Access   |
|-----------|---------------------|--------------------------------------------------------|--------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------|----------|
| Address   |                     | Min                                                    | Max                                              | Default                                                | Unit                                                   |          |
| Address   |                     | 0                                                      | 2                                                | 0                                                      |                                                        |          |
| Address   |                     | 0: V = ADC_I0 1: V = ADC_I1 (default)                  | 0: V = ADC_I0 1: V = ADC_I1 (default)            | 0: V = ADC_I0 1: V = ADC_I1 (default)                  | 0: V = ADC_I0 1: V = ADC_I1 (default)                  |          |
| Address   |                     | ADC_I2                                                 | ADC_I2                                           | ADC_I2                                                 | ADC_I2                                                 |          |
| Address   | Mask                | Name                                                   | Name                                             | Name                                                   | Type                                                   |          |
| Address   | 0x30000000 h        | ADC_I_WY_SELECT                                        | ADC_I_WY_SELECT                                  | ADC_I_WY_SELECT                                        | Choice                                                 |          |
| Address   |                     | Min                                                    | Max                                              | Default                                                | Unit                                                   |          |
| Address   |                     | 0                                                      | 2                                                | 0                                                      |                                                        |          |
| Address   |                     | 0: WY = ADC_I0 1: WY = ADC_I1 2: WY = ADC_I2 (default) | AENC_0_SCALE_OFFSET                              | 0: WY = ADC_I0 1: WY = ADC_I1 2: WY = ADC_I2 (default) | 0: WY = ADC_I0 1: WY = ADC_I1 2: WY = ADC_I2 (default) | RW       |
| 0x0D h    |                     |                                                        |                                                  |                                                        |                                                        |          |
|           | Mask                | Name                                                   | Name                                             | Name                                                   | Type                                                   |          |
|           | 0x0000FFFF h        | AENC_0_OFFSET                                          | AENC_0_OFFSET                                    | AENC_0_OFFSET                                          | Signed                                                 |          |
|           |                     | Min -32768                                             | Max 32767                                        | Default 0                                              | Unit                                                   |          |
|           |                     | Offset for Analog                                      | Encoder                                          | ADC channel                                            |                                                        |          |
|           | Mask                | Name                                                   |                                                  |                                                        | Type                                                   |          |
|           | 0xFFFF0000 h        | AENC_0_SCALE                                           | AENC_0_SCALE                                     | AENC_0_SCALE                                           | Signed                                                 |          |
|           |                     | Min Max                                                |                                                  | Default                                                | Unit                                                   |          |
|           |                     | -32768                                                 | 32767                                            | 0                                                      |                                                        |          |
| 0x0E      | AENC_1_SCALE_OFFSET | Scaling factor for Analog Encoder ADC channel 0.       | Scaling factor for Analog Encoder ADC channel 0. | Scaling factor for Analog Encoder ADC channel 0.       | Scaling factor for Analog Encoder ADC channel 0.       | RW       |
| h         | Mask                | Name                                                   | Name                                             | Name                                                   | Type                                                   |          |
|           | 0x0000FFFF h        | AENC_1_OFFSET                                          | AENC_1_OFFSET                                    | AENC_1_OFFSET                                          | Signed                                                 |          |
|           |                     | Min                                                    | Max                                              | Default                                                | Unit                                                   |          |
|           |                     | Offset for Analog Encoder ADC channel                  | Offset for Analog Encoder ADC channel            | Offset for Analog Encoder ADC channel                  |                                                        |          |
|           | Mask                | Name                                                   |                                                  |                                                        | Type                                                   |          |
|           | 0xFFFF0000 h        | AENC_1_SCALE                                           | AENC_1_SCALE                                     | AENC_1_SCALE                                           | Signed                                                 |          |
|           |                     | Min                                                    | Max                                              | Default                                                | Unit                                                   |          |
|           |                     | Scaling factor for Analog Encoder ADC channel 1.       | Scaling factor for Analog Encoder ADC channel 1. | Scaling factor for Analog Encoder ADC channel 1.       | Scaling factor for Analog Encoder ADC channel 1.       | RW       |
| 0x0F h    |                     |                                                        |                                                  |                                                        |                                                        |          |
|           | AENC_2_SCALE_OFFSET | AENC_2_SCALE_OFFSET                                    | AENC_2_SCALE_OFFSET                              | AENC_2_SCALE_OFFSET                                    | AENC_2_SCALE_OFFSET                                    |          |

<!-- image -->

| Address   | Registername                          |                                                                                                                                                  |                     |         |        | Access   |
|-----------|---------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|---------|--------|----------|
|           | Mask                                  | Name                                                                                                                                             |                     |         | Type   |          |
|           | 0x0000FFFF h                          | AENC_2_OFFSET                                                                                                                                    |                     |         | Signed |          |
|           |                                       | Min                                                                                                                                              | Max                 | Default | Unit   |          |
|           |                                       | -32768                                                                                                                                           | 32767               | 0       |        |          |
|           |                                       | Offset for Analog Encoder ADC channel 2.                                                                                                         |                     |         |        |          |
|           | Mask                                  | Name                                                                                                                                             |                     |         | Type   |          |
|           | 0xFFFF0000 h                          | AENC_2_SCALE                                                                                                                                     |                     |         | Signed |          |
|           |                                       | Min                                                                                                                                              | Max                 | Default | Unit   |          |
|           |                                       | -32768                                                                                                                                           | 32767               | 0       |        |          |
|           |                                       | Scaling factor for Analog Encoder ADC channel 2.                                                                                                 | AENC_3_SCALE_OFFSET |         |        | RW       |
| 0x10 h    | Mask                                  | Name                                                                                                                                             |                     |         | Type   |          |
|           | 0x0000FFFF h                          | AENC_3_OFFSET                                                                                                                                    |                     |         | Signed |          |
|           |                                       | Min                                                                                                                                              | Max                 | Default | Unit   |          |
|           |                                       | -32768                                                                                                                                           | 32767               | 0       |        |          |
|           | Mask                                  |                                                                                                                                                  | Name                |         | Type   |          |
|           | h                                     |                                                                                                                                                  |                     |         |        |          |
|           | 0xFFFF0000                            | AENC_3_SCALE                                                                                                                                     |                     |         | Signed |          |
|           |                                       | Max Default                                                                                                                                      |                     |         |        |          |
|           |                                       | Min                                                                                                                                              |                     |         | Unit   |          |
|           |                                       | -32768                                                                                                                                           | 32767               | 0       |        |          |
| 0x11      | Scaling factor for Analog Encoder ADC |                                                                                                                                                  |                     |         |        | RW       |
| h         | AENC_SELECT                           |                                                                                                                                                  |                     |         |        |          |
|           | Mask                                  | Name                                                                                                                                             |                     |         | Type   |          |
|           | 0x000000FF h                          | AENC_0_SELECT                                                                                                                                    |                     |         | Choice |          |
|           |                                       | Min                                                                                                                                              | Max                 | Default | Unit   |          |
|           |                                       | 0                                                                                                                                                | 3                   | 0       |        |          |
|           |                                       | Select analog encoder ADC channel for raw analog encoder signal AENC_0_RAW. 0: AENC_UX_RAW (default) 1: AENC_VN_RAW 2: AENC_WY_RAW 3: AENC_N_RAW |                     |         |        |          |
|           | Mask                                  |                                                                                                                                                  |                     |         | Type   |          |
|           |                                       | Name                                                                                                                                             |                     |         |        |          |
|           |                                       | AENC_1_SELECT                                                                                                                                    |                     |         | Choice |          |
|           |                                       | Max                                                                                                                                              |                     |         | Unit   |          |
|           |                                       | Default                                                                                                                                          |                     |         |        |          |
|           | h                                     |                                                                                                                                                  |                     |         |        |          |
|           |                                       | Min                                                                                                                                              |                     |         |        |          |
|           | 0x0000FF00                            |                                                                                                                                                  |                     |         |        |          |

<!-- image -->

| Address   | Registername   | Registername                                                                                                                                     | Registername                                                                                                                                     | Registername                                                                                                                                     | Registername                                                                                                                                     | Access   |
|-----------|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Address   |                | 0                                                                                                                                                | 3                                                                                                                                                | 0                                                                                                                                                |                                                                                                                                                  | Access   |
| Address   |                | Select analog encoder ADC channel for raw analog encoder signal AENC_1_RAW. 0: AENC_UX_RAW 1: AENC_VN_RAW (default) 2: AENC_WY_RAW 3: AENC_N_RAW | Select analog encoder ADC channel for raw analog encoder signal AENC_1_RAW. 0: AENC_UX_RAW 1: AENC_VN_RAW (default) 2: AENC_WY_RAW 3: AENC_N_RAW | Select analog encoder ADC channel for raw analog encoder signal AENC_1_RAW. 0: AENC_UX_RAW 1: AENC_VN_RAW (default) 2: AENC_WY_RAW 3: AENC_N_RAW | Select analog encoder ADC channel for raw analog encoder signal AENC_1_RAW. 0: AENC_UX_RAW 1: AENC_VN_RAW (default) 2: AENC_WY_RAW 3: AENC_N_RAW | Access   |
| Address   | Mask           | Name                                                                                                                                             | Name                                                                                                                                             | Name                                                                                                                                             | Type                                                                                                                                             | Access   |
| Address   | 0x00FF0000 h   | AENC_2_SELECT                                                                                                                                    | AENC_2_SELECT                                                                                                                                    | AENC_2_SELECT                                                                                                                                    | Choice                                                                                                                                           | Access   |
| Address   | 0x00FF0000 h   | Min                                                                                                                                              | Max                                                                                                                                              | Default                                                                                                                                          | Unit                                                                                                                                             | Access   |
| Address   | 0x00FF0000 h   | 0 Select analog signal AENC_2_RAW. 0: AENC_UX_RAW 1: AENC_VN_RAW 2: AENC_WY_RAW                                                                  | 3 encoder (default)                                                                                                                              | 0 channel for                                                                                                                                    | raw analog encoder                                                                                                                               | Access   |
| Address   | Mask           | Name                                                                                                                                             | Name                                                                                                                                             | Name                                                                                                                                             | Type                                                                                                                                             | Access   |
| Address   |                |                                                                                                                                                  |                                                                                                                                                  |                                                                                                                                                  | Choice                                                                                                                                           | Access   |
| Address   | 0xFF000000 h   | AENC_3_SELECT                                                                                                                                    | AENC_3_SELECT                                                                                                                                    | AENC_3_SELECT                                                                                                                                    |                                                                                                                                                  | Access   |
| Address   |                | Min                                                                                                                                              | Max                                                                                                                                              | Default                                                                                                                                          | Unit                                                                                                                                             | Access   |
| Address   |                | 0                                                                                                                                                | 3                                                                                                                                                | 0                                                                                                                                                |                                                                                                                                                  | Access   |
| Address   |                | Select analog encoder ADC channel for raw analog encoder signal AENC_3_RAW. 0: AENC_UX_RAW 1: AENC_VN_RAW 2: AENC_WY_RAW                         | Select analog encoder ADC channel for raw analog encoder signal AENC_3_RAW. 0: AENC_UX_RAW 1: AENC_VN_RAW 2: AENC_WY_RAW                         | Select analog encoder ADC channel for raw analog encoder signal AENC_3_RAW. 0: AENC_UX_RAW 1: AENC_VN_RAW 2: AENC_WY_RAW                         | Select analog encoder ADC channel for raw analog encoder signal AENC_3_RAW. 0: AENC_UX_RAW 1: AENC_VN_RAW 2: AENC_WY_RAW                         |          |
|           | ADC_IWY_IUX    | ADC_IWY_IUX                                                                                                                                      | ADC_IWY_IUX                                                                                                                                      | ADC_IWY_IUX                                                                                                                                      | ADC_IWY_IUX                                                                                                                                      | R        |
|           | Mask           | Name                                                                                                                                             | Name                                                                                                                                             | Name                                                                                                                                             | Type                                                                                                                                             | R        |
|           | 0x0000FFFF h   | ADC_IUX                                                                                                                                          | ADC_IUX                                                                                                                                          | ADC_IUX                                                                                                                                          | Signed                                                                                                                                           | R        |
|           | 0x0000FFFF h   | Min                                                                                                                                              | Max                                                                                                                                              | Default                                                                                                                                          | Unit                                                                                                                                             | R        |
|           | 0x0000FFFF h   | -32768                                                                                                                                           | 32767                                                                                                                                            | 0                                                                                                                                                |                                                                                                                                                  | R        |
|           |                | Register of scaled current ADC value including signed added offset as input for the FOC.                                                         | Register of scaled current ADC value including signed added offset as input for the FOC.                                                         | Register of scaled current ADC value including signed added offset as input for the FOC.                                                         | Register of scaled current ADC value including signed added offset as input for the FOC.                                                         | R        |
|           | Mask           | Name                                                                                                                                             | Name                                                                                                                                             | Name                                                                                                                                             | Type                                                                                                                                             | R        |
|           | 0xFFFF0000 h   | ADC_IWY                                                                                                                                          | ADC_IWY                                                                                                                                          | ADC_IWY                                                                                                                                          | Signed                                                                                                                                           | R        |

<!-- image -->

| Address   | Registername   |                                                                                                      |                                                                                                      |                                                                                                      |                                                                                                      | Access   |
|-----------|----------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|----------|
| Address   |                | Min                                                                                                  | Max                                                                                                  | Default                                                                                              | Unit                                                                                                 |          |
| Address   |                | -32768                                                                                               | 32767                                                                                                | 0                                                                                                    |                                                                                                      |          |
| Address   |                | Register of scaled current ADC value including signed added offset as input for the FOC.             | Register of scaled current ADC value including signed added offset as input for the FOC.             | Register of scaled current ADC value including signed added offset as input for the FOC.             | Register of scaled current ADC value including signed added offset as input for the FOC.             |          |
| 0x13 h    | ADC_IV         | ADC_IV                                                                                               | ADC_IV                                                                                               | ADC_IV                                                                                               | ADC_IV                                                                                               | R        |
| 0x13 h    | Mask           | Name                                                                                                 |                                                                                                      |                                                                                                      | Type                                                                                                 |          |
| 0x13 h    | 0x0000FFFF h   |                                                                                                      | ADC_IV                                                                                               |                                                                                                      | Signed                                                                                               |          |
| 0x13 h    | 0x0000FFFF h   | Min                                                                                                  | Max                                                                                                  | Default                                                                                              | Unit                                                                                                 |          |
| 0x13 h    | 0x0000FFFF h   | -32768                                                                                               | 32767                                                                                                | 0                                                                                                    |                                                                                                      |          |
| 0x13 h    | 0x0000FFFF h   | Register of scaled current ADC value including signed added offset as input for the FOC.             | Register of scaled current ADC value including signed added offset as input for the FOC.             | Register of scaled current ADC value including signed added offset as input for the FOC.             | Register of scaled current ADC value including signed added offset as input for the FOC.             |          |
| 0x15 h    | AENC_WY_UX     | AENC_WY_UX                                                                                           | AENC_WY_UX                                                                                           | AENC_WY_UX                                                                                           | AENC_WY_UX                                                                                           | R        |
| 0x15 h    | Mask           |                                                                                                      | Name                                                                                                 |                                                                                                      | Type                                                                                                 |          |
| 0x15 h    | 0x0000FFFF h   |                                                                                                      | AENC_UX                                                                                              |                                                                                                      | Signed                                                                                               |          |
| 0x15 h    | 0x0000FFFF h   | Min                                                                                                  | Max                                                                                                  | Default                                                                                              | Unit                                                                                                 |          |
| 0x15 h    | 0x0000FFFF h   | -32768                                                                                               | 32767                                                                                                | 0                                                                                                    |                                                                                                      |          |
| 0x15 h    | 0x0000FFFF h   | Register of scaled analog encoder value including signed added offset as input for the interpolator. | Register of scaled analog encoder value including signed added offset as input for the interpolator. | Register of scaled analog encoder value including signed added offset as input for the interpolator. | Register of scaled analog encoder value including signed added offset as input for the interpolator. |          |
| 0x15 h    | Mask           |                                                                                                      | Name                                                                                                 |                                                                                                      | Type                                                                                                 |          |
| 0x15 h    | 0xFFFF0000 h   |                                                                                                      | AENC_WY                                                                                              |                                                                                                      | Signed                                                                                               |          |
| 0x15 h    | 0xFFFF0000 h   | Min                                                                                                  | Max                                                                                                  | Default                                                                                              | Unit                                                                                                 |          |
| 0x15 h    | 0xFFFF0000 h   | -32768                                                                                               | 32767                                                                                                | 0                                                                                                    |                                                                                                      |          |
| 0x15 h    | 0xFFFF0000 h   | Register of scaled analog encoder value including signed added offset as input for the interpolator. | Register of scaled analog encoder value including signed added offset as input for the interpolator. | Register of scaled analog encoder value including signed added offset as input for the interpolator. | Register of scaled analog encoder value including signed added offset as input for the interpolator. | R        |
| 0x16 h    | AENC_N_VN      | AENC_N_VN                                                                                            | AENC_N_VN                                                                                            | AENC_N_VN                                                                                            | AENC_N_VN                                                                                            |          |
| 0x16 h    | Mask           |                                                                                                      | Name                                                                                                 |                                                                                                      | Type                                                                                                 |          |
| 0x16 h    | 0x0000FFFF h   |                                                                                                      | AENC_VN                                                                                              |                                                                                                      | Signed                                                                                               |          |
| 0x16 h    | 0x0000FFFF h   | Min                                                                                                  | Max                                                                                                  | Default                                                                                              | Unit                                                                                                 |          |
| 0x16 h    | 0x0000FFFF h   | -32768                                                                                               | 32767                                                                                                | 0                                                                                                    |                                                                                                      |          |
| 0x16 h    | 0x0000FFFF h   | Register of scaled analog encoder value including signed added offset as input for the interpolator. | Register of scaled analog encoder value including signed added offset as input for the interpolator. | Register of scaled analog encoder value including signed added offset as input for the interpolator. | Register of scaled analog encoder value including signed added offset as input for the interpolator. |          |
| 0x16 h    | Mask           |                                                                                                      | Name                                                                                                 |                                                                                                      | Type                                                                                                 |          |
| 0x16 h    | 0xFFFF0000 h   |                                                                                                      | AENC_N                                                                                               |                                                                                                      | Signed                                                                                               |          |
| 0x16 h    | 0xFFFF0000 h   | Min                                                                                                  | Max                                                                                                  | Default                                                                                              | Unit                                                                                                 |          |
| 0x16 h    | 0xFFFF0000 h   | -32768                                                                                               | 32767                                                                                                | 0                                                                                                    |                                                                                                      |          |

<!-- image -->

| Address   | Registername   | Registername                                                | Registername                                                | Registername                                                | Registername                                                | Access   |
|-----------|----------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|----------|
| 0x17 h    | PWM_POLARITIES | PWM_POLARITIES                                              | PWM_POLARITIES                                              | PWM_POLARITIES                                              | PWM_POLARITIES                                              | RW       |
|           | Mask           | Name                                                        | Name                                                        | Name                                                        | Type                                                        |          |
|           | 0x00000001 h   | PWM_POLARITIES[0]                                           | PWM_POLARITIES[0]                                           | PWM_POLARITIES[0]                                           | Bool                                                        |          |
|           | 0x00000001 h   | Min                                                         | Max                                                         | Default                                                     | Unit                                                        |          |
|           | 0x00000001 h   | 0                                                           | 1                                                           | 0                                                           |                                                             |          |
|           | 0x00000001 h   | polarity of Low Side (LS) gate control signal 0: off 1: on  | polarity of Low Side (LS) gate control signal 0: off 1: on  | polarity of Low Side (LS) gate control signal 0: off 1: on  | polarity of Low Side (LS) gate control signal 0: off 1: on  |          |
|           | Mask           | Name                                                        | Name                                                        | Name                                                        | Type                                                        |          |
|           | 0x00000002 h   | PWM_POLARITIES[1]                                           | PWM_POLARITIES[1]                                           | PWM_POLARITIES[1]                                           | Bool                                                        |          |
|           | 0x00000002 h   | Min                                                         | Max                                                         | Default                                                     | Unit                                                        |          |
|           | 0x00000002 h   | 0                                                           | 1                                                           | 0                                                           |                                                             |          |
|           | 0x00000002 h   | polarity of High Side (HS) gate control signal 0: off 1: on | polarity of High Side (HS) gate control signal 0: off 1: on | polarity of High Side (HS) gate control signal 0: off 1: on | polarity of High Side (HS) gate control signal 0: off 1: on |          |
|           | Mask           | Name                                                        | Name                                                        | Name                                                        | Type                                                        |          |
|           | 0x00000004 h   | PWM_POLARITIES[2]                                           | PWM_POLARITIES[2]                                           | PWM_POLARITIES[2]                                           | Bool                                                        |          |
|           | 0x00000004 h   | Min                                                         | Max                                                         | Default                                                     | Unit                                                        |          |
|           | 0x00000004 h   | 0 pulse AB 0: off                                           | 1                                                           | 0                                                           |                                                             |          |
|           | 0x00000004 h   | polarity 1: on                                              | polarity 1: on                                              | polarity 1: on                                              | polarity 1: on                                              |          |
|           | Mask           | Name                                                        | Name                                                        | Name                                                        | Type                                                        |          |
|           | 0x00000008 h   | PWM_POLARITIES[3]                                           | PWM_POLARITIES[3]                                           | PWM_POLARITIES[3]                                           | Bool                                                        |          |
|           | 0x00000008 h   | Min                                                         | Max                                                         | Default                                                     | Unit                                                        |          |
|           | 0x00000008 h   | 0 pulse B 0: off 1: on                                      | 1                                                           | 0                                                           |                                                             |          |
|           | 0x00000008 h   | polarity                                                    | polarity                                                    | polarity                                                    | polarity                                                    |          |
|           | Mask           | Name                                                        | Name                                                        | Name                                                        | Type                                                        |          |
|           | 0x00000010 h   | PWM_POLARITIES[4]                                           | PWM_POLARITIES[4]                                           | PWM_POLARITIES[4]                                           | Bool                                                        |          |
|           |                | Min                                                         | Max                                                         | Default                                                     | Unit                                                        |          |
|           |                | 0                                                           | 1                                                           | 0                                                           |                                                             |          |
|           |                | pulse C center polarity 0: off                              | pulse C center polarity 0: off                              | pulse C center polarity 0: off                              | pulse C center polarity 0: off                              |          |

<!-- image -->

| Address   | Registername    | Registername                                                                       | Registername                                                                       | Registername                                                                       | Registername                                                                       | Access   |
|-----------|-----------------|------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|----------|
| Address   |                 | 1: on                                                                              | 1: on                                                                              | 1: on                                                                              | 1: on                                                                              |          |
| Address   | Mask            | Name                                                                               | Name                                                                               | Name                                                                               | Type                                                                               |          |
| Address   | 0x00000020 h    | PWM_POLARITIES[5]                                                                  | PWM_POLARITIES[5]                                                                  | PWM_POLARITIES[5]                                                                  | Bool                                                                               |          |
| Address   | 0x00000020 h    | Min                                                                                | Max                                                                                | Default                                                                            | Unit                                                                               |          |
| Address   | 0x00000020 h    | 0 pulse A polarity 0: off 1: on                                                    | 1                                                                                  | 0                                                                                  |                                                                                    |          |
| Address   | Mask            | Name                                                                               | Name                                                                               | Name                                                                               | Type                                                                               |          |
| Address   | 0x00000040 h    | PWM_POLARITIES[6]                                                                  | PWM_POLARITIES[6]                                                                  | PWM_POLARITIES[6]                                                                  | Bool                                                                               |          |
| Address   | 0x00000040 h    | Min                                                                                | Max                                                                                | Default                                                                            | Unit                                                                               |          |
| Address   | 0x00000040 h    | 0 pulse zero Z pulse 0: off                                                        | 1 polarity                                                                         | 0                                                                                  |                                                                                    |          |
| Address   | Mask            |                                                                                    |                                                                                    |                                                                                    | Type                                                                               |          |
| Address   |                 | Name                                                                               | Name                                                                               | Name                                                                               | Bool                                                                               |          |
| Address   | 0x00000080 h    | PWM_POLARITIES[7] Min                                                              | Max                                                                                | Default                                                                            | Unit                                                                               |          |
| Address   | 0x00000080 h    | 0                                                                                  | 1                                                                                  |                                                                                    |                                                                                    |          |
| Address   |                 | 0 over current signal polarity 0: off 1: on                                        | 0 over current signal polarity 0: off 1: on                                        | 0 over current signal polarity 0: off 1: on                                        |                                                                                    | RW       |
| 0x18 h    | PWM_MAXCNT      | PWM_MAXCNT                                                                         | PWM_MAXCNT                                                                         | PWM_MAXCNT                                                                         | PWM_MAXCNT                                                                         |          |
| 0x18 h    | Mask            | Name                                                                               | Name                                                                               | Name                                                                               | Type                                                                               |          |
| 0x18 h    | 0x0000FFFF h    | PWM_MAXCNT                                                                         | PWM_MAXCNT                                                                         | PWM_MAXCNT                                                                         | Unsigned                                                                           |          |
| 0x18 h    |                 | Min                                                                                | Max                                                                                | Default                                                                            | Unit                                                                               |          |
| 0x18 h    |                 | 0 65535 0 PWM maximum (count-1), PWM frequency is fPWM[Hz] = 100MHz/(PWM_MAXCNT+1) | 0 65535 0 PWM maximum (count-1), PWM frequency is fPWM[Hz] = 100MHz/(PWM_MAXCNT+1) | 0 65535 0 PWM maximum (count-1), PWM frequency is fPWM[Hz] = 100MHz/(PWM_MAXCNT+1) | 0 65535 0 PWM maximum (count-1), PWM frequency is fPWM[Hz] = 100MHz/(PWM_MAXCNT+1) |          |
| 0x19 h    | PWM_BBM_H_BBM_L | PWM_BBM_H_BBM_L                                                                    | PWM_BBM_H_BBM_L                                                                    | PWM_BBM_H_BBM_L                                                                    | PWM_BBM_H_BBM_L                                                                    | RW       |
|           | Mask            | Name                                                                               | Name                                                                               | Name                                                                               | Type                                                                               |          |
|           | 0x000000FF h    | PWM_BBM_L                                                                          | PWM_BBM_L                                                                          | PWM_BBM_L                                                                          | Unsigned                                                                           |          |
|           |                 | Min                                                                                | Max                                                                                | Default                                                                            | Unit                                                                               |          |

<!-- image -->

| Address   | Registername            | Registername                                                                                                                                                                                                                                                                                                                                                                              | Registername                                                                                                                                                                                                                                                                                                                                                                              | Registername                                                                                                                                                                                                                                                                                                                                                                              | Registername                                                                                                                                                                                                                                                                                                                                                                              | Access   |
|-----------|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
|           |                         | Break Before Make time tBBM_L[10ns] for low side MOS-FET gate control                                                                                                                                                                                                                                                                                                                     | Break Before Make time tBBM_L[10ns] for low side MOS-FET gate control                                                                                                                                                                                                                                                                                                                     | Break Before Make time tBBM_L[10ns] for low side MOS-FET gate control                                                                                                                                                                                                                                                                                                                     | Break Before Make time tBBM_L[10ns] for low side MOS-FET gate control                                                                                                                                                                                                                                                                                                                     |          |
|           | Mask                    | Name                                                                                                                                                                                                                                                                                                                                                                                      | Name                                                                                                                                                                                                                                                                                                                                                                                      | Name                                                                                                                                                                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                                                                                                                                                                      |          |
|           | 0x0000FF00 h            | PWM_BBM_H                                                                                                                                                                                                                                                                                                                                                                                 | PWM_BBM_H                                                                                                                                                                                                                                                                                                                                                                                 | PWM_BBM_H                                                                                                                                                                                                                                                                                                                                                                                 | Unsigned                                                                                                                                                                                                                                                                                                                                                                                  |          |
|           |                         | Min                                                                                                                                                                                                                                                                                                                                                                                       | Max                                                                                                                                                                                                                                                                                                                                                                                       | Default                                                                                                                                                                                                                                                                                                                                                                                   | Unit                                                                                                                                                                                                                                                                                                                                                                                      |          |
|           |                         | 0                                                                                                                                                                                                                                                                                                                                                                                         | 255                                                                                                                                                                                                                                                                                                                                                                                       | 0                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                           |          |
|           |                         | Break Before Make time tBBM_H[10ns] for high side MOS-FET gate control                                                                                                                                                                                                                                                                                                                    | Break Before Make time tBBM_H[10ns] for high side MOS-FET gate control                                                                                                                                                                                                                                                                                                                    | Break Before Make time tBBM_H[10ns] for high side MOS-FET gate control                                                                                                                                                                                                                                                                                                                    | Break Before Make time tBBM_H[10ns] for high side MOS-FET gate control                                                                                                                                                                                                                                                                                                                    | RW       |
| 0x1A h    | PWM_SV_CHOP             | PWM_SV_CHOP                                                                                                                                                                                                                                                                                                                                                                               | PWM_SV_CHOP                                                                                                                                                                                                                                                                                                                                                                               | PWM_SV_CHOP                                                                                                                                                                                                                                                                                                                                                                               | PWM_SV_CHOP                                                                                                                                                                                                                                                                                                                                                                               |          |
|           | Mask                    | Name                                                                                                                                                                                                                                                                                                                                                                                      | Name                                                                                                                                                                                                                                                                                                                                                                                      | Name                                                                                                                                                                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                                                                                                                                                                      |          |
|           | 0x000000FF h            | PWM_CHOP                                                                                                                                                                                                                                                                                                                                                                                  | PWM_CHOP                                                                                                                                                                                                                                                                                                                                                                                  | PWM_CHOP                                                                                                                                                                                                                                                                                                                                                                                  | Choice                                                                                                                                                                                                                                                                                                                                                                                    |          |
|           |                         | Min                                                                                                                                                                                                                                                                                                                                                                                       | Max                                                                                                                                                                                                                                                                                                                                                                                       | Default                                                                                                                                                                                                                                                                                                                                                                                   | Unit                                                                                                                                                                                                                                                                                                                                                                                      |          |
|           |                         | 0                                                                                                                                                                                                                                                                                                                                                                                         | 7                                                                                                                                                                                                                                                                                                                                                                                         | 0                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                           |          |
|           |                         | PWMchopper mode, de/uniFB01ning how to chopper 0: PWM=OFF, free running 1: PWM=OFF, Low Side (LS) permanent = ON 2: PWM=OFF, High Side (HS) permanent = ON 3: PWMoff, free running 4: PWMoff, free running 5: PWM low side (LS) chopper only, high side (HS) off; not suitable for FOC 6: PWM high side (HS) chopper only, low side (LS) off; not suitable for FOC 7: centered PWMfor FOC | PWMchopper mode, de/uniFB01ning how to chopper 0: PWM=OFF, free running 1: PWM=OFF, Low Side (LS) permanent = ON 2: PWM=OFF, High Side (HS) permanent = ON 3: PWMoff, free running 4: PWMoff, free running 5: PWM low side (LS) chopper only, high side (HS) off; not suitable for FOC 6: PWM high side (HS) chopper only, low side (LS) off; not suitable for FOC 7: centered PWMfor FOC | PWMchopper mode, de/uniFB01ning how to chopper 0: PWM=OFF, free running 1: PWM=OFF, Low Side (LS) permanent = ON 2: PWM=OFF, High Side (HS) permanent = ON 3: PWMoff, free running 4: PWMoff, free running 5: PWM low side (LS) chopper only, high side (HS) off; not suitable for FOC 6: PWM high side (HS) chopper only, low side (LS) off; not suitable for FOC 7: centered PWMfor FOC | PWMchopper mode, de/uniFB01ning how to chopper 0: PWM=OFF, free running 1: PWM=OFF, Low Side (LS) permanent = ON 2: PWM=OFF, High Side (HS) permanent = ON 3: PWMoff, free running 4: PWMoff, free running 5: PWM low side (LS) chopper only, high side (HS) off; not suitable for FOC 6: PWM high side (HS) chopper only, low side (LS) off; not suitable for FOC 7: centered PWMfor FOC |          |
|           | Mask 0x00000100 h       | Min                                                                                                                                                                                                                                                                                                                                                                                       | Name PWM_SV Max VectorPWM                                                                                                                                                                                                                                                                                                                                                                 | Default                                                                                                                                                                                                                                                                                                                                                                                   | Type Bool Unit                                                                                                                                                                                                                                                                                                                                                                            | RW       |
|           | Mask                    |                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                                                                                                                                                      |          |
|           |                         | 0 use Space 0: Space Vector 1: Space Vector                                                                                                                                                                                                                                                                                                                                               | 1 PWMdisabled PWMenabled                                                                                                                                                                                                                                                                                                                                                                  | 0                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                           |          |
| 0x1B h    | MOTOR_TYPE_N_POLE_PAIRS | MOTOR_TYPE_N_POLE_PAIRS                                                                                                                                                                                                                                                                                                                                                                   | MOTOR_TYPE_N_POLE_PAIRS                                                                                                                                                                                                                                                                                                                                                                   | MOTOR_TYPE_N_POLE_PAIRS                                                                                                                                                                                                                                                                                                                                                                   | MOTOR_TYPE_N_POLE_PAIRS                                                                                                                                                                                                                                                                                                                                                                   |          |
|           |                         | Name                                                                                                                                                                                                                                                                                                                                                                                      | Name                                                                                                                                                                                                                                                                                                                                                                                      | Name                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                           |          |
|           | 0x0000FFFF h            | N_POLE_PAIRS                                                                                                                                                                                                                                                                                                                                                                              | N_POLE_PAIRS                                                                                                                                                                                                                                                                                                                                                                              | N_POLE_PAIRS                                                                                                                                                                                                                                                                                                                                                                              | Unsigned                                                                                                                                                                                                                                                                                                                                                                                  |          |
|           |                         | Min                                                                                                                                                                                                                                                                                                                                                                                       | Max                                                                                                                                                                                                                                                                                                                                                                                       | Default                                                                                                                                                                                                                                                                                                                                                                                   | Unit                                                                                                                                                                                                                                                                                                                                                                                      |          |
|           |                         | 1                                                                                                                                                                                                                                                                                                                                                                                         | 65535                                                                                                                                                                                                                                                                                                                                                                                     | 1                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                           |          |

<!-- image -->

| Address   | Registername   | Registername                                                                      | Registername                                                                      | Registername                                                                      | Registername                                                                      | Access   | Access   |
|-----------|----------------|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|----------|----------|
|           |                | Number n of pole pairs of the motor for calcualtion phi_e = phi_m / N_POLE_PAIRS. | Number n of pole pairs of the motor for calcualtion phi_e = phi_m / N_POLE_PAIRS. | Number n of pole pairs of the motor for calcualtion phi_e = phi_m / N_POLE_PAIRS. | Number n of pole pairs of the motor for calcualtion phi_e = phi_m / N_POLE_PAIRS. |          |          |
|           | Mask           | Name                                                                              | Name                                                                              | Name                                                                              | Type                                                                              |          |          |
|           | 0x00FF0000 h   | MOTOR_TYPE                                                                        | MOTOR_TYPE                                                                        | MOTOR_TYPE                                                                        | Choice                                                                            |          |          |
|           |                | Min                                                                               | Max                                                                               | Default                                                                           | Unit                                                                              |          |          |
|           |                | 0 0: 1:                                                                           | 3                                                                                 | 0                                                                                 |                                                                                   |          |          |
|           |                | FOC2 FOC3                                                                         |                                                                                   |                                                                                   |                                                                                   |          |          |
|           |                | 2: reserved                                                                       |                                                                                   |                                                                                   |                                                                                   |          |          |
|           |                | 3: reserved                                                                       |                                                                                   |                                                                                   |                                                                                   |          |          |
| 0x1C h    |                |                                                                                   | Name                                                                              |                                                                                   |                                                                                   | RW       | RW       |
|           | Mask           |                                                                                   |                                                                                   |                                                                                   | Type                                                                              |          |          |
|           | 0x0000FFFF h   |                                                                                   | PHI_E_EXT                                                                         |                                                                                   | Signed                                                                            |          |          |
|           |                | Min                                                                               | Max                                                                               | Default                                                                           | Unit                                                                              |          |          |
|           |                | -32768                                                                            | 32767                                                                             | 0                                                                                 |                                                                                   |          |          |
|           |                | Electrical                                                                        | phi_e_ext for                                                                     | external writing                                                                  | into this register.                                                               |          |          |
|           |                | angle                                                                             |                                                                                   |                                                                                   |                                                                                   | RW       | RW       |
| 0x1D h    |                |                                                                                   |                                                                                   |                                                                                   |                                                                                   |          |          |
|           | Mask           |                                                                                   | PHI_M_EXT                                                                         |                                                                                   | Type                                                                              |          |          |
|           |                |                                                                                   | Name                                                                              |                                                                                   |                                                                                   |          |          |
|           | 0x0000FFFF     |                                                                                   |                                                                                   |                                                                                   |                                                                                   |          |          |
|           | h              |                                                                                   |                                                                                   |                                                                                   |                                                                                   |          |          |
|           |                |                                                                                   | PHI_M_EXT                                                                         |                                                                                   |                                                                                   | RW       | RW       |
|           |                | Min                                                                               | Max                                                                               | Default for external                                                              | Unit                                                                              |          |          |
|           | Mask           |                                                                                   |                                                                                   |                                                                                   |                                                                                   |          |          |
|           |                |                                                                                   | POSITION_EXT                                                                      |                                                                                   |                                                                                   |          |          |
|           |                |                                                                                   | Name                                                                              |                                                                                   | Type                                                                              |          |          |
|           | 0xFFFFFFFF h   |                                                                                   | POSITION_EXT                                                                      |                                                                                   |                                                                                   |          |          |
|           |                | Min                                                                               | Max                                                                               |                                                                                   | Signed                                                                            |          |          |
|           |                |                                                                                   |                                                                                   | Default                                                                           | Unit                                                                              |          |          |
|           |                |                                                                                   |                                                                                   | 0                                                                                 | writing into this                                                                 |          |          |
|           |                | -2147483648                                                                       | 2147483647                                                                        | position for external                                                             |                                                                                   | RW       | RW       |
|           |                |                                                                                   | OPENLOOP_MODE                                                                     |                                                                                   |                                                                                   |          |          |
| h         | Mask           |                                                                                   | Name                                                                              |                                                                                   | Type                                                                              |          |          |
|           | 0x00001000     |                                                                                   |                                                                                   |                                                                                   |                                                                                   |          |          |
|           |                |                                                                                   | OPENLOOP_PHI_DIRECTION                                                            |                                                                                   | Bool                                                                              |          |          |
|           |                | Min                                                                               |                                                                                   |                                                                                   | Unit                                                                              |          |          |
|           | h              |                                                                                   | Max                                                                               | Default                                                                           |                                                                                   |          |          |
|           |                | 0                                                                                 | 1                                                                                 |                                                                                   |                                                                                   |          |          |
|           |                |                                                                                   |                                                                                   | 0                                                                                 |                                                                                   |          |          |
|           |                |                                                                                   | direction.                                                                        |                                                                                   |                                                                                   |          |          |
|           |                | Open                                                                              |                                                                                   |                                                                                   |                                                                                   |          |          |
|           |                | loop                                                                              |                                                                                   |                                                                                   |                                                                                   |          |          |

<!-- image -->

| Address   | Registername                   | Registername                                                                                                | Registername                                                                                                | Registername                                                                                                | Registername                                                                                                | Access   | Access   |
|-----------|--------------------------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|----------|----------|
|           |                                | 0: positive 1: negative                                                                                     | 0: positive 1: negative                                                                                     | 0: positive 1: negative                                                                                     | 0: positive 1: negative                                                                                     |          |          |
| 0x20 h    | OPENLOOP_ACCELERATION          | OPENLOOP_ACCELERATION                                                                                       | OPENLOOP_ACCELERATION                                                                                       | OPENLOOP_ACCELERATION                                                                                       | OPENLOOP_ACCELERATION                                                                                       | RW       | RW       |
|           | Mask                           | Name                                                                                                        | Name                                                                                                        | Name                                                                                                        | Type                                                                                                        |          |          |
|           | 0xFFFFFFFF h                   | OPENLOOP_ACCELERATION                                                                                       | OPENLOOP_ACCELERATION                                                                                       | OPENLOOP_ACCELERATION                                                                                       | Unsigned                                                                                                    |          |          |
|           |                                | Min                                                                                                         | Max                                                                                                         | Default                                                                                                     | Unit                                                                                                        |          |          |
|           |                                | 0                                                                                                           |                                                                                                             |                                                                                                             |                                                                                                             |          |          |
|           |                                |                                                                                                             | 4294967295                                                                                                  | 0                                                                                                           |                                                                                                             |          |          |
|           | Acceleration of open loop phi. | Acceleration of open loop phi.                                                                              | Acceleration of open loop phi.                                                                              | Acceleration of open loop phi.                                                                              | Acceleration of open loop phi.                                                                              | RW       | RW       |
| 0x21 h    | OPENLOOP_VELOCITY_TARGET       | OPENLOOP_VELOCITY_TARGET                                                                                    | OPENLOOP_VELOCITY_TARGET                                                                                    | OPENLOOP_VELOCITY_TARGET                                                                                    | OPENLOOP_VELOCITY_TARGET                                                                                    |          |          |
|           | Mask                           | Name                                                                                                        | Name                                                                                                        | Name                                                                                                        | Type                                                                                                        |          |          |
|           | 0xFFFFFFFF h                   | OPENLOOP_VELOCITY_TARGET                                                                                    | OPENLOOP_VELOCITY_TARGET                                                                                    | OPENLOOP_VELOCITY_TARGET                                                                                    | Signed                                                                                                      |          |          |
|           |                                | Min                                                                                                         | Max                                                                                                         | Default                                                                                                     | Unit                                                                                                        |          |          |
|           |                                | -2147483648                                                                                                 | 2147483647                                                                                                  | 0                                                                                                           |                                                                                                             |          |          |
|           |                                | Target velocity of open loop phi.                                                                           | Target velocity of open loop phi.                                                                           | Target velocity of open loop phi.                                                                           | Target velocity of open loop phi.                                                                           |          |          |
| 0x22 h    | OPENLOOP_VELOCITY_ACTUAL       | OPENLOOP_VELOCITY_ACTUAL                                                                                    | OPENLOOP_VELOCITY_ACTUAL                                                                                    | OPENLOOP_VELOCITY_ACTUAL                                                                                    | OPENLOOP_VELOCITY_ACTUAL                                                                                    | RW       | RW       |
|           | Mask                           | Name                                                                                                        | Name                                                                                                        | Name                                                                                                        | Type                                                                                                        |          |          |
|           | 0xFFFFFFFF h                   | OPENLOOP_VELOCITY_ACTUAL                                                                                    | OPENLOOP_VELOCITY_ACTUAL                                                                                    | OPENLOOP_VELOCITY_ACTUAL                                                                                    | Signed                                                                                                      |          |          |
|           |                                | Min                                                                                                         | Max                                                                                                         | Default                                                                                                     | Unit                                                                                                        |          |          |
|           |                                | -2147483648                                                                                                 | 2147483647                                                                                                  | 0                                                                                                           |                                                                                                             |          |          |
|           |                                | Actual velocity of open loop generator.                                                                     | Actual velocity of open loop generator.                                                                     | Actual velocity of open loop generator.                                                                     | Actual velocity of open loop generator.                                                                     |          |          |
| 0x23      | OPENLOOP_PHI                   | OPENLOOP_PHI                                                                                                | OPENLOOP_PHI                                                                                                | OPENLOOP_PHI                                                                                                | OPENLOOP_PHI                                                                                                |          |          |
| h         | Mask                           | Name                                                                                                        | Name                                                                                                        | Name                                                                                                        | Type                                                                                                        |          |          |
|           | 0x0000FFFF h                   | OPENLOOP_PHI                                                                                                | OPENLOOP_PHI                                                                                                | OPENLOOP_PHI                                                                                                | Signed                                                                                                      |          |          |
|           |                                | Min                                                                                                         | Max                                                                                                         | Default                                                                                                     | Unit                                                                                                        |          |          |
|           |                                | -32768                                                                                                      | 32767                                                                                                       | 0                                                                                                           |                                                                                                             |          |          |
|           |                                | Angle phi open loop (either mapped to electrical angel phi_e or mechanical angle phi_m).                    | Angle phi open loop (either mapped to electrical angel phi_e or mechanical angle phi_m).                    | Angle phi open loop (either mapped to electrical angel phi_e or mechanical angle phi_m).                    | Angle phi open loop (either mapped to electrical angel phi_e or mechanical angle phi_m).                    |          |          |
| 0x24 h    | UQ_UD_EXT                      | UQ_UD_EXT                                                                                                   | UQ_UD_EXT                                                                                                   | UQ_UD_EXT                                                                                                   | UQ_UD_EXT                                                                                                   | RW       | RW       |
|           | Mask                           |                                                                                                             |                                                                                                             |                                                                                                             |                                                                                                             |          |          |
|           |                                | Name                                                                                                        | Name                                                                                                        | Name                                                                                                        | Type                                                                                                        |          |          |
|           | 0x0000FFFF h                   | UD_EXT                                                                                                      | UD_EXT                                                                                                      | UD_EXT                                                                                                      | Signed                                                                                                      |          |          |
|           |                                | Min                                                                                                         | Max                                                                                                         | Default                                                                                                     | Unit                                                                                                        |          |          |
|           |                                | -32768                                                                                                      | 32767                                                                                                       | 0                                                                                                           |                                                                                                             |          |          |
|           |                                | External writable parameter for open loop voltage control mode, usefull during system setup, U_D component. | External writable parameter for open loop voltage control mode, usefull during system setup, U_D component. | External writable parameter for open loop voltage control mode, usefull during system setup, U_D component. | External writable parameter for open loop voltage control mode, usefull during system setup, U_D component. |          |          |
|           | Mask                           | Name Type                                                                                                   | Name Type                                                                                                   | Name Type                                                                                                   | Name Type                                                                                                   |          |          |

<!-- image -->

| Registername     |                                                                                                             |          |               | Access    |
|------------------|-------------------------------------------------------------------------------------------------------------|----------|---------------|-----------|
| 0xFFFF0000 h     | UQ_EXT                                                                                                      |          |               | Signed    |
|                  | Min                                                                                                         | Max      | Default       | Unit      |
|                  | -32768                                                                                                      | 32767    | 0             |           |
|                  | External writable parameter for open loop voltage control mode, usefull during system setup, U_Q component. |          |               |           |
| ABN_DECODER_MODE |                                                                                                             |          |               | RW        |
| Mask             | Name                                                                                                        |          |               | Type      |
| 0x00000001 h     | apol                                                                                                        |          |               | Bool      |
|                  | Min                                                                                                         | Max      | Default       | Unit      |
|                  | 0                                                                                                           | 1        | 0             |           |
| Mask             |                                                                                                             |          |               |           |
|                  | Name                                                                                                        |          |               | Type      |
| 0x00000002 h     | bpol                                                                                                        |          |               | Bool      |
|                  | Min                                                                                                         | Max      | Default       | Unit      |
| B                | 0 Polarity of 0: off 1: on                                                                                  | 1 pulse. | 0             |           |
|                  | Name                                                                                                        |          |               |           |
| Mask             |                                                                                                             |          |               |           |
| 0x00000004       |                                                                                                             |          |               | Type Bool |
| Min              | Max                                                                                                         |          | Default       | Unit      |
| N                | 0 Polarity of 0: off 1: on                                                                                  | 1 pulse. | 0             |           |
|                  | Name                                                                                                        |          |               | Type      |
| Mask             |                                                                                                             |          |               | Bool      |
| 0x00000008 h     | Npulse Name                                                                                                 |          | with Npulse = |           |
| Mask             | and A and B                                                                                                 |          |               |           |
|                  |                                                                                                             |          |               | Type      |
| 1:               |                                                                                                             |          |               | = N       |

<!-- image -->

| Address   | Registername                   | Registername                                                                                     | Registername                                                                                     | Registername                                                                                     | Registername                                                                                     | Access   |
|-----------|--------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|----------|
| Address   | 0x00000100 h                   | cln                                                                                              | cln                                                                                              | cln                                                                                              | Bool                                                                                             |          |
| Address   | 0x00000100 h                   | Min                                                                                              | Max                                                                                              | Default                                                                                          | Unit                                                                                             |          |
| Address   | 0x00000100 h                   | 0                                                                                                | 1                                                                                                | 0                                                                                                |                                                                                                  |          |
| Address   | 0x00000100 h                   | Clear writes ABN_DECODER_COUNT_N into decoder count at Npulse. 0: off 1: on                      | Clear writes ABN_DECODER_COUNT_N into decoder count at Npulse. 0: off 1: on                      | Clear writes ABN_DECODER_COUNT_N into decoder count at Npulse. 0: off 1: on                      | Clear writes ABN_DECODER_COUNT_N into decoder count at Npulse. 0: off 1: on                      |          |
| Address   | Mask                           | Name                                                                                             |                                                                                                  |                                                                                                  | Type                                                                                             |          |
| Address   | 0x00001000 h                   |                                                                                                  | direction                                                                                        |                                                                                                  | Bool                                                                                             |          |
| Address   | 0x00001000 h                   | Min                                                                                              | Max                                                                                              | Default                                                                                          | Unit                                                                                             |          |
| Address   | 0x00001000 h                   | 0 Decoder 0:                                                                                     | 1                                                                                                | 0                                                                                                |                                                                                                  |          |
| Address   | 0x00001000 h                   | count direction. positive                                                                        | count direction. positive                                                                        | count direction. positive                                                                        | count direction. positive                                                                        |          |
| Address   | 0x00001000 h                   | negative                                                                                         | negative                                                                                         | negative                                                                                         | negative                                                                                         |          |
| 0x26 h    | ABN_DECODER_PPR                | ABN_DECODER_PPR                                                                                  | ABN_DECODER_PPR                                                                                  | ABN_DECODER_PPR                                                                                  | ABN_DECODER_PPR                                                                                  | RW       |
| 0x26 h    | Mask                           | Name                                                                                             | Name                                                                                             | Name                                                                                             | Type                                                                                             |          |
| 0x26 h    | 0x00FFFFFF h                   | ABN_DECODER_PPR                                                                                  | ABN_DECODER_PPR                                                                                  | ABN_DECODER_PPR                                                                                  | Unsigned                                                                                         |          |
| 0x26 h    | 0x00FFFFFF h                   | Min                                                                                              | Max                                                                                              | Default                                                                                          | Unit                                                                                             |          |
| 0x26 h    | 0x00FFFFFF h                   | 0                                                                                                | 16777215                                                                                         | 0                                                                                                |                                                                                                  |          |
| 0x26 h    | 0x00FFFFFF h                   | Decoder pules per mechanical revolution.                                                         | Decoder pules per mechanical revolution.                                                         | Decoder pules per mechanical revolution.                                                         | Decoder pules per mechanical revolution.                                                         |          |
| 0x27 h    | ABN_DECODER_COUNT              | ABN_DECODER_COUNT                                                                                | ABN_DECODER_COUNT                                                                                | ABN_DECODER_COUNT                                                                                | ABN_DECODER_COUNT                                                                                | RW       |
| 0x27 h    | Mask                           | Name                                                                                             | Name                                                                                             | Name                                                                                             | Type                                                                                             |          |
| 0x27 h    | 0x00FFFFFF h                   | ABN_DECODER_COUNT                                                                                | ABN_DECODER_COUNT                                                                                | ABN_DECODER_COUNT                                                                                | Unsigned                                                                                         |          |
| 0x27 h    | 0x00FFFFFF h                   | Min                                                                                              | Max                                                                                              | Default                                                                                          | Unit                                                                                             |          |
| 0x27 h    | 0x00FFFFFF h                   | 0                                                                                                | 16777215                                                                                         | 0                                                                                                |                                                                                                  |          |
| 0x27 h    | 0x00FFFFFF h                   | Raw decoder count; the digital decoder engine counts modulo (decoder_ppr).                       | Raw decoder count; the digital decoder engine counts modulo (decoder_ppr).                       | Raw decoder count; the digital decoder engine counts modulo (decoder_ppr).                       | Raw decoder count; the digital decoder engine counts modulo (decoder_ppr).                       |          |
| 0x28 h    | ABN_DECODER_COUNT_N            | ABN_DECODER_COUNT_N                                                                              | ABN_DECODER_COUNT_N                                                                              | ABN_DECODER_COUNT_N                                                                              | ABN_DECODER_COUNT_N                                                                              | RW       |
| 0x28 h    | Mask                           | Name                                                                                             | Name                                                                                             | Name                                                                                             | Type                                                                                             |          |
| 0x28 h    | 0x00FFFFFF h                   | ABN_DECODER_COUNT_N                                                                              | ABN_DECODER_COUNT_N                                                                              | ABN_DECODER_COUNT_N                                                                              | Unsigned                                                                                         |          |
| 0x28 h    | 0x00FFFFFF h                   | Min                                                                                              | Max                                                                                              | Default                                                                                          | Unit                                                                                             |          |
| 0x28 h    | 0x00FFFFFF h                   | 0                                                                                                | 16777215                                                                                         | 0                                                                                                |                                                                                                  |          |
| 0x28 h    | 0x00FFFFFF h                   | Decoder count latched on N pulse, when N pulse clears de- coder_count also decoder_count_n is 0. | Decoder count latched on N pulse, when N pulse clears de- coder_count also decoder_count_n is 0. | Decoder count latched on N pulse, when N pulse clears de- coder_count also decoder_count_n is 0. | Decoder count latched on N pulse, when N pulse clears de- coder_count also decoder_count_n is 0. | RW       |
| 0x29 h    | ABN_DECODER_PHI_E_PHI_M_OFFSET | ABN_DECODER_PHI_E_PHI_M_OFFSET                                                                   | ABN_DECODER_PHI_E_PHI_M_OFFSET                                                                   | ABN_DECODER_PHI_E_PHI_M_OFFSET                                                                   | ABN_DECODER_PHI_E_PHI_M_OFFSET                                                                   |          |
| 0x29 h    | Mask                           | Name                                                                                             | Name                                                                                             | Name                                                                                             | Type                                                                                             |          |

<!-- image -->

| Address   | Registername       |                                                                                             |                         |         |        | Access   |     |
|-----------|--------------------|---------------------------------------------------------------------------------------------|-------------------------|---------|--------|----------|-----|
|           | 0x0000FFFF h       | ABN_DECODER_PHI_M_OFFSET                                                                    |                         |         | Signed |          |     |
|           |                    | Min                                                                                         | Max                     | Default | Unit   |          |     |
|           |                    | -32768                                                                                      | 32767                   | 0       |        |          |     |
|           |                    | ABN_DECODER_PHI_M_OFFSET to shift (rotate) angle DE- CODER_PHI_M.                           |                         |         |        |          |     |
|           | Mask               | Name                                                                                        |                         |         | Type   |          |     |
|           | 0xFFFF0000 h       | ABN_DECODER_PHI_E_OFFSET                                                                    |                         |         | Signed |          |     |
|           |                    | Min                                                                                         | Max                     | Default | Unit   |          |     |
|           |                    | -32768                                                                                      | 32767                   | 0       |        |          |     |
|           |                    | ABN_DECODER_PHI_E_OFFSET to shift (rotate) angle DE- CODER_PHI_E.                           |                         |         |        | R        |     |
| 0x2A h    | Mask               | Name                                                                                        | ABN_DECODER_PHI_E_PHI_M |         | Type   |          |     |
|           |                    |                                                                                             |                         |         | Signed |          |     |
|           | 0x0000FFFF h Min   | ABN_DECODER_PHI_M                                                                           | Max                     | Default | Unit   |          |     |
|           |                    | -32768                                                                                      | 32767                   | 0       |        |          |     |
|           |                    | ABN_DECODER_PHI_M = ABN_DECODER_COUNT * 2ˆ 16 / ABN_DECODER_PPR + ABN_DECODER_PHI_M_OFFSET; |                         |         |        |          |     |
|           | Mask               | Name                                                                                        |                         |         | Type   |          |     |
|           | 0xFFFF0000 h       | ABN_DECODER_PHI_E                                                                           |                         |         | Signed |          |     |
|           |                    | Min                                                                                         | Max                     | Default | Unit   |          |     |
|           |                    | -32768                                                                                      | 32767                   |         |        |          |     |
|           |                    | ABN_DECODER_PHI_E = * N_POLE_PAIRS_) + ABN_DECODER_PHI_E_OFFSET                             |                         | 0       |        |          |     |
| 0x2C      | ABN_2_DECODER_MODE | (ABN_DECODER_PHI_M                                                                          |                         |         |        | RW       |     |
| h         | Mask               | Name                                                                                        |                         |         | Type   |          |     |
|           | 0x00000001 h       | apol                                                                                        |                         |         | Bool   |          |     |
|           |                    | Min                                                                                         | Max                     | Default | Unit   |          |     |
|           |                    | 0 Polarity                                                                                  | 1                       | 0       |        |          |     |
|           |                    | of A pulse. 0: off 1: on                                                                    |                         |         |        |          |     |
|           |                    | Name                                                                                        |                         |         | Type   |          |     |
|           | Mask               |                                                                                             |                         |         |        |          |     |
|           | 0x00000002 h       |                                                                                             |                         |         | Bool   |          |     |
|           |                    | bpol                                                                                        |                         |         |        |          |     |
|           | Min                | 0                                                                                           |                         | Default | Unit   |          |     |
|           |                    |                                                                                             | 1                       | 0       |        |          |     |
|           |                    |                                                                                             |                         |         |        |          | Max |

<!-- image -->

<!-- image -->

| Address   | Registername   | Registername                       | Registername                      | Registername                      | Registername                      | Access   | Access   | Access   |
|-----------|----------------|------------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|----------|----------|----------|
|           |                | Polarity of B pulse. 0: off 1: on  | Polarity of B pulse. 0: off 1: on | Polarity of B pulse. 0: off 1: on | Polarity of B pulse. 0: off 1: on |          |          |          |
|           | Mask           |                                    |                                   |                                   | Type                              |          |          |          |
|           |                | Name                               | Name                              | Name                              |                                   |          |          |          |
|           | 0x00000004 h   |                                    | npol                              |                                   | Bool                              |          |          |          |
|           |                | Min                                | Max                               | Default                           | Unit                              |          |          |          |
|           |                | 0                                  | 1                                 | 0                                 |                                   |          |          |          |
|           | Mask           | Name                               |                                   |                                   |                                   |          |          |          |
|           |                |                                    |                                   |                                   | Type                              |          |          |          |
|           |                | use_abn_as_n                       | use_abn_as_n                      | use_abn_as_n                      | Bool                              |          |          |          |
|           |                |                                    |                                   |                                   | Unit                              |          |          |          |
|           |                | and B                              | and B                             | and B                             |                                   |          |          |          |
|           | Mask           | 0 0: Ignore A = N, 1: Npulse       | 1 and B polarity                  | 0 with Npulse                     | 1 : Npulse                        |          |          |          |
|           |                |                                    |                                   |                                   | Type                              |          |          |          |
|           |                | Name                               |                                   |                                   |                                   |          |          |          |
|           | 0x00000100 h   |                                    | cln                               |                                   | Bool                              |          |          |          |
|           |                | Min                                | Max                               | Default                           | Unit                              |          |          |          |
|           |                | 0 1 Clear writes at Npulse.        |                                   | 0                                 | into decoder                      |          |          |          |
|           |                | ABN_2_DECODER_COUNT_N 0: off 1: on |                                   |                                   |                                   |          |          |          |
|           | Mask           |                                    | Name                              |                                   | Type                              |          |          |          |
|           | 0x00001000     |                                    |                                   |                                   |                                   |          |          |          |
|           |                | Min 0 Decoder count                | direction.                        | 0                                 |                                   |          |          |          |
|           |                | 0: positive                        |                                   |                                   |                                   |          |          |          |
|           |                | 1: negative ABN_2_DECODER_PPR      | 1: negative ABN_2_DECODER_PPR     | 1: negative ABN_2_DECODER_PPR     | 1: negative ABN_2_DECODER_PPR     | RW       | RW       | RW       |
| 0x2D h    | Mask           |                                    |                                   |                                   |                                   |          |          |          |
|           |                | Name                               | Name                              | Name                              | Type                              |          |          |          |
|           |                |                                    |                                   |                                   | Unsigned                          |          |          |          |
|           | 0x00FFFFFF     |                                    |                                   |                                   |                                   |          |          |          |
|           | h              |                                    |                                   |                                   |                                   |          |          |          |
|           |                | ABN_2_DECODER_PPR                  | ABN_2_DECODER_PPR                 | ABN_2_DECODER_PPR                 | ABN_2_DECODER_PPR                 |          |          |          |

<!-- image -->

| Address   | Registername               | Registername                                                                                                                                    | Registername                                                                                                                                    | Registername                                                                                                                                    | Registername                                                                                                                                    | Access   |
|-----------|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Address   |                            | Min                                                                                                                                             | Max                                                                                                                                             | Default                                                                                                                                         | Unit                                                                                                                                            |          |
| Address   |                            | 1                                                                                                                                               | 16777215                                                                                                                                        | 0                                                                                                                                               |                                                                                                                                                 |          |
| Address   |                            | Decoder_2 pules per mechanical revolution. This 2nd ABN encoder interface is for positioning or velocity control but NOT for motor commutation. | Decoder_2 pules per mechanical revolution. This 2nd ABN encoder interface is for positioning or velocity control but NOT for motor commutation. | Decoder_2 pules per mechanical revolution. This 2nd ABN encoder interface is for positioning or velocity control but NOT for motor commutation. | Decoder_2 pules per mechanical revolution. This 2nd ABN encoder interface is for positioning or velocity control but NOT for motor commutation. |          |
| 0x2E h    | ABN_2_DECODER_COUNT        | ABN_2_DECODER_COUNT                                                                                                                             | ABN_2_DECODER_COUNT                                                                                                                             | ABN_2_DECODER_COUNT                                                                                                                             | ABN_2_DECODER_COUNT                                                                                                                             | RW       |
| 0x2E h    | Mask                       | Name                                                                                                                                            | Name                                                                                                                                            | Name                                                                                                                                            | Type                                                                                                                                            | RW       |
| 0x2E h    | 0x00FFFFFF h               | ABN_2_DECODER_COUNT                                                                                                                             | ABN_2_DECODER_COUNT                                                                                                                             | ABN_2_DECODER_COUNT                                                                                                                             | Unsigned                                                                                                                                        | RW       |
| 0x2E h    | 0x00FFFFFF h               | Min                                                                                                                                             | Max                                                                                                                                             | Default                                                                                                                                         | Unit                                                                                                                                            | RW       |
| 0x2E h    | 0x00FFFFFF h               | 0                                                                                                                                               | 16777215                                                                                                                                        | 0                                                                                                                                               |                                                                                                                                                 | RW       |
| 0x2E h    |                            | Raw decoder_2 count; the digital decoder engine counts mod- ulo (decoder_2_ppr).                                                                | Raw decoder_2 count; the digital decoder engine counts mod- ulo (decoder_2_ppr).                                                                | Raw decoder_2 count; the digital decoder engine counts mod- ulo (decoder_2_ppr).                                                                | Raw decoder_2 count; the digital decoder engine counts mod- ulo (decoder_2_ppr).                                                                | RW       |
| 0x2F h    | ABN_2_DECODER_COUNT_N      | ABN_2_DECODER_COUNT_N                                                                                                                           | ABN_2_DECODER_COUNT_N                                                                                                                           | ABN_2_DECODER_COUNT_N                                                                                                                           | ABN_2_DECODER_COUNT_N                                                                                                                           |          |
| 0x2F h    | Mask                       | Name                                                                                                                                            | Name                                                                                                                                            | Name                                                                                                                                            | Type                                                                                                                                            |          |
| 0x2F h    | 0x00FFFFFF h               | ABN_2_DECODER_COUNT_N                                                                                                                           | ABN_2_DECODER_COUNT_N                                                                                                                           | ABN_2_DECODER_COUNT_N                                                                                                                           | Unsigned                                                                                                                                        |          |
| 0x2F h    | 0x00FFFFFF h               | Min                                                                                                                                             | Max                                                                                                                                             | Default                                                                                                                                         | Unit                                                                                                                                            |          |
| 0x2F h    | 0x00FFFFFF h               | 0                                                                                                                                               | 16777215                                                                                                                                        | 0                                                                                                                                               |                                                                                                                                                 |          |
| 0x2F h    | 0x00FFFFFF h               | Decoder_2 count latched on N pulse, when N pulse clears decoder_2_count also decoder_2_count_n is 0.                                            | Decoder_2 count latched on N pulse, when N pulse clears decoder_2_count also decoder_2_count_n is 0.                                            | Decoder_2 count latched on N pulse, when N pulse clears decoder_2_count also decoder_2_count_n is 0.                                            | Decoder_2 count latched on N pulse, when N pulse clears decoder_2_count also decoder_2_count_n is 0.                                            |          |
| 0x30 h    | ABN_2_DECODER_PHI_M_OFFSET | ABN_2_DECODER_PHI_M_OFFSET                                                                                                                      | ABN_2_DECODER_PHI_M_OFFSET                                                                                                                      | ABN_2_DECODER_PHI_M_OFFSET                                                                                                                      | ABN_2_DECODER_PHI_M_OFFSET                                                                                                                      | RW       |
| 0x30 h    | Mask                       | Name                                                                                                                                            | Name                                                                                                                                            | Name                                                                                                                                            | Type                                                                                                                                            | RW       |
| 0x30 h    | 0x0000FFFF h               | ABN_2_DECODER_PHI_M_OFFSET                                                                                                                      | ABN_2_DECODER_PHI_M_OFFSET                                                                                                                      | ABN_2_DECODER_PHI_M_OFFSET                                                                                                                      | Signed                                                                                                                                          | RW       |
| 0x30 h    |                            | Min                                                                                                                                             | Max                                                                                                                                             | Default                                                                                                                                         | Unit                                                                                                                                            | RW       |
| 0x30 h    |                            | -32768                                                                                                                                          | 32767                                                                                                                                           | 0                                                                                                                                               |                                                                                                                                                 | RW       |
| 0x30 h    |                            | ABN_2_DECODER_PHI_M_OFFSET to shift (rotate) angle DE- CODER_2_PHI_M.                                                                           | ABN_2_DECODER_PHI_M_OFFSET to shift (rotate) angle DE- CODER_2_PHI_M.                                                                           | ABN_2_DECODER_PHI_M_OFFSET to shift (rotate) angle DE- CODER_2_PHI_M.                                                                           | ABN_2_DECODER_PHI_M_OFFSET to shift (rotate) angle DE- CODER_2_PHI_M.                                                                           |          |
| 0x31 h    | ABN_2_DECODER_PHI_M        | ABN_2_DECODER_PHI_M                                                                                                                             | ABN_2_DECODER_PHI_M                                                                                                                             | ABN_2_DECODER_PHI_M                                                                                                                             | ABN_2_DECODER_PHI_M                                                                                                                             | R        |
| 0x31 h    | Mask                       | Name                                                                                                                                            | Name                                                                                                                                            | Name                                                                                                                                            | Type                                                                                                                                            | R        |
| 0x31 h    | 0x0000FFFF h               | ABN_2_DECODER_PHI_M                                                                                                                             | ABN_2_DECODER_PHI_M                                                                                                                             | ABN_2_DECODER_PHI_M                                                                                                                             | Signed                                                                                                                                          | R        |
| 0x31 h    | 0x0000FFFF h               | Min                                                                                                                                             | Max                                                                                                                                             | Default                                                                                                                                         | Unit                                                                                                                                            | R        |
| 0x31 h    | 0x0000FFFF h               | -32768                                                                                                                                          | 32767                                                                                                                                           | 0                                                                                                                                               |                                                                                                                                                 | R        |
| 0x31 h    | 0x0000FFFF h               | ABN_2_DECODER_PHI_M = ABN_2_DECODER_COUNT * 2ˆ 16 / ABN_2_DECODER_PPR + ABN_2_DECODER_PHI_M_OFFSET;                                             | ABN_2_DECODER_PHI_M = ABN_2_DECODER_COUNT * 2ˆ 16 / ABN_2_DECODER_PPR + ABN_2_DECODER_PHI_M_OFFSET;                                             | ABN_2_DECODER_PHI_M = ABN_2_DECODER_COUNT * 2ˆ 16 / ABN_2_DECODER_PPR + ABN_2_DECODER_PHI_M_OFFSET;                                             | ABN_2_DECODER_PHI_M = ABN_2_DECODER_COUNT * 2ˆ 16 / ABN_2_DECODER_PPR + ABN_2_DECODER_PHI_M_OFFSET;                                             | RW       |
| 0x33 h    | HALL_MODE                  | HALL_MODE                                                                                                                                       | HALL_MODE                                                                                                                                       | HALL_MODE                                                                                                                                       | HALL_MODE                                                                                                                                       |          |
| 0x33 h    | Mask                       | Name                                                                                                                                            | Name                                                                                                                                            | Name                                                                                                                                            | Type                                                                                                                                            |          |
| 0x33 h    | 0x00000001 h               | polarity                                                                                                                                        | polarity                                                                                                                                        | polarity                                                                                                                                        | Bool                                                                                                                                            |          |
| 0x33 h    |                            | Min                                                                                                                                             | Max                                                                                                                                             | Default                                                                                                                                         | Unit                                                                                                                                            |          |

<!-- image -->

| Address   |                       |                               | Registername                  | Registername                  | Registername                  | Access   |
|-----------|-----------------------|-------------------------------|-------------------------------|-------------------------------|-------------------------------|----------|
|           |                       | 0 polarity 0: off 1: on       | 1                             | 0                             |                               |          |
|           | Mask                  | Name                          | Name                          | Name                          | Type                          |          |
|           | 0x00000100 h          | interpolation                 | interpolation                 | interpolation                 | Bool                          |          |
|           |                       | Min                           | Max                           | Default                       | Unit                          |          |
|           |                       | 0                             | 1                             |                               |                               |          |
|           |                       | interpolation 0: off 1: on    |                               | 0                             |                               |          |
|           | Mask                  |                               | Name                          |                               | Type                          |          |
|           |                       | direction                     |                               |                               |                               |          |
|           | 0x00001000 h          |                               |                               | Default                       | Bool Unit                     |          |
|           |                       | 0 direction                   | 1                             | 0                             |                               |          |
|           |                       | 1: on                         |                               |                               |                               |          |
| 0x34 h    |                       |                               | HALL_POSITION_060_000         |                               |                               | RW       |
|           | Mask                  | Name                          | Name                          | Name                          | Type                          |          |
|           | 0x0000FFFF h          | HALL_POSITION_000             | HALL_POSITION_000             | HALL_POSITION_000             | Signed                        |          |
|           |                       | Min Max                       |                               | Default                       | Unit                          |          |
|           |                       | -32768 s16 hall               | 32767                         | 0                             |                               |          |
|           |                       | sensor position at 0°         | sensor position at 0°         | sensor position at 0°         |                               |          |
|           | Mask                  | Name                          | Name                          | Name                          | Type                          |          |
|           | 0xFFFF0000 h          | HALL_POSITION_060             | HALL_POSITION_060             | HALL_POSITION_060             | Signed                        |          |
|           |                       | Min                           | Max                           | Default                       | Unit                          |          |
|           |                       | -32768                        | 32767                         | 0                             |                               |          |
|           |                       | s16 hall sensor               | position at                   | 60°.                          |                               |          |
| 0x35      | HALL_POSITION_180_120 | HALL_POSITION_180_120         | HALL_POSITION_180_120         | HALL_POSITION_180_120         | HALL_POSITION_180_120         | RW       |
| h         | Mask                  |                               |                               |                               | Type                          |          |
|           |                       | Name                          | Name                          | Name                          | Signed                        |          |
|           | 0x0000FFFF h          | HALL_POSITION_120             | HALL_POSITION_120             | HALL_POSITION_120             |                               |          |
|           |                       | Min                           | Max                           | Default                       | Unit                          |          |
|           |                       | hall sensor position at 120°. | hall sensor position at 120°. | hall sensor position at 120°. | hall sensor position at 120°. |          |
|           |                       |                               |                               | 0                             |                               |          |
|           |                       | -32768                        | 32767                         |                               |                               |          |
|           |                       | s16                           |                               |                               |                               |          |

<!-- image -->

| Address   | Registername                  | Registername                                                    | Registername                                                    | Registername                                                    | Registername                                                    | Access   |
|-----------|-------------------------------|-----------------------------------------------------------------|-----------------------------------------------------------------|-----------------------------------------------------------------|-----------------------------------------------------------------|----------|
| Address   | Mask                          | Name                                                            | Name                                                            | Name                                                            | Type                                                            | Access   |
| Address   | 0xFFFF0000 h                  | HALL_POSITION_180                                               | HALL_POSITION_180                                               | HALL_POSITION_180                                               | Signed                                                          | Access   |
| Address   | 0xFFFF0000 h                  | Min                                                             | Max                                                             | Default                                                         | Unit                                                            | Access   |
| Address   | 0xFFFF0000 h                  | -32768                                                          | 32767                                                           | 0                                                               |                                                                 | Access   |
| Address   | 0xFFFF0000 h                  | s16 hall sensor position at 180°.                               | s16 hall sensor position at 180°.                               | s16 hall sensor position at 180°.                               | s16 hall sensor position at 180°.                               | Access   |
| 0x36 h    | HALL_POSITION_300_240         | HALL_POSITION_300_240                                           | HALL_POSITION_300_240                                           | HALL_POSITION_300_240                                           | HALL_POSITION_300_240                                           | RW       |
| 0x36 h    | Mask                          | Name                                                            | Name                                                            | Name                                                            | Type                                                            | RW       |
| 0x36 h    | 0x0000FFFF h                  | HALL_POSITION_240                                               | HALL_POSITION_240                                               | HALL_POSITION_240                                               | Signed                                                          | RW       |
| 0x36 h    | 0x0000FFFF h                  | Min                                                             | Max                                                             | Default                                                         | Unit                                                            | RW       |
| 0x36 h    | 0x0000FFFF h                  | -32768                                                          | 32767                                                           | 0                                                               |                                                                 | RW       |
| 0x36 h    | 0x0000FFFF h                  | s16 hall sensor position at 240°.                               | s16 hall sensor position at 240°.                               | s16 hall sensor position at 240°.                               | s16 hall sensor position at 240°.                               | RW       |
| 0x36 h    | Mask                          | Name                                                            | Name                                                            | Name                                                            | Type                                                            | RW       |
| 0x36 h    | 0xFFFF0000 h                  | HALL_POSITION_300                                               | HALL_POSITION_300                                               | HALL_POSITION_300                                               | Signed                                                          | RW       |
| 0x36 h    | 0xFFFF0000 h                  | Min                                                             | Max                                                             | Default                                                         | Unit                                                            | RW       |
| 0x36 h    | 0xFFFF0000 h                  | -32768                                                          | 32767                                                           | 0                                                               |                                                                 | RW       |
| 0x36 h    | 0xFFFF0000 h                  | s16 hall sensor position at 300°.                               | s16 hall sensor position at 300°.                               | s16 hall sensor position at 300°.                               | s16 hall sensor position at 300°.                               | RW       |
| 0x37 h    | HALL_PHI_E_PHI_M_OFFSET       | HALL_PHI_E_PHI_M_OFFSET                                         | HALL_PHI_E_PHI_M_OFFSET                                         | HALL_PHI_E_PHI_M_OFFSET                                         | HALL_PHI_E_PHI_M_OFFSET                                         | RW       |
| 0x37 h    | Mask                          | Name                                                            | Name                                                            | Name                                                            | Type                                                            | RW       |
| 0x37 h    | 0x0000FFFF h                  | HALL_PHI_M_OFFSET                                               | HALL_PHI_M_OFFSET                                               | HALL_PHI_M_OFFSET                                               | Signed                                                          | RW       |
| 0x37 h    | 0x0000FFFF h                  | Min                                                             | Max                                                             | Default                                                         | Unit                                                            | RW       |
| 0x37 h    | 0x0000FFFF h                  | -32768                                                          | 32767                                                           | 0                                                               |                                                                 | RW       |
| 0x37 h    | 0x0000FFFF h                  | Offset of mechanical angle hall_phi_m of hall decoder.          | Offset of mechanical angle hall_phi_m of hall decoder.          | Offset of mechanical angle hall_phi_m of hall decoder.          | Offset of mechanical angle hall_phi_m of hall decoder.          | RW       |
| 0x37 h    | Mask                          | Name                                                            | Name                                                            | Name                                                            | Type                                                            | RW       |
| 0x37 h    | 0xFFFF0000 h                  | HALL_PHI_E_OFFSET                                               | HALL_PHI_E_OFFSET                                               | HALL_PHI_E_OFFSET                                               | Signed                                                          | RW       |
| 0x37 h    | 0xFFFF0000 h                  | Min                                                             | Max                                                             | Default                                                         | Unit                                                            | RW       |
| 0x37 h    | 0xFFFF0000 h                  | -32768                                                          | 32767                                                           | 0                                                               |                                                                 | RW       |
| 0x37 h    | 0xFFFF0000 h                  | Offset for electrical angle hall_phi_e of hall decoder.         | Offset for electrical angle hall_phi_e of hall decoder.         | Offset for electrical angle hall_phi_e of hall decoder.         | Offset for electrical angle hall_phi_e of hall decoder.         | RW       |
| 0x38 h    | HALL_DPHI_MAX                 | HALL_DPHI_MAX                                                   | HALL_DPHI_MAX                                                   | HALL_DPHI_MAX                                                   | HALL_DPHI_MAX                                                   | RW       |
| 0x38 h    | Mask                          | Name                                                            | Name                                                            | Name                                                            | Type                                                            | RW       |
| 0x38 h    | 0x0000FFFF h                  | HALL_DPHI_MAX                                                   | HALL_DPHI_MAX                                                   | HALL_DPHI_MAX                                                   | Unsigned                                                        | RW       |
| 0x38 h    | 0x0000FFFF h                  | Min                                                             | Max                                                             | Default                                                         | Unit                                                            | RW       |
| 0x38 h    | 0x0000FFFF h                  | 0                                                               | 65535                                                           | 0                                                               |                                                                 | RW       |
| 0x38 h    | 0x0000FFFF h                  | Maximum dx for interpolation (default for digital hall: u16/6). | Maximum dx for interpolation (default for digital hall: u16/6). | Maximum dx for interpolation (default for digital hall: u16/6). | Maximum dx for interpolation (default for digital hall: u16/6). | RW       |
| 0x39 h    | HALL_PHI_E_INTERPOLATED_PHI_E | HALL_PHI_E_INTERPOLATED_PHI_E                                   | HALL_PHI_E_INTERPOLATED_PHI_E                                   | HALL_PHI_E_INTERPOLATED_PHI_E                                   | HALL_PHI_E_INTERPOLATED_PHI_E                                   | R        |
| 0x39 h    | Mask                          | Name                                                            | Name                                                            | Name                                                            | Type                                                            | R        |

<!-- image -->

| Address   | Registername             | Registername                                                                                           | Registername                                                                                           | Registername                                                                                           | Registername                                                                                           | Access   |
|-----------|--------------------------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|----------|
|           | 0x0000FFFF h             | HALL_PHI_E                                                                                             | HALL_PHI_E                                                                                             | HALL_PHI_E                                                                                             | Signed                                                                                                 |          |
|           |                          | Min                                                                                                    | Max                                                                                                    | Default                                                                                                | Unit                                                                                                   |          |
|           |                          | -32768                                                                                                 | 32767                                                                                                  | 0                                                                                                      |                                                                                                        |          |
|           |                          | Raw electrical angle hall_phi_e of hall decoder, selection pro- grammed via HALL_MODE control bit.     | Raw electrical angle hall_phi_e of hall decoder, selection pro- grammed via HALL_MODE control bit.     | Raw electrical angle hall_phi_e of hall decoder, selection pro- grammed via HALL_MODE control bit.     | Raw electrical angle hall_phi_e of hall decoder, selection pro- grammed via HALL_MODE control bit.     |          |
|           | Mask                     | Name                                                                                                   | Name                                                                                                   | Name                                                                                                   | Type                                                                                                   |          |
|           | 0xFFFF0000 h             | HALL_PHI_E_INTERPOLATED                                                                                | HALL_PHI_E_INTERPOLATED                                                                                | HALL_PHI_E_INTERPOLATED                                                                                | Signed                                                                                                 |          |
|           |                          | Min                                                                                                    | Max                                                                                                    | Default                                                                                                | Unit                                                                                                   |          |
|           |                          | -32768                                                                                                 | 32767                                                                                                  | 0                                                                                                      |                                                                                                        |          |
|           |                          | Interpolated electrical angle hall_phi_e_interpolated, selection programmed via HALL_MODE control bit. | Interpolated electrical angle hall_phi_e_interpolated, selection programmed via HALL_MODE control bit. | Interpolated electrical angle hall_phi_e_interpolated, selection programmed via HALL_MODE control bit. | Interpolated electrical angle hall_phi_e_interpolated, selection programmed via HALL_MODE control bit. | R        |
| 0x3A h    | HALL_PHI_M               | HALL_PHI_M                                                                                             | HALL_PHI_M                                                                                             | HALL_PHI_M                                                                                             | HALL_PHI_M                                                                                             |          |
|           | Mask                     | Name                                                                                                   | Name                                                                                                   | Name                                                                                                   | Type                                                                                                   |          |
|           | 0x0000FFFF h             | HALL_PHI_M                                                                                             | HALL_PHI_M                                                                                             | HALL_PHI_M                                                                                             | Signed                                                                                                 |          |
|           |                          | Min                                                                                                    | Max                                                                                                    | Default                                                                                                | Unit                                                                                                   |          |
|           |                          | -32768                                                                                                 | 32767                                                                                                  | 0                                                                                                      |                                                                                                        |          |
|           |                          | Mechanical angle hall_phi_m of hall decoder.                                                           | Mechanical angle hall_phi_m of hall decoder.                                                           | Mechanical angle hall_phi_m of hall decoder.                                                           | Mechanical angle hall_phi_m of hall decoder.                                                           |          |
| 0x3B h    | AENC_DECODER_MODE        | AENC_DECODER_MODE                                                                                      | AENC_DECODER_MODE                                                                                      | AENC_DECODER_MODE                                                                                      | AENC_DECODER_MODE                                                                                      | RW       |
|           | Mask                     | Name                                                                                                   | Name                                                                                                   | Name                                                                                                   | Type                                                                                                   |          |
|           | 0x00000001 h             | AENC_DECODER_MODE[0]                                                                                   | AENC_DECODER_MODE[0]                                                                                   | AENC_DECODER_MODE[0]                                                                                   | Bool                                                                                                   |          |
|           |                          | Min                                                                                                    | Max                                                                                                    | Default                                                                                                | Unit                                                                                                   |          |
|           |                          | 0                                                                                                      | 1                                                                                                      | 0                                                                                                      |                                                                                                        |          |
|           |                          | nXY_UVW : 0: SinCos Mode // 1: 0° 120° 240° Mode 0: off                                                | nXY_UVW : 0: SinCos Mode // 1: 0° 120° 240° Mode 0: off                                                | nXY_UVW : 0: SinCos Mode // 1: 0° 120° 240° Mode 0: off                                                | nXY_UVW : 0: SinCos Mode // 1: 0° 120° 240° Mode 0: off                                                |          |
|           |                          | 1: on                                                                                                  | 1: on                                                                                                  | 1: on                                                                                                  | 1: on                                                                                                  |          |
|           | Mask                     | Name                                                                                                   | Name                                                                                                   | Name                                                                                                   | Type                                                                                                   |          |
|           | 0x00001000 h             | AENC_DECODER_MODE[12]                                                                                  | AENC_DECODER_MODE[12]                                                                                  | AENC_DECODER_MODE[12]                                                                                  | Bool                                                                                                   |          |
|           |                          | Min                                                                                                    | Max                                                                                                    | Default                                                                                                | Unit                                                                                                   |          |
|           |                          | 0                                                                                                      | 1                                                                                                      | 0                                                                                                      |                                                                                                        |          |
|           |                          | decoder count direction 0: positive                                                                    | decoder count direction 0: positive                                                                    | decoder count direction 0: positive                                                                    | decoder count direction 0: positive                                                                    |          |
|           |                          | 1: negative                                                                                            | 1: negative                                                                                            | 1: negative                                                                                            | 1: negative                                                                                            | RW       |
| 0x3C h    | AENC_DECODER_N_THRESHOLD | AENC_DECODER_N_THRESHOLD                                                                               | AENC_DECODER_N_THRESHOLD                                                                               | AENC_DECODER_N_THRESHOLD                                                                               | AENC_DECODER_N_THRESHOLD                                                                               |          |
|           | Mask                     | Name                                                                                                   | Name                                                                                                   | Name                                                                                                   | Type                                                                                                   |          |
|           | 0x0000FFFF h             | AENC_DECODER_N_THRESHOLD                                                                               | AENC_DECODER_N_THRESHOLD                                                                               | AENC_DECODER_N_THRESHOLD                                                                               | Signed                                                                                                 |          |

<!-- image -->

| Address   |                           | Registername                                                                                                                                                                                                    | Registername                                                                                                                                                                                                    | Registername                                                                                                                                                                                                    | Registername                                                                                                                                                                                                    | Access   |
|-----------|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Address   |                           | Min                                                                                                                                                                                                             | Max                                                                                                                                                                                                             | Default                                                                                                                                                                                                         | Unit                                                                                                                                                                                                            |          |
| Address   |                           | -32768                                                                                                                                                                                                          | 32767                                                                                                                                                                                                           | 0                                                                                                                                                                                                               |                                                                                                                                                                                                                 |          |
| Address   |                           | Threshold for generating of Npulse from analog AENC_N signal (only needed for analog SinCos encoders with analog Nsignal).                                                                                      | Threshold for generating of Npulse from analog AENC_N signal (only needed for analog SinCos encoders with analog Nsignal).                                                                                      | Threshold for generating of Npulse from analog AENC_N signal (only needed for analog SinCos encoders with analog Nsignal).                                                                                      | Threshold for generating of Npulse from analog AENC_N signal (only needed for analog SinCos encoders with analog Nsignal).                                                                                      |          |
| 0x3D h    | AENC_DECODER_PHI_A_RAW    | AENC_DECODER_PHI_A_RAW                                                                                                                                                                                          | AENC_DECODER_PHI_A_RAW                                                                                                                                                                                          | AENC_DECODER_PHI_A_RAW                                                                                                                                                                                          | AENC_DECODER_PHI_A_RAW                                                                                                                                                                                          | R        |
| 0x3D h    | Mask                      | Name                                                                                                                                                                                                            | Name                                                                                                                                                                                                            | Name                                                                                                                                                                                                            | Type                                                                                                                                                                                                            |          |
| 0x3D h    | 0x0000FFFF h              | AENC_DECODER_PHI_A_RAW                                                                                                                                                                                          | AENC_DECODER_PHI_A_RAW                                                                                                                                                                                          | AENC_DECODER_PHI_A_RAW                                                                                                                                                                                          | Signed                                                                                                                                                                                                          |          |
| 0x3D h    | 0x0000FFFF h              | Min                                                                                                                                                                                                             | Max                                                                                                                                                                                                             | Default                                                                                                                                                                                                         | Unit                                                                                                                                                                                                            |          |
| 0x3D h    | 0x0000FFFF h              | -32768                                                                                                                                                                                                          | 32767                                                                                                                                                                                                           | 0                                                                                                                                                                                                               |                                                                                                                                                                                                                 |          |
| 0x3D h    | 0x0000FFFF h              | Raw analog angle phi calculated from analog AENC inputs (analog hall, analog SinCos, ...).                                                                                                                      | Raw analog angle phi calculated from analog AENC inputs (analog hall, analog SinCos, ...).                                                                                                                      | Raw analog angle phi calculated from analog AENC inputs (analog hall, analog SinCos, ...).                                                                                                                      | Raw analog angle phi calculated from analog AENC inputs (analog hall, analog SinCos, ...).                                                                                                                      | RW       |
| 0x3E h    | AENC_DECODER_PHI_A_OFFSET | AENC_DECODER_PHI_A_OFFSET                                                                                                                                                                                       | AENC_DECODER_PHI_A_OFFSET                                                                                                                                                                                       | AENC_DECODER_PHI_A_OFFSET                                                                                                                                                                                       | AENC_DECODER_PHI_A_OFFSET                                                                                                                                                                                       |          |
| 0x3E h    | Mask                      | Name                                                                                                                                                                                                            | Name                                                                                                                                                                                                            | Name                                                                                                                                                                                                            | Type                                                                                                                                                                                                            |          |
| 0x3E h    | 0x0000FFFF h              | AENC_DECODER_PHI_A_OFFSET                                                                                                                                                                                       | AENC_DECODER_PHI_A_OFFSET                                                                                                                                                                                       | AENC_DECODER_PHI_A_OFFSET                                                                                                                                                                                       | Signed                                                                                                                                                                                                          |          |
| 0x3E h    | 0x0000FFFF h              | Min                                                                                                                                                                                                             | Max                                                                                                                                                                                                             | Default                                                                                                                                                                                                         | Unit                                                                                                                                                                                                            |          |
| 0x3E h    | 0x0000FFFF h              | -32768                                                                                                                                                                                                          | 32767                                                                                                                                                                                                           | 0                                                                                                                                                                                                               |                                                                                                                                                                                                                 |          |
| 0x3E h    | 0x0000FFFF h              | Offset for angle phi from analog decoder (analog hall, analog SinCos, ...).                                                                                                                                     | Offset for angle phi from analog decoder (analog hall, analog SinCos, ...).                                                                                                                                     | Offset for angle phi from analog decoder (analog hall, analog SinCos, ...).                                                                                                                                     | Offset for angle phi from analog decoder (analog hall, analog SinCos, ...).                                                                                                                                     |          |
| 0x3F h    | AENC_DECODER_PHI_A        | AENC_DECODER_PHI_A                                                                                                                                                                                              | AENC_DECODER_PHI_A                                                                                                                                                                                              | AENC_DECODER_PHI_A                                                                                                                                                                                              | AENC_DECODER_PHI_A                                                                                                                                                                                              | R        |
| 0x3F h    | Mask                      | Name                                                                                                                                                                                                            | Name                                                                                                                                                                                                            | Name                                                                                                                                                                                                            | Type                                                                                                                                                                                                            |          |
| 0x3F h    | 0x0000FFFF h              | AENC_DECODER_PHI_A                                                                                                                                                                                              | AENC_DECODER_PHI_A                                                                                                                                                                                              | AENC_DECODER_PHI_A                                                                                                                                                                                              | Signed                                                                                                                                                                                                          |          |
| 0x3F h    | 0x0000FFFF h              | Min                                                                                                                                                                                                             | Max                                                                                                                                                                                                             | Default                                                                                                                                                                                                         | Unit                                                                                                                                                                                                            |          |
| 0x3F h    | 0x0000FFFF h              | -2147483648                                                                                                                                                                                                     | 2147483647                                                                                                                                                                                                      | 0                                                                                                                                                                                                               |                                                                                                                                                                                                                 |          |
| 0x3F h    | 0x0000FFFF h              | Resulting phi available for the FOC (phi_e might need to be calculated from this angle via aenc_decoder_ppr, for analog hall sensors phi_a might be used directly as phi_e depends on analog hall signal type). | Resulting phi available for the FOC (phi_e might need to be calculated from this angle via aenc_decoder_ppr, for analog hall sensors phi_a might be used directly as phi_e depends on analog hall signal type). | Resulting phi available for the FOC (phi_e might need to be calculated from this angle via aenc_decoder_ppr, for analog hall sensors phi_a might be used directly as phi_e depends on analog hall signal type). | Resulting phi available for the FOC (phi_e might need to be calculated from this angle via aenc_decoder_ppr, for analog hall sensors phi_a might be used directly as phi_e depends on analog hall signal type). | RW       |
| 0x40 h    | AENC_DECODER_PPR          | AENC_DECODER_PPR                                                                                                                                                                                                | AENC_DECODER_PPR                                                                                                                                                                                                | AENC_DECODER_PPR                                                                                                                                                                                                | AENC_DECODER_PPR                                                                                                                                                                                                |          |
| 0x40 h    | Mask                      | Name                                                                                                                                                                                                            | Name                                                                                                                                                                                                            | Name                                                                                                                                                                                                            | Type                                                                                                                                                                                                            |          |
| 0x40 h    | 0x0000FFFF h              | AENC_DECODER_PPR                                                                                                                                                                                                | AENC_DECODER_PPR                                                                                                                                                                                                | AENC_DECODER_PPR                                                                                                                                                                                                | Signed                                                                                                                                                                                                          |          |
| 0x40 h    | 0x0000FFFF h              | Min                                                                                                                                                                                                             | Max                                                                                                                                                                                                             | Default                                                                                                                                                                                                         | Unit                                                                                                                                                                                                            |          |
| 0x40 h    | 0x0000FFFF h              | -32768                                                                                                                                                                                                          | 32767                                                                                                                                                                                                           | 1                                                                                                                                                                                                               |                                                                                                                                                                                                                 |          |
| 0x40 h    | 0x0000FFFF h              | Number of periods per revolution also called lines per revolu- tion (different nomenclatur compared to digital ABNencoders).                                                                                    | Number of periods per revolution also called lines per revolu- tion (different nomenclatur compared to digital ABNencoders).                                                                                    | Number of periods per revolution also called lines per revolu- tion (different nomenclatur compared to digital ABNencoders).                                                                                    | Number of periods per revolution also called lines per revolu- tion (different nomenclatur compared to digital ABNencoders).                                                                                    | RW       |
| 0x41 h    | AENC_DECODER_COUNT        | AENC_DECODER_COUNT                                                                                                                                                                                              | AENC_DECODER_COUNT                                                                                                                                                                                              | AENC_DECODER_COUNT                                                                                                                                                                                              | AENC_DECODER_COUNT                                                                                                                                                                                              |          |
| 0x41 h    | Mask                      | Name                                                                                                                                                                                                            | Name                                                                                                                                                                                                            | Name                                                                                                                                                                                                            | Type                                                                                                                                                                                                            |          |
| 0x41 h    | 0xFFFFFFFF h              | AENC_DECODER_COUNT                                                                                                                                                                                              | AENC_DECODER_COUNT                                                                                                                                                                                              | AENC_DECODER_COUNT                                                                                                                                                                                              | Signed                                                                                                                                                                                                          |          |

<!-- image -->

| Address   | Registername                                                                                                                                               |                                                                                                                                                            |                                                                                                                                                            |                                                                                                                                                            |                                                                                                                                                            | Access   |
|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Address   |                                                                                                                                                            | Min                                                                                                                                                        | Max                                                                                                                                                        | Default                                                                                                                                                    | Unit                                                                                                                                                       |          |
| Address   |                                                                                                                                                            | -2147483648                                                                                                                                                | 2147483647                                                                                                                                                 | 0                                                                                                                                                          |                                                                                                                                                            |          |
| Address   | Decoder position, raw unscaled.                                                                                                                            | Decoder position, raw unscaled.                                                                                                                            | Decoder position, raw unscaled.                                                                                                                            | Decoder position, raw unscaled.                                                                                                                            | Decoder position, raw unscaled.                                                                                                                            |          |
| 0x42 h    | AENC_DECODER_COUNT_N                                                                                                                                       | AENC_DECODER_COUNT_N                                                                                                                                       | AENC_DECODER_COUNT_N                                                                                                                                       | AENC_DECODER_COUNT_N                                                                                                                                       | AENC_DECODER_COUNT_N                                                                                                                                       | RW       |
| 0x42 h    | Mask                                                                                                                                                       | Name                                                                                                                                                       | Name                                                                                                                                                       | Name                                                                                                                                                       | Type                                                                                                                                                       | RW       |
| 0x42 h    | 0xFFFFFFFF h                                                                                                                                               | AENC_DECODER_COUNT_N                                                                                                                                       | AENC_DECODER_COUNT_N                                                                                                                                       | AENC_DECODER_COUNT_N                                                                                                                                       | Signed                                                                                                                                                     | RW       |
| 0x42 h    | 0xFFFFFFFF h                                                                                                                                               | Min                                                                                                                                                        | Max                                                                                                                                                        | Default                                                                                                                                                    | Unit                                                                                                                                                       | RW       |
| 0x42 h    | 0xFFFFFFFF h                                                                                                                                               | -2147483648                                                                                                                                                | 2147483647                                                                                                                                                 | 0                                                                                                                                                          |                                                                                                                                                            | RW       |
| 0x42 h    | Latched decoder position on analog N pulse event.                                                                                                          | Latched decoder position on analog N pulse event.                                                                                                          | Latched decoder position on analog N pulse event.                                                                                                          | Latched decoder position on analog N pulse event.                                                                                                          | Latched decoder position on analog N pulse event.                                                                                                          | RW       |
| 0x43 h    | AENC_DECODER_COUNT_N_MASK                                                                                                                                  | AENC_DECODER_COUNT_N_MASK                                                                                                                                  | AENC_DECODER_COUNT_N_MASK                                                                                                                                  | AENC_DECODER_COUNT_N_MASK                                                                                                                                  | AENC_DECODER_COUNT_N_MASK                                                                                                                                  | RW       |
| 0x43 h    | Mask                                                                                                                                                       | Name                                                                                                                                                       | Name                                                                                                                                                       | Name                                                                                                                                                       | Type                                                                                                                                                       | RW       |
| 0x43 h    | 0x0000FFFF h                                                                                                                                               | AENC_DECODER_COUNT_N_MASK                                                                                                                                  | AENC_DECODER_COUNT_N_MASK                                                                                                                                  | AENC_DECODER_COUNT_N_MASK                                                                                                                                  | Signed                                                                                                                                                     | RW       |
| 0x43 h    | 0x0000FFFF h                                                                                                                                               | Min                                                                                                                                                        | Max                                                                                                                                                        | Default                                                                                                                                                    | Unit                                                                                                                                                       | RW       |
| 0x43 h    | 0x0000FFFF h                                                                                                                                               | -32768                                                                                                                                                     | 32767                                                                                                                                                      | 0                                                                                                                                                          |                                                                                                                                                            | RW       |
| 0x43 h    | Optional position mask (position) for the analog N pulse within phi_a period to be and-ed with the digital N pulse generated via aenc_decoder_n_threshold. | Optional position mask (position) for the analog N pulse within phi_a period to be and-ed with the digital N pulse generated via aenc_decoder_n_threshold. | Optional position mask (position) for the analog N pulse within phi_a period to be and-ed with the digital N pulse generated via aenc_decoder_n_threshold. | Optional position mask (position) for the analog N pulse within phi_a period to be and-ed with the digital N pulse generated via aenc_decoder_n_threshold. | Optional position mask (position) for the analog N pulse within phi_a period to be and-ed with the digital N pulse generated via aenc_decoder_n_threshold. | RW       |
| 0x45 h    | AENC_DECODER_PHI_E_PHI_M_OFFSET                                                                                                                            | AENC_DECODER_PHI_E_PHI_M_OFFSET                                                                                                                            | AENC_DECODER_PHI_E_PHI_M_OFFSET                                                                                                                            | AENC_DECODER_PHI_E_PHI_M_OFFSET                                                                                                                            | AENC_DECODER_PHI_E_PHI_M_OFFSET                                                                                                                            | RW       |
| 0x45 h    | Mask                                                                                                                                                       | Name                                                                                                                                                       | Name                                                                                                                                                       | Name                                                                                                                                                       | Type                                                                                                                                                       | RW       |
| 0x45 h    | 0x0000FFFF h                                                                                                                                               | AENC_DECODER_PHI_M_OFFSET                                                                                                                                  | AENC_DECODER_PHI_M_OFFSET                                                                                                                                  | AENC_DECODER_PHI_M_OFFSET                                                                                                                                  | Signed                                                                                                                                                     | RW       |
| 0x45 h    | 0x0000FFFF h                                                                                                                                               | Min                                                                                                                                                        | Max                                                                                                                                                        | Default                                                                                                                                                    | Unit                                                                                                                                                       | RW       |
| 0x45 h    | 0x0000FFFF h                                                                                                                                               | -32768                                                                                                                                                     | 32767                                                                                                                                                      | 0                                                                                                                                                          |                                                                                                                                                            | RW       |
| 0x45 h    | Offset for mechanical angle phi_m.                                                                                                                         | Offset for mechanical angle phi_m.                                                                                                                         | Offset for mechanical angle phi_m.                                                                                                                         | Offset for mechanical angle phi_m.                                                                                                                         | Offset for mechanical angle phi_m.                                                                                                                         | RW       |
| 0x45 h    | Mask                                                                                                                                                       | Name                                                                                                                                                       | Name                                                                                                                                                       | Name                                                                                                                                                       | Type                                                                                                                                                       | RW       |
| 0x45 h    | 0xFFFF0000 h                                                                                                                                               | AENC_DECODER_PHI_E_OFFSET                                                                                                                                  | AENC_DECODER_PHI_E_OFFSET                                                                                                                                  | AENC_DECODER_PHI_E_OFFSET                                                                                                                                  | Signed                                                                                                                                                     | RW       |
| 0x45 h    |                                                                                                                                                            | Min                                                                                                                                                        | Max                                                                                                                                                        | Default                                                                                                                                                    | Unit                                                                                                                                                       | RW       |
| 0x45 h    |                                                                                                                                                            | -32768                                                                                                                                                     | 32767                                                                                                                                                      | 0                                                                                                                                                          |                                                                                                                                                            | RW       |
| 0x45 h    | Offset for electrical angle phi_e.                                                                                                                         | Offset for electrical angle phi_e.                                                                                                                         | Offset for electrical angle phi_e.                                                                                                                         | Offset for electrical angle phi_e.                                                                                                                         | Offset for electrical angle phi_e.                                                                                                                         | R        |
| 0x46 h    | AENC_DECODER_PHI_E_PHI_M                                                                                                                                   | AENC_DECODER_PHI_E_PHI_M                                                                                                                                   | AENC_DECODER_PHI_E_PHI_M                                                                                                                                   | AENC_DECODER_PHI_E_PHI_M                                                                                                                                   | AENC_DECODER_PHI_E_PHI_M                                                                                                                                   |          |
| 0x46 h    | Mask                                                                                                                                                       | Name                                                                                                                                                       | Name                                                                                                                                                       | Name                                                                                                                                                       | Type                                                                                                                                                       |          |
| 0x46 h    | 0x0000FFFF h                                                                                                                                               | AENC_DECODER_PHI_M                                                                                                                                         | AENC_DECODER_PHI_M                                                                                                                                         | AENC_DECODER_PHI_M                                                                                                                                         | Signed                                                                                                                                                     |          |
| 0x46 h    |                                                                                                                                                            | Min                                                                                                                                                        | Max                                                                                                                                                        | Default                                                                                                                                                    | Unit                                                                                                                                                       |          |
| 0x46 h    |                                                                                                                                                            | -32768                                                                                                                                                     | 32767                                                                                                                                                      | 0                                                                                                                                                          |                                                                                                                                                            |          |
| 0x46 h    |                                                                                                                                                            | Resulting angle phi_m.                                                                                                                                     | Resulting angle phi_m.                                                                                                                                     | Resulting angle phi_m.                                                                                                                                     | Resulting angle phi_m.                                                                                                                                     |          |
| 0x46 h    | Mask                                                                                                                                                       | Name                                                                                                                                                       | Name                                                                                                                                                       | Name                                                                                                                                                       | Type                                                                                                                                                       |          |

<!-- image -->

| Address   | Registername            |                                                                                                                            |      |              | Access             |
|-----------|-------------------------|----------------------------------------------------------------------------------------------------------------------------|------|--------------|--------------------|
|           | 0xFFFF0000 h            | AENC_DECODER_PHI_E                                                                                                         |      | Signed       |                    |
|           |                         | Min                                                                                                                        | Max  | Default Unit |                    |
|           |                         | -32768                                                                                                                     |      | 0            | 32767              |
|           |                         | Resulting angle phi_e.                                                                                                     |      |              | RW                 |
| 0x47 h    | AENC_DECODER_POSITION   |                                                                                                                            |      |              |                    |
|           | Mask                    |                                                                                                                            | Name | Type         |                    |
|           | 0xFFFFFFFF h            | AENC_DECODER_POSITION                                                                                                      |      | Signed       |                    |
|           |                         |                                                                                                                            | Max  | Unit         |                    |
|           | Min                     | -2147483648                                                                                                                |      | Default 0    | 2147483647         |
|           | Multi-turn              | position.                                                                                                                  |      |              | RW                 |
| 0x50 h    | VELOCITY_SELECTION Mask | Name                                                                                                                       |      |              |                    |
|           | 0x000000FF              |                                                                                                                            |      | Type Choice  |                    |
|           | h                       | Min                                                                                                                        | Max  | Default Unit | VELOCITY_SELECTION |
|           | 0                       |                                                                                                                            | 12   | 0            |                    |
|           | 0: phi_e                | selected via PHI_E_SELECTION                                                                                               |      |              |                    |
|           | 1: phi_e_ext            | 2: phi_e_openloop 3: phi_e_abn                                                                                             |      |              |                    |
|           |                         | 4: reserved 5: phi_e_hal 6: phi_e_aenc 7: phi_a_aenc 8: reserved 9: phi_m_abn 10: phi_m_abn_2 11: phi_m_aenc 12: phi_m_hal |      |              | RW                 |
|           |                         | POSITION_SELECTION                                                                                                         |      |              |                    |
|           | 0x000000FF              |                                                                                                                            |      |              |                    |
| 0x51 h    |                         |                                                                                                                            |      |              |                    |
|           | Mask                    | Name                                                                                                                       |      | Choice       | Type               |
|           |                         | 0                                                                                                                          | Max  | Unit         | 12                 |
|           |                         | 0: phi_e selected via PHI_E_SELECTION 1: phi_e_ext                                                                         |      |              |                    |
|           | Min                     |                                                                                                                            |      |              |                    |
|           | h                       |                                                                                                                            |      |              |                    |
|           |                         |                                                                                                                            |      |              | POSITION_SELECTION |
|           |                         |                                                                                                                            |      | Default      |                    |
|           |                         |                                                                                                                            |      |              | 0                  |

<!-- image -->

| Address   | Registername      | Registername      | Registername         | Registername      | Registername      | Access   |
|-----------|-------------------|-------------------|----------------------|-------------------|-------------------|----------|
| 0x52 h    | PHI_E_SELECTION   | PHI_E_SELECTION   | PHI_E_SELECTION      | PHI_E_SELECTION   | PHI_E_SELECTION   | RW       |
|           | Mask 0x000000FF h |                   | Name PHI_E_SELECTION |                   | Type Choice       |          |
|           |                   | Min 0             | Max 7                | Default 0         | Unit              |          |
| 0x53 h    | PHI_E             | PHI_E             | PHI_E                | PHI_E             | PHI_E             | R        |
|           | Mask              | Name              |                      |                   | Type              |          |
|           | 0x0000FFFF h      |                   | PHI_E                |                   | Signed            |          |
|           |                   | Min               | Max                  | Default           | Unit              |          |
|           |                   | -32768 Angle used | 32767 the inner FOC  | 0 loop.           |                   |          |
| 0x54 h    | PID_FLUX_P_FLUX_I | PID_FLUX_P_FLUX_I | PID_FLUX_P_FLUX_I    | PID_FLUX_P_FLUX_I | PID_FLUX_P_FLUX_I | RW       |
|           | Mask              |                   | Name                 |                   | Type              |          |
|           | 0x0000FFFF h      | Min               | PID_FLUX_I           |                   | Signed Unit       |          |
|           |                   | 0                 | Max                  | Default           |                   |          |
|           |                   |                   | 32767                | 0                 |                   |          |

<!-- image -->

| Address   | Registername              | Registername              | Registername              | Registername              | Registername              | Access   |
|-----------|---------------------------|---------------------------|---------------------------|---------------------------|---------------------------|----------|
| Address   | Mask                      | Name                      | Name                      | Name                      | Type                      |          |
| Address   | 0xFFFF0000 h              | PID_FLUX_P                | PID_FLUX_P                | PID_FLUX_P                | Signed                    |          |
| Address   | 0xFFFF0000 h              | Min                       | Max                       | Default                   | Unit                      |          |
| Address   | 0xFFFF0000 h              | 0                         | 32767                     | 0                         |                           |          |
| 0x55 h    | PID_FLUX_D                | PID_FLUX_D                | PID_FLUX_D                | PID_FLUX_D                | PID_FLUX_D                | RW       |
| 0x55 h    | Mask                      |                           | Name                      |                           | Type                      |          |
| 0x55 h    | 0x0000FFFF h              |                           | PID_FLUX_D                |                           | Signed                    |          |
| 0x55 h    | 0x0000FFFF h              | Min                       | Max                       | Default                   | Unit                      |          |
| 0x55 h    | 0x0000FFFF h              | 0                         | 32767                     | 0                         |                           |          |
| 0x56 h    | PID_TORQUE_P_TORQUE_I     | PID_TORQUE_P_TORQUE_I     | PID_TORQUE_P_TORQUE_I     | PID_TORQUE_P_TORQUE_I     | PID_TORQUE_P_TORQUE_I     | RW       |
| 0x56 h    | Mask                      |                           | Name                      |                           | Type                      |          |
| 0x56 h    | 0x0000FFFF h              |                           | PID_TORQUE_I              |                           | Signed                    |          |
| 0x56 h    | 0x0000FFFF h              | Min                       | Max                       | Default                   | Unit                      |          |
| 0x56 h    | 0x0000FFFF h              | 0                         | 32767                     | 0                         |                           |          |
| 0x56 h    | Mask                      |                           | Name                      |                           | Type                      |          |
| 0x56 h    | 0xFFFF0000 h              | PID_TORQUE_P              | PID_TORQUE_P              | PID_TORQUE_P              | Signed                    |          |
| 0x56 h    | 0xFFFF0000 h              | Min                       | Max                       | Default                   | Unit                      |          |
| 0x56 h    | 0xFFFF0000 h              | 0                         | 32767                     | 0                         |                           |          |
| 0x57 h    | PID_TORQUE_D              | PID_TORQUE_D              | PID_TORQUE_D              | PID_TORQUE_D              | PID_TORQUE_D              | RW       |
| 0x57 h    | Mask                      |                           | Name                      |                           | Type                      |          |
| 0x57 h    | 0x0000FFFF h              |                           | PID_TORQUE_D              |                           | Signed                    |          |
| 0x57 h    | 0x0000FFFF h              | Min                       | Max                       | Default                   | Unit                      |          |
| 0x57 h    | 0x0000FFFF h              | 0                         | 32767                     | 0                         |                           |          |
| 0x58 h    | PID_VELOCITY_P_VELOCITY_I | PID_VELOCITY_P_VELOCITY_I | PID_VELOCITY_P_VELOCITY_I | PID_VELOCITY_P_VELOCITY_I | PID_VELOCITY_P_VELOCITY_I | RW       |
| 0x58 h    | Mask                      |                           | Name                      |                           | Type                      |          |
| 0x58 h    | 0x0000FFFF h              |                           | PID_VELOCITY_I            |                           | Signed                    |          |
| 0x58 h    | 0x0000FFFF h              | Min                       | Max                       | Default                   | Unit                      |          |
| 0x58 h    | 0x0000FFFF h              | 0                         | 32767                     | 0                         |                           |          |
| 0x58 h    | Mask                      |                           | Name                      |                           | Type                      |          |
| 0x58 h    | 0xFFFF0000 h              | PID_VELOCITY_P            | PID_VELOCITY_P            | PID_VELOCITY_P            | Signed                    |          |
| 0x58 h    | 0xFFFF0000 h              | Min                       | Max                       | Default                   | Unit                      |          |
| 0x58 h    | 0xFFFF0000 h              | 0                         | 32767                     | 0                         |                           |          |
| 0x59 h    | PID_VELOCITY_D            | PID_VELOCITY_D            | PID_VELOCITY_D            | PID_VELOCITY_D            | PID_VELOCITY_D            | RW       |
| 0x59 h    | Mask                      |                           | Name                      |                           | Type                      |          |
| 0x59 h    | 0x0000FFFF h              |                           | PID_VELOCITY_D            |                           | Signed                    |          |

<!-- image -->

| Address   |                                                                             |                                                                             | Registername                                                                | Registername                                                                | Registername                                                                | Access   |
|-----------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|----------|
| Address   |                                                                             | Min                                                                         | Max                                                                         | Default                                                                     | Unit                                                                        |          |
| Address   |                                                                             | 0                                                                           | 32767                                                                       | 0                                                                           |                                                                             |          |
| 0x5A h    | PID_POSITION_P_POSITION_I                                                   | PID_POSITION_P_POSITION_I                                                   | PID_POSITION_P_POSITION_I                                                   | PID_POSITION_P_POSITION_I                                                   | PID_POSITION_P_POSITION_I                                                   | RW       |
| 0x5A h    | Mask                                                                        |                                                                             | Name                                                                        | Name                                                                        | Type                                                                        | RW       |
| 0x5A h    | 0x0000FFFF h                                                                |                                                                             | PID_POSITION_I                                                              | PID_POSITION_I                                                              | Signed                                                                      | RW       |
| 0x5A h    | 0x0000FFFF h                                                                | Min                                                                         | Max                                                                         | Default                                                                     | Unit                                                                        | RW       |
| 0x5A h    | 0x0000FFFF h                                                                | 0                                                                           | 32767                                                                       | 0                                                                           |                                                                             | RW       |
| 0x5A h    | Mask                                                                        |                                                                             | Name                                                                        | Name                                                                        | Type                                                                        | RW       |
| 0x5A h    | 0xFFFF0000 h                                                                |                                                                             | PID_POSITION_P                                                              | PID_POSITION_P                                                              | Signed                                                                      | RW       |
| 0x5A h    | 0xFFFF0000 h                                                                | Min                                                                         | Max                                                                         | Default                                                                     | Unit                                                                        | RW       |
| 0x5A h    | 0xFFFF0000 h                                                                | 0                                                                           | 32767                                                                       | 0                                                                           |                                                                             | RW       |
| 0x5B h    | PID_POSITION_D                                                              | PID_POSITION_D                                                              | PID_POSITION_D                                                              | PID_POSITION_D                                                              | PID_POSITION_D                                                              | RW       |
| 0x5B h    | Mask                                                                        |                                                                             | Name                                                                        | Name                                                                        | Type                                                                        | RW       |
| 0x5B h    | 0x0000FFFF h                                                                |                                                                             | PID_POSITION_D                                                              | PID_POSITION_D                                                              | Signed                                                                      | RW       |
| 0x5B h    | 0x0000FFFF h                                                                | Min                                                                         | Max                                                                         | Default                                                                     | Unit                                                                        | RW       |
| 0x5B h    | 0x0000FFFF h                                                                | 0                                                                           | 32767                                                                       | 0                                                                           |                                                                             | RW       |
| 0x5C h    | PID_TORQUE_FLUX_TARGET_DDT_LIMITS                                           | PID_TORQUE_FLUX_TARGET_DDT_LIMITS                                           | PID_TORQUE_FLUX_TARGET_DDT_LIMITS                                           | PID_TORQUE_FLUX_TARGET_DDT_LIMITS                                           | PID_TORQUE_FLUX_TARGET_DDT_LIMITS                                           | RW       |
| 0x5C h    | Mask                                                                        |                                                                             | Name                                                                        | Name                                                                        | Type                                                                        | RW       |
| 0x5C h    | 0xFFFFFFFF h                                                                |                                                                             |                                                                             | PID_TORQUE_FLUX_TARGET_DDT_LIMITS                                           | Unsigned                                                                    | RW       |
| 0x5C h    | 0xFFFFFFFF h                                                                | Min                                                                         | Max                                                                         | Default                                                                     | Unit                                                                        | RW       |
| 0x5C h    | 0xFFFFFFFF h                                                                | 0                                                                           | 32767                                                                       | 32767                                                                       | [1/?s]                                                                      | RW       |
| 0x5C h    | Limits of change in time [d/dt] of the target torque and target /uniFB02ux. | Limits of change in time [d/dt] of the target torque and target /uniFB02ux. | Limits of change in time [d/dt] of the target torque and target /uniFB02ux. | Limits of change in time [d/dt] of the target torque and target /uniFB02ux. | Limits of change in time [d/dt] of the target torque and target /uniFB02ux. | RW       |
| 0x5D h    | PIDOUT_UQ_UD_LIMITS                                                         | PIDOUT_UQ_UD_LIMITS                                                         | PIDOUT_UQ_UD_LIMITS                                                         | PIDOUT_UQ_UD_LIMITS                                                         | PIDOUT_UQ_UD_LIMITS                                                         |          |
| 0x5D h    | Mask                                                                        |                                                                             | Name                                                                        | Name                                                                        | Type                                                                        |          |
| 0x5D h    | 0x0000FFFF h                                                                | PIDOUT_UQ_UD_LIMITS                                                         | PIDOUT_UQ_UD_LIMITS                                                         | PIDOUT_UQ_UD_LIMITS                                                         | Unsigned                                                                    |          |
| 0x5D h    | 0x0000FFFF h                                                                | Min                                                                         | Max                                                                         | Default                                                                     | Unit                                                                        |          |
| 0x5D h    | 0x0000FFFF h                                                                | 0                                                                           | 32767                                                                       | 0                                                                           |                                                                             |          |
| 0x5E h    | PID_TORQUE_FLUX_LIMITS                                                      | PID_TORQUE_FLUX_LIMITS                                                      | PID_TORQUE_FLUX_LIMITS                                                      | PID_TORQUE_FLUX_LIMITS                                                      | PID_TORQUE_FLUX_LIMITS                                                      | RW       |
| 0x5E h    | Mask                                                                        |                                                                             | Name                                                                        | Name                                                                        | Type                                                                        |          |
| 0x5E h    | 0x0000FFFF h                                                                | PID_TORQUE_FLUX_LIMITS                                                      | PID_TORQUE_FLUX_LIMITS                                                      | PID_TORQUE_FLUX_LIMITS                                                      | Unsigned                                                                    |          |
| 0x5E h    | 0x0000FFFF h                                                                | Min                                                                         | Max                                                                         | Default                                                                     | Unit                                                                        |          |
| 0x5E h    | 0x0000FFFF h                                                                | 0                                                                           | 32767                                                                       | 0                                                                           |                                                                             |          |

<!-- image -->

| Address   | Registername            | Registername                                                                                           | Registername                                                                                           | Registername                                                                                           | Registername                                                                                           | Access   |
|-----------|-------------------------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|----------|
|           |                         | PID torque limt and PID /uniFB02ux limit, limits the target values com- ing from the target registers. | PID torque limt and PID /uniFB02ux limit, limits the target values com- ing from the target registers. | PID torque limt and PID /uniFB02ux limit, limits the target values com- ing from the target registers. | PID torque limt and PID /uniFB02ux limit, limits the target values com- ing from the target registers. |          |
| 0x5F h    | PID_ACCELERATION_LIMIT  | PID_ACCELERATION_LIMIT                                                                                 | PID_ACCELERATION_LIMIT                                                                                 | PID_ACCELERATION_LIMIT                                                                                 | PID_ACCELERATION_LIMIT                                                                                 | RW       |
| 0x5F h    | Mask                    | Name                                                                                                   | Name                                                                                                   | Name                                                                                                   | Type                                                                                                   | RW       |
| 0x5F h    | 0xFFFFFFFF h            | PID_ACCELERATION_LIMIT                                                                                 | PID_ACCELERATION_LIMIT                                                                                 | PID_ACCELERATION_LIMIT                                                                                 | Unsigned                                                                                               | RW       |
| 0x5F h    | 0xFFFFFFFF h            | Min                                                                                                    | Max                                                                                                    | Default                                                                                                | Unit                                                                                                   | RW       |
| 0x5F h    | 0xFFFFFFFF h            | 0 Acceleration                                                                                         | 4294967295 limit.                                                                                      | 0                                                                                                      |                                                                                                        | RW       |
| 0x60 h    | PID_VELOCITY_LIMIT      | PID_VELOCITY_LIMIT                                                                                     | PID_VELOCITY_LIMIT                                                                                     | PID_VELOCITY_LIMIT                                                                                     | PID_VELOCITY_LIMIT                                                                                     | RW       |
| 0x60 h    | Mask                    | Name                                                                                                   | Name                                                                                                   | Name                                                                                                   | Type                                                                                                   | RW       |
| 0x60 h    | 0xFFFFFFFF h            | PID_VELOCITY_LIMIT                                                                                     | PID_VELOCITY_LIMIT                                                                                     | PID_VELOCITY_LIMIT                                                                                     | Unsigned                                                                                               | RW       |
| 0x60 h    | 0xFFFFFFFF h            | Min                                                                                                    | Max                                                                                                    | Default                                                                                                | Unit                                                                                                   | RW       |
| 0x60 h    | 0xFFFFFFFF h            | 0                                                                                                      | 4294967295                                                                                             | 0                                                                                                      |                                                                                                        | RW       |
| 0x60 h    |                         | Velocity limit.                                                                                        | Velocity limit.                                                                                        | Velocity limit.                                                                                        | Velocity limit.                                                                                        | RW       |
| 0x60 h    | Mask                    | Name                                                                                                   | Name                                                                                                   | Name                                                                                                   | Type                                                                                                   | RW       |
| 0x60 h    | 0xFFFFFFFF h            | PID_POSITION_LIMIT_LOW                                                                                 | PID_POSITION_LIMIT_LOW                                                                                 | PID_POSITION_LIMIT_LOW                                                                                 | Signed                                                                                                 | RW       |
| 0x60 h    | 0xFFFFFFFF h            | Min                                                                                                    | Max                                                                                                    | Default                                                                                                | Unit                                                                                                   | RW       |
| 0x60 h    | 0xFFFFFFFF h            | -2147483648                                                                                            | 2147483647                                                                                             | 0                                                                                                      |                                                                                                        | RW       |
| 0x60 h    |                         | Position limit low, programmable positon barrier.                                                      | Position limit low, programmable positon barrier.                                                      | Position limit low, programmable positon barrier.                                                      | Position limit low, programmable positon barrier.                                                      | RW       |
| 0x62 h    | PID_POSITION_LIMIT_HIGH | PID_POSITION_LIMIT_HIGH                                                                                | PID_POSITION_LIMIT_HIGH                                                                                | PID_POSITION_LIMIT_HIGH                                                                                | PID_POSITION_LIMIT_HIGH                                                                                |          |
| 0x62 h    | Mask                    | Name                                                                                                   | Name                                                                                                   | Name                                                                                                   | Type                                                                                                   |          |
| 0x62 h    | 0xFFFFFFFF h            | PID_POSITION_LIMIT_HIGH                                                                                | PID_POSITION_LIMIT_HIGH                                                                                | PID_POSITION_LIMIT_HIGH                                                                                | Signed                                                                                                 |          |
| 0x62 h    | 0xFFFFFFFF h            | Min                                                                                                    | Max                                                                                                    | Default                                                                                                | Unit                                                                                                   |          |
| 0x62 h    | 0xFFFFFFFF h            | -2147483648                                                                                            | 2147483647                                                                                             | 0                                                                                                      |                                                                                                        |          |
| 0x63 h    | MODE_RAMP_MODE_MOTION   | MODE_RAMP_MODE_MOTION                                                                                  | MODE_RAMP_MODE_MOTION                                                                                  | MODE_RAMP_MODE_MOTION                                                                                  | MODE_RAMP_MODE_MOTION                                                                                  | RW       |
| 0x63 h    | Mask                    | Name                                                                                                   | Name                                                                                                   | Name                                                                                                   | Type                                                                                                   | RW       |
| 0x63 h    | 0x000000FF h            | MODE_MOTION                                                                                            | MODE_MOTION                                                                                            | MODE_MOTION                                                                                            | Choice                                                                                                 | RW       |
| 0x63 h    | 0x000000FF h            | Min                                                                                                    | Max                                                                                                    | Default                                                                                                | Unit                                                                                                   | RW       |
| 0x63 h    | 0x000000FF h            | 0                                                                                                      | 8                                                                                                      | 0                                                                                                      |                                                                                                        | RW       |
| 0x63 h    | 0x000000FF h            | 0: stopped_mode                                                                                        | 0: stopped_mode                                                                                        | 0: stopped_mode                                                                                        | 0: stopped_mode                                                                                        | RW       |
| 0x63 h    |                         | 1: torque_mode                                                                                         | 1: torque_mode                                                                                         | 1: torque_mode                                                                                         | 1: torque_mode                                                                                         | RW       |
| 0x63 h    |                         | 2: velocity_mode                                                                                       | 2: velocity_mode                                                                                       | 2: velocity_mode                                                                                       | 2: velocity_mode                                                                                       | RW       |

<!-- image -->

| Address   | Registername           | Registername                                               | Registername                                               | Registername                                               | Registername                                               |
|-----------|------------------------|------------------------------------------------------------|------------------------------------------------------------|------------------------------------------------------------|------------------------------------------------------------|
|           |                        | 4: reserved 5: reserved 6: reserved 7: reserved            | 4: reserved 5: reserved 6: reserved 7: reserved            | 4: reserved 5: reserved 6: reserved 7: reserved            | 4: reserved 5: reserved 6: reserved 7: reserved            |
|           | Mask                   | Name                                                       | Name                                                       | Name                                                       | Type                                                       |
|           | 0x0000FF00 h           | MODE_RAMP                                                  | MODE_RAMP                                                  | MODE_RAMP                                                  | Choice                                                     |
|           |                        | Min                                                        | Max                                                        | Default                                                    | Unit                                                       |
|           |                        | 0                                                          | 7                                                          | 0                                                          |                                                            |
|           |                        | 0: no velocity ramping 1: reserved 2: reserved 3: reserved | 0: no velocity ramping 1: reserved 2: reserved 3: reserved | 0: no velocity ramping 1: reserved 2: reserved 3: reserved | 0: no velocity ramping 1: reserved 2: reserved 3: reserved |
|           |                        | 4: reserved 5: reserved 6: reserved                        | 4: reserved 5: reserved 6: reserved                        | 4: reserved 5: reserved 6: reserved                        | 4: reserved 5: reserved 6: reserved                        |
|           |                        | reserved                                                   | reserved                                                   | reserved                                                   |                                                            |
|           | Mask                   |                                                            |                                                            |                                                            |                                                            |
|           | 0x0000FFFF h           |                                                            |                                                            |                                                            | Type                                                       |
|           |                        | Min                                                        | Max                                                        | Default                                                    | Unit                                                       |
|           |                        | -32768                                                     | 32767                                                      | 0                                                          |                                                            |
|           | Mask                   |                                                            | Name                                                       |                                                            | Type                                                       |
|           | 0xFFFF0000 h           | PID_TORQUE_TARGET                                          | PID_TORQUE_TARGET                                          | PID_TORQUE_TARGET                                          | Signed                                                     |
|           |                        | Min                                                        | Max                                                        | Default                                                    | Unit                                                       |
|           |                        | -32768                                                     | 32767                                                      | 0                                                          |                                                            |
| 0x65 h    | PID_TORQUE_FLUX_OFFSET | PID_TORQUE_FLUX_OFFSET                                     | PID_TORQUE_FLUX_OFFSET                                     | PID_TORQUE_FLUX_OFFSET                                     |                                                            |
|           | Mask                   | Name                                                       | Name                                                       | Name                                                       | Type                                                       |
|           | 0x0000FFFF h           | PID_FLUX_OFFSET                                            | PID_FLUX_OFFSET                                            | PID_FLUX_OFFSET                                            | Signed                                                     |
|           |                        | Min                                                        | Max                                                        | Default                                                    | Unit                                                       |
|           |                        | -32768                                                     | 32767                                                      | 0                                                          |                                                            |
|           |                        | Flux offset for feed forward control.                      | Flux offset for feed forward control.                      | Flux offset for feed forward control.                      | Flux offset for feed forward control.                      |
|           | Mask                   | Name                                                       | Name                                                       | Name                                                       | Type                                                       |
|           | 0xFFFF0000 h           | PID_TORQUE_OFFSET                                          | PID_TORQUE_OFFSET                                          | PID_TORQUE_OFFSET                                          | Signed                                                     |
|           |                        | Min                                                        | Max                                                        |                                                            | Unit                                                       |
|           |                        |                                                            |                                                            | Default                                                    |                                                            |

<!-- image -->

| Address   | Registername                                  | Registername                                  | Registername                                  | Registername                                  | Registername                                  | Access   |
|-----------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|----------|
| Address   |                                               | -32768                                        | 32767                                         | 0                                             |                                               |          |
| Address   | Torque offset for feed forward control.       | Torque offset for feed forward control.       | Torque offset for feed forward control.       | Torque offset for feed forward control.       | Torque offset for feed forward control.       |          |
| 0x66 h    | PID_VELOCITY_TARGET                           | PID_VELOCITY_TARGET                           | PID_VELOCITY_TARGET                           | PID_VELOCITY_TARGET                           | PID_VELOCITY_TARGET                           | RW       |
| 0x66 h    | Mask                                          | Name                                          | Name                                          | Name                                          | Type                                          | RW       |
| 0x66 h    | 0xFFFFFFFF h                                  | PID_VELOCITY_TARGET                           | PID_VELOCITY_TARGET                           | PID_VELOCITY_TARGET                           | Signed                                        | RW       |
| 0x66 h    | 0xFFFFFFFF h                                  | Min                                           | Max                                           | Default                                       | Unit                                          | RW       |
| 0x66 h    | 0xFFFFFFFF h                                  | -2147483648                                   | 2147483647                                    | 0                                             |                                               | RW       |
| 0x66 h    | Target velocity register (for velocity mode). | Target velocity register (for velocity mode). | Target velocity register (for velocity mode). | Target velocity register (for velocity mode). | Target velocity register (for velocity mode). | RW       |
| 0x67 h    | PID_VELOCITY_OFFSET                           | PID_VELOCITY_OFFSET                           | PID_VELOCITY_OFFSET                           | PID_VELOCITY_OFFSET                           | PID_VELOCITY_OFFSET                           | RW       |
| 0x67 h    | Mask                                          | Name                                          | Name                                          | Name                                          | Type                                          | RW       |
| 0x67 h    | 0xFFFFFFFF h                                  | PID_VELOCITY_OFFSET                           | PID_VELOCITY_OFFSET                           | PID_VELOCITY_OFFSET                           | Signed                                        | RW       |
| 0x67 h    | 0xFFFFFFFF h                                  | Min                                           | Max                                           | Default                                       | Unit                                          | RW       |
| 0x67 h    | 0xFFFFFFFF h                                  | -2147483648                                   | 2147483647                                    | 0                                             |                                               | RW       |
| 0x67 h    | 0xFFFFFFFF h                                  | Velocity offset for feed forward control.     | Velocity offset for feed forward control.     | Velocity offset for feed forward control.     | Velocity offset for feed forward control.     | RW       |
| 0x68 h    | PID_POSITION_TARGET                           | PID_POSITION_TARGET                           | PID_POSITION_TARGET                           | PID_POSITION_TARGET                           | PID_POSITION_TARGET                           | RW       |
| 0x68 h    | Mask                                          | Name                                          | Name                                          | Name                                          | Type                                          | RW       |
| 0x68 h    | 0xFFFFFFFF h                                  | PID_POSITION_TARGET                           | PID_POSITION_TARGET                           | PID_POSITION_TARGET                           | Signed                                        | RW       |
| 0x68 h    | 0xFFFFFFFF h                                  | Min                                           | Max                                           | Default                                       | Unit                                          | RW       |
| 0x68 h    | 0xFFFFFFFF h                                  | -2147483648                                   | 2147483647                                    | 0                                             |                                               | RW       |
| 0x68 h    | 0xFFFFFFFF h                                  | Target position register (for position mode). | Target position register (for position mode). | Target position register (for position mode). | Target position register (for position mode). | RW       |
| 0x69 h    | PID_TORQUE_FLUX_ACTUAL                        | PID_TORQUE_FLUX_ACTUAL                        | PID_TORQUE_FLUX_ACTUAL                        | PID_TORQUE_FLUX_ACTUAL                        | PID_TORQUE_FLUX_ACTUAL                        | R        |
| 0x69 h    | Mask                                          | Name                                          | Name                                          | Name                                          | Type                                          | R        |
| 0x69 h    | 0x0000FFFF h                                  | PID_FLUX_ACTUAL                               | PID_FLUX_ACTUAL                               | PID_FLUX_ACTUAL                               | Signed                                        | R        |
| 0x69 h    | 0x0000FFFF h                                  | Min                                           | Max                                           | Default                                       | Unit                                          | R        |
| 0x69 h    | 0x0000FFFF h                                  | -32768                                        | 32767                                         | 0                                             |                                               | R        |
| 0x69 h    | Mask                                          | Name                                          | Name                                          | Name                                          | Type                                          | R        |
| 0x69 h    | 0xFFFF0000 h                                  | PID_TORQUE_ACTUAL                             | PID_TORQUE_ACTUAL                             | PID_TORQUE_ACTUAL                             | Signed                                        | R        |
| 0x69 h    | 0xFFFF0000 h                                  | Min                                           | Max                                           | Default                                       | Unit                                          | R        |
| 0x69 h    | 0xFFFF0000 h                                  | -32768                                        | 32767                                         | 0                                             |                                               | R        |
| 0x6A h    | PID_VELOCITY_ACTUAL                           | PID_VELOCITY_ACTUAL                           | PID_VELOCITY_ACTUAL                           | PID_VELOCITY_ACTUAL                           | PID_VELOCITY_ACTUAL                           | R        |
| 0x6A h    | Mask                                          | Name                                          | Name                                          | Name                                          | Type                                          | R        |
| 0x6A h    | 0xFFFFFFFF h                                  | PID_VELOCITY_ACTUAL                           | PID_VELOCITY_ACTUAL                           | PID_VELOCITY_ACTUAL                           | Signed                                        | R        |
| 0x6A h    | 0xFFFFFFFF h                                  | Min                                           | Max                                           | Default                                       | Unit                                          | R        |

<!-- image -->

| Address   | Registername        | Registername                                                                                                                                | Registername                                                                                                                                | Registername                                                                                                                                | Registername                                                                                                                                | Access   |
|-----------|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|----------|
|           | Actual velocity.    | Actual velocity.                                                                                                                            | Actual velocity.                                                                                                                            | Actual velocity.                                                                                                                            | Actual velocity.                                                                                                                            |          |
| 0x6B h    | PID_POSITION_ACTUAL | PID_POSITION_ACTUAL                                                                                                                         | PID_POSITION_ACTUAL                                                                                                                         | PID_POSITION_ACTUAL                                                                                                                         | PID_POSITION_ACTUAL                                                                                                                         | RW       |
|           | Mask                | Name                                                                                                                                        | Name                                                                                                                                        | Name                                                                                                                                        | Type                                                                                                                                        |          |
|           | 0xFFFFFFFF h        | PID_POSITION_ACTUAL                                                                                                                         | PID_POSITION_ACTUAL                                                                                                                         | PID_POSITION_ACTUAL                                                                                                                         | Signed                                                                                                                                      |          |
|           |                     | Min                                                                                                                                         | Max                                                                                                                                         | Default                                                                                                                                     | Unit                                                                                                                                        |          |
|           |                     | -2147483648                                                                                                                                 | 2147483647                                                                                                                                  | 0                                                                                                                                           |                                                                                                                                             |          |
|           |                     | Actual multi turn position for positioning. WRITE on PID_POSITION_ACTUAL writes same value into PID_POSITION_TARGET to avoid unwanted move. | Actual multi turn position for positioning. WRITE on PID_POSITION_ACTUAL writes same value into PID_POSITION_TARGET to avoid unwanted move. | Actual multi turn position for positioning. WRITE on PID_POSITION_ACTUAL writes same value into PID_POSITION_TARGET to avoid unwanted move. | Actual multi turn position for positioning. WRITE on PID_POSITION_ACTUAL writes same value into PID_POSITION_TARGET to avoid unwanted move. | R        |
| 0x6C h    | PID_ERROR_DATA      | PID_ERROR_DATA                                                                                                                              | PID_ERROR_DATA                                                                                                                              | PID_ERROR_DATA                                                                                                                              | PID_ERROR_DATA                                                                                                                              |          |
|           | Variant 0           | Variant 0                                                                                                                                   | Variant 0                                                                                                                                   | Variant 0                                                                                                                                   | Variant 0                                                                                                                                   |          |
|           | Mask                |                                                                                                                                             | Name                                                                                                                                        |                                                                                                                                             | Type                                                                                                                                        |          |
|           | 0xFFFFFFFF h        | PID_TORQUE_ERROR                                                                                                                            | PID_TORQUE_ERROR                                                                                                                            | PID_TORQUE_ERROR                                                                                                                            | Signed                                                                                                                                      |          |
|           |                     | Min                                                                                                                                         | Max                                                                                                                                         | Default                                                                                                                                     | Unit                                                                                                                                        |          |
|           |                     | PID torque error.                                                                                                                           | PID torque error.                                                                                                                           | PID torque error.                                                                                                                           | PID torque error.                                                                                                                           |          |
|           | Variant 1           | Variant 1                                                                                                                                   | Variant 1                                                                                                                                   | Variant 1                                                                                                                                   | Variant 1                                                                                                                                   |          |
|           | Mask                | Name                                                                                                                                        | Name                                                                                                                                        | Name                                                                                                                                        | Type                                                                                                                                        |          |
|           | 0xFFFFFFFF h        | PID_FLUX_ERROR                                                                                                                              | PID_FLUX_ERROR                                                                                                                              | PID_FLUX_ERROR                                                                                                                              | Signed                                                                                                                                      |          |
|           |                     | Min                                                                                                                                         | Max                                                                                                                                         | Default                                                                                                                                     | Unit                                                                                                                                        |          |
|           |                     | -2147483648 PID /uniFB02ux error.                                                                                                           | 2147483647                                                                                                                                  | 0                                                                                                                                           |                                                                                                                                             |          |
|           | Variant 2           | Variant 2                                                                                                                                   | Variant 2                                                                                                                                   | Variant 2                                                                                                                                   | Variant 2                                                                                                                                   |          |
|           | Mask                | Name                                                                                                                                        | Name                                                                                                                                        | Name                                                                                                                                        | Type                                                                                                                                        |          |
|           | 0xFFFFFFFF h        | PID_VELOCITY_ERROR                                                                                                                          | PID_VELOCITY_ERROR                                                                                                                          | PID_VELOCITY_ERROR                                                                                                                          | Signed                                                                                                                                      |          |
|           |                     | Min                                                                                                                                         | Max                                                                                                                                         | Default                                                                                                                                     | Unit                                                                                                                                        |          |
|           |                     | -2147483648                                                                                                                                 | 2147483647                                                                                                                                  | 0                                                                                                                                           |                                                                                                                                             |          |
|           |                     | PID velocity error.                                                                                                                         | PID velocity error.                                                                                                                         | PID velocity error.                                                                                                                         | PID velocity error.                                                                                                                         |          |
|           | Variant 3           | Variant 3                                                                                                                                   | Variant 3                                                                                                                                   | Variant 3                                                                                                                                   | Variant 3                                                                                                                                   |          |
|           | Mask                | Name                                                                                                                                        | Name                                                                                                                                        | Name                                                                                                                                        | Type                                                                                                                                        |          |
|           | 0xFFFFFFFF h        | PID_POSITION_ERROR                                                                                                                          | PID_POSITION_ERROR                                                                                                                          | PID_POSITION_ERROR                                                                                                                          | Signed                                                                                                                                      |          |
|           |                     | Min                                                                                                                                         | Max                                                                                                                                         | Default                                                                                                                                     | Unit                                                                                                                                        |          |
|           |                     | -2147483648                                                                                                                                 | 2147483647                                                                                                                                  | 0                                                                                                                                           |                                                                                                                                             |          |
|           |                     | PID position error.                                                                                                                         | PID position error.                                                                                                                         | PID position error.                                                                                                                         | PID position error.                                                                                                                         |          |
|           | Variant 4           | Variant 4                                                                                                                                   | Variant 4                                                                                                                                   | Variant 4                                                                                                                                   | Variant 4                                                                                                                                   |          |

<!-- image -->

| Address   | Registername   | Registername              | Registername              | Registername              | Registername   | Access   |
|-----------|----------------|---------------------------|---------------------------|---------------------------|----------------|----------|
|           | Mask           | Name                      | Name                      | Name                      | Type           |          |
|           | 0xFFFFFFFF h   | PID_TORQUE_ERROR_SUM      | PID_TORQUE_ERROR_SUM      | PID_TORQUE_ERROR_SUM      | Signed         |          |
|           | 0xFFFFFFFF h   | Min                       | Max                       | Default                   | Unit           |          |
|           | 0xFFFFFFFF h   | -2147483648               | 2147483647                | 0                         |                |          |
|           | 0xFFFFFFFF h   | PID torque error.         | PID torque error.         | PID torque error.         |                |          |
|           | Variant 5      | Variant 5                 | Variant 5                 | Variant 5                 |                |          |
|           | Mask           | Name                      | Name                      | Name                      | Type           |          |
|           | 0xFFFFFFFF h   | PID_FLUX_ERROR_SUM        | PID_FLUX_ERROR_SUM        | PID_FLUX_ERROR_SUM        | Signed         |          |
|           | 0xFFFFFFFF h   | Min                       | Max                       | Default                   | Unit           |          |
|           | 0xFFFFFFFF h   | -2147483648               | 2147483647                | 0                         |                |          |
|           | 0xFFFFFFFF h   | PID /uniFB02ux error sum. | PID /uniFB02ux error sum. | PID /uniFB02ux error sum. |                |          |
|           | Variant 6      | Variant 6                 | Variant 6                 | Variant 6                 |                |          |
|           | Mask           | Name                      | Name                      | Name                      | Type           |          |
|           | 0xFFFFFFFF h   | PID_VELOCITY_ERROR_SUM    | PID_VELOCITY_ERROR_SUM    | PID_VELOCITY_ERROR_SUM    | Signed         |          |
|           | 0xFFFFFFFF h   | Min                       | Max                       | Default                   | Unit           |          |
|           | 0xFFFFFFFF h   | -2147483648               | 2147483647                | 0                         |                |          |
|           | 0xFFFFFFFF h   | PID velocity error sum.   | PID velocity error sum.   | PID velocity error sum.   |                |          |
|           | Variant 7      | Variant 7                 | Variant 7                 | Variant 7                 |                |          |
|           | Mask           | Name                      | Name                      | Name                      | Type           |          |
|           | 0xFFFFFFFF h   | PID_POSITION_ERROR_SUM    | PID_POSITION_ERROR_SUM    | PID_POSITION_ERROR_SUM    | Signed         |          |
|           | 0xFFFFFFFF h   | Min                       | Max                       | Default                   | Unit           |          |
|           | 0xFFFFFFFF h   | -2147483648               | 2147483647                | 0                         |                |          |
|           | 0xFFFFFFFF h   | PID position error sum.   | PID position error sum.   | PID position error sum.   |                |          |
| 0x6D h    | PID_ERROR_ADDR | PID_ERROR_ADDR            | PID_ERROR_ADDR            | PID_ERROR_ADDR            |                | RW       |
| 0x6D h    | Mask           | Name                      | Name                      | Name                      | Type           | RW       |
| 0x6D h    | 0x000000FF h   | PID_ERROR_ADDR            | PID_ERROR_ADDR            | PID_ERROR_ADDR            | Choice         | RW       |
| 0x6D h    | 0x000000FF h   | Min                       | Max                       | Default                   | Unit           | RW       |
| 0x6D h    | 0x000000FF h   | 0                         | 7                         | 0                         |                | RW       |
| 0x6D h    | 0x000000FF h   | 0: PID_TORQUE_ERROR       | 0: PID_TORQUE_ERROR       | 0: PID_TORQUE_ERROR       |                | RW       |
| 0x6D h    |                | 1: PID_FLUX_ERROR         | 1: PID_FLUX_ERROR         | 1: PID_FLUX_ERROR         |                | RW       |
| 0x6D h    |                | 2: PID_VELOCITY_ERROR     | 2: PID_VELOCITY_ERROR     | 2: PID_VELOCITY_ERROR     |                | RW       |
| 0x6D h    |                | 3: PID_POSITION_ERROR     | 3: PID_POSITION_ERROR     | 3: PID_POSITION_ERROR     |                | RW       |
| 0x6D h    |                | 5: PID_FLUX_ERROR_SUM     | 5: PID_FLUX_ERROR_SUM     | 5: PID_FLUX_ERROR_SUM     |                | RW       |
| 0x6D h    |                | 6: PID_VELOCITY_ERROR_SUM | 6: PID_VELOCITY_ERROR_SUM | 6: PID_VELOCITY_ERROR_SUM |                | RW       |

<!-- image -->

| Address   |                        |                        | Registername              |                        |                        | Access   |
|-----------|------------------------|------------------------|---------------------------|------------------------|------------------------|----------|
|           | PID_POSITION_ERROR_SUM | PID_POSITION_ERROR_SUM | PID_POSITION_ERROR_SUM    | PID_POSITION_ERROR_SUM | PID_POSITION_ERROR_SUM |          |
| 0x6E h    | INTERIM_DATA           | INTERIM_DATA           | INTERIM_DATA              | INTERIM_DATA           | INTERIM_DATA           | RW       |
|           | Mask                   |                        | Name                      |                        | Type                   |          |
|           | 0xFFFFFFFF h           | PIDIN_TARGET_TORQUE    | PIDIN_TARGET_TORQUE       | PIDIN_TARGET_TORQUE    | Signed                 |          |
|           |                        | Min                    | Max                       | Default                | Unit                   |          |
|           |                        | -2147483648            |                           |                        |                        |          |
|           |                        |                        | 2147483647                | 0                      |                        |          |
|           |                        | PIDIN target           | torque.                   |                        |                        |          |
|           | Mask                   | Name                   | Name                      | Name                   | Type                   |          |
|           | 0xFFFFFFFF h           | Min                    | Max                       | Default                | Unit                   |          |
|           |                        | -2147483648            |                           | 0                      |                        |          |
|           |                        | PIDIN target           |                           |                        |                        |          |
|           |                        |                        | 2147483647                |                        |                        |          |
|           |                        | /uniFB02ux. Variant 2  | /uniFB02ux. Variant 2     | /uniFB02ux. Variant 2  |                        |          |
|           | Mask                   |                        | Name                      |                        | Type                   |          |
|           | 0xFFFFFFFF h           | Min                    | PIDIN_TARGET_VELOCITY Max | Default                | Signed Unit            |          |
|           |                        |                        |                           | 0                      |                        |          |
|           |                        | -2147483648            |                           |                        |                        |          |
|           |                        | PIDIN target           | 2147483647                |                        |                        |          |
|           |                        | velocity. Variant 3    | velocity. Variant 3       | velocity. Variant 3    |                        |          |
|           | Mask                   | Name                   |                           |                        | Type                   |          |
|           | 0xFFFFFFFF h           | PIDIN_TARGET_POSITION  | PIDIN_TARGET_POSITION     | PIDIN_TARGET_POSITION  | Signed                 |          |
|           |                        | Min                    | Max                       | Default                | Unit                   |          |
|           |                        | -2147483648            | 2147483647                | 0                      |                        |          |
|           |                        | PIDIN target           |                           |                        |                        |          |
|           |                        | position. Variant 4    | position. Variant 4       | position. Variant 4    | position. Variant 4    |          |
|           | Mask                   |                        |                           |                        |                        |          |
|           |                        | Name                   | Name                      | Name                   | Type                   |          |
|           | 0xFFFFFFFF h           | PIDOUT_TARGET_TORQUE   | PIDOUT_TARGET_TORQUE      | PIDOUT_TARGET_TORQUE   | Signed                 |          |
|           |                        | Min                    | Max                       | Default                | Unit                   |          |
|           |                        | -2147483648            | 2147483647                | 0                      |                        |          |
|           |                        | PIDOUT target          |                           |                        |                        |          |
|           |                        |                        | torque.                   |                        |                        |          |
|           | Variant 5              | Variant 5              | Variant 5                 | Variant 5              | Variant 5              |          |
|           | Mask                   | Name                   | Name                      | Name                   | Type                   |          |
|           | h                      |                        |                           |                        | Signed                 |          |
|           | 0xFFFFFFFF             | PIDOUT_TARGET_FLUX     | PIDOUT_TARGET_FLUX        | PIDOUT_TARGET_FLUX     |                        |          |

<!-- image -->

| Address   |                                   |                    | Registername   |         | Access   |       |
|-----------|-----------------------------------|--------------------|----------------|---------|----------|-------|
|           | Min                               |                    | Max            | Default | Unit     |       |
|           |                                   | -2147483648        | 2147483647     | 0       |          |       |
|           | PIDOUT                            | target /uniFB02ux. |                |         |          |       |
|           |                                   |                    | Variant 6      |         |          |       |
|           | Mask                              | Name               |                |         |          |       |
|           | 0xFFFFFFFF h                      |                    |                |         | Type     |       |
|           | PIDOUT_TARGET_VELOCITY            |                    | Max            | Default | Unit     |       |
|           | Min                               | -2147483648        | 2147483647     | 0       |          |       |
|           | Variant 7                         |                    |                |         |          |       |
|           | Mask                              | Name               |                |         | Type     |       |
|           | PIDOUT_TARGET_POSITION            |                    |                |         | Signed   |       |
|           | Min                               |                    | Max            | Default | Unit     |       |
|           | -2147483648                       |                    | 2147483647     | 0       |          |       |
|           | PIDOUT target position. Variant 8 |                    |                |         |          |       |
|           | Mask                              |                    | Name           |         | Type     |       |
|           |                                   |                    | FOC_IUX        |         | Signed   |       |
|           | Min                               |                    | Max            | Default | Unit     |       |
|           |                                   | -32768             | 32767          | 0       |          |       |
|           | Mask                              | Name               |                |         | Type     |       |
|           | 0xFFFF0000 h                      |                    | FOC_IWY        |         | Signed   |       |
|           | Min                               |                    |                | Default | Unit     |       |
|           |                                   | -32768             | Max            |         |          |       |
|           | Variant 9                         |                    |                |         |          |       |
|           | Mask                              |                    | Name           |         | Type     |       |
|           | 0x0000FFFF h                      |                    | FOC_IV         |         | Signed   |       |
|           | Min                               |                    | Max            | Default | Unit     |       |
|           |                                   | -32768             | 32767          | 0       |          |       |
|           | Variant 10 Mask                   |                    | Name           |         |          |       |
|           | 0x0000FFFF h                      |                    | FOC_IA         |         | Type     |       |
|           |                                   | Min                |                |         | Signed   |       |
|           |                                   | -32768             | Max            | Default |          |       |
|           |                                   |                    | Name           |         | Type     |       |
|           | Mask                              |                    |                |         |          |       |
|           |                                   |                    |                | 0       |          | 32767 |

<!-- image -->

| Address   | Registername   | Registername   | Registername   | Registername   | Registername   | Access   |
|-----------|----------------|----------------|----------------|----------------|----------------|----------|
|           | 0xFFFF0000 h   | FOC_IB         | FOC_IB         | FOC_IB         | Signed         |          |
|           |                | Min            | Max            | Default        | Unit           |          |
|           |                | -32768         | 32767          | 0              |                |          |
|           | Variant 11     | Variant 11     | Variant 11     | Variant 11     | Variant 11     |          |
|           | Mask           |                | Name           |                | Type           |          |
|           | 0x0000FFFF h   |                | FOC_ID         |                | Signed         |          |
|           |                | Min            | Max            | Default        | Unit           |          |
|           |                | -32768         | 32767          | 0              |                |          |
|           | Mask           |                | Name           |                | Type           |          |
|           | 0xFFFF0000 h   |                | FOC_IQ         |                | Signed         |          |
|           |                | Min            | Max            | Default        | Unit           |          |
|           |                | -32768         | 32767          | 0              |                |          |
|           |                |                | Variant 12     |                |                |          |
|           | Mask           |                | Name           |                | Type           |          |
|           | 0x0000FFFF h   |                | FOC_UD         |                | Signed         |          |
|           |                | Min            | Max            | Default        | Unit           |          |
|           |                | -32768         | 32767          | 0              |                |          |
|           | Mask           |                | Name           |                | Type           |          |
|           | 0xFFFF0000 h   |                | FOC_UQ         |                | Signed         |          |
|           |                | Min            | Max            | Default        | Unit           |          |
|           |                | -32768         | 32767          | 0              |                |          |
|           |                |                | Variant 13     |                |                |          |
|           | Mask           |                | Name           |                | Type           |          |
|           | 0x0000FFFF h   |                | FOC_UD_LIMITED |                | Signed         |          |
|           |                | Min            | Max            | Default        | Unit           |          |
|           |                | -32768         | 32767          | 0              |                |          |
|           | Mask           |                | Name           |                | Type           |          |
|           | 0xFFFF0000 h   |                | FOC_UQ_LIMITED |                | Signed         |          |
|           |                | Min            | Max            | Default        | Unit           |          |
|           |                | -32768         |                |                |                |          |
|           |                |                | 32767          | 0              |                |          |
|           |                |                | Variant 14     |                |                |          |
|           | Mask           |                | Name           |                | Type           |          |
|           | 0x0000FFFF h   |                | FOC_UA         |                | Signed         |          |
|           |                | Min -32768     | Max 32767      | Default 0      | Unit           |          |

<!-- image -->

| Address   | Registername   | Registername   | Registername   | Registername   | Access   |
|-----------|----------------|----------------|----------------|----------------|----------|
|           | Mask           |                | Name           | Type           |          |
|           | 0xFFFF0000 h   | FOC_UB         | FOC_UB         | Signed         |          |
|           |                | Min Max        | Default        | Unit           |          |
|           |                | -32768         | 32767 0        |                |          |
|           | Variant 15     | Variant 15     | Variant 15     | Variant 15     |          |
|           | Mask           |                | Name           | Type           |          |
|           | 0x0000FFFF h   |                | FOC_UUX        | Signed         |          |
|           |                | Min            | Max Default    | Unit           |          |
|           |                | -32768         | 32767 0        |                |          |
|           | Mask           |                | Name           | Type           |          |
|           | 0xFFFF0000 h   |                | FOC_UWY        | Signed         |          |
|           |                | Min            | Max Default    | Unit           |          |
|           |                | -32768         | 32767 0        |                |          |
|           | Variant 16     | Variant 16     | Variant 16     | Variant 16     |          |
|           | Mask           |                | Name           | Type           |          |
|           | 0x0000FFFF h   |                | FOC_UV         | Signed         |          |
|           |                | Min            | Max Default    | Unit           |          |
|           |                | -32768         | 32767 0        |                |          |
|           | Variant 17     | Variant 17     | Variant 17     | Variant 17     |          |
|           | Mask           |                | Name           | Type           |          |
|           | 0x0000FFFF h   |                | PWM_UX         | Signed         |          |
|           |                | Min            | Max Default    | Unit           |          |
|           |                | -32768         | 32767 0        |                |          |
|           | Mask           |                | Name           | Type           |          |
|           | 0xFFFF0000 h   |                | PWM_WY         | Signed         |          |
|           | Min            | -32768         | Max Default    | Unit           |          |
|           |                |                | 32767 0        |                |          |
|           | Variant 18     | Variant 18     | Variant 18     | Variant 18     |          |
|           | Mask           |                | Name           | Type           |          |
|           | 0x0000FFFF h   |                | PWM_V          | Signed         |          |
|           |                | Min            | Max Default    | Unit           |          |
|           | -32768         | 32767          | 0              |                |          |
|           | Variant 19     | Variant 19     | Variant 19     | Variant 19     |          |
|           | Mask           |                | Name           | Type           |          |
|           | 0x0000FFFF h   |                | ADC_I_0        | Signed         |          |

<!-- image -->

|                  |               | Registername   |         |        |
|------------------|---------------|----------------|---------|--------|
|                  | Min           | Max            | Default | Unit   |
|                  | -32768        | 32767          | 0       |        |
| Mask             | Name          |                |         | Type   |
| 0xFFFF0000 h     | ADC_I_1       |                |         | Signed |
|                  | Min           | Max            | Default | Unit   |
|                  | -32768        | 32767          | 0       |        |
| Mask             | Name          |                |         | Type   |
| 0x0000FFFF h     | DEBUG_VALUE_0 |                |         | Signed |
|                  | Min           | Max            | Default | Unit   |
|                  | -32768        | 32767          | 0       |        |
| Mask             | Name          |                |         | Type   |
|                  | DEBUG_VALUE_1 |                |         | Signed |
| 0xFFFF0000 h Min |               | Max            | Default | Unit   |
|                  | -32768        | 32767          | 0       |        |
| Variant 193      |               |                |         | Type   |
| Mask             | Name          |                |         |        |
| 0x0000FFFF h     | DEBUG_VALUE_2 |                |         | Signed |
| Min              |               | Max            | Default | Unit   |
| -32768           |               | 32767          | 0       |        |
| Mask             | Name          |                |         | Type   |
| 0xFFFF0000 h     | DEBUG_VALUE_3 |                |         | Signed |
| Min              |               | Max            | Default | Unit   |
|                  | -32768        | 32767          | 0       |        |
| Variant 194      |               |                |         |        |
| Mask             | Name          |                |         | Type   |
| 0x0000FFFF h     | DEBUG_VALUE_4 |                |         | Signed |
| Min              |               | Max            | Default | Unit   |
|                  | 32767         |                | 0       |        |
| Mask             | Name          |                |         | Type   |
|                  |               |                |         | Signed |
| 0xFFFF0000 h     | DEBUG_VALUE_5 |                |         |        |
| Min              |               | Max            | Default | Unit   |
| -32768           |               | 32767          | 0       |        |
|                  | Variant       | 195            |         | Type   |
|                  |               | Name           |         |        |
| Mask             |               |                |         |        |

<!-- image -->

| Address   | Registername   | Registername   | Registername   | Registername   | Registername   | Access   |
|-----------|----------------|----------------|----------------|----------------|----------------|----------|
|           | 0x0000FFFF h   | DEBUG_VALUE_6  | DEBUG_VALUE_6  | DEBUG_VALUE_6  | Signed         |          |
|           | 0x0000FFFF h   | Min            | Max            | Default        | Unit           |          |
|           | 0x0000FFFF h   | -32768         | 32767          | 0              |                |          |
|           | Mask           |                | Name           |                | Type           |          |
|           | 0xFFFF0000 h   | DEBUG_VALUE_7  |                |                | Signed         |          |
|           | 0xFFFF0000 h   | Min            | Max            | Default        | Unit           |          |
|           | 0xFFFF0000 h   | -32768         | 32767          | 0              |                |          |
|           |                |                | Variant 196    |                |                |          |
|           | Mask           |                | Name           |                | Type           |          |
|           | 0x0000FFFF h   |                | DEBUG_VALUE_8  |                | Unsigned       |          |
|           | 0x0000FFFF h   | Min            | Max            | Default        | Unit           |          |
|           | 0x0000FFFF h   | 0              | 65535          | 0              |                |          |
|           | Mask           |                | Name           |                | Type           |          |
|           | 0xFFFF0000 h   |                | DEBUG_VALUE_9  |                | Unsigned       |          |
|           | 0xFFFF0000 h   | Min            | Max            | Default        | Unit           |          |
|           | 0xFFFF0000 h   | 0              | 65535          | 0              |                |          |
|           |                |                | Variant 197    |                |                |          |
|           | Mask           |                | Name           |                | Type           |          |
|           | 0x0000FFFF h   |                | DEBUG_VALUE_10 |                | Unsigned       |          |
|           | 0x0000FFFF h   | Min            | Max            | Default        | Unit           |          |
|           | 0x0000FFFF h   | 0              | 65535          | 0              |                |          |
|           | Mask           |                | Name           |                | Type           |          |
|           | 0xFFFF0000 h   |                | DEBUG_VALUE_11 |                | Unsigned       |          |
|           |                | Min            | Max            | Default        | Unit           |          |
|           |                | 0              | 65535          | 0              |                |          |
|           |                |                | Variant 198    |                |                |          |
|           | Mask           |                | Name           |                | Type           |          |
|           | 0x0000FFFF h   |                | DEBUG_VALUE_12 |                | Unsigned       |          |
|           | 0x0000FFFF h   | Min            | Max            | Default        | Unit           |          |
|           | 0x0000FFFF h   | 0              | 65535          | 0              |                |          |
|           | Mask           |                | Name           |                | Type           |          |
|           | 0xFFFF0000 h   |                |                |                | Unsigned       |          |
|           |                |                | DEBUG_VALUE_13 |                |                |          |
|           |                | Min            | Max            | Default        | Unit           |          |
|           |                | 0              | 65535          | 0              |                |          |
|           |                |                | Variant 199    |                |                |          |

<!-- image -->

| Address   | Registername   | Registername                                | Registername                                | Registername                                | Registername                                | Access   |
|-----------|----------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------|----------|
|           | Mask           | Name                                        | Name                                        | Name                                        | Type                                        |          |
|           | 0x0000FFFF h   | DEBUG_VALUE_14                              | DEBUG_VALUE_14                              | DEBUG_VALUE_14                              | Unsigned                                    |          |
|           |                | Min                                         | Max                                         | Default                                     | Unit                                        |          |
|           |                | 0                                           | 65535                                       | 0                                           |                                             |          |
|           | Mask           |                                             | Name                                        |                                             | Type                                        |          |
|           | 0xFFFF0000 h   |                                             | DEBUG_VALUE_15                              |                                             | Unsigned                                    |          |
|           |                | Min                                         | Max                                         | Default                                     | Unit                                        |          |
|           |                | 0                                           | 65535                                       | 0                                           |                                             |          |
|           |                |                                             | Variant 200                                 |                                             |                                             |          |
|           | Mask           |                                             | Name                                        |                                             | Type                                        |          |
|           | 0xFFFFFFFF h   |                                             | DEBUG_VALUE_16                              |                                             | Signed                                      |          |
|           |                | Min                                         | Max                                         | Default                                     | Unit                                        |          |
|           |                | -2147483648                                 | 2147483647                                  | 0                                           |                                             |          |
|           |                |                                             | Variant 201                                 |                                             |                                             |          |
|           | Mask           |                                             | Name                                        |                                             | Type                                        |          |
|           | 0xFFFFFFFF h   |                                             | DEBUG_VALUE_17                              |                                             | Signed                                      |          |
|           |                | Min                                         | Max                                         | Default                                     | Unit                                        |          |
|           |                | -2147483648                                 | 2147483647                                  | 0                                           |                                             |          |
|           |                |                                             | Variant 202                                 |                                             |                                             |          |
|           | Mask           |                                             | Name                                        |                                             | Type                                        |          |
|           | 0xFFFFFFFF h   |                                             | DEBUG_VALUE_18                              |                                             | Signed                                      |          |
|           |                | Min                                         | Max                                         | Default                                     | Unit                                        |          |
|           |                | -2147483648                                 | 2147483647                                  | 0                                           |                                             |          |
|           |                |                                             | Variant 203                                 |                                             |                                             |          |
|           | Mask           |                                             | Name                                        |                                             | Type                                        |          |
|           | 0xFFFFFFFF h   |                                             | DEBUG_VALUE_19                              |                                             | Signed                                      |          |
|           |                | Min                                         | Max                                         | Default                                     | Unit                                        |          |
|           |                | -2147483648                                 | 2147483647                                  | 0                                           |                                             |          |
| 0x6F h    | INTERIM_ADDR   | INTERIM_ADDR                                | INTERIM_ADDR                                | INTERIM_ADDR                                | INTERIM_ADDR                                | RW       |
|           | Mask           |                                             | Name                                        |                                             | Type                                        |          |
|           | 0x000000FF h   |                                             | INTERIM_ADDR                                |                                             | Choice                                      |          |
|           |                | Min                                         | Max                                         | Default                                     | Unit                                        |          |
|           |                | 0                                           | 203                                         | 0                                           |                                             |          |
|           |                | 0: PIDIN_TARGET_TORQUE 1: PIDIN_TARGET_FLUX | 0: PIDIN_TARGET_TORQUE 1: PIDIN_TARGET_FLUX | 0: PIDIN_TARGET_TORQUE 1: PIDIN_TARGET_FLUX | 0: PIDIN_TARGET_TORQUE 1: PIDIN_TARGET_FLUX |          |

<!-- image -->

| Address   | Registername                      | Registername                      | Registername                      | Registername                      | Access   |
|-----------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|----------|
| 0x75 h    | 203: DEBUG_VALUE_19 ADC_VM_LIMITS | 203: DEBUG_VALUE_19 ADC_VM_LIMITS | 203: DEBUG_VALUE_19 ADC_VM_LIMITS | 203: DEBUG_VALUE_19 ADC_VM_LIMITS | RW       |
|           | Mask 0x0000FFFF h                 | Name Type                         | ADC_VM_LIMIT_LOW                  | Name Type                         | Unsigned |
|           |                                   | Min                               | Max                               | Default                           | Unit     |
|           |                                   | 0                                 | 65535                             | 0                                 |          |

<!-- image -->

| Address   | Registername       |                                                |                   |         |               | Access   |
|-----------|--------------------|------------------------------------------------|-------------------|---------|---------------|----------|
|           |                    | Low limit for brake chopper output BRAKE_OUT.  |                   |         |               |          |
|           | Mask               | Name                                           | ADC_VM_LIMIT_HIGH |         | Type Unsigned |          |
|           | 0xFFFF0000 h       | Min                                            | Max               | Default | Unit          |          |
|           |                    | 0                                              | 65535             |         |               |          |
|           |                    | High limit for brake chopper output BRAKE_OUT. |                   | 0       |               |          |
| 0x76 h    | TMC4670_INPUTS_RAW |                                                |                   |         |               | R        |
|           | Mask               | Name                                           |                   |         | Type          |          |
|           | 0x00000001 h       | TMC4670_INPUTS_RAW[0]                          |                   |         | Bool          |          |
|           |                    | Min                                            | Max               | Default | Unit          |          |
|           |                    | 0                                              | 1                 | 0       |               |          |
|           | Mask               | 1: on                                          |                   |         |               |          |
|           |                    | Name                                           |                   |         | Type          |          |
|           |                    | TMC4670_INPUTS_RAW[1]                          |                   |         | Bool          |          |
|           | 0x00000002 h       |                                                | Max               | Default | Unit          |          |
|           |                    | Min                                            |                   |         |               |          |
|           |                    | 0 B of ABN_RAW                                 | 1                 | 0       |               |          |
|           | 0:                 | off on                                         |                   |         |               |          |
|           |                    | 1:                                             |                   |         |               |          |
|           | Mask               | Name                                           |                   |         | Type          |          |
|           | 0x00000004 h       | Min                                            | Max               | Default | Unit          |          |
|           |                    | 1: on                                          |                   |         |               |          |
|           |                    |                                                |                   |         | Type          |          |
|           | Mask               | Name                                           |                   |         |               |          |
|           | 0x00000008 h       | TMC4670_INPUTS_RAW[3]                          |                   |         | Bool          |          |
|           |                    | Min                                            | Max               | Default | Unit          |          |
|           |                    | 0                                              | 1                 | 0       |               |          |
|           |                    | -                                              |                   |         |               |          |
|           |                    | 0: off                                         |                   |         |               |          |
|           |                    | 1: on                                          |                   |         |               |          |

<!-- image -->

| Address   | Registername   | Registername              | Registername          | Registername          | Registername   | Access   |
|-----------|----------------|---------------------------|-----------------------|-----------------------|----------------|----------|
|           | Mask           | Name                      | Name                  | Name                  | Type           |          |
|           | 0x00000010 h   | TMC4670_INPUTS_RAW[4]     | TMC4670_INPUTS_RAW[4] | TMC4670_INPUTS_RAW[4] | Bool           |          |
|           |                | Min                       | Max                   | Default               | Unit           |          |
|           |                | 0                         | 1                     | 0                     |                |          |
|           |                | A of ABN_2_RAW            | A of ABN_2_RAW        | A of ABN_2_RAW        |                |          |
|           |                | 0: off                    | 0: off                | 0: off                |                |          |
|           |                | 1: on                     | 1: on                 | 1: on                 |                |          |
|           | Mask           | Name                      | Name                  | Name                  | Type           |          |
|           | 0x00000020 h   | TMC4670_INPUTS_RAW[5]     | TMC4670_INPUTS_RAW[5] | TMC4670_INPUTS_RAW[5] | Bool           |          |
|           |                | Min                       | Max                   | Default               | Unit           |          |
|           |                | 0                         | 1                     | 0                     |                |          |
|           |                | B of ABN_2_RAW            | B of ABN_2_RAW        | B of ABN_2_RAW        |                |          |
|           |                | 0: off                    | 0: off                | 0: off                |                |          |
|           |                | 1: on                     | 1: on                 | 1: on                 |                |          |
|           | Mask           | Name                      | Name                  | Name                  | Type           |          |
|           | 0x00000040 h   | TMC4670_INPUTS_RAW[6]     | TMC4670_INPUTS_RAW[6] | TMC4670_INPUTS_RAW[6] | Bool           |          |
|           |                | Min                       | Max                   | Default               | Unit           |          |
|           |                | 0                         | 1                     | 0                     |                |          |
|           |                | N of ABN_2_RAW            | N of ABN_2_RAW        | N of ABN_2_RAW        |                |          |
|           |                | 0:                        | 0:                    | 0:                    |                |          |
|           |                | off                       | off                   | off                   |                |          |
|           |                | on                        | on                    | on                    |                |          |
|           |                | 1:                        | 1:                    | 1:                    |                |          |
|           | Mask           | Name                      | Name                  | Name                  | Type           |          |
|           | 0x00000080 h   | TMC4670_INPUTS_RAW[7] Min | Max                   | Default               | Bool Unit      |          |
|           |                | 0                         | 1                     | 0                     |                |          |
|           |                | -                         | -                     | -                     |                |          |
|           |                | 0: off                    | 0: off                | 0: off                |                |          |
|           |                | 1: on                     | 1: on                 | 1: on                 |                |          |
|           | Mask           | Name                      | Name                  | Name                  | Type           |          |
|           | 0x00000100 h   | TMC4670_INPUTS_RAW[8]     | TMC4670_INPUTS_RAW[8] | TMC4670_INPUTS_RAW[8] | Bool           |          |
|           |                | Min                       | Max                   | Default               | Unit           |          |
|           |                | 0                         | 1                     | 0                     |                |          |
|           |                | HALL_UX of HALL_RAW       | HALL_UX of HALL_RAW   | HALL_UX of HALL_RAW   |                |          |
|           |                | 0: off                    | 0: off                | 0: off                |                |          |
|           |                | 1: on                     | 1: on                 | 1: on                 |                |          |

<!-- image -->

| Address   | Registername   | Registername              | Registername              | Registername              | Registername   | Access   |
|-----------|----------------|---------------------------|---------------------------|---------------------------|----------------|----------|
|           | Mask           | Name                      | Name                      | Name                      | Type           |          |
|           | 0x00000200 h   | TMC4670_INPUTS_RAW[9]     | TMC4670_INPUTS_RAW[9]     | TMC4670_INPUTS_RAW[9]     | Bool           |          |
|           | 0x00000200 h   | Min                       | Max                       | Default                   | Unit           |          |
|           | 0x00000200 h   | 0                         | 1                         | 0                         |                |          |
|           | 0x00000200 h   | HALL_V of HALL_RAW 0: off | HALL_V of HALL_RAW 0: off | HALL_V of HALL_RAW 0: off |                |          |
|           | Mask           | Name                      | Name                      | Name                      | Type           |          |
|           | 0x00000400 h   | TMC4670_INPUTS_RAW[10]    | TMC4670_INPUTS_RAW[10]    | TMC4670_INPUTS_RAW[10]    | Bool           |          |
|           | 0x00000400 h   | Min                       | Max                       | Default                   | Unit           |          |
|           | 0x00000400 h   | 0                         | 1                         | 0                         |                |          |
|           | 0x00000400 h   | HALL_WY of HALL_RAW       | HALL_WY of HALL_RAW       | HALL_WY of HALL_RAW       |                |          |
|           | Mask           | Name                      | Name                      | Name                      | Type           |          |
|           | 0x00000800 h   | TMC4670_INPUTS_RAW[11]    | TMC4670_INPUTS_RAW[11]    | TMC4670_INPUTS_RAW[11]    | Bool           |          |
|           | 0x00000800 h   | Min                       | Max                       | Default                   | Unit           |          |
|           | 0x00000800 h   | 0                         | 1                         | 0                         |                |          |
|           | 0x00000800 h   | 0: off                    | 0: off                    | 0: off                    |                |          |
|           | Mask           | Name                      | Name                      | Name                      | Type           |          |
|           | 0x00001000 h   | TMC4670_INPUTS_RAW[12]    | TMC4670_INPUTS_RAW[12]    | TMC4670_INPUTS_RAW[12]    | Bool           |          |
|           | 0x00001000 h   | Min                       | Max                       | Default                   | Unit           |          |
|           | 0x00001000 h   | 0 0: off                  | 1                         | 0                         |                |          |
|           | 0x00001000 h   | REF_SW_R_RAW 1: on        | REF_SW_R_RAW 1: on        | REF_SW_R_RAW 1: on        | Type           |          |
|           | Mask           | Name                      | Name                      | Name                      |                |          |
|           | 0x00002000 h   | TMC4670_INPUTS_RAW[13]    | TMC4670_INPUTS_RAW[13]    | TMC4670_INPUTS_RAW[13]    | Bool           |          |
|           |                | Min                       | Max                       | Default                   | Unit           |          |
|           |                | 0                         | 1                         | 0                         |                |          |
|           |                | REF_SW_H_RAW              | REF_SW_H_RAW              | REF_SW_H_RAW              |                |          |
|           |                | 0: off                    | 0: off                    | 0: off                    |                |          |
|           |                | 1: on                     | 1: on                     | 1: on                     |                |          |

<!-- image -->

| Registername   |                            |     |         |           |
|----------------|----------------------------|-----|---------|-----------|
| Mask           | Name                       |     |         | Type      |
| 0x00004000 h   | TMC4670_INPUTS_RAW[14]     |     |         | Bool      |
|                | Min                        | Max | Default | Unit      |
|                | 0                          | 1   | 0       |           |
|                | REF_SW_L_RAW 0: off 1: on  |     |         |           |
| Mask           | Name                       |     |         | Type      |
| 0x00008000 h   | TMC4670_INPUTS_RAW[15]     |     |         | Bool      |
|                | Min                        | Max | Default | Unit      |
|                | 0                          | 1   | 0       |           |
|                | ENABLE_IN_RAW              |     |         |           |
|                | 0: off                     |     |         |           |
|                | 1: on                      |     |         |           |
| Mask           | Name                       |     |         | Type      |
| 0x00010000 h   | TMC4670_INPUTS_RAW[16]     |     |         | Bool      |
|                | Min                        | Max | Default | Unit      |
|                | 0                          | 1   | 0       |           |
|                | STP of DIRSTP_RAW          |     |         |           |
|                | 0: off                     |     |         |           |
|                | 1: on                      |     |         |           |
| Mask           | Name                       |     |         | Type      |
| 0x00020000 h   | TMC4670_INPUTS_RAW[17] Min | Max | Default | Bool Unit |
|                | 0                          | 1   | 0       |           |
|                | DIR of DIRSTP_RAW          |     |         |           |
|                | 0: off                     |     |         |           |
|                | 1:                         |     |         |           |
|                | on                         |     |         |           |
| Mask           |                            |     |         |           |
|                | Name                       |     |         | Type      |
| 0x00040000 h   | TMC4670_INPUTS_RAW[18]     |     |         | Bool      |
|                | Min                        | Max | Default | Unit      |
|                | 0                          | 1   | 0       |           |
|                | PWM_IN_RAW                 |     |         |           |
|                | 0: off                     |     |         |           |
|                | 1: on                      |     |         |           |

<!-- image -->

| Address   | Registername   | Registername            | Registername            | Registername            | Registername   | Access   |
|-----------|----------------|-------------------------|-------------------------|-------------------------|----------------|----------|
|           | Mask           | Name                    | Name                    | Name                    | Type           |          |
|           | 0x00080000 h   | TMC4670_INPUTS_RAW[19]  | TMC4670_INPUTS_RAW[19]  | TMC4670_INPUTS_RAW[19]  | Bool           |          |
|           |                | Min                     | Max                     | Default                 | Unit           |          |
|           |                | 0 - 0: off              | 1                       | 0                       |                |          |
|           | Mask           | Name                    | Name                    | Name                    | Type           |          |
|           | 0x00100000 h   | TMC4670_INPUTS_RAW[20]  | TMC4670_INPUTS_RAW[20]  | TMC4670_INPUTS_RAW[20]  | Bool           |          |
|           |                | Min                     | Max                     | Default                 | Unit           |          |
|           |                | 0                       | 1                       | 0                       |                |          |
|           |                | ESI_0 of ESI_RAW        | ESI_0 of ESI_RAW        | ESI_0 of ESI_RAW        |                |          |
|           |                | 1: on                   | 1: on                   | 1: on                   |                |          |
|           | Mask           | Name                    | Name                    | Name                    | Type           |          |
|           | 0x00200000 h   | TMC4670_INPUTS_RAW[21]  | TMC4670_INPUTS_RAW[21]  | TMC4670_INPUTS_RAW[21]  | Bool           |          |
|           |                | Min                     | Max                     | Default                 | Unit           |          |
|           |                | 0                       | 1                       | 0                       |                |          |
|           |                | ESI_1 of ESI_RAW 0: off | ESI_1 of ESI_RAW 0: off | ESI_1 of ESI_RAW 0: off |                |          |
|           |                | 1: on                   | 1: on                   | 1: on                   |                |          |
|           | Mask           | Name                    | Name                    | Name                    | Type           |          |
|           | 0x00400000 h   | TMC4670_INPUTS_RAW[22]  | TMC4670_INPUTS_RAW[22]  | TMC4670_INPUTS_RAW[22]  | Bool           |          |
|           |                | Min                     | Max                     | Default                 | Unit           |          |
|           |                | 0                       | 1                       | 0                       |                |          |
|           |                | ESI_2 of ESI_RAW 0: off | ESI_2 of ESI_RAW 0: off | ESI_2 of ESI_RAW 0: off |                |          |
|           |                | 1: on                   | 1: on                   | 1: on                   |                |          |
|           | Mask           | Name                    | Name                    | Name                    | Type           |          |
|           | 0x00800000 h   | TMC4670_INPUTS_RAW[23]  | TMC4670_INPUTS_RAW[23]  | TMC4670_INPUTS_RAW[23]  | Bool           |          |
|           |                | Min                     | Max                     | Default                 | Unit           |          |
|           |                | 0                       | 1                       | 0                       |                |          |
|           |                | 0: off                  | 0: off                  | 0: off                  | 0: off         |          |
|           |                | 1: on                   | 1: on                   | 1: on                   | 1: on          |          |

<!-- image -->

| Registername       |                        |                            |           | Access    |
|--------------------|------------------------|----------------------------|-----------|-----------|
| Mask               | Name                   |                            |           | Type      |
| 0x01000000 h       | TMC4670_INPUTS_RAW[24] |                            |           | Bool      |
| Min                |                        | Max                        | Default   | Unit      |
| 0 CFG_0 of CFG     | 0: off 1:              | 1                          | 0         |           |
|                    | on                     |                            |           | Type      |
| Mask               | Name                   |                            |           |           |
| 0x02000000 h       | TMC4670_INPUTS_RAW[25] |                            |           | Bool      |
| Min                |                        | Max                        | Default   | Unit      |
| 0                  | 1                      |                            | 0         |           |
| Mask               | Name                   |                            |           | Type      |
|                    | 1: on                  | Max                        | Default 0 |           |
| 0x04000000 h Min   | TMC4670_INPUTS_RAW[26] |                            |           | Bool      |
| 0: off 1: on       | CFG_2 of CFG           |                            |           |           |
| Mask               | Name                   |                            |           | Type      |
|                    | 1                      |                            | Default 0 | Bool Unit |
| Min 0 CFG_3 of CFG |                        | TMC4670_INPUTS_RAW[27] Max |           |           |
| 1: on              | 0: off                 |                            |           |           |
|                    |                        |                            |           | Type      |
| Mask               | Name                   |                            |           |           |
| 0x10000000 h       |                        |                            |           | Bool      |
|                    | TMC4670_INPUTS_RAW[28] |                            |           |           |
|                    | Min                    | Max                        | Default   | Unit      |
| 0                  |                        |                            |           |           |
|                    | PWM_IDLE_L_RAW         |                            |           |           |
| 1: on              |                        |                            |           |           |
|                    |                        | 1                          |           |           |
| 0: off             |                        |                            |           |           |
|                    |                        |                            | 0         |           |

<!-- image -->

| Address   | Registername        | Registername             | Registername               | Registername           | Registername        | Access   |
|-----------|---------------------|--------------------------|----------------------------|------------------------|---------------------|----------|
| Address   | Mask                | Name                     | Name                       | Name                   | Type                | Access   |
| Address   | 0x20000000 h        | TMC4670_INPUTS_RAW[29]   | TMC4670_INPUTS_RAW[29]     | TMC4670_INPUTS_RAW[29] | Bool                | Access   |
| Address   | 0x20000000 h        | Min                      | Max                        | Default                | Unit                | Access   |
| Address   | 0x20000000 h        | 0                        | 1                          | 0                      |                     | Access   |
| Address   |                     | PWM_IDLE_H_RAW 0: off    | PWM_IDLE_H_RAW 0: off      | PWM_IDLE_H_RAW 0: off  |                     | Access   |
| Address   | Mask                | Name                     | Name                       | Name                   | Type                | Access   |
| Address   | 0x40000000 h        | TMC4670_INPUTS_RAW[30]   | TMC4670_INPUTS_RAW[30]     | TMC4670_INPUTS_RAW[30] | Bool                | Access   |
| Address   | 0x40000000 h        | Min                      | Max                        | Default                | Unit                | Access   |
| Address   | 0x40000000 h        | 0                        | 1                          | 0                      |                     | Access   |
| Address   |                     | DRV_ERR_IN_RAW 0: off    | DRV_ERR_IN_RAW 0: off      | DRV_ERR_IN_RAW 0: off  |                     | Access   |
| Address   |                     | 1: on                    | 1: on                      | 1: on                  |                     | Access   |
| Address   | Mask                | Name                     | Name                       | Name                   | Type                | Access   |
| Address   | 0x80000000 h        | TMC4670_INPUTS_RAW[31]   | TMC4670_INPUTS_RAW[31]     | TMC4670_INPUTS_RAW[31] | Bool                | Access   |
| Address   |                     | Min                      | Max                        | Default                | Unit                | Access   |
| Address   |                     | 0                        | 1                          | 0                      |                     | Access   |
| Address   |                     | -                        | -                          | -                      |                     | Access   |
| Address   |                     | 0: off                   | 0: off                     | 0: off                 |                     | Access   |
| Address   |                     | 1: on                    | 1: on                      | 1: on                  |                     | Access   |
| 0x77 h    | TMC4670_OUTPUTS_RAW | TMC4670_OUTPUTS_RAW      | TMC4670_OUTPUTS_RAW        | TMC4670_OUTPUTS_RAW    | TMC4670_OUTPUTS_RAW | R        |
| 0x77 h    | Mask                | Name                     | Name                       | Name                   | Type                | R        |
| 0x77 h    | 0x00000001 h        | TMC4670_OUTPUTS_RAW[0]   | TMC4670_OUTPUTS_RAW[0]     | TMC4670_OUTPUTS_RAW[0] | Bool                | R        |
| 0x77 h    |                     | Min                      | Max                        | Default                | Unit                | R        |
| 0x77 h    |                     | 0 PWM_UX1_L 0: off 1: on | 1                          | 0                      |                     | R        |
| 0x77 h    |                     | Name                     | Name                       | Name                   |                     | R        |
| 0x77 h    | Mask                |                          |                            |                        | Type                | R        |
| 0x77 h    | 0x00000002 h        | Min                      | TMC4670_OUTPUTS_RAW[1] Max | Default                | Bool Unit           | R        |
| 0x77 h    |                     | 0                        | 1                          | 0                      |                     | R        |
| 0x77 h    |                     | PWM_UX1_H 0: off         | PWM_UX1_H 0: off           | PWM_UX1_H 0: off       |                     | R        |
| 0x77 h    |                     |                          |                            |                        |                     | R        |
| 0x77 h    |                     |                          |                            |                        |                     | R        |
|           |                     |                          |                            |                        |                     | R        |
|           |                     |                          |                            |                        |                     | R        |
|           |                     |                          |                            |                        |                     | R        |
|           |                     |                          |                            |                        |                     | R        |

<!-- image -->

| Address      | Address                | Address                | Address                | Address   |
|--------------|------------------------|------------------------|------------------------|-----------|
| 1:           | on                     | on                     | on                     | on        |
| Mask         | Name                   | Name                   | Name                   | Type      |
| 0x00000004 h | TMC4670_OUTPUTS_RAW[2] | TMC4670_OUTPUTS_RAW[2] | TMC4670_OUTPUTS_RAW[2] | Bool      |
| 0x00000004 h | Min                    | Max                    | Default                | Unit      |
| 0x00000004 h | 0                      | 1                      | 0                      |           |
| 0x00000004 h | PWM_VX2_L 0: off       |                        |                        |           |
| 0x00000004 h | 1: on                  |                        |                        |           |
| Mask         | Name                   | Name                   | Name                   | Type      |
| 0x00000008 h |                        | TMC4670_OUTPUTS_RAW[3] |                        | Bool      |
| 0x00000008 h | Min                    | Max                    | Default                | Unit      |
| 0x00000008 h | 0 PWM_VX2_H            | 1                      | 0                      |           |
| 0x00000008 h | 0: off                 |                        |                        |           |
| 0x00000008 h | 1: on                  |                        |                        |           |
| Mask         | Name                   | Name                   | Name                   | Type      |
| 0x00000010 h | TMC4670_OUTPUTS_RAW[4] |                        |                        | Bool      |
| 0x00000010 h | Min                    | Max                    | Default                | Unit      |
| 0x00000010 h | 0                      | 1                      | 0                      |           |
| 0x00000010 h | PWM_WY1_L 0: off       |                        |                        |           |
| Mask         |                        | Name                   |                        | Type      |
| Mask         |                        |                        | Default                | Bool      |
| Mask         | 0                      | Max                    | 0                      | Unit      |
| Mask         | 1: on                  |                        |                        |           |
| 0x00000020 h | TMC4670_OUTPUTS_RAW[5] |                        |                        |           |
| 0x00000020 h | Min                    | 1                      |                        |           |
| 0x00000020 h | PWM_WY1_H              |                        |                        |           |
| 0x00000020 h | 0: off                 |                        |                        |           |
| 0x00000020 h | 1:                     |                        |                        |           |
| Mask         |                        | Name                   |                        | Type      |
| 0x00000040 h |                        |                        |                        | Bool      |
| 0x00000020 h | TMC4670_OUTPUTS_RAW[6] |                        |                        |           |
| 0x00000020 h | Min                    | Max                    | Default                | Unit      |
| 0x00000020 h | 0                      | 1                      | 0                      |           |
|              | PWM_Y2_L               |                        |                        |           |
|              | 0: off                 |                        |                        |           |
|              | on                     |                        |                        |           |

<!-- image -->

| Address   | Registername   | Registername                            | Registername                    | Registername                    | Registername    |                 |                 |                 |                 |                 |                 |                 |                 |
|-----------|----------------|-----------------------------------------|---------------------------------|---------------------------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|-----------------|
|           |                | 1: on                                   | 1: on                           | 1: on                           | 1: on           |                 |                 |                 |                 |                 |                 |                 |                 |
|           | Mask           | Name                                    | Name                            | Name                            | Type            |                 |                 |                 |                 |                 |                 |                 |                 |
|           | 0x00000080 h   | TMC4670_OUTPUTS_RAW[7]                  | TMC4670_OUTPUTS_RAW[7]          | TMC4670_OUTPUTS_RAW[7]          | Bool            |                 |                 |                 |                 |                 |                 |                 |                 |
|           |                | Min                                     | Max                             | Default                         | Unit            |                 |                 |                 |                 |                 |                 |                 |                 |
|           |                | 0                                       | 1                               | 0                               |                 |                 |                 |                 |                 |                 |                 |                 |                 |
|           |                | PWM_Y2_H 0: off                         |                                 |                                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |
|           |                | 1: on                                   |                                 |                                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |
|           | STATUS_FLAGS   | STATUS_FLAGS                            | STATUS_FLAGS                    | STATUS_FLAGS                    | STATUS_FLAGS    |                 |                 |                 |                 |                 |                 |                 |                 |
| 0x7C h    | Mask           | Name                                    | Name                            | Name                            | Type            |                 |                 |                 |                 |                 |                 |                 |                 |
|           |                | STATUS_FLAGS[0]                         | STATUS_FLAGS[0]                 | STATUS_FLAGS[0]                 | Bool            |                 |                 |                 |                 |                 |                 |                 |                 |
|           | 0x00000001 h   | Min                                     | Max                             | Default                         | Unit            |                 |                 |                 |                 |                 |                 |                 |                 |
|           |                | 0                                       | 1                               | 0                               |                 |                 |                 |                 |                 |                 |                 |                 |                 |
|           |                | pid_x_target_limit 0: off 1: on         | pid_x_target_limit 0: off 1: on | pid_x_target_limit 0: off 1: on |                 |                 |                 |                 |                 |                 |                 |                 |                 |
|           | Mask           | Name                                    | Name                            | Name                            | Type            |                 |                 |                 |                 |                 |                 |                 |                 |
|           |                | STATUS_FLAGS[1]                         | STATUS_FLAGS[1]                 | STATUS_FLAGS[1]                 | Bool            |                 |                 |                 |                 |                 |                 |                 |                 |
|           | 0x00000002 h   |                                         | Max                             | Default                         | Unit            |                 |                 |                 |                 |                 |                 |                 |                 |
|           |                | Min                                     |                                 |                                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |
|           |                | 0 1 pid_x_target_ddt_limit 0: off 1: on |                                 | 0                               |                 |                 |                 |                 |                 |                 |                 |                 |                 |
|           | Mask           | Name                                    | Name                            | Name                            | Type            |                 |                 |                 |                 |                 |                 |                 |                 |
|           | 0x00000004 h   | STATUS_FLAGS[2]                         | STATUS_FLAGS[2]                 | STATUS_FLAGS[2]                 | Bool            |                 |                 |                 |                 |                 |                 |                 |                 |
|           |                |                                         | Max                             | Default                         | Unit            |                 |                 |                 |                 |                 |                 |                 |                 |
|           |                | Min                                     |                                 |                                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |
|           |                | pid_x_errsum_limit off                  | pid_x_errsum_limit off          | pid_x_errsum_limit off          |                 |                 |                 |                 |                 |                 |                 |                 |                 |
|           | Mask           | 1: on                                   | 1: on                           | 1: on                           |                 |                 |                 |                 |                 |                 |                 |                 |                 |
|           |                | Name                                    | Name                            | Name                            | Type            |                 |                 |                 |                 |                 |                 |                 |                 |
|           |                |                                         | Max                             | Default                         | Bool            |                 |                 |                 |                 |                 |                 |                 |                 |
|           |                | Min                                     |                                 |                                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |
|           |                | pid_x_output_limit                      | pid_x_output_limit              | pid_x_output_limit              |                 |                 |                 |                 |                 |                 |                 |                 |                 |
|           |                |                                         |                                 | 0                               |                 |                 |                 |                 |                 |                 |                 |                 |                 |
|           |                |                                         | 1                               |                                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |
|           |                | 0                                       |                                 |                                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |
|           | h              |                                         |                                 |                                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |
|           |                |                                         |                                 |                                 |                 | Unit            | Unit            | Unit            | Unit            | Unit            | Unit            | Unit            |                 |
|           | 0x00000008     |                                         |                                 |                                 |                 |                 |                 |                 |                 |                 |                 |                 |                 |
|           |                |                                         |                                 |                                 | STATUS_FLAGS[3] | STATUS_FLAGS[3] | STATUS_FLAGS[3] | STATUS_FLAGS[3] | STATUS_FLAGS[3] | STATUS_FLAGS[3] | STATUS_FLAGS[3] | STATUS_FLAGS[3] | STATUS_FLAGS[3] |

<!-- image -->

| Address   | Registername   | Registername                          | Registername           | Registername        | Registername   |
|-----------|----------------|---------------------------------------|------------------------|---------------------|----------------|
|           |                | 0: off 1: on                          | 0: off 1: on           | 0: off 1: on        | 0: off 1: on   |
|           | Mask           | Name                                  | Name                   | Name                | Type           |
|           | 0x00000010 h   | STATUS_FLAGS[4]                       | STATUS_FLAGS[4]        | STATUS_FLAGS[4]     | Bool           |
|           |                | Min                                   | Max                    | Default             | Unit           |
|           |                | 0 pid_v_target_limit 0: off           | 1                      | 0                   |                |
|           | Mask           | Name                                  | Name                   | Name                |                |
|           |                |                                       |                        |                     | Type           |
|           | 0x00000020 h   | STATUS_FLAGS[5]                       | Max                    | Default             | Bool           |
|           |                | Min                                   |                        |                     | Unit           |
|           |                | 0 pid_v_target_ddt_limit 0: off 1: on | 1                      | 0                   |                |
|           | Mask           |                                       | Name                   |                     |                |
|           |                |                                       |                        |                     | Type           |
|           |                | STATUS_FLAGS[6]                       |                        |                     |                |
|           | 0x00000040 h   |                                       |                        |                     | Bool           |
|           |                | Min                                   | Max                    | Default             | Unit           |
|           |                |                                       | 0 1 pid_v_errsum_limit | 0                   |                |
|           | Mask           | Name                                  |                        |                     |                |
|           |                |                                       |                        |                     | Type           |
|           | 0x00000080 h   | STATUS_FLAGS[7]                       | STATUS_FLAGS[7]        | STATUS_FLAGS[7]     | Bool           |
|           |                | Max                                   | Min                    | Default             | Unit           |
|           |                | 0 1 0                                 | 0 1 0                  | 0 1 0               |                |
|           | Mask           |                                       | Name                   |                     |                |
|           |                | 1: on                                 | 1: on                  | 1: on               |                |
|           |                |                                       |                        |                     | Type           |
|           |                | STATUS_FLAGS[8]                       | STATUS_FLAGS[8]        | STATUS_FLAGS[8]     | Bool           |
|           | 0x00000100 h   | Min                                   | Max                    | Default             |                |
|           |                |                                       | 1                      |                     |                |
|           |                |                                       |                        |                     | Unit           |
|           |                | pid_id_target_limit                   | pid_id_target_limit    | pid_id_target_limit |                |
|           |                |                                       |                        | 0                   |                |
|           |                | 0                                     |                        |                     |                |

<!-- image -->

| Address   | Registername   | Registername                     | Registername                     | Registername                     | Registername   | Access   |
|-----------|----------------|----------------------------------|----------------------------------|----------------------------------|----------------|----------|
|           |                | 0: off 1: on                     | 0: off 1: on                     | 0: off 1: on                     | 0: off 1: on   |          |
|           | Mask           | Name                             | Name                             | Name                             | Type           |          |
|           | 0x00000200 h   | STATUS_FLAGS[9]                  | STATUS_FLAGS[9]                  | STATUS_FLAGS[9]                  | Bool           |          |
|           |                | Min                              | Max                              | Default                          | Unit           |          |
|           |                | 0 0: off                         | 1                                | 0                                |                |          |
|           |                | pid_id_target_ddt_limit          | pid_id_target_ddt_limit          | pid_id_target_ddt_limit          |                |          |
|           | Mask           | Name                             | Name                             | Name                             | Type           |          |
|           | 0x00000400 h   | STATUS_FLAGS[10]                 | STATUS_FLAGS[10]                 | STATUS_FLAGS[10]                 | Bool           |          |
|           |                | Min                              | Max                              | Default                          | Unit           |          |
|           |                | 0                                | 1                                | 0                                |                |          |
|           |                | pid_id_errsum_limit 0: off       | pid_id_errsum_limit 0: off       | pid_id_errsum_limit 0: off       |                |          |
|           |                | 1: on                            | 1: on                            | 1: on                            |                |          |
|           | Mask           | Name                             | Name                             | Name                             | Type           |          |
|           | 0x00000800 h   | STATUS_FLAGS[11] Min             | Max                              | Default                          | Bool Unit      |          |
|           |                | 0                                | 1                                | 0                                |                |          |
|           |                | pid_id_output_limit 0: off 1: on | pid_id_output_limit 0: off 1: on | pid_id_output_limit 0: off 1: on |                |          |
|           | Mask           | Name                             | Name                             | Name                             | Type           |          |
|           | 0x00001000 h   | STATUS_FLAGS[12]                 | STATUS_FLAGS[12]                 | STATUS_FLAGS[12]                 | Bool           |          |
|           |                | Min                              | Max                              | Default                          | Unit           |          |
|           |                | 0                                | 1                                | 0                                |                |          |
|           |                | pid_iq_target_limit 0: off       | pid_iq_target_limit 0: off       | pid_iq_target_limit 0: off       |                |          |
|           |                | 1: on                            | 1: on                            | 1: on                            |                |          |
|           | Mask           | Name                             | Name                             | Name                             |                |          |
|           |                |                                  |                                  |                                  | Type           |          |
|           | 0x00002000 h   | STATUS_FLAGS[13]                 | STATUS_FLAGS[13]                 | STATUS_FLAGS[13]                 | Bool           |          |
|           |                | Min                              | Max                              | Default                          | Unit           |          |
|           |                | 0                                | 1                                | 0                                |                |          |

<!-- image -->

| Address   | Registername   | Registername               | Registername               | Registername               | Registername   | Access   |
|-----------|----------------|----------------------------|----------------------------|----------------------------|----------------|----------|
|           |                | 0: off 1: on               | 0: off 1: on               | 0: off 1: on               | 0: off 1: on   |          |
|           | Mask           | Name                       | Name                       | Name                       | Type           |          |
|           | 0x00004000 h   | STATUS_FLAGS[14]           | STATUS_FLAGS[14]           | STATUS_FLAGS[14]           | Bool           |          |
|           |                | Min                        | Max                        | Default                    | Unit           |          |
|           |                | 0 0: off                   | 1                          | 0                          |                |          |
|           |                | pid_iq_errsum_limit        | pid_iq_errsum_limit        | pid_iq_errsum_limit        |                |          |
|           | Mask           | Name                       | Name                       | Name                       | Type           |          |
|           | 0x00008000 h   | STATUS_FLAGS[15]           | STATUS_FLAGS[15]           | STATUS_FLAGS[15]           | Bool           |          |
|           |                | Min                        | Max                        | Default                    | Unit           |          |
|           |                | 0                          | 1                          | 0                          |                |          |
|           |                | pid_iq_output_limit 0: off | pid_iq_output_limit 0: off | pid_iq_output_limit 0: off |                |          |
|           |                | 1: on                      | 1: on                      | 1: on                      |                |          |
|           | Mask           | Name                       | Name                       | Name                       | Type           |          |
|           | 0x00010000 h   | STATUS_FLAGS[16]           | STATUS_FLAGS[16]           | STATUS_FLAGS[16]           | Bool           |          |
|           |                | Min                        | Max                        | Default                    | Unit           |          |
|           |                | 0                          | 1                          | 0                          |                |          |
|           |                | ipark_cirlim_limit_u_d     | ipark_cirlim_limit_u_d     | ipark_cirlim_limit_u_d     |                |          |
|           |                | on                         | on                         | on                         |                |          |
|           | Mask           | Name                       | Name                       | Name                       | Type           |          |
|           | 0x00020000 h   | STATUS_FLAGS[17]           | STATUS_FLAGS[17]           | STATUS_FLAGS[17]           | Bool           |          |
|           |                | Min                        | Max                        | Default                    | Unit           |          |
|           |                | 0                          | 1                          | 0                          |                |          |
|           |                | ipark_cirlim_limit_u_q     | ipark_cirlim_limit_u_q     | ipark_cirlim_limit_u_q     |                |          |
|           | Mask           | Name                       | Name                       | Name                       | Type           |          |
|           | 0x00040000 h   | STATUS_FLAGS[18]           | STATUS_FLAGS[18]           | STATUS_FLAGS[18]           | Bool           |          |
|           |                | Min                        | Max                        | Default                    | Unit           |          |
|           |                | 0                          | 1                          | 0                          |                |          |

<!-- image -->

| Address   | Registername     | Registername     | Registername     | Registername     | Access   | Access   |
|-----------|------------------|------------------|------------------|------------------|----------|----------|
|           | 0: 1:            | off on           | off on           | off on           | off on   |          |
|           |                  | Name             | Name             | Name             | Type     | Type     |
|           | 0x00080000 h     | STATUS_FLAGS[19] | STATUS_FLAGS[19] | STATUS_FLAGS[19] | Bool     | Bool     |
|           | Min              |                  | Max              | Default          | Unit     | Unit     |
|           | 0 - 0: off 1: on |                  | 1                | 0                |          |          |
|           | Mask             | Name             |                  |                  |          |          |
|           |                  |                  |                  |                  | Type     | Type     |
|           |                  | STATUS_FLAGS[20] |                  |                  | Bool     | Bool     |
|           | 0x00100000 h     | Min              | Max              | Default          | Unit     | Unit     |
|           | 0 0: off 1: on   | ref_sw_r         | 1                | 0                |          |          |
|           | Mask             |                  | Name             |                  | Type     | Type     |
|           | 0x00200000 h     |                  |                  |                  | Bool     | Bool     |
|           |                  | STATUS_FLAGS[21] |                  |                  | Unit     | Unit     |
|           | Min              | 0 1              | Max              | Default 0        |          |          |
|           | Mask             | Name             |                  |                  | Type     | Type     |
|           | 0x00400000 h     | STATUS_FLAGS[22] | STATUS_FLAGS[22] | STATUS_FLAGS[22] | Bool     | Bool     |
|           | Min              |                  | Max              | Default          | Unit     | Unit     |
| 1         | 0: off 1: on     | 0 ref_sw_l       |                  | 0                |          |          |
|           |                  |                  |                  |                  | Type     | Type     |
|           | Mask             |                  | Name             |                  |          |          |
|           | 0x00800000       |                  |                  |                  | Bool     | Bool     |
|           | h                | STATUS_FLAGS[23] | STATUS_FLAGS[23] | STATUS_FLAGS[23] |          |          |
|           | Min              |                  | Max              | Default          | Unit     | Unit     |
|           | 0                |                  | 1                | 0                |          |          |
|           | -                |                  |                  |                  |          |          |

<!-- image -->

| Address   | Registername   | Registername                 | Registername              | Registername              | Registername   | Access   |
|-----------|----------------|------------------------------|---------------------------|---------------------------|----------------|----------|
|           |                | 0: off 1: on                 | 0: off 1: on              | 0: off 1: on              | 0: off 1: on   |          |
|           | Mask           | Name                         | Name                      | Name                      | Type           |          |
|           | 0x01000000 h   | STATUS_FLAGS[24]             | STATUS_FLAGS[24]          | STATUS_FLAGS[24]          | Bool           |          |
|           |                | Min                          | Max                       | Default                   | Unit           |          |
|           |                | 0 pwm_min 0: off 1: on       | 1                         | 0                         |                |          |
|           | Mask           | Name                         | Name                      | Name                      | Type           |          |
|           |                | STATUS_FLAGS[25]             | Max                       |                           | Bool           |          |
|           | 0x02000000 h   | Min                          |                           | Default                   | Unit           |          |
|           |                | 0 pwm_max 0: off 1: on       | 1                         |                           |                |          |
|           |                |                              |                           | 0                         |                |          |
|           | Mask           | Name                         |                           |                           | Type           |          |
|           | 0x04000000     |                              |                           |                           |                |          |
|           | h              | STATUS_FLAGS[26]             | STATUS_FLAGS[26]          | STATUS_FLAGS[26]          | Bool           |          |
|           |                | Min                          | Max                       | Default                   | Unit           |          |
|           |                | 0 adc_i_clipped 0: off 1: on | 1                         | 0                         |                |          |
|           | Mask           | Name                         | Name                      | Name                      | Type           |          |
|           | 0x08000000 h   | STATUS_FLAGS[27]             | STATUS_FLAGS[27]          | STATUS_FLAGS[27]          | Bool           |          |
|           |                | Min                          | Max                       | Default                   | Unit           |          |
|           |                | 0                            | 1                         | 0                         |                |          |
|           |                | aenc_clipped 0: off 1: on    | aenc_clipped 0: off 1: on | aenc_clipped 0: off 1: on |                |          |
|           | Mask           |                              | Name                      |                           | Type           |          |
|           | 0x10000000 h   | STATUS_FLAGS[28]             | STATUS_FLAGS[28]          | STATUS_FLAGS[28]          | Bool           |          |
|           |                | Min                          | Max                       | Default                   | Unit           |          |
|           |                | 0                            | 1                         | 0                         |                |          |

<!-- image -->

| Address   | Registername   | Registername          | Registername     | Registername     | Registername   | Access   |
|-----------|----------------|-----------------------|------------------|------------------|----------------|----------|
|           |                | 0: off 1: on          | 0: off 1: on     | 0: off 1: on     | 0: off 1: on   |          |
|           | Mask           | Name                  | Name             | Name             | Type           |          |
|           | 0x20000000 h   | STATUS_FLAGS[29]      | STATUS_FLAGS[29] | STATUS_FLAGS[29] | Bool           |          |
|           |                | Min                   | Max              | Default          | Unit           |          |
|           |                | 0                     | 1                | 0                |                |          |
|           | Mask           | Name                  | Name             | Name             | Type           |          |
|           | 0x40000000 h   | STATUS_FLAGS[30]      | STATUS_FLAGS[30] | STATUS_FLAGS[30] | Bool           |          |
|           |                | Min                   | Max              | Default          | Unit           |          |
|           |                | 0 aenc_n 0: off 1: on | 1                | 0                |                |          |
|           | Mask           | Name                  |                  |                  | Type           |          |
|           | 0x80000000 h   | STATUS_FLAGS[31]      | STATUS_FLAGS[31] | STATUS_FLAGS[31] | Bool           |          |
|           |                | Min                   | Max              | Default          | Unit           |          |
|           |                | 0 - 0:                | 1                | 0                |                |          |
|           |                | off                   |                  |                  |                |          |
|           |                | 1: on                 |                  |                  |                |          |
| 0x7D h    | WARNING_MASK   | WARNING_MASK          | WARNING_MASK     | WARNING_MASK     | WARNING_MASK   | RW       |
|           | Mask           | Name                  | Name             | Name             | Type           |          |
|           | 0xFFFFFFFF h   | WARNING_MASK          | WARNING_MASK     | WARNING_MASK     | Unsigned       |          |
|           |                | Min                   | Max              | Default          | Unit           |          |
|           |                | 0                     | 4294967295       | 0                |                |          |
| 0x7E h    | ERROR_MASK     | ERROR_MASK            | ERROR_MASK       | ERROR_MASK       | ERROR_MASK     | RW       |
|           | Mask           | Name                  | Name             | Name             | Type           |          |
|           | 0xFFFFFFFF h   | ERROR_MASK            | ERROR_MASK       | ERROR_MASK       | Unsigned       |          |
|           |                | Min                   | Max              | Default          | Unit           |          |
|           |                | 0                     | 4294967295       | 0                |                |          |

Table 6: Register Map for TMC4670

<!-- image -->

## 6 Pinning

## Info

All power supply pins (1V2, 2V5, 3V3) must be connected.

All ground pins (GND, GND\_REF) must be connected.

All pins speci/uniFB01ed as n.c. (=not connected) must be left open.

Analog inputs (AI) are 2.5V single ended inputs. Voltage dividers are required to scale down higher input voltages.

Digital inputs (I) resp. (IO) are 3.3V single ended inputs. Voltage dividers are required to scale done higher input voltages.

| IO   | Description                                                   |
|------|---------------------------------------------------------------|
| AI   | analog input, 2.5V                                            |
| I    | digital input, 3.3V                                           |
| IO   | digital input or digital output, direction programmable, 3.3V |
| O    | digital output, 3.3V                                          |

Table 7: Pin Type De/uniFB01nition

<!-- image -->

| Name          | Ball   | IO   | Description                                                     |
|---------------|--------|------|-----------------------------------------------------------------|
| nRST          | B10    | I    | active low reset input                                          |
| CLK           | M3     | I    | clock input, 25 MHz                                             |
| ENABLE_IN     | T13    | I    | active high enable input                                        |
| ENABLE_OUT    | A5     | O    | enable output                                                   |
| SPI_nSCS      | R7     | I    | SPI active low chip select input                                |
| SPI_SCK       | T7     | I    | SPI clock input                                                 |
| SPI_MOSI      | T6     | I    | SPI master out slave input                                      |
| SPI_MISO      | R6     | O    | SPI master in sleave output                                     |
| WARNING_OUT   | P10    | O    | Maskable Warning Output                                         |
| ERROR_OUT     | T11    | O    | Maskable Error Output                                           |
| ESI_0         | H16    | I    | Emergency Switch Input #0                                       |
| ESI_1         | J15    | I    | Emergency Switch Input #1                                       |
| ESI_2         | J16    | I    | Emergency Switch Input #2                                       |
| ENC_A         | L1     | I    | A input of incremental encoder                                  |
| ENC_B         | L2     | I    | B input of incremental encoder                                  |
| ENC_N         | M1     | I    | N input of incremental encoder                                  |
| ENC2_A        | R1     | I    | A input of incremental encoder                                  |
| ENC2_B        | P2     | I    | B input of incremental encoder                                  |
| ENC2_N        | P4     | I    | N input of incremental encoder                                  |
| HALL_UX       | N2     | I    | digital hall input H1 for 3-phase (U) or 2-phase (X)            |
| HALL_V        | N1     | I    | digital hall input H2 for 3-phase (V)                           |
| HALL_WY       | M2     | I    | digital hall input H3 for 3-phase (W) or 2-phase (Y)            |
| REF_SW_L      | A9     | I    | Left (L) reference switch                                       |
| REF_SW_H      | A8     | I    | Home (H) reference switch                                       |
| REF_SW_R      | A10    | I    | Right (R) reference switch                                      |
| AENC_UX       | C1     | AI   | analog hall or analog encoder, 3-phase (U) or 2-phase (X (cos)) |
| AENC_V        | D1     | AI   | analog hall or analog encoder, 3-phase (V)                      |
| AENC_WY       | E1     | AI   | analog hall or analog encoder, 3-phase (W) or 2-phase (Y (sin)) |
| AENC_N        | B1     | AI   | analog encoder N pulse input                                    |
| ADC_I_0       | F2     | AI   | phase current measurement voltage input I_0 (I_U, I_X)          |
| ADC_I_1       | F4     | AI   | phase current measurement voltage input I_1 (I_V, I_W, I_Y)     |
| ADC_VM        | E3     | AI   | analog input for motor suppply voltage (VM) measurement         |
| AGPI          | G2     | AI   | Analog general purpose input (analog GPI)                       |
| ADC_T_MOSFETS | C3     | AI   | analog input for MOSFET temperature signal                      |

<!-- image -->

| Name        | Ball   | IO   | Description                                                  |
|-------------|--------|------|--------------------------------------------------------------|
| ADC_T_MOTOR | C4     | AI   | analog input for motor temperature signal                    |
| ADC_U_UX    | F1     | AI   | analog voltage input for terminal UX                         |
| ADC_U_V     | F5     | AI   | analog voltage input for terminal V                          |
| ADC_U_WY    | B2     | AI   | analog voltage input for terminal WY                         |
| ADC_I_S     | C2     | AI   | analog bottom current measurement voltage input, reserved    |
| ADC_START   | B5     | O    | ADC start pulse for LTC2351                                  |
| ADC_BIP     | B4     | O    | output driving ADC LTC2351 BIP input                         |
| ADC_nSCS    | B7     | O    | ADC LTC2351 nSCS signal                                      |
| ADC_SCK     | B6     | O    | ADC LTC2351 SCK signal                                       |
| ADC_MISO    | A6     | I    | from ADC LTC2351 SDO output                                  |
| ADC_MOSI    | A7     | O    | reserved for ADC w/ SDI input                                |
| PWM_IDLE_H  | A11    | I    | Idle Level of high side gate control signals                 |
| PWM_IDLE_L  | B11    | I    | Idle Level of low side gate control signals                  |
| PWM_UX1_H   | D16    | O    | high side gate control output U (3-phase) resp. X1 (2-phase) |
| PWM_UX1_L   | D15    | O    | low side gate control output U (3-phase) resp. X1 (2-phase)  |
| PWM_VX2_H   | C16    | O    | high side gate control output V (3-phase) resp. X2 (2-phase) |
| PWM_VX2_L   | D14    | O    | low side gate control output V (3-phase) resp. X2 (2-phase)  |
| PWM_WY1_H   | B16    | O    | high side gate control output W(3-phase) resp. Y1 (2-phase)  |
| PWM_WY1_L   | C15    | O    | low side gate control output W(3-phase) resp. Y1 (2-phase)   |
| PWM_Y2_H    | B15    | O    | high side gate control output Y2 (2-phase only)              |
| PWM_Y2_L    | C14    | O    | low side gate control output Y2 (2-phase only)               |
| PWM_Z_OUT   | L15    | O    | pulse, indicating start of PWMperiod (zero count)            |
| PWM_C_OUT   | L16    | O    | pulse, indicating center of PWMperiod                        |
| BRAKE_OUT   | A13    | O    | brake chopper control signal                                 |
| DRV_ERR_IN  | A12    | I    | driver error input (from gate driver)                        |

Table 8: Functional Pin Description

<!-- image -->

| Name       | Ball   | IO           | Supply Voltage Pins and Ground Pins                       |
|------------|--------|--------------|-----------------------------------------------------------|
| VCCIO3V3   | K4     | 3.3V         |                                                           |
| VCCIO3V3   | L4     | 3.3V         |                                                           |
| VCCIO3V3   | N6     | 3.3V         |                                                           |
| VCCIO3V3   | N7     | 3.3V         |                                                           |
| VCCIO3V3   | N8     | 3.3V         |                                                           |
| VCCIO3V3   | N10    | 3.3V         |                                                           |
| VCCIO3V3   | N11    | 3.3V         |                                                           |
| VCCIO3V3   | K13    | 3.3V         |                                                           |
| VCCIO3V3   | L13    | 3.3V         |                                                           |
| VCCIO3V3   | M13    | 3.3V         |                                                           |
| VCCIO3V3   | F13    | 3.3V         |                                                           |
| VCCIO3V3   | G13    | 3.3V         |                                                           |
| VCCIO3V3   | H13    | 3.3V         |                                                           |
| VCCIO3V3   | J13    | 3.3V         |                                                           |
| VCCIO3V3   | D10    | 3.3V         |                                                           |
| VCCIO3V3   | D11    | 3.3V         |                                                           |
| VCCIO3V3   | C7     | 3.3V         |                                                           |
| VCCIO3V3   | D7     | 3.3V         |                                                           |
| VCCIO3V3   | D8     | 3.3V         |                                                           |
| VCCrefR1   | E8     | 3.3V via 10K | reference resistor to be connected to 3.3V supply voltage |
| VCCrefR2   | F7     | 3.3V via 10K | reference resistor to be connected to 3.3V supply voltage |
| VCCrefR3   | E7     | 3.3V via 10K | reference resistor to be connected to 3.3V supply voltage |
| ADCVREF2V5 | E4     | 2.5V         |                                                           |
| VCCA2V5    | D5     | 2.5V         |                                                           |
| VCCA2V5    | E12    | 2.5V         |                                                           |
| VCCA2V5    | L5     | 2.5V         |                                                           |
| VCCA2V5    | M12    | 2.5V         |                                                           |
| VCCA2V5    | E5     | 2.5V         |                                                           |
| VCCA2V5    | G4     | 2.5V         |                                                           |
| VCCA2V5    | H4     | 2.5V         |                                                           |
| VCCA2V5    | J4     | 2.5V         |                                                           |
| VCC1V2     | G7     | 1.2V         |                                                           |
| VCC1V2     | G9     | 1.2V         |                                                           |
| VCC1V2     | H8     | 1.2V         |                                                           |

<!-- image -->

| Name      | Ball   | IO   | Supply Voltage Pins and Ground Pins   |
|-----------|--------|------|---------------------------------------|
| VCC1V2    | H9     | 1.2V |                                       |
| VCC1V2    | H10    | 1.2V |                                       |
| VCC1V2    | J7     | 1.2V |                                       |
| VCC1V2    | J8     | 1.2V |                                       |
| VCC1V2    | J9     | 1.2V |                                       |
| VCC1V2    | K8     | 1.2V |                                       |
| VCC1V2    | K10    | 1.2V |                                       |
| VCCINT1V2 | F6     | 1.2V |                                       |
| VCCPLL1V2 | D4     | 1.2V |                                       |
| VCCPLL1V2 | D13    | 1.2V |                                       |
| VCCPLL1V2 | M5     | 1.2V |                                       |
| VCCPLL1V2 | N13    | 1.2V |                                       |
| GND       | A1     | 0V   |                                       |
| GND       | A16    | 0V   |                                       |
| GND       | B14    | 0V   |                                       |
| GND       | C8     | 0V   |                                       |
| GND       | C11    | 0V   |                                       |
| GND       | D2     | 0V   |                                       |
| GND       | D3     | 0V   |                                       |
| GND       | D6     | 0V   |                                       |
| GND       | E6     | 0V   |                                       |
| GND       | E13    | 0V   |                                       |
| GND       | E14    | 0V   |                                       |
| GND       | E15    | 0V   |                                       |
| GND       | E16    | 0V   |                                       |
| GND       | F8     | 0V   |                                       |
| GND       | F15    | 0V   |                                       |
| GND       | F3     | 0V   |                                       |
| GND       | G3     | 0V   |                                       |
| GND       | G8     | 0V   |                                       |
| GND       | G10    | 0V   |                                       |
| GND       | H7     | 0V   |                                       |
| GND       | H14    | 0V   |                                       |
| GND       | J10    | 0V   |                                       |

<!-- image -->

| Name   | Ball   | IO   | Supply Voltage Pins and Ground Pins   |
|--------|--------|------|---------------------------------------|
| GND    | K1     | 0V   |                                       |
| GND    | K3     | 0V   |                                       |
| GND    | K7     | 0V   |                                       |
| GND    | K9     | 0V   |                                       |
| GND    | K16    | 0V   |                                       |
| GND    | L14    | 0V   |                                       |
| GND    | M4     | 0V   |                                       |
| GND    | N9     | 0V   |                                       |
| GND    | N12    | 0V   |                                       |
| GND    | N15    | 0V   |                                       |
| GND    | P3     | 0V   |                                       |
| GND    | P7     | 0V   |                                       |
| GND    | R8     | 0V   |                                       |
| GND    | R10    | 0V   |                                       |
| GND    | R11    | 0V   |                                       |
| GND    | R13    | 0V   |                                       |
| GND    | T1     | 0V   |                                       |
| GND    | T2     | 0V   |                                       |
| GND    | T3     | 0V   |                                       |
| GND    | T4     | 0V   |                                       |
| GND    | T5     | 0V   |                                       |
| GND    | T8     | 0V   |                                       |
| GND    | T10    | 0V   |                                       |
| GND    | T14    | 0V   |                                       |
| GND    | T15    | 0V   |                                       |
| GND    | T16    | 0V   |                                       |
| REFGND | E2     | 0V   |                                       |

Table 9: Supply Voltage Pins and Ground Pins

<!-- image -->

| Name   | Ball   | IO   | Not Connect (n.c.) Pins   |
|--------|--------|------|---------------------------|
| n.c.   | A2     | -    | not connect               |
| n.c.   | A3     | -    | not connect               |
| n.c.   | A4     | -    | not connect               |
| n.c.   | A14    | -    | not connect               |
| n.c.   | A15    | -    | not connect               |
| n.c.   | B3     | -    | not connect               |
| n.c.   | B8     | -    | not connect               |
| n.c.   | B9     | -    | not connect               |
| n.c.   | B12    | -    | not connect               |
| n.c.   | B13    | -    | not connect               |
| n.c.   | C5     | -    | not connect               |
| n.c.   | C6     | -    | not connect               |
| n.c.   | C9     | -    | not connect               |
| n.c.   | C10    | -    | not connect               |
| n.c.   | C12    | -    | not connect               |
| n.c.   | C13    | -    | not connect               |
| n.c.   | D9     | -    | not connect               |
| n.c.   | D12    | -    | not connect               |
| n.c.   | E9     | -    | not connect               |
| n.c.   | E10    | -    | not connect               |
| n.c.   | E11    | -    | not connect               |
| n.c.   | F9     | -    | not connect               |
| n.c.   | F10    | -    | not connect               |
| n.c.   | F11    | -    | not connect               |
| n.c.   | F12    | -    | not connect               |
| n.c.   | F14    | -    | not connect               |
| n.c.   | F16    | -    | not connect               |
| n.c.   | G5     | -    | not connect               |
| n.c.   | G1     | -    | not connect               |
| n.c.   | G11    | -    | not connect               |
| n.c.   | G12    | -    | not connect               |
| n.c.   | G14    | -    | not connect               |
| n.c.   | G6     | -    | not connect               |
| n.c.   | G15    | -    | not connect               |

<!-- image -->

| Name   | Ball   | IO   | Not Connect (n.c.) Pins   |
|--------|--------|------|---------------------------|
| n.c.   | G16    | -    | not connect               |
| n.c.   | H5     | -    | not connect               |
| n.c.   | H6     | -    | not connect               |
| n.c.   | H1     | -    | not connect               |
| n.c.   | H11    | -    | not connect               |
| n.c.   | H12    | -    | not connect               |
| n.c.   | H15    | -    | not connect               |
| n.c.   | H2     | -    | not connect               |
| n.c.   | H3     | -    | not connect               |
| n.c.   | J1     | -    | not connect               |
| n.c.   | J2     | -    | not connect               |
| n.c.   | J3     | -    | not connect               |
| n.c.   | J5     | -    | not connect               |
| n.c.   | J6     | -    | not connect               |
| n.c.   | J11    | -    | not connect               |
| n.c.   | J12    | -    | not connect               |
| n.c.   | J14    | -    | not connect               |
| n.c.   | K2     | -    | not connect               |
| n.c.   | K5     | -    | not connect               |
| n.c.   | K6     | -    | not connect               |
| n.c.   | K11    | -    | not connect               |
| n.c.   | K12    | -    | not connect               |
| n.c.   | K14    | -    | not connect               |
| n.c.   | K15    | -    | not connect               |
| n.c.   | L3     | -    | not connect               |
| n.c.   | L6     | -    | not connect               |
| n.c.   | L7     | -    | not connect               |
| n.c.   | L8     | -    | not connect               |
| n.c.   | L9     | -    | not connect               |
| n.c.   | L10    | -    | not connect               |
| n.c.   | L11    | -    | not connect               |
| n.c.   | L12    | -    | not connect               |
| n.c.   | M6     | -    | not connect               |
| n.c.   | M7     | -    | not connect               |

<!-- image -->

| Name   | Ball   | IO   | Not Connect (n.c.) Pins   |
|--------|--------|------|---------------------------|
| n.c.   | M8     | -    | not connect               |
| n.c.   | M9     | -    | not connect               |
| n.c.   | M10    | -    | not connect               |
| n.c.   | M11    | -    | not connect               |
| n.c.   | M14    | -    | not connect               |
| n.c.   | M15    | -    | not connect               |
| n.c.   | M16    | -    | not connect               |
| n.c.   | N3     | -    | not connect               |
| n.c.   | N4     | -    | not connect               |
| n.c.   | N5     | -    | not connect               |
| n.c.   | N14    | -    | not connect               |
| n.c.   | N16    | -    | not connect               |
| n.c.   | P1     | -    | not connect               |
| n.c.   | P5     | -    | not connect               |
| n.c.   | P6     | -    | not connect               |
| n.c.   | P13    | -    | not connect               |
| n.c.   | P14    | -    | not connect               |
| n.c.   | P16    | -    | not connect               |
| n.c.   | R2     | -    | not connect               |
| n.c.   | R3     | -    | not connect               |
| n.c.   | R4     | -    | not connect               |
| n.c.   | R5     | -    | not connect               |
| n.c.   | R9     | -    | not connect               |
| n.c.   | R12    | -    | not connect               |
| n.c.   | R14    | -    | not connect               |
| n.c.   | R15    | -    | not connect               |
| n.c.   | R16    | -    | not connect               |
| n.c.   | P8     | -    | not connect               |
| n.c.   | P9     | -    | not connect               |
| n.c.   | P12    | -    | not connect               |
| n.c.   | P11    | -    | not connect               |
| n.c.   | P15    | -    | not connect               |
| n.c.   | T9     | -    | not connect               |
| n.c.   | T12    | -    | not connect               |

<!-- image -->

## Name Ball IO Not Connect (n.c.) Pins

Table 10: List of pins that must not be conncet (must be left open)

<!-- image -->

## 7 Package Dimensions

Package: FBGA 256 balls, 1.0mm pitch, size 17mm x 17mm, industrial temperature range -40°C . . . 100°C, RoHS compliant.

<!-- image -->

Figure 17: FBGA256 Package Outline

| FBGA256 Package Dimensions inmm   | FBGA256 Package Dimensions inmm   | FBGA256 Package Dimensions inmm   |
|-----------------------------------|-----------------------------------|-----------------------------------|
| min.                              | typ.                              | max.                              |
| -                                 | -                                 | 2.20                              |
| 0.30                              | -                                 | -                                 |
| -                                 | -                                 | 1.80                              |
|                                   | 0.70 REF                          |                                   |
|                                   | 17.00 BSC                         |                                   |
|                                   | 17.00 BSC                         |                                   |
| 0.50                              | 0.60                              | 0.70                              |
|                                   | 1.00 BSC                          |                                   |

JEDEC MS-034, Variation: AAF-1

Table 11: Package Outline Dimensions

<!-- image -->

## 8 Characteristics

## 8.1 Absolute Maximum Ratings

This section de/uniFB01nes the maximum operating conditions for the device. Normal operation must occure within recomended operation conditions at any time. The functional operation of the device is not implied for these absolute maximum rating conditions.

Table 12: Absolute Maximum Ratings

| Symbol   | Parameter                               | Condition   |   min. | typ.   | max.   | Unit   |
|----------|-----------------------------------------|-------------|--------|--------|--------|--------|
| VCC3V3   | DC supply voltage IO                    |             |   -0.5 |        | 3.9    | V      |
| VCC2V5   | DC analog supply voltage                |             |   -0.5 |        | -3.4   | V      |
| VCC1V2   | DC core supply voltage                  |             |   -0.5 |        | 1.6    | V      |
| V I      | DC input voltage                        |             |   -0.5 |        | 3.6    | V      |
| V O      | DC output voltage                       |             |    0   |        | VCC3V3 | V      |
| T JOP    | Junction temperature range (industrial) |             |  -40   | 25     | 100    | °C     |
| T STG    | Storage temperature range               |             |  -65   |        | 150    | °C     |

Conditions out of absolute maximum rating range may cause permanent damage to the device. Operation at absolute maximum ratings for extended time periods may cause damage of the device.

## Info

## 8.2 Recommended Operation Conditions

| Symbol   | Parameter                | Condition   |   min. |   typ. |   max. | Unit   |
|----------|--------------------------|-------------|--------|--------|--------|--------|
| VCC3V3   | DC supply voltage IO     |             |  3.14  |    3.3 |  3.465 | V      |
| VCC2V5   | DC analog supply voltage |             |  2.375 |    2.5 |  2.625 | V      |
| VCC1V2   | DC core supply voltage   |             |  1.15  |    1.2 |  1.25  | V      |

Table 13: Recommended Operation Conditions

<!-- image -->

## 8.3 DC Characteristics

Table 14: DC Characteristics

| Symbol   | Parameter                          | Condition   | min.         | typ.   | max.   | Unit   |
|----------|------------------------------------|-------------|--------------|--------|--------|--------|
| V I H    | High level input voltage threshold |             | 1.7          |        | 3.6    | V      |
| V I L    | Low level input voltage threshold  |             | 0.3          |        | 0.8    | V      |
| V I HY   | Schmitt-Trigger hysteresis         |             |              |        | 180    | mV     |
| VO H     | High level output voltage          |             | VCC3V3 - 0.2 |        |        | V      |
| VO L     | Low level output voltage           |             |              |        | 0.2    | V      |
| II LEAK  | Input leakage current              |             | -10          |        | 10     | µ A    |
| I OPINDC | DC output current per pin          |             |              |        | 300    | µ A    |
| I OPINAC | DC output current per pin          |             |              |        | 8      | mA     |

## 8.4 Timing Characteristics

Table 15: Characteristics

| Symbol   | Parameter              | Condition                   | min.   |   typ. | max.   | Unit   |
|----------|------------------------|-----------------------------|--------|--------|--------|--------|
| fCLK     | Clock frequency        | quarz stabilized clock      |        |  25    |        | MHz    |
| tCLK     | Clock period           |                             |        |  40    |        | ns     |
| tCLK H   | Clock high time        |                             |        |  20    |        | ns     |
| tCLK L   | Clock low time         |                             |        |  20    |        | ns     |
| tSU      | setup time             | relative to rising CLK edge |        |  -0.75 |        | ns     |
| tHD      | hold time              | relative to rising CLK edge |        |   1.25 |        | ns     |
| tPD      | propagation delay time | relative to rising CLK edge |        |   5    |        | ns     |

## 8.5 Power Dissipation

| Symbol   | Parameter                       | Condition   | min.   |   typ. | max.   | Unit   |
|----------|---------------------------------|-------------|--------|--------|--------|--------|
| PD3V3    | IO supply power dissipation     | 25°C        |        |     75 |        | mW     |
| PD2V5    | Analog supply power dissipation | 25°C        |        |      5 |        | mW     |
| PD1V2    | Core power dissipation          | 25°C        |        |    200 |        | mW     |

Table 16: Power Dissipation

<!-- image -->

## 9 Supplemental Directives

## 9.1 Producer Information

## 9.2 Copyright

TRINAMIC owns the content of this user manual in its entirety, including but not limited to pictures, logos, trademarks, and resources. © Copyright 2018 TRINAMIC. All rights reserved. Electronically published by TRINAMIC, Germany.

Redistributions of source or derived format (for example, Portable Document Format or Hypertext Markup Language) must retain the above copyright notice, and the complete Datasheet User Manual documentation of this product including associated Application Notes; and a reference to other available product-related documentation.

## 9.3 Trademark Designations and Symbols

Trademark designations and symbols used in this documentation indicate that a product or feature is owned and registered as trademark and/or patent either by TRINAMIC or by other manufacturers, whose products are used or referred to in combination with TRINAMIC's products and TRINAMIC's product documentation.

This Datasheet is a non-commercial publication that seeks to provide concise scienti/uniFB01c and technical user information to the target user. Thus, trademark designations and symbols are only entered in the Short Spec of this document that introduces the product at a quick glance. The trademark designation /symbol is also entered when the product or feature name occurs for the /uniFB01rst time in the document. All trademarks and brand names used are property of their respective owners.

## 9.4 Target User

The documentation provided here, is for programmers and engineers only, who are equipped with the necessary skills and have been trained to work with this type of product.

The Target User knows how to responsibly make use of this product without causing harm to himself or others, and without causing damage to systems or devices, in which the user incorporates the product.

## 9.5 Disclaimer: Life Support Systems

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life support systems, without the speci/uniFB01c written consent of TRINAMIC Motion Control GmbH &amp; Co. KG.

Life support systems are equipment intended to support or sustain life, and whose failure to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

Information given in this document is believed to be accurate and reliable. However, no responsibility is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties which may result from its use. Speci/uniFB01cations are subject to change without notice.

## 9.6 Disclaimer: Intended Use

The data speci/uniFB01ed in this user manual is intended solely for the purpose of product description. No representations or warranties, either express or implied, of merchantability, /uniFB01tness for a particular purpose

<!-- image -->

or of any other nature are made hereunder with respect to information/speci/uniFB01cation or the products to which information refers and no guarantee with respect to compliance to the intended use is given.

In particular, this also applies to the stated possible applications or areas of applications of the product. TRINAMIC products are not designed for and must not be used in connection with any applications where the failure of such products would reasonably be expected to result in signi/uniFB01cant personal injury or death (safety-Critical Applications) without TRINAMIC's speci/uniFB01c written consent.

TRINAMIC products are not designed nor intended for use in military or aerospace applications or environments or in automotive applications unless speci/uniFB01cally designated for such use by TRINAMIC. TRINAMIC conveys no patent, copyright, mask work right or other trade mark right to this product. TRINAMIC assumes no liability for any patent and/or other trade mark rights of a third party resulting from processing or handling of the product and/or any other use of the product.

## 9.7 Collateral Documents &amp; Tools

This product documentation is related and/or associated with additional tool kits, /uniFB01rmware and other items, as provided on the product page at: www.trinamic.com.

<!-- image -->

## 10 Figures Index

| 1   | Hardware FOC Application Diagram .                                              | 6   |   9 | Encoder ABN Timing . . . . . . . . .   |   17 |
|-----|---------------------------------------------------------------------------------|-----|-----|----------------------------------------|------|
| 2   | Hardware FOC Block Diagram . . . . .                                            | 6   |  10 | Hall Sensor Angles . . . . . . . . . . |   18 |
| 3   | SPI Timing . . . . . . . . . . . . . . . .                                      | 7   |  11 | nPolePairsNumberOfPolePairs . . .      |   19 |
| 4   | SPIdatagramStructure . . . . . . . . .                                          | 8   |  12 | PID Architectures and Motion Modes     |   22 |
| 5   | nPolePairsNumberOfPolePairs . . . .                                             | 11  |  13 | Inner FOC Control Loop . . . . . . .   |   23 |
| 6   | Integer Representation of Angles with 16 Bit as s16 resp. u16 . . . . . . . . . | 11  |  14 | FOC Transformations . . . . . . . . .  |   24 |
| 7   | ADC Selector and Scaler with Offset Correction . . . . . . . . . . . . . . . .  | 14  |  15 | Motion Modes . . . . . . . . . . . . . |   24 |
|     | ABN Incremental Encoder NPulse any-                                             |     |  16 | BBM Timing . . . . . . . . . . . . . . |   26 |
| 8   | where between 0° and 360° . . . . . .                                           | 16  |  17 | FBGA256 Package Outline . . . . . .    |   95 |

<!-- image -->

## 11 Tables Index

|   1 | Order codes . . . . . . . . . . . . . .       |   4 |   10 | Functional Pin Description . . . . . . .    |   94 |
|-----|-----------------------------------------------|-----|------|---------------------------------------------|------|
|   2 | TABspiTimingParameter . . . . . . .           |   7 |   11 | Package Outline Dimensions . . . . .        |   95 |
|   3 | Numerical Representations . . . . .           |   9 |   12 | Absolute Maximum Ratings . . . . . .        |   96 |
|   4 | Examples of u16, s16, q8.8, q4.12 .           |  10 |   13 | Recommended Operation Conditions            |   96 |
|   5 | Examples of u16, s16, q8.8 . . . . .          |  12 |   14 | DC Characteristics . . . . . . . . . . . .  |   97 |
|   6 | Register Map for TMC4670 . . . . .            |  84 |   15 | Timing Characteristics . . . . . . . . .    |   97 |
|   7 | Pin Type De/uniFB01nition . . . . . . . . . . |  85 |   16 | Power Dissipation . . . . . . . . . . . .   |   97 |
|   8 | Functional Pin Description . . . . . .        |  87 |   17 | IC Revision . . . . . . . . . . . . . . . . |  102 |
|   9 | Supply Voltage Pins and Ground Pins           |  90 |   18 | Document Revision . . . . . . . . . . .     |  102 |

<!-- image -->

## 12 Revision History

## 12.1 IC Revision

Table 17: IC Revision

| Version   | Date        | Author   | Description                    |
|-----------|-------------|----------|--------------------------------|
| V0.90     | 2016-JUN-30 | LL       | Preliminary release.           |
| V0.99     | 2016-SEP-30 | LL       | Engineering Sample Release.    |
| V1.01     | 2016-DEC-21 | LL       | First Revision for Production. |

## 12.2 Document Revision

| Version   | Date        | Author   | Description                                                                                                                                                                                       |
|-----------|-------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| V0.9      | 2016-MAY-23 | LL       | Initial version.                                                                                                                                                                                  |
| V0.9      | 2016-JUL-29 | LL       | First draft committed.                                                                                                                                                                            |
| V0.91     | 2016-OCT-13 | LL       | Functional summary added, updated register set of TMC4670 0v99, ADC selector with scaling and offset correction added, Analog En- coder (AENC) selector with scaling and offset correction added, |
| V0.91     | 2016-OCT-19 | LL       | Pinning updated.                                                                                                                                                                                  |
| V0.91     | 2016-NOV-02 | LL       | Short Spec Block Diagram added.                                                                                                                                                                   |
| V0.91     | 2016-NOV-04 | LL       | PID architecture and PID motion mode drawings added                                                                                                                                               |
| V0.91     | 2016-NOV-07 | LL       | Functional description hierachies updated                                                                                                                                                         |
| V0.91     | 2016-NOV-08 | LL       | First version for www.trinamic.com                                                                                                                                                                |
| V0.99     | 2017-MAR-01 | LL,OM    | Typos and minor corrections                                                                                                                                                                       |
| V1.00     | 2017-MAR-08 | LL       | Characteristics added, table form updated                                                                                                                                                         |
| V1.00     | 2017-MAR-10 | LL       | Characteristics added, table form updated                                                                                                                                                         |
| V1.00     | 2017-APR-27 | LL       | n.c. (not connected) corrected to (not connect); pin table updated; size of package corrected in order codes table;                                                                               |
| V1.00     | 2018-MAR-08 | LL       | industrial temperature range updated;                                                                                                                                                             |
| V1.00     | 2018-OCT-08 | OM       | Pin Table corrected;                                                                                                                                                                              |

Table 18: Document Revision

<!-- image -->