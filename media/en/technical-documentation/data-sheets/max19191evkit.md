<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX19191 Evaluation Kit

## General Description

## Features

The MAX19191 evaluation kit (EV kit) is a fully assembled and  tested  circuit  board  that  contains  all  the  components  necessary  to  evaluate  the  performance  of  the MAX19191 8-bit analog-to-digital converter (ADC). The device  accepts  AC-  or  DC-coupled,  differential,  or single-ended analog inputs. The digital output produced by the ADC can be easily captured with a user-supplied high-speed logic analyzer or the data converter evaluation platform (DCEP). The EV kit operates from a 3.3V to 6V supply and utilizes four LDO regulators to power the  analog  and  digital  power  rails.  The  EV  kit  includes circuitry that generates a clock signal from an AC sinewave signal provided by the user.

- S 10Msps Maximum Sampling Rate
- S Single 3.3V to 6V Power-Supply Operation
- S Ultra-Low-Power Operation
- S Single-Ended or Fully Differential Input-Signal Configuration
- S AC- or DC-Coupled Input-Signal Configuration
- S Direct Interface with the Maxim DCEP Using the Samtec QSH Connector
- S Configurable Reference Voltage
- S On-Board Clock-Shaping Circuit
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE                               |
|----------------|------------------------------------|
| MAX19191EVKIT+ | EV Kit                             |
| DCEP           | Data Converter Evaluation Platform |

## Component List

| DESIGNATION                                           |   QTY | DESCRIPTION                                                           |
|-------------------------------------------------------|-------|-----------------------------------------------------------------------|
| C1, C2, C5, C9, C19, C21-C26, C35, C37, C39, C41, C48 |    16 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104K   |
| C3, C4                                                |     2 | 0.01 F F Q 10%, 16V X5R ceramic capacitors (0402) TDK C1005X5R1A103K  |
| C7, C12, C14, C20                                     |     4 | 1000pF Q 10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H102K    |
| C8, C13, C15                                          |     3 | 0.33 F F Q 10%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J334K |
| C10, C11                                              |     2 | 22pF Q 5%, 50V C0G ceramic capacitors (0603) TDK C1608C0G1H220J       |
| C18, C28, C30, C32, C34, C36, C38, C40, C42           |     9 | 2.2 F F Q 10%, 10V tantalum capacitors (A case) AVX TAJA225K010R      |
| C27 C29, C31, C33, C43-C46                            |     8 | 1 F F Q 10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1C105K     |

| DESIGNATION                     |   QTY | DESCRIPTION                                                                        |
|---------------------------------|-------|------------------------------------------------------------------------------------|
| C47                             |     1 | 10 F F Q 10%, 10V tantalum capacitor (A case) AVX TAJB106M010R                     |
| CLKIN, D/E_IN, S/E_IN+, S/E_IN- |     4 | SMA PC-mount connectors                                                            |
| J1                              |     1 | 2 x 10-pin header                                                                  |
| J2                              |     1 | 128-pin high-speed connector Samtec QSH-060-01-L-DA                                |
| JU1, JU2, JU4, JU5, JU8         |     5 | 3-pin headers                                                                      |
| JU3, JU6, JU7, JU9-JU12         |     7 | 2-pin headers                                                                      |
| L1-L4                           |     4 | 600 I , 350mA ferrite beads Fair-Rite 2512066017Y0                                 |
| R1, R2, R18                     |     3 | 49.9 I Q 1% resistors (0603)                                                       |
| R3, R4                          |     2 | 0 I Q 5% resistors (0402)                                                          |
| R5, R31-R44                     |     0 | Not installed, resistors (0603) R5, R41-R44 are open; R31-R40 are short (PC trace) |
| R7-R10, R17                     |     5 | 2k I Q 1% resistors (0603)                                                         |
| R11, R12                        |     2 | 24.9 I Q 1% resistors (0603)                                                       |
| R15, R20                        |     2 | 4.02k I Q 1% resistors (0603)                                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19191 Evaluation Kit

## Component List (continued)

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| R16           |     1 | 5k I , 12-turn potentiometer Murata PV37Y502C31B00            |
| R19           |     1 | 6.04k I Q 1% resistor (0603)                                  |
| R21-R30       |    10 | 100 I Q 1% resistors (0603)                                   |
| R45, R46      |     0 | Not installed, resistors-short (PC trace) (0402)              |
| T1            |     1 | RF transformer Mini-Circuits TT1-6-KK81                       |
| U1            |     1 | Single 10Msps 8-bit ADC (28 QFN-EP*) Maxim MAX19191ETI+       |
| U2            |     1 | Dual CMOS differential line receiver (8 SO) Maxim MAX9113ESA+ |

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| U3            |     1 | Buffer/driver, three-state output (48 TSSOP)                     |
| U4, U5        |     2 | 3V LDO regulators (5 SC70) Maxim MAX8510EXK30+ (Top Mark: AAS)   |
| U6, U7        |     2 | 1.8V LDO regulators (5 SC70) Maxim MAX8891EXK18+ (Top Mark: ATJ) |
| -             |    12 | Shunts (JU1-JU12)                                                |
| -             |     1 | PCB: MAX19191 EVALUATION KIT+                                    |

## Component Suppliers

| SUPPLIER                              | PHONE        | WEBSITE                     |
|---------------------------------------|--------------|-----------------------------|
| AVX Corporation                       | 843-946-0238 | www.avxcorp.com             |
| Fair-Rite Products Corp.              | 845-895-2055 | www.fair-rite.com           |
| Mini-Circuits                         | 718-934-4500 | www.minicircuits.com        |
| Murata Electronics North America Inc. | 847-803-6100 | www.murata-northamerica.com |
| TDK Corp.                             | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX19191 when contacting these component suppliers.

## Quick Start

## Required Equipment

- MAX19191	EV	kit
- 3.3V	to	6V,	300mA	DC	power	supply
- Function	 generator	 with	 low-phase	 noise	 and	 low jitter for clock input (e.g., Agilent 8644B)
- Function generator for analog signal input (e.g., Agilent 8644B)
- Logic	analyzer	or	DCEP	board
- Analog	anti-aliasing	filters
- Digital	voltmeter

## Procedure

The EV kit is a fully assembled and tested surface-mount board.  Follow  the  steps  below  for  board  operation. Caution: Do not turn on the power supply or enable function  generators  until  all  connections  are  completed.

- 1) Verify  that  shunts  are  installed  across  pins  2-3  of jumpers  JU4  and  JU5  (fully  operational,  outputs enabled).
- 2) Verify  that  no  shunts  are  installed  across  jumpers JU6 and JU7.
- 3) Verify  that  a  shunt  is  installed  across  pins  1-2  of jumper JU8 (internal reference mode).

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX19191 Evaluation Kit

- 4) Connect the logic analyzer to header J1. The output data is driven onto J1. Control signal DVAL on pin J1-11 indicates whether data is valid.
- 5) Connect  the  3.3V  power  supply  to  the  VIN  pad. Connect  the  ground  terminal  of  this  supply  to  the OGND pad.
- 6) Verify  that  shunts  are  installed  across  jumpers JU9-JU12 (on-board LDOs enabled).
- 7) Enable the power supply.
- 8) With a voltmeter, verify that 1.24V is measured at the test point TP1 via. If the voltage is not 1.24V, adjust potentiometer R16 until 1.24V is obtained.
- 9) Connect the clock function generator to the CLKIN SMA connector.
- 10)  Connect  the  output  of  the  analog  signal  function generator to the input of the suggested anti-aliasing filter.
- a) To  evaluate differential  AC-coupled analog signals, verify that shunts are installed on pins 2-3 of jumpers JU1 and JU2. Connect the output of  the  analog  anti-aliasing  filter  to  the  D/E\_IN SMA connector.
- b)  To evaluate single-ended AC-coupled analog signals, verify that shunts are installed on pins 1-2  of  jumpers  JU1,  JU2,  and  JU3.  Verify  that resistor  R5  is  open.  Connect  the  output  of  the anti-aliasing filter to the S/E\_IN+ connector.
- c) To evaluate single-ended DC-coupled analog signals,  verify  that  a  shunt  is  installed  on  pins 1-2 of jumper JU2, and no shunts are installed on  jumpers  JU1  and  JU3.  Remove  capacitor C2 and resistor R2. Install a 0 I resistor at R5. Connect the output of the anti-aliasing filters to the S/E\_IN+ SMA connector.
- d) To  evaluate differential  DC-coupled analog signals,  verify  that  a  shunt  is  installed  on  pins 1-2 of jumper JU2 and no shunts are installed on  jumpers  JU1  and  JU3.  Remove  capacitor C2 and resistor R2. Install a 0 I resistor at R5. Connect the outputs of the anti-aliasing filters to the S/E\_IN+ and S/E\_IN- SMA connectors.
- 11)  Enable  the function generators.  Set  the clock function generator for an output amplitude of 2.4VPP (+11.6dBm) and a frequency (fCLK) of P 10MHz. Set the analog input-signal generator to the desired output-test  signal  and  frequency.  The  clock  and analog input function generators should be phaselocked to each other.
- 12)  Output data is presented on the falling edge of the logic analyzer clock.
- 13)  Enable the logic analyzer and begin collecting data. See the Interfacing  the  EV  Kit  to  the  DCEP  Board section  for  additional  information  when  evaluating the EV kit using the DCEP board.

<!-- image -->

## Detailed Description of Hardware

The  MAX19191  EV  kit  is  a  fully  assembled  and  tested  circuit  board  that  contains  all  the  components necessary to evaluate the performance of the MAX19191 8-bit ADC. The ADC provides digitized data of its analog input channel. The EV kit comes with the ADC installed, which can be evaluated with a maximum clock frequency (fCLK) of 10MHz. The ADC accepts differential or singleended analog input signals. With the proper board configuration, the input signal can be AC- or DC-coupled.

The EV kit is based on a four-layer PCB design to optimize the performance of the ADC. Separate analog and digital  power  planes  minimize  noise  coupling  between analog and digital signals. The EV kit is configured with 3V  and  1.8V  power  supplies  applied  to  analog  and digital  power planes, respectively. However, the digital plane can be operated from 1.7V to 3.3V without compromising performance. See the Power Supplies section for additional information. The logic analyzer's threshold must be adjusted accordingly.

Access to the digital outputs is provided through header J1. The 0.1in, 20-pin header easily interfaces with a usersupplied logic analyzer or data-acquisition system. The digital outputs can also be interfaced to the DCEP board using Samtec connector J2, which is located on the bottom side of the EV kit board.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX19191 Evaluation Kit

## Power Supplies

The EV kit operates from a single 3.3V to 6V DC power supply applied at the VIN and OGND PCB pads. The EV kit requires separate analog and digital power supplies for best performance. VIN provides the power necessary for  operating  two  3V  LDO regulators (U4, U5) and two 1.8V LDO regulators (U6, U7) used for on-board regulation of the analog and digital power rails. The EV kit also provides the option of using external power supplies to power the analog and digital power rails independently.

Regulator U4 (3V) powers the ADC's VDD input and its corresponding  analog  circuitry.  To  power  the  ADC's VDD  input  and  the  analog  circuit  using  regulator  U4, install a shunt at jumper JU9. To power the ADC's VDD input  and  analog  circuitry  using  an  external  supply, remove the shunt at JU9 and apply a 2.7V to 3.6V power source at the VDD\_ADC and GND PCB pads. See Table 1 for proper JU9 configuration.

Regulator  U5  (3V)  powers  the  EV  kit  on-board  clockshaping circuit. To power the clock-shaping circuit using regulator U5, install a shunt at jumper JU10. To power the circuitry using an external supply, remove the shunt

## Table 1. VDD Input Power Configuration (JU9)

| SHUNT POSITION   | VDD_ADC INPUT SOURCE                                        |
|------------------|-------------------------------------------------------------|
| Installed        | 3V LDO (U4) powers the ADC's VDD input and analog circuitry |
| Not installed    | External supply applied at the VDD_ADC and GND PCB pads     |

Table 2. Clock Circuitry Input Power Configuration (JU10)

| SHUNT POSITION   | VCC_CLOCK INPUT SOURCE                                    |
|------------------|-----------------------------------------------------------|
| Installed        | 3V LDO (U5) powers the clock circuitry                    |
| Not installed    | External supply applied at the VCC_CLOCK and GND PCB pads |

at JU10 and apply an external voltage of 2.7V to 3.6V at the VCC\_CLOCK and GND PCB pads. When applying an external supply at the VCC\_CLOCK and GND PCB pads, the minimum voltage should be equal to or less than the VDD\_ADC voltage. See Table 2 for proper JU10 configuration.

Regulator U6 (1.8V) powers the ADC's OVDD input and its  corresponding  digital  circuitry.  To  power  the  ADC's OVDD input and its corresponding digital circuitry, install a  shunt  at  jumper  JU11.  To  power  the  digital  circuitry using  an  external  supply,  remove  the  shunt  at  JU11 and  apply  an  external  voltage  of  1.8V  to  3.6V  at  the OVDD\_ADC and GND PCB pads. See Table 3 for proper JU11 configuration.

Regulator  U7  (1.8V)  powers  the  EV  kit  CMOS  buffer/ driver  IC  (U3).  To  power  the  buffer/driver  IC,  install  a shunt  at  jumper  JU12.  To  power  the  buffer/driver  IC using an external supply, remove the shunt at JU12 and apply  an  external  voltage  of  1.8V  to  3.6V  at  the  VCC\_ BUFFER and OGND PCB pads. See Table 4 for proper JU12 configuration.

## Table 3. OVDD Input Power Configuration (JU11)

| SHUNT POSITION   | OVDD_ADC DIGITAL CIRCUITRY INPUT SOURCE                   |
|------------------|-----------------------------------------------------------|
| Installed        | 1.8V LDO (U6) output powers the ADC's OVDD input          |
| Not installed    | External supply applied at the OVDD_ADC and OGND PCB pads |

Table 4. VCC\_BUFFER Circuitry Input Power Configuration (JU12)

| SHUNT POSITION   | VCC_BUFFER INPUT SOURCE                                                                   |
|------------------|-------------------------------------------------------------------------------------------|
| Installed        | 1.8V LDO (U7) output powers the buffer/ driver IC                                         |
| Not installed    | External supply applied at the VCC_BUFFER and OGND PCB pads to power the buffer/driver IC |

Note: When operating the EV kit with the DCEP board, the voltage applied at the VCC\_BUFFER and OGND PCB pad should be set to 1.8V or 3.3V.

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX19191 Evaluation Kit

## Clock

An  on-board  clock-shaping  circuit  generates  a  clock signal from an AC sine-wave signal applied to the CLKIN SMA connector. The input signal  should  not  exceed  a magnitude  of  2.6VP-P  (+12.3dBm).  The  frequency  of the signal should not exceed 10MHz for the ADC. The frequency of the sinusoidal input signal determines the sampling frequency of the ADC. Differential line receiver U2  processes  the  input  signal  to  generate  the  CMOS clock  signal.  The  signal's  duty  cycle  can  be  adjusted with potentiometer R16. A clock signal with a 50% duty cycle  (recommended)  can  be  achieved  by  adjusting R16 until 1.24V (40% of the analog power supply) is produced across test point TP1 and GND when the analog supply voltage is set to 3V. The clock signal is available at header pin J1-1, which can be used as a clock source for  the  logic  analyzer.  Additionally,  header  pin  J1-11 (DVAL) is an image of the clock signal.

## Input Signals

The  ADC  accepts  differential  or  single-ended  AC-  or DC-coupled  analog  input  signals.  The  EV  kit  accepts input  signals  with  full-scale  amplitude  of  less  than 1.024VP-P (+4dBm). See Table 5 for proper jumper configurations. Note: When a differential signal is applied to the ADC, the positive and negative input pins of the ADC each  receive  half  of  the  input  signal  supplied  at  SMA connector D/E\_IN with a DC offset voltage of VADUT/2.

## Table 5. Single-Ended/Differential, AC-/DC-Coupled Jumper Configuration

| JUMPER   | SHUNT POSITION   | PIN CONNECTION                                                   | EV KIT OPERATION                                                            |
|----------|------------------|------------------------------------------------------------------|-----------------------------------------------------------------------------|
| JU1      | 1-2              | IN- pin connected to the COM pin through R11                     | Single-ended input, AC-coupled: • R5 open (default)                         |
| JU2      | 1-2              | IN+ pin AC-coupled to SMA connector S/E_IN+ through R12 and C2   | Single-ended input, AC-coupled: • R5 open (default)                         |
| JU3      | Installed        | IN+ pin assumes the DC offset at the REFP and REFN common        | Single-ended input, AC-coupled: • R5 open (default)                         |
| JU1      | Not installed    | IN- pin connected to the COM pin through R11                     | Single-ended input, DC-coupled: • R5 shorted (0 I ) • Remove C2 • Remove R2 |
| JU2      | 1-2              | IN+ pin DC-coupled to SMA connector S/E_IN+ through R12 and R5   | Single-ended input, DC-coupled: • R5 shorted (0 I ) • Remove C2 • Remove R2 |
| JU3      | Not installed    | IN+ pin assumes the DC offset from the analog input source       | Single-ended input, DC-coupled: • R5 shorted (0 I ) • Remove C2 • Remove R2 |
| JU1      | 2-3              | IN- pin connected to the low side of transformer T1 through R11  | Differential input, AC-coupled.                                             |
| JU2      | 2-3              | IN+ pin connected to the high side of transformer T1 through R12 | Differential input, AC-coupled.                                             |
| JU1      | Not installed    | IN- pin DC-coupled to SMA connector S/E_IN- through R11          | Differential input, DC-coupled: • R5 shorted (0 I ) • Remove C2 • Remove R2 |
| JU2      | 1-2              | IN+ pin DC-coupled to SMA connector S/E_IN+ through R12 and R5   | Differential input, DC-coupled: • R5 shorted (0 I ) • Remove C2 • Remove R2 |
| JU3      | Not installed    | IN+ pin assumes the DC offset from the analog input source       | Differential input, DC-coupled: • R5 shorted (0 I ) • Remove C2 • Remove R2 |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX19191 Evaluation Kit

## Power-Down, Standby, Idle, and Operating Modes

The EV kit also features jumpers that allow the user to enable or disable certain functions of the data converter. Jumpers JU4 and JU5 control the power-down, standby, idle, and operating modes of the EV kit. See Table 6 for jumper settings.

## Reference Modes

The  EV  kit  provides  three  modes  of  reference  operation:  internal  reference,  buffered  external  reference, and  unbuffered  external  reference.  In  internal  reference  mode,  the  REFIN  pad  is  connected  to  VADUT.

In  buffered  external  reference  mode, an external reference  voltage  1.024V  can  be  connected  at  the  REFIN pad.  In  unbuffered  external  reference  mode,  REFIN  is connected  to GND,  and  three external reference voltages  should  be  used  to  drive  REFP,  REFN,  and COM. Jumper JU8 selects the reference modes of the EV kit. See Table 7 for jumper settings.

## Digital Output Format

The  device  features  a  single  8-bit  CMOS-compatible digital  output  bus.  IN+/IN-  data  is  available  at  the  output  when  DVAL  is  high.  The  DVAL  signal  is  an  image of the clock that can be used to synchronize the output

Table 6. Power-Down, Standby, Idle, and Operating Modes Configuration (JU4, JU5)

| SHUNT POSITION   | SHUNT POSITION   | PIN CONNECTION                                                                         | EV KIT OPERATION                                                                                                          |
|------------------|------------------|----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| JU4              | JU5              | PIN CONNECTION                                                                         | EV KIT OPERATION                                                                                                          |
| 1-2              | 1-2              | PD0 is connected to OGND. PD1 is connected to OGND.                                    | ADC is in power-down mode: ADC off, ref off, and output three stated.                                                     |
| 1-2              | 2-3              | PD0 is connected to OGND. PD1 is connected to VODUT.                                   | ADC is in standby mode: ADC off, ref on, and output three stated.                                                         |
| 2-3              | 1-2              | PD0 is connected to VODUT. PD1 is connected to OGND.                                   | ADC is in idle mode: ADC on, ref on, and output three stated.                                                             |
| 2-3              | 2-3              | PD0 is connected to VODUT. PD1 is connected to VODUT.                                  | ADC is in operating mode: ADC on, ref on, and output enabled.                                                             |
| Not installed    | Not installed    | External control source (TTL/CMOS- compatible) is applied at the PD0 and PD1 PCB pads. | PD0, PD1 = 00 (power-down mode). PD0, PD1 = 01 (standby mode). PD0, PD1 = 10 (idle mode). PD0, PD1 = 11 (operating mode). |

Table 7. Reference Modes Configuration (JU8)

| SHUNT POSITION   | REFIN PIN CONNECTION                                | EV KIT OPERATION                                                               |
|------------------|-----------------------------------------------------|--------------------------------------------------------------------------------|
| 1-2              | Connected to VADUT                                  | Internal reference mode: V REF = V REFP - V REFN = 0.512V                      |
| 2-3              | Connected to GND                                    | Unbuffered external reference mode: REFP, REFN, COM driven by external sources |
| Not installed    | Connected to an external reference source (+1.024V) | Buffered external reference mode: V REF = V REFP - V REFN = 0.512V             |

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX19191 Evaluation Kit

data.  Refer  to  the  MAX19191  IC  data  sheet  for  more information.

A driver is used to buffer the ADC's digital outputs. This buffer is able to drive large capacitive loads that may be present at the logic analyzer or DCEP connection, without compromising the digital output signals. The outputs of the buffers are connected to header J1 located on the right  side  of  the  EV  kit,  where  the  user  can  connect  a logic analyzer. See Table 8 for the ADC output channel bit locations on header J1.

All  even-number  pins  on  header  J1  are  connected  to OGND.

## Interfacing the EV Kit to the DCEP Board

The DCEP and EV kit boards can be connected using the  specified  on-board  connectors.  Samtec  connector J2 on the EV kit mates with connector J5 on the DCEP board. Alternatively, the two boards can be connected with coaxial ribbon cables (Samtec part number HQCD060.00-STR-TBR-1).  Note  that  it  is  necessary  to  use either  the  on-board  connectors  or  cables  to  obtain  a reliable electrical connection between the two boards.

## Table 8. Header J1 Output Bit Location

| OUTPUT   |   DVAL LEVEL | BIT D0    | BIT D1    | BIT D2    | BIT D3    | BIT D4     | BIT D5     | BIT D6     | BIT D7     |
|----------|--------------|-----------|-----------|-----------|-----------|------------|------------|------------|------------|
| CLK â *  |            1 | J1-3 (A0) | J1-5 (A1) | J1-7 (A2) | J1-9 (A3) | J1-13 (A4) | J1-15 (A5) | J1-17 (A6) | J1-19 (A7) |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

EV kit-specific database files are required to configure the DCEP software. Use the following steps to operate the EV kit using the DCEP board:

- 1) Verify that the power source applied at the EV kit VIN and GND PCB pads are disabled.
- 2) Carefully  connect  the  boards  together  by  aligning the EV kit J2 connector to the DCEP J5 connector. Gently press them together.
- 3) Connect the USB cable from the computer's type-A USB port to the DCEP board's type-B USB port.
- 4) Refer  to  the  Data  Converter  Evaluation  Platform (DCEP) User's Guide for information on installing the DCEP software.
- 5) Enable  the  DCEP  data-acquisition  board  (refer  to the  Data  Converter  Evaluation  Platform  (DCEP) User's Guide  for details).
- 6) Create a new database in the DCEP by adding the MAX19191EVK-XX.dsm device module.
- 7) Enable the EV kit power supply.

Refer to the Data Converter Evaluation Platform (DCEP) User's Guide for specifics on system requirements, software installation, and loading configuration.

## MAX19191 Evaluation Kit

Figure 1a. MAX19191 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX19191 Evaluation Kit

<!-- image -->

Figure 1b. MAX19191 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX19191 Evaluation Kit

Figure 2. MAX19191 EV Kit Component Placement Guide-Component Side

<!-- image -->

10      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX19191 Evaluation Kit

<!-- image -->

Figure 3. MAX19191 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    11

## MAX19191 Evaluation Kit

Figure 4. MAX19191 EV Kit PCB Layout-Ground Planes

<!-- image -->

12      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX19191 Evaluation Kit

<!-- image -->

Figure 5. MAX19191 EV Kit PCB Layout-Power Planes

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    13

## MAX19191 Evaluation Kit

Figure 6. MAX19191 EV Kit PCB Layout-Solder Side

<!-- image -->

14      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX19191 Evaluation Kit

<!-- image -->

Figure 7. MAX19191 EV Kit Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    15

## MAX19191 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/10           | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

16