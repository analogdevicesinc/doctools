<!-- lastmod 2022-10-10 -->
## MAX78615+PPM

## General Description

The MAX78615+PPM is part of an isolated energy measurement processor (EMP) chipset for polyphase power monitoring systems. It is designed for real-time monitoring  for  a  variety  of  typical  three-phase  configurations  in industrial applications.

The device provides flexible sensor configuration for up to  three  MAX78700s  or  MAX71071s  that  provide  up  to six  isolated  analog  inputs  for  interfacing  to  voltage  and current  sensors.  Scaled  voltages  from  the  sensors  are fed  to  the  isolated  front-end  utilizing  a  high-resolution delta-sigma converter. Supported current sensors include resistive shunts and current transformers (CTs).

An  embedded  24-bit  measurement  processor  and  firmware  perform  all  necessary  computations  and  data  formatting for accurate reporting to the host. With integrated flash memory for storing nonvolatile calibration coefficients and  device  configuration  settings,  the  MAX78615+PPM can be a completely autonomous solution.

The MAX78615+PPM is designed to interface to the host processor through the UART, SPI, or I 2 C interfaces, and is available in a 24-pin TQFN package.

## Applications

- Polyphase Submetering
- Building Automation Systems
- Inverters and Renewable Energy Systems
- Level 1 and 2 EV Charging Systems
- Grid-Friendly Appliances and Smart Plugs

## Simplified Block Diagram

<!-- image -->

<!-- image -->

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## Benefits and Features

- Best-In-Class Embedded Algorithms Support Highly Accurate Electricity Measurements
- Voltage, Current, and Frequency
- Active, Reactive, and Apparent Power/Energy
- Power Quality Measurements Including Peak Current and Harmonic Content
- Digital Temperature Compensation
- Configurable Device Provides Design Flexibility
- Nonvolatile Storage of Calibration and Configura -tion Parameters.
- SPI, I 2 C, or UART Interface Options
- Configurable I/O Pins for Alarm Signaling, Address Pins, or User Control
- Highly Integrated Features Support Compact Designs and Reduced Bill of Materials
-  Small 24-Pin TQFN Package
- Internal or External Oscillator Timing References
- Three Remote ADC Interfaces Provide CostEffective and Reliable Isolation
- Quick Calibration Routines Minimize Manufacturing (System) Cost
- Digital Temperature Compensation

Ordering Information appears at end of data sheet.

## MAX78615+PPM

## Absolute Maximum Ratings

| Supplies and Ground Pins                                                        | Supplies and Ground Pins                                                            |
|---------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| V DD .....................................................................-0.5V | to 4.6V                                                                             |
|                                                                                 | GND..................................................................-0.5V to +0.5V |
| Analog Input Pins                                                               | Analog Input Pins                                                                   |
| AV1, AV2, AV3, AI1, AI2, AI3                                                    | .........................-10mA to +10mA                                             |
|                                                                                 | -0.5V to (V DD + 0.5V)                                                              |
| Oscillator Pins:                                                                | Oscillator Pins:                                                                    |
| XIN, XOUT....................................................-10mA              | to +10mA                                                                            |
|                                                                                 | -0.5V to 3.0V                                                                       |
| Digital Pins:                                                                   | Digital Pins:                                                                       |
| Digital Pins Configured as Outputs                                              | .............-30mA to +30mA,                                                        |
|                                                                                 | -0.5 to (V + 0.5V)                                                                  |

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

| RESET and Digital Pins Configured as Inputs ...................................-10mA to +10mA, -0.5V to +6V   |
|---------------------------------------------------------------------------------------------------------------|
| Operating Junction Temperature                                                                                |
| Peak, 100ms................................................................+140°C                             |
| Continuous...................................................................+125°C                           |
| Storage Temperature Range............................ -45°C to +165°C                                         |
| Lead Temperature (soldering, 10s) .................................+260°C                                     |
| Soldering Temperature (reflow).......................................+300°C                                   |
| ESD Stress on All Pins........................................................±4kV                            |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## Recommended External Components

| NAME   | FROM   | TO   | FUNCTION                                                                                                      | VALUE   | UNITS   |
|--------|--------|------|---------------------------------------------------------------------------------------------------------------|---------|---------|
| XTAL   | XIN    | XOUT | 20.000MHz                                                                                                     | 20.000  | MHz     |
| CXS    | XIN    | GND  | Load capacitor for crystal (exact value depends on crystal specifications and parasitic capacitance of board) | 18 ±10% | pF      |
| CXL    | XOUT   | GND  | Load capacitor for crystal (exact value depends on crystal specifications and parasitic capacitance of board) | 18 ±10% | pF      |

## Recommended Operating Conditions

| PARAMETER                   | CONDITIONS       |   MIN |   TYP |   MAX | UNITS   |
|-----------------------------|------------------|-------|-------|-------|---------|
| 3.3V Supply Voltage (V DD ) | Normal operation |   3.0 |   3.3 |   3.6 | V       |
| Operating Temperature       |                  |   -40 |       |   +85 | °C      |

## Performance Specifications

(Note that production tests are performed at room temperature.)

| PARAMETER                                 | CONDITIONS                    | MIN        |   TYP |   MAX | UNITS   |
|-------------------------------------------|-------------------------------|------------|-------|-------|---------|
| INPUT LOGIC LEVELS                        |                               |            |       |       |         |
| Digital High-Level Input Voltage (V )     | IH                            | 2          |       |       | V       |
| Digital Low-Level Input Voltage (V )      | IL                            |            |       |   0.8 | V       |
| OUTPUT LOGIC LEVELS                       |                               |            |       |       |         |
| Digital High-Level Output Voltage (V OH ) | I LOAD = 1mA                  | V DD - 0.4 |       |       | V       |
| Digital High-Level Output Voltage (V OH ) | I LOAD = 10mA                 | V DD - 0.6 |       |       | V       |
| Digital Low-Level Output Voltage (V OL )  | I LOAD = 1mA                  | 0          |       |   0.4 | V       |
| Digital Low-Level Output Voltage (V OL )  | I LOAD = 10mA                 |            |       |   0.5 | V       |
| SUPPLY CURRENT                            |                               |            |       |       |         |
| V DD Current (Compounded)                 | Normal operation, V DD = 3.3V |            |   8.1 |  10.3 | mA      |

│

## MAX78615+PPM

## Performance Specifications (continued)

(Note that production tests are performed at room temperature.)

| PARAMETER                                                                                         | CONDITIONS                        |   MIN | TYP    |   MAX | UNITS   |
|---------------------------------------------------------------------------------------------------|-----------------------------------|-------|--------|-------|---------|
| CRYSTAL OSCILLATOR                                                                                |                                   |       |        |       |         |
| XIN to XOUT Capacitance                                                                           | (Note 1)                          |       | 3      |       | pF      |
|                                                                                                   | XIN                               |       | 5      |       | pF      |
| Capacitance to GND (Note 1)                                                                       | XOUT                              |       | 5      |       |         |
| INTERNAL RC OSCILLATOR                                                                            |                                   |       |        |       |         |
| Nominal Frequency                                                                                 |                                   |       | 20.000 |       | MHz     |
| Accuracy                                                                                          | V DD = 3.0V, 3.6V; T A = 22°C     |       | ±1.5   |       | %       |
| RESET PIN                                                                                         |                                   |       |        |       |         |
| Reset Pulse Fall Time                                                                             | (Note 1)                          |       | 1      |       | µs      |
| Reset Pulse Width                                                                                 | (Note 1)                          |       | 5      |       | µs      |
| SPI SLAVE PORT (Figure 1)                                                                         |                                   |       |        |       |         |
| SCK Cycle Time (t SPICYC )                                                                        |                                   |     1 |        |       | µs      |
| Enable Lead Time (t SPILEAD )                                                                     |                                   |    15 |        |       | ns      |
| Enable Lag Time (t SPILAG )                                                                       |                                   |     0 |        |       | ns      |
| SCK Pulse Width (t )                                                                              | High                              |   250 |        |       | ns      |
| SPIW SSB to First SCK Fall (t SPISCK )                                                            | Low Ignore if SCK is low when SSB |   250 | 2      |       | ns      |
| Disable Time (t SPIDIS )                                                                          | (Note 1)                          |       | 0      |       | ns      |
| SCK to Data Out (SDO) (t SPIEV )                                                                  |                                   |       |        |    25 | ns      |
| Data Input Setup Time (SDI) (t SPISU )                                                            |                                   |    10 |        |       |         |
|                                                                                                   |                                   |       |        |       | ns ns   |
| Data Input Hold Time (SDI) (t SPIH )                                                              |                                   |     5 |        |       |         |
| I 2 C SLAVE PORT (Figure 2, Note 1)                                                               |                                   |       |        |       |         |
| Bus Idle (Free) Time Between Transmissions (STOP/START) (t BUF )                                  |                                   |  1500 |        |       | ns      |
| I 2 C Input Fall Time (t ICF )                                                                    | (Note 2)                          |    20 |        |   300 | ns      |
| I 2 C Input Rise Time (t ICR )                                                                    | (Note 2)                          |    20 |        |   300 | ns      |
| I 2 C START or Repeated START Condition Hold Time (t STH )                                        |                                   |   500 |        |       | ns      |
| I 2 C START or Repeated START Condition Setup Time (t STS )                                       |                                   |   600 |        |       | ns      |
| I 2 C Clock High Time (t SCH )                                                                    |                                   |   600 |        |       | ns      |
| I 2 C Clock Low Time (t SCL )                                                                     |                                   |  1300 |        |       | ns      |
| I 2 C Serial Data Setup Time (t SDS )                                                             |                                   |   100 |        |       | ns      |
| I 2 C Serial Data Hold Time (t SDH )                                                              |                                   |    10 |        |       | ns      |
| I 2 C Valid Data Time (t VDA ): SCL Low to SDAOutput ValidACK Signal from SCL Low to SDA(Out) Low |                                   |       |        |   900 | ns      |

Note 1: Guaranteed by design, not subject to test.

Note 2: Dependent on bus capacitance.

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## MAX78615+PPM

## Timing Diagrams

Figure 1. SPI Timing Diagram

<!-- image -->

Figure 2. I 2 C Timing Diagram

<!-- image -->

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## MAX78615+PPM

## Pin Configuration

<!-- image -->

## Pin Description

| PIN   | NAME        | FUNCTION                                              |
|-------|-------------|-------------------------------------------------------|
| 1, 10 | GND         | Ground                                                |
| 2     | IFC0/MP8    | IFC0 (Interface Selection)                            |
| 3     | MP7         | Multipurpose DIO                                      |
| 4     | AD1/MP6     | Multipurpose DIO/Address                              |
| 5     | SSB/MP5/SCL | Slave Select (SPI)/MP5/I 2 C Serial Clock             |
| 6     | MP4         | Multipurpose DIO                                      |
| 7, 18 | V DD        | 3.3V DC Supply                                        |
| 8     | XIN         | Crystal Oscillator Input                              |
| 9     | XOUT        | Crystal Oscillator Output                             |
| 10    | GND         | Ground                                                |
| 11    | COMP2       | Comparator 2 Input (Not Used/Reserved), No Connection |
| 12    | COMP1       | Comparator 1 Input (Not Used/Reserved), No Connection |
| 13    | SDO/TX/SDAO | SPI Data Out/UART Tx/I 2 C Data Out                   |
| 14    | SDI/RX/SDAI | SPI Data In/UART Rx/I 2 C Data In                     |

│

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## MAX78615+PPM

## Pin Description (continued)

| PIN   | NAME        | FUNCTION                                                                                  |
|-------|-------------|-------------------------------------------------------------------------------------------|
| 15    | SCK/AD0/MP1 | SPI Clock/Address                                                                         |
| 16    | IFC1/MP0    | Multipurpose DIO/Interface Selection                                                      |
| 17    | RESET       | Active-Low Reset Input                                                                    |
| 19    | CH2P        | Pulse Transformer Interface Channel 2 (Negative)                                          |
| 20    | CH2N        | Pulse Transformer Interface Channel 2 (Positive)                                          |
| 21    | CH1P        | Pulse Transformer Interface Channel 1 (Negative)                                          |
| 22    | CH1N        | Pulse Transformer Interface Channel 1 (Positive)                                          |
| 23    | CH3P        | Pulse Transformer Interface Channel 3 (Negative)                                          |
| 24    | CH3N        | Pulse Transformer Interface Channel 3 (Positive)                                          |
| -     | EP          | Exposed Pad. Internally connected to GND. Not intended as an electrical connection point. |

## Glossary

| NAME   | DESCRIPTION                                                  |
|--------|--------------------------------------------------------------|
| AFE    | Analog Front-End                                             |
| ADC    | Analog-to-Digital Converter                                  |
| FSV    | Peak System Voltage Required to Produce 250mVpk at theAFEADC |
| FSI    | Peak System Current Required to Produce 250mVpk at theAFEADC |
| FSP    | Full-Scale Power (FSI x FSV)                                 |
| SPS    | Sample Per Second                                            |
| HPF    | Highpass Filter                                              |

│

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## MAX78615+PPM

## Block Diagram

<!-- image -->

│

## Isolated Energy Measuremnt Procesor for Polyphase Monitoring Systems

## MAX78615+PPM

## On-Chip Resources Overview

The MAX78615+PPM device integrates all the hardware blocks required for accurate AC power and energy measurement. Included on the device are the following:

- Oscillator and clock management logic
- Power-on reset, watchdog timer, and reset circuitry
- 24-bit measurement processor with RAM and flash memory
- UART, SPI, and I 2 C serial communication interfaces and multipurpose digital I/O
- Pulse transformer interfaces (for connection to up to three or more MAX78700 or MAX71071 devices)

## Clock Management

The  device  can  be  clocked  by  oscillator  circuitry  that relies on an external crystal or, as a backup source, by a trimmed internal RC oscillator. The internal RC oscillator provides  an  accurate  clock  source  for  UART  baud  rate generation.

The  chip  hardware  automatically  handles  the  clock sources logic and distributes the clock to the rest of the device. Upon reset or power-on, the device will utilize the internal RC oscillator circuit for the first 1024 clock cycles, allowing the external crystal adequate time to startup. The device  will  then  automatically  select  the  external  clock, if  available.  It  will  also  automatically  switch  back  to  the internal oscillator in the event of a failure with the external oscillator. This condition is also monitored by the processor and available to the user in the STATUS register.

The  MAX78615+PPM  external  clock  circuitry  requires a  20.000MHz  crystal.  The  circuitry  includes  two  18pF ceramic capacitors. Figure 3 shows the typical connection of the external crystal. This oscillator is self-biasing and therefore  an  external  resistor  should not be  connected across the crystal.

An external 20MHz system clock signal can also be utilized instead of the crystal. In this case, the external clock should be connected to the XOUT pin while the XIN pin should be connected to GND.

Alternatively, if no external crystal or clock is utilized, the XOUT pin should be connected to GND and the XIN pin left unconnected.

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## Power-On Reset, Watchdog-Timer, and Reset Circuitry

## Power-On Reset (POR)

An  on-chip  power-on  reset  (POR)  block  monitors  the supply  voltage  (V DD )  and  initializes  the  internal  digital circuitry  at  power-on.  Once  V DD   is  above  the  minimum operating  threshold,  the  POR  circuit  triggers  and  initiates a reset sequence. It also issues a reset to the digital circuitry  if  the  supply  voltage  falls  below  the  minimum operating level.

## Watchdog Timer (WDT)

A  watchdog  timer  (WDT)  block  detects  any  software processing  errors.  The  embedded  software  periodically refreshes  the  free-running  watchdog  timer  to  prevent  it from timing out. If the WDT times out, it is an indication that software is no longer being executed in the intended sequence; thus, a system reset is initiated.

## External Reset Pin ( RESET Pin)

In addition to the internal sources, a reset can be forced by applying a low level to the RESET pin. If the RESET pin  is  pulled  low,  all  digital  activities  in  the  device  stop, except  the  clock  management  circuitry  and  oscillators, which continue to run. The external reset input is filtered to  prevent spurious reset events in noisy environments. The reset does not occur until RESET has been held low for at least 1µs.

Once initiated, the reset mode persists until the RESET is set high and the reset timer times out (4096 clock cycles). At the completion of the reset sequence, the internal reset is  released  and  the  processor  begins  executing  from address 0.

If  not  used,  the RESET pin  can  be  connected  either directly or through  a  pullup  resistor  to  V DD   supply. Figure 4 shows simple connection diagram examples.

Figure 3. Typical Connection of External Crystal

<!-- image -->

│

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

Figure 4. Connection Examples for RESET Pin

<!-- image -->

## 24-Bit Measurement Processor

The  MAX78615+PPM  integrates  a  fixed-point  24-bit signal  processor  that  performs  all  the  digital  signal  processing necessary for energy measurement, alarm generation, calibration, compensation, etc. Functionality and operation of the device is determined by the firmware and described  in  the Functional  Description  and  Operation section.

## Flash and RAM

The  MAX78615+PPM  includes  8KB  of  on-chip  flash memory. The flash memory contains program code and is  used  to  stores  coefficients,  calibration  data,  and  configuration settings. The MAX78615+PPM includes 1.5KB of on-chip RAM, which contains the values of input and output  registers  and  is  utilized  by  the  firmware  for  its operations.

## Digital I/O Pins

There  are  a  total  of  nine  digital  input/outputs  on  the MAX78615+PPM  device.  Some  are  dedicated  to  serial interface  communications  and  configuration.  Others  are multi-purpose  I/O  (indicated  as  MP  or  'Multi-Purpose' pins)  that  can  be  used  as  a  simple  output  under  user control or routed to special purpose internal signals, such as alarm signaling.

## Communication Interfaces

The  MAX78615+PPM  includes  three  communication interface  options:  UART,  SPI,  and  I 2 C.  Since  the  I/O pins are shared, only one mode is supported at a time. Interface configuration pins are sampled at power-on or reset to determine which interface is active.

## Isolated Analog Front-End (AFE)

Up to  three  isolation  interfaces  (channels)  are  provided to  provide  power,  configure/control,  and  read  measurement data from a MAX78700 or MAX71071. The power is  provided  by  the  MAX78615+PPM,  through  dedicated pulses  that  are  spaced  at  10.00MHz/6  (600ns  period), with write and read pulses located in between. The power pulses  are  also  used  to  provide  the  synchronization  for the MAX78700 (or MAX71071) on-chip PLL. Within every power  pulse  cycle  a  write  data  pulse  and  a  read  data pulse is inserted.

Data sent from the MAX78615+PPM to the isolated AFE:

- Power
- ADC Configuration
- Control

Data sent from the isolated AFE to the MAX78615+PPM:

- Voltage Samples
- Current Samples
- Die Temperature
- Bandgap and Trim Information

│

## MAX78615+PPM

## Functional Description and Operation

This  section  describes  the  MAX78615+PPM  functionality.  It  includes  measurements  and  relevant  calculations, alarms,  auxiliary  functions  such  as  calibrations,  zerocrossing, etc.

A set of input (write), output (read), and read/write registers are provided to allow access to calculated data and alarms and to configure the device. The input (write) registers values can be saved into flash memory through a specific  command. The values saved into flash memory are loaded in these registers at reset or power-on as defaults.

## Signal Processing Description

## AFE Configuration

The MAX78615+PPM supplies configuration and control to  the  isolated  AFEs.  The  MAX71071  and  MAX78700 have different configurations to support the same solution.

## Input Mapping

Up to three remotes can be connected to the remote interfaces. The sensors are expected by the firmware to be connected to support the logical current/voltage mapping as shown in Table 2.

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## Highpass Filters and Offset Removal

Offset registers for each analog input contain values to be subtracted from the raw ADC outputs for the purpose of  removing  inherent  system  DC  offsets  from  any  calculated  power  and  RMS  values.  When  the  integrated highpass filter (HPF) is enabled, it dynamically updates the offset registers every accumulation interval. During each accumulation interval (or low-rate cycle), the HPF calculates  the  median  or  DC  average  of  each  input. Adjustable  coefficients  determine  what  portion  of  the measured  offset  is  combined  with  the  previous  offset value (see Table 3).

The HPF\_COEF\_I and HPF\_COEF\_V registers contain signed fixed point numbers with a usable range of 0 to 1.0-LSB  (negative  values  are  not  supported).  Setting them  to  1.0  (0x7FFFFF)  causes  the  entire  measured offset to be applied to the offset register enabling lumpsum offset removal. Setting them to zero disables any dynamic update of the offset registers by the HPF. The HPF  coefficients  apply  to  all  three  channels  (current or voltage).

## Table 1. Sample Rate and Preamplifier Settings

| PARAMETER   | MAX78700   | MAX71071   | NOTES              |
|-------------|------------|------------|--------------------|
| SPS         | 3306.9*    | 2381**     | Samples per second |
| ADC PREAMP  | 1x         | 9x         | -                  |

## Table 2. Analog Input Assignment

| REMOTE ANALOG INPUT PINS   | REMOTE INTERFACE   | INPUT NAME      |
|----------------------------|--------------------|-----------------|
| INAP/N                     | CH1                | Voltage 1 (AV1) |
| INBP/N                     | CH1                | Current 1 (AI1) |
| INAP/N                     | CH2                | Voltage 2 (AV2) |
| INBP/N                     | CH2                | Current 2 (AI2) |
| INAP/N                     | CH3                | Voltage 3 (AV3) |
| INBP/N                     | CH3                | Current 3 (AI3) |

## Table 4. Highpass Filter Coefficients

| REGISTER   | DESCRIPTION                                          |
|------------|------------------------------------------------------|
| HPF_COEF_I | HPF Coefficient for AIA, AIB, and AIC Current Inputs |
| HPF_COEF_V | HPF Coefficient for AVA, AVB, and AVC Voltage Inputs |

│

## Table 3. Offset Registers

| REGISTER   | DESCRIPTION                          |
|------------|--------------------------------------|
| V1_OFFS    | Voltage Input AV1 Offset Calibration |
| V2_ OFFS   | Voltage Input AV2 Offset Calibration |
| V3_ OFFS   | Voltage Input AV3 Offset Calibration |
| I1_OFFS    | Current Input AI1 Offset Calibration |
| I2_ OFFS   | Current Input AI2 Offset Calibration |
| I3_ OFFS   | Current Input AI3 Offset Calibration |

## MAX78615+PPM

## Gain Correction

The  system  (sensors)  and  the  MAX78615+PPM  device inherently have gain errors that can be corrected by using the gain registers. These registers can be directly accessed and modified by an external host processor or automatically updated by an integrated self-calibration routine.

Input gain registers are signed fixed-point numbers with the binary point to the left of bit 21. They are set to 1.0 by default and have a usable range of 0 to 4.0-LSB (negative values are not supported). The gain equation for each input X can be described as Y = gain * X.

## Die Temperature Compensation

The MAX78615+PPM receives the isolated  ADC (MAX78700 or MAX71071) die temperature measurements. This data is used by the signal processor for correcting the voltage reference error (bandgap curvature). It is also available to the user in the TEMPC registers. Temperature data has a fixed scaling with a range of -16384°C to +16384°C less one LSB (format S.10). See Table 6.

Setting  the  temperature  compensation  (TC)  bit  in  the Control register allows the firmware to further adjust the system  gain  based  on  measured  isolated  die  temperature. The isolated ADC die temperature offset is typically calibrated  by  the  user  during  the  calibration  stage.  Die temperature gain is set to a factory default value for most applications, but can be adjusted by the user. See Table 7.

Table 5. Voltage and Current Gain Registers

| REGISTER   | DESCRIPTION                        |
|------------|------------------------------------|
| V1_GAIN    | Voltage Input AV1 Gain Calibration |
| V2_GAIN    | Voltage Input AV2 Gain Calibration |
| V3_GAIN    | Voltage Input AV3 Gain Calibration |
| I1_GAIN    | Current Input AI1 Gain Calibration |
| I2_GAIN    | Current Input AI2 Gain Calibration |
| I3_GAIN    | Current Input AI3 Gain Calibration |

## Table 6. Remote ADC Die Temperature Registers

| REGISTER   | DESCRIPTION                           | LSB     | TIME SCALE   |
|------------|---------------------------------------|---------|--------------|
| TEMPC1     | Chip Temperature (Celsius°) Channel 1 | °C/2 10 | 1 interval   |
| TEMPC2     | Chip Temperature (Celsius°) Channel 2 | °C/2 10 | 1 interval   |
| TEMPC3     | Chip Temperature (Celsius°) Channel 3 | °C/2 10 | 1 interval   |

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## Phase Compensation

Phase compensation registers are used to compensate for phase errors or time delays between the voltage input source and respective current source that are introduced by the off-chip sensor circuit. The user configurable registers are signed fixed point numbers with the binary point to the left of bit 21. Values are in units of high rate sample delays so each integer unit of delay is 1/SPS with a total possible delay of ±4 samples. See Table 8.

Example:

To compensate a phase error of 315µs (or 6.8° at 60Hz) for  a  MAX78700 isolated AFE it is necessary to set the relevant phase compensation register as follows:

<!-- formula-not-decoded -->

The value to enter in the phase compensation register is therefore:

<!-- formula-not-decoded -->

Table 7. Remote ADC Temperature Calibration Registers

| REGISTER                | DESCRIPTION                                        |
|-------------------------|----------------------------------------------------|
| T_OFFS1, TOFFS2, TOFFS3 | Die Temperature Offset Calibration.                |
| T_GAIN                  | Die Temperature Slope Calibration, set by factory. |

## Table 8. Phase Compensation Registers

| REGISTER   | LSB         | DESCRIPTION                                        |
|------------|-------------|----------------------------------------------------|
| PHASECOMP1 | SAMPLE/2 21 | Phase (delay) compensation for AI1 relative to AV1 |
| PHASECOMP2 | SAMPLE/2 21 | Phase (delay) compensation for AI2 relative to AV1 |
| PHASECOMP3 | SAMPLE/2 21 | Phase (delay) compensation for AI3 relative to AV1 |

│

## MAX78615+PPM

## Voltage Input Configuration

The device supports multiple analog input configurations for determining the voltages in a three-phase system. The CONFIG register is used to instruct the device on how to compute them. See Table 9.

The VDELTA bit must be set whenever the voltage sensors measure phase voltages (line-to-neutral), but the load is connected in a Delta configuration. The MAX78615+PPM then  computes  line-to-line  voltages  from  the  inputs  and uses those for all other computations.

The VPHASE setting determines how many voltage sensors are present, and in which phases. If three sensors are used, these bits should be set to zero. If two sensors are used, settings 01, 10 and 11 indicate the phase with no

Table 9. Voltage Inputs Configuration

| CONFIG BITS   | NAME    | FUNCTION                                     |
|---------------|---------|----------------------------------------------|
| 22            | INV_AV3 | Invert voltage samples AV3                   |
| 21            | INV_AV2 | Invert voltage samples AV2                   |
| 20            | INV_AV1 | Invert voltage samples AV1                   |
| 5             | VDELTA  | Compute and report line-to- line voltages    |
| 4:3           | VPHASE  | Missing sensor on voltage input or reference |

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

voltage sensor. This phase will then be computed such that VA+VB+VC equals to  zero.  Note  that  using  two  voltage sensors is not recommended in Wye-connected systems, as the previous equation may not necessarily be true.

The INV\_AVx bits instruct the MAX78615+PPM to invert every sample of the corresponding voltage input, before performing any other computations based on the VDELTA and VPHASE settings. See Table 10.

## Voltage Input Flowchart

Figure  5  illustrates  the  computational  flowchart  for  VA, VB, and VC. The values for the voltage input configuration register can be saved in flash memory and automatically restored at power-on or reset.

## Table 10. Voltage Inputs Computation

|   VDELTA |   VPHASE | VA      | VB      | VC      |
|----------|----------|---------|---------|---------|
|        0 |       00 | AV1     | AV2     | AV3     |
|        0 |       01 | AV3-AV2 | AV2     | AV3     |
|        0 |       10 | AV1     | AV1-AV3 | AV3     |
|        0 |       11 | AV1     | AV2     | AV2-AV1 |
|        1 |       00 | AV3-AV1 | AV1-AV2 | AV2-AV3 |
|        1 |       01 | AV2-AV3 | AV2-AV1 | AV3-AV1 |
|        1 |       10 | AV1-AV2 | AV1-AV3 | AV3-AV2 |
|        1 |       11 | AV1-AV3 | AV2-AV3 | AV1-AV2 |

Note: INV\_AVx settings are applied before these computations.

Figure 5. Computational Flowchart for VA, VB, and VC

<!-- image -->

│

## MAX78615+PPM

## Current Input Configuration

The MAX78615+PPM supports multiple analog input configurations for determining the currents in a three-phase system.  The  CONFIG  register  is  used  to  instruct  the MAX78615+PPM how to compute them. See Table 11.

The  IPHASE  setting  determines  how  many  line  current sensors are present, and for which phases. If three sensors  are  used,  these  bits  should  be  set  to  zero.  If  two sensors  are  used,  settings  01,  10,  and  11  indicate  the phase without a line current sensor. The current for this phase will then be computed according to the INEUTRAL and VDELTA settings. If VDELTA is cleared and IN can be assumed to be zero, the current is computed such that IA + IB + IC = 0. If VDELTA is set, the current in this phase is

## Table 11. Current Inputs Configuration

| CONFIG BITS   | NAME     | FUNCTION                                                                                                                    |
|---------------|----------|-----------------------------------------------------------------------------------------------------------------------------|
| 2             | INEUTRAL | Configuration uses a current sensor in the neutral conductor. This sensor replaces the missing sensor (see IPHASE setting). |
| 1:0           | IPHASE   | Missing sensor on current input 00: none missing 01: AI1 10: AI2 11: AI3                                                    |

## Table 12. Current Inputs Computation

| INEUTRAL   |   IPHASE | VDELTA   | IA            | IB            | IC            |
|------------|----------|----------|---------------|---------------|---------------|
| x          |       00 | x        | AI1           | AI2           | AI3           |
| 0          |       01 | 0        | -(AI2+IA3)    | AI2           | AI3           |
| 0          |       10 | 0        | AI1           | -(IA1+AI3)    | AI3           |
| 0          |       11 | 0        | AI1           | AI2           | -(IA1+AI2)    |
| 0          |       01 | 1        | AI2-IA3       | AI2           | AI3           |
| 0          |       10 | 1        | AI1           | AI3-IA1       | AI3           |
| 0          |       11 | 1        | AI1           | AI2           | AI1-IA2       |
| 1          |       01 | x        | AI1-(AI2+AI3) | AI2           | AI3           |
| 1          |       10 | x        | AI1           | AI2-(AI1+AI3) | AI3           |
| 1          |       11 | x        | AI1           | AI2           | AI3-(AI1+AI2) |

│

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

the difference between the two other currents (INEUTRAL must be cleared in these two cases).

When the INEUTRAL bit is set, a sensor in the neutral conductor replaces one of the three line current sensors. IN is directly measured from a sensor placed in the neutral conductor and the firmware calculates the current for the input with no line current sensor, such that IA + IB + IC = IN (IPHASE cannot be 00). See Table 12.

## Current Input Flowchart

Figure 6 illustrates the computational flowchart for IA, IB, and IC. The values for current input configuration register can be saved in flash memory and automatically restored at power-on or reset.

## MAX78615+PPM

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

Figure 6. Computational Flowchart for IA, IB, and IC

<!-- image -->

## Data Refresh Rates

Instantaneous voltage and current measurement results are updated at the sample rate (SPS) and are generally not  useful  unless  accessed  with  a  high-speed  interface such as SPI. The CYCLE register is a 24-bit counter that increments  every  high-rate  sample  update  and  resets when low rate results are updated.

Low rate results, updated at a user-configurable rate (also referred  to  as  accumulation  interval),  are  typically  used and  more  suitable  for  most  applications.  The  FRAME register is a counter that increments every accumulation interval.  A  data  ready  indicator  in  the  STATUS  register indicates  when  new  data  is  available.  Optionally,  this indicator can be made available as a signal on one of the maskable MP output pins.

The high rate samples in one accumulation interval are averaged  to  produce  a  low-rate  result,  increasing  their accuracy and repeatability. Low rate results include RMS voltages  and  currents,  frequency,  power,  energy,  and power factor. The accumulation interval can be based on a fixed number of ADC samples or locked to the incoming line voltage cycles.

If Line Lock is disabled, the accumulation interval defaults to a fixed time interval defined by the number of samples defined in the SAMPLES register (default of SPS samples or 1.0 seconds).

When the Line-Lock bit (LL) is set, and a valid AC voltage signal is present, the actual accumulation interval is stretched to the next positive zero-crossing of the reference  line  voltage  after  the  defined  number  of  samples has been reached. If there is not a valid AC signal present and line lock is enabled, there is a 100 sample timeout implemented that would limit the accumulation interval to SAMPLES+100.

The DIVISOR register records the actual duration (number  of  high  rate  samples)  of  the  last  low-rate  interval whether or not Line-Lock is enabled.

Zero-crossing detection and line frequency for the purpose of determining the accumulation interval are derived from a  composite  signal,  VZC  =  VA  -  0.5  x  VB  -  0.25  x  VC. For a three-phase system, this signal oscillates at the line frequency as long as any of the three voltages is present.

## Calibration

The firmware  provides  integrated  calibration  routines  to modify  gain  and  offset  coefficients.  The  user  can  setup and  initiate  a  calibration  routine  through  the  Command Register. On a successful calibration, the command bits are  cleared  in  the  Command  Register,  leaving  only  the system setup bits. In case of a failed calibration, the bit in the Command Register corresponding to the failed calibration is left set. When calibrating, the line-lock bit should be set for best results.

The calibration routines will write the new coefficients to the  relevant  registers. The  user  can  then  save  the  new coefficients into flash memory as defaults using the flash access command in the Command Register.

See the Command Register section for more information on using commands.

## Voltage and Current Gain Calibration

In order to calibrate the gain parameters for voltage and current channels, a reference AC signal must be applied to  the  channel  to  be  calibrated.  The  RMS  value  corre-

│

## MAX78615+PPM

sponding to the applied reference signal must be entered in  the  relevant  target  register  (V\_TARGET,  I\_TARGET). Considering calibration is done with low rate RMS results, the value of the target register should never be set to a value above 70.7% of full scale.

Initially, the value of the gain is set to unity for the selected channels. RMS values are then calculated on all inputs and  averaged  over  the  number  of  measurement  cycles set by the CALCYCS register. The new gain is calculated by  dividing  the  appropriate  Target  register  value  by  the averaged measured value. The new gain is then written to the select Gain registers unless an error occurred.

Note that there is only one V\_TARGET register for voltages. It is possible to calibrate multiple or all voltage channels simultaneously, if and only if the same RMS voltage value is applied to each corresponding input. Analogous considerations apply to the current channels, which are calibrated via the I\_TARGET register.

## Offset Calibration

If the highpass filters are not desired then the user can fix the DC offset compensation registers through calibration. To calibrate offset, all signals should be removed from all analog inputs although it is possible to do the calibration in the presence of AC signals. In the command, the user also specifies which channel(s) to calibrate. Target registers are not used for offset calibration.

## Table 13. Voltage Channels Registers

| REGISTER             | DESCRIPTION                       | LSB      | TIME SCALE   |
|----------------------|-----------------------------------|----------|--------------|
| VA VB VC             | Instantaneous voltage at time t   | FSV/2 23 | 1 sample     |
| VA_RMS VB_RMS VC_RMS | RMS voltage of last interval      | FSV/2 23 | 1 interval   |
| VT_RMS               | Average of VA_RMS, VB_RMS, VC_RMS | FSV/2 23 | 1 interval   |

Note that the VDELTA and VPHASE settings in the CONFIG register affect how the instantaneous and averaged values are computed as described in the Voltage Input Configuration section.

Figure 7. True RMS Value

<!-- image -->

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

During  the  calibration  process,  each  input  is  accumulated  over  the  entire  calibration  interval  as  specified  by the CALCYCS register. The result is divided by the total number of samples and written to the appropriate offset register, if selected in the calibration command. Using the offset calibration command sets the respective HPF coefficients to zero, thereby fixing the offset registers to their calibrated values.

## Die Temperature Calibration

To re-calibrate the on-chip temperature sensor offset, the user  must  first  write  the  known  chip  temperature  to  the T\_TARGET register. Next, the user initiates the Temperature  Calibration  Command  in  the  Command Register. This will  update  the T\_OFFS offset parameter with a new offset based on the known temperature supplied by the user. The T\_GAIN gain register is set by the factory and not updated with this routine.

## Voltage Channel Measurements

Instantaneous voltage measurements are updated every sample, while RMS voltages are updated every accumulation interval (n samples). See Table 13.

The  MAX78615+PPM reports  true  RMS  measurements for each input. An RMS value is obtained by performing the  sum  of  the  squares  of  instantaneous  values  over  a time interval (accumulation interval) and then performing a square root of the result after dividing by the number of samples in the interval. See Figure 7.

│

## MAX78615+PPM

## Line Frequency

This  output  is  a  measurement  of  the  fundamental  frequency  of  the  AC  voltage  source.  It  is  derived  from  a composite signal and therefore applies to all three phases (it is a single reading per device) and is updated every 64 line  cycles.  Frequency  data  is  reported  as  binary  fixedpoint number, with a range of 0 to +256Hz less one LSB (format S.16). See Table 14.

## Current Channel Measurements

Instantaneous current measurements are updated every sample, while peak currents and RMS currents are updated every accumulation interval (n samples). See Table 15. Note  that  the  INEUTRAL  and  IPHASE  settings  in  the CONFIG register affect how the instantaneous and averaged values  are  computed  as  described  in  the Current Input Configuration section.

## Table 14. Frequency Measurement Register

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## Peak Current

This output is a capture of the largest magnitude instantaneous current load sample. See Figure 8.

## RMS Current

The  MAX78615+PPM reports  true  RMS  measurements for  current  inputs. The  RMS current is obtained by performing  the  sum  of  the  squares  of  the  instantaneous voltage samples over the accumulation interval and then performing a square root of the result after dividing by the number of samples in the interval. See Figure 9.

An optional 'RMS offset' for the current channels can be adjusted to reduce errors due to noise or system offsets (crosstalk)  exhibited  at  low  input  amplitudes.  Full-scale values  in  the  IxRMS\_OFFS  registers  are  squared  and subtracted from the accumulated/divided squares. If the resulting RMS value is negative, zero is used.

| REGISTER   | DESCRIPTION          | LSB     | TIME SCALE             |
|------------|----------------------|---------|------------------------|
| FREQ       | AC Voltage Frequency | Hz/2 16 | 64 voltage line cycles |

## Table 15. Current Channels Register

Figure 8. Peak Current Value

| REGISTER                | DESCRIPTION                       | LSB      | TIME SCALE   |
|-------------------------|-----------------------------------|----------|--------------|
| IA IB IC                | Instantaneous Current             | FSI/2 23 | 1 sample     |
| IA_PEAK IB_PEAK IC_PEAK | Peak Current                      | FSI/2 23 | 1 interval   |
| IA_RMS IB_RMS IC_RMS    | RMS Current                       | FSI/2 23 |              |
| IT_RMS                  | Average of IA_RMS, IB_RMS, IC_RMS | FSI/2 23 |              |

<!-- image -->

Figure 9. True Current Input Value

<!-- image -->

│

## MAX78615+PPM

## Current and Voltage Imbalance

Imbalance of a three-phase system is typically defined as the  percentage of the maximum deviation of any of the phases from the average of the phases.

Voltage imbalance is obtained  from  Vx\_RMS  and VT\_RMS as

<!-- formula-not-decoded -->

Current imbalance is obtained from Ix\_RMS and IT\_RMS as

<!-- formula-not-decoded -->

The MAX78615+PPM monitors the deviation of any phase from the average value. It generates an alarm if the deviation exceeds user programmable threshold; V\_IMB\_MAX for voltages and I\_IMB\_MAX for currents.

## Table 16. Power and Power Factor Registers

| REGISTER             | DESCRIPTION                                | LSB      | TIME SCALE   |
|----------------------|--------------------------------------------|----------|--------------|
| WATT_A WATT_B WATT_C | Average Active Power (P)                   | FSP/2 23 | 1 interval   |
| VAR_A VAR_B VAR_C    | Average Reactive Power (Q)                 | FSP/2 23 | 1 interval   |
| VA_A VA_B VA_C       | Apparent Power (S)                         | FSP/2 23 | 1 interval   |
| PF_A PF_B PF_C       | Power Factor                               | FSP/2 23 | 1 interval   |
| WATT_T               | Average of WATT_A, WATT_B, WATT_C          | FSP/2 23 | 1 interval   |
| VAR_T                | Average of VAR_A, VAR_B, VAR_C             | FSP/2 23 | 1 interval   |
| VA_T                 | Average of VA_A, VA_B, VA_C                | FSP/2 23 | 1 interval   |
| PF_T                 | Total power factor: Equal to WATT_T / VA_T | FSP/2 23 | 1 interval   |

Note that the voltage and current configuration settings in the CONFIG register affect the physical meaning of the computed power results.

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

The  thresholds  are  expressed  as  binary  full-scale  units with a value range of 0.0 to 1.0 less one LSB (S.23 format). 1.0 thus corresponds to 100% imbalance.

Example: generate an alarm if voltage imbalance exceeds 1.5%.

<!-- formula-not-decoded -->

## Power Calculations

This section describes the detailed flow of power calculations in the MAX78615+PPM. Table 16 lists the available measurement results for AC power.

## Active Power (P)

The  instantaneous  power  results  (PA,  PB,  PC)  are obtained  by  multiplying  aligned  instantaneous  voltage and current samples. The sum of these results are then averaged over N samples (accumulation time) to compute the average active power (WATT\_A, WATT\_B, WATT\_C). See Figure 10.

The value in the Px\_OFFS register is the 'Power Offset' for  the  power  calculations.  Full-scale  values  in  the Px\_OFFS register are subtracted from the magnitude of the averaged active power. If the resulting active power value results in a sign change, zero watts are reported.

## MAX78615+PPM

## Reactive Power (Q)

Instantaneous  reactive  power  results  are  calculated  by taking  the  square  root  of  the  Apparent  Power  squared minus the Active Power squared to produce the Reactive Power  (VAR\_A,  VAR\_B,  VAR\_C). A  reactive  power  offset  (Qx\_OFFS)  is  also  provided  for  each  channel.  See Figure 11.

## Apparent Power (S)

The apparent power, also referred as Volt-Amps, is the product  of  low-rate  RMS  voltage  and  current  results. Offsets applied to RMS current will affect apparent power results.

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## Power Factor (PF)

The  power  factor  registers  capture  the  ratio  of  active power to apparent power for the most recent accumulation  interval.  The  sign  of  power  factor  is  determined  by the sign of active power. Power factors are reported as a binary fixed-point number, with a range of -2 to +2 less one LSB (format S.22).

<!-- formula-not-decoded -->

<!-- image -->

Figure 10. Active Power (P) Value

Figure 11. Reactive Power (Q) Value

<!-- image -->

Figure 12. Apparent Power (S) Value

<!-- image -->

│

## MAX78615+PPM

## Totals of Active Power, Reactive Power, Apparent Power, and Power Factor

The total power results in a three-phase system depend on  how  the  AC  source,  the  load,  and  the  sensors  are configured. For example, in Wye-connected systems, the totals  are  computed  as  the  sum  of  all  three  per-phase results.  In  many  Delta  configurations,  the  total  power  is the sum of two per-phase results only, and the third perphase  result  must  be  ignored.  The  firmware  requires  a setting to indicate how the totals are to be computed. The PPHASE bits in the CONFIG register serve this purpose. See Table 17.

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

The total power factor is computed as

<!-- formula-not-decoded -->

## Fundamental Calculations

The  MAX78615+PPM  solution  includes  the  ability  to filter  low  rate  voltage,  current,  active  power,  and  reactive  power  measurement  results  into  fundamental  components. These outputs can be used to track individual harmonic contents for the measurements. See Table 19.

When  PPHASE  is  not  00,  the  firmware  computes  the totals of two phases only, as is typically done when only line  currents are available in a Delta-connected load. In such cases, the total apparent power is correctly scaled by  a  factor  of 3/2 .  In  order  to  prevent  overflows,  all totals are computed as averages and must be multiplied by  two  by  the  host.  When  PPHASE  is  equal  to  00,  all totals are computed as averages and must be multiplied by three by the host. See Table 18.

The  HARM  register  is  used  to  select  the  single  Nth harmonic  of  the  line  voltage  fundamental  frequency to  extract.  This  input  register  is  set  by  default  to  N  = 0x000001 selecting the first harmonic (also known as the fundamental  frequency).  This  setting  provides  the  user with fundamental frequency component of the measurements.  By  setting  the  value  in  the  HARM  register  to  a higher  harmonic,  the  fundamental  result  registers  will contain measurement results of the selected harmonic at FREQ x HARM.

## Table 17. Phase Selection for Power Computation

| CONFIG BITS   | NAME   | FUNCTION                                                                               |
|---------------|--------|----------------------------------------------------------------------------------------|
| 7:6           | PPHASE | Ignore phase for total power computations 00: none 01: phase A 10: phase B 11: phase C |

## Table 18. Selection of Power Calculation Equations

| PPHASE   | TOTAL ACTIVE POWER              | TOTAL REACTIVE POWER         | TOTALAPPARENT POWER       |
|----------|---------------------------------|------------------------------|---------------------------|
| PPHASE   | WATT_T =                        | VAR_T =                      | VA_T =                    |
| 00       | ( ) WATT_A WATT_B WA 3 TT_C + + | ( ) VAR_A VAR_B VA 3 R_C + + | ( ) VA_A VA_B C 3 VA_ + + |
| 01       | ( ) WATT_B W 2 ATT_C +          | ( ) VAR_B V 2 AR_C +         | ( ) VA_B VA_ 2 C 2 3 x +  |
| 10       | ( ) WATT_A W 2 ATT_C +          | ( ) VAR_A V 2 AR_C +         | ( ) VA_A VA_ 2 C 2 3 x +  |
| 11       | ( ) WATT_A W 2 ATT_B +          | ( ) VAR_A V 2 AR_B +         | ( ) VA_A VA_ 2 B 2 3 x +  |

│

## MAX78615+PPM

## Energy Calculations

Energy calculations are included in the MAX78615+PPM to minimize the traffic on the host interface and simplify system design. Low rate power measurement results are multiplied by the number of samples (register DIVISOR) to calculate the energy in the last accumulation interval. Energy results are summed together until a user defined 'bucket  size'  is  reached.  For  every  bucket  of  energy  is reached, the value in the energy counter register is incremented by one.

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

(negative)  results  are  provided  for  active  and  reactive energy. See Table 20.

Energy results are cleared upon any power-down or reset and can be manually cleared by the external host using the Energy Clear command (0xECxxxx).

## Bucket Size for Energy Counters

All  energy  counter  registers  are  low-rate  24-bit  output registers  that  contain  values  calculated  over  multiple accumulation intervals. Both import (positive) and export The BUCKET register allows the user to define the unit of measure for the energy counter registers. BUCKET is an unsigned 48-bit fixed-point number with 24 bits for the integer part (BUCKETH = U.0) and 24 bits for the fractional part (BUCKETL = U.24). The bucket value can be saved to flash memory as the register default. BUCKETH must be set to nonzero to ensure proper energy counting. See Table 21.

## Table 19. Results Registers for Single Harmonic

| REGISTER                | DESCRIPTION                                  | LSB      | TIME SCALE   |
|-------------------------|----------------------------------------------|----------|--------------|
| VFUND_A VFUND_B VFUND_C | Voltage content at specified harmonic        | FSP/2 23 | 1 interval   |
| IFUND_A IFUND_B IFUND_C | Current content at specified harmonic        | FSP/2 23 | 1 interval   |
| PFUND_A PFUND_B PFUND_C | Active power content at specified harmonic   | FSP/2 23 | 1 interval   |
| QFUND_A QFUND_B QFUND_C | Reactive power content at specified harmonic | FSP/2 23 | 1 interval   |

## Table 20. Energy Counter Registers

| REGISTER                      | LSB                         | DESCRIPTION                                 |
|-------------------------------|-----------------------------|---------------------------------------------|
| WHA_POS WHB_POS WHC_POS       | BUCKETxFSVxFSI SPS watt-sec | Positive Active Energy Counter, per phase   |
| WHA_NEG WHB_NEG WHC_NEG       | BUCKETxFSVxFSI SPS watt-sec | Negative Active Energy Counter, per phase   |
| VARHA_POS VARHB_POS VARHC_POS | BUCKETxFSVxFSI SPS watt-sec | Positive Reactive Energy Counter, per phase |
| VARHA_NEG VARHB_NEG VARHC_NEG | BUCKETxFSVxFSI SPS watt-sec | Negative Reactive Energy Counter, per phase |

│

## MAX78615+PPM

Example: 1Watt-hr bucket with a MAX78700

In  this  example,  the  full  scale  is  assumed  to  be  set  as follows:

FSV = 667V; FSI = 62A

( ) Watthours Wh  per count x 3600 sec / hr x SPS BUCKET FSV x FSI =

In order to set the energy bucket to 1Wh:

<!-- formula-not-decoded -->

Therefore, the bucket register(s) value should be set as follows:

BUCKET = BUCKETH + BUCKETL/2 24

## Table 21. BUCKET Register Bitmap

|              | BUCKET    | BUCKET    | BUCKET    | BUCKET    | BUCKET    | BUCKET    | BUCKET   | BUCKET   | BUCKET   | BUCKET   | BUCKET   | BUCKET   | BUCKET   |
|--------------|-----------|-----------|-----------|-----------|-----------|-----------|----------|----------|----------|----------|----------|----------|----------|
| NAME         | BUCKETH   | BUCKETH   | BUCKETH   | BUCKETH   | BUCKETH   | BUCKETH   | BUCKETL  | BUCKETL  | BUCKETL  | BUCKETL  | BUCKETL  | BUCKETL  | BUCKETL  |
| Description  | High word | High word | High word | High word | High word | High word | Low word | Low word | Low word | Low word | Low word | Low word | Low word |
| Bit Position | 23        | 22        | …         | 2         | 1         | 0         | 23       | 22       | 21       | …        | 2        | 1        | 0        |
| Value        | 2 23      | 2 22      | …         | 2 2       | 2 1       | 2 0       | 2 -1     | 2 -2     | 2 -3     | …        | 2 -22    | 2 -23    | 2 -24    |

## Table 22. Min/Max Tracking Function Registers

| REGISTER   | DESCRIPTION                                                                                                  | TIME SCALE   |
|------------|--------------------------------------------------------------------------------------------------------------|--------------|
| MM_ADDR0   | Word addresses to track minimum and maximum values. A value of zero disables tracking for that address slot. | -            |
| MM_ADDR1   | Word addresses to track minimum and maximum values. A value of zero disables tracking for that address slot. | -            |
| MM_ADDR2   | Word addresses to track minimum and maximum values. A value of zero disables tracking for that address slot. | -            |
| MM_ADDR3   | Word addresses to track minimum and maximum values. A value of zero disables tracking for that address slot. | -            |
| MM_ADDR4   | Word addresses to track minimum and maximum values. A value of zero disables tracking for that address slot. | -            |
| MM_ADDR5   | Word addresses to track minimum and maximum values. A value of zero disables tracking for that address slot. | -            |
| MM_ADDR6   | Word addresses to track minimum and maximum values. A value of zero disables tracking for that address slot. | -            |
| MM_ADDR7   | Word addresses to track minimum and maximum values. A value of zero disables tracking for that address slot. | -            |
| MIN0       | Multiple intervals                                                                                           |              |
| MIN1       | Multiple intervals                                                                                           |              |
| MIN2       | Multiple intervals                                                                                           |              |
| MIN3       | Multiple intervals                                                                                           |              |
| MIN4       | Multiple intervals                                                                                           |              |
| MIN5       | Multiple intervals                                                                                           |              |
| MIN6       | Multiple intervals                                                                                           |              |
| MIN7       | Multiple intervals                                                                                           |              |

│

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

BUCKETH = INT(BUCKET)

BUCKETL = (BUCKET - INT(BUCKET)) x 2 24

BUCKETH

= 276

= 0x000114

BUCKETL

= 0.3592

= 0x5BF722

## Min/Max Tracking

The MAX78615+PPM provides a set of output registers for  tracking  the  minimum and/or maximum values of up to  eight  (8)  different  low-rate  measurement  results  over multiple  accumulation  intervals.  The  user  can  select which measurements to track through an address table. The  values  in  MM\_ADDR#  are  word  addresses  for  all host interfaces and can be saved to flash memory by the user as the register defaults. Results are stored in RAM and cleared upon any power-down or reset and can be cleared by the host using the RTRK bit in the COMMAND register. See Table 22.

## MAX78615+PPM

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## Table 22. Min/Max Tracking Function Registers (continued)

Figure 13. Min/Max Tracking

| REGISTER   | TIME SCALE         |
|------------|--------------------|
| MAX0       | Multiple intervals |
| MAX1       | Multiple intervals |
| MAX2       | Multiple intervals |
| MAX3       | Multiple intervals |
| MAX4       | Multiple intervals |
| MAX5       | Multiple intervals |
| MAX6       | Multiple intervals |
| MAX7       | Multiple intervals |

<!-- image -->

## Voltage Sag Detection

The  MAX78615+PPM implements a voltage sag detection function for each of the three phases. When a phase voltage  drops  below  a  programmable  threshold,  a  corresponding alarm is generated. The firmware computes the following indicator to detect whether the voltage falls below the threshold.

<!-- formula-not-decoded -->

## where:

- VSAG\_LIM is the user-settable RMS value of the voltage threshold.
- VSAG\_INT is the user-settable number of high-rate samples over which the indicators should be computed. For optimal performance, this should be set so that the resulting interval is an integer multiple of the line period (at least one half line period)
- X is the phase (A, B, C).

If  VSAGX  becomes  negative,  the  firmware  sets  the VX\_SAG bit for the corresponding phase in the STATUS register.  If  VX\_SAG  is  enabled  in  a  MASK  register,  the corresponding pin is also be asserted low. If the VX\_SAG bit  is  set  in  the  STICKY  register,  then  the  alarm  bit  will remain set and any unmasked AL pin will remain low until the  VX\_SAG  alarm  is  cleared  via  the  STATUS\_CLEAR register or the MAX78615+PPM is reset. If the VX\_SAG bit is cleared in the STICKY register, then the alarm bit will be  automatically  cleared  and  any  unmasked AL  pin  set high as soon as the indicator V SAGX  is greater than the programmable threshold.

The sag detection can be used to monitor or record the quality  of  the  power  line  or  utilize  the  sag  alarm  pin  to notify external devices (for example a host microprocessor) of a pending power-down. The external device can then enter a power-down mode (for example saving data or recording the event) before a power outage. Figure 14 shows a sag event and how the alarm bit is set by the firmware (in the case of the STICKY register bit cleared).

Example: Set the detection interval to one-half of a line cycle (60Hz line frequency) with a MAX78700.

<!-- formula-not-decoded -->

│

## MAX78615+PPM

## Voltage Sign Outputs

The device can optionally output the sign of the phase or line voltages VA, VB, VC on dedicated pins. This functionality is enabled individually for each phase by setting the VSGNA, VSGNB and VSGNC bits in the CONFIG register. If a VSGNx bit is set, the sign of the voltage Vx drives the state of the corresponding pin if enabled as an output. The time delay of the sign output versus the sign of the actual voltage is approximately 2 sample times. Resetting a  VSGNx  bit  disables  this  functionality  and  makes  the corresponding pin available as a general-purpose input/ output. See Table 23.

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## Alarm Monitoring

Low-rate  alarm  conditions  are  determined  every  accumulation  interval.  If  results  for  Die  Temperature,  AC Frequency,  or  RMS  Voltage  exceeds  or  drops  below user-configurable thresholds, then a respective alarm bit in the STATUS register is set. For RMS Current results, a maximum threshold is provided for detecting over current conditions with the load. For Power Factor results, a minimum threshold is provided. See Table 24.

Figure 14. Voltage Sag Event

<!-- image -->

## Table 23. Line Voltage Sign Output Enable

| DIO_STATE DIO_DIR DIO_POL   |   24-PIN TQFN | VSGNx   |
|-----------------------------|---------------|---------|
| Bit 6                       |             4 | VSGNA   |
| Bit 7                       |             3 | VSGNB   |
| Bit 8                       |             2 | VSGNC   |

## Table 24. Alarms Thresholds Registers

| REGISTER   | LSB      | DESCRIPTION                                                          |
|------------|----------|----------------------------------------------------------------------|
| T_MAX      | °C/2 10  | Threshold value which Temperature must exceed to trigger alarm.      |
| T_MIN      | °C/2 10  | Threshold value which Temperature must drop below to trigger alarm.  |
| F_MAX      | Hz/2 16  | Threshold value which Frequency must exceed to trigger alarm.        |
| F_MIN      | Hz/2 16  | Threshold value which Frequency must drop below to trigger alarm.    |
| VRMS_MAX   | FSV/2 23 | Threshold value which RMS Voltage must exceed to trigger alarm.      |
| VRMS_MIN   | FSV/2 23 | Threshold value which RMS Voltage must drop below to trigger alarm.  |
| IRMS_MAX   | FSI/2 23 | Threshold value which RMS current must exceed to trigger alarm.      |
| PF_MIN     | 1/2 22   | Threshold value which power factor must drop below to trigger alarm. |

│

## MAX78615+PPM

Imbalance  of  the  three  voltages  and  three  currents  is monitored  and  reported  via  dedicated  alarm  bits  if  they exceed respective maximum threshold V\_IMB\_MAX and I\_IMB\_MAX. See the Current and Voltage Imbalance section for details. See Table 25.

The STATUS register also provides Sag voltage alarms. A  configurable  RMS  voltage  threshold  and  selectable Interval is provided as described below and in the Voltage Sag Detection section. See Table 26.

## Status Registers

The STATUS register is used to monitor the status of the device  and  user-configurable  alarms. All  other  registers mentioned in this section share the same bit descriptions.

The STICKY register determines which alarm/status bits are sticky and which track the current status of the condition.  Each alarm bit defined as sticky (once triggered) holds  its  alarm  status  until  the  user  clears  it  using  the STATUS\_RESET register. Any sticky bit not set allows the respective status bit to clear when the condition clears.

The  STATUS\_SET  and  the  STATUS\_RESET  registers allow the user to force status bits on or off, respectively, without fear of affecting unintended bits. A bit set in the STATUS\_SET  register  sets  the  respective  bit  in  the STATUS register,  and  a  bit  set  in  the  STATUS\_RESET register clears it. STATUS\_SET and STATUS\_RESET are both cleared after the status bit is set or reset. Table 27 lists the bit mapping for the all status-related registers.

## Reset State

During and immediately after reset, all DIOs are configured  as  inputs  until  configured.  Interface  configuration

## Table 25. Imbalance Thresholds Registers

| REGISTER   | DESCRIPTION                                                                      |
|------------|----------------------------------------------------------------------------------|
| V_IMB_MAX  | Percentage Threshold value which Voltage Imbalance must exceed to trigger alarm. |
| I_IMB_MAX  | Percentage Threshold value which Current Imbalance must exceed to trigger alarm. |

## Table 26. Voltage Sag Thresholds Registers

| REGISTER   | DESCRIPTION                                                                                                                                                     |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| VSAG_LIM   | Threshold value (in RMS) which voltage must go below to trigger a sag alarm.                                                                                    |
| VSAG_INT   | Interval (in samples) over which the voltage must be below the threshold. Should be set in increments of half cycles (i.e., 22 samples per half cycle at 60Hz). |

│

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

pins (IFC0/MP8, IFC1/MP0) and address pins (AD1/MP6, SCK/AD0/MP1) are input pins sampled during reset/initialization to select the serial host interface and set device addresses (for I 2 C and UART modes). If the IFC0 pin is low, the device operates in the SPI mode. Otherwise, the state of IFC1 and the AD[1:0] pins determine the operating mode and device address.

## DIO\_STATE

The  DIO\_STATE  register  contains  the  current  status  of the DIOs. The user can acquire the state of a DIO, if configured as input (1 = high, 0 = low), or control its state, if configured as output.

## DIO\_DIR

The  DIO\_DIR  register  sets  the  direction  of  the  pins, where 1 is input and 0 is output. For pins used as part of the selected serial interface, the DIO\_DIR register has no effect. If a DIO is defined as an input, a weak internal pullup is active. DIO pins must remain configured as an input if directly connecting to GND/VDD. Otherwise, it is recommended to use external pullup or pulldown resistors accordingly.

## DIO\_POL

DIOs  configured  as  outputs  are  by  default  active  low. The logic 0 state is on. This can be modified using the DIO\_POL  register  using  the  same  bit  definition  as  the DIO\_STATE  register.  Any  corresponding  bit  set  in  the DIO\_POL register inverts the same DIO output so that it becomes active high.

## MAX78615+PPM

## Table 27. Status-Related Registers Bitmap

|   BIT | NAME     | STICKABLE?   | DESCRIPTION                            |
|-------|----------|--------------|----------------------------------------|
|    23 | DRDY     | Yes          | New low rate results (data) ready      |
|    22 | OV_FREQ  | Yes          | Frequency over High Limit              |
|    21 | UN_FREQ  | Yes          | Under Low Frequency Limit              |
|    20 | OV_TEMP  | Yes          | Temperature over High Limit            |
|    19 | UN_TEMP  | Yes          | Under Low Temperature Limit            |
|    18 | OV_VRMSC | Yes          | RMS Voltage C Over Limit               |
|    17 | UN_VRMSC | Yes          | RMS Voltage C Under Limit              |
|    16 | OV_VRMSB | Yes          | RMS Voltage B Over Limit               |
|    15 | UN_VRMSB | Yes          | RMS Voltage B Under Limit              |
|    14 | OV_VRMSA | Yes          | RMS Voltage A Over Limit               |
|    13 | UN_VRMSA | Yes          | RMS Voltage A Under Limit              |
|    12 | UN_PFC   | Yes          | Power Factor C Under Limit             |
|    11 | UN_PFB   | Yes          | Power Factor B Under Limit             |
|    10 | UN_PFA   | Yes          | Power Factor A Under Limit             |
|     9 | OV_IRMSC | Yes          | RMS Current C Over Limit               |
|     8 | OV_IRMSB | Yes          | RMS Current B Over Limit               |
|     7 | OV_IRMSA | Yes          | RMS Current A Over Limit               |
|     6 | VC_SAG   | Yes          | Voltage C Sag Condition Detected       |
|     5 | VB_SAG   | Yes          | Voltage B Sag Condition Detected       |
|     4 | VA_SAG   | Yes          | Voltage A Sag Condition Detected       |
|     3 | V_IMBAL  | Yes          | Voltage Imbalance Detected             |
|     2 | I_IMBAL  | Yes          | Current Imbalance Detected             |
|     1 | XSTATE   | No           | External Oscillator is clocking source |
|     0 | RESET    | Always       | Set by device after any type of reset  |

## Table 28. Digital I/O Functionality

| DIO_STATE DIO_DIR DIO_POL   | 24-PIN TQFN   | FUNCTION AT POWER- ON/RESET   | SPI   | UART   | I 2 C   | MASK   |
|-----------------------------|---------------|-------------------------------|-------|--------|---------|--------|
| Bit 0                       | 16            | IFC1                          | MP0   | MP0    | MP0     | -      |
| Bit 1                       | 15            | AD0                           | SCK   | MP1    | MP1     | -      |
| Bit 2                       | 14            | -                             | SDI   | RX     | SDAI    | -      |
| Bit 3                       | 13            | -                             | SDO   | TX     | SDAO    | -      |
| Bit 4                       | 4             | -                             | MP4   | MP4    | MP4     | MASK4  |
| Bit 5                       | 5             | -                             | SSB   | MP5    | SCL     | -      |
| Bit 6                       | 4             | AD1                           | MP6   | MP6    | MP6     | -      |
| Bit 7                       | 3             | -                             | MP7   | MP7    | MP7     | MASK7  |
| Bit 8                       | 2             | IFC0                          | MP8   | MP8    | MP8     | -      |
| Bit 9:23                    | -             | -                             | -     | -      | -       | -      |

│

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## MAX78615+PPM

## Alarm Masks

The  device  provides  MASK  registers  for  signaling  the status of any STATUS bits to one of the MP pins. These MASK  registers  have  the  same  bit  mapping  as  the STATUS register. The user must first enable the respective pin as an output before the MP can be driven to its active state. See Table 29.

## Command Register

The Command Register is located at address 0x00. Use this  register  to  perform  specific  tasks  such  as  saving coefficients  and  nonvolatile  register  defaults  into  flash memory. It also allows initiation of integrated calibration routines. See Table 30.

## Table 29. Mask Registers

| PIN NAME   | REGISTER   | DESCRIPTION                                                                                                                                        |
|------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| MP4        | MASK4      | A combination of a bit set in both the STATUS register and a MASK register causes the assigned DIO_STATE/pin to be activated (default active-low). |
| MP7        | MASK7      | A combination of a bit set in both the STATUS register and a MASK register causes the assigned DIO_STATE/pin to be activated (default active-low). |

## Table 30. Command Register Commands

| VALUE (HEX)   | DESCRIPTION               |
|---------------|---------------------------|
| 0x00xxxx      | Normal Operations Command |
| 0xCA/CBxxxx   | Calibration Command       |
| 0xACCxxx      | Flash Access Command      |
| 0xBDxxxx      | Soft Reset Command        |
| 0xECxxxx      | Reset Energy Command      |

## Table 32. Calibration Command Details

| BIT(S)   | VALUE   | DESCRIPTION                                                          |
|----------|---------|----------------------------------------------------------------------|
| 23:17    | 0x65    | 'Calibrate' Command                                                  |
| 16       |         | 1 = Calibrate Voltage for Phase C, 0 = no action                     |
| 15       |         | 1 = Calibrate Voltage for Phase B, 0 = no action                     |
| 14       |         | 1 = Calibrate Voltage for Phase A, 0 = no action                     |
| 13       |         | 1 = Calibrate Current for Phase C, 0 = no action                     |
| 12       |         | 1 = Calibrate Current for Phase B, 0 = no action                     |
| 11       |         | 1 = Calibrate Current for Phase A, 0 = no action                     |
| 10       |         | 1 = Calibrate Temperature, 0 = no action                             |
| 9        |         | Calibrate Offset vs. Gain (0 = calibrate Gain; 1 = calibrate Offset) |
| 8:0      |         | Reserved, set to 0                                                   |

Note: During calibration, the 'line-lock' bit should be set for best results.

## Table 31. Normal Operation Command Details

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## Normal Operation

The Normal Operations Command bits are applied in all normal operating cases. See Table 31.

## Calibration Command

The Calibration Command starts the calibration process for  the  selected  inputs.  It  is  assumed  that  appropriate input signals and target values are applied. When a gain calibration  process  completes,  bits  23:17  are  cleared along  with  bits  associated  with  channels  that  calibrated successfully. When an offset calibration completes, 23:17 are cleared but the corresponding offset bits will remain set. See Table 32.

|   BIT(S) | VALUE   | DESCRIPTION                                                                                                                           |
|----------|---------|---------------------------------------------------------------------------------------------------------------------------------------|
|        6 | RTRK    | 1= reset the minima and maxima registers for all monitored variables. This bit automatically clears to zero when the reset completes. |

│

## MAX78615+PPM

## Examples:

Calibrate gains of voltage and current of Phase A

Start Command: COMMAND = 0xCA4830

Successful Calibration: COMMAND is reset to 0x000030

Calibration  of  current  failed:  COMMAND  is  reset  to 0x000830

Calibrate gains of all three voltages.

Start Command: COMMAND = 0xCBC030

Successful Calibration: COMMAND is reset to 0x000030

Calibration  of  voltages  B  and  C  failed:  COMMAND  is reset to 0x018030

## Save to Flash Command

Use the 0xACC command to save to flash the calibration coefficients  and  defaults  for  nonvolatile  registers.  Upon reset or power-on, the values stored in flash will become new system defaults. Table 33 describes the ACC command bits. After execution of this command, the device resets the COMMAND register bits [23:8] to zero.

## Table 33. Save to Flash Command Bits

| BIT(S)   | VALUE    | DESCRIPTION                                     |
|----------|----------|-------------------------------------------------|
| 23:0     | 0xACC200 | Save defaults to flash memory for NV registers. |

## Table 34. Soft Reset Command Bits

| BIT(S)   | VALUE    | DESCRIPTION            |
|----------|----------|------------------------|
| 23:0     | 0xBDxxxx | Soft reset the device. |

## Table 35. Energy Clear Command Bits

| BIT(S)   | VALUE    | DESCRIPTION               |
|----------|----------|---------------------------|
| 23:0     | 0xEC0000 | Clear All Energy Counters |

│

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

Example:

Save all current settings to flash memory, to make then permanent.

Write  COMMAND  =  0xACC230. After  execution  of  this command, the MAX78615+PPM resets the COMMAND register to 0x000030.

## Soft Reset Command

Use the 0xBD command to soft reset the device firmware. Table 34 describes the command bits. After execution of this command, the device resets the firmware and restarts.

## Energy Clear Command

Use this command to clear all energy counters. Table 35 describes the command bits.

## Configuration Register

A CONFIG register is provided for system settings, such as sensor configuration, current sensor type, power computations and hardware gains. See Table 36 for register bit descriptions.

## MAX78615+PPM

## Table 36. CONFIG Register Bit Descriptions

| BIT(S)   | NAME     | DESCRIPTION                                                                            |
|----------|----------|----------------------------------------------------------------------------------------|
| 23       | -        | Reserved for future use, write as zeroes                                               |
| 22       | INV_AV3  | Invert voltage samples AV3                                                             |
| 21       | INV_AV2  | Invert voltage samples AV2                                                             |
| 20       | INV_AV1  | Invert voltage samples AV1                                                             |
| 19       | VSGNC    | Drive MP8 with sign of voltage C                                                       |
| 18       | VSGNB    | Drive MP7 with sign of voltage B                                                       |
| 17       | VSGNA    | Drive MP6 with sign of voltage A                                                       |
| 16       | -        | Reserved for future use, write as zeroes                                               |
| 15       | -        | Reserved for future use, write as zeroes                                               |
| 14       | -        | Reserved for future use, write as zeroes                                               |
| 13       | -        | Reserved for future use, write as zeroes                                               |
| 12       | -        | Reserved for future use, write as zeroes                                               |
| 11       | -        | Reserved for future use, write as zeroes                                               |
| 10       | -        | Reserved for future use, write as zeroes                                               |
| 9        | -        | Reserved for future use, write as zeroes                                               |
| 8        | -        | Reserved for future use, write as zeroes                                               |
| 7:6      | PPHASE   | Ignore phase for total power computations 00: none 01: phase A 10: phase B 11: phase C |
| 5        | VDELTA   | Compute delta voltage between phases                                                   |
| 4:3      | VPHASE   | Missing sensor on voltage input 00: none missing 01: AV1 10: AV2 11: AV3               |
| 2        | INEUTRAL | Current sensor in neutral leg.                                                         |
| 1:0      | IPHASE   | Missing sensor on current input 00: none missing 01: AI1 10: AI2 11: AI3               |

│

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## MAX78615+PPM

## Control Register

This register is used to control the basic operating modes of  the  MAX78615+PPM.  See  Table  37  for  register  bit descriptions.

## User Nonvolatile Storage

The  firmware  provides  eight  scratch  registers  that  are stored  in  flash  on  a  flash  save  command(0xACC2xx). These registers  have  no  direct  function  in  the  firmware functionality and can be used without effect by the user. See Table 38.

## Register Access

All  user  registers  are  contained  in  a  256-word  (24-bits each)  area  of  the  on-chip  RAM  and  can  be  accessed through  the  UART,  SPI,  or  I 2 C  interfaces.  These  registers  are  byte-addressable  via  the  UART  interface  and word-addressable via the SPI and I 2 C interfaces. These registers consist of read (output), write (input), and read/ write  in  the  case  of  the  Command  Register. Writing to reserved  registers  or  to  unspecified  memory  loca -tions  could  result  in  device  malfunction  or  unex -pected results .

## Table 37. Control Register Bit Descriptions

| BIT(S)   | NAME   | DESCRIPTION                                                                                                                                                          |
|----------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 23:6     | NA     | Reserved/0                                                                                                                                                           |
| 6        | DIR    | 1: DIO_STATE[5]/MP5 pin is used in UART mode to indicate the device is selected and may transmit or deselected and will not transmit. 0: DIO_STATE[5] is unaffected. |
| 5        | lock   | Line Lock 1 = lock to line cycle; 0 = independent of line voltage                                                                                                    |
| 4        | tc     | Enable Gain/Temperature compensation 1 = enable; 0 = disable. This bit allows the firmware to modify the system gain based on measured chip temperature.             |
| 3        | NA     | Reserved/0                                                                                                                                                           |
| 2        | strg   | Single-Target SSI Mode: SSI ignores the devaddr and AD# pins. Will respond to all SSI commands. Only checked during initialization.                                  |
| 1:0      | NA     | Reserved/0                                                                                                                                                           |

## Table 38. User Nonvolatile Storage Registers

| REGISTER   |   DEFAULT | DESCRIPTION              |
|------------|-----------|--------------------------|
| UNV0       |        62 | User Nonvolatile Storage |
| UNV1       |       667 | User Nonvolatile Storage |
| UNV2       |         0 | User Nonvolatile Storage |
| UNV3       |         0 | User Nonvolatile Storage |

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## Data Types

The input and output registers have different data types, depending on their assignment and functions. The notation used indicates whether the number is signed, unsigned, or bit-mapped and the location  of  the  binary  point. All  registers, by default, are stored as 24-bit two's complement values. This gives the registers' raw value (Rr) a theoretical range of 2 23  - 1 (0x7FFFFF) to -2 23  (0x800000). These registers are expressed, by convention, with the notation of S.N, which implies the interpreted value of the register (Ri) is the raw value (Rr) divided by 2 N .

| S   | Indicates a signed fixed point two's compliment value.                                                                                                      |
|-----|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| U   | Indicates an unsigned fixed point value.                                                                                                                    |
| N   | Indicates the number of bits to the right of the binary point. The numbers value can be expressed by dividing the binary or two's compliment value by 2 n . |

## Example 1:

S.0 (INT) is a 24-bit signed fixed-point number with 0 fraction bits to the right of the binary point and a range of -2 23 to +2 23  - 1. 0x200000 = 2 21  = 2097152.

| REGISTER   |   DEFAULT | DESCRIPTION              |
|------------|-----------|--------------------------|
| UNV4       |         0 | User Nonvolatile Storage |
| UNV5       |         0 | User Nonvolatile Storage |
| UNV6       |         0 | User Nonvolatile Storage |
| UNV7       |         0 | User Nonvolatile Storage |

│

## MAX78615+PPM

## Example 2:

S.21 is a 24-bit signed fixed-point number with 21 fraction bits to the right of the binary point and a range of -4.0 to 4-2-21. The value can be expressed by dividing the two's compliment value by 2 21 . 0x200000 = 1. 0x800000 = -4.0.

## Example 3:

U.24  is  a  24-bit  unsigned  fixed-point  number  with  24 fraction bits to the right of the binary point and a range of 1.0-2 X  to 0. The value can be expressed by dividing the binary value by 2 X  = 2 X  = 0.125. 0x800000 = 2 X  = 0.5.

## Indirect Read Access

The device firmware supplies a method for indirect read access to the device RAM memory. The firmware writes the contents of IND\_RD\_DATA with the content of RAM at  the  word  address  indicated  by  (IND\_RD\_ADDR  and 0x0000FF). That value (IND\_RD\_ADDR and 0x0000FF) is  then  written  back  into  IND\_RD\_ADDR to indicate the read has completed. The check/action for the contents of

## Table 39. Indirect Read Access Registers

| REGISTER    | DESCRIPTION           |
|-------------|-----------------------|
| IND_RD_ADDR | Indirect Read Address |
| IND_RD_DATA | Indirect Read Data    |

## Table 41. Register Map

| WORD ADDR (HEX)   | BYTE ADDR (HEX)   | REGISTER NAME   | TYPE   | NV   | DESCRIPTION                                      |
|-------------------|-------------------|-----------------|--------|------|--------------------------------------------------|
| 0                 | 0                 | COMMAND         | INT    | Y    | Firmware action/commands                         |
| 1                 | 3                 | FW_VERSION      | INT    |      | Firmware version                                 |
| 2                 | 6                 | CONFIG          | INT    | Y    | Selects input configuration                      |
| 3                 | 9                 | CONTROL         | INT    | Y    | Device behavior control                          |
| 4                 | C                 | CYCLE           | INT    |      | High-rate sample counter                         |
| 5                 | F                 | DIVISOR         | INT    |      | Actual samples in previous accumulation interval |
| 6                 | 12                | FRAME           | INT    |      | Low-rate sample counter                          |
| 7                 | 15                | STATUS          | INT    |      | Alarm and device status bits                     |
| 8                 | 18                | DIO_STATE       | INT    |      | State of DIO pins                                |
| 9                 | 1B                | IND_WR_DATA     | INT    |      | Indirect Write Data                              |
| A                 | 1E                | IND_WR_ADDR     | INT    |      | Indirect Write Address                           |
| B                 | 21                | IND_RD_ADDR     | INT    |      | Indirect Read Address                            |

│

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

IND\_RD\_ADDR is performed at every high rate sample. See Table 39.

## Indirect Write Access

The device firmware supplies a method for indirect write access to the device RAM memory. If any of the upper 12 bits of IND\_WR\_ADDR are nonzero, the firmware writes the  contents  of  IND\_WR\_DATA  into  the  word  address indicated by (IND\_WR\_ADDR and 0x0000FF). That value (IND\_WR\_ADDR and 0x0000FF) is then written back into IND\_WR\_ADDR to indicate the write has completed. The check/action for the contents of IND\_WR\_ADDR is performed at every high rate sample. See Table 40.

## Register Locations

Use  word  addresses  for  I 2 C  and  SPI  interfaces  and byte addresses for the SSI (UART) protocol. Nonvolatile (NV)  register  defaults  are  indicated  with  a  'Y.' All  other registers  are  initialized  as  described  in  the Functional Description . See Table 41.

## Table 40. Direct Read Access Registers

| REGISTER    | DESCRIPTION            |
|-------------|------------------------|
| IND_WR_DATA | Indirect Write Data    |
| IND_WR_ADDR | Indirect Write Address |

## MAX78615+PPM

## Table 41. Register Map (continued)

| WORD ADDR (HEX)   | BYTE ADDR (HEX)   | REGISTER NAME   | TYPE   | NV   | DESCRIPTION                   |
|-------------------|-------------------|-----------------|--------|------|-------------------------------|
| C                 | 24                | IND_RD_DATA     | INT    |      | Indirect Read Data            |
| D                 | 27                | VA              | S.23   |      | Instantaneous Voltage         |
| E                 | 2A                | VB              | S.23   |      | Instantaneous Voltage         |
| F                 | 2D                | VC              | S.23   |      | Instantaneous Voltage         |
| 10                | 30                | IA              | S.23   |      | Instantaneous Current         |
| 11                | 33                | IB              | S.23   |      | Instantaneous Current         |
| 12                | 36                | IC              | S.23   |      | Instantaneous Current         |
| 13                | 39                | VA_RMS          | S.23   |      | RMS Voltage                   |
| 14                | 3C                | VB_RMS          | S.23   |      | RMS Voltage                   |
| 15                | 3F                | VC_RMS          | S.23   |      | RMS Voltage                   |
| 16                | 42                | VT_RMS          | S.23   |      | RMS Voltage average (Total/3) |
| 17                | 45                | VFUND_A         | S.23   |      | Fundamental Voltage           |
| 18                | 48                | VFUND_B         | S.23   |      | Fundamental Voltage           |
| 19                | 4B                | VFUND_C         | S.23   |      | Fundamental Voltage           |
| 1A                | 4E                | IA_PEAK         | S.23   |      | Peak Current                  |
| 1B                | 51                | IB_PEAK         | S.23   |      | Peak Current                  |
| 1C                | 54                | IC_PEAK         | S.23   |      | Peak Current                  |
| 1D                | 57                | IA_RMS          | S.23   |      | RMS Current                   |
| 1E                | 5A                | IB_RMS          | S.23   |      | RMS Current                   |
| 1F                | 5D                | IC_RMS          | S.23   |      | RMS Current                   |
| 20                | 60                | IT_RMS          | S.23   |      | RMS Current average (Total/3) |
| 21                | 63                | IFUND_A         | S.23   |      | Fundamental Current           |
| 22                | 66                | IFUND_B         | S.23   |      | Fundamental Current           |
| 23                | 69                | IFUND_C         | S.23   |      | Fundamental Current           |
| 24                | 6C                | WATT_A          | S.23   |      | Active Power                  |
| 25                | 6F                | WATT_B          | S.23   |      | Active Power                  |
| 26                | 72                | WATT_C          | S.23   |      | Active Power                  |
| 27                | 75                | VAR_A           | S.23   |      | Reactive Power                |
| 28                | 78                | VAR_B           | S.23   |      | Reactive Power                |
| 29                | 7B                | VAR_C           | S.23   |      | Reactive Power                |
| 2A                | 7E                | VA_A            | S.23   |      | Apparent Power                |
| 2B                | 81                | VA_B            | S.23   |      | Apparent Power                |
| 2C                | 84                | VA_C            | S.23   |      | Apparent Power                |

│

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## MAX78615+PPM

## Table 41. Register Map (continued)

| WORD ADDR (HEX)   | BYTE ADDR (HEX)   | REGISTER NAME   | TYPE   | NV   | DESCRIPTION                           |
|-------------------|-------------------|-----------------|--------|------|---------------------------------------|
| 2D                | 87                | WATT_T          | S.23   |      | Active Power Total                    |
| 2E                | 8A                | VAR_T           | S.23   |      | Reactive Power Total                  |
| 2F                | 8D                | VA_T            | S.23   |      | Apparent Power Total                  |
| 30                | 90                | PFUND_A         | S.23   |      | Fundamental Power                     |
| 31                | 93                | PFUND_B         | S.23   |      | Fundamental Power                     |
| 32                | 96                | PFUND_C         | S.23   |      | Fundamental Power                     |
| 33                | 99                | QFUND_A         | S.23   |      | Fundamental Reactive Power            |
| 34                | 9C                | QFUND_B         | S.23   |      | Fundamental Reactive Power            |
| 35                | 9F                | QFUND_C         | S.23   |      | Fundamental Reactive Power            |
| 36                | A2                | VAFUNDA         | S.23   |      | Fundamental Volt Amperes              |
| 37                | A5                | VAFUNDB         | S.23   |      | Fundamental Volt Amperes              |
| 38                | A8                | VAFUNDC         | S.23   |      | Fundamental Volt Amperes              |
| 39                | AB                | PFA             | S.22   |      | Power Factor                          |
| 3A                | AE                | PFB             | S.22   |      | Power Factor                          |
| 3B                | B1                | PFC             | S.22   |      | Power Factor                          |
| 3C                | B4                | PF_T            | S.22   |      | Total Power Factor                    |
| 3D                | B7                | FREQ            | S.16   |      | Line Frequency                        |
| 3E                | BA                | TEMPC_A         | S.10   |      | Chip Temperature (Celsius°) Channel A |
| 3F                | BD                | TEMPC_B         | S.10   |      | Chip Temperature (Celsius°) Channel B |
| 40                | C0                | TEMPC_C         | S.10   |      | Chip Temperature (Celsius°) Channel C |
| 41                | C3                | WHA_POS         | INT    |      | Received Active Energy Counter        |
| 42                | C6                | WHB_POS         | INT    |      | Received Active Energy Counter        |
| 43                | C9                | WHC_POS         | INT    |      | Received Active Energy Counter        |
| 44                | CC                | WHA_NEG         | INT    |      | Delivered Active Energy Counter       |
| 45                | CF                | WHB_NEG         | INT    |      | Delivered Active Energy Counter       |
| 46                | D2                | WHC_NEG         | INT    |      | Delivered Active Energy Counter       |
| 47                | D5                | VARHA_POS       | INT    |      | Reactive Energy Leading Counter       |
| 48                | D8                | VARHB_POS       | INT    |      | Reactive Energy Leading Counter       |
| 49                | DB                | VARHC_POS       | INT    |      | Reactive Energy Leading Counter       |
| 4A                | DE                | VARHA_NEG       | INT    |      | Reactive Energy Lagging Counter       |
| 4B                | E1                | VARHB_NEG       | INT    |      | Reactive Energy Lagging Counter       |
| 4C                | E4                | VARHC_NEG       | INT    |      | Reactive Energy Lagging Counter       |
| 4D                | E7                | MIN0            | NA     |      | Minimum Recorded Value 1              |

│

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## MAX78615+PPM

## Table 41. Register Map (continued)

| WORD ADDR (HEX)   | BYTE ADDR (HEX)   | REGISTER NAME   | TYPE   | NV   | DESCRIPTION                                            |
|-------------------|-------------------|-----------------|--------|------|--------------------------------------------------------|
| 4E                | EA                | MIN1            | NA     |      | Minimum Recorded Value 2                               |
| 4F                | ED                | MIN2            | NA     |      | Minimum Recorded Value 3                               |
| 50                | F0                | MIN3            | NA     |      | Minimum Recorded Value 4                               |
| 51                | F3                | MIN4            | NA     |      | Minimum Recorded Value 5                               |
| 52                | F6                | MIN5            | NA     |      | Minimum Recorded Value 6                               |
| 53                | F9                | MIN6            | NA     |      | Minimum Recorded Value 7                               |
| 54                | FC                | MIN7            | NA     |      | Minimum Recorded Value 8                               |
| 55                | FF                | MAX0            | NA     |      | Maximum Recorded Value 1                               |
| 56                | 102               | MAX1            | NA     |      | Maximum Recorded Value 2                               |
| 57                | 105               | MAX2            | NA     |      | Maximum Recorded Value 3                               |
| 58                | 108               | MAX3            | NA     |      | Maximum Recorded Value 4                               |
| 59                | 10B               | MAX4            | NA     |      | Maximum Recorded Value 5                               |
| 5A                | 10E               | MAX5            | NA     |      | Maximum Recorded Value 6                               |
| 5B                | 111               | MAX6            | NA     |      | Maximum Recorded Value 7                               |
| 5C                | 114               | MAX7            | NA     |      | Maximum Recorded Value 8                               |
| 5D                | 117               | MMADDR0         | INT    | Y    | Min/Max Monitor address 1                              |
| 5E                | 11A               | MMADDR1         | INT    | Y    | Min/Max Monitor address 2                              |
| 5F                | 11D               | MMADDR2         | INT    | Y    | Min/Max Monitor address 3                              |
| 60                | 120               | MMADDR3         | INT    | Y    | Min/Max Monitor address 4                              |
| 61                | 123               | MMADDR4         | INT    | Y    | Min/Max Monitor address 5                              |
| 62                | 126               | MMADDR5         | INT    | Y    | Min/Max Monitor address 6                              |
| 63                | 129               | MMADDR6         | INT    | Y    | Min/Max Monitor address 7                              |
| 64                | 12C               | MMADDR7         | INT    | Y    | Min/Max Monitor address 8                              |
| 65                | 12F               | BUCKETL         | INT    | Y    | Energy Bucket Size - Low word                          |
| 66                | 132               | BUCKETH         | INT    | Y    | Energy Bucket Size - High word                         |
| 67                | 135               | SAMPLES         | INT    | Y    | Minimum high-rate samples per accumulation interval    |
| 68                | 138               | STATUS_CLEAR    | INT    |      | Used to reset alarm/status bits                        |
| 69                | 13B               | STATUS_SET      | INT    |      | Used to set/force alarm/status bits                    |
| 6A                | 13E               | DEVADDR         | INT    | Y    | High order address bits for I2C and UART interfaces    |
| 6B                | 141               | BAUD            | INT    | Y    | Baud rate for UART interface                           |
| 6C                | 144               | DIO_DIR         | INT    | Y    | Direction of DIO pins. 1 = Input ; 0 = Output          |
| 6D                | 147               | DIO_POL         | INT    | Y    | Polarity of DIO pins. 1 = Active High ; 0 = Active Low |
| 6E                | 14A               | CALCYCS         | INT    | Y    | Number of calibration cycles to average                |

│

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## MAX78615+PPM

## Table 41. Register Map (continued)

| WORD ADDR (HEX)   | BYTE ADDR (HEX)   | REGISTER NAME   | TYPE   | NV   | DESCRIPTION                                                 |
|-------------------|-------------------|-----------------|--------|------|-------------------------------------------------------------|
| 6F                | 14D               | HPF_COEF_I      | S.23   | Y    | Current input HPF coefficient. Positive values only         |
| 70                | 150               | HPF_COEF_V      | S.23   | Y    | Voltage input HPF coefficient. Positive values only         |
| 71                | 153               | PHASECOMP1      | S.21   | Y    | Phase compensation (±4 samples) for AV1 input               |
| 72                | 156               | PHASECOMP2      | S.21   | Y    | Phase compensation (±4 samples) for AV2 input               |
| 73                | 159               | PHASECOMP3      | S.22   | Y    | Phase compensation (±4 samples) for AV3 input               |
| 74                | 15C               | HARM            | INT    | Y    | Harmonic Selector, default: 1 (fundamental)                 |
| 75                | 15E               | V1_OFFS         | S.23   | Y    | Voltage Offset Calibration                                  |
| 76                | 162               | V2_OFFS         | S.23   | Y    | Voltage Offset Calibration                                  |
| 77                | 165               | V3_OFFS         | S.23   | Y    | Voltage Offset Calibration                                  |
| 78                | 168               | V1_GAIN         | S.21   | Y    | Voltage Gain Calibration. Positive values only              |
| 79                | 16B               | V2_GAIN         | S.21   | Y    | Voltage Gain Calibration. Positive values only              |
| 7A                | 16E               | V3_GAIN         | S.21   | Y    | Voltage Gain Calibration. Positive values only              |
| 7B                | 171               | I1_OFFS         | S.23   | Y    | Current Offset Calibration                                  |
| 7C                | 174               | I2_OFFS         | S.23   | Y    | Current Offset Calibration                                  |
| 7D                | 177               | I3_OFFS         | S.23   | Y    | Current Offset Calibration                                  |
| 7E                | 17A               | I1_GAIN         | S.21   | Y    | Current Gain Calibration. Positive values only.             |
| 7F                | 17D               | I2_GAIN         | S.21   | Y    | Current Gain Calibration. Positive values only.             |
| 80                | 180               | I3_GAIN         | S.21   | Y    | Current Gain Calibration. Positive values only.             |
| 81                | 183               | IARMS_OFF       | S.23   | Y    | RMS Current dynamic offset adjust. Positive values only.    |
| 82                | 186               | IBRMS_OFF       | S.23   | Y    | RMS Current dynamic offset adjust. Positive values only.    |
| 83                | 189               | ICRMS_OFF       | S.23   | Y    | RMS Current dynamic offset adjust. Positive values only.    |
| 84                | 18C               | QA_OFFS         | S.23   | Y    | Reactive Power dynamic offset adjust. Positive values only. |
| 85                | 18F               | QB_OFFS         | S.23   | Y    | Reactive Power dynamic offset adjust. Positive values only. |
| 86                | 192               | QC_OFFS         | S.23   | Y    | Reactive Power dynamic offset adjust. Positive values only. |
| 87                | 195               | PA_OFFS         | S.23   | Y    | Active Power dynamic offset adjust. Positive values only.   |
| 88                | 198               | PB_OFFS         | S.23   | Y    | Active Power dynamic offset adjust. Positive values only.   |
| 89                | 19B               | PC_OFFS         | S.23   | Y    | Active Power dynamic offset adjust. Positive values only.   |
| 8A                | 19E               | T_GAIN          | S.21   | Y    | Temperature Slope Calibration (Factory Set)                 |
| 8B                | 1A1               | T_OFFS1         | INT    | Y    | Temperature Offset Calibration Remote Channel 1             |
| 8C                | 1A4               | T_OFFS2         | INT    | Y    | Temperature Offset Calibration Remote Ch. B                 |
| 8D                | 1A7               | T_OFFS3         | INT    | Y    | Temperature Offset Calibration Remote Ch. C                 |
| 8E                | 1AA               | VSAG_INT        | INT    | Y    | Voltage sag detect interval (high-rate samples)             |
| 8F                | 1AD               | V_IMB_MAX       | S.23   | Y    | Voltage imbalance alarm limit. Positive values only         |

│

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## MAX78615+PPM

## Table 41. Register Map (continued)

| WORD ADDR (HEX)   | BYTE ADDR (HEX)   | REGISTER NAME   | TYPE   | NV   | DESCRIPTION                                            |
|-------------------|-------------------|-----------------|--------|------|--------------------------------------------------------|
| 90                | 1B0               | I_IMB_MAX       | S.23   | Y    | Current imbalance alarm limit. Positive values only.   |
| 91                | 1B3               | V_TARGET        | S.23   | Y    | Calibration Target for Voltages. Positive values only. |
| 92                | 1B6               | VRMS_MIN        | S.23   | Y    | Voltage lower alarm limit. Positive values only.       |
| 93                | 1B9               | VRMS_MAX        | S.23   | Y    | Voltage upper alarm limit. Positive values only.       |
| 94                | 1BC               | VSAG_LIM        | S.23   | Y    | RMS Voltage Sag threshold. Positive values only.       |
| 95                | 1BF               | I_TARGET        | S.23   | Y    | Calibration Target for Currents. Positive values only. |
| 96                | 1C2               | IRMS_MAX        | S.23   | Y    | Current upper alarm limit. Positive values only.       |
| 97                | 1C5               | T_TARGET        | S.10   | Y    | Temperature calibration target                         |
| 98                | 1C8               | T_MIN           | S.10   | Y    | Temperature Alarm Lower Limit                          |
| 99                | 1CB               | T_MAX           | S.10   | Y    | Temperature Alarm Upper Limit                          |
| 9A                | 1CE               | PF_MIN          | S.22   | Y    | Power Factor lower alarm limit                         |
| 9B                | 1D1               | F_MIN           | S.16   | Y    | Frequency Alarm Lower Limit                            |
| 9C                | 1D4               | F_MAX           | S.16   | Y    | Frequency Alarm Upper Limit                            |
| 9D                | 1D7               | MASK4           | INT    | Y    | Alarm/status mask for MP4 output pin                   |
| 9E                | 1DA               | MASK7           | INT    | Y    | Alarm/status mask for MP7 output pin                   |
| 9F                | 1DD               | STICKY          | INT    | Y    | Alarm/status bits to hold until cleared by host        |
| A0                | 1E0               | RSVD            | NA     | Y    | Reserved                                               |
| A1                | 1E3               | RSVD            | NA     | Y    | Reserved                                               |
| A2                | 1E6               | UNV0            | NA     | Y    | User Nonvolatile Storage                               |
| A3                | 1E9               | UNV1            | NA     | Y    | User Nonvolatile Storage                               |
| A4                | 1FC               | UNV2            | NA     | Y    | User Nonvolatile Storage                               |
| A5                | 1EF               | UNV3            | NA     | Y    | User Nonvolatile Storage                               |
| A6                | 1F2               | UNV4            | NA     | Y    | User Nonvolatile Storage                               |
| A7                | 1F5               | UNV5            | NA     | Y    | User Nonvolatile Storage                               |
| A8                | 1F8               | UNV6            | NA     | Y    | User Nonvolatile Storage                               |
| A9                | 1FB               | UNV7            | NA     | Y    | User Nonvolatile Storage                               |

│

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## MAX78615+PPM

## Serial Interfaces

All  user  registers  are  contained  in  a  256-word  (24-bits each)  area  of  the  on-chip  RAM  and  can  be  accessed through the UART, SPI, or I 2 C interfaces. While access to a single byte is possible with some interfaces, it is highly recommended  that  the  user  access  words  (or  multiple words) of data with each transaction.

Only one interface can be active at a time. The interface selection pins are sampled at the end of a reset or power-on sequence to determine the operating mode. See Table 42.

## UART Interface

The device implements a 'simple serial  interface'  (SSI) protocol on the UART interface that features:

- Support for single and multipoint communications
- Transmit (direction) control for an RS-485 transceiver
- Efficient use of a low bandwidth serial interface
- Data integrity checking

The default configuration is 38400 baud, 8-bit, no-parity, 1 stop-bit, no flow control. The value in the BAUD register

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

determines the baud rate to be used. Example: To select a 9600 baud rate, the user writes a decimal 9600 to the BAUD register. The new rate will not take effect immediately. It must be saved to flash and takes effect at the next reset. The maximum BAUD value is limited to 115200.

## RS-485 Support

The SSB/MP5/SCL pin can be used to drive an RS-485 transceiver output enable or direction pin. The implemented  protocol  supports  a  full-duplex  4-wire  RS-485  bus. When the DIR bit is set in the Control Register, then the DIO\_STATE[5] pin reflects if the device has been selected or deselected by an SSI target command. If DIO\_DIR[5] is also set to an output, then the MP5 pin reflects this state. See Figure 15.

## Table 42. Serial Interface Selection

Figure 15. RS-485 Bus Protocol

| INTERFACE MODE   |   IFC0 | IFC1           |
|------------------|--------|----------------|
| SPI              |      0 | X (don't care) |
| UART             |      1 | 0              |
| I 2 C            |      1 | 1              |

<!-- image -->

Figure 16. Multipoint Device Address Communication System

<!-- image -->

│

## MAX78615+PPM

## Device Address Configuration

The  SSI  protocol  utilizes  8-bit  addressing  for  multipoint communications. The usable SSI ID range is 1 to 254. In multipoint systems with more than four targets, the user must  configure  device  address  bits  in  the  DEVADDR according  to  the  formula  SSI  ID  =  Device  Address  +1 (Figure 16).

If the CONTROL[2]/strg bit is set on startup, then the SSI protocol assumes it is the only device in the system and ignore  the  SSI  ID  and  responds  to  all  commands.  See Table 43.

## SSI Protocol Description

The SSI protocol is command response system supporting a single master and one or more targets. The host (master) sends commands to a selected target that first verifies the integrity of the packet before sending a reply or executing a  command.  Failure  to  decode  a  host  packet  will  cause the selected target to send a fail code. If the condition of a received packet is uncertain, no reply is sent.

Each target must have a unique SSI ID. Zero is not a valid SSI ID for a target device as it is used by the host to deselect all target devices.

With both address pins low on the MAX78615+PPM, the SSI ID defaults to 1 and is the 'Selected' device following a  reset.  This  configuration  is  intended  for  single  target (point-to-point)  systems  that  do  not  require  the  use  of device addressing or selecting targets.

## Table 43. Single Target Mode Bit

Figure 17. SSI Protocol System Sequence

| NAME   |   DEFAULT | DESCRIPTION                                                                                                              |
|--------|-----------|--------------------------------------------------------------------------------------------------------------------------|
| strg   |         1 | 1: Single-Target SSI Mode: SSI ignores devaddr and will respond to all SSI commands. Only checked during initialization. |

<!-- image -->

Figure 18. Master Packets

<!-- image -->

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

In  multipoint  systems,  the  master  typically  de-selects all  target  devices  by  selecting  SSI  ID  #0.  The  master must then select the target with a valid SSI ID and get an  acknowledgement  from  the  slave  before  setting  the target's register address pointer and performing read or write operations. If no target is selected, no reply is sent. The  SSB/MP5/SCL  pin  is  asserted  while  the  device  is selected. Figure 17 shows the sequence of operation.

## Master Packets

Master  packets  always  start  with  the  1-byte  header (0xAA)  for  synchronization  purposes.  The  master  then sends the byte count of the entire packet (up to 255 byte packets) followed by the payload (up to 253 bytes) and a 1-byte modulo-256 checksum of all packet bytes for data integrity checking. See Figure 18.

The  payload  can  contain  either  a  single  command  or multiple commands if the target is already selected. It can also  include  device  addresses,  register  addresses,  and data. All multibyte payloads are sent and received leastsignificant-byte first. See Table 44 for the master packet command summary.

Users  only  need  to  implement  commands  they  actually need  or  intend  to  use.  For  example,  only  one  address command  is  required,  either  0xA1  for  systems  with  8 address  bits  or  less  or  0xA3  for  systems  with  9  to  16 address bits. Likewise, only one write, read, or select target command needs to be implemented. Select Target is not needed in systems with only one target.

│

## MAX78615+PPM

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## Table 44. Master Packet Command Summary

| COMMAND   | PARAMETERS       | DESCRIPTION                                      |
|-----------|------------------|--------------------------------------------------|
| 0-7F      |                  | (invalid)                                        |
| 80-9F     |                  | (not used)                                       |
| A0        |                  | Clear address                                    |
| A1        | [byte-L]         | Set Read/Write address bits [7:0]                |
| A2        | [byte-H]         | Set Read/Write address bits [15:8]               |
| A3        | [byte-L][byte-H] | Set Read/Write address bits [15:0]               |
| A4-AF     |                  | (reserved for larger address targets)            |
| B0-BF     |                  | (not used)                                       |
| C0        |                  | De-select Target (target will Acknowledge)       |
| C1-CE     |                  | Select target 1 to 14 (target will Acknowledge)  |
| CF        | [byte]           | Select target 0 to 255 (target will Acknowledge) |
| D0        | [data...]        | Write bytes set by remainder of Byte Count       |
| D1-DF     | [data...]        | Write 1 to 15 bytes                              |
| E0        | [byte]           | Read 0 to 255 bytes                              |
| E1-EF     |                  | Read 1 to 15 bytes                               |
| F0-FF     |                  | (not used)                                       |

## Command Payload Examples

Device Selection

| PAYLOAD      | PAYLOAD   |
|--------------|-----------|
| 0xCF Command | SSI ID    |

## Register Address Pointer Selection

| PAYLOAD      | PAYLOAD                    |
|--------------|----------------------------|
| 0xA3 Command | Register Address (2 Bytes) |

## Small Read Command (3 bytes)

| PAYLOAD      |
|--------------|
| 0xE3 Command |

## Large Read Command (30 bytes)

| PAYLOAD      | PAYLOAD         |
|--------------|-----------------|
| 0xE0 Command | 0x1E (30 bytes) |

## Small Write Command (3 bytes)

| PAYLOAD      | PAYLOAD         |
|--------------|-----------------|
| 0xD3 Command | 3 Bytes of Data |

## Large Write Command (30 bytes)

| BYTE COUNT      | PAYLOAD      | PAYLOAD          |
|-----------------|--------------|------------------|
| 0x21 (34 bytes) | 0xD0 Command | 30 Bytes of Data |

After  each  read  or  write  operation,  the  internal  address pointer  is  incremented  to  point  to  the  address  that  followed the target of the previous read or write operation.

## Slave Packets

The  type  of  slave  packet  depends  upon  the  type  of command  from  the  master  device  and  the  successful execution by the slave device. Standard replies include 'Acknowledge' and 'Acknowledge with Data.'

ACKNOWLEDGE without data

| ACKNOWLEDGE   | BYTE   | READ   | CHECK   |
|---------------|--------|--------|---------|
| with data     | COUNT  | DATA   | SUM     |

If  no  data  is  expected  from  the  slave  or  there  is  a  fail code, a single byte reply is sent. If a successfully decoded command is expected to reply with data, the slave sends a  packet  format  similar  to  the  master  packet  where  the header is  replaced  with  a  Reply  Code  and  the  payload contains the read data.

│

## MAX78615+PPM

Failure to decode a host packet will cause the selected target to send a fail code (0xB0-0xBF) acknowledgement depending on mode of failure. Masters wishing to simplify could accept any unimplemented fail code as a Negative Acknowledge.

If  no  target  is  selected  or  the  condition  of  a  received packet is uncertain, no reply is sent. Timeouts can also occur when data is corrupt or no target is selected. The master should implement the appropriate timeout control logic after approximately 50 byte times at the current baud rate. When a first reply byte is received, the master should check to see if it  is  an  SSI  header  or  an Acknowledge. If  so,  the  timeout  timer  is  reset,  and  each  subsequent receive byte will also reset the timer. If no byte is received within  the  timeout  interval,  the  master  can  expect  the slave timed out and re-send a new command.

## SPI Interface

The Maxim device operates as an SPI slave. The host is expected to instigate and control all transactions. The signals used for SPI communication are defined as:

- SSB : (also known as CSB ) the device SPI chip/ slave select signal (active low)
- SCK : the clocking signal that clocks MISO and MOSI (data)
- SDI : (also known as MOSI ) the data shifted into the measurement device
- SDO : (also known as MISO ) the data shifted out of the measurement device

Figure 19. Signal Timing on the SPI Bus

<!-- image -->

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

In  Maxim  embedded-measurement  devices,  these  signals may have alternate functionality depending upon the device mode and/or firmware.

## SPI Mode

The device operates as a slave in mode 3 (CPOL = 1, CPHA == 1) and as such the data is captured on the rising edge and propagated on the falling edge of the serial data clock  (SCK).  Figure  19  shows  a  single-byte  transaction on the SPI bus. Bytes are transmitted/received MSB first.

## Table 45. SSI Responses

| REPLY CODE   | DEFINITION                                          |
|--------------|-----------------------------------------------------|
| 0xAA         | Acknowledge with data                               |
| 0xAB         | Acknowledge with data (half duplex)                 |
| 0xAD         | Acknowledge without data.                           |
| 0xB0         | Negative Acknowledge (NACK).                        |
| 0xBC         | Command not implemented.                            |
| 0xBD         | Checksum failed.                                    |
| 0xBF         | Buffer overflow (or packet too long).               |
| - timeout -  | Any condition too difficult to handle with a reply. |

│

## MAX78615+PPM

## Single Word SPI Reads

The device supplies direct read access to the device RAM memory. To read the RAM the master device must send a read command to the slave device and then clock out the resulting read data. SSB must be kept active low for the  entire  read  transaction  (command  and  response). SCK  may  be  interrupted  as  long  as  SSB  remains  low. ADDR[5:0]  is  filled  with  the  word  address  of  the  read transaction. RAM data contents are transmitted most significant  byte  first. ADDR[5:0]  cannot  exceed 0x3F. RAM words, and therefore the results, are natively 24 bits (3 bytes)  long.  See Table  46  for  the  single  word  SPI  read command (SDI). The slave responds with the data contents of the requested RAM addresses. See Table 47 for the single word SPI read response (SDO).

## Single Word SPI Writes

The device supplies direct write access to the device RAM memory. To write the RAM the master device must send a write command to the slave device and then clock out the

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

write data. SSB must be kept active low for the entire write transaction (command and data). SCK may be interrupted as long as SSB remains low. ADDR[5:0] is filled with the word address of the write transaction. RAM data contents are transmitted most significant byte first. ADDR[5:0] cannot exceed 0x3F. RAM words are natively 24 bits (3 bytes) long. See Table 48 for the single word SPI write command and data (SDI). The slave SDO remains high impedance during a write access (Figure 21).

## I 2 C Interface

The  MAX78615+PPM has an I 2 C  interface  available  at the SDAI, SDAO, and SCL pins. The interface supports I 2 C  slave  mode  with  a  7-bit  address  and  operates  at  a data  rate  up  to  400kHz.  Figure  22  shows  two  possible configurations.  Configuration A  is  the  standard  configuration.  The  double  pin  for  SDA  also  allows  for  isolated configuration B.

## Table 46. Single Word SPI Read Command (SDI)

|   BYTE# | BIT 7     | BIT 6     | BIT 5     | BIT 4     | BIT 3     | BIT 2     | BIT 1   | BIT 0   |
|---------|-----------|-----------|-----------|-----------|-----------|-----------|---------|---------|
|       0 | 0x01      | 0x01      | 0x01      | 0x01      | 0x01      | 0x01      | 0x01    | 0x01    |
|       1 | ADDR[5:0] | ADDR[5:0] | ADDR[5:0] | ADDR[5:0] | ADDR[5:0] | ADDR[5:0] | 0x0     | 0x0     |
|       2 | 0         | 0         | 0         | 0         | 0         | 0         | 0       | 0       |
|       3 | 0         | 0         | 0         | 0         | 0         | 0         | 0       | 0       |
|       4 | 0         | 0         | 0         | 0         | 0         | 0         | 0       | 0       |

## Table 47. Single Word SPI Read Response (SDO)

Figure 20. Single Word Read Access Timing

|   BYTE# | BIT 7                      | BIT 6                      | BIT 5                      | BIT 4                      | BIT 3                      | BIT 2                      | BIT 1                      | BIT 0                      |
|---------|----------------------------|----------------------------|----------------------------|----------------------------|----------------------------|----------------------------|----------------------------|----------------------------|
|       0 | Hi-Z (during Read Command) | Hi-Z (during Read Command) | Hi-Z (during Read Command) | Hi-Z (during Read Command) | Hi-Z (during Read Command) | Hi-Z (during Read Command) | Hi-Z (during Read Command) | Hi-Z (during Read Command) |
|       1 | Hi-Z (during Read Command) | Hi-Z (during Read Command) | Hi-Z (during Read Command) | Hi-Z (during Read Command) | Hi-Z (during Read Command) | Hi-Z (during Read Command) | Hi-Z (during Read Command) | Hi-Z (during Read Command) |
|       2 | DATA[23:16] atADDR         | DATA[23:16] atADDR         | DATA[23:16] atADDR         | DATA[23:16] atADDR         | DATA[23:16] atADDR         | DATA[23:16] atADDR         | DATA[23:16] atADDR         | DATA[23:16] atADDR         |
|       3 | DATA[15:8] atADDR          | DATA[15:8] atADDR          | DATA[15:8] atADDR          | DATA[15:8] atADDR          | DATA[15:8] atADDR          | DATA[15:8] atADDR          | DATA[15:8] atADDR          | DATA[15:8] atADDR          |
|       4 | DATA[7:0] atADDR           | DATA[7:0] atADDR           | DATA[7:0] atADDR           | DATA[7:0] atADDR           | DATA[7:0] atADDR           | DATA[7:0] atADDR           | DATA[7:0] atADDR           | DATA[7:0] atADDR           |

<!-- image -->

│

## Table 48. Single Word SPI Write Command and Data (SDI)

|   BYTE# | BIT 7             | BIT 6             | BIT 5             | BIT 4             | BIT 3             | BIT 2             | BIT 1             | BIT 0             |
|---------|-------------------|-------------------|-------------------|-------------------|-------------------|-------------------|-------------------|-------------------|
|       0 | 0x01              | 0x01              | 0x01              | 0x01              | 0x01              | 0x01              | 0x01              | 0x01              |
|       1 | ADDR[5:0]         | ADDR[5:0]         | ADDR[5:0]         | ADDR[5:0]         | ADDR[5:0]         | ADDR[5:0]         | 0x02              | 0x02              |
|       2 | DATA[23:16] @ADDR | DATA[23:16] @ADDR | DATA[23:16] @ADDR | DATA[23:16] @ADDR | DATA[23:16] @ADDR | DATA[23:16] @ADDR | DATA[23:16] @ADDR | DATA[23:16] @ADDR |
|       3 | DATA[15:8] @ADDR  | DATA[15:8] @ADDR  | DATA[15:8] @ADDR  | DATA[15:8] @ADDR  | DATA[15:8] @ADDR  | DATA[15:8] @ADDR  | DATA[15:8] @ADDR  | DATA[15:8] @ADDR  |
|       4 | DATA[7:0] @ADDR   | DATA[7:0] @ADDR   | DATA[7:0] @ADDR   | DATA[7:0] @ADDR   | DATA[7:0] @ADDR   | DATA[7:0] @ADDR   | DATA[7:0] @ADDR   | DATA[7:0] @ADDR   |

Figure 21. Single Word Write Access Timing

<!-- image -->

Figure 22. Configurations for I 2 C Interface

<!-- image -->

│

## MAX78615+PPM

## Device Address Configuration

By  default,  there  are  only  four  possible  addresses  for the MAX78615+PPM as defined by two external address pins. Bits 7 through 2 of the device address can then be defined by DEVADDR register (bits 7:2).

## Bus Characteristics

- A data transfer may be initiated only when the bus is not busy.
- During data transfer, the data line must remain stable whenever the clock line is HIGH. Changes in the data line while the clock line is HIGH will be interpreted as a START or STOP condition.

## Bus Conditions:

- Bus not Busy (I) : Both data and clock lines are HIGH indicating an Idle Condition.
- Start Data Transfer (S): A HIGH to LOW transition of the SDA line while the clock (SCL) is HIGH determines a START condition. All commands must be preceded by a START condition.
- Stop Data Transfer (P): A LOW to HIGH transition of the SDA line while the clock (SCL) is HIGH determines a STOP condition. All operations must be ended with a STOP condition.

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

- Data Valid: The state of the data line represents valid data when, after a START condition, the data line is stable for the duration of the HIGH period of the clock signal. The data on the line must be changed during the LOW period of the clock signal. There is one clock pulse per bit of data. Each data transfer is initiated with a START condition and terminated with a STOP condition.
- Acknowledge (A) : Each receiving device, when addressed, is obliged to generate an acknowledge after the reception of each byte. The master device must generate  an  extra  clock  pulse,  which  is  associated with this Acknowledge bit. The device that acknowledges has to pull down the SDA line during the acknowledge clock pulse in such a way that the SDA line is stable LOW during the HIGH period of the acknowledge-related clock pulse. Of course, setup and hold times must be taken into account. During reads, a master must signal an end of data to the slave by not  generating  an Acknowledge bit on the last byte that has been clocked out of the slave. In this case, the slave (MAX78615+PPM) will leave the data line HIGH  to  enable  the  master  to  generate  the  STOP condition.

Figure 23. I 2 C Device Address Configuration

<!-- image -->

Figure 24. I 2 C Data Transfer

<!-- image -->

│

## MAX78615+PPM

## Device Addressing

A  control  byte  is  the  first  byte  received  following  the START condition from the master device.

The control byte consists of a seven bit address and a bit (LSB) indicating the type of access (0 = write; 1 = read).

## Write Operations

Following the START (S) condition from the master, the device address (7 bits) and the R/ W bit (logic-low for write) are clocked onto the bus by the master. This indicates to the addressed slave receiver that the register address will follow after it has generated an acknowledge bit (A) during the ninth clock cycle. Therefore, the next byte transmitted by the master is the register address and will be written into the address pointer of the MAX78615+PPM. After receiving another acknowledge (A) signal from the MAX78615+PPM, the master device transmits  the  data byte(s)  to  be  written  into  the  addressed  memory  location. The data transfer ends when the master generates a stop (P) condition. This initiates the internal write cycle. Figure 26 shows a 3-byte data write (24-bit register write).

Upon receiving a STOP (P) condition, the internal register address pointer will be incremented. The write access can be  extended  to  multiple  sequential  registers.  Figure  27 shows a single transaction with multiple registers written sequentially.

Figure 25. I 2 C Device Address

<!-- image -->

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## Read Operations

Read operations are initiated  in  the  same  way  as  write operations with the exception that the R/ W bit of the control byte is set to one. There are two basic types of read operations: current address read and random read.

Current Address Read: The MAX78615+PPM contains an  address  counter  that  maintains  the  address  of  the last  register  accessed,  internally  incremented  by  one when the stop bit is received. Therefore, if the previous read access was to register address n, the next current address read operation would access data from address n + 1.

Upon receipt of the control byte with R/ W bit set to one, the  MAX78615+PPM  issues  an  acknowledge  (A)  and transmits  the  eight  bit  data  byte.  The  master  does  not acknowledge the transfer, but generates a STOP condition to end the transfer and the MAX78615+PPM discontinues the transmission.

This read operation is not limited to 3 bytes, but can be extended  until  the  register  address  pointer  reaches  its maximum value. If the register  address  pointer  has  not been set by previous operations, it is necessary to set it issuing a command as follows:

Random Read: Random read operations allow the master to access any register in a random manner. To perform this operation, the register address must be set as part of the write operation. After the address is sent, the master generates  a  start  condition  following  the  acknowledge response. This sequence completes the write operation. The master should issue the control byte again this time, with  the  R/ W bit  set  to  1  to  indicate  a  read  operation. The MAX78615+PPM issues the acknowledge response, and transmits the data. At the end of the transaction, the master does not acknowledge the transfer and generates a STOP condition.

This read operation is not limited to 3 bytes, but can be extended  until  the  register  address  pointer  reaches  its maximum value.

Figure 26. 3-Byte Data Write (24-Bit Register Write)

<!-- image -->

│

## MAX78615+PPM

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

<!-- image -->

Figure 27. Single Transaction with Multiple Registers

Figure 28. Register Read Transaction

<!-- image -->

Figure 29. Register Address Command

<!-- image -->

│

## MAX78615+PPM

## Ordering Information

| PART              | TEMP RANGE     | PIN-PACKAGE   | TOP MARK   | ISOLATED AFE   |
|-------------------|----------------|---------------|------------|----------------|
| MAX78615+PPM/A03  | -40°C to +85°C | 24 TQFN-EP*   |            | MAX78700       |
| MAX78615+PPM/A03T | -40°C to +85°C | 24 TQFN-EP*   |            | MAX78700       |
| MAX78615+PPM/C01  | -40°C to +85°C | 24 TQFN-EP*   |            | MAX71071       |
| MAX78615+PPM/C01T | -40°C to +85°C | 24 TQFN-EP*   |            | MAX71071       |

*EP = Exposed pad.

YY = Last two digits of year of assembly.

WW = Week of assembly.

RRRR = Die rev code from reliability database.

### = Last 3 numeric characters from the lot number.

@@ = First two alpha characters after the numeric characters from the lot number.

## Package Information

For the latest package outline information and land patterns (footprints), go to www.maximintegrated.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

| PACKAGE TYPE   | PACKAGE CODE   | OUTLINE NO.   | LAND PATTERN NO.   |
|----------------|----------------|---------------|--------------------|
| 24 TQFN-EP     | T2444+4        | 21-0139       | 90-0022            |

│

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems

## MAX78615+PPM

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

│

## Isolated Energy Measurement Processor for Polyphase Monitoring Systems