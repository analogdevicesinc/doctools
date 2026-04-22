<!-- lastmod 2023-08-03 -->
<!-- image -->

TRINAMIC Motion Control GmbH &amp; Co. KG Sternstrasse 67 D - 20357 Hamburg GERMANY

WWW.TRINAMIC.COM

## TMC423 Main Features

The  TMC423  is  a  triple  incremental  encoder  input  chip,  which  interfaces  to  any  SPI TM compatible controller. The TMC423 can especially be used in conjunction with the TMC428 triple stepper motor controller to provide position verification or stabilization using some additional software. It integrates 24  bit  counters  for  each  encoder  to  provide  a  high  position  resolution  without  CPU  interaction. Further it allows dynamic resolution adaptation to allow direct comparison of encoder counters with motors using different micro step resolution. All encoder counters can be latched synchronously, or whenever a null channel event occurs, providing a position on strobe holding function. The TMC423 also  provides  a  step  /  direction  output  with  programmable  signal  shaping  for  the  TMC428  as  an optional  function.  A  multiplexer  function  is  also  integrated  for  the  TMC428  reference  switches. Furthermore control and drive of a LED and switch matrix is implemented. All functions can also be used in conjunction.

## Applications

- Stepper Motor Position Verification
- Incremental Encoder Interface Readout
- Position Maintenance
- Step / Direction conversion for TMC428 systems
- Control of LED 6 x 4 Matrix and Switch 6 x 4 Matrix

## Features

- Supports 2 and 3 channel incremental encoders with a wide range of resolutions
- Programmable pulse shaping for step / direction interface
- Allows step / direction signal extraction from TMC428 output data stream
- 24 bit integrated position resolution
- 4-times evaluation of encoder signals
- Programmable prescaler for Incremental Encoder Interface
- Fast 32 bit SPI TM interface
- Integrates Reference Switch Multiplexers
- Can share SPI TM interface with TMC428 and supplies separate interrupt output
- Package: TQ100

Note: SPI is Trademark of Motorola, Inc.

## TMC 423 - Datasheet Serial Triple Incremental Encoder Interface

<!-- image -->

## Revision History

| Version         | Comment                                                                             | Date                   | Name                 |
|-----------------|-------------------------------------------------------------------------------------|------------------------|----------------------|
| Initial Version |                                                                                     | November 22, 2002      | Technical Department |
| 0.4             | Corrected Array Switching Frequency                                                 | January 23, 2003       | Technical Department |
| 0.5             | First Customer Release                                                              | January 24, 2003       | Technical Department |
| 0.6             | Minor corrections                                                                   | March 11, 2003         | Technical Department |
| 0.6             | Changes concerning new company TRINAMIC Motion Control GmbH & Co. KG                | October 1 st , 2004    | Technical Department |
| 0.7             | Corrected Pinning: Position of CLK pin                                              | December, 15 th , 2004 | Technical Department |
| 1.0             | Corrected Reset input in diagram, added supply spec                                 | March, 15 th , 2005    | Technical Department |
| 1.1             | Added Application Environment examples                                              | March, 9 th , 2007     | Technical Department |
| 1.1             | Added encoder timing                                                                | Apr, 4 th , 2007       | Dw                   |
| 1.2             | S/D Appl. corrected, added TMC428 SPI datagram for S/D                              | June 6 th , 2007       | HC                   |
| 1.3             | Figure 4 and Figure 5: TMC423 clock input corrected; more detailed flag description | June 20 th , 2007      | HC, Dw               |

## Table of Contents

| 1 Pinout ..............................................................................................................................................................................5   | 1 Pinout ..............................................................................................................................................................................5   | 1 Pinout ..............................................................................................................................................................................5                                                                                                                       |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.1                                                                                                                                                                                        | 1.1                                                                                                                                                                                        | Pin Description ....................................................................................................................................................6                                                                                                                                          |
| 1.2                                                                                                                                                                                        | 1.2                                                                                                                                                                                        | Recommended Operating Conditions...........................................................................................................7                                                                                                                                                                   |
| 1.3                                                                                                                                                                                        | 1.3                                                                                                                                                                                        | Electrical Characteristics....................................................................................................................................7                                                                                                                                                |
| 2 Block Diagram...............................................................................................................................................................8            | 2 Block Diagram...............................................................................................................................................................8            | 2 Block Diagram...............................................................................................................................................................8                                                                                                                                |
| 3 Application Environment ...........................................................................................................................................9                     | 3 Application Environment ...........................................................................................................................................9                     | 3 Application Environment ...........................................................................................................................................9                                                                                                                                         |
| 3.1                                                                                                                                                                                        | 3.1                                                                                                                                                                                        | Application Description.....................................................................................................................................9                                                                                                                                                  |
| 3.1.1                                                                                                                                                                                      | 3.1.1                                                                                                                                                                                      | Application with TMC236 Stepper Motor Driver...................................................................................9                                                                                                                                                                               |
| 3.1.2                                                                                                                                                                                      | 3.1.2                                                                                                                                                                                      | Application with Step / Direction Power Stage...................................................................................9                                                                                                                                                                              |
| 3.2                                                                                                                                                                                        | 3.2                                                                                                                                                                                        | Application Examples.......................................................................................................................................10                                                                                                                                                  |
| 3.2.1                                                                                                                                                                                      | 3.2.1                                                                                                                                                                                      | Application with TMC236 Stepper Motor Driver.................................................................................10                                                                                                                                                                                |
| 3.2.2                                                                                                                                                                                      | 3.2.2                                                                                                                                                                                      | Application with Step / Direction Power Stage.................................................................................10                                                                                                                                                                               |
| 4 Dynamic Resolution Adaptation............................................................................................................................11                              | 4 Dynamic Resolution Adaptation............................................................................................................................11                              | 4 Dynamic Resolution Adaptation............................................................................................................................11                                                                                                                                                  |
| 5 Serial Peripheral Interface (SPI) with 32-bit Register .....................................................................................12                                           | 5 Serial Peripheral Interface (SPI) with 32-bit Register .....................................................................................12                                           | 5 Serial Peripheral Interface (SPI) with 32-bit Register .....................................................................................12                                                                                                                                                               |
| 5.1 5.2                                                                                                                                                                                    | 5.1 5.2                                                                                                                                                                                    | Description and Specification........................................................................................................................12 32-bit SPI Datagram Structure ......................................................................................................................13 |
| 5.3                                                                                                                                                                                        | 5.3                                                                                                                                                                                        | SPI 32-bit Datagram Specification ...............................................................................................................13                                                                                                                                                            |
| 5.3.1 Overview........................................................................................................................................................13                   | 5.3.1 Overview........................................................................................................................................................13                   |                                                                                                                                                                                                                                                                                                                |
| 6 Incremental Encoder.................................................................................................................................................14                   | 6 Incremental Encoder.................................................................................................................................................14                   | 6 Incremental Encoder.................................................................................................................................................14                                                                                                                                       |
| 7                                                                                                                                                                                          | Configuration Datagrams.........................................................................................................................................15                         | Configuration Datagrams.........................................................................................................................................15                                                                                                                                             |
| 7.1                                                                                                                                                                                        | 7.1                                                                                                                                                                                        | Encoder Interface Prescaler and Null Event Configuration ..................................................................15                                                                                                                                                                                  |
| 7.2                                                                                                                                                                                        | 7.2                                                                                                                                                                                        | Encoder Interface Hold Register Operation ..............................................................................................16                                                                                                                                                                     |
| 7.3                                                                                                                                                                                        | 7.3                                                                                                                                                                                        | Timer Logic Step Pulse Length and Delay ................................................................................................17                                                                                                                                                                     |
| 7.4                                                                                                                                                                                        | 7.4                                                                                                                                                                                        | Control Register and Interrupt Control......................................................................................................17                                                                                                                                                                 |
| 7.5                                                                                                                                                                                        | 7.5                                                                                                                                                                                        | Switch Matrix Read...........................................................................................................................................17                                                                                                                                                |
| 7.6                                                                                                                                                                                        | 7.6                                                                                                                                                                                        | LED Matrix Write................................................................................................................................................17                                                                                                                                             |
| 8 SPI-Protocol for Interface with 6-bit Register...................................................................................................18                                      | 8 SPI-Protocol for Interface with 6-bit Register...................................................................................................18                                      | 8 SPI-Protocol for Interface with 6-bit Register...................................................................................................18                                                                                                                                                          |
| 8.1                                                                                                                                                                                        | Step and Direction Pulse conversion..........................................................................................................18                                            | Step and Direction Pulse conversion..........................................................................................................18                                                                                                                                                                |
| 9                                                                                                                                                                                          | LED and Switch Matrix..............................................................................................................................................19                      | LED and Switch Matrix..............................................................................................................................................19                                                                                                                                          |
| 10                                                                                                                                                                                         | Package dimensions..................................................................................................................................................20                     | Package dimensions..................................................................................................................................................20                                                                                                                                         |

## List of Figures

```
Figure 1: Pinout TMC423  5 Figure 2: Block diagram of the TMC423  8 Figure 3: Application Environment 9 Figure 4: Example for Application with TMC236 Stepper Motor Driver 10 Figure 5: Example for Application with Step / Direction Power Stage 10 Figure 6: TMC423 Application 11 Figure 7: Timing diagram of the Serial Interface 12 Figure 8: Structure 32-Bit Interface 13 Figure 9: Overview TMC423 Registers 13 Figure 10: Encoder Output and Evaluation 14 Figure 11: Crosstalk on Encoder Wire 14 Figure 12: Step Direction conversion 18 Figure 13: Connection to the matrix 19 Figure 14: 100-Pin TQFP Top View 20 Figure 15: 100-Pin TQFP Side View 20 Figure 16: 100-Pin TQFP Side View Detail A 20
```

## List of Tables

Table 1: TMC423 Pinout 7 Table 2: Operating Conditions 7 Table 3: Operating Conditions 7 Table 4: Prescaler factors for different motors and encoders 11 Table 5: Interrupt Flags 13 Table 6: SPI Datagram Prescaler 16 Table 7: SPI Datagram Hold Register 16 Table 8: SPI Datagram Step-/Dir logic 17 Table 9: SPI Datagram Control Register  17 Table 10: Switch Matrix Read 17 Table 11: LED Matrix Write 17 Table 12: SPI Datagram Step / Direction Converter 18 Table 13: Datagram example and RAM contents for three step-direction drivers 18 Table 14: TMC423 LED Matrix Pins 19 Table 15: TQFP Dimensions 21

## 1  Pinout

Figure 1: Pinout TMC423

<!-- image -->

## 1.1 Pin Description

| Pin         | Location                     | Dir   | Description                                                            |
|-------------|------------------------------|-------|------------------------------------------------------------------------|
| GND         | 1, 9, 36, 39, 51, 68, 69, 91 | In    | Ground                                                                 |
| ENC1_A      | 3                            | In    | Incremental Encoder Interface 1 Channel A                              |
| ENC1_B      | 4                            | In    | Incremental Encoder Interface 1 Channel B                              |
| ENC1_N      | 5                            | In    | Incremental Encoder Interface 1 Channel N (Connect to +5V if not used) |
| ENC2_A      | 6                            | In    | Incremental Encoder Interface 2 Channel A                              |
| ENC2_B      | 10                           | In    | Incremental Encoder Interface 2 Channel B                              |
| ENC2_N      | 11                           | In    | Incremental Encoder Interface 2 Channel N (Connect to +5V if not used) |
| ENC3_A      | 12                           | In    | Incremental Encoder Interface 3 Channel A                              |
| ENC3_B      | 13                           | In    | Incremental Encoder Interface 3 Channel B                              |
| ENC3_N      | 14                           | In    | Incremental Encoder Interface 3 Channel N (Connect to +5V if not used) |
| TDI         | 2                            |       | Connect to Ground                                                      |
| TMS         | 7                            |       | Connect to 5 Volt via Pull-Up Resistor                                 |
| TRST        | 16                           |       | Connect to 5 Volt via Pull-Up Resistor                                 |
| TDO         | 49                           |       | To be left open                                                        |
| TCK         | 100                          |       | Connect to Ground                                                      |
| VCCI        | 8, 20, 44, 58, 82            | In    | Positive Power Supply 5 Volt                                           |
| VCCA        | 35, 57, 67, 90               | In    | Positive Power Supply 2.5 Volt                                         |
| GND         | 39                           | In    | Unused input: Connect to Ground                                        |
| CLK         | 88                           | In    | System Clock 16MHz                                                     |
| EXT_RES     | 87                           | In    | External Reset Low Active                                              |
| NC          | 37, 89                       | In    | Connect to Ground                                                      |
| PRA / IO    | 92                           |       | To be left open                                                        |
| PRB / IO    | 34                           |       | To be left open                                                        |
| Step 1      | 15                           | Out   | Step/Direction Interface - Step Output Motor 1                         |
| Dir 1       | 18                           | Out   | Step/Direction Interface - Direction Output Motor 1                    |
| Step 2      | 21                           | Out   | Step/Direction Interface - Step Output Motor 2                         |
| Dir 2       | 22                           | Out   | Step/Direction Interface - Direction Output Motor 2                    |
| Step 3      | 24                           | Out   | Step/Direction Interface - Step Output Motor 3                         |
| Dir 3       | 25                           | Out   | Step/Direction Interface - Direction Output Motor 3                    |
| SDO_D       | 26                           | Out   | Step / Direction SPI MISO                                              |
| SDI_D       | 27                           | In    | Step / Direction SPI MOSI                                              |
| SCK_D       | 28                           | In    | Step / Direction SPI SCK                                               |
| NSCS_D      | 29                           | In    | Step / Direction SPI NSCS                                              |
| REF0        | 40                           | Out   | Reference switch output 1                                              |
| REF1        | 41                           | Out   | Reference switch output 2                                              |
| REF2        | 42                           | Out   | Reference switch output 3                                              |
| STOPR0      | 43                           | In    | Right Stop Switch Motor 1                                              |
| STOPR1      | 45                           | In    | Right Stop Switch Motor 2                                              |
| STOPR2      | 46                           | In    | Right Stop Switch Motor 3                                              |
| STOPL0      | 47                           | In    | Left Stop Switch Motor 1                                               |
| STOPL1      | 48                           | In    | Left Stop Switch Motor 2                                               |
| STOPL2      | 50                           | In    | Left Stop Switch Motor 3                                               |
| COLUMN_PIN0 | 75                           | Out   | Column Drive Pin 0                                                     |
| COLUMN_PIN1 | 74                           | Out   | Column Drive Pin 1                                                     |
| COLUMN_PIN2 | 73                           | Out   | Column Drive Pin 2                                                     |
| COLUMN_PIN3 | 72                           | Out   | Column Drive Pin 3                                                     |
| SW_ROW_PIN0 | 65                           | In    | Switch Matrix Pin 0                                                    |
| SW_ROW_PIN1 | 64                           | In    | Switch Matrix Pin 1                                                    |
| SW_ROW_PIN2 | 63                           | In    | Switch Matrix Pin 2 Switch Matrix Pin 3                                |
| SW_ROW_PIN3 | 62                           | In    |                                                                        |

| SW_ROW_PIN4   |   61 | In   | Switch Matrix Pin 4           |
|---------------|------|------|-------------------------------|
| SW_ROW_PIN5   |   60 | In   | Switch Matrix Pin 5           |
| LED_ROW_PIN0  |   59 | Out  | LED Matrix Drive Pin 0        |
| LED_ROW_PIN1  |   56 | Out  | LED Matrix Drive Pin 1        |
| LED_ROW_PIN2  |   55 | Out  | LED Matrix Drive Pin 2        |
| LED_ROW_PIN3  |   54 | Out  | LED Matrix Drive Pin 3        |
| LED_ROW_PIN4  |   53 | Out  | LED Matrix Drive Pin 4        |
| LED_ROW_PIN5  |   52 | Out  | LED Matrix Drive Pin 5        |
| SDO           |   99 | Out  | SPI MISO                      |
| SDI           |   98 | In   | SPI MOSI                      |
| SCK           |   97 | In   | SPI SCK                       |
| NSCS          |   96 | In   | SPI NSCS                      |
| SDO428        |   95 | In   | SPI MISO Pin of TMC428        |
| NSCS428       |   94 | In   | SPI NSCS Pin of TMC428        |
| NINT          |   93 | Out  | Interrupt Output (low active) |

Table 1: TMC423 Pinout

Note: Pins which are not marked in Figure 1: Pinout TMC423 on page 5 must be left open.

## 1.2 Recommended Operating Conditions

Table 2: Operating Conditions

| Parameter           | Value       | Unit   |
|---------------------|-------------|--------|
| Clock Frequency (1) | 16          | MHz    |
| Temperature         | 0 … + 70    | °C     |
| 2.5 V Power Supply  | 2.25 … 2.75 | V CCA  |
| 5.0 V Power Supply  | 4.50 … 5.50 | V CCI  |

1 - slower frequencies are also supported. Please take care about the timing information in this datasheet, since they are based on 16MHz Clock Frequency.

## 1.3 Electrical Characteristics

| Parameter                                | Min     | Max   | Unit   |
|------------------------------------------|---------|-------|--------|
| Supply Current 2.5V                      |         | 100   | mA     |
| Supply Current 5.0V (Output current = 0) |         | 10    | mA     |
| LED driver current per pin               |         | 20    | mA     |
| Input voltage level Low                  |         | 0.8   | V      |
| Input voltage level High                 | 2.4     |       | V      |
| Encoder input pulse length               | 2 t CLK |       |        |
| Encoder count rate                       |         | f CLK |        |

Table 3: Operating Conditions

## 2  Block Diagram

Figure 2: Block diagram of the TMC423

<!-- image -->

## 3  Application Environment

Figure 3: Application Environment

<!-- image -->

## 3.1 Application Description

## 3.1.1 Application with TMC236 Stepper Motor Driver

A complete close-loop motion control system consists of the TMC428 three-axis motion controller, the powerful TMC236 stepper motor driver and the TMC423 Encoder Interface. The system is controlled by an inexpensive microcontroller.

The  main  advantage  of  the  system  is  that  time  critical  communication  to  the  TMC236  driver  is performed by the TMC428. The main purpose of the inexpensive microcontroller is to parameterize the TMC428 and TMC423 and to send motion parameters like maximum speed or target position to the TMC428. Position validation is done by reading the actual position of the TMC428 and the TMC423.

## 3.1.2 Application with Step / Direction Power Stage

Another  possibility  to  built  a  close  loop  motion  control  system  is  to  use  the  TMC423  as  encoder interface  and  also  as  a  step  direction  converter.  Thereto  the  TMC423  converts  the  SPI TM datagrams sent  by  the  TMC428  into  parameterizeable  step  and  direction  pulses.  For  parameterizing  both  the TMC428 and TMC423 have to be connected via SPI TM interface to an inexpensive microcontroller.

## 3.2 Application Examples

## 3.2.1 Application with TMC236 Stepper Motor Driver

This example illustrates the encoder connection and the use of reference switches with the TMC423 and additionally the SPI interface connections between TMC423, TMC428 and a microcontroller. The communication to the drivers (e.g. TMC236) is performed via SPI by the TMC428 motion control chip.

<!-- image -->

GND

Figure 4: Example for Application with TMC236 Stepper Motor Driver

## 3.2.2 Application with Step / Direction Power Stage

Additionally to the previous example the use of the TMC423 as step/direction converter is shown. The reference switches can be used as above.

Figure 5: Example for Application with Step / Direction Power Stage

<!-- image -->

## 4  Dynamic Resolution Adaptation

The  dynamic  resolution  adaptation  is  needed  to  link  stepper  motors  and  encoders  with  different resolutions. The characteristics of the connected hardware must provided to the TMC423 by sending the corresponding SPI telegram. (See 5.3.1 Overview on page 13 in this issue). The TMC423 multiplies the encoder counter by a user selectable value in the range 1..1024, and then divides it by 16. When using incremental encoders with N channel it is also possible to select between different behaviors when the N channel is triggered.

Figure 6: TMC423 Application

<!-- image -->

Table 4 shows a number of prescaler factors for possible combinations of micro step resolution and encoder resolution. Note: The given number of pulses have to be multiplied by four since 4-times encoder signal evaluation is used. (See Figure 10: Encoder Output and Evaluation on page 14).

Table 4: Prescaler factors for different motors and encoders

| Microstep   | Encoder Resolution [Pulses / Rotation]   | Encoder Resolution [Pulses / Rotation]   | Encoder Resolution [Pulses / Rotation]   | Encoder Resolution [Pulses / Rotation]   | Encoder Resolution [Pulses / Rotation]   | Encoder Resolution [Pulses / Rotation]   | Encoder Resolution [Pulses / Rotation]   | Encoder Resolution [Pulses / Rotation]   |   Encoder Resolution [Pulses / Rotation] | Encoder Resolution [Pulses / Rotation]   |
|-------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|
| s           | 1024                                     | 1000                                     | 512                                      | 500                                      | 256                                      | 250                                      | 200                                      | 125                                      |                                       50 | 25                                       |
| 12800       | 3.125                                    | 3.2                                      | 6.25                                     | 6.4                                      | 12.5                                     | 12.8                                     | 16                                       | 25.6                                     |                                       64 | ----                                     |
| 6400        | 1.5625                                   | 1.6                                      | 3.125                                    | 3.2                                      | 6.25                                     | 6.4                                      | 8                                        | 12.8                                     |                                       32 | 64                                       |
| 3200        | ----                                     | ----                                     | 1.5625                                   | 1.6                                      | 3.125                                    | 3.2                                      | 4                                        | 6.4                                      |                                       16 | 32                                       |
| 1600        | ----                                     | ----                                     | ----                                     | ----                                     | 1.5625                                   | 1.6                                      | 2                                        | 3.2                                      |                                        8 | 16                                       |
| 800         | ----                                     | ----                                     | ----                                     | ----                                     | ----                                     | ----                                     | 1                                        | 1.6                                      |                                        4 | 8                                        |
| 400         | ----                                     | ----                                     | ----                                     | ----                                     | ----                                     | ----                                     | ----                                     | ----                                     |                                        2 | 4                                        |

## 5  Serial Peripheral Interface (SPI) with 32-bit Register

## 5.1 Description and Specification

Four pins named nSCS, SCK, SDI and SDO form the serial peripheral interface from a microcontroller to  the  TMC423.  The  communication  between  the  microcontroller  and  the  TMC423  takes  place  via datagrams with a fixed length of 32 bit. The microcontroller acts always as master and the TMC423 as slave.

The SPI TM of the TMC423 behaves like a simple 32-bit shift register. Incoming serial data at pin SDI is shifted  with  the  rising  edge  of  the  clock  signal  SCK  into  the  32-bit  register.  The  content  of  this register is copied after 32-bits with the rising edge of the selection signal nSCS into a buffer register of  32-bit  length.  The  SPI TM of  the  TMC423 sends back data read from registers immediately via the SDO signal. It processes serial data synchronously to the clock signal CLK.

Because of on-the-fly processing of the input data stream, the serial microcontroller interface of the TMC423 requires the serial data clock signal SCK to have a minimum low / high time of three clock cycles.  The data signal SDI driven by the microcontroller has to be valid at the rising edge of the serial data clock input SCK. The maximum duration of the serial data clock period is unlimited.

A complete serial datagram frame has a fixed length of 32 bit. While the data transmission from the microcontroller to the TMC423 is idle, the low active serial chip select input nSCS and also the serial data clock signal SCK are set to high. The serial data input SDI of the TMC428 has to be driven by the microcontroller. Like other SPI compatible devices, the SDO signal of the TMC423 is high impedance 'Z' as long as nSCS is high.

The signal nSCS has to be high for at least three clock cycles before starting a datagram transmission. To initiate a transmission, the signal nSCS has to be set to low. Three clock cycles later the serial data clock may go low. The most significant bit (MSB) of a 32 bit wide datagram comes first and the least significant  bit  (LSB)  is  transmitted  as  the  last  one.  A  data  transmission  is  finished  by  setting  nSCS high for three or more CLK cycles after the last rising SCK slope. nSCS and SCK change in opposite order from low to high at the end of a transmission as these signals change from high to low at the beginning. The timing of the serial microcontroller interface is outlined in Figure 7: Timing diagram of the Serial Interface .

Figure 7: Timing diagram of the Serial Interface

<!-- image -->

## 5.2 32-bit SPI Datagram Structure

Figure 8: Structure 32-Bit Interface

| Datagram from TMC423 send to µC                                                                                     | Datagram from TMC423 send to µC                                                                                     |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| 2 7 1 7 1 8 1 9 2 0 2 1 2 2 2 3 2 4 2 5 2 6 1 6 6 7 8 9 1 0 1 1 1 2 1 3 1 4 1 5 5 2 8 2 9 3 0 3 1 0 1 2 3 4 0 0 0 0 | 2 7 1 7 1 8 1 9 2 0 2 1 2 2 2 3 2 4 2 5 2 6 1 6 6 7 8 9 1 0 1 1 1 2 1 3 1 4 1 5 5 2 8 2 9 3 0 3 1 0 1 2 3 4 0 0 0 0 |
| INT                                                                                                                 | Data                                                                                                                |

| Datagram from µC to TMC423                                                                                  | Datagram from µC to TMC423                                                                                  |
|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| 2 7 1 7 1 8 1 9 2 0 2 1 2 2 2 3 2 4 2 5 2 6 1 6 6 7 8 9 1 0 1 1 1 2 1 3 1 4 1 5 5 2 8 2 9 3 0 3 1 0 1 2 3 4 | 2 7 1 7 1 8 1 9 2 0 2 1 2 2 2 3 2 4 2 5 2 6 1 6 6 7 8 9 1 0 1 1 1 2 1 3 1 4 1 5 5 2 8 2 9 3 0 3 1 0 1 2 3 4 |
| Address                                                                                                     | Data                                                                                                        |

Table 5: Interrupt Flags

|   Interrupt Flags [Bit] | Name     | Description                              |
|-------------------------|----------|------------------------------------------|
|                      31 | INT_ext  | external Interrupt, e.g. TMC428          |
|                      30 | INT_enc1 | N Signal of Encoder Interface 1 detected |
|                      29 | INT_enc2 | N Signal of Encoder Interface 2 detected |
|                      28 | INT_enc3 | N Signal of Encoder Interface 3 detected |

## 5.3 SPI 32-bit Datagram Specification

## 5.3.1 Overview

Figure 9: Overview TMC423 Registers

<!-- image -->

| Byte #    | Byte 3     | Byte 3   | Byte 3   | Byte 3   | Byte 3   | Byte 3   | Byte 3   | Byte 3                      | Byte 2                                              | Byte 2                                              | Byte 2                                              | Byte 2                                              | Byte 2                                              | Byte 2                                              | Byte 1                                              | Byte 1                                              | Byte 1                                              | Byte 1                                              | Byte 1                                              | Byte 1                                              | Byte 0                                              | Byte 0                                              | Byte 0                                              | Byte 0                                              | Byte 0                                              | Byte 0                                              | Byte 0                                              |          |          |          |
|-----------|------------|----------|----------|----------|----------|----------|----------|-----------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|----------|----------|----------|
| Bit #     | 31         | 30       | 29       | 28       | 27 26    | 25       | 24       | 23                          | 22 6 5                                              | 21                                                  | 20 19                                               | 18 17                                               | 16 15                                               | 14                                                  | 13                                                  | 12 11                                               | 10                                                  | 9                                                   | 8                                                   | 7                                                   | 4                                                   | 3                                                   | 2                                                   | 1                                                   | 0                                                   |                                                     |                                                     |          |          |          |
|           | RW Address |          |          |          |          |          |          |                             |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |          |          |          |
| Control   | 0          | 0        | 0        | 0        | 0        | 0        | 0        | 1                           | Encoder 1 Prescaler                                 | Encoder 1 Prescaler                                 | Encoder 1 Prescaler                                 | Encoder 1 Prescaler                                 | Encoder 1 Prescaler                                 | Encoder 1 Prescaler                                 | Encoder 1 Prescaler                                 | N Polarity                                          | N Hold N Clear                                      | N Trigger                                           |                                                     | Direction                                           |                                                     | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            |          |          |          |
| Control   | 0          | 0        | 0        | 0        | 0        | 0        | 1        | 1                           | Encoder 2 Prescaler                                 | Encoder 2 Prescaler                                 | Encoder 2 Prescaler                                 | Encoder 2 Prescaler                                 | Encoder 2 Prescaler                                 | Encoder 2 Prescaler                                 | Encoder 2 Prescaler                                 | N Polarity                                          | N Hold N Clear                                      | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            |          |          |          |
| Control   | 0          | 0        | 0        | 0        | 0        | 1        | 0        | 1                           | Encoder 3 Prescaler                                 | Encoder 3 Prescaler                                 | Encoder 3 Prescaler                                 | Encoder 3 Prescaler                                 | Encoder 3 Prescaler                                 | Encoder 3 Prescaler                                 | Encoder 3 Prescaler                                 | N Polarity                                          | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            |          |          |          |
| Control   | 0          | 0        | 0        | 0        | 0        | 1        | 1        | 1                           | Encoder 1, 2, 3 Prescaler - set all commonly        | Encoder 1, 2, 3 Prescaler - set all commonly        | Encoder 1, 2, 3 Prescaler - set all commonly        | Encoder 1, 2, 3 Prescaler - set all commonly        | Encoder 1, 2, 3 Prescaler - set all commonly        | Encoder 1, 2, 3 Prescaler - set all commonly        | Encoder 1, 2, 3 Prescaler - set all commonly        | Encoder 1, 2, 3 Prescaler - set all commonly        | Encoder 1, 2, 3 Prescaler - set all commonly        | Encoder 1, 2, 3 Prescaler - set all commonly        | Encoder 1, 2, 3 Prescaler - set all commonly        | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            |          |          |          |
| Data      | 0          | 0        | 0        | 0        | 1        | 0        | 0        | Encoder 1 Position Register |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |          |          |          |
| Data      | 0          | 0        | 0        | 0        | 1        | 0        | 1        | Encoder 2 Position Register |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |          |          |          |
| Data      | 0          | 0        | 0        | 0        | 1        | 1        | 0        | Encoder 3 Position Register |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |          |          |          |
| Step /Dir | 0          | 0        | 0        | 0        | 1        | 1 1      | 1        |                             | Reserved Step Pulse Delay Step Pulse Length         |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |          |          |          |
| INT       | 0          | 0        | 0        | 1        | 0 0      | 0        |          | 1                           | INT EN Reg Hold                                     | Clear                                               | Flags                                               | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved                                            | Reserved | Reserved | Reserved |
| Matrix    | 0          | 0        | 0        | 1        | 0        | 1 0      |          | 0                           | Switch Row 0 Switch Row 1 Switch Row 2 Switch Row 3 | Switch Row 0 Switch Row 1 Switch Row 2 Switch Row 3 | Switch Row 0 Switch Row 1 Switch Row 2 Switch Row 3 | Switch Row 0 Switch Row 1 Switch Row 2 Switch Row 3 | Switch Row 0 Switch Row 1 Switch Row 2 Switch Row 3 | Switch Row 0 Switch Row 1 Switch Row 2 Switch Row 3 | Switch Row 0 Switch Row 1 Switch Row 2 Switch Row 3 | Switch Row 0 Switch Row 1 Switch Row 2 Switch Row 3 | Switch Row 0 Switch Row 1 Switch Row 2 Switch Row 3 | Switch Row 0 Switch Row 1 Switch Row 2 Switch Row 3 | Switch Row 0 Switch Row 1 Switch Row 2 Switch Row 3 | Switch Row 0 Switch Row 1 Switch Row 2 Switch Row 3 | Switch Row 0 Switch Row 1 Switch Row 2 Switch Row 3 | Switch Row 0 Switch Row 1 Switch Row 2 Switch Row 3 | Switch Row 0 Switch Row 1 Switch Row 2 Switch Row 3 | Switch Row 0 Switch Row 1 Switch Row 2 Switch Row 3 | Switch Row 0 Switch Row 1 Switch Row 2 Switch Row 3 | Switch Row 0 Switch Row 1 Switch Row 2 Switch Row 3 | Switch Row 0 Switch Row 1 Switch Row 2 Switch Row 3 |          |          |          |
| Matrix    | 0          | 0        | 0        | 1        | 0        | 1 0      | 1        | LED                         | LED Row 0 LED Row 1 LED Row 2 Row 3                 |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |                                                     |          |          |          |

## 6  Incremental Encoder

Incremental  Encoders  are  translating  the  rotary  motion  of  a  shaft  into  a  two-channel  digital quadrature output. The light emitted from a LED is focused onto a reflective code wheel. As the shaft moves, the code wheel rotates, reflecting light from an alternating bright and dark pattern.

The  TMC423  samples  the  incoming  signals ENCx\_a and ENCx\_B from  the  incremental  encoder.  A internal algorithm block counts the amount of edges generated by the encoder. A prescaler value can be used to adapt the incremental encoder resolution to the stepper motor resolution.

For high resolution the TMC423 evaluates the encoder signals 4-times during each encoder step. This has to kept in mind when choosing the prescaler value.

Figure 10: Encoder Output and Evaluation

<!-- image -->

Note: It is possible that the encoder signals ENCx\_A, ENCx\_B and ENCx\_N are polluted with crosstalk noise.  Crosstalk  could  influence  the  internal  logic,  to  overcome  this  problem  internal  filters  are applied to ensure correct functionality. Furthermore is saves the need for external analog filters. e.g.: Figure 11: Crosstalk on Encoder Wire shows crosstalk from channel A to channel B.

Figure 11: Crosstalk on Encoder Wire

<!-- image -->

## 7  Configuration Datagrams

## 7.1 Encoder Interface Prescaler and Null Event Configuration

The  Encoder  Interface  Initialization  datagram  configures  the  parameterizeable  encoder  prescaler  to adapt the TMC423 for different incremental encoders. Furthermore the TMC423 behavior concerning the N channel can be selected.

Example: A 1000 steps per rotation encoder is to connect at a stepper motor with 12800 microsteps per rotation. When the next event at the high active N channel is found, the position register must set to zero. Only Encoder Interface 1 is connected. The following datagram performs this task:

- Bits 31 down to 24 have to be set to 01 HEX to select encoder interface 1
- The N channel is set up correctly when bits 11 down to 0 are set to A0 HEX .
- The prescaler value has to set to 12800 / (1000*4) = 3.2. Therefore bits 23 down to 12 must set to 831 HEX .

<!-- image -->

| Bit   | Encoder Interface Initialization                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 31…28 | '0000' Register Address                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 27…25 | Interface Selection 000 = Interface 1 001 = Interface 2 010 = Interface 3 011 = Interface 1, 2 and 3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 24    | '1'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 23…12 | External Encoder Resolution and Corresponding Prescaler Factor Bits 15 … 12: Fractional part of Factor. Unit: 1/16 (when bit 23 = 0) resp. 1/5 (bit 23 = 1) Bits 22 … 16: Integer part of Factor Bit 23: Switches Fractional part between 1/5 resolution or 1/16 resolution Default: (010) h (prescaler 1) (default value after power on) Example settings: Encoder: 1024 lines (4096 steps per rotation) (032) h for 12800 micro steps per rotation (prescaler 3.125) (019) h for 6400 micro steps (prescaler 1.5625) Encoder: 1000 lines (831) h for 12800 micro steps (prescaler 3.2) (813) h for 6400 micro steps (prescaler 1.6) Encoder: 512 lines (064) h for 12800 micro steps (prescaler 6.25) (032) h for 6400 micro steps (prescaler 3.125) (019) h for 3200 micro steps (prescaler 1.5625) Encoder: 500 lines (862) h for 12800 micro steps (prescaler 6.4) (831) h for 6400 micro steps (prescaler 3.2) (813) h for 3200 micro steps (prescaler 1.6) Encoder: 256 lines (0C8) h for 12800 micro steps (prescaler 12.5) (064) h for 6400 micro steps (prescaler 6.25) (032) h for 3200 micro steps (prescaler 3.125) (019) h for 1600 micro steps (prescaler 1.5625) Encoder: 250 lines (8C4) h for 12800 micro steps (prescaler 12.8) (862) h for 6400 micro steps (prescaler 6.4) (831) h for 3200 micro steps (prescaler 3.2) (813) h for 1600 micro steps (prescaler 1.6) Encoder: 200 lines (100) h for 12800 micro steps (prescaler 16) (080) h for 6400 micro steps (prescaler 8) (040) h for 3200 micro steps (prescaler 4) |

Table 6: SPI Datagram Prescaler

<!-- image -->

|     | (010) h for 800 micro steps (prescaler 1) Encoder: 125 lines (993) h for 12800 micro steps (prescaler 25.6) (8C4) h for 6400 micro steps (prescaler 12.8) (862) h for 3200 micro steps (prescaler 6.4) (831) h for 1600 micro steps (prescaler 3.2) (813) h for 800 micro steps (prescaler 1.6) Encoder: 50 lines (200 steps per rotation) (400) h for 12800 micro steps (prescaler 64) (200) h for 6400 micro steps (prescaler 32) (100) h for 3200 micro steps (prescaler 16) (080) h for 1600 micro steps (prescaler 8) (040) h for 800 micro steps (prescaler 4) (020) h for 400 micro steps (prescaler 2)   |
|-----|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 11  | h N Polarity for Selected Interface 0 = active low (default) 1 = active high When changing the polarity, please be aware that a single clear on N Event might be triggered, and thus should not be initiated in the same write access.                                                                                                                                                                                                                                                                                                                                                                           |
| 10  | Hold on N for Selected Interface 0 = no hold (default) 1 = active: Encoder counter freezes during                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 9   | 0 channel event. Clear on N Event for Selected Interface 0 = no clear (default) 1 = active When switched to active, then it depends on bit 8, if a clear event is issued only once, or always when the N channel becomes active.                                                                                                                                                                                                                                                                                                                                                                                 |
| 8   | N Trigger Selection 0 = only at next N signal (default) 1 = always at N signal The clear event last until the N signal goes inactive again. If earlier termination is desired, i.e. to preset the encoder counter to a different value, disable 'Clear on N' prior to changing the position register.                                                                                                                                                                                                                                                                                                            |
| 7   | add or sub register for each step (CW = looking onto the axis) 0= add for CW, sub for CCW (default) 1= add for CCW, sub for CW                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 6…0 | Reserved                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## 7.2 Encoder Interface Hold Register Operation

To read the actual contents of the position register or to preset the position register the following command is to be used:

Table 7: SPI Datagram Hold Register

| Bit   | Encoder Interface Control (Read/Preload Encoder Hold Register)                                                                                                |
|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 31…28 | '0000' Register Address                                                                                                                                       |
| 27…25 | Select Encoder Hold Register 100 = Hold register in encoder interface 1 101 = Hold register in encoder interface 2 110 = Hold register in encoder interface 3 |
| 24    | Read or Preload Selection 0 = Read encoder hold register 1 = Preload encoder hold register                                                                    |
| 23…0  | Encoder Hold Register Data                                                                                                                                    |

## 7.3 Timer Logic Step Pulse Length and Delay

To parameterize the step length and delay the next datagram is to be used:

Table 8: SPI Datagram Step-/Dir logic

| Bit   | Write Step Pulse Length / Delay                                              |
|-------|------------------------------------------------------------------------------|
| 31…25 | '0000111' Register Address                                                   |
| 24    | '1'                                                                          |
| 23…16 | Step Pulse Length (default value = 48 (10) after PON)                        |
| 15…6  | Step Pulse Delay after Direction Change (default value = 160 (10) after PON) |
| 5…0   | Reserved                                                                     |

## 7.4 Control Register and Interrupt Control

This datagram configures the interrupt control of the TMC423. When enabled, the N channel pulse of all encoders is fed to the NINT pin.

Table 9: SPI Datagram Control Register

| Bit   | Control Register                                                                                   |
|-------|----------------------------------------------------------------------------------------------------|
| 31…25 | '0001000' Register Address                                                                         |
| 24    | '1'                                                                                                |
| 23    | Set Common Hold for Encoder Hold Registers 0 = no hold (default) 1 = freeze encoder hold registers |
| 22    | Encoder Interrupt Enable, if Null signal 0 = interrupt disable (default) 1 = interrupt enable      |
| 21    | Clear Interrupt Flags 0 = no clear (default) 1= clear flags                                        |
| 20…0  | Reserved                                                                                           |

## 7.5 Switch Matrix Read

Table 10: Switch Matrix Read

| Bit   | Control Register             |
|-------|------------------------------|
| 31…25 | '0001001' Register Address   |
| 24    | '0'                          |
| 23…18 | Switch Matrix Register Row 3 |
| 17…12 | Switch Matrix Register Row 2 |
| 11…6  | Switch Matrix Register Row 1 |
| 5…0   | Switch Matrix Register Row 0 |

## 7.6 LED Matrix Write

| Bit   | Control Register           |
|-------|----------------------------|
| 31…25 | '0001010' Register Address |
| 24    | '1'                        |
| 23…18 | LED Matrix Register Row 3  |
| 17…12 | LED Matrix Register Row 2  |
| 11…6  | LED Matrix Register Row 1  |
| 5…0   | LED Matrix Register Row 0  |

Table 11: LED Matrix Write

## 8  SPI-Protocol for Interface with 6-bit Register

The 6-bit SPI Interface is used to receive step / direction information from the TMC428. The TMC423 processes the data and issues the corresponding step / direction signals via the step / direction pins. Bit0 (Pulse 1) have to be sent first to the TMC423.

Table 12: SPI Datagram Step / Direction Converter

|   Bit | Step / Direction Converter   |
|-------|------------------------------|
|     0 | Pulse 1                      |
|     1 | Direction 1                  |
|     2 | Pulse 2                      |
|     3 | Direction 2                  |
|     4 | Pulse 3                      |
|     5 | Direction 3                  |

The order of the control signals serially sent from the TMC428 has to be defined. This can be done by writing so called primary signal codes into the stepper motor driver datagram configuration area of the  on-chip  configuration  RAM  of  the  TMC428.  This  signals  codes  are  $13  (step  first)  and  $12 (direction). To switch to the next motor the next motor bit (NxM) has to be set.

Table 13: Datagram example and RAM contents for three step-direction drivers

|   Position within datagram |   Driver/motor |   NxM bit | TMC428 signal code   | RAM data   | TMC428 mnemonic of primary signal   |
|----------------------------|----------------|-----------|----------------------|------------|-------------------------------------|
|                          0 |              1 |         0 | $13                  | $13        | Step                                |
|                          1 |              1 |         1 | $12                  | $32        | Direction                           |
|                          2 |              2 |         0 | $13                  | $13        | Step                                |
|                          3 |              2 |         1 | $12                  | $32        | Direction                           |
|                          4 |              3 |         0 | $13                  | $13        | Step                                |
|                          5 |              3 |         1 | $12                  | $32        | Direction                           |

## 8.1 Step and Direction Pulse conversion

Step pulses can be modified in their pulse width and delayed after an direction change was done. The corresponding datagram (See 7.3) on page 17) is used to parameterize the Step / Dir interface.

Figure 12: Step Direction conversion

<!-- image -->

## 9  LED and Switch Matrix

The TMC423 can be used to drive a LED matrix or to get information from a switch matrix, whether the  switches  are  on  or  off.  LEDs  or  switches  are  only  active  when  the  corresponding  column  is selected by setting it to zero. The switch frequency of the column pins is fixed to 500 Hz at a clock frequency of 16MHz. The LEDs are driven with a maximum current of 20mA.

The following Table 14: TMC423 LED Matrix Pins shows how the LED Matrix Write register is mapped to the corresponding TMC423 pins to drive the LEDs.

Table 14: TMC423 LED Matrix Pins

| TMC423 Pin: COLUMN_PIN [3:0]   | TMC423 Pin: COLUMN_PIN [3:0]   | TMC423 Pin: COLUMN_PIN [3:0]   | TMC423 Pin: COLUMN_PIN [3:0]   | TMC423 Pin: LED_ROW_PIN [5:0]   | TMC423 Pin: LED_ROW_PIN [5:0]   | TMC423 Pin: LED_ROW_PIN [5:0]   | TMC423 Pin: LED_ROW_PIN [5:0]   | TMC423 Pin: LED_ROW_PIN [5:0]   | TMC423 Pin: LED_ROW_PIN [5:0]   |
|--------------------------------|--------------------------------|--------------------------------|--------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|
| Bit 3                          | Bit 2                          | Bit 1                          | Bit 0                          | LED_Matrix_Write [23:0]         | LED_Matrix_Write [23:0]         | LED_Matrix_Write [23:0]         | LED_Matrix_Write [23:0]         | LED_Matrix_Write [23:0]         | LED_Matrix_Write [23:0]         |
| 0                              | 1                              | 1                              | 1                              | 23                              | 22                              | 21                              | 20                              | 19                              | 18                              |
| 1                              | 0                              | 1                              | 1                              | 17                              | 16                              | 15                              | 14                              | 13                              | 12                              |
| 1                              | 1                              | 0                              | 1                              | 11                              | 10                              | 9                               | 8                               | 7                               | 6                               |
| 1                              | 1                              | 1                              | 0                              | 5                               | 4                               | 3                               | 2                               | 1                               | 0                               |

For correct external connection of the matrix please refer to the following Figure 13: Connection to the matrix. If distortions causes by long PCB traces are to expect, then filter capacitors C filter of 100pF have to be added.

Figure 13: Connection to the matrix

<!-- image -->

## 10  Package dimensions

<!-- image -->

Figure 14: 100-Pin TQFP Top View

Figure 15: 100-Pin TQFP Side View

<!-- image -->

Figure 16: 100-Pin TQFP Side View Detail A

<!-- image -->

## Notes :

- all dimensions are in millimeters
- BSC Basic Spacing between Centers

| JEDEC Equivalent   | TQFP100 MS-026 VAR BED   | TQFP100 MS-026 VAR BED   | TQFP100 MS-026 VAR BED   |
|--------------------|--------------------------|--------------------------|--------------------------|
| Dimension          | Min                      | Nom                      | Max                      |
| A                  |                          |                          | 1.60                     |
| A1                 | 0.05                     |                          | 0.15                     |
| A2                 | 1.35                     | 1.40                     | 1.45                     |
| b                  | 0.17                     | 0.22                     | 0.27                     |
| c                  | 0.09                     |                          | 0.20                     |
| D/E                |                          | 16.00 BSC                |                          |
| D1/E1              |                          | 14.00 BSC                |                          |
| e                  | 0.50 BSC                 | 0.50 BSC                 | 0.50 BSC                 |
| L                  | 0.45                     | 0.60                     | 0.75                     |
| ccc                | 0.08                     | 0.08                     | 0.08                     |
| Theta              | 0                        | 3.50 deg                 | 7 deg                    |

Table 15: TQFP Dimensions

## Life support policy

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life support systems, without the specific written consent of TRINAMIC Motion Control GmbH &amp; Co. KG. Life support systems are equipment intended to support or sustain life, and whose failure to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

© 2004 TRINAMIC Motion Control GmbH &amp; Co. KG

Information given in this data sheet is believed to be accurate and reliable. However no responsibility is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties, which may result form its use.

Specifications subject to change without notice.