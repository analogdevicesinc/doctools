<!-- lastmod 2022-08-03 -->
## General Description

The MAX5927 evaluation kit (EV kit) is a fully assembled and tested surface-mount quad hot-swap controller/ power-sequencer/voltage-tracker  circuit  board, which provides current limiting and VariableSpeed/ BiLevel™ fault protection on all four channels. The circuit uses the MAX5927 in a 32-pin thin QFN package and is configurable for a 1.0V to 13.2V input range. The MAX5927 features a configurable latch/autoretry fault mode, circuit-breaker function, and programmable undervoltage lockout (UVLO).

The EV kit is configured to demonstrate four separate input voltages: 5V, 3.3V, 2.5V, and 1.8V. The 5V input is configured for 0.5A of output current, while the 3.3V input is configured for 1.5A of output current. The 2.5V and 1.8V inputs are each configured for 5A of output current. The MAX5927 controls four n-channel power MOSFETs and provides current regulation during startup for all  four  inputs.  Several  configurations  allow  the MAX5927's unique current regulation architecture to be tailored to the application. The current limiting and short-circuit  protection  features  are  configurable  and demonstrate the various features of the MAX5927.

The EV kit has several configurations for the startup timer setting, current limit, and voltage-tracking/powersequencing/independent modes of operation. The EV kit  also  provides independent turn-on delays for the four outputs, independent on/off control, and independent status reports of all four channels. The MAX5927 EV kit can also be reconfigured to emulate a MAX5929 (quad hot swap), MAX5930 (triple hot swap), or MAX5931 (triple hot swap) design.

<!-- image -->

Features

- ♦ Input Voltages
- ♦ Configurable Voltage-Tracking/PowerSequencing/Independent Operation Modes
- ♦ Independent On/Off Control and Status Reports for Each Channel
- ♦ Outputs
- ♦ Configurable 25mV Current-Trip Threshold
- ♦ Demonstrates Unique Current-Regulation Architecture and Circuit-Breaker Function
- ♦ Configurable Startup Timer
- ♦ Configurable Input Undervoltage Monitoring (All Inputs)
- ♦ Emulates MAX5929, MAX5930, or MAX5931 IC Functions
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

5V, VIN1 (as Configured) 3.3V, VIN2 (as Configured) 2.5V, VIN3 (as Configured) 1.8V, VIN4 (as Configured)

VOUT1: 5V, 0.5A (Configurable for Up to 1A)

VOUT2: 3.3V, 1.5A (Configurable for Up to 3A)

VOUT3: 2.5V, 5A (Configurable for Up to 10A)

VOUT4: 1.8V, 5A (Configurable for Up to 10A)

## Ordering Information

| PART         | TEMP RANGE   | IC-PACKAGE   |
|--------------|--------------|--------------|
| MAX5927EVKIT | 0°C to +70°C | 32 Thin QFN  |

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| Central Semiconductor | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| Fairchild             | 888-522-5372 | N/A          | www.fairchildsemi.com |
| IRC                   | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| Murata                | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Sanyo USA             | 619-661-6322 | 619-661-1055 | www.sanyovideo.com    |
| Taiyo Yuden           | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| Toshiba               | 949-455-2000 | 949-859-3963 | www.toshiba.com/taec  |
| Vishay                | N/A          | N/A          | www.vishay.com        |

Note: Indicate that you are using the MAX5927 when contacting these component suppliers.

VariableSpeed/BiLevel is a trademark of Maxim Integrated Products, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5927 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| C1            |     1 | 100µF, 16V OS-CON capacitor (E case) Sanyo 16SA100M                    |
| C2            |     1 | 150µF, 16V OS-CON capacitor (F case) Sanyo 16SA150M                    |
| C3, C4        |     2 | 1000µF, 16V OS-CON capacitors (H case) Sanyo 16SA1000M                 |
| C5-C8, C12    |     5 | 0.1µF ±10%, 25V X7R ceramic capacitors (0805) Murata GRM21BR71E104K    |
| C9            |     1 | 0.22µF ±10%, 16V X7R ceramic capacitor (0805) Murata GRM21BR71C224K    |
| C10           |     1 | 0.15µF ±10%, 25V X7R ceramic capacitor (0805) Murata GRM21BR71E154K    |
| C11           |     1 | 0.068µF ±10%, 25V X7R ceramic capacitor (0805) Murata GRM219R71E683K   |
| C13           |     1 | 1000pF ±10%, 50V X7R ceramic capacitor (0603) Taiyo Yuden UMK107B102KZ |
| C14-C17       |     4 | 1µF ±10%, 16V X7R ceramic capacitors (0805) Murata GRM21BR71C105K      |
| C18           |     0 | Not installed, OS-CON capacitor (E case)                               |
| C19           |     0 | Not installed, OS-CON capacitor (F case)                               |
| C20, C21      |     0 | Not installed, OS-CON capacitors (H case)                              |
| D1            |     1 | 1A 20V Schottky diode (SMA) Central Semiconductor CMSH1-20M            |

## Component List

| DESIGNATION                 |   QTY | DESCRIPTION                                                                            |
|-----------------------------|-------|----------------------------------------------------------------------------------------|
| D2, D3, D4                  |     3 | 3A 30V Schottky diodes (M-Flat) Toshiba CMS02                                          |
| D5                          |     1 | 7.5V 500mW zener diode (SOD-123) Central Semiconductor CMHZ5236B                       |
| J1, J2                      |     2 | 7-pin headers                                                                          |
| JU1-JU4, JU6, JU7, JU9-JU12 |    10 | 2-pin headers                                                                          |
| JU5, JU8                    |     2 | 3-pin headers                                                                          |
| N1                          |     1 | 20V, 3A n-channel MOSFET (SuperSOT-3) Fairchild FDN339AN                               |
| N2                          |     1 | 30V, 13A n-channel MOSFET (SO-8) Fairchild FDS6670A                                    |
| N3, N4                      |     2 | 30V, 100A n-channel MOSFETs (D 2 PAK) Fairchild FDB7045L                               |
| R1                          |     1 | 0.042 Ω ±1%, 0.5W sense resistor (1206) IRC LRC1206-R042-F or Vishay WSL1206R0420FSA   |
| R2                          |     1 | 0.013 Ω ±1%, 0.5W sense resistor (1206) IRC LRF1206-R013-F                             |
| R3, R4                      |     2 | 0.0042 Ω ±1%, 1.5W sense resistors (2512) Vishay WSL25124L200FBA or IRC LRF2512-R004-F |
| R5-R8, R16, R19, R22, R25   |     8 | 100k Ω ±1% resistors (0805)                                                            |
| R9                          |     1 | 4.02k Ω ±1% resistor (0805)                                                            |
| R10                         |     1 | 49.9k Ω ±1% resistor (0805)                                                            |
| R11, R13, R14               |     3 | 3.32k Ω ±1% resistors (0805)                                                           |
| R12                         |     1 | 1.87k Ω ±1% resistor (0805)                                                            |
| R15                         |     1 | 412k Ω ±1% resistor (0805)                                                             |
| R17, R20, R23, R26          |     4 | 1k Ω ±5% resistors (0805)                                                              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Component List (continued)

| DESIGNATION                                    |   QTY | DESCRIPTION                             |
|------------------------------------------------|-------|-----------------------------------------|
| R18                                            |     1 | 237k Ω ±1% resistor (0805)              |
| R21                                            |     1 | 158k Ω ±1% resistor (0805)              |
| R24                                            |     1 | 84.5k Ω ±1% resistor (0805)             |
| R27                                            |     0 | Not installed, resistor (0805)          |
| R28, R29                                       |     2 | 10k Ω ±5% resistors (0805)              |
| R30, R31                                       |     2 | 1k Ω ±5% resistors (0805)               |
| R32-R35                                        |     4 | 5.1k Ω ±5% resistors (0805)             |
| SW1-SW4                                        |     4 | SPST momentary contact switches         |
| VIN1-VIN4, VOUT1-VOUT4, PGND, PGND, PGND, PGND |    12 | Uninsulated banana jacks                |
| U1                                             |     1 | MAX5927ETJ (32-pin thin QFN, 5mm x 5mm) |
| None                                           |    12 | Shunts (JU1-JU12)                       |
| None                                           |     4 | Rubber bumpers                          |

## Quick Start

The MAX5927 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supplies until all connections are completed.

## Required Equipment

- One 5V, 1A-capable power supply (2A for maximum current-limit configuration)
- One 3.3V, 3A-capable power supply (6A for maximum current-limit configuration)
- One 2.5V, 10A-capable power supply (20A for maximum current-limit configuration)
- One 1.8V, 10A-capable power supply (20A for maximum current-limit configuration)
- One voltmeter for confirming output voltages

## MAX5927 Configuration (All Outputs)

- 1) Verify that shunts are installed on jumpers JU1 (ILIM1, 0.5A), JU2 (ILIM2, 1.5A), JU3 (ILIM3, 5A), and JU4 (ILIM4, 5A).
- 2) Verify  that  a  shunt  is  installed  on  pins  1  and  2  of jumper JU5 (RTIM, 411µs).
- 3) Verify that a shunt is installed on jumper JU6 (LATCH, autoretry mode).

<!-- image -->

## MAX5927 Evaluation Kit

- 4) Verify that shunts are not installed on jumpers JU7 (POL, normal logic polarity) and JU8 (MODE, power-sequencing mode).
- 5) Verify that a shunt is installed on jumpers JU9 (ON1, C9 delay capacitor), JU10 (ON2, C10 delay capacitor), JU11 (ON3, C11 delay capacitor), and JU12 (ON4, C12 delay capacitor).
- 6) Connect the 5V power supply to the VIN1 banana jack and the supply ground to the PGND banana jack.
- 7) Utilizing very short 10A-rated banana leads (&lt;6in long), connect the 5V, 3.3V, 2.5V, and 1.8V DC power supplies to the VIN1, VIN2, VIN3, and VIN4 metal banana jacks, respectively. Utilizing very short 10A-rated banana leads (&lt;6in long), connect the supply grounds to the respective PGND metal banana jacks.
- 8) Connect the voltmeter to the VOUT1 and PGND pads.
- 9) Turn on all four power supplies and verify the following output voltages:
- 10) Pressing pushbutton switches SW1-SW4 resets their respective outputs (VOUT1-VOUT4).
- 11) Test points TP1-TP4 and GND pads nearby are provided to observe their respective MOSFET gate voltages with an oscilloscope.

VOUT1 = 5V

VOUT2 = 3.3V

VOUT3 = 2.5V

VOUT4 = 1.8V

Note: The banana leads connecting the power supplies and their respective load to the EV kit must be very short (&lt;6in long) and rated for at least 10A of current.

## Detailed Description

The MAX5927 EV kit is a quad hot-swap controller circuit board configured to four different input voltages: 5V input (VIN1), 3.3V input (VIN2), 2.5V input (VIN3), and 1.8V input (VIN4). All four inputs have separate and independent current limiting, VariableSpeed/BiLevel fault protection,  and circuit-breaker functions. The EV kit uses a MAX5927ETJ IC in a 32-pin thin QFN package to control the four channels of the circuit. The EV kit can be reconfigured for any input voltage between 1.0V and 13.2V, given that at least one input voltage is ≥ 2.7V.

The EV kit features several modes of operation that are jumper configurable (JU8): voltage-tracking mode, power-sequencing mode, and independent mode. In the voltage-tracking mode, the MAX5927 turns all channels on and off together. When the EV kit is configured for the power-sequencing mode, the MAX5927

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5927 Evaluation Kit

turns each channel on and off depending on the corresponding ON pin command voltage. In this mode, all channels are turned off if a fault occurs on any channel. Lastly, the independent mode provides separate control of  each channel. When a fault occurs in this mode of operation, the MAX5927 only shuts down the affected channel. Pushbutton switches SW1-SW4 are provided for resetting the outputs VOUT1-VOUT4, respectively.

The EV kit has configurable startup timer settings. Jumper-configurable (JU9-JU12) independent power turn-on  delay  capacitors  at  each  ON  pin  input (C9-C12) provide several choices for evaluating different hot-swap methods. The MAX5927's ON pin signals and open-drain STAT pin signals are provided at headers J1 and J2 for all channels on the EV kit. The 0.100in center headers can be connected with a ribbon cable to facilitate evaluation. The STAT pin's logic polarity can be reversed using JU7 to configure the MAX5927 POL pin.  The  EV  kit  also  features  a  configurable latch/autoretry fault mode. JU6 configures the EV kit for the  desired fault  mode. In the latched mode, the outputs are latched off until all the power supplies have been cycled off and then on.

Additionally, the pushbutton switch for the respective channel that caused the fault can be pushed to unlatch the outputs. In the autoretry mode, the MAX5927 attempts to turn the outputs back on after a delay period.

The MAX5927 controls each channel's power n-channel  MOSFET (N1-N4) and provides current regulation during startup for all four channels' outputs. The current-limit threshold level can be reconfigured separately for each channel's output.

The 5V output (VOUT1) current limit can be configured for  1A  by  using JU1. PC board pads are provided for external capacitor C5 to increase MOSFET N1's gate turn-on time. Test point TP1 can be used with an oscilloscope to view N1's gate voltage. PC board pads are also provided for an optional user-installed surfacemount zener diode (SOD-123 case, D5) to clamp N1's gate-source voltage.

The 3.3V output (VOUT2) current limit can be configured for 3A by using JU2. PC board pads are provided for  external  capacitor C6 to increase MOSFET N2's gate turn-on time. Test point TP2 can be used with an oscilloscope to view N2's gate voltage.

The 2.5V output (VOUT3) current limit can be configured for 10A by using JU3. PC board pads are provided for external capacitor C7 to increase MOSFET N3's gate turn-on time. Test point TP3 can be used with an oscilloscope to view N3's gate voltage.

The 1.8V output (VOUT4) current limit can be configured for 10A by using JU4. PC board pads are provided for external capacitor C8 to increase MOSFET N4's gate turn-on time. Additionally, pads are also provided for  an  optional  user-installed  surface-mount resistor (0805 case, R33) to help control gate oscillations on N4 or  to  disable  it.  Test  point  TP4  can  be  used  with  an oscilloscope to view N4's gate voltage.

Additionally, the MAX5927 EV kit can be used to evaluate outputs up to 20A. When configuring for higher current levels, install optional capacitors C18-C21. These capacitors are provided with the EV kit. Several resistors  and  MOSFETs must be appropriately chosen for the higher current levels. See the Evaluating Other Input Voltages (1V to 13.2V) and Other Output Currents section for more details. Diodes D1-D4 on the EV kit are used to prevent an inductive kickback resulting from long lead connections in a lab environment. They are generally not needed in a real application circuit.

The MAX5927 EV kit can also be used to emulate the MAX5929 quad hot-swap design or the MAX5930/ MAX5931 triple hot-swap design after reconfiguring the appropriate jumpers and/or component replacement. See the MAX5929/MAX5930/MAX5931 Emulation section for information on emulating other hot-swap designs.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Jumper Selection

Several jumper selections in the following tables display the functions and emulation modes provided by the MAX5927 EV kit.

## 5V Slow Comparator Current Limit (VOUT1)

The MAX5927 EV kit features a 2-pin jumper (JU1) to change the slow comparator current-limit threshold level for the 5V output. Table 1 lists the jumper options.

## 3.3V Slow Comparator Current Limit (VOUT2)

The MAX5927 EV kit features a 2-pin jumper (JU2) to change the slow comparator current-limit threshold level for the 3.3V output. Table 2 lists the jumper options.

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | ILIM1 PIN                 | EV KIT MODE                                     |
|------------------|---------------------------|-------------------------------------------------|
| Installed        | Connected to GND          | VOUT1 slow comparator current limit set to 25mV |
| None             | Connected to resistor R11 | VOUT1 slow comparator current limit set to 50mV |

## Table 2. Jumper JU2 Functions

| SHUNT LOCATION   | ILIM2 PIN                 | EV KIT MODE                                     |
|------------------|---------------------------|-------------------------------------------------|
| Installed        | Connected to GND          | VOUT2 slow comparator current limit set to 25mV |
| None             | Connected to resistor R12 | VOUT2 slow comparator current limit set to 39mV |

<!-- image -->

## MAX5927 Evaluation Kit

## 2.5V Slow Comparator Current Limit (VOUT3)

The MAX5927 EV kit features a 2-pin jumper (JU3) to change the slow comparator current-limit threshold level for the 2.5V output. Table 3 lists the jumper options.

## 1.8V Slow Comparator Current Limit (VOUT4)

The MAX5927 EV kit features a 2-pin jumper (JU4) to

change the slow comparator current-limit threshold level

for the 1.8V output. Table 4 lists the jumper options.

## Table 3. Jumper JU3 Functions

| SHUNT LOCATION   | ILIM3 PIN                 | EV KIT MODE                                     |
|------------------|---------------------------|-------------------------------------------------|
| Installed        | Connected to GND          | VOUT3 slow comparator current limit set to 25mV |
| None             | Connected to resistor R13 | VOUT3 slow comparator current limit set to 50mV |

## Table 4. Jumper JU4 Functions

| SHUNT LOCATION   | ILIM4 PIN                 | EV KIT MODE                                     |
|------------------|---------------------------|-------------------------------------------------|
| Installed        | Connected to GND          | VOUT4 slow comparator current limit set to 25mV |
| None             | Connected to resistor R14 | VOUT4 slow comparator current limit set to 50mV |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5927 Evaluation Kit

## Startup Timer Setting

The MAX5927 EV kit features several choices for setting  the  time  limit  to  completely  turn  on  power MOSFETs N1-N4. Jumper JU5 selects the time and Table 5 lists the selectable jumper options to reconfigure the startup timer setting.

## Latch/Autoretry Fault Modes

The MAX5927 EV kit features a jumper to configure the EV kit mode of operation after a fault has occurred,  to either latched or autoretry mode. Jumper JU6 sets the l atch/autoretry  mode  of  the  LATCH  pin  on  the MAX5927. Table 6 lists the selectable jumper options.

Table 5. Jumper JU5 Functions

| SHUNT LOCATION   | RTIM PIN         | EV KIT MODE                 |
|------------------|------------------|-----------------------------|
| 1 and 2          | Connected to R9  | 411µs startup timer setting |
| 2 and 3          | Connected to R10 | 5.1ms startup timer setting |
| None             | Floating         | 9ms startup timer setting   |

Table 6. Jumper JU6 Functions

| SHUNT LOCATION   | LATCH PIN        | EV KIT MODE    |
|------------------|------------------|----------------|
| None             | Floating         | Latched mode   |
| Installed        | Connected to GND | Autoretry mode |

## Status Output Polarity

The MAX5927 EV kit features a jumper to configure the MAX5927 status pin's logic polarity.

The status pin normally provides a logic high when a hot swap has been successful and a logic low for a fault  condition.  The  status  pin's  logic  polarity  or  state can be reversed with jumper JU7. JU7 sets the polarity of  the  status  outputs  on  the  MAX5927  EV  kit.  Table  7 lists the selectable jumper options.

## Voltage-Tracking/Power-Sequencing/ Independent Operation Modes

The MAX5927 EV kit features several choices for setting the EV kit's operating mode; voltage-tracking mode, power-sequencing mode, or independent mode control of each channel. Jumper JU8 selects the operating mode and Table 8 lists the selectable jumper options to reconfigure the operating mode.

Table 7. Jumper JU7 Functions

| SHUNT LOCATION   | POL PIN          | STAT1-STAT4 PIN MODE                        |
|------------------|------------------|---------------------------------------------|
| None             | Floating         | Normal logic polarity (asserted open drain) |
| Installed        | Connected to GND | Reverse logic polarity (asserted low)       |

Table 8. Jumper JU8 Functions

| SHUNT LOCATION   | MODE PIN           | EV KIT OPERATION      |
|------------------|--------------------|-----------------------|
| 1 and 2          | Connected to VBIAS | Voltage-tracking mode |
| 2 and 3          | Connected to GND   | Independent mode      |
| None             | Floating           | Power-sequencing mode |

See the Detailed Description section for more information on the various types of operating modes.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## ON1 Pin Delay (VIN1)

The MAX5927 EV kit features a jumper to delay turning on the VOUT1 output. Given that at least one input is ≥ 2.7V for more than the UVLO-to-startup delay (37.5ms, typ), the jumper sets the response of the MAX5927 ON1 pin with respect to VIN1. Jumper JU9 selects the turn-on delay for the EV kit. Table 9 lists the selectable jumper options.

## ON2 Pin Delay (VIN2)

The MAX5927 EV kit features a jumper to delay turning on the VOUT2 output. Given that at least one input is ≥ 2.7V for more than the UVLO-to-startup delay (37.5ms, typ), the jumper sets the response of the MAX5927 ON2 pin with respect to VIN2. Jumper JU10 selects the turn-on delay for the EV kit. Table 10 lists the selectable jumper options.

Table 9. Jumper JU9 Functions

| SHUNT LOCATION   | ON1 PIN, R15, R16                     | EV KIT MODE                               |
|------------------|---------------------------------------|-------------------------------------------|
| None             | C9 floating                           | VOUT1 turns on with no delay              |
| Installed        | Connected to C9; enable turn-on delay | VOUT1 turns on 40.1ms after releasing SW1 |

Table 10. Jumper JU10 Functions

| SHUNT LOCATION   | ON2 PIN, R18, R19                      | EV KIT MODE                               |
|------------------|----------------------------------------|-------------------------------------------|
| None             | C10 floating                           | VOUT2 turns on with no delay              |
| Installed        | Connected to C10; enable turn-on delay | VOUT2 turns on 20.6ms after releasing SW2 |

<!-- image -->

## MAX5927 Evaluation Kit

## ON3 Pin Delay (VIN3)

The MAX5927 EV kit features a jumper to delay turning on the VOUT3 output. Given that at least one input is ≥ 2.7V for more than the UVLO-to-startup delay (37.5ms, typ), the jumper sets the response of the MAX5927 ON3 pin with respect to VIN3. Jumper JU11 selects the turn-on delay for the EV kit. Table 11 lists the selectable jumper options.

## ON4 Pin Delay (VIN4)

The MAX5927 EV kit features a jumper to delay turning on the VOUT4 output. Given that at least one input is ≥ 2.7V for more than the UVLO-to-startup delay (37.5ms, typ), the jumper sets the response of the MAX5927 ON4 pin with respect to VIN4. Jumper JU12 selects the turn-on delay for the EV kit. Table 12 lists the selectable jumper options.

Table 11. Jumper JU11 Functions

| SHUNT LOCATION   | ON3 PIN, R21, R22                      | EV KIT MODE                             |
|------------------|----------------------------------------|-----------------------------------------|
| None             | C11 floating                           | VOUT3 turns on with no delay            |
| Installed        | Connected to C11; enable turn-on delay | VOUT3 turns on 10ms after releasing SW3 |

Table 12. Jumper JU12 Functions

| SHUNT LOCATION   | ON4 PIN, R24, R25                      | EV KIT MODE                              |
|------------------|----------------------------------------|------------------------------------------|
| None             | C12 floating                           | VOUT4 turns on with no delay             |
| Installed        | Connected to C12; enable turn-on delay | VOUT4 turns on 9.7ms after releasing SW4 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5927 Evaluation Kit

## J1 and J2 Header Signals

The MAX5927 EV kit features two 7-pin 0.100in center headers for monitoring the STAT\_ and ON\_ signal of each channel. Header J1 provides the signals for channels 1 and 4, while header J2 provides the signals for channels 2 and 3. Analog grounds are provided at each header. Table 13 lists the specific header pin signals.

## Control Modes and Other Input Voltages

## Fault Resetting and ON Pins

The MAX5927 EV kit features four pushbutton switches (SW1-SW4) to allow momentary toggling of the ON1-ON4 pins of the MAX5927. Each switch disables the respective EV kit output or unlatches faults when the EV kit is configured for latch mode (see Table 6). A voltage can also be applied to the respective ON pin of headers J1 or J2 (see Table 13) to perform other functions  with  the  MAX5927  ON  pin.  Refer  to  the MAX5927/MAX5929 data sheet for additional functions of the ON pins when toggling or applying a voltage to the pins.

## MOSFET Gate Control

The MAX5927 EV kit features an option to increase a channel's power MOSFET gate (N1-N4) turn-on time. PC board pads are provided for installing a 0805 surface-mount capacitor (C5-C8) at the respective gatedrive  pin.  Refer  to  the  MAX5927/MAX5929 data sheet for information on selecting the value of the capacitors. Test points TP1-TP4 are provided to observe the respective gate-drive voltage with an oscilloscope. Zener diode D5 is used to clamp the gate-to-source voltage of MOSFET N1 during an output short-circuit condition.

## Table 13. Header J1 and J2 Pin Signals

|   HEADER J1 PIN | SIGNAL   |   HEADER J2 PIN | SIGNAL   |
|-----------------|----------|-----------------|----------|
|               1 | STAT1    |               1 | STAT2    |
|               2 | GND      |               2 | GND      |
|               3 | ON_1     |               3 | ON_2     |
|               4 | GND      |               4 | GND      |
|               5 | STAT4    |               5 | STAT3    |
|               6 | GND      |               6 | GND      |
|               7 | ON_4     |               7 | ON_3     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluating Other Input Voltages (1V to 13.2V) and Other Output Currents

The MAX5927 EV kit can evaluate other quad hot-swap controller  configuration  voltages operating from 1V to 13.2V and provide up to 20A of current at the output. One of the input voltages, VIN1-VIN4, must be ≥ 2.7V. To evaluate other current limits, current-sense resistors R1-R4, current-limit resistors R11-R14, and MOSFETs N1-N4 must be appropriately chosen for the new current and/or voltage level at the modified channel. Refer to the MAX5927/MAX5929 data sheet for information on selecting components.

## MAX5929/MAX5930/MAX5931 Emulation

## Emulating a MAX5929 Quad Hot-Swap or MAX5930/MAX5931 Triple Hot-Swap Design

The MAX5927 EV kit can emulate the MAX5929, MAX5930, or MAX5931 hot-swap features. The EV kit uses the MAX5927 and properly set jumpers to emulate other designs. See Table 14 to emulate the MAX5929 design, or Table 15 to emulate the MAX5930 design, or Table 16 to emulate the MAX5931 design. The triple hot-swap emulation requires component removal and installation. Refer to the MAX5927/MAX5929 data sheet for a description of specific pin functions on the emulated Maxim part and its associated external components.

<!-- image -->

## MAX5927 Evaluation Kit

## Table 14. Emulating a MAX5929 Quad Hot-Swap Design (Set Shunt Location per Table)

| JUMPER   | SHUNT LOCATION                         | MAX5929 PIN   | MAX5929 EV KIT MODE EMULATED                                                  |
|----------|----------------------------------------|---------------|-------------------------------------------------------------------------------|
| JU1      | Installed                              | ILIM1         | VOUT1 slow comparator current limit set to 25mV; fixed at 25mV on the MAX5929 |
| JU2      | Installed                              | ILIM2         | VOUT2 slow comparator current limit set to 25mV; fixed at 25mV on the MAX5929 |
| JU3      | Installed                              | ILIM3         | VOUT3 slow comparator current limit set to 25mV; fixed at 25mV on the MAX5929 |
| JU4      | Installed                              | ILIM4         | VOUT4 slow comparator current limit set to 25mV; fixed at 25mV on the MAX5929 |
| JU5      | Set per Table 5                        | RTIM          | Startup timer setting delay                                                   |
| JU6      | Set per Table 6 and MAX5929 IC desired | LATCH         | Latched or autoretry mode                                                     |
| JU7      | Set per Table 7 and MAX5929 IC desired | POL           | Status output pins logic polarity                                             |
| JU8      | Set per Table 8                        | MODE          | Voltage-tracking/power-sequencing/independent operation mode                  |
| JU9      | Set per Table 9                        | ON1           | VOUT1 turn-on delay setting                                                   |
| JU10     | Set per Table 10                       | ON2           | VOUT2 turn-on delay setting                                                   |
| JU11     | Set per Table 11                       | ON3           | VOUT3 turn-on delay setting                                                   |
| JU12     | Set per Table 12                       | ON4           | VOUT4 turn-on delay setting                                                   |

To evaluate a triple hot-swap design, channel 4 of the MAX5927 EV kit must be disabled. Perform the following modifications prior to reconfiguring the jumpers:

- 1) Remove surface-mount resistors R24, R25, and R26.
- 2) Install a 1k Ω , 0805 surface-mount resistor at R27.
- 3) Confirm that header J1/pin 7 (ON\_4) does not have an external voltage source applied to it.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 4) Connect a jumper from the VIN3 input to the VIN4 input.
- 5) To evaluate a quad hot-swap design again, reverse the above steps.

## MAX5927 Evaluation Kit

## Table 15. Emulating a MAX5930 Triple Hot-Swap Design (Set Shunt Location per Table)

| JUMPER   | SHUNT LOCATION   | MAX5930 PIN   | MAX5930 EV KIT MODE EMULATED                                 |
|----------|------------------|---------------|--------------------------------------------------------------|
| JU1      | Set per Table 1  | ILIM1         | VOUT1 slow comparator current limit                          |
| JU2      | Set per Table 2  | ILIM2         | VOUT2 slow comparator current limit                          |
| JU3      | Set per Table 3  | ILIM3         | VOUT3 slow comparator current limit                          |
| JU4      | Installed        | ILIM4         | MAX5930 does not have this pin                               |
| JU5      | Set per Table 5  | RTIM          | Startup timer setting delay                                  |
| JU6      | Set per Table 6  | LATCH         | Latched or autoretry mode                                    |
| JU7      | Set per Table 7  | POL           | Status output pins logic polarity                            |
| JU8      | Set per Table 8  | MODE          | Voltage-tracking/power-sequencing/independent operation mode |
| JU9      | Set per Table 9  | ON1           | VOUT1 turn-on delay setting                                  |
| JU10     | Set per Table 10 | ON2           | VOUT2 turn-on delay setting                                  |
| JU11     | Set per Table 11 | ON3           | VOUT3 turn-on delay setting                                  |
| JU12     | None             | ON4           | MAX5930 does not have this pin                               |

To evaluate a triple hot-swap design, channel 4 of the MAX5927 EV kit must be disabled. Perform the following modifications prior to reconfiguring the jumpers:

- 1) Remove surface-mount resistors R24, R25, and R26.
- 2) Install a 1k Ω , 0805 surface-mount resistor at R27.
- 3) Confirm that header J1/pin 7 (ON\_4) does not have an external voltage source applied to it.
- 4) Connect a jumper from the VIN3 input to the VIN4 input.
- 5) To evaluate a quad hot-swap design again, reverse the above steps.

## Table 16. Emulating a MAX5931 Triple Hot-Swap Design (Set Shunt Location per Table)

| JUMPER   | SHUNT LOCATION                         | MAX5931 PIN   | MAX5931 EV KIT MODE EMULATED                                                  |
|----------|----------------------------------------|---------------|-------------------------------------------------------------------------------|
| JU1      | Installed                              | ILIM1         | VOUT1 slow comparator current limit set to 25mV; fixed at 25mV on the MAX5931 |
| JU2      | Installed                              | ILIM2         | VOUT2 slow comparator current limit set to 25mV; fixed at 25mV on the MAX5931 |
| JU3      | Installed                              | ILIM3         | VOUT3 slow comparator current limit set to 25mV; fixed at 25mV on the MAX5931 |
| JU4      | Installed                              | ILIM4         | MAX5931 does not have this pin                                                |
| JU5      | Set per Table 5                        | RTIM          | Startup timer setting delay                                                   |
| JU6      | Set per Table 6 and MAX5931 IC desired | LATCH         | Latched or autoretry mode                                                     |
| JU7      | Set per Table 7 and MAX5931 IC desired | POL           | Status output pins logic polarity                                             |
| JU8      | Set per Table 8                        | MODE          | Voltage-tracking/power-sequencing/independent operation mode                  |
| JU9      | Set per Table 9                        | ON1           | VOUT1 turn-on delay setting                                                   |
| JU10     | Set per Table 10                       | ON2           | VOUT2 turn-on delay setting                                                   |
| JU11     | Set per Table 11                       | ON3           | VOUT3 turn-on delay setting                                                   |
| JU12     | None                                   | ON4           | MAX5930 does not have this pin                                                |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5927 Evaluation Kit

<!-- image -->

Figure 1. MAX5927 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5927 Evaluation Kit

Figure 2. MAX5927 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX5927 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5927 Evaluation Kit

<!-- image -->

Figure 4. MAX5927 EV Kit PC Board Layout-Solder Side

<!-- image -->

Figure 5. MAX5927 EV Kit PC Board Layout-PGND Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5927 Evaluation Kit

Figure 6. MAX5927 EV Kit PC Board Layout-GND Layer 3

<!-- image -->

Figure 7. MAX5927 EV Kit Component Placement Guide-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

14

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600