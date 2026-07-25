<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX7042 evaluation kit (EV kit) allows for a detailed evaluation  of  the  MAX7042  superheterodyne  receiver. It  enables  testing  of  the  device's  RF  performance  and requires  no  additional  support  circuitry.  The  RF  input circuit  is  designed  to  work  with  a  50 I source  impedance RF signal generator and has an SMA connector for convenient connection to test equipment. The EV kit can also directly interface to the user's embedded design for easy data decoding.

The MAX7042 EV kit comes in two versions, a 315MHz version  and  a  433.92MHz  version.  The  passive  components  are  optimized  for  these  frequencies.  These components can be changed to work  at  308MHz  and 418MHz.  In  addition,  the  4kbps  Manchester  received data  rate  can  be  adjusted  from  0kbps  to  33kbps  by changing two more components.

For easy implementation into the customer's design, the MAX7042 EV kit also features a proven PCB layout that can be duplicated easily for quicker time to market. The EV kit Gerber files are available upon request.

## Evaluates:  MAX7042 MAX7042 Evaluation Kit

Features

- S Proven PCB Layout
- S Proven Components Parts List
- S Multiple Test Points Provided On Board
- S Available in 315MHz or 433.92MHz Optimized Versions
- S 308MHz and 418MHz Operation Possible by Changing Components
- S Fully Assembled and Tested
- S Can Operate as a Stand-Alone Receiver with the Addition of an Antenna

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX7042EVKIT-315+ | EV Kit |
| MAX7042EVKIT-433+ | EV Kit |

## Component List

| DESIGNATION      |   QTY | DESCRIPTION                                                                   |
|------------------|-------|-------------------------------------------------------------------------------|
| C1, C20, C21     |     3 | 0.01 F F Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H103K       |
| C2, C22          |     2 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K        |
| C3, C4           |     2 | 15pF Q 5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H150J            |
| C5, C6, C13, C19 |     0 | Not installed, ceramic capacitors (0603)                                      |
| C7, C8, C9       |     3 | 100pF Q 5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H101J           |
| C10              |     1 | 315MHz: 1.2pF Q 0.1pF, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H1R2B |
| C10              |     1 | 433.92MHz: Not installed, ceramic capacitor (0603)                            |

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| C11, C18      |     2 | 220pF Q 10%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H221K    |
| C12           |     1 | 1500pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H152K    |
| C14, C15, C16 |     3 | 0.047 F F Q 10% 50V X7R ceramic capacitors (0603) Murata GRM188R71H473K |
| C17           |     1 | 470pF Q 5% 50V C0G ceramic capacitor (0603) Murata GRM1885C1H471JA01    |
| GND, TP8      |     2 | Black miniature test points                                             |
| JU1, JU4-JU11 |     9 | 3-pin headers                                                           |
| JU2, JU3      |     0 | Not installed, 3-pin headers                                            |
| JU12          |     1 | 2-pin header                                                            |
| L1            |     1 | 315MHz: 82nH Q 5% inductor (0603) Coilcraft 0603CS-82NXJLU              |
| L1            |     1 | 433.92MHz: 39nH Q 5% inductor (0603) Coilcraft 0603CS-39NXJLU           |

## Evaluates:  MAX7042 MAX7042 Evaluation Kit

## Component List (continued)

* EP = Exposed pad.

| DESIGNATION    |   QTY | DESCRIPTION                                                 |
|----------------|-------|-------------------------------------------------------------|
| L2             |     1 | 315MHz: 3.9nH Q 5% inductor (0603) Coilcraft 0603CS-3N9XJLU |
| L2             |     1 | 433.92MHz: 0 I Q 5% resistor (0603)                         |
| L3             |     1 | 315MHz: 30nH Q 5% inductor (0603) Murata LQW18AN30NJ00      |
| L3             |     1 | 433.92MHz: 16nH Q 5% inductor (0603) Murata LQW18AN16NJ00   |
| R1, R5         |     0 | Not installed, resistors (0603)                             |
| R2, R3, R4     |     3 | 100k I Q 5% resistors                                       |
| REF_IN, MIXOUT |     0 | Not installed, SMA female vertical- mount connectors        |
| RF_IN          |     1 | SMA female vertical-mount connector                         |

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| TP1-TP7,VDD   |     8 | Red miniature test points                                               |
| U1            |     1 | Low-power, FSK superheterodyne receiver (32 TQFN-EP*) Maxim MAX7042ATJ+ |
| Y1            |     1 | 315MHz: 9.509375MHz crystal Crystek 017034                              |
| Y1            |     1 | 433.92MHz: 13.2256MHz crystal Crystek 017035                            |
| Y2            |     1 | 10.7MHz ceramic filter TOKO #SK107M1N-AO-10                             |
| -             |     9 | Shunts                                                                  |
| -             |     1 | PCB: MAX7042 EVALUATION KIT+                                            |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| Crystek Corporation                    | 800-237-3061 | www.crystek.com             |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |

Note: Indicate that you are using the MAX7042 when contacting these component suppliers.

## Quick Start

## Required Equipment

- 1) Verify that the jumpers are in their default position, as shown in Table 1.
- 2) Connect a DC supply set to 3.3V (through an ammeter, if desired) to the VDD and GND terminals on the EV kit. Do not turn on the power supply.
- 3) Connect the RF signal generator to the RF\_IN SMA connector.  Do  not  turn  on  the  generator  output. Set  the  generator  for  an  output  carrier  frequency of  315MHz  (or  433.92MHz)  at  a  power  level  of -100dBm.  Set  the  modulation  of  the  generator  to provide a FSK signal with ±50kHz frequency deviation modulated with a 4kHz square wave.
- 4) Connect the oscilloscope to test point TP6 (DS+ or data  slicer  positive  input).  Set  the  oscilloscope  to AC-coupling and set the vertical scale to approximately 100mV/div.
- MAX7042 EV kit
- Regulated power supply capable of providing 3.3V
- RF signal generator capable of delivering -120dBm to 0dBm output power at the operating frequency, in addition  to  frequency  modulation  (FM)  capabilities (Agilent E4420B or equivalent)
- Optional ammeter for measuring supply current
- Oscilloscope

## Procedure

The  MAX7042  EV  kit  is  fully  assembled  and  tested.  Follow  the  steps  below  to  verify  board  operation. Caution: Do not turn on the DC power supply or RF signal generator until all connections are completed.

- 5) Turn on the DC supply. The supply current should read approximately 7.2mA for an EV kit that is set for maximum sensitivity  (JU4  pins  1-2  connected).  To draw slightly less current, with slightly less sensitivity, connect JU4 pins 2-3.
- 6) Remove the shunt from JU7 momentarily and restore it  to  the  1-2  position.  JU7  is  the  enable  input  and toggling it once ensures that the FSK demodulator is calibrated and operational.
- 7) Activate the RF generator's output with modulation and  observe  TP6  on  the  scope.  Use  the  RF  generator's  LF  OUTPUT  (modulation  output)  to  trigger the oscilloscope. The scope should show a 200mV to  250mV  peak-to-peak,  lowpass-filtered  square wave. If the RF power is turned off, the scope trace shows  a  noise  voltage  with  high-amplitude  and high-frequency characteristics. These are the clicks that characterize the response of an FM demodulator to noise. To estimate the sensitivity, reduce the RF power to a level where the square wave on the scope  is  noisy  but  recognizable.  This  power  level

Table 1. Jumper Table

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                 |
|----------|------------------|-------------------------------------------------------------|
| JU1      | 1-2*             | Connects AVDD to VDD3                                       |
| JU1      | 2-3              | Connects AVDD to TP1                                        |
| JU2      | -                | Not populated, leave open                                   |
| JU3      | -                | Not populated, leave open                                   |
| JU4      | 1-2*             | Selects high sensitivity                                    |
| JU4      | 2-3              | Selects normal sensitivity                                  |
| JU5      | 1-2              | Connects FSEL2 to VDD (default for 433.92MHz); see Table 2. |
| JU5      | 2-3              | Connects FSEL2 to GND (default for 315MHz); see Table 2.    |
| JU6      | 1-2*             | Connects FSEL1 to VDD; see Table 2                          |
| JU6      | 2-3              | Connects FSEL1 to GND; see Table 2                          |

## Evaluates:  MAX7042 MAX7042 Evaluation Kit

should be below -107dBm. In some cases, the sensitivity can be improved by removing the ammeter.

- 8) Move the scope probe to TP3 (DATA), change the coupling on the scope back to DC, and set the vertical scale to 1V/div or 2V/div. A 4kHz square wave going from ground to VDD (3.3V in this case) should be seen. As the RF power is increased, this square wave  becomes  cleaner.  Another  way  to  estimate sensitivity  from  this  test  point  is  to  reduce  the  RF power  until  the  square  wave  becomes  extremely asymmetric (duty cycle not 50%) and contains shortdata  transitions  (glitches)  in  the  middle  of  a  data interval. This power level should be below -107dBm, similar to the level seen in the previous step.

## Layout Issues

A properly designed PCB is essential for any RF/microwave circuit. Keep high-frequency input and output lines as short as possible to minimize losses and radiation. At high frequencies, trace lengths that are on the order of λ /10 or longer can act as antennas.

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                   |
|----------|------------------|-----------------------------------------------|
| JU7      | 1-2*             | Turns on the MAX7042                          |
| JU7      | 2-3              | Puts the MAX7042 in shutdown                  |
| JU8      | 1-2*             | Connects HVIN to VDD                          |
| JU8      | 2-3              | Connects HVIN to TP4                          |
| JU9      | 1-2*             | Connects DVDD to VDD3                         |
| JU9      | 2-3              | Connects DVDD to TP5                          |
| JU10     | 1-2*             | No peak-detector operation                    |
| JU10     | 2-3              | Use peak detector for faster receiver startup |
| JU11     | 1-2              | Mixer output to MIXOUT                        |
| JU11     | 2-3              | External IF input                             |
| JU11     | Open*            | Normal operation, leave open                  |
| JU12     | 1-2*             | Connects VDD to +3.3V supply                  |
| JU12     | Open             | Connects VDD to +5V supply                    |

* Default position.

## Evaluates:  MAX7042 MAX7042 Evaluation Kit

Both  parasitic  inductance  and  capacitance  are  influential on circuit layouts and are best avoided by using short trace lengths. Generally, a 10-mil wide PCB trace, 0.0625in above a ground plane, with FR4 dielectric has approximately 19nH/in of inductance and approximately 1pF/in of capacitance. In the LNA output/mixer input tank circuit,  the  proximity  to  the  MAX7042  IC  has  a  strong influence on the effective component values.

To reduce the parasitic inductance, use a solid ground or power plane below the signal traces. Also, use lowinductance connections to ground on all GND pins, and place decoupling capacitors close to all VDD connections.

The  MAX7042  EV  kit  PCB  can  serve  as  a  reference design for laying out a board using the MAX7042.

## Detailed Description of Hardware

## Power Supply

The MAX7042 can operate from 3.3V or 5V supplies. For 5V  operation,  remove  jumper  JU12  before  connecting the  supply  to  VDD.  AVDD  is  the  output  of  an  internal regulator  when  VDD  =  5V.  AVDD  and  DVDD  are  connected on the EV kit through VDD3. For 3.3V operation, connect JU12.

## IF Input/Output

The 10.7MHz IF can be monitored with an oscilloscope or a spectrum analyzer. To monitor the IF output with an oscilloscope, connect the scope probe to pin 3 of JU11. Increase the RF signal generator power to approximately -70dBm and set the scope amplitude to 20mV or 50mV per division. Set the time per division on the horizontal trace to 100ns. The scope trace shows the waveform at the output of the external ceramic IF filter.

To monitor the IF output on a spectrum analyzer, use the high-impedance  probe  attachment  from  the  spectrum analyzer, if  one  is  available,  and  connect  it  to  pin  3  of JU11.

Table 2. Frequency Selection Table

|   FSEL2 (JU5) |   FSEL1 (JU6) |   FREQUENCY (MHz) |
|---------------|---------------|-------------------|
|             0 |             0 |               308 |
|             0 |             1 |               315 |
|             1 |             0 |               418 |
|             1 |             1 |            433.92 |

Note:

1 = 1-2 position; 0 = 2-3 position.

There  is  a  MIXOUT  location  on  the  board  that  can  be populated  with  a  board-mounted  SMA  connector  to monitor  the  IF  output  or  to  inject  an  IF  signal  into  the IFIN+  pin.  Remove  the  ceramic  filter  (Y2)  for  such  a measurement and include R1 (270 I ) and C13 (0.01µF) to match the 330 I mixer output with the 50 I spectrum analyzer. Connect pins 1-2 of jumper JU11 to see the IF output  on  the  spectrum  analyzer.  Connect  pins  2-3  of jumper JU11 to inject an IF signal into the IFIN+ pin from an external source.

## REF\_IN External Frequency Input

For applications where the correct frequency crystal is not available, it is possible to directly inject an external frequency through the REF\_IN SMA connector. Connect the SMA to a function generator. The addition of C5 and C6 (use 0.01µF capacitors), plus the removal of C3 and C4 are necessary. The recommended amplitude of the function generator is 500mVP-P.

## Test Points and I/O Connections

Additional test points and I/O connectors are provided to monitor the various baseband signals and for external connections. See Tables 3 and 4 for a description.

Table 3. Test Points

|   TEST POINT | DESCRIPTION                   |
|--------------|-------------------------------|
|            1 | AVDD                          |
|            2 | RSSI                          |
|            3 | FSK data out                  |
|            4 | HVIN                          |
|            5 | DVDD                          |
|            6 | Positive input to data slicer |
|            7 | Negative input to data slicer |

## Table 4. I/O Connectors

| TEST POINT   | DESCRIPTION                        |
|--------------|------------------------------------|
| RF_IN        | RF input                           |
| REF_IN       | External reference frequency input |
| MIXOUT       | IF input/output                    |
| GND          | Ground                             |
| VDD          | Supply input                       |

## Evaluates:  MAX7042 MAX7042 Evaluation Kit

Figure 1. MAX7042 EV Kit Schematic

<!-- image -->

## Evaluates:  MAX7042 MAX7042 Evaluation Kit

<!-- image -->

Figure 2. MAX7042 EV Kit Component Placement GuideComponent Side

Figure 3. MAX7042 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX7042 EV Kit PCB Layout-Solder Side

<!-- image -->

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

## Evaluates:  MAX7042 MAX7042 Evaluation Kit