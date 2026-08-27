<!-- lastmod 2022-08-04 -->
## MAX690A/MAX692A/ MAX802L/MAX802M/ MAX805L

## General Description

The  MAX690A/MAX692A/MAX802L/MAX802M/MAX805L reduce  the  complexity  and  number  of  components required for power-supply monitoring and batterycontrol  functions  in  microprocessor  (μP)  systems.  They significantly  improve  system  reliability  and  accuracy compared to separate ICs or discrete components.

These parts provide four functions:

- 1)  A  reset  output  during  power-up,  power-down,  and brownout conditions.
- 2) Battery-backup switching for CMOS RAM, CMOS μP, or other low-power logic.
- 3) A  reset  pulse  if  the  optional  watchdog  timer  has  not been toggled within 1.6s.
- 4)  A  1.25V  threshold  detector  for  power-fail  warning  or low-battery  detection,  or  to  monitor  a  power  supply other than +5V.

The  parts  differ  in  their  reset-voltage  threshold  levels  and reset outputs. The MAX690A/MAX802L/MAX805L generate a  reset  pulse  when  the  supply  voltage  drops  below  4.65V, and the MAX692A/MAX802M generate a reset below 4.40V. The  MAX802L/MAX802M  guarantee  power-fail  accuracies to ±2%. The MAX805L is the same as the MAX690A except that RESET is provided instead of RESET .

All  parts  are  available  in  8-pin  DIP  and  SO  packages. The  MAX690A/MAX802L  are  pin  compatible  with  the MAX690 and MAX694. The MAX692A/MAX802M are pin compatible with the MAX692.

## Applications

- Battery-Powered Computers and Controllers
- Intelligent Instruments
- Critical μP Power Monitoring

## Typical Operating Circuit

<!-- image -->

## Microprocessor Supervisory Circuits

## Features

- Precision Supply Voltage Monitor: 4.65V for MAX690A/MAX802L/MAX805L 4.40V for MAX692A/MAX802M
- Reset Time Delay: 200ms
- Watchdog Timer: 1.6s Timeout
- Battery-Backup Power Switching
- 200μA Quiescent Supply Current
- 50nA Quiescent Supply Current in BatteryBackup Mode
- Voltage Monitor for Power-Fail or Low-Battery Warning
- Power-Fail Accuracy Guaranteed to ±2% (MAX802L/M)
- Guaranteed RESET Assertion to V CC = 1V
- 8-Pin SO and DIP Packages

## Ordering Information

| PART        | TEMP RANGE      | PIN-PACKAGE   |
|-------------|-----------------|---------------|
| MAX690A CPA | 0°C to +70°C    | 8 Plastic DIP |
| MAX690ACSA  | 0°C to +70°C    | 8 SO          |
| MAX690AC/D  | 0°C to +70°C    | Dice*         |
| MAX690AEPA  | -40°C to +85°C  | 8 Plastic DIP |
| MAX690AESA  | -40°C to +85°C  | 8 SO          |
| MAX690AMJA  | -55°C to +125°C | 8 CERDIP**    |

Ordering Information continued at end of data sheet.

*Dice are specified at T A  = +25°C

**Contact  factory  for  availability  and  processing  to  MIL  STD883.  Devices  in  PDIP  and  SO  packages  are  available  in  both leaded  and  lead(Pb)-free  packaging.  Specify  lead  free  by adding  the  +  symbol  at  the  end  of  the  part  number  when ordering. Lead free not available for CERDIP package.

## Pin Configurations

<!-- image -->

<!-- image -->

## MAX690A/MAX692A/ MAX802L/MAX802M/ MAX805L

## Absolute Maximum Ratings

Note 1: The input voltage limits on PFI and WDI may be exceeded if the current into these pins is limited to less than 10mA.

| Terminal Voltage (with respect to GND) V CC ...................................................................-0.3V to V BATT ...............................................................-0.3V to All Other Inputs (Note 1) .......................... -0.3V to (V CC + Input Current V CC ............................................................................... V BATT ............................................................................. GND................................................................................ Output Current V OUT .............................. Short-Circuit Protected for up to   | Rate of Rise, V CC , V BATT ..............................................100V/μs Continuous Power Dissipation Plastic DIP (derate 9.09mW/°C above +70°C)............ 727mW SO (derate 5.88mW/°C above +70°C)....................... 471mW CERDIP (derate 8.00mW/°C above +70°C)................ 640mW Operating Temperature Ranges: MAX69_AC_ _, MAX80_ _ C_ _........................ 0°C to +70°C MAX69_AE_ _, MAX80_ _ E_ _ ................... -40°C to +85°C MAX69_AMJA, MAX805LMJA..................... -55°C to +125°C Storage Temperature Range............................ -65°C to +160°C   |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| +6.0V                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| +6.0V                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.3V)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 200mA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 50mA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 20mA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 10s                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| All Other Outputs............................................................ 20mA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Lead Temperature (soldering, 10s) ................................ +300°C                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## Electrical Characteristics

(V CC = 4.75V to 5.5V for MAX690A/MAX802L/MAX805L, V CC = 4.5V to 5.5V for MAX692A/MAX802M, V BATT  = 2.8V, T A  = T MIN to T MAX , unless otherwise noted.)

| PARAMETER                                          | SYMBOL   | CONDITIONS                          | CONDITIONS                          | MIN          | TYP           |   MAX | UNITS   |
|----------------------------------------------------|----------|-------------------------------------|-------------------------------------|--------------|---------------|-------|---------|
| Operating Voltage Range, V CC , V BATT (Note 2)    |          | MAX69_AC, MAX802_C                  | MAX69_AC, MAX802_C                  | 1.0          |               |   5.5 | V       |
| Operating Voltage Range, V CC , V BATT (Note 2)    |          | MAX805LC                            | MAX805LC                            | 1.1          |               |   5.5 | V       |
| Operating Voltage Range, V CC , V BATT (Note 2)    |          | MAX69_AE/M, MAX80_ _E               | MAX69_AE/M, MAX80_ _E               | 1.2          |               |   5.5 | V       |
| Supply Current (Excluding I OUT )                  | I SUPPLY | MAX69_AC, MAX802_C                  | MAX69_AC, MAX802_C                  |              | 200           |   350 | µA      |
| Supply Current (Excluding I OUT )                  |          | MAX69_AE/M, MAX802_E, MAX805LE/M    | MAX69_AE/M, MAX802_E, MAX805LE/M    |              | 200           |   500 | µA      |
| I SUPPLY in Battery-Backup Mode (Excluding I OUT ) |          | V CC = 0V, V BATT = 2.8V            | T A = +25°C                         |              | 0.05          |   1.0 | µA      |
| I SUPPLY in Battery-Backup Mode (Excluding I OUT ) |          | V CC = 0V, V BATT = 2.8V            | T A = T MIN to T MAX                |              |               |   5.0 | µA      |
| VBATT Standby Current (Note 3)                     |          | 5.5V > V CC > V BATT +0.2V          | T A = +25°C                         | -0.1         |               |  0.02 | µA      |
| VBATT Standby Current (Note 3)                     |          | 5.5V > V CC > V BATT +0.2V          | T A = T MIN to T MAX                | -1.0         |               |  0.02 | µA      |
| V OUT Output                                       |          | I OUT = 5mA                         | I OUT = 5mA                         | V CC - 0.05  | V CC - 0.025  |       | V       |
| V OUT Output                                       |          | I OUT = 50mA                        | I OUT = 50mA                        | V CC - 0. 5  | V CC - 0. 25  |       | V       |
| V OUT in Battery-Backup Mode                       |          | I OUT = 250μA, V CC < V BATT - 0.2V | I OUT = 250μA, V CC < V BATT - 0.2V | V BATT - 0.1 | V BATT - 0.02 |       | V       |
| Battery Switch Threshold, V CC to V BATT           |          | V CC < V RT                         | Power-up                            |              | 20            |       | mV      |
| Battery Switch Threshold, V CC to V BATT           |          | V CC < V RT                         | Power-down                          |              | -20           |       | mV      |
| Battery Switchover Hysteresis                      |          |                                     |                                     |              | 40            |       | mV      |
| Reset Threshold                                    | V RT     | MAX690A, MAX802L, MAX805L           | MAX690A, MAX802L, MAX805L           | 4.50         | 4.65          |  4.75 | V       |
| Reset Threshold                                    | V RT     | MAX692A, MAX802M                    | MAX692A, MAX802M                    | 4.25         | 4.40          |  4.50 | V       |
| Reset Threshold                                    | V RT     | MAX802L, T A = +25°C, V CC falling  | MAX802L, T A = +25°C, V CC falling  | 4.55         |               |  4.70 | V       |
| Reset Threshold                                    |          | MAX802M, T A = +25°C, V CC falling  | MAX802M, T A = +25°C, V CC falling  | 4.30         |               |  4.45 | V       |
| Reset Threshold Hysteresis                         |          |                                     |                                     | 40           | 40            |       | mV      |
| Reset Pulse Width                                  | t RS     |                                     |                                     | 140          | 200           |   280 | ms      |

│

## Microprocessor Supervisory Circuits

## MAX690A/MAX692A/ MAX802L/MAX802M/ MAX805L

## Electrical Characteristics (continued)

(V CC = 4.75V to 5.5V for MAX690A/MAX802L/MAX805L, V CC = 4.5V to 5.5V for MAX692A/MAX802M, V BATT  = 2.8V, T A  = T MIN to T MAX , unless otherwise noted.)

| PARAMETER                    | SYMBOL   | CONDITIONS                                        |                                                   | MIN        | TYP        |   MAX | UNITS   |
|------------------------------|----------|---------------------------------------------------|---------------------------------------------------|------------|------------|-------|---------|
|                              |          | I SOURCE = 800μA                                  | I SOURCE = 800μA                                  |            |            |       | V       |
|                              |          | I SINK = 3.2mA                                    | I SINK = 3.2mA                                    |            |            |   0.4 | V       |
| RESET Output Voltage         |          | MAX69_AC, MAX802_C, V CC = 1.0V I SINK = 50μA     | MAX69_AC, MAX802_C, V CC = 1.0V I SINK = 50μA     |            |            |   0.3 | V       |
|                              |          | MAX69_AE/M, MAX802_E, V CC = 1.2V, I SINK = 100μA | MAX69_AE/M, MAX802_E, V CC = 1.2V, I SINK = 100μA |            |            |   0.3 | V       |
| RESET Output Voltage         |          | MAX805LC, I SOURCE = 4μA, V CC = 1.1V             | MAX805LC, I SOURCE = 4μA, V CC = 1.1V             | 0.8        |            |       | V       |
| RESET Output Voltage         |          | MAX805LE/M, I SOURCE = 4μA, V CC = 1.2V           | MAX805LE/M, I SOURCE = 4μA, V CC = 1.2V           | 0.9        |            |       | V       |
| RESET Output Voltage         |          | MAX805L, I SOURCE = 800μA                         | MAX805L, I SOURCE = 800μA                         | V CC - 1.5 | V CC - 1.5 |       | V       |
| RESET Output Voltage         |          | MAX805L, I SINK = 3.2mA                           | MAX805L, I SINK = 3.2mA                           |            |            |   0.4 | V       |
| Watchdog Timeout             | t WD     | 1.00                                              | 1.00                                              |            | 1.60       |  2.25 | s       |
| WDI Pulse Width              | t WP     | V IL = 0.4V, V IH = (0.8) (V CC )                 | V IL = 0.4V, V IH = (0.8) (V CC )                 | 50         |            |       | ns      |
| WDI Input Threshold (Note 4) |          | V CC = 5V                                         | Logic low                                         |            |            |   0.8 | V       |
| WDI Input Threshold (Note 4) |          | V CC = 5V                                         | Logic high                                        | 3.5        |            |       | V       |
| WDI Input Current            |          | WDI = V CC                                        | WDI = V CC                                        |            | 50         |   150 | µA      |
| WDI Input Current            |          | WDI = 0V                                          | WDI = 0V                                          | -150       | -50        |       | µA      |
| PFI Input Threshold          |          | MAX69_A, MAX805L, V CC = 5V                       | MAX69_A, MAX805L, V CC = 5V                       | 1.20       | 1.25       |  1.30 | V       |
| PFI Input Threshold          |          | MAX802_C/E, V CC = 5V                             | MAX802_C/E, V CC = 5V                             | 1.225      | 1.250      | 1.275 | V       |
| PFI Input Current            |          | -25                                               | -25                                               |            | 0.01       |    25 | nA      |
| PFO Output Voltage           |          | I SOURCE = 800μA                                  | I SOURCE = 800μA                                  | V CC - 1.5 | V CC - 1.5 |       | V       |
| PFO Output Voltage           |          | I SINK = 3.2mA                                    | I SINK = 3.2mA                                    | 0.4        | 0.4        |   0.4 | V       |

## Microprocessor Supervisory Circuits

│

## MAX690A/MAX692A/ MAX802L/MAX802M/ MAX805L

## Typical Operating Characteristics

<!-- image -->

│

## Microprocesor Supervisory Circuits

## MAX690A/MAX692A/ MAX802L/MAX802M/ MAX805L

## Pin Description

| PIN                             | PIN     | NAME   |                                                                                                                                                                                                                                                                                                                                                              |
|---------------------------------|---------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MAX690A/MAX692A MAX802L/MAX802M | MAX805L | NAME   | FUNCTION                                                                                                                                                                                                                                                                                                                                                     |
| 1                               | 1       | V OUT  | Supply Output for CMOS RAM. When V CC is above the reset threshold, V OUT connects to V CC through a P-channel MOSFET switch. When V CC is below the reset threshold, the higher of V CC or V BATT will be connected to V OUT .                                                                                                                              |
| 2                               | 2       | V CC   | +5V Supply Input                                                                                                                                                                                                                                                                                                                                             |
| 3                               | 3       | GND    | Ground                                                                                                                                                                                                                                                                                                                                                       |
| 4                               | 4       | PFI    | Power-Fail Comparator Input. When PFI is less than 1.25V, PFO goes low. Connect PFI to GND or V CC when not used.                                                                                                                                                                                                                                            |
| 5                               | 5       | PFO    | Power-Fail Output. When PFI is less than 1.25V, PFO goes low; otherwise PFO stays high.                                                                                                                                                                                                                                                                      |
| 6                               | 6       | WDI    | Watchdog Input. If WDI remains high or low for 1.6sec, the internal watchdog timer runs out and reset is triggered. If WDI is left floating or connected to a high-impedance three-state buffer, the watchdog feature is disabled. The internal watchdog timer clears whenever reset is asserted, WDI is three-stated, or WDI sees a rising or falling edge. |
| 7                               | 7       | RESET  | Reset Output. Whenever RESET is triggered, it pulses low for 200ms. It stays low when V CC is below the reset threshold (4.65V in the MAX690A/MAX802L and 4.4V in the MAX692A/MAX802M) and remains low for 200ms after V CC rises above the reset threshold. A watchdog timeout also triggers RESET .                                                        |
| -                               | -       | RESET  | Active-High Reset Output is the inverse of RESET . When RESET is asserted, the RESET output voltage = V CC or V BATT , whichever is higher.                                                                                                                                                                                                                  |
| 8                               | 8       | V BATT | Backup-Battery Input. When V CC falls below the reset threshold, V BATT will be switched to V OUT if V BATT is 20mV greater than V CC . When V CC rises to 20mV above V BATT , V OUT will be reconnected to V CC . The 40mV hysteresis prevents repeated switching if V CC falls slowly.                                                                     |

## Microprocessor Supervisory Circuits

## MAX690A/MAX692A/ MAX802L/MAX802M/ MAX805L

Figure 1. Block Diagram

<!-- image -->

## Detailed Description

## Reset Output

A  micropr ocessor's  (μP's)  reset  input  starts  the  μP  in a  known  state.  When  the  μP  is  in  an  unknown  state, it  should  be  held  in  reset.  The  MAX690A/MAX692A/ MAX802L/MAX802M  assert  reset  during  power-up  and prevent  code  execution  errors  during  power-down  or brownout conditions.

On power-up, once  V CC reaches 1V, RESET is guaranteed  to  be  a  logic  low.  As  V CC rises, RESET remains  low.  When  V CC exceeds  the  reset  threshold, an  internal  timer  keeps  RESET  low  for  a  time  equal  to the  reset  pulse  width;  after  this  interval, RESET goes high  (Figure  2).  If  a  brownout  condition  occurs  (if  V CC dips  below  the  reset  threshold), RESET is  triggered. Each time RESET is  triggered, it stays low for the reset pulse width interval. Any time V CC goes below the reset threshold, the internal timer restarts the pulse. If a brownout condition  interrupts  a  previously  initiated  reset  pulse, the reset pulse continues for another 200ms. On powerdown,  once  V CC goes  below  the  threshold, RESET is guaranteed to be logic low until V CC droops below 1V.

RESET is also triggered by a watchdog timeout. If a high or low is continuously applied to the WDI pin for 1.6sec, RESET pulses  low. As  long  as RESET is  asserted,  the

## Microprocessor Supervisory Circuits

Figure 2. Timing Diagram

<!-- image -->

watchdog  timer  remains  clear.  When RESET comes high, the watchdog resumes timing and must be serviced within 1.6sec. If WDI is tied high or low, a RESET pulse is triggered every 1.8s (t WD plus t RS).

The MAX805L active-high RESET output  is  the  inverse of the MAX690A/MAX692A/MAX802L/MAX802M RESET output, and is guaranteed to be valid with V CC down to 1.1V. Some μPs, such as Intel's 80C51, require an activehigh reset pulse.

## Watchdog Input

The watchd og circuit monitors the μP's activity. If the μP does not toggle the watchdog input (WDI) within 1.6sec, a  reset  pulse  is  triggered.  The  internal  1.6sec  timer  is cleared by either a reset pulse or by open circuiting the WDI input. As long as reset is asserted or the WDI input is open circuited, the timer remains cleared and does not count. As soon as reset is released or WDI is driven high or low, the timer starts counting. It can detect pulses as short as 5 0ns.

## Power-Fail Comparator

The PFI input is compared to an internal 1.25V reference. If  PFI  is  less  than  1.25V, PFO goes  low.  The  powerfail  comparator  is  intended  for  use  as  an  undervoltage detector to signal a failing power supply; it need not be

│

## MAX690A/MAX692A/ MAX802L/MAX802M/ MAX805L

Figure 3. Backup-Battery Switchover Block Diagram

<!-- image -->

dedicated  to  this  f unction  though,  as  it  is  completely separate from the rest of the circuitry. The external volt -age divider drives PFI to sense the unregulated DC input to the +5V regulator (see Typical Operating Circuit ). The voltage-divider ratio can be chosen such that the voltage at  PFI  falls  below  1.25V  just  before  the  +5V  regulator drops out. PFO then  triggers  an  interrupt  which  signals the μP to prepare for power-down.

To conserve backup-battery power, the power-fail detector comparator is turned off and PFO is  forced low when V BATT  connects to V OUT .

## Backup-Battery Switchover

In  the  event  of  a  brownout  or  power  failure,  it  may  be necessary to preserve the contents of RAM. With a back -up battery installed  at  V BATT ,  the  devices  automatically switch RAM to backup power when V CC fails.

As  long  as  V CC exceeds  the  reset  threshold,  V OUT connects  to  V CC through  a  5Ω  PMOS  power  switch. Once VCC falls below the reset threshold, V CC or V BATT (whichever  is  higher)  switches  to  V OUT .  Unlike  the MAX690/MAX692,  the  MAX690A/MAX692A/MAX802L/

## Microprocessor Supervisory Circuits

Figure 4. Using a SuperCap as a Backup Power Source with a MAX690A/MAX802L/MAX805L and a +5V ±5% Supply

<!-- image -->

## Table 1. Wiper Position and Attenuation

| SIGNAL   | STATUS                                                                                               |
|----------|------------------------------------------------------------------------------------------------------|
| V CC     | Disconnected from V OUT                                                                              |
| V OUT    | Connected to V BATT through an internal 80Ω PMOS switch                                              |
| V BATT   | Connected to V OUT . Current drawn from the battery is less than 1μA, as long as V CC < V BATT - 1V. |
| PFI      | Power-fail comparator is disabled.                                                                   |
| PFO      | Logic low                                                                                            |
| RESET    | Logic low                                                                                            |
| RESET    | Logic high (MAX805L only)                                                                            |
| WDI      | Watchdog timer is disabled                                                                           |

MAX802M/MAX805L  don't  always  connect  V BATT to VOUT when VBATT is greater than V CC . V BATT connects to V OUT  (through an 80Ω switch) only when V CC is below the reset threshold and V BATT  is greater than V CC .

When V CC exceeds the reset threshold, it is connected to the  MAX690A/MAX692A/MAX802L/MAX802M/MAX805L substrate,  regardless  of  the  voltage  applied  to  V BATT (Figure  3).  During  this  time,  the  diode  (D1)  between VBATT  and the substrate will conduct current from V BATT to V CC if V BATT  is 0.6V or greater than V CC .

│

## MAX690A/MAX692A/ MAX802L/MAX802M/ MAX805L

Figure 5. Using a SuperCap as a Backup Power Source with the MAX692A/MAX802M and a +5V ±10% Supply

<!-- image -->

When  VBATT  connects  to  V OUT ,  backup  mode  is activated  and  the  internal  circuitry  is  powered  from the  battery  (Table  1).  When  V CC is  just  below  V BATT , the  current  drawn  from  V BATT   is  typically  30μA.  When V CC drops  to  more  than  1V  below  V BATT ,  the  internal switchover  comparator  shuts  off  and  the  supply  current falls to less than 1μA.

## Applications Information

## Using a SuperCap as a Backup Power Source

SuperCaps are capacitors with extremely high capacitance values, on the order of 0.1F. Figure 4 shows a SuperCap used as a backup power source. Do not allow the  SuperCap's  voltage  to  exceed  the  maximum  reset threshold  by  more  than  0.6V.  In  Figure  4's  circuit,  the SuperCap rapidly charges to within a diode drop of V CC . However,  after  a  long  time,  the  diode  leakage  current will pull the SuperCap voltage up to V CC . When using a SuperCap with the MAX690A/MAX802L/MAX805L, V CC may not exceed 4.75V + 0.6V = 5.35V.

Use  the  SuperCap  circuit  of  Figure  5  with  a  MAX692A or  MAX802M  and  a  ±10%  supply.  This  circuit  ensures that  the  SuperCap  only  charges  to  V CC -  0.5V.  At  the maximum V CC of 5.5V, the SuperCap charges up to 5.0V, only  0.5V  above  the  maximum  reset  threshold-well within the requisite 0.6V.

## Microprocessor Supervisory Circuits

Figure 6. Adding Hysteresis to the Power-Fail Comparator

<!-- image -->

## Table 2. Allowable Backup-Battery Voltages

(see Using  a  SuperCap  as  a  Backup  Power  Source section for use with a SuperCap)

| PART NO.                 |   MAXIMUM BACKUP-BATTERY VOLTAGE (V) |
|--------------------------|--------------------------------------|
| MAX690A/ MAX802L/MAX805L |                                 4.80 |
| MAX692A/ MAX802M         |                                 4.55 |

## Allowable Backup Power-Source Batteries

Lithium  batteries  work  very  well  as  backup  batteries due  to  very  low  self-discharge  rates  and  high  energy density.  Single  lithium  batteries  with  open-circuit  volt -ages of 3.0V to 3.6V are ideal. Any battery with an opencircuit  voltage  less  than  the  minimum  reset  threshold plus 0.3V can be connected directly to the V BATT input of the  MAX690A/MAX692A/MAX802L/MAX802M/MAX805L with  no  additional  circuitry  (see  the Typical  Operating Circuit ).  However,  batteries  with  open-circuit  voltages that are greater cannot be used for backup, as current is sourced into the substrate through the diode (D1 in Figure 3) when V CC is close to the reset threshold.

│

## MAX690A/MAX692A/ MAX802L/MAX802M/ MAX805L

## Operation Without a Backup Power Source

If a backup power source is not used, ground V BATT and connect V OUT  to V CC .  Since there is no need to switch over to any backup power source, V OUT does not need to be switched. A direct connection to V CC  eliminates any voltage  drops  across  the  switch  which  may  push  V OUT below V CC .

## Replacing the Backup Battery

The backup battery can be removed while V CC remains valid,  without  danger  of  triggering  RESET/ RESET .  As long  as  V CC stays  above  the  reset  threshold,  battery -backup mode cannot be entered. In other switchover ICs where battery-backup mode is entered whenever V BATT gets close to V CC ,  an  unconnected V BATT pin  accumulates leakage charge and triggers RESET/ RESET in error.

## Adding Hysteresis to the Power-Fail Comparator

Hysteresis adds  a noise margin to the power-fail comparator  and  prevents  repeated  triggering  of  PFO when V IN  is close to its trip point. Figure 6 shows how to

Figure 7. Monitoring a Negative Voltage

<!-- image -->

## Microprocessor Supervisory Circuits

add  hysteresis  to  the  power-fail  comparator.  Select  the ratio  of  R 1 and  R 2 such that PFI sees 1.25V when V IN falls to its trip point (V TRIP ). R 3 adds the hysteresis. It will typically be an order of magnitude greater than R 1 or R 2 (about 10 times either R 1 or R 2 ). The current through R 1 and R 2 should be at least 1μA to ensure that the 25nA (max) PFI input current does not shift the trip point. R 3 should be larger than 10kΩ so it does not load down the PFO pin. Capacitor C1 adds additional noise rejection.

## Monitoring a Negative Voltage

The  power-fail  comparator  can  be  used  to  monitor  a negative  supply  rail  using  the  circuit  of  Figure  7.  When the negative rail is good (a negative voltage of large magnitude), PFO is  low.  When the negative rail is degraded (a negative voltage of lesser magnitude), PFO goes high. This  circuit's  accuracy  is  affected  by  the  PFI  threshold tolerance, the V CC line, and the resistors.

## Interfacing to μPs with Bidirectional Reset Pins

μPs  with  bidirectional  reset  pins,  such  as  the  Motorola 68HC11 series, can contend with the MAX690A/MAX692A/ MAX802L/MAX802M RESET output. If, for example, the RESET output is driven high and the μP wants to pull it low, indeterminate logic levels may result. To correct this, connect a 4.7kΩ resistor between the RESET output and the μP reset I/O, as in Figure 8. Buffer the RESET output to other system components.

│

## MAX690A/MAX692A/ MAX802L/MAX802M/ MAX805L

Figure 8. Interfacing to μPs with Bidirectional Reset I/O

<!-- image -->

## Microprocessor Supervisory Circuits

│

## MAX690A/MAX692A/ MAX802L/MAX802M/ MAX805L

## μP Supervisory Circuits

| Part Number MAX690A/692A   | Nominal Reset Threshold (V) 4.65/4.40   | Minimum Reset Pulse Width (ms) 140   | Nominal Watchdog Timeout Period (s) 1.6   | Backup- Battery Switch ü   | CE - Write Protect   | Power- Fail Comparator ü   | Manual- Reset Input   | Watch- dog Output   | Low- Line Output   | Active- High Reset   | Battery- On Output   |
|----------------------------|-----------------------------------------|--------------------------------------|-------------------------------------------|----------------------------|----------------------|----------------------------|-----------------------|---------------------|--------------------|----------------------|----------------------|
| MAX691A/693A               | 4.65/4.40                               | 140/adj.                             | 1.6/adj.                                  | ü                          | ü /10ns              | ü                          |                       | ü                   | ü                  | ü                    | ü                    |
| MAX696                     | Adj.                                    | 35/adj.                              | 1.6/adj.                                  | ü                          |                      | ü                          |                       | ü                   | ü                  | ü                    | ü                    |
| MAX697                     | Adj.                                    | 35/adj.                              | 1.6/adj.                                  |                            | ü                    | ü                          |                       | ü                   | ü                  | ü                    |                      |
| MAX700                     | 4.65/adj.                               | 200                                  | -                                         |                            |                      |                            | ü                     |                     |                    | ü                    |                      |
| MAX703/704                 | 4.65/4.40                               | 140                                  | -                                         | ü                          |                      | ü                          | ü                     |                     |                    |                      |                      |
| MAX705/706                 | 4.65/4.40                               | 140                                  | 1.6                                       |                            |                      | ü                          | ü                     | ü                   |                    |                      |                      |
| MAX706P                    | 2.63                                    | 140                                  | 1.6                                       |                            |                      | ü                          | ü                     | ü                   |                    | ü                    |                      |
| MAX706R/S/T                | 2.63/2.93/ 3.08                         | 140                                  | 1.6                                       |                            |                      | ü                          | ü                     | ü                   |                    |                      |                      |
| MAX707/708                 | 4.65/4.40                               | 140                                  | -                                         |                            |                      | ü                          | ü                     |                     |                    | ü                    |                      |
| MAX708R/S/T                | 2.63/2.93/ 3.08                         | 140                                  | -                                         |                            |                      | ü                          | ü                     |                     |                    | ü                    |                      |
| MAX709L/M/ R/S/T           | 4.65/4.40/ 2.63/2.93/3.08               | 140                                  | -                                         |                            |                      |                            |                       |                     |                    |                      |                      |
| MAX791                     | 4.65                                    | 140                                  | 1                                         | ü                          | ü /10ns              | ü                          | ü                     | ü                   | ü                  | ü                    | ü                    |
| MAX792L/M/ R/S/T           | 4.65/4.40/ 2.63/2.93/3.08               | 140                                  | 1                                         |                            | ü /10ns              | ü                          | ü                     | ü                   | ü                  | ü                    |                      |
| MAX800L/M                  | 4.60/4.40                               | 140                                  | 1.6/adj.                                  | ü                          | ü /10ns              | ü /±2%                     |                       | ü                   | ü                  | ü                    | ü                    |
| MAX802L/M                  | 4.60/4.40                               | 140                                  | 1.6                                       | ü                          |                      | ü /±2%                     |                       |                     |                    |                      |                      |
| MAX805L                    | 4.65                                    | 140                                  | 1.6                                       | ü                          |                      | ü                          |                       |                     |                    | ü                    |                      |
| MAX813L                    | 4.65                                    | 140                                  | 1.6                                       |                            |                      | ü                          | ü                     | ü                   |                    | ü                    |                      |
| MAX820L/M/ R/S/T           | 4.65/4.40/ 2.63/2.93/3.08               | 140                                  | 1                                         |                            | ü /10ns              | ü /±2%                     | ü                     | ü                   | ü                  | ü                    |                      |
| MAX1232                    | 4.37/4.62                               | 250                                  | 0.15/0.60/1.2                             |                            |                      |                            | ü                     |                     |                    | ü                    |                      |
| MAX1259                    | -                                       | -                                    | -                                         | ü                          |                      | ü                          |                       |                     |                    |                      |                      |

## Microprocessor Supervisory Circuits

## MAX690A/MAX692A/ MAX802L/MAX802M/ MAX805L

## Ordering Information (continued)

| PART        | TEMP RANGE      | PIN-PACKAGE   |
|-------------|-----------------|---------------|
| MAX692A CPA | 0°C to +70°C    | 8 Plastic DIP |
| MAX692ACSA  | 0°C to +70°C    | 8 SO          |
| MAX692AC/D  | 0°C to +70°C    | Dice*         |
| MAX692AEPA  | -40°C to +85°C  | 8 Plastic DIP |
| MAX692AESA  | -40°C to +85°C  | 8 SO          |
| MAX692AMJA  | -55°C to +125°C | 8 CERDIP**    |
| MAX802L CPA | 0°C to +70°C    | 8 Plastic DIP |
| MAX802LCSA  | 0°C to +70°C    | 8 SO          |
| MAX802LEPA  | -40°C to +85°C  | 8 Plastic DIP |
| MAX802LESA  | -40°C to +85°C  | 8 SO          |
| MAX802M CPA | 0°C to +70°C    | 8 Plastic DIP |
| MAX802MCSA  | 0°C to +70°C    | 8 SO          |
| MAX802MEPA  | -40°C to +85°C  | 8 Plastic DIP |
| MAX802MESA  | -40°C to +85°C  | 8 SO          |
| MAX805L CPA | 0°C to +70°C    | 8 Plastic DIP |
| MAX805LCSA  | 0°C to +70°C    | 8 SO          |
| MAX805LC/D  | 0°C to +70°C    | Dice*         |
| MAX805LEPA  | -40°C to +85°C  | 8 Plastic DIP |
| MAX805LESA  | -40°C to +85°C  | 8 SO          |
| MAX805LMJA  | -55°C to +125°C | 8 CERDIP**    |

## Microprocessor Supervisory Circuits

## Chip Topography

<!-- image -->

( ) ARE FOR MAX805L ONLY.

TRANSISTOR COUNT: 573;

SUBSTRATE MUST BE LEFT UNCONNECTED.

## Package Information

For the latest package outline information and land patterns, go to www.maximintegrated.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

| PACKAGE TYPE   | PACKAGE e CODE   | OUTLINE NO.   | LAND PATTERN NO.   |
|----------------|------------------|---------------|--------------------|
| 8 PDIP         | P8+1             | 21-0043       | -                  |
| 8 CDIP         | J8+2             | 21-0045       | -                  |
| 8 SOIC         | S8+2             | 21-0041       | 90-0096            |

│

## MAX690A/MAX692A/ MAX802L/MAX802M/ MAX805L

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 5 | 4/15            | No /V OPNs in Ordering Information ; deleted Automotive Systems in Applications Information section; added Package Information and Revision History tables | 1, 12, 13       |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and speci¿cations without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

## Microprocessor Supervisory Circuits