<!-- lastmod 2022-08-03 -->
## DS75LV

## General Description

The DS75LV low-voltage (1.7V to 3.7V) digital thermometer and thermostat provides 9, 10, 11, or 12-bit digital temperature readings over a -55°C to +125°C range with ±2°C accuracy over  a  -25°C  to  +100°C  range.  At  power-up,  the  DS75LV defaults to 9-bit resolution for software compatibility with the LM75. Communication with the DS75LV is achieved through a simple 2-wire serial interface.

The DS75LV thermostat has a dedicated open-drain output (OS)  and  programmable  fault  tolerance,  which  allows  the user to define the number of consecutive error conditions that must occur before OS is activated. There are two thermostatic operating modes that control thermostat operation based on user-defined trip-points (T OS  and T HYST ).

## Applications

- Personal Computers
- Cellular Base Stations
- Office Equipment
- Any Thermally Sensitive System

Ordering Information appears at end of data sheet.

## Functional Block Diagram

<!-- image -->

<!-- image -->

## Digital Thermometer and Thermostat

## Benefits and Features

- Extend Performance Range with Low-Voltage, 1.7V to 3.7V Operating Range
- Maximize System Accuracy in Broad Range of Thermal Management Applications
- Measures Temperature from -55°C to +125°C (-67°F to +257°F)
- ±2°C Accuracy over a -25°C to 100°C Range
- User-Configurable Resolution from 9 Bits (Default) to 12 Bits (0.5°C to 0.0625°C)
- Easy Upgrade to LM75: Pin and Software Compatible
- Simplify Distributed Temperature-Sensing Applications with Multidrop Capability
- Up to Eight DS75LVs Can Operate on 2-Wire Bus
- Increase Reliability and System Robustness
- Internally Filtered Data Lines for Noise Immunity (50ns Deglitch)
- Bus Timeout Feature Prevents Lockup on 2-Wire Interface
- Minimize Power Consumption with Built-In Shutdown Mode
- Flexible User-Defined Thermostatic Modes with Programmable Fault Tolerance

## Absolute Maximum Ratings

Voltage on V DD , Relative to Ground

....................-0.3V to +4.0V

Voltage on Any Other Pin, Relative to Ground ....-0.3V to +6.0V

Operating Temperature Range

......................... -55°C to +125°C

Storage Temperature Range

............................ -55°C to +125°C

Lead Temperature (soldering, 10s) .................................+260°C

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## DC Electrical Characteristics

(1.7V ≤ V DD ≤ 3.7V, T A  = -55°C to +125°C, unless otherwise noted.)

| PARAMETER                            | SYMBOL   | CONDITIONS                   | MIN        | TYP   | MAX        | UNITS   |
|--------------------------------------|----------|------------------------------|------------|-------|------------|---------|
| Supply Voltage                       | V DD     |                              | 1.7        |       | 3.7        | V       |
| Thermometer Error (Note              | T ERR    | 0 to +50                     |            | ±0.5  |            | °C      |
| 1)                                   | T ERR    | -25 to +100                  |            |       | ±2.0       | °C      |
| Thermometer Error (Note              | T ERR    | -55 to +125                  |            |       | ±3.0       | °C      |
| Input Logic-High                     | V IH     | (Note 2)                     | 0.7 x V DD |       | 5.5        | V       |
| Input Logic-Low                      | V IL     | (Note 2)                     | -0.5       |       | 0.3 x V DD | V       |
| SDAOutput Logic Low Voltage (Note 2) | V OL1    | 3mAsink current              | 0          |       | 0.4        | V       |
| SDAOutput Logic Low Voltage (Note 2) | V OL2    | 6mAsink current              | 0          |       | 0.6        | V       |
| OS Saturation Voltage                | V OL     | 4mAsink current (Notes 1, 2) |            |       | 0.8        | V       |
| Input Current Each I/O Pin           |          | 0.4 < V I/O < 0.9 x V DD     | -10        |       | +10        | µA      |
| I/O Capacitance                      | C I/O    |                              |            |       | 10         | pF      |
| Standby Current                      | I DD1    | (Notes 3, 4)                 |            |       | 2          | µA      |
| Active Current (Notes 3, 4)          | I DD     | Active temp conversions      |            |       | 1000       | µA      |
| Active Current (Notes 3, 4)          | I DD     | Communication only           |            |       | 100        | µA      |

## AC Electrical Characteristics

(1.7V ≤ V DD ≤ 3.7V, T A  = -55°C to +125°C, unless otherwise noted.)

| PARAMETER                                           | SYMBOL   | CONDITIONS         |   MIN | TYP   |   MAX | UNITS   |
|-----------------------------------------------------|----------|--------------------|-------|-------|-------|---------|
| Resolution                                          |          |                    |     9 |       |    12 | Bits    |
| Temperature Conversion Time                         | t CONVT  | 9-bit conversions  |       |       |    25 | ms      |
| Temperature Conversion Time                         | t CONVT  | 10-bit conversions |       |       |    50 | ms      |
| Temperature Conversion Time                         | t CONVT  | 11-bit conversions |       |       |   100 | ms      |
| Temperature Conversion Time                         | t CONVT  | 12-bit conversions |       |       |   200 | ms      |
| SCL Frequency                                       | f SCL    |                    |       |       |   400 | kHz     |
| Bus Free Time Between a STOP and START Condition    | t BUF    | (Note 5)           |   1.3 |       |       | µs      |
| START and Repeated START Hold Time from Falling SCL | t HD:STA | (Notes 5, 6)       |   600 |       |       | ns      |

## Digital Thermometer and Thermostat

## AC Electrical Characteristics (continued)

(1.7V ≤ V DD ≤ 3.7V, T A  = -55°C to +125°C, unless otherwise noted.)

| PARAMETER                                         | SYMBOL    | CONDITIONS           |   MIN |   TYP |   MAX | UNITS   |
|---------------------------------------------------|-----------|----------------------|-------|-------|-------|---------|
| Low Period of SCL                                 | t LOW     | (Note 5)             |   1.3 |       |       | µs      |
| High Period of SCL                                | t HIGH    | (Note 5)             |   0.6 |       |       | µs      |
| Repeated START Condition Setup Time to Rising SCL | t SU:STA  | (Note 5)             |   600 |       |       | ns      |
| Data-Out Hold Time from Falling SCL               | t HD:DAT  | (Notes 5, 7)         |     0 |       |   0.9 | µs      |
| Data-In Setup Time to Rising SCL                  | t SU:DAT  | (Note 5)             |   100 |       |       | ns      |
| Rise Time of SDAand SCL (Receive)                 | t R       | (Note 5)             |       |       |  1000 | ns      |
| Fall Time of SDAand SCL (Receive)                 | t F       | (Note 5)             |       |       |   300 | ns      |
| Spike Suppression Filter Time (Deglitch Filter)   | t SS      |                      |     0 |       |    50 | ns      |
| STOP Setup Time to Rising SCL                     | t SU:STO  | (Note 5)             |   600 |       |       | ns      |
| Capacitive Load for Each Bus Line                 | C B       |                      |       |       |   400 | pF      |
| Input Capacitance                                 | C I       |                      |       |     5 |       | pF      |
| Serial Interface Reset Time                       | t TIMEOUT | SDAtime low (Note 8) |    75 |       |   325 | ms      |

Note 1: Internal heating caused by OS loading causes the DS75LV to read approximately 0.5°C higher if OS is sinking the max rated current.

Note 2: All voltages are referenced to ground.

Note 3: I DD specified with V DD  at 3.0V and SDA, SCL = 3.0V, 0°C to +70°C.

Note 4: I DD specified with OS pin open.

Note 5: See Figure 2 for timing diagram. All timing is referenced to 0.9 x V DD and 0.1 x V DD.

Note 6: After this period, the first clock pulse is generated.

Note 7: The DS75LV provides an internal hold time of at least 75ns on the SDA signal to bridge the undefined region of SCL's falling edge.

Note 8: This timeout applies only when the DS75LV is holding SDA low. Other devices can hold SDA low indefinitely and the DS75LV does not reset.

## DS75LV

## Pin Description

Figure 1. Block Diagram

|   PIN | NAME   | FUNCTION                                                             |
|-------|--------|----------------------------------------------------------------------|
|     1 | SDA    | Data Input/Output. For 2-wire serial communication port. Open drain. |
|     2 | SCL    | Clock Input. 2-wire serial communication port.                       |
|     3 | OS     | Thermostat Output. Open drain.                                       |
|     4 | GND    | Ground                                                               |
|     5 | A2     | Address Input                                                        |
|     6 | A1     | Address Input                                                        |
|     7 | A0     | Address Input                                                        |
|     8 | V DD   | Supply Voltage. +1.7V to +3.7V supply pin.                           |

<!-- image -->

Figure 2. Timing Diagram

<!-- image -->

## Detailed Description

## Measuring Temperature

The  DS75LV  measures  temperature  using  a  bandgap temperature sensing architecture. An on-board delta-sigma analog-to-digital converter (ADC) converts the measured temperature to a digital value that is calibrated in degrees centigrade; for Fahrenheit applications a lookup table or conversion routine must be used. The DS75LV is factorycalibrated and requires no external components to measure temperature.

At  power-up  the  DS75LV  immediately  begins  converting temperature  to  a  digital  value.  The  resolution  of  the digital  output  data  is  user-configurable  to  9,  10,  11,  or 12  bits,  corresponding  to  temperature  increments  of 0.5°C, 0.25°C, 0.125°C, and 0.0625°C, respectively, with 9-bit  default  resolution  at  power-up.  The  resolution  is controlled  via  the  R0  and  R1  bits  in  the  configuration register  as  explained  in  the Configuration  Register section. Note that the conversion time doubles for each additional bit of resolution.

After  each  temperature measurement and analog-to-digital conversion, the DS75LV stores the temperature as a 16-bit two's complement number in the 2-byte temperature register (see Figure 3). The sign bit (S) indicates if the temperature is  positive  or  negative:  for  positive  numbers  S  =  0  and  for negative numbers S = 1. The most recently converted digital measurement can be read from the temperature register at any time. Since temperature conversions are performed in the background, reading the temperature register does not affect the operation in progress.

## Digital Thermometer and Thermostat

Bits 3 through 0 of the temperature register are hardwired to 0. When the DS75LV is configured for 12-bit resolution, the 12 MSbs (bits 15 through 4) of the temperature register contain  temperature  data.  For  11-bit  resolution,  the  11 MSbs  (bits  15  through  5)  of  the  temperature  register contain data, and bit 4 reads out as 0. Likewise, for 10-bit resolution, the 10 MSbs (bits 15 through 6) contain data, and for 9-bit the 9 MSbs (bits 15 through 7) contain data, and all unused LSbs contain 0s. Table 1 gives examples of 12-bit resolution digital output data and the corresponding temperatures.

## Table 1. 12-Bit Resolution Temperature/ Data Relationship

Figure 3. Temperature, T OS , and T HYST  Register Format

|   TEMPERATURE (°C) | DIGITAL OUTPUT (BINARY)   | DIGITAL OUTPUT (HEX)   |
|--------------------|---------------------------|------------------------|
|               +125 | 0111 1101 0000 0000       | 7D00h                  |
|           +25.0625 | 0001 1001 0001 0000       | 1910h                  |
|            +10.125 | 0000 1010 0010 0000       | 0A20h                  |
|               +0.5 | 0000 0000 1000 0000       | 0080h                  |
|                  0 | 0000 0000 0000 0000       | 0000h                  |
|               -0.5 | 1111 1111 1000 0000       | FF80h                  |
|            -10.125 | 1111 0101 1110 0000       | F5E0h                  |
|           -25.0625 | 1110 0110 1111 0000       | E6F0h                  |
|                -55 | 1100 1001 0000 0000       | C900h                  |

|         | bit 15   | bit 14   | bit 13   | bit 12   | bit 11   | bit 10   | bit 9   | bit 8   |
|---------|----------|----------|----------|----------|----------|----------|---------|---------|
| MS Byte | S        | 2 6      | 2 5      | 2 4      | 2 3      | 2 2      | 2 1     | 2 0     |
|         | bit 7    | bit 6    | bit 5    | bit 4    | bit 3    | bit 2    | bit 1   | bit 0   |
| LS Byte | 2 -1     | 2 -2     | 2 -3     | 2 -4     | 0        | 0        | 0       | 0       |

## DS75LV

## Shutdown Mode

For  power-sensitive  applications,  the  DS75LV  offers a low-power shutdown mode.  The SD  bit in the configuration register controls shutdown mode. When SD is changed to 1, the conversion in progress is completed and  the  result  stored  in  the  temperature  register  after which the DS75LV goes into a low-power standby state. The OS output is cleared if the thermostat is operating in interrupt mode and OS remains unchanged in comparator mode. The 2-wire interface remains operational in shutdown  mode,  and  writing  a  0  to  the  SD  bit  returns  the DS75LV to normal operation.

## Thermostat

The DS75LV thermostat has two operating modes, comparator  mode  and  interrupt  mode,  which  activate  and deactivate the open-drain thermostat output (OS) based on user-programmable trip-points (T OS  and T HYST ). The DS75LV  powers  up  with  the  thermostat  in  comparator mode, active-low OS polarity,  over-temperature trip-point (T OS )  register  set  to  80°C,  and  the  hysteresis  trip-point (T HYST ) register set to 75°C. If these power-up settings are compatible with the application, the DS75LV can be used  as  a  standalone  thermostat  (i.e.,  no  2-wire  communication required). If interrupt mode operation, activehigh OS polarity or different T OS  and T HYST  values are desired,  they  must  be  programmed  after  power-up,  so standalone operation is not possible.

In both operating modes, the user can program the thermostat fault tolerance, which sets how many consecutive temperature readings (1, 2, 4, or 6) must fall outside of the thermostat limits before the thermostat output is triggered. The fault tolerance is set by the F1 and F0 bits in the configuration register. At power-up the fault tolerance is set to 1.

The data format of the T OS  and T HYST  registers is identical to  that  of  the  temperature  register  (see  Figure  3),  i.e.,  a 2-byte  two's  complement  representation  of  the  trip-point temperature in degrees centigrade with bits 3 through 0 hardwired  to  0. After  every  temperature  conversion,  the measurement is compared to the values stored in the T OS

and T HYST  registers. The OS output is updated based on the result of the comparison and the operating mode of the IC. The number of T OS  and T HYST  bits used during the thermostat comparison is equal to the conversion resolution set by the R1 and R0 bits in the configuration register. For example, if the resolution is 9 bits, only the 9 MSbs of T OS and T HYST  are used by the thermostat comparator.

The active state of the OS output can be changed via the POL bit in the configuration register. The power-up default is active low.

If the user does not wish to use the thermostat capabilities of the DS75LV, the OS output should be left floating. Note that  if  the  thermostat  is  not  used,  the  T OS   and  T HYST registers can be used for general storage of system data.

Comparator Mode: When the thermostat is in compara -tor  mode,  OS  can  be  programmed  to  operate  with  any amount  of  hysteresis.  The  OS  output  becomes  active when the measured temperature exceeds the T OS value a consecutive number of times as defined by the F1 and F0 fault tolerance (FT) bits in the configuration register. OS then stays active until the first time the temperature falls below the value stored in T HYST . Putting the device into shutdown mode does not clear OS in comparator mode. Thermostat  comparator  mode  operation  with  FT  =  2  is illustrated in Figure 4.

Interrupt  Mode: In  interrupt  mode,  the  OS  output  first becomes active when the measured temperature exceeds the T OS value a consecutive number of times equal to the FT value in the configuration register. Once activated, OS can  only  be  cleared  by  either  putting  the  DS75LV  into shutdown mode or by reading from any register (temperature, configuration, T OS , or T HYST  ) on the device. Once OS has  been  deactivated,  it  is  only  reactivated  when  the measured  temperature  falls  below  the  T HYST   value  a consecutive number of times equal to the FT value. Again, OS can only be cleared by putting the device into shutdown mode or reading any register. Thus, this interrupt/ clear process is cyclical between T OS  and T HYST  events (i.e,  T OS ,  clear,  T HYST ,  clear,  T OS ,  clear,  T HYST ,  clear, etc.). Thermostat interrupt mode operation with FT = 2 is illustrated in Figure 4.

## DS75LV

## Configuration Register

The  configuration  register  allows  the  user  to  program various  DS75LV  options  such  as  conversion  resolution, thermostat fault tolerance, thermostat polarity, thermostat operating mode, and shutdown mode. The configuration

## Digital Thermometer and Thermostat

register  is  arranged  as  shown  in  Figure  5  and  detailed descriptions  of  each  bit  are  provided  in  Table  2.  The user has read/write access to all bits in the configuration register  except  the  MSb,  which  is  a  reserved  read-only bit. The entire register is volatile, and thus powers up in its default state.

Figure 4. OS Output Operation Example

<!-- image -->

Figure 5. Configuration Register

<!-- image -->

## Table 2. Configuration Register Bit Descriptions

| BIT NAME                            | FUNCTION                                                                                                                                                             |
|-------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0 Reserved                          | Power-up state = 0 The master can write to this bit, but it will always read out as a 0.                                                                             |
| R1 Conversion Resolution Bit 1      | Power-up state = 0 Sets conversion resolution (see Table 3)                                                                                                          |
| R0 Conversion Resolution Bit 0      | Power-up state = 0 Sets conversion resolution (see Table 3)                                                                                                          |
| F1 Thermostat Fault Tolerance Bit 1 | Power-up state = 0 Sets the thermostat fault tolerance (see Table 4).                                                                                                |
| F0 Thermostat Fault Tolerance Bit 0 | Power-up state = 0 Sets the thermostat fault tolerance (see Table 4).                                                                                                |
| POL Thermostat Output (OS) Polarity | Power-up state = 0 POL = 0 -OSis active low. POL = 1 -OSis active high.                                                                                              |
| TM Thermostat Operating Mode        | Power-up state = 0 TM = 0 -Comparator mode TM = 1 -Interrupt mode See the Thermostat section for a detailed description of these modes.                              |
| SD Shutdown                         | Power-up state = 0 SD = 0 -Active conversion and thermostat operation. SD = 1 -Shutdown mode. See the Shutdown Mode section for a detailed description of this mode. |

## Table 3. Resolution Configuration

|   R1 |   R0 | THERMOMETER RESOLUTION   |   MAX CONVERSION TIME ( ms) |
|------|------|--------------------------|-----------------------------|
|    0 |    0 | 9-bit                    |                          25 |
|    0 |    1 | 10-bit                   |                          50 |
|    1 |    0 | 11-bit                   |                         100 |
|    1 |    1 | 12-bit                   |                         200 |

## Table 4. Fault Tolerance Configuration

|   F1 |   F0 |   CONSECUTIVE OUT-OF-LIMITS CONVERSIONS TO TRIGGER OS |
|------|------|-------------------------------------------------------|
|    0 |    0 |                                                     1 |
|    0 |    1 |                                                     2 |
|    1 |    0 |                                                     4 |
|    1 |    1 |                                                     6 |

## Table 5. Register Pointer Definition

| REGISTER      |   P1 |   P0 |
|---------------|------|------|
| Temperature   |    0 |    0 |
| Configuration |    0 |    1 |
| T HYST        |    1 |    0 |
| T OS          |    1 |    1 |

## DS75LV

## Register Pointer

The  four  DS75LV  registers  each  have  a  unique  2-bit pointer  designation,  which  is  defined  in  Table  5 .  When reading  from  or  writing  to  the  DS75LV,  the  user  must 'point' the DS75LV to the register that is to be accessed. When reading from the DS75LV, once the pointer is set, it remains pointed at the same register until it is changed. For example, if the user desires to perform consecutive reads from the temperature register, then the pointer only has to be set to the temperature register one time, after which  all  reads  are  automatically  from  the  temperature register until the pointer value is changed. When writing to the DS75LV, the pointer value must be refreshed each time  a  write  is  performed,  even  if  the  same  register  is being written to twice in a row.

At  power-up,  the  pointer  defaults  to  the  temperature register  location.  The  temperature  register  can  be  read immediately without resetting the pointer.

Changes  to  the  pointer  setting  are  accomplished  as described  in  the 2-Wire  Serial  Data  Bus section  of  this data sheet.

## 2-Wire Serial Data Bus

The DS75LV communicates over a standard bidirectional 2-wire serial data bus that consists of a serial clock (SCL) signal and serial data (SDA) signal. The device interfaces to the bus via the SCL input pin and open-drain SDA I/O pin. All communication is MSb first.

The  following  terminology  is  used  to  describe  2-wire communication:

Master Device: Microprocessor/microcontroller that controls the slave devices on the bus. The master device generates the SCL signal and START and STOP conditions.

Slave: All devices on the bus other than the master. The DS75LV always functions as a slave.

Bus Idle or Not Busy: Both SDA and SCL remain high. SDA is held high by a pullup resistor when the bus is idle, and SCL must either be forced high by the master (if the SCL output is push-pull) or pulled high by a pullup resistor (if the SCL output is open-drain).

Transmitter: A  device  (master or slave) that is sending data on the bus.

Receiver: A device (master or slave) that is receiving data from the bus.

START  Condition: Signal  generated  by  the  master  to indicate the beginning of a data transfer on the bus. The master generates a START condition by pulling SDA from high to low while SCL is high (see Figure 6). A 'repeated' START  is  sometimes  used  at  the  end  of  a  data  transfer (instead  of  a  STOP)  to  indicate  that  the  master  will perform another operation.

STOP  Condition: Signal  generated  by  the  master  to indicate the end of a data transfer on the bus. The master generates  a  STOP  condition  by  transitioning  SDA  from low  to  high  while  SCL  is  high  (see  Figure  6). After  the STOP is issued, the master releases the bus to its idle state.

Acknowledge  (ACK): When  a  device  (either  master or  slave)  is  acting  as  a  receiver,  it  must  generate  an acknowledge (ACK) on the SDA line after receiving every byte of data. The receiving device performs an ACK by pulling  the  SDA  line  low  for  an  entire  SCL  period  (see Figure  6).  During  the ACK  clock  cycle,  the  transmitting device must release SDA. A variation on the ACK signal is the 'not acknowledge' (NACK). When the master device is acting as a receiver, it uses a NACK instead of an ACK after the last data byte to indicate that it is finished receiving  data.  The  master  indicates  a  NACK  by  leaving  the SDA line high during the ACK clock cycle.

Slave  Address: Every  slave  device  on  the  bus  has  a unique 7-bit address that allows the master to access that device. The DS75LV's 7-bit bus address is 1 0 0 1 A2 A1 A0, where A2, A1, and A0 are user-selectable via the corresponding input pins. The three address pins allow up to eight DS75LVs to be multi-dropped on the same bus.

Address  Byte: The  control  byte  is  transmitted  by  the master  and  consists  of  the  7-bit  slave  address  plus  a read/write (R/ W ) bit (see Figure 7). If the master is going to read data from the slave device then R/ W = 1, and if the master is going to write data to the slave device then R/ W = 0.

Pointer Byte: The pointer byte is used by the master to tell  the  DS75LV  which  register  is  going  to  be  accessed during communication. The six MSbs of the pointer byte (see Figure 8) are always 0 and the two LSbs correspond to the desired register as shown in Table 5.

<!-- image -->

Figure 6. START, STOP, and ACK Signals

Figure 7. Address Byte

<!-- image -->

Figure 8. Pointer Byte

<!-- image -->

## General 2-Wire Information

- All data is transmitted MSb first over the 2-wire bus.
- One bit of data is transmitted on the 2-wire bus each SCL period.
- A pullup resistor is required on the SDA line and, when the bus is idle, both SDA and SCL must remain in a logic-high state.
- All bus communication must be initiated with a START condition  and  terminated  with  a  STOP  condition. During  a  START  or  STOP  is  the  only  time  SDA  is allowed to change states while SCL is high. At all other times, changes on the SDA line can only occur when SCL is low: SDA must remain stable when SCL is high.
- After every 8-bit (1-byte) transfer, the receiving device must answer with an ACK (or NACK), which takes one SCL  period.  Therefore,  nine  clocks  are  required  for every one-byte data transfer.

Writing  to  the  DS75LV: To  write  to  the  DS75LV,  the master must generate a START followed by an address byte containing the DS75LV bus address. The value of the R/W bit must be a 0, which indicates that a write is about to take place. The DS75LV responds with an ACK after receiving the address byte. The master then sends a pointer byte which tells the DS75LV which register is being  written  to.  The  DS75LV  again  responds  with  an ACK after receiving the pointer byte. Following this ACK the  master  device  must  immediately  begin  transmitting data  to  the  DS75LV.  When  writing  to  the  configuration register,  the  master  must  send  one  byte  of  data  (see Figure 9b), and when writing to the T OS  or T HYST  registers the master must send two bytes of data (see Figure 9c). After receiving each data byte, the DS75LV responds with an ACK, and the transaction is finished with a STOP from the master.

## DS75LV

Software  POR: The  soft  power-on  reset  (POR)  com -mand is 54h. The master sends a START followed by an address  byte  containing  the  DS75LV  bus  address.  The R/ W bit must be a 0. The DS75LV responds with an ACK. If the next byte is a 0x54, the DS75LV resets as if power had been cycled. No ACK is sent by the IC after the POR command is received.

Reading  from  the  DS75LV: When  reading  from  the DS75LV, if the pointer was already pointed to the desired register  during  a  previous  transaction,  the  read  can  be performed immediately without changing the pointer setting. In this case the master sends a START followed by an address byte containing the DS75LV bus address. The R/ W bit must be a 1, which tells the DS75LV that a read is being performed. After the DS75LV sends an ACK in response to the address byte, the DS75LV begins transmitting the requested data on the next clock cycle. When reading  from  the  configuration  register,  the  DS75LV transmits one byte of data, after which the master must respond with a NACK followed by a STOP (see Figure 9e). For two-byte reads (i.e., from the Temperature, T OS or  T HYST   register),  the  DS75LV  transmits  two  bytes of  data,  and  the  master  must  respond  to  the  first  data byte with an ACK and to the second byte with a NACK followed  by  a  STOP  (see  Figure  9a).  If  only  the  most significant byte of data is needed, the master can issue

## Digital Thermometer and Thermostat

a NACK followed by a STOP after reading the first data byte in which case the transaction is the same as for a read from the configuration register.

If the pointer is not already pointing to the desired register, the pointer must first be updated as shown in Figure 9d, which  shows  a  pointer  update  followed  by  a  single-byte read. The value of the R/ W bit  in  the  initial  address  byte is a 0 ('write') since the master is going to write a pointer byte  to  the  DS75LV.  After  the  DS75LV  responds  to  the address byte with an ACK, the master sends a pointer byte that corresponds to the desired register. The master must then perform a repeated start followed by a standard one or two byte read sequence (with R/ W =1) as described in the previous paragraph.

Bus  Timeout: The  DS75LV  has  a  bus  timeout  feature that  prevents  communication  errors  from  leaving  the  IC in a state where SDA is held low disrupting other devices on the bus. If the DS75LV holds the SDA line low for a period of t TIMEOUT , its bus interface automatically resets and release the SDA line. Bus communication frequency must  be  fast  enough  to  prevent  a  reset  during  normal operation. The bus timeout feature only applies to when the DS75LV is holding SDA low. Other devices can hold SDA  low  for  an  undefined  period  without  causing  the interface to reset.

Figure 9. 2-Wire Interface Timing

<!-- image -->

## DS75LV

## Ordering Information

| PART        | TEMP RANGE      | TOP MARK   | PIN-PACKAGE     |
|-------------|-----------------|------------|-----------------|
| DS75LVS+    | -55°C to +125°C | DS75L*     | 8 SO            |
| DS75LVS+T&R | -55°C to +125°C | DS75L*     | 8 SO            |
| DS75LVU+    | -55°C to +125°C | DS75L      | 8 µSOP (µMAX ®) |
| DS75LVU+T&R | -55°C to +125°C | DS75L      | 8 µSOP (µMAX)   |

+Denotes a lead(Pb)-free/RoHS-compliant package.

T&amp;R = Tape and reel.

*A '+' symbol is also marked on the package near the pin 1 indicator.

## Package Information

For the latest package outline information and land patterns (footprints), go to www.maximintegrated.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

| PACKAGE TYPE   | PACKAGE CODE   | OUTLINE NO.   | LAND PATTERN NO.   |
|----------------|----------------|---------------|--------------------|
| 8 SO           | S8+2           | 21-0141       | 90-0096            |
| 8 µMAX         | U8+1           | 21-0036       | 90-0092            |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## DS75LV

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                  | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------|-----------------|
|                 0 | 5/06            | Initial release                                                              | -               |
|                 1 | 11/06           | Changed the max conversion time for R1 and R0 in Table 4                     | 8               |
|                 2 | 12/14           | Updated Benefits and Features section                                        | 1               |
|                 3 | 4/15            | Revised Electrical Characteristics , Table 3, and Ordering Information       | 2, 3, 8, 13     |
|                 4 | 3/16            | Updated rise and fall time of SCL and SDAin Electrical Characteristics table | 3               |
|                 5 | 11/16           | Added Thermistor Error typical specification                                 | 2               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

## Digital Thermometer and Thermostat