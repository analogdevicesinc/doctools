<!-- lastmod 2022-08-05 -->
<!-- image -->

## Dual-Slot PCMCIA Analog Power Controller

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX780A provides the power switching and status signals necessary to control two Personal Computer Memory Card International Association (PCMCIA) Release 2.0 card slots.  The MAX780A, used in conjunction with a PC Card Interface Digital Controller, forms a complete, minimum component count PCMCIA interface for palmtop and notebook computers.

The MAX780A incorporates two 0V/+5V/+12V/highimpedance power outputs for flash V PP programming, level  shifters  for  power  MOSFET control of two separate  +3.3V/+5V supplies, and two V PP power-ready status signals.  The MAX780A may be directly connected to the control outputs from a PCMCIA digital controller, or may be configured to use internal edgetriggered registers for connection to the CPU data bus.

The MAX780B has all the features of the MAX780A but omits the reference and V PP valid indicators.  The MAX780C has all the features of the MAX780A but omits the registers for the digital inputs.  The MAX780D omits the reference, the V PP valid  indicators,  and  the digital input registers.

| Part Number   |   Reference & V PP Status Indicators |   Registers for Direct Connection to CPU Data Bus |   Dual V PP Switches & Level Shifters for V CC Switching |
|---------------|--------------------------------------|---------------------------------------------------|----------------------------------------------------------|
| MAX780A       |                                    4 |                                                 4 |                                                        4 |
| MAX780B       |                                      |                                                 4 |                                                        4 |
| MAX780C       |                                    4 |                                                   |                                                        4 |
| MAX780D       |                                      |                                                   |                                                        4 |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Applications

Notebook and Palmtop Computers

Personal Organizers Digital Cameras Handiterminals

Bar-Code Readers

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' SSOP Circuit Fits in 0.09in 2
- ' Smallest Complete Analog Controller for Two PCMCIA (Release 2.0/JEIDA 4.1) PC Card Sockets
- ' Dual V CC Contols and V PP Outputs
- ' Logic-Compatible with Industry-Standard PCMCIA Digital Controllers:
- Intel 82365SL\_DF Fujitsu MB86301 Chips and Technology F8680 Cirrus Logic CL-PD6720
- ' 0V/+5V/+12V/High-Impedance V PP Outputs
- ' Internal 1.6 Ω VPP Power Switches
- ' Dual Voltage 3.3V/5V V CC Operation
- ' VPP Power-Ready Status Signals
- ' 130µA Quiescent Supply Current (3.5µA in Shutdown)
- ' Break-Before-Make Switching

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART        | TEMP. RANGE    | PIN-PACKAGE           |
|-------------|----------------|-----------------------|
| MAX780A CNG | 0°C to +70°C   | 24 Narrow Plastic DIP |
| MAX780ACAG  | 0°C to +70°C   | 24 SSOP               |
| MAX780AC/D  | 0°C to +70°C   | Dice*                 |
| MAX780AENG  | -40°C to +85°C | 24 Narrow Plastic DIP |
| MAX780AEAG  | -40°C to +85°C | 24 SSOP               |

Ordering Information continued on last page.

*  Contact factory for dice specifications.

## \_\_\_\_\_\_\_\_\_\_Typical Operating Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

Call toll free 1-800-998-8800 for free samples or literature.

## Dual-Slot PCMCIA Analog Power Controller

## ABSOLUTE MAXIMUM RATINGS

VCCIN to GND.........................................+7V, -0.3V

VPPIN to GND......................................+13.2V, -0.3V

ADRV5, ADRV3, BDRV5, BDRV3 to GND...(VPPIN + 0.3V), -0.3V

AVPP, BVPP to GND.......................(VPPIN + 0.3V), -0.3V

All Other Pins to GND .....................(VCCIN + 0.3V), -0.3V

Continuous Power Dissipation (T A = +70°C)

20-Pin Plastic DIP (derate 11.11mW/°C above +70°C)......889mW

20-Pin SSOP (derate 8.00mW/°C above +70°C)...........640mW

24-Pin Narrow Plastic DIP (derate 13.33 mW/°C above +70°C).1067mW

24-Pin SSOP (derate 8.00mW/°C above +70°C) .......640mW

Operating Temperature Ranges:

MAX780\_C\_\_......................................0°C to +70°C

MAX780\_E\_\_ ................................... -40°C to +85°C

Storage Temperature Range ...................-65°C to +160°C

Lead Temperature (soldering, 10sec)....................+300°C

Stresses beyond those listed under 'Absolute Maximum Ratings" may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(VCCIN = +5V, VPPIN = +12V, T A = T MIN to T MAX , unless otherwise noted.)

| PARAMETER                                     | CONDITIONS                                   | CONDITIONS                                   |   MIN |   TYP |   MAX | UNITS   |
|-----------------------------------------------|----------------------------------------------|----------------------------------------------|-------|-------|-------|---------|
| POWER REQUIREMENTS                            |                                              |                                              |       |       |       |         |
| VCCIN Input Voltage Range                     |                                              |                                              |  2.85 |       |   5.5 | V       |
| VPPIN Input Voltage Range                     |                                              |                                              |     0 |       |  12.6 | V       |
| VCCIN Supply Current                          | 5V mode                                      | 5V mode                                      |       |   130 |   300 | µA      |
| VCCIN Supply Current                          | 12V or 0V mode                               | 12V or 0V mode                               |       |    60 |       | µA      |
| VPPIN Supply Current                          | VPPIN = 12.6V                                | 12V mode                                     |       |   185 |   450 | µA      |
| VPPIN Supply Current                          | VPPIN = 12.6V                                | 5V mode                                      |       |    10 |       | µA      |
| VCCIN Standby Current                         | SHDN = 0V, all logic inputs at GND or VCCIN  | SHDN = 0V, all logic inputs at GND or VCCIN  |       |   3.5 |    10 | µA      |
| VPPIN Standby Current                         | SHDN = 0V, VPPIN = 4.75V                     | SHDN = 0V, VPPIN = 4.75V                     |       |   0.1 |     1 | µA      |
| DC CHARACTERISTICS                            |                                              |                                              |       |       |       |         |
| AVPP, BVPP Switch Resistance                  | VPPIN = 11.4V, 0mA < I LOAD < 60mA, 12V mode | VPPIN = 11.4V, 0mA < I LOAD < 60mA, 12V mode |       |   1.6 |  2.45 | Ω       |
| AVPP, BVPP Switch Resistance                  | VCCIN = 4.5V, 0mA < I LOAD < 1mA, 5V mode    | VCCIN = 4.5V, 0mA < I LOAD < 1mA, 5V mode    |       |    30 |    50 | Ω       |
| AVPP, BVPP Switch Resistance                  | VPPIN = 11.4V, 0mA < I LOAD < 1mA, 0V mode   | VPPIN = 11.4V, 0mA < I LOAD < 1mA, 0V mode   |       |   140 |   300 | Ω       |
| ADRV3, ADRV5, BDRV3, BDRV5 Leakage Current    | High-impedance mode                          | High-impedance mode                          |       |     1 |    50 | nA      |
| ADRV3, ADRV5, BDRV3, BDRV5 Output Voltage Low | I LOAD = 1mA                                 | I LOAD = 1mA                                 |       |   0.1 |   0.4 | V       |
| VOLTAGE REFERENCE (MAX780A and MAX780C        | only)                                        |                                              |       |       |       |         |
| REF Voltage                                   | I LOAD = 0µA                                 | MAX780_C                                     |  1.22 |  1.25 |  1.28 | V       |
| REF Voltage                                   |                                              | MAX780_E                                     |  1.21 |  1.25 |  1.29 | V       |
| REF Temperature Coefficient                   |                                              |                                              |       |    20 |       | ppm/°C  |
| REF Line Regulation                           | VCCIN = 2.85V to 5.5V                        | VCCIN = 2.85V to 5.5V                        |       |   0.5 |       | mV/V    |
| REF Load Regulation                           | I LOAD = 0µA to 100µA                        | I LOAD = 0µA to 100µA                        |       |     2 |       | µV/µA   |
| AGPI , BGPI Power-Ready Threshold             | MAX780_C                                     | MAX780_C                                     | 10.72 | 11.05 | 11.40 | V       |
| AGPI , BGPI Power-Ready Threshold             | MAX780_E                                     | MAX780_E                                     | 10.68 | 11.05 | 11.40 | V       |
| AGPI , BGPI Power-Ready Hysteresis            | 12V mode                                     | VPPIN fl                                     |       |   130 |       | mV      |
| AGPI , BGPI Power-Ready Hysteresis            |                                              | VPPIN ›                                      |       |     0 |       | mV      |

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Dual-Slot PCMCIA Analog Power Controller

## ELECTRICAL CHARACTERISTICS (continued)

(VCCIN = +5V, VPPIN = +12V, T A = T MIN to T MAX , unless otherwise noted.)

| PARAMETER                     | CONDITIONS    | MIN           | TYP           | MAX           | UNITS         |
|-------------------------------|---------------|---------------|---------------|---------------|---------------|
| LOGIC SECTION                 | LOGIC SECTION | LOGIC SECTION | LOGIC SECTION | LOGIC SECTION | LOGIC SECTION |
| Logic Input Leakage Current   |               |               |               | 1             | µA            |
| Logic Input High              |               | 2.4           |               |               | V             |
| Logic Input Low               |               |               |               | 0.8           | V             |
| AGPI , BGPI Logic Output High | I LOAD = 1mA  | VCCIN -0.4    | VCCIN -0.2    |               | V             |
| AGPI , BGPI Logic Output Low  | I LOAD = 1mA  |               | 0.06          | 0.4           | V             |

## TIMING CHARACTERISTICS - MAX780A and MAX780B only

(VCCIN = +3.3V or +5.0V, VPPIN = +12.0V, see Figure 4, T A = T MIN to T MAX , unless otherwise noted.)

| PARAMETER                        | SYMBOL   | CONDITIONS   |   MIN |   TYP | MAX   | UNITS   |
|----------------------------------|----------|--------------|-------|-------|-------|---------|
| WR Pulse Width                   | t LA     |              |   125 |       |       | ns      |
| _VPP_, _VCC_ Setup Time          | t AS     |              |   100 |       |       | ns      |
| _VPP_, _VCC_ Hold Time           | t AH     | (Note 1)     |     0 |       |       | ns      |
| _VCC_ to _DRV_ Propagation Delay |          |              |       |    50 |       | ns      |

Note 1: Guaranteed by design, not production tested.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics

AVPP SWITCHING

<!-- image -->

5µs/div

C1 = C2 = 0V, AVPP0 = +5V, CIN = 10µF, C A

= 0.1µF

AVCC SWITCHING

<!-- image -->

2ms/div

C1 = +5V, C2 = 0V, AVCC0 = +5V, M1 = M2 = 3055EL,

R LOAD

= 130

Ω

, C C = 1µF

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 3

MAX780

## Dual-Slot PCMCIA Analog Power Controller

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## 4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Dual-Slot PCMCIA Analog Power Controller

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description

| PIN         | PIN     | NAME         | FUNCTION                                                                                                                                                                                                                                                                                                                          |
|-------------|---------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MAX780A/B/C | MAX780D |              |                                                                                                                                                                                                                                                                                                                                   |
| 1           |         | C2           | Pin-strap input that selects edge-triggered register or direct digital inputs. Tying C2 to VCCIN makes the logic inputs edge triggered; inputs to pins 4-11 are clocked in on the rising edge of WR . Tying C2 to GND allows control signals to be directly applied to the logic inputs on pins 4-11. Connect to GND for MAX780C. |
| 2           | 1       | C1           | Pin-strap input that selects one of two logic decode modes for the digital inputs. See Tables 1-3.                                                                                                                                                                                                                                |
| 3           |         | WR           | Write pulse input. When C2 is tied to VCCIN, a rising edge on WR clocks in the V CC and V PP enables. When C2 is tied to GND, inputs to WR have no effect. Connect to GND for MAX780C.                                                                                                                                            |
| 4, 5        | 2, 3    | AVPP1, AVPP0 | Logic inputs that control the voltage on AVPP.                                                                                                                                                                                                                                                                                    |
| 6, 7        | 4, 5    | BVPP1, BVPP0 | Logic inputs that control the voltage on BVPP.                                                                                                                                                                                                                                                                                    |
| 8, 9        | 6, 7    | AVCC1, AVCC0 | Logic inputs that control the state of the MOSFET gate drivers ADRV3 and ADRV5.                                                                                                                                                                                                                                                   |
| 10, 11      | 8, 9    | BVCC1, BVCC0 | Logic inputs that control the state of the MOSFET gate drivers BDRV3 and BDRV5.                                                                                                                                                                                                                                                   |
| 12, 13      | 10, 11  | BDRV5, BDRV3 | Open-drain gate driver outputs that control the MOSFETs that switch the V CC pin of slot B to 0V, 3.0V/3.3V, or 5V.                                                                                                                                                                                                               |
| 14, 15      | 12, 13  | ADRV5, ADRV3 | Open-drain gate driver outputs that control the MOSFETs that switch the V CC pin of slot A to 0V, 3.0V/3.3V, or 5V.                                                                                                                                                                                                               |
| 16          |         | BGPI         | Logic-level power-ready output that stays low as long as BVPP is greater than 11.05V (MAX780A and MAX780C only). Make no connection to this pin for MAX780B.                                                                                                                                                                      |
| 17          |         | AGPI         | Logic-level power-ready output that stays low as long as AVPP is greater than 11.05V (MAX780A and MAX780C only). Make no connection to this pin for MAX780B.                                                                                                                                                                      |
| 18          | 14      | SHDN         | Logic input that shuts the MAX780 down to a low supply-current state when brought low. Asserting SHDN forces ADRV3, BDRV3, ADRV5, BDRV5, REF, AGPI , and BGPI low. All V PP inputs and outputs are functional for either state of SHDN . Program AVPP and BVPP to 0V for lowest power consumption.                                |
|             | 15      | N.C.         | No connect. Not internally connected.                                                                                                                                                                                                                                                                                             |
| 19          |         | REF          | 1.25V reference voltage output (MAX780A and MAX780C only). Make no connection to this pin for MAX780B.)                                                                                                                                                                                                                           |
| 20          | 16      | BVPP         | Switched output that provides 0V, 5V, or 12V to the V PP pins of slot B.                                                                                                                                                                                                                                                          |
| 21          | 17      | AVPP         | Switched output that provides 0V, 5V, or 12V to the V PP pins of slot A.                                                                                                                                                                                                                                                          |
| 22          | 18      | VCCIN        | +5V power input                                                                                                                                                                                                                                                                                                                   |
| 23          | 19      | VPPIN        | +12V power input. VPPIN can have 0V or 5V applied as long as VCCIN = 5V.                                                                                                                                                                                                                                                          |
| 24          | 20      | GND          | Ground                                                                                                                                                                                                                                                                                                                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## Dual-Slot PCMCIA Analog Power Controller

Table 1.  AVPP Control Logic

|   C1 |   AVPP1 |   AVPP0 | AVPP   |
|------|---------|---------|--------|
|    0 |       0 |       0 | 0V     |
|    0 |       0 |       1 | VCCIN  |
|    0 |       1 |       0 | VPPIN  |
|    0 |       1 |       1 | High-Z |
|    1 |       0 |       0 | 0V     |
|    1 |       0 |       1 | 0V     |
|    1 |       1 |       0 | VCCIN  |
|    1 |       1 |       1 | VPPIN  |

Table 2.  BVPP Control Logic

|   C1 |   BVPP1 |   BVPP0 | BVPP   |
|------|---------|---------|--------|
|    0 |       0 |       0 | 0V     |
|    0 |       0 |       1 | VCCIN  |
|    0 |       1 |       0 | VPPIN  |
|    0 |       1 |       1 | High-Z |
|    1 |       0 |       0 | 0V     |
|    1 |       0 |       1 | 0V     |
|    1 |       1 |       0 | VCCIN  |
|    1 |       1 |       1 | VPPIN  |

Table 3.  ADRV3 and ADRV5 Control Logic

|   C1 |   AVCC1 |   AVCC0 | ADRV3   | ADRV5   |
|------|---------|---------|---------|---------|
|    0 |       0 |       0 | 0V      | 0V      |
|    0 |       0 |       1 | Hi-Z    | 0V      |
|    0 |       1 |       0 | 0V      | Hi-Z    |
|    0 |       1 |       1 | 0V      | 0V      |
|    1 |       0 |       0 | 0V      | 0V      |
|    1 |       0 |       1 | 0V      | 0V      |
|    1 |       1 |       0 | 0V      | Hi-Z    |
|    1 |       1 |       1 | Hi-Z    | 0V      |

Table 4.  BDRV3 and BDRV5 Control Logic

|   C1 |   BVCC1 |   BVCC0 | BDRV3   | BDRV5   |
|------|---------|---------|---------|---------|
|    0 |       0 |       0 | 0V      | 0V      |
|    0 |       0 |       1 | Hi-Z    | 0V      |
|    0 |       1 |       0 | 0V      | Hi-Z    |
|    0 |       1 |       1 | 0V      | 0V      |
|    1 |       0 |       0 | 0V      | 0V      |
|    1 |       0 |       1 | 0V      | 0V      |
|    1 |       1 |       0 | 0V      | Hi-Z    |
|    1 |       1 |       1 | Hi-Z    | 0V      |

6

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## VPP Switching

All four versions (A, B, C, and D) of the MAX780 allow simple switching of PCMCIA card V PP to  0V,  5V,  and 12V.  On-chip power MOSFETs connect AVPP and BVPP to either GND, VCCIN, or VPPIN.  The AVPP0 and AVPP1 control logic inputs determine the state of

AVPP.  Likewise, BVPP0 and BVPP1 control BVPP. To prevent V PP overshoot due to parasitic inductance in the +12V supply, the VPPIN bypass capacitor (C IN ) should be 10 times greater than the capacitance from AVPP (C A ) or BVPP (C B ) to GND.  Hence, when C A and C B are 0.1µF, C IN should be 1.0µF. The AGPI and BGPI status outputs signal when the V PP lines  are  valid. AGPI goes low when AVPP exceeds 11.05V; BGPI goes low when BVPP exceeds 11.05V. The status outputs and the reference are only active when SHDN is high.

Pulling SHDN low puts the MAX780 into a low supplycurrent mode and disables the reference and the AGPI and BGPI status outputs.  The V CC level shifters ADRV5, ADRV3, BDRV5, BDRV3 are all forced low when SHDN is low.  V PP switching is not affected by the state of SHDN .  Program AVPP and BVPP to 0V for lowest  power consumption when SHDN is  low.    Wait  at least 200µs after bringing the MAX780 out of shutdown before checking AGPI or BGPI since the reference needs time to stabilize.

## VCC Switching

The MAX780 contains level shifters that simplify driving external power MOSFETs to switch PCMCIA card V CC to 3.3V and 5V.  While a PCMCIA card is being inserted into the socket, the V CC pins on the card edge connector should be powered down to 0V so that 'hot insertion'  does not damage the PCMCIA card.  The simplest way to accomplish this is to pull out a mechanical switch before the PCMCIA card is inserted. The mechanical switch can be pushed in only when the card has been fitted snugly into its socket.  The MAX780 Detailed Operating Circuit shows this method. In the Detailed Operating Circuit, (with the mechanical interlock switch closed) the PCMCIA card V CC cannot be pulled more than a diode drop below 3.3V.  The Nchannel power MOSFET that connects V CC to 3.3V has its drain tied to V CC and its source tied to 3.3V, so that its  body diode prevents the card's V CC from falling to 0V.  If it were rotated so that the source connected to V CC , then applying 5V to V CC would short the 5V sup-

ply to the 3.3V supply via the MOSFET's body diode.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Dual-Slot PCMCIA Analog Power Controller

If  a  mechanical interlock switch cannot be used, an extra  MOSFET must be added, as shown in Figure 1. Placing two N-channel MOSFETs in series with their body diodes facing in opposite directions allows V CC to be shut down to 0V without using a mechanical switch.

## Switching Speed

The drive to the external MOSFETs ensures that the 3.3V supply is never connected to the 5V supply.  This is  done  by  turning  these  transistors  off  quickly  (using active pull-down circuitry), and on more slowly (using external pull-up resistors).  The turn-on delay depends on the value of the pull-up resistors, and on the gate capacitance of the switching transistors.  To save power, use high-value resistors of up to 10M Ω . However, note that high-value resistors will increase the time it takes to turn on the switched supplies

## \_\_\_\_\_\_\_\_\_\_Applications Information

The MAX780 can be used with PCMCIA controllers other than the Intel 82365SL DF.  Figure 2 shows the logic  connections to the Cirrus Logic CL-PD6720 PCMCIA Host Adapter.

The MAX780 does not need a PCMCIA controller to function.  Tie C2 to VCCIN to allow direct V CC and V PP control from the system bus.  Figure 3 shows the connection to the system bus.  Figure 4 shows the timing requirements.

## Reading from a PCMCIA Port without Using the V PP Supply

In  the Typical  Operating  Circuit, V CC is  switched  to the  PCMCIA ports using the 12V V PP supply, which provides the gate drive needed to turn on the external N-channel MOSFETs.  In some cases, the high-power V PP supply is only available when information has to be written to the PCMCIA port, not when data is being read.  The V PP supply may have a quiescent current of several milliamps, so it consumes more power than is necessary simply to provide gate drive for some FETs.

<!-- image -->

In these circumstances, a separate gate-drive supply is needed to turn on the external FETs.  Ideally it should have a low quiescent current and be capable of being turned off when read access to the PCMCIA port is not required.  Doubling or tripling charge pumps can easily be built using a convenient clock signal from elsewhere in the system.  Buffering the clock signal with a suitable gate provides on/off control, as shown in Figure 5.

When driven at 100kHz or more by a CMOS gate powered from 5V, the doubler circuit outputs 8.6V when loaded with 25k Ω (equivalent to four 100k Ω pull-up resistors).  Under similar conditions, but when running from 3.3V, the tripler circuit produces 7.9V.

Figure 1. Using an Extra MOSFET to Replace the Mechanical Interlock

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Dual-Slot PCMCIA Analog Power Controller

Figure 2. Logic Connections to CL-PD6720

<!-- image -->

Figure 3.  Direct Connection to System Bus

<!-- image -->

8

Figure 4. C2 = VCCIN Mode Timing

<!-- image -->

Figure 5.  Alternative Gate-Drive Charge-Pump Supplies

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Dual-Slot PCMCIA Analog Power Controller

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 9

## Dual-Slot PCMCIA Analog Power Controller

<!-- image -->

## 10 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Dual-Slot PCMCIA Analog Power Controller

## \_\_Ordering Information (continued)

| PART        | TEMP. RANGE    | PIN-PACKAGE           |
|-------------|----------------|-----------------------|
| MAX780B CNG | 0°C to +70°C   | 24 Narrow Plastic DIP |
| MAX780BCAG  | 0°C to +70°C   | 24 SSOP               |
| MAX780BC/D  | 0°C to +70°C   | Dice*                 |
| MAX780BENG  | -40°C to +85°C | 24 Narrow Plastic DIP |
| MAX780BEAG  | -40°C to +85°C | 24 SSOP               |
| MAX780C CNG | 0°C to +70°C   | 24 Narrow Plastic DIP |
| MAX780CCAG  | 0°C to +70°C   | 24 SSOP               |
| MAX780CC/D  | 0°C to +70°C   | Dice*                 |
| MAX780CENG  | -40°C to +85°C | 24 Narrow Plastic DIP |
| MAX780CEAG  | -40°C to +85°C | 24 SSOP               |
| MAX780D CPP | 0°C to +70°C   | 20 Plastic DIP        |
| MAX780DCAP  | 0°C to +70°C   | 20 SSOP               |
| MAX780DC/D  | 0°C to +70°C   | Dice*                 |
| MAX780DEPP  | -40°C to +85°C | 20 Plastic DIP        |
| MAX780DEAP  | -40°C to +85°C | 20 SSOP               |

* Contact factory for dice specifications.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Package Information

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

11

MAX780

## Dual-Slot PCMCIA Analog Power Controller

<!-- image -->

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

12

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600

© 1993 Maxim Integrated Products