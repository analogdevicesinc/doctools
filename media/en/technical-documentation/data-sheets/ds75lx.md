<!-- lastmod 2022-08-03 -->
<!-- image -->

## www.maxim-ic.com

## GENERAL DESCRIPTION

This  low-voltage  (1.7V  to  3.7V)  digital  thermometer and  thermostat  provides  9,  10,  11,  or  12-bit  digital temperature readings over a -55°C to +125°C range with ± 2°C accuracy over a -25°C to +100°C range. At power-up, the DS75LX defaults to 9-bit resolution for software compatibility with the LM75. Communication with the DS75LX is achieved through a simple 2-wire serial interface. Three tri-state address pins allow up to 27 DS75LX devices to operate on the same 2-wire bus, which greatly simplifies distributed temperaturesensing applications.

The DS75LX thermostat has a dedicated open-drain output (O.S.) and  programmable  fault tolerance, which allow the user to define the number  of consecutive  error  conditions  that  must  occur  before O.S. is activated. There are two thermostatic operating  modes  that  control  thermostat  operation based on user-defined trip-points (TOS and THYST).

## APPLICATIONS

Any Thermally Sensitive System

Cellular Base Stations Telecom Switches and Routers

Servers

## PIN CONFIGURATIONS

<!-- image -->

## DS75LX

Digital Thermometer and Thermostat with Extended Addressing

## FEATURES

-  1.7V to 3.7V Operating Range
-  Tri-State Address Pins Allow Up to 27 Unique Bus Addresses
-  Temperature Measurements Require No External Components
-  Measures Temperatures from -55°C to +125°C (-67°F to +257°F)
-  ± 2°C Accuracy from -25°C to +100°C
-  Thermometer Resolution Is UserConfigurable from 9 (Default) to 12 Bits (0.5°C to 0.0625°C Resolution)
-  9-Bit Conversion Time is 25ms (max)
-  Thermostatic Settings are User-Definable
-  Data is Read/Written Through 2-Wire Serial Interface (SDA and SCL Pins)
-  Data Lines Filtered Internally for Noise Immunity (50ns Deglitch)
-  Bus Timeout Feature Prevents Lockup Problems on 2-Wire Interface
-  Multidrop Capability Simplifies Distributed Temperature-Sensing Applications
-  Pin/Software Compatible with the LM75
-  Available in 8-Pin μ SOP ( μ MAX ® ) and SO Packages

## ORDERING INFORMATION

| PART        | TEMP RANGE      | PIN PACKAGE                 |
|-------------|-----------------|-----------------------------|
| DS75LXS+    | -55°C to +125°C | 8 SO (150 mils)             |
| DS75LXS+T&R | -55°C to +125°C | 8 SO (150 mils), 2500 Piece |
| DS75LXU+    | -55°C to +125°C | 8 µSOP (µMAX)               |
| DS75LXU+T&R | -55°C to +125°C | 8 µSOP (µMAX), 3000 Piece   |

T&amp;R denotes tape-and-reel.

Note: A '+' symbol will also be marked on the package near the pin 1 indicator.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## ABSOLUTE MAXIMUM RATINGS

Voltage Range on VDD, Relative to Ground Voltage Range on Any Other Pin, Relative to Ground Operating Temperature Range Storage Temperature Range Soldering Temperature

-0.3V to +4.0V -0.3V to +6.0V -55°C to +125°C -55°C to +125°C See IPC/JEDEC J-STD-020

These are stress ratings only and functional operation of the device at these or any other conditions above those indicated in the operation sections of this specification is not implied. Exposure to absolute maximum rating conditions for extended periods of time may affect reliability.

The  Dallas  Semiconductor  DS75LX  is  built  to  the  highest  quality  standards  and  manufactured  for  long-term reliability.  All  Dallas  Semiconductor  devices  are  made  using  the  same  quality  materials  and  manufacturing methods. However, the DS75LX is not exposed to environmental stresses, such as burn-in, that some industrial applications require. For specific reliability information on this product, contact the factory in Dallas at (972) 3714448.

## DC ELECTRICAL CHARACTERISTICS

(1.7V ≤ VDD ≤ 3.7V, TA = -55°C to +125°C.)

| PARAMETER                             | SYMBOL   | CONDITIONS                              | MIN        | MAX        | UNITS   |
|---------------------------------------|----------|-----------------------------------------|------------|------------|---------|
| Supply Voltage                        | V DD     | (Note 1)                                | 1.7        | 3.7        | V       |
| Thermometer Error (Note 2)            | T ERR    | -25°C to +100°C                         |            | ± 2.0      | °C      |
| Thermometer Error (Note 2)            | T ERR    | -55°C to +125°C                         |            | ± 3.0      | °C      |
| Input Logic-High SDA, SCL             | V IH     | (Note 3)                                | 0.7 x V DD | V DD + 0.3 | V       |
| Input Logic-Low SDA, SCL              | V IL     |                                         | V SS - 0.3 | 0.3 x V DD | V       |
| SDA Output Logic-Low Voltage (Note 3) | V OL1    | 3mA sink current                        | 0          | 0.4        | V       |
| SDA Output Logic-Low Voltage (Note 3) | V OL2    | 6mA sink current                        | 0          | 0.6        | V       |
| O.S. Saturation Voltage               | V OL     | 4mA sink current (Notes 2, 3)           |            | 0.8        | V       |
| Input Current SDA, SCL                |          | 0.4 < V I/O < 0.9V DD                   | -10        | +10        | µA      |
| I/O Capacitance                       | C I/O    |                                         |            | 10         | pF      |
| Address Input Sink Current            | I LAH    | A0, A1, or A2 tied to V DD (Notes 4, 5) | 0.2        | 3.5        | µA      |
| Address Input Source Current          | I LAL    | A0, A1, or A2 tied to GND (Notes 4, 5)  | 0.2        | 3.5        | µA      |
| Address Voltage High                  | V AH     | (Note 6)                                | V DD - .04 |            | V       |
| Address Voltage Low                   | V AL     | (Note 6)                                |            | V SS + .04 | V       |
| Standby Current                       | I DD1    | (Notes 4, 5)                            |            | 13         | µA      |
| Active Current                        | I DD     | Active temp conversions                 |            | 1000       | µA      |
| (Notes 1, 4, 5)                       | I DD     | Communication only                      |            | 100        | µA      |

## AC ELECTRICAL CHARACTERISTICS

(1.7V ≤ VDD ≤ 3.7V, TA = -55°C to +125°C.)

| PARAMETER                   | SYMBOL   | CONDITIONS         |   MIN | TYP   |   MAX | UNITS   |
|-----------------------------|----------|--------------------|-------|-------|-------|---------|
| Resolution                  | t CONVT  |                    |     9 |       |    12 | Bits    |
| Temperature Conversion Time |          | 9-bit conversions  |       |       |    25 | ms      |
| Temperature Conversion Time |          | 10-bit conversions |       |       |    50 | ms      |
| Temperature Conversion Time |          | 11-bit conversions |       |       |   100 | ms      |
| Temperature Conversion Time |          | 12-bit conversions |       |       |   200 | ms      |

| SCL Frequency   | f SCL   | 400   | kHz   |
|-----------------|---------|-------|-------|

## AC ELECTRICAL CHARACTERISTICS (continued)

(1.7V ≤ VDD ≤ 3.7V, TA = -55°C to +125°C.)

| PARAMETER                                           | SYMBOL    | CONDITIONS                  | MIN           |   TYP |   MAX | UNITS   |
|-----------------------------------------------------|-----------|-----------------------------|---------------|-------|-------|---------|
| Bus Free Time Between a STOP and START Condition    | t BUF     | (Note 7)                    | 1.3           |       |       | µs      |
| START and Repeated START Hold Time from Falling SCL | t HD:STA  | (Notes 7, 8)                | 600           |       |       | ns      |
| Low Period of SCL                                   | t LOW     | (Note 7)                    | 1.3           |       |       | µs      |
| High Period of SCL                                  | t HIGH    | (Note 7)                    | 0.6           |       |       | µs      |
| Repeated START Condition Setup Time to Rising SCL   | t SU:STA  | (Note 7)                    | 600           |       |       | ns      |
| Data-Out Hold Time from Falling SCL                 | t HD:DAT  | (Notes 7, 9)                | 0             |       |   0.9 | µs      |
| Data-In Setup Time to Rising SCL                    | t SU:DAT  | (Note 7)                    | 100           |       |       | ns      |
| Rise Time of SDA and SCL (Receive)                  | t R       | (Notes 7, 10)               | 20 + 0.1C B B |       |   300 | ns      |
| Fall Time of SDA and SCL (Receive)                  | t F       | (Notes 7, 10)               | 20 + 0.1C B B |       |   300 | ns      |
| Spike Suppression Filter Time (Deglitch Filter)     | t SS      |                             | 0             |       |    50 | ns      |
| STOP Setup Time to Rising SCL                       | t SU:STO  | (Note 7)                    | 600           |       |       | ns      |
| Capacitive Load for Each Bus Line                   | C B B     |                             | 400           |   400 |   400 | pF      |
| Input Capacitance                                   | C I       |                             | 5             |     5 |     5 | pF      |
| Serial Interface Reset Time                         | t TIMEOUT | SDA time low (Notes 11, 12) | 75            |       |   325 | ms      |

Note 1: VDD must be decoupled with a high-quality 0.1µF bypass capacitor. X5R or X7R ceramic surface-mount capacitors are recommended.

Note 2: Internal heating caused by O.S. loading causes the DS75LX to read approximately 0.5 ° C higher if O.S. is sinking the max rated current.

Note 3: All voltages are referenced to ground.

Note 4: IDD specified with O.S. pin open and A0-A2 pins grounded.

Note 5: IDD and address leakage specified with VDD at 3.0V and SDA, SCL = 3.0V at 0 ° C to +70 ° C.

- Note 6: Address pins A0, A1, A2 are directly connected to VDD, VSS, or floating with less than 50pF capacitive load.

Note 7: See the timing diagram (Figure 1). All timing is referenced to 0.9 x VDD and 0.1 x VDD.

Note 8: After this period, the first clock pulse is generated.

Note 9: The DS75LX provides an internal hold time of at least 75ns on the SDA signal to bridge the undefined region of SCL's falling edge.

Note 10: For example, if CB = 300pF, then tR[min] = tF[min] = 50ns.

Note 11: This timeout applies only when the DS75LX is holding SDA low. Other devices can hold SDA low indefinitely and the DS75LX will not reset.

Note 12: The DS75LX is available with timeout feature disabled upon special order. Contact Factory.

## PIN DESCRIPTION

|   PIN | NAME   | FUNCTION                                                                                                                                      |
|-------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | SDA    | Data Input/Output for 2-Wire Serial Communication Port (Open Drain)                                                                           |
|     2 | SCL    | Clock Input for 2-Wire Serial Communication Port                                                                                              |
|     3 | O.S.   | Thermostat Output Open Drain                                                                                                                  |
|     4 | GND    | Ground                                                                                                                                        |
|     5 | A 2    | Address Input                                                                                                                                 |
|     6 | A 1    | Address Input                                                                                                                                 |
|     7 | A 0    | Address Input                                                                                                                                 |
|     8 | V DD   | Supply Voltage. +1.7V to +3.7V supply pin. V DD must have an external bypass capacitor to GND. 0.1µF X5R or X7R ceramic SMT caps recommended. |

## BLOCK DIAGRAM

<!-- image -->

Figure 1. Timing Diagram

<!-- image -->

## OPERATION-MEASURING TEMPERATURE

The DS75LX measures temperature using a bandgap temperature-sensing architecture. An on-board delta-sigma analog-to-digital converter (ADC) converts the measured temperature to a digital value that is calibrated in degrees celsius;  for  Fahrenheit  applications  a  lookup  table  or  conversion  routine  must  be  used.  The  DS75LX  is  factorycalibrated and requires no external components to measure temperature.

At power-up the DS75LX immediately begins measuring and converting its own temperature to a digital value. The resolution  of  the  digital  output  data  is  user-configurable  to  9,  10,  11,  or  12  bits,  corresponding  to  temperature increments of 0.5 ° C, 0.25 ° C, 0.125 ° C, and 0.0625 ° C, respectively, with 9-bit default resolution at power-up. The resolution  is  controlled  via  the  R0  and  R1  bits  in  the  configuration  register  as  explained  in  the Configuration Register section of this data sheet. Note that the conversion time doubles for each additional bit of resolution.

After each temperature measurement and analog-to-digital conversion, the DS75LX stores the temperature as a 16-bit two's complement number in the 2-byte temperature register (see Figure 2). The sign bit (S) indicates if the temperature is positive or negative: for positive numbers S = 0 and for negative numbers S = 1. The most recently converted  digital  measurement  can  be  read  from  the  temperature  register  at  any  time.  Since  temperature conversions are performed in the background, reading the temperature register does not affect the operation in progress.

Bits  3  through  0  of  the  temperature  register  are  hardwired  to  0.  When  the  DS75LX  is  configured  for  12-bit resolution,  the  12  MSbs  (bits  15  through  4)  of  the  temperature  register  contain  temperature  data.  For  11-bit resolution,  the  11  MSbs  (bits  15  through  5)  of  the  temperature  register  contain  data,  and  bit  4  reads  out  as  0. Likewise,  for  10-bit  resolution,  the  10  MSbs  (bits  15  through  6)  contain  data,  and  for  9-bit  the  9  MSbs  (bits  15 through 7) contain data, and all unused LSbs will contain 0s. Table 1 gives examples of 12-bit resolution digital output data and the corresponding temperatures.

## Figure 2. Temperature, TH, and TL Register Format

|         | bit 15   | bit 14   | bit 13   | bit 12   | bit 11   | bit 10   | bit 9   | bit 8   |
|---------|----------|----------|----------|----------|----------|----------|---------|---------|
| MS Byte | S        | 2 6      | 2 5      | 2 4      | 2 3      | 2 2      | 2 1     | 2 0     |
|         | bit 7    | bit 6    | bit 5    | bit 4    | bit 3    | bit 2    | bit 1   | bit 0   |
| LS Byte | 2 -1     | 2 -2     | 2 -3     | 2 -4     | 0        | 0        | 0       | 0       |

Table 1. 12-Bit Resolution Temperature/Data Relationship

|   TEMPERATURE ( ° C) | DIGITAL OUTPUT (BINARY)   | DIGITAL OUTPUT (HEX)   |
|----------------------|---------------------------|------------------------|
|                 +125 | 0111 1101 0000 0000       | 7D00h                  |
|             +25.0625 | 0001 1001 0001 0000       | 1910h                  |
|              +10.125 | 0000 1010 0010 0000       | 0A20h                  |
|                 +0.5 | 0000 0000 1000 0000       | 0080h                  |
|                    0 | 0000 0000 0000 0000       | 0000h                  |
|                 -0.5 | 1111 1111 1000 0000       | FF80h                  |
|              -10.125 | 1111 0101 1110 0000       | F5E0h                  |
|             -25.0625 | 1110 0110 1111 0000       | E6F0h                  |
|                  -55 | 1100 1001 0000 0000       | C900h                  |

## Shutdown Mode

For power-sensitive applications, the DS75LX offers a low-power shutdown mode. The SD bit in the configuration register controls shutdown mode. When SD is changed to 1, the conversion in progress is completed and the result is stored in the temperature register after which the DS75LX goes into a low-power standby state. The O.S. output is cleared if the thermostat is operating in interrupt mode, and O.S remains unchanged in comparator mode. The 2wire interface remains operational in shutdown mode, and writing a 0 to the SD bit returns the DS75LX to normal operation.

## OPERATION-THERMOSTAT

The  DS75LX  thermostat  has  two  operating  modes,  comparator  mode  and  interrupt  mode,  which  activate  and deactivate the open-drain thermostat output (O.S.) based on user-programmable trip-points (TOS and THYST). The DS75LX  powers  up  with  the  thermostat  in  comparator  mode  with  active-low  O.S.  polarity  and  with  the overtemperature trip-point (TOS) register set to +80°C and the hysteresis trip-point (THYST) register set to +75°C. If these power-up settings are compatible with the application, the DS75LX can be used as a stand-alone thermostat (i.e., no 2-wire communication required). If interrupt mode operation, active-high O.S. polarity, or different TOS and THYST values are desired, they must be programmed after power-up, so stand-alone operation is not possible.

In both operating modes, the user can program the thermostat fault tolerance, which sets how many consecutive temperature  readings  (1,  2,  4,  or  6)  must  fall  outside  of  the  thermostat  limits  before  the  thermostat  output  is triggered. The fault tolerance is set by the F1 and F0 bits in the configuration register and at power-up the fault tolerance is 1.

The data format of the TOS and THYST registers is identical to that of the temperature register (see Figure 2), i.e., a 2-byte  two's  complement  representation  of  the  trip-point  temperature  in  degrees  celcius  with  bits  3  through  0 hardwired to 0. After every temperature conversion, the measured temperature is compared to the values in the TOS and THYST registers, and then O.S. is updated based on the result of the comparison and the operating mode. The number of TOS and THYST bits used during the thermostat comparison is equal to the conversion resolution set by the R1 and R0 bits in the configuration register. For example, if the resolution is 9 bits, only the 9 MSbs of TOS and THYST will be used by the thermostat comparator.

The active state of the O.S. output can be changed by the POL bit in the configuration register. The power-up default is active low.

If the user does not wish to use the thermostat capabilities of the DS75LX, the O.S. output should be left floating. Note that if the thermostat is not used, the TOS and THYST registers can be used for general storage of system data.

## Comparator Mode

When the thermostat is in comparator mode, O.S. can be programmed to operate with any amount of hysteresis. The O.S. output becomes active when the measured temperature exceeds the TOS value a consecutive number of times as defined by the F1 and F0 fault tolerance (FT) bits in the configuration register. O.S. then stays active until the first time the temperature falls below the value stored in THYST. Putting the device into shutdown mode does not clear O.S. in comparator mode. Thermostat comparator mode operation with FT = 2 is illustrated in Figure 3.

## Interrupt Mode

In interrupt mode, the O.S. output first becomes active when the measured temperature exceeds the TOS value a consecutive number of times equal to the FT value in the configuration register. Once activated, O.S. can only be cleared  by  either  putting  the  DS75LX  into  shutdown  mode  or  by  reading  from  any  register  (temperature, configuration, TOS, or THYST ) on the device. Once O.S. has been deactivated, it will only be reactivated when the measured temperature falls below the THYST value a consecutive number of times equal to the FT value. Again, O.S can only be cleared by putting the device into shutdown mode or reading any register. Thus, this interrupt/clear process  is  cyclical  between  TOS and  THYST  events  (i.e,  T OS,  clear,  T HYST,  clear,  T OS,  clear,  T HYST,  clear,  etc.). Thermostat interrupt mode operation with FT = 2 is illustrated in Figure 3.

## Figure 3. O.S. Output Operation Example

<!-- image -->

## Configuration Register

The  configuration  register  allows  the  user  to  program  various  DS75LX  options  such  as  conversion  resolution, thermostat fault tolerance, thermostat polarity, thermostat operating mode, and shutdown mode. The configuration register is arranged as shown in Figure 4 and detailed descriptions of each bit are provided in Table 2. The user has read/write access to all bits in the configuration register except the MSb, which is a reserved read-only bit. The entire register is volatile, and thus powers up in its default state.

## Figure 4. Configuration Register

<!-- image -->

|   MSb | bit 6   | bit 5   | bit 4   | bit 3   | bit 2   | bit 1   | LSb   |
|-------|---------|---------|---------|---------|---------|---------|-------|
|     0 | R1      | R0      | F1      | F0      | POL     | TM      | SD    |

Table 2. Configuration Register Bit Descriptions

| BIT NAME                              | DESCRIPTION                                                                                                                                                          |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0 Reserved                            | Power-Up State = 0 The master can write to this bit, but it always reads out as a 0.                                                                                 |
| R1 Conversion Resolution Bit 1        | Power-Up State = 0 Sets conversion resolution (see Table 3).                                                                                                         |
| R0 Conversion Resolution Bit 0        | Power-Up State = 0 Sets conversion resolution (see Table 3).                                                                                                         |
| F1 Thermostat Fault Tolerance Bit 1   | Power-Up State = 0 Sets the thermostat fault tolerance (see Table 4).                                                                                                |
| F0 Thermostat Fault Tolerance Bit 0   | Power-Up State = 0 Sets the thermostat fault tolerance (see Table 4).                                                                                                |
| POL Thermostat Output (O.S.) Polarity | Power-Up State = 0 POL = 0 -O.S. is active low. POL = 1 -O.S. is active high.                                                                                        |
| TM Thermostat Operating Mode          | Power-Up State = 0 TM = 0 -Comparator mode. TM = 1 -Interrupt mode. See the Operation-Thermostat section for a detailed description of these modes.                  |
| SD Shutdown                           | Power-Up State = 0 SD = 0 -Active conversion and thermostat operation. SD = 1 -Shutdown mode. See the Shutdown Mode section for a detailed description of this mode. |

Table 3. Resolution Configuration

|   R1 |   R0 |   THERMOMETER RESOLUTION (BITS) |   MAX CONVERSION TIME (ms) |
|------|------|---------------------------------|----------------------------|
|    0 |    0 |                               9 |                         25 |
|    0 |    1 |                              10 |                         50 |
|    1 |    0 |                              11 |                        100 |
|    1 |    1 |                              12 |                        200 |

## Table 4. Fault Tolerance Configuration

|   F1 |   F0 |   CONSECUTIVE OUT-OF-LIMITS CONVERSIONS TO TRIGGER O.S. |
|------|------|---------------------------------------------------------|
|    0 |    0 |                                                       1 |
|    0 |    1 |                                                       2 |
|    1 |    0 |                                                       4 |
|    1 |    1 |                                                       6 |

## REGISTER POINTER

The four  DS75LX registers each have a unique two-bit pointer designation,  which  is  defined  in  Table  5.  When reading from or writing to the DS75LX, the user must 'point' the DS75LX to the register that is to be accessed. When reading from the DS75LX, once the pointer is set it remains pointed at the same register until it is changed. For example, if the user wants to perform consecutive reads from the temperature register, the pointer only has to be set to the temperature register one time, after which all reads will automatically be from the temperature register until  the  pointer  value  is  changed.  On  the  other  hand,  when  writing  to  the  DS75LX,  the  pointer  value  must  be refreshed each time a write is performed, even if the same register is being written to twice in a row.

At  power-up,  the  default  pointer  value  is  the  temperature  register  so  the  temperature  register  can  be  read immediately without resetting the pointer.

Changes to the pointer setting are accomplished as described in the 2-Wire Serial Data Bus.

## Table 5. Pointer Definition

| REGISTER      |   P1 |   P0 |
|---------------|------|------|
| Temperature   |    0 |    0 |
| Configuration |    0 |    1 |
| T HYST        |    1 |    0 |
| T OS          |    1 |    1 |

## 2-WIRE SERIAL DATA BUS

The DS75LX communicates over a standard bidirectional, 2-wire  serial  data  bus  that  consists  of  a  serial  clock (SCL) signal and serial data (SDA) signal. The DS75LX interfaces to the bus through the SCL input pin and opendrain SDA I/O pin. All communication is MSb first.

The following terminology is used to describe 2-wire communication:

Master  Device: Microprocessor/microcontroller  that  controls  the  slave  devices  on  the  bus.  The  master  device generates the SCL signal and START and STOP conditions.

Slave: All devices on the bus other than the master. The DS75LX always functions as a slave.

Bus Idle or Not Busy: Both SDA and SCL remain high. SDA is held high by a pullup resistor when the bus is idle, and SCL must either be forced high by the master (if the SCL output is push-pull) or pulled high by a pullup resistor (if the SCL output is open drain).

Transmitter: A device (master or slave) that is sending data on the bus.

Receiver: A device (master or slave) that is receiving data from the bus.

START Condition: Signal generated by the master to indicate the beginning of a data transfer on the bus. The master  generates  a  START  condition  by  pulling  SDA  from  high  to  low  while  SCL  is  high  (see  Figure  5).  A 'repeated' START is sometimes used at the end of a data transfer (instead of a STOP) to indicate that the master will perform another operation.

STOP Condition: Signal generated by the master to indicate the end of a data transfer on the bus. The master generates a STOP condition by transitioning SDA from low to high while SCL is high (see Figure 5). After the STOP is issued, the master releases the bus to its idle state.

Acknowledge  (ACK): When  a  device  (either  master  or  slave)  is  acting  as  a  receiver,  it  must  generate  an acknowledge (ACK) on the SDA line after receiving every byte of data. The receiving device performs an ACK by pulling  the  SDA  line  low  for  an  entire  SCL  period  (see  Figure  5).  During  the  ACK  clock  cycle,  the  transmitting device must release SDA. A variation on the ACK signal is the 'not acknowledge' (NACK). When the master device is  acting  as  a  receiver,  it  uses  a  NACK  instead  of  an  ACK  after  the  last  data  byte  to  indicate  that  it  is  finished receiving data. The master indicates a NACK by leaving the SDA line high during the ACK clock cycle.

Slave Address: Every slave device on the bus has a unique 7-bit address that allows the master to access that device. The DS75LX's 7-bit bus address depends on the state of the external address pins A0-A2. See Table 6. The three address pins allow up to 27 DS75LXs to be multidropped on the same bus. When tying an address line high or low, connect the address line directly to VDD or GND. Do not use series resistors on these pins.

Address  Byte: The  address  byte  is  transmitted  by  the  master  and  consists  of  the  7-bit  slave  address  plus  a read/write (R/W ¯¯) bit (see Figure 6). If the master is going to read data from the slave device then R/W ¯¯ = 1, and if the master is going to write data to the slave device then R/W ¯¯ = 0.

Pointer Byte: The pointer byte is used by the master to tell the DS75LX which register is going to be accessed during communication. The six MSbs of the pointer byte (see Figure 7) are always 0 and the two LSbs correspond to the desired register as shown in Table 6.

## Figure 5. Start, Stop, and ACK Signals

<!-- image -->

## Figure 6. Address Byte

<!-- image -->

The Address Pins A0-A2 are tri-state inputs. These can be low, high, or floating in any combination, resulting in 27 address possibilities. These map into the address byte according to Table 6.

## Figure 7. Pointer Byte

<!-- image -->

|   BIT 7 |   BIT 6 |   BIT 5 |   BIT 4 |   BIT 3 |   BIT 2 | BIT 1   | BIT 0   |
|---------|---------|---------|---------|---------|---------|---------|---------|
|       0 |       0 |       0 |       0 |       0 |       0 | P1      | P0      |

## GENERAL 2-WIRE INFORMATION

-  All data is transmitted MSb first over the 2-wire bus.
-  One bit of data is transmitted on the 2-wire bus each SCL period.
-  A pullup resistor is required on the SDA line and, when the bus is idle, both SDA and SCL must remain in a logic-high state.
-  All bus communication must be initiated with a START condition and terminated with a STOP condition. During a  START or STOP is the only time SDA is allowed to change states while SCL is high. At all other times, changes on the SDA line can only occur when SCL is low: SDA must remain stable when SCL is high.
-  After every 8-bit (1-byte) transfer, the receiving device must answer with an ACK (or NACK), which takes one SCL period. Therefore, nine clocks are required for every 1-byte data transfer.

## Table 6. Address Configuration

| A2    | A1    | A0    |   ADDRESS |
|-------|-------|-------|-----------|
| 0     | 0     | 0     |   1001000 |
| 0     | 0     | 1     |   1001001 |
| 0     | 1     | 0     |   1001010 |
| 0     | 1     | 1     |   1001011 |
| 0     | 0     | FLOAT |   0101100 |
| 0     | FLOAT | 0     |   0101000 |
| 0     | 1     | FLOAT |   0101101 |
| 0     | FLOAT | 1     |   0101001 |
| 0     | FLOAT | FLOAT |   0110101 |
| 1     | 0     | 0     |   1001100 |
| 1     | 0     | 1     |   1001101 |
| 1     | 1     | 0     |   1001110 |
| 1     | 1     | 1     |   1001111 |
| 1     | 0     | FLOAT |   0101110 |
| 1     | FLOAT | 0     |   0101010 |
| 1     | 1     | FLOAT |   0101111 |
| 1     | FLOAT | 1     |   0101011 |
| 1     | FLOAT | FLOAT |   0110110 |
| FLOAT | 0     | 0     |   1110000 |
| FLOAT | 0     | 1     |   1110010 |
| FLOAT | 1     | 0     |   1110011 |
| FLOAT | 1     | 1     |   1110101 |
| FLOAT | 0     | FLOAT |   1110001 |
| FLOAT | FLOAT | 0     |   1110110 |
| FLOAT | 1     | FLOAT |   1110100 |
| FLOAT | FLOAT | 1     |   1110111 |
| FLOAT | FLOAT | FLOAT |   0110111 |

## Writing to the DS75LX

To write to the DS75LX, the master must generate a START followed by an address byte containing the DS75LX bus address. The value of the R/W ¯¯ bit must be a 0, which indicates that a write is about to take place. The DS75LX responds with an ACK after receiving the address byte. This must be followed by a pointer byte from the master, which tells the DS75LX which register is being written to. The DS75LX again responds with an ACK after receiving the pointer byte. Following this ACK the master device must immediately begin transmitting data to the DS75LX. When writing to the configuration register, the master must send one byte of data (see Figure 8a), and when writing to the TOS or THYST registers the master must send two bytes of data (see Figure 8b). After receiving each data byte, the DS75LX responds with an ACK, and the transaction is finished with a STOP from the master.

## Software POR

The soft POR command is hex 54. Issue a write command to the DS75LX. It responds with an ACK. If the next byte  is  a  0x54,  the  DS75LX  will  reset  as  if  power  had  been  cycled.  No  ACK  is  sent  by  the  IC  after  the  POR command is received.

## Reading from the DS75LX

When  reading  from  the  DS75LX,  if  the  pointer  was  already  pointed  to  the  desired  register  during  a  previous transaction, the read can be performed immediately without changing the pointer setting. In this case the master sends a START followed by an address byte containing the DS75LX bus address. The R/W ¯¯ bit must be a 1, which tells the DS75LX that a read is being performed. After the DS75LX sends an ACK in response to the address byte, the DS75LX begins transmitting the requested data on the next clock cycle. When reading from the configuration register, the DS75LX transmits one byte of data, after which the master must respond with a NACK followed by a STOP (see Figure 8c). For 2-byte reads (i.e., from the temperature, TOS, or THYST register), the DS75LX transmits two bytes of data, and the master must respond to the first data byte with an ACK and to the second byte with a NACK followed by a STOP (see Figure 8d). If only the most significant byte of data is needed, the master can issue a NACK followed by a STOP after reading the first data byte, in which case the transaction will be the same as for a read from the configuration register.

If the pointer is not already pointing to the desired register, the pointer must first be updated as shown in Figure 8e, which shows a pointer update followed by a single-byte read. The value of the R/W ¯¯ bit in the initial address byte is a 0 ('write') since the master is going to write a pointer byte to the DS75LX. After the DS75LX responds to the address byte with an ACK, the master sends a pointer byte that corresponds to the desired register. The master must  then  perform  a  repeated  START  followed  by  a  standard  1-  or  2-byte  read  sequence  (with  R/W ¯¯  =  1)  as described in the previous paragraph.

## PACKAGE INFORMATION

(The package drawing(s) in this data sheet may not reflect the most current specifications. For the latest package outline information, go to www.maxim-ic.com/DallasPackInfo .)

| PACKAGE         | DOCUMENT NO.   |
|-----------------|----------------|
| 8-Pin SO        | 56-G2008-001   |
| 8-Pin µSOP/µMAX | 21-0036        |

Figure 8. 2-Wire Interface Timing

<!-- image -->