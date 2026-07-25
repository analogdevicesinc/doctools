<!-- lastmod 2022-10-10 -->
## MAX705-MAX708/MAX813L

## General Description

The MAX705-MAX708/MAX813L microprocessor (µP) supervisory circuits reduce the complexity and number of components required to monitor power-supply and battery functions in µP systems. These devices significantly improve system reliability and accuracy compared to separate ICs or discrete components.

The MAX705/MAX706/MAX813L provide four functions:

- 1)  A  reset  output  during  power-up,  power-down,  and brownout conditions.
- 2)  An  independent  watchdog  output  that  goes  low  if the  watchdog  input  has  not  been  toggled  within  1.6 seconds.
- 3)  A 1.25V threshold detector for power-fail warning, lowbattery  detection,  or  for  monitoring  a  power  supply other than +5V.
- 4)  An active-low manual-reset input.

The  MAX707/MAX708  are  the  same  as  the  MAX705/ MAX706,  except  an  active-high  reset  is  substituted  for the  watchdog  timer.  The  MAX813L  is  the  same  as  the MAX705, except RESET is provided instead of RESET .

Two  supply-voltage  monitor  levels  are  available:  The MAX705/MAX707/MAX813L generate a reset pulse when the supply voltage drops below 4.65V, while the MAX706/ MAX708 generate a reset pulse below 4.40V.  All four parts are available in 8-pin DIP, SO, and µMAX ®  packages.

## Applications

- Computers
- Controllers
- Intelligent Instruments
- Critical μP Power Monitoring

Pin Configurations appear at end of data sheet.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## /ow-Cost, μP Supervisory Circuits

## Benefits and Features

- Supervisory-Function Integration Significantly Improves System Reliability While Reducing Board Space
- μMAX Package
- Guaranteed RESET Valid at V CC  = 1V
-  200ms Reset Pulse Width
-  Debounced TTL/CMOS-Compatible ManualReset Input
-  Active-High Reset Output (MAX707/MAX708/ MAX813L)
- Precision-Supply Voltage Monitor
- 4.65V (MAX705/MAX707/MAX813L)
-  4.40V (MAX706/MAX708)
- Voltage Monitor for Power-Fail or Low-Battery Warning

## Ordering Information

| PART       | TEMP RANGE   | PIN-PACKAGE   |
|------------|--------------|---------------|
| MAX705 CPA | 0°C to +70°C | 8 Plastic DIP |
| MAX705CSA  | 0°C to +70°C | 8 SO          |
| MAX705CUA  | 0°C to +70°C | 8 μMAX        |
| MAX705C/D  | 0°C to +70°C | Dice*         |

Lead-free packaging is not available for CERDIP packages.

Ordering Information continued at end of data sheet.

## Typical Operating Circuit

<!-- image -->

<!-- image -->

## MAX705-MAX708/MAX813L

## Absolute Maximum Ratings

| Terminal Voltage (with respect to GND)                                                     |
|--------------------------------------------------------------------------------------------|
| V CC .....................................................................-0.3V to 6.0V    |
| All Other Inputs (Note 1) ..................... -0.3V to (V CC + 0.3V)                     |
| Input Current                                                                              |
| V CC .................................................................................20mA |
| GND ...............................................................................20mA    |
| Output Current (all outputs)................................................20mA           |
| Continuous Power Dissipation (T A = +70°C)                                                 |
| Plastic DIP (derate 9.09mW/°C above +70°C)............727mW                                |
| SO (derate 5.88mW/°C above +70°C)........................471mW                             |
| μMAX (derate 4.10mW/°C above +70°C) ...................330mW                               |

## MAX705-MAX708/MAX813L /ow-Cost, μP Supervisory Circuits

CERDIP (derate 8.00mW/°C above +70°C)  ................640mW

Operating Temperature Ranges

MAX70\_C\_\_, MAX813LC\_\_  ...............................0°C to +70°C

MAX70\_E\_\_, MAX813LE\_\_  .......................... -40°C to +85°C

MAX70\_MJA ................................................. -55°C to +125°C

Storage Temperature Range ............................ -65°C to +160°C

Lead Temperature (soldering, 10s) .................................+300°C

Soldering Temperature (reflow)

Lead(Pb)-free...............................................................+260°C

Containing Lead(Pb)  ....................................................+240°C

Note 1: The input-voltage limits on PFI and MR can be exceeded if the input current is less than 10mA.

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## Electrical Characteristics

(V CC  = 4.75V to 5.5V for MAX705/MAX707/MAX813L, V CC  = 4.5V to 5.5V for MAX706/MAX708, T A  = T MIN  to T MAX , unless otherwise noted.)

| PARAMETER                           | SYMBOL   | CONDITIONS                              | CONDITIONS                              | MIN        | TYP        |   MAX | UNITS   |
|-------------------------------------|----------|-----------------------------------------|-----------------------------------------|------------|------------|-------|---------|
|                                     | V CC     | MAX70_C                                 | MAX70_C                                 | 1.0        |            |   5.5 | V       |
| Operating Voltage Range             |          | MAX813LC                                | MAX813LC                                | 1.1        |            |   5.5 | V       |
|                                     |          | MAX70_E/M, MAX813LE/M                   | MAX70_E/M, MAX813LE/M                   | 1.2        |            |   5.5 | V       |
| Supply Current                      | I SUPPLY | MAX705C, MAX706C, MAX813LC              | MAX705C, MAX706C, MAX813LC              |            | 150        |   350 | µA      |
| Supply Current                      |          | MAX705E/M, MAX706E/M, MAX813LE/M        | MAX705E/M, MAX706E/M, MAX813LE/M        |            | 150        |   500 | µA      |
| Supply Current                      |          | MAX707C, MAX708C                        | MAX707C, MAX708C                        |            | 50         |   350 | µA      |
| Supply Current                      |          | MAX707E/M, MAX708E/M                    | MAX707E/M, MAX708E/M                    |            | 50         |   500 | µA      |
| Reset Threshold (Note 2)            | V RT     | MAX705, MAX707, MAX813L                 | MAX705, MAX707, MAX813L                 | 4.50       | 4.65       |  4.75 | V       |
| Reset Threshold (Note 2)            |          | MAX706, MAX708                          | MAX706, MAX708                          | 4.25       | 4.40       |  4.50 | V       |
| Reset Threshold Hysteresis (Note 2) |          |                                         |                                         |            | 40         |       | mV      |
| Reset Pulse Width (Note 2)          | t RS     |                                         |                                         | 140        | 200        |   280 | ms      |
| RESET Output Voltage                |          | I SOURCE = 800μA                        | I SOURCE = 800μA                        | V CC - 1.5 | V CC - 1.5 |       | V       |
| RESET Output Voltage                |          | I SINK = 3.2mA                          | I SINK = 3.2mA                          |            |            |   0.4 | V       |
| RESET Output Voltage                |          | MAX70_C, V CC = 1V, I SINK = 50μA       | MAX70_C, V CC = 1V, I SINK = 50μA       |            |            |   0.3 | V       |
| RESET Output Voltage                |          | MAX70_E/M, V CC = 1.2V, I SINK = 100μA  | MAX70_E/M, V CC = 1.2V, I SINK = 100μA  |            |            |   0.3 | V       |
| RESET Output Voltage                |          | MAX707, MAX708, I SOURCE = 800μA        | MAX707, MAX708, I SOURCE = 800μA        | V CC - 1.5 | V CC - 1.5 |       | V       |
| RESET Output Voltage                |          | MAX707, MAX708, I SINK = 1.2mA          | MAX707, MAX708, I SINK = 1.2mA          |            |            |   0.4 | V       |
| RESET Output Voltage                |          | MAX813LC, I SOURCE = 4μA, V CC = 1.1V   | MAX813LC, I SOURCE = 4μA, V CC = 1.1V   | 0.8        | 0.8        |       | V       |
| RESET Output Voltage                |          | MAX813LE/M, I SOURCE = 4μA, V CC = 1.2V | MAX813LE/M, I SOURCE = 4μA, V CC = 1.2V | 0.9        | 0.9        |       | V       |
| RESET Output Voltage                |          | MAX813L                                 | I SOURCE = 800μA                        | V CC - 1.5 | V CC - 1.5 |       | V       |
| RESET Output Voltage                |          |                                         | I SINK = 3.2mA                          |            |            |   0.4 | V       |

│

## MAX705-MAX708/MAX813L

## Electrical Characteristics (continued)

(V CC  = 4.75V to 5.5V for MAX705/MAX707/MAX813L, V CC  = 4.5V to 5.5V for MAX706/MAX708, T A  = T MIN  to T MAX , unless otherwise noted.)

Note 2: Applies to both RESET in the MAX705-MAX708 and RESET in the MAX707/MAX708/MAX813L.

| PARAMETER                      | PARAMETER                      | SYMBOL   | CONDITIONS                                | MIN        | TYP        |    MAX | UNITS   |
|--------------------------------|--------------------------------|----------|-------------------------------------------|------------|------------|--------|---------|
| Watchdog Timeout Period        | Watchdog Timeout Period        | t WD     | MAX705, MAX706, MAX813L                   | 1.00       | 1.60       |   2.25 | s       |
| WDI Pulse Width                | WDI Pulse Width                | t WP     | V IL = 0.4V, V IH = (V CC ) (0.8)         | 50         |            |        | ns      |
| WDI Input Threshold            | Low                            |          | MAX705, MAX706, MAX813L, V CC = 5V        |            |            |    0.8 | V       |
| WDI Input Threshold            | High                           |          | MAX705, MAX706, MAX813L, V CC = 5V        | 3.5        |            |        | V       |
|                                |                                |          | MAX705, MAX706, MAX813L, V CC = 5V        |            | 50         |    150 | µA      |
| WDI Input Current              | WDI Input Current              |          | MAX705, MAX706, MAX813L, WDI = 0V         | -150       | -50        |        | µA      |
|                                |                                |          | MAX705, MAX706, MAX813L, I SOURCE = 800μA | V CC - 1.5 | V CC - 1.5 |        | V       |
| WDO Output Voltage             | WDO Output Voltage             |          | MAX705, MAX706, MAX813L, I SINK = 1.2mA   |            |            |    0.4 | V       |
| MR Pull-Up Current             | MR Pull-Up Current             |          | MR = 0V                                   | 100        | 250        |    600 | μA      |
| MR Pulse Width                 | MR Pulse Width                 | t MR     |                                           | 150        |            |        | ns      |
| MR Input Threshold             | Low                            |          |                                           |            |            |    0.8 | V       |
| MR Input Threshold             | High                           |          |                                           | 2.0        |            |        | V       |
| MR to Reset Out Delay (Note 2) | MR to Reset Out Delay (Note 2) | t MD     |                                           |            |            |    250 | ns      |
| PFI Input Threshold            | PFI Input Threshold            |          | V CC = 5V                                 | 1.20       | 1.25       |   1.30 | V       |
| PFI Input Current              | PFI Input Current              |          |                                           | -25.00     | +0.01      | +25.00 | nA      |
|                                |                                |          | I SOURCE = 800μA                          | V CC - 1.5 | V CC - 1.5 |        | V       |
| PFO Output Voltage             | PFO Output Voltage             |          | I SINK = 3.2mA                            | 0.4        | 0.4        |    0.4 | V       |

## MAX705-MAX708/MAX813L /ow-Cost, μP Supervisory Circuits

│

## MAX705-MAX708/MAX813L

## Typical Operating Characteristics

<!-- image -->

│

## MAX705-MAX708/MAX813L /RZ &amp;RVW  ȝ3 6XSHUY

## MAX705-MAX708/MAX813L

## Pin Description

|               |               | PIN           | PIN           |         |         | NAME   |                                                                                                                                                                                                                                                                                                                                                                                                        |
|---------------|---------------|---------------|---------------|---------|---------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MAX705/MAX706 | MAX705/MAX706 | MAX707/MAX708 | MAX707/MAX708 | MAX813L | MAX813L | NAME   | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                               |
| DIP/SO        | μMAX          | DIP/SO        | μMAX          | DIP/SO  | μMAX    | NAME   | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                               |
| 1             | 3             | 1             | 3             | 1       | 3       | MR     | Manual-Reset Input triggers a reset pulse when pulled below 0.8V. This active-low input has an internal 250μA pullup current. It can be driven from a TTL or CMOS logic line, as well as shorted to ground with a switch.                                                                                                                                                                              |
| 2             | 4             | 2             | 4             | 2       | 4       | V CC   | +5V Supply Input                                                                                                                                                                                                                                                                                                                                                                                       |
| 3             | 5             | 3             | 5             | 3       | 5       | GND    | 0V Ground Reference for all signals                                                                                                                                                                                                                                                                                                                                                                    |
| 4             | 6             | 4             | 6             | 4       | 6       | PFI    | Power-Fail Voltage-Monitor Input. When PFI is less than 1.25V, PFO goes low. Connect PFI to GND or V CC when not used.                                                                                                                                                                                                                                                                                 |
| 5             | 7             | 5             | 7             | 5       | 7       | PFO    | Power-Fail Output goes low and sinks current when PFI is less than 1.25V; otherwise PFO stays high.                                                                                                                                                                                                                                                                                                    |
| 6             | 8             | -             | -             | 6       | 8       | WDI    | Watchdog Input. If WDI remains high or low for 1.6sec, the internal watchdog timer runs out and WDO goes low (Figure 1). Floating WDI or connecting WDI to a high-impedance three-state buffer disables the watchdog feature. The internal watchdog timer clears whenever reset is asserted, WDI is three stated, or WDI sees a rising or falling edge.                                                |
| -             | -             | 6             | -             | -       | -       | N.C.   | No Connect                                                                                                                                                                                                                                                                                                                                                                                             |
| 7             | 1             | 7             | 1             | -       | -       | RESET  | Active-Low Reset Output pulses low for 200ms when triggered, and stays low whenever V CC is below the reset threshold (4.65V in the MAX705 and 4.40V in the MAX706). It remains low for 200ms after V CC rises above the reset threshold or MR goes from low to high (Figure 3). A watchdog timeout will not trigger RESET unless WDO is connected to MR.                                              |
| 8             | 2             | -             | -             | 8       | 2       | WDO    | Watchdog Output pulls low when the internal watchdog timer finishes its 1.6sec count and does not go high again until the watchdog is cleared. WDO also goes low during low-line conditions. Whenever V CC is below the reset threshold, WDO stays low; however, unlike RESET , WDO does not have a minimum pulse width. As soon as V CC rises above the reset threshold, WDO goes high with no delay. |
| -             | -             | 8             | 2             | 7       | 1       | RESET  | Active-High RESET Output is the inverse of RESET . Whenever RESET is high, RESET is low, and vice versa (Figure 2). The MAX813L has a RESET output only.                                                                                                                                                                                                                                               |

## MAX705-MAX708/MAX813L Low-Cost, μP Supervisory Circuits

## MAX705-MAX708/MAX813L

Figure 1. MAX705/MAX706/MAX813L Block Diagram

<!-- image -->

## Detailed Description

## Reset Output

A microprocessor's (μP's) reset input starts the μP in a known state. Whenever the μP is in an unknown state, it should be held in reset. The MAX705-MAX708/MAX813L assert reset during power-up and prevent code execution errors during power-down or brownout conditions.

On  power-up,  once  V CC   reaches  1V, RESET is a guaranteed logic low of 0.4V or less. As V CC  rises, RESET stays low. When V CC  rises above the reset threshold, an internal timer releases RESET after about 200ms. RESET pulses low whenever V CC  dips below the reset threshold, i.e. brownout condition. If brownout occurs in the middle of a previously initiated reset pulse, the pulse continues for  at  least  another  140ms.  On  power-down,  once  V CC falls below the reset threshold, RESET stays low and is guaranteed to be 0.4V or less until V CC  drops below 1V.

The MAX707/MAX708/MAX813L active-high RESET output  is  simply  the  complement  of  the RESET output, and  is  guaranteed  to  be  valid  with  V CC   down  to  1.1V. Some μPs, such as Intel's 80C51, require an active-high reset pulse.

## Watchdog Timer

The MAX705/MAX706/MAX813L watchdog circuit monitors the μP's activity. If the μP does not toggle the watchdog input (WDI) within 1.6sec and WDI is not three

## MAX705-MAX708/MAX813L Low-Cost, μP Supervisory Circuits

Figure 2. MAX707/MAX708 Block Diagram

<!-- image -->

stated, WDO goes low. As long as RESET is asserted or the WDI input is three stated, the watchdog timer stays cleared and will not count. As soon as reset is released and WDI is driven high or low, the timer starts counting. Pulses as short as 50ns can be detected.

Typically, WDO is  not  connected  to  the  nonmaskable interrupt  input  (NMI)  of  a  μP.  When  V CC  drops  below the  reset  threshold, WDO goes  low  whether  or  not the  watchdog  timer  has  timed  out  yet.  Normally  this would  trigger  an  NMI  interrupt,  but RESET goes  low simultaneously, and thus overrides the NMI interrupt.

If WDI is left unconnected, WDO can be used as a lowline output. Since floating WDI disables the internal timer, WDO goes  low  only  when  V CC   falls  below  the  reset threshold, thus functioning as a low-line output.

The  MAX705/MAX706  have  a  watchdog  timer  and  a RESET output. The MAX707/MAX708 have both activehigh and active-low reset outputs. The MAX813L has both an active-high reset output and a watchdog timer.

## Manual Reset

The manual-reset input ( MR ) allows reset to be triggered by a pushbutton switch. The switch is effectively debounced by the 140ms minimum reset pulse width. MR is TTL/CMOS-logic compatible, so it can be driven by an external logic line. MR can be used to force a watchdog timeout to generate a reset pulse in the MAX705/ MAX706/ MAX813L. Simply connect WDO to MR .

│

## MAX705-MAX708/MAX813L

## Power-Fail Comparator

The  power-fail  comparator  can  be  used  for  various purposes because its output and noninverting input are not internally connected. The inverting input is internally connected to a 1.25V reference.

Figure 3. MAX705/MAX706/MAX813L Watchdog Timing

<!-- image -->

Figure 4. MAX705/MAX706 RESET , MR, and WDO Timing with WDI Three Stated. The MAX707/MAX708/MAX813L RESET output is the inverse of RESET shown.

<!-- image -->

## MAX705-MAX708/MAX813L Low-Cost, μP Supervisory Circuits

To build an early-warning circuit for power failure, connect the  PFI  pin  to  a  voltage  divider  (see Typical  Operating Circuit ).  Choose  the  voltage  divider  ratio  so  that  the voltage  at  PFI  falls  below  1.25V  just  before  the  +5V regulator drops out. Use PFO to interrupt the μP so it can prepare for an orderly power-down.

## Applications Information

## Ensuring a Valid RESET Output Down to V CC = 0V

When VCC falls below 1V, the MAX705-MAX708 RESET output  no  longer  sinks  current-it  becomes  an  open circuit.  High-impedance  CMOS  logic  inputs  can  drift to  undetermined  voltages  if  left  undriven.  If  a  pulldown resistor is added to the RESET pin,  as shown in Figure 5,  any  stray  charge  or  leakage  currents  will  be  drained to ground, holding RESET low. Resistor value (R1) is not critical. It should be about 100kΩ, large enough not to load RESET and small enough to pull RESET to ground.

## Monitoring Voltages Other Than the Unregulated DC Input

Monitor  voltages  other  than  the  unregulated  DC  by connecting a voltage-divider to PFI and adjusting the ratio appropriately. If required, add hysteresis by connecting a resistor (with a value approximately 10 times the sum of the two resistors in the potential divider network) between PFI and PFO . A capacitor between PFI and GND reduces the power-fail circuit's sensitivity to high-frequency noise on the line being monitored. RESET can be asserted on other voltages in addition to the +5V V CC  line. Connect PFO to MR to  initiate  a RESET pulse  when  PFI  drops below  1.25V.  Figure  6  shows  the  MAX705-MAX708 configured  to  assert RESET when  the  +5V  supply  falls below the reset threshold, or when the +12V supply falls below approximately 11V.

## Monitoring a Negative Voltage

The  power-fail  comparator  can  also  monitor  a  negative supply rail (Figure 7). When the negative rail is good (a negative  voltage  of  large  magnitude), PFO is  low,  and when the negative rail is degraded (a negative voltage of lesser magnitude), PFO is  high.  By  adding the resistors and  transistor  as  shown,  a  high PFO triggers  a  reset. As  long  as PFO remains  high,  the  MAX705-MAX708/ MAX813L keep reset asserted ( RESET = low, RESET = high). Note that this circuit's accuracy depends on the PFI threshold tolerance, the V CC  line, and the resistors.

│

## MAX705-MAX708/MAX813L

Figure 5. RESET Valid to Ground Circuit

<!-- image -->

Figure 7. Monitoring a Negative Voltage

<!-- image -->

## MAX705-MAX708/MAX813L Low-Cost, μP Supervisory Circuits

Figure 6. Monitoring Both +5V and +12V

<!-- image -->

Figure 6. Monitoring Both +5V and +12V

<!-- image -->

## Interfacing to μPs with Bidirectional Reset Pins

μPs  with  bidirectional  reset  pins,  such  as  the  Motorola 68HC11 series, can contend with the MAX705-MAX708 RESET output.  If,  for  example,  the RESET output  is driven high and the μP wants to pull it low, indeterminate logic levels may result. To correct this, connect a 4.7kΩ resistor between the RESET output and the μP reset I/O, as in Figure 8. Buffer the RESET output to other system components.

│

## MAX705-MAX708/MAX813L

## Ordering Information (continued)

| PART        | TEMP RANGE      | PIN-PACKAGE   |
|-------------|-----------------|---------------|
| MAX705EPA   | -40°C to +85°C  | 8 Plastic DIP |
| MAX705ESA   | -40°C to +85°C  | 8 SO          |
| MAX705EUA   | -40°C to +85°C  | 8 μMAX        |
| MAX705MJA   | -55°C to +125°C | 8 CERDIP**    |
| MAX706 CPA  | 0°C to +70°C    | 8 Plastic DIP |
| MAX706CSA   | 0°C to +70°C    | 8 SO          |
| MAX706CUA   | 0°C to +70°C    | 8 μMAX        |
| MAX706C/D   | 0°C to +70°C    | Dice*         |
| MAX706EPA   | -40°C to +85°C  | 8 Plastic DIP |
| MAX706ESA   | -40°C to +85°C  | 8 SO          |
| MAX706EUA   | -40°C to +85°C  | 8 μMAX        |
| MAX706MJA   | -55°C to +125°C | 8 CERDIP**    |
| MAX707 CPA  | 0°C to +70°C    | 8 Plastic DIP |
| MAX707CSA   | 0°C to +70°C    | 8 SO          |
| MAX707CUA   | 0°C to +70°C    | 8 μMAX        |
| MAX707C/D   | 0°C to +70°C    | Dice*         |
| MAX707EPA   | -40°C to +85°C  | 8 Plastic DIP |
| MAX707ESA   | -40°C to +85°C  | 8 SO          |
| MAX707EUA   | -40°C to +85°C  | 8 μMAX        |
| MAX707MJA   | -55°C to +125°C | 8 CERDIP**    |
| MAX708 CPA  | 0°C to +70°C    | 8 Plastic DIP |
| MAX708CSA   | 0°C to +70°C    | 8 SO          |
| MAX708CUA   | 0°C to +70°C    | 8 μMAX        |
| MAX708C/D   | 0°C to +70°C    | Dice*         |
| MAX708EPA   | -40°C to +85°C  | 8 Plastic DIP |
| MAX708ESA   | -40°C to +85°C  | 8 SO          |
| MAX708EUA   | -40°C to +85°C  | 8 μMAX        |
| MAX708MJA   | -55°C to +125°C | 8 CERDIP**    |
| MAX813 LCPA | 0°C to +70°C    | 8 Plastic DIP |
| MAX813LCSA  | 0°C to +70°C    | 8 SO          |
| MAX813LCUA  | 0°C to +70°C    | 8 μMAX        |
| MAX813LC/D  | 0°C to +70°C    | Dice*         |
| MAX813LEPA  | -40°C to +85°C  | 8 Plastic DIP |
| MAX813LESA  | -40°C to +85°C  | 8 SO          |
| MAX813LEUA  | -40°C to +85°C  | 8 μMAX        |
| MAX813LMJA  | -55°C to +125°C | 8 CERDIP**    |

## MAX705-MAX708/MAX813L Low-Cost, μP Supervisory Circuits

## Pin Configurations

<!-- image -->

<!-- image -->

│

## Ordering Information

## MAX705-MAX708/MAX813L

## MAX705-MAX708/MAX813L Low-Cost, μP Supervisory Circuits

| Price † 1000-up ($)                                                                     | 1.71                    | 3.26                         |                                  | 3.23 3.61                                       | †† 3.55                                                        | 3.58                  | 2.17                                              | 1.38* 2.93      | 1.02*     | 1.71 1.71   | 0.88* 1.63          | 3.90                  | 3.42 ††                | †† †† 3.88              | †† 3.66                               | 3.59 3.26 3.90                                                          | †† ††                                                                  | †† †† 1.02* ††               | 3.82                   |             | 2.44              |       |           |                                                 |                                        |       |     |                                      |                 |    |                |              |         |     |         |                |     |         |             |                     |         |     |         |                     |            |                     |                                     |                          | ††          |                                         | ††                    |                             |                                                             |                 |                   |
|-----------------------------------------------------------------------------------------|-------------------------|------------------------------|----------------------------------|-------------------------------------------------|----------------------------------------------------------------|-----------------------|---------------------------------------------------|-----------------|-----------|-------------|---------------------|-----------------------|------------------------|-------------------------|---------------------------------------|-------------------------------------------------------------------------|------------------------------------------------------------------------|------------------------------|------------------------|-------------|-------------------|-------|-----------|-------------------------------------------------|----------------------------------------|-------|-----|--------------------------------------|-----------------|----|----------------|--------------|---------|-----|---------|----------------|-----|---------|-------------|---------------------|---------|-----|---------|---------------------|------------|---------------------|-------------------------------------|--------------------------|-------------|-----------------------------------------|-----------------------|-----------------------------|-------------------------------------------------------------|-----------------|-------------------|
| Pins                                                                                    | 8                       | 8                            | 8                                | 16                                              | 16 16                                                          | 16                    | 8 8                                               | 8 8             | 8         | 8           | 8 8                 | 16 16                 | 16                     | 8 16 8                  | 8 8 8                                 | 8                                                                       | 8 3                                                                    | 8 16                         | 8 8                    | 8 16        | 8                 |       |           |                                                 |                                        |       |     |                                      | 3               |    |                |              |         |     |         |                |     |         |             |                     |         |     |         |                     |            |                     |                                     |                          | 8           |                                         |                       |                             |                                                             |                 |                   |
| I SUPPLY Backup Mode µA max (typ)                                                       |                         | 5(0.05)                      | 1(0.4) 5(0.04)                   |                                                 |                                                                |                       | 5(0.05)                                           | 1(0.4)          |           |             |                     | 5(0.04)               | TBD                    | TBD TBD 5(0.04)         | TBD 5(0.05)                           | 1(0.4)                                                                  | 5(0.05) 1(0.4)                                                         | TBD                          |                        | TBD TBD TBD | 0.1(0.002)        |       |           |                                                 | TBD                                    |       |     |                                      |                 |    |                |              |         |     |         |                |     |         |             |                     |         |     |         |                     |            |                     |                                     |                          |             |                                         |                       |                             |                                                             |                 |                   |
| I SUPPLY Operating Mode mA max (typ)                                                    | 0.2(0.05)               | 0.35(0.2)                    | 0.5(0.4)                         | 0.1(0.035)                                      |                                                                |                       | 0.2(0.1) 0.35(0.2)                                | 0.5(0.4)        | 0.35(0.2) | 0.35(0.2)   | 0.35(0.2) 0.35(0.2) | 0.15(0.06) 0.15(0.07) | TBD TBD                | TBD 0.1(0.035)          | TBD 0.35(0.2) 0.5(0.4)                |                                                                         | 0.35(0.2) 0.5(0.4) TBD                                                 | TBD 0.06                     | 0.06 (0.024) 0.35(0.2) | 0.15        | (0.07) 0.5 (0.23) | TBD   | TBD TBD   |                                                 |                                        |       |     | (0.024)                              |                 |    |                |              |         |     |         |                |     |         |             |                     |         |     |         | 0.35(0.2)           |            |                     |                                     |                          |             |                                         |                       |                             |                                                             |                 |                   |
| Battery-On Output                                                                       |                         |                              |                                  | ü                                               | ü                                                              |                       |                                                   |                 |           |             |                     | ü                     |                        |                         | ü                                     |                                                                         |                                                                        |                              |                        | ü           |                   |       |           |                                                 |                                        | ü     |     |                                      |                 |    |                |              |         |     |         |                |     |         |             |                     |         |     |         |                     |            |                     |                                     |                          |             |                                         |                       |                             |                                                             |                 |                   |
| Low-Line Output                                                                         |                         |                              |                                  |                                                 |                                                                |                       |                                                   |                 |           |             |                     | ü                     |                        |                         |                                       |                                                                         |                                                                        | ü                            |                        |             | ü                 |       |           | ü                                               |                                        |       |     |                                      |                 |    |                |              |         |     |         |                |     |         |             |                     |         |     |         |                     |            |                     |                                     |                          |             |                                         |                       |                             |                                                             |                 |                   |
| Manual-Reset Input                                                                      | ü                       |                              |                                  |                                                 |                                                                |                       | ü ü                                               | ü               | ü         | ü           | ü                   | ü ü                   |                        |                         |                                       |                                                                         | ü                                                                      | ü                            | ü ü                    | ü           |                   |       |           | ü                                               |                                        |       |     |                                      |                 |    |                | ü            |         |     |         |                |     |         |             |                     |         |     |         |                     | ü          |                     |                                     |                          |             |                                         |                       |                             |                                                             |                 |                   |
| Power-Fail Comparator                                                                   |                         | ü                            | ü ü                              |                                                 | ü                                                              | ü                     | ü                                                 | ü               | ü         | ü           | ü                   | ü ü                   | ü                      | ü / ±2%                 | ü / ±2%                               | ü / ±2%                                                                 | ü                                                                      | ü / ±2% ü                    | ü / ±2% ü ±2%          |             |                   | /     | ü / ±2% ü | ü / ±2%                                         |                                        |       |     |                                      |                 |    |                |              |         |     |         |                |     |         |             |                     |         |     |         |                     | ü          |                     |                                     |                          |             |                                         | / ±2%                 |                             | ü ü                                                         |                 |                   |
| CE Write Protect                                                                        |                         |                              | /10ns                            | ü                                               |                                                                | ü                     |                                                   |                 |           |             |                     | ü /10ns               | ü /10ns                | ü ü                     | ü ü /10ns                             |                                                                         |                                                                        |                              |                        |             |                   | ü     |           | ü ü / 10ns ü                                    |                                        |       |     |                                      |                 |    |                |              |         |     |         |                |     |         |             |                     |         |     |         |                     |            |                     |                                     |                          |             |                                         |                       |                             |                                                             |                 |                   |
| V BATT - to-V OUT On Resistance Max (Ω)                                                 |                         | 400                          | 400 25                           |                                                 |                                                                |                       | 400                                               | 400             |           |             |                     | 25                    |                        | TBD TBD                 | TBD 25                                | TBD                                                                     | 400 400                                                                | 400                          |                        | 400 TBD     | TBD 667           |       |           |                                                 |                                        |       |     |                                      |                 |    |                |              |         |     |         |                |     |         |             |                     |         |     |         |                     |            |                     |                                     |                          |             |                                         |                       |                             |                                                             |                 |                   |
| V CC -to-V OUT On Resistance Max (Ω)                                                    |                         | 10                           | 6 1.2                            |                                                 |                                                                |                       | 10                                                | 6               |           |             |                     | 1.2                   |                        | TBD TBD                 | TBD 1.2                               | TBD                                                                     | 10 6                                                                   | 10                           |                        | TBD         | 2.5               | 6 TBD |           |                                                 |                                        |       | ü ü |                                      |                 |    |                |              |         |     |         |                |     |         |             |                     |         |     |         |                     |            |                     |                                     |                          |             |                                         |                       |                             |                                                             |                 |                   |
| Backup-Battery Switch                                                                   |                         | ü                            | ü ü                              | ü                                               | ü ü                                                            | ü                     | ü                                                 | ü ü             | ü         | ü           |                     | ü ü                   | ü                      | ü ü                     | ü ü                                   | ü ü                                                                     | ü                                                                      | ü                            | ü                      | ü           |                   | ü     | ü         | ü ü                                             |                                        |       |     |                                      |                 |    |                |              |         |     |         |                |     |         |             | ü                   |         |     |         |                     |            |                     |                                     |                          |             |                                         |                       |                             | ü ü                                                         |                 |                   |
| Nominal Watchdog Timeout Period (sec), if Available Separate Watchdog Output            | 0.15/0.6/1.2            | 1.6                          | 1.6 1.6/adj.                     |                                                 | 1.6/adj.                                                       | 1.6/adj.              |                                                   | 1.6             | 1.6 1.6   |             |                     | 1                     | 1                      | 1.6 1.6                 | 1.6/adj. 1.6                          |                                                                         | 1.6 1.6                                                                | 1.6                          |                        |             | 1.6               |       |           | 1                                               |                                        |       |     |                                      |                 |    |                | 1.6          |         |     |         |                |     |         |             |                     |         |     |         |                     |            |                     |                                     |                          | 1.6         |                                         |                       |                             |                                                             |                 |                   |
| RESET Valid to V CC = 1V                                                                | ü                       | ü                            | ü                                | ü battery                                       |                                                                |                       | ü                                                 | ü               | ü         | ü           | ü ü                 | ü ü                   | ü                      | ü ü                     | ü ü ü                                 |                                                                         | ü                                                                      | ü                            |                        | ü           |                   | ü     |           | ü                                               | ü                                      | ü     |     | ü                                    |                 | ü  |                | ü            | ü       |     |         | ü              |     |         |             |                     |         |     |         |                     |            |                     |                                     |                          |             |                                         | ü                     |                             |                                                             |                 |                   |
| Active-High Reset                                                                       | ü                       |                              |                                  | ü 125mAh lithium                                | ü                                                              | ü                     | ü                                                 |                 |           | ü           | ü                   | ü ü                   | ü ü                    | ü                       |                                       |                                                                         | ü                                                                      |                              | ü                      |             |                   | ü     |           |                                                 | ü / ±1.5%                              |       |     |                                      | ü               |    |                |              |         |     | ü / ±1% |                |     | ü       | ü           |                     |         |     |         |                     |            |                     |                                     |                          |             |                                         |                       |                             | ü                                                           |                 |                   |
| Part Number Nominal Reset Threshold (V) Minimum Reset Pulse Width (ms) Active-Low Reset | MAX1232 4.37/4.62 250 ü | MAX690A/692A 4.65/4.40 140 ü | MAX690R/S/T 2.63/2.93/3.08 140 ü | MAX691A/693A 4.65/4.40 140/adj. ü MAX691A and a | MAX1691 The MAX1691 is a module with the MAX696 Adj. 35/adj. ü | MAX697 Adj. 35/adj. ü | MAX700 4.65/adj. 200 ü MAX703/704 4.65/4.40 140 ü | MAX704R/S/T 140 | ü ü       | MAX706P     | MAX706R/S/T ü ü     | ü 4.65 140 ü          | 2.63/2.93/3.08 140 ü ü | ü 2.63/2.93/3.07/3.08 ü | MAX801L/N/M 4.68/4.58/4.43 4.60/4.40/ | ü ü / ±1.5% MAX802L/M/R/S/T 2.63/2.93/3.08 ü MAX804R/S/T 2.63/2.93/3.08 | MAX805L/M/R/S/T 4.65/4.40/ 2.63/2.93/3.08 MAX806R/S/T 2.63/2.93/3.08 ü | MAX807L/N/M 4.68/4.58/4.43 ü |                        | 4.65/4.40/  | MXD1210 4.37/4.62 | 140   | 140       | MAX820L/M/R/S/T 4.65/4.40/ 2.63/2.93/3.08 140 ü | MAX808L/N/M 4.68/4.58/4.43 140 ü / 140 | ±1.5% |     | MAX809L/M/R/S/T 2.63/2.93/3.08 ü 140 | MAX810L/M/R/S/T |    | 2.63/2.93/3.08 | MAX813L 4.65 | 140 140 | 140 | ü / ±1% | 140 4.65/4.40/ | 140 | 140 140 | 140 140 140 | MAX800L/M 4.60/4.40 | / ±1.5% | 140 | 140 140 | 140 MAX708R/S/T 140 | MAX707/708 | 2.63 2.63/2.93/3.08 | 2.63/2.93/3.08 MAX705/706 4.65/4.40 | 4.65/4.40 2.63/2.93/3.08 | 140 ü / ±1% | 4.80/4.70/4.55/3.03 4.80/4.70/4.55/3.03 | MAX816 Adj./±1% 140 ü | MAX814K/L/N/T MAX815K/L/N/T | MAX793R/S/U/T 2.63/2.93/3.07/3.08 MAX794 Adj. MAX795R/S/U/T | MAX802L/M/R/S/T | MAX791 4.60/4.40/ |

│

## MAX705-MAX708/MAX813L

## Package Information

For the latest package outline information and land patterns (footprints), go to www.maximintegrated.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

| PACKAGE TYPE   | PACKAGE CODE   | OUTLINE NO.   |
|----------------|----------------|---------------|
| 8 μMAX         | U8+1           | 21-0036       |
| 8 Plastic DIP  | P8+1           | 21-0043       |
| 8 SO           | S8+2           | 21-0041       |

## Chip Topography

<!-- image -->

## MAX705-MAX708/MAX813L /ow-Cost, μP Supervisory Circuits

│

## MAX705-MAX708/MAX813L

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                 | PAGES CHANGED     |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
|                 0 | 2/92            | Initial release                                                                                                                             | -                 |
|                 8 | 3/10            | Updated the Features , Absolute Maximum Ratings , Typical Operating Characteristics , Figures 3, 7, 8, and the Package Information sections | 1, 2, 4, 7, 8, 10 |
|                 9 | 1/13            | Updated package code for 8 SO package                                                                                                       | 11                |
|                10 | 4/15            | Deleted 'Automotive Systems' from Applications and updated Benefits and Features sections                                                   | 1                 |
|                11 | 7/18            | Updated Pin Description table                                                                                                               | 5                 |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

│

## Low-Cost, μP Supervisory Circuits