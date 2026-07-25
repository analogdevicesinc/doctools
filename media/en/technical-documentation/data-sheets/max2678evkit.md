<!-- lastmod 2022-08-03 -->
## MAX2678 Evaluation Kit

## General Description

The  MAX2678  evaluation  kit  (EV  kit)  is  an  easy-to-use platform  that  enables  straightforward  evaluation  of  the MAX2678  two-stage  high-performance  GPS  LNA,  which is  designed  for  use  in  demanding  automotive  applications  and  provides  35dB  gain.  The  EV  kit  includes  all functionality  that  would  typically  be  found  in  a  typical remote  antenna  module,  with  the  exception  of  a  12V regulator.  Optimal  matching  and  coupling  circuits  are included on the EV kit, enabling 'plug and play' operation. In  many applications, an interstage SAW filter is used to maximize  immunity  to  out-of-band  interferers.  A  pair  of common SAW filter footprints are available to enable evalu -ation in this configuration. Resistor options are provided to enable stand-alone testing of either gain stage or cascade testing  of  the  two  gain  stages  and  optional  SAW  filter. Interfacing  the  MAX2678  EV  kit  to  RF  test  equipment  is streamlined using industry-standard SMA connectors.

## MAX2678 EV Kit Board Photo

<!-- image -->

<!-- image -->

Evaluates: MAX2678

## Benefits and Features

- Flexible Evaluation of the MAX2678 IC
- Stand-Alone AMP 1 or AMP 2 Configuration
- Cascade Configuration with Interstage SAW Filter*
- Optimal Matching and Coupling Eliminates Tuning
- All Ports Matched to 50Ω and Accessible through SMA Connectors for Simple Interfacing
- Proven PCB Layout
- Fully Assembled and Tested

* SAW filter not included.

Ordering Information appears at end of data sheet.

## Quick Start

## Required Equipment

- MAX2678 EV kit
- Linear DC power supply capable of sourcing at least 100mA between 3V and 5.25V
- Network analyzer
- Noise figure meter
- Two RF signal generators with maximum RF power level of at least 0dBm
- Spectrum analyzer
- Power meter

## Procedure

The EV kit is fully assembled and tested and can be tested directly  out  of  the  box.  The  following  procedures  provide examples of how to measure common specifications of the MAX2678.

## Measure the Stand-Alone Gain of Each Gain Stage

Follow the steps below to measure the stand-alone gain of each of the two gain stages. Full 2-port S parameters can be measured using this procedure, but be aware that the observed angle will not be referenced to the device's pins.  Detailed  discussion  of  calibrating  S  parameter measurements is beyond the scope of this document.

- 1) Configure the network analyzer with -35dBm RF power level and 800MHz to 2000MHz frequency span.
- 2) Perform 2-port calibration of the network analyzer.
- 3) Disable  power-supply  output,  adjust  output  level  to 5V, and set current limit to at least 100mA.
- 4) Connect supply leads to connector JU1 on the EV kit.
- 5) Connect  network  analyzer  to  AMP  1  (Port  1  =  J5, Port 2 = J7).
- 6) Enable power supply.
- 7) Measure |S21| of AMP 1.
- 8) Disable power supply.
- 9) Connect  network  analyzer  to  AMP  2  (Port  1  =  J4, Port 2 = J6).
- 10)  Enable power supply.
- 11)  Measure |S21| of AMP 2. By default, AMP 2 is in highgain mode (component R7 open).

## Measure IP3 of AMP 1 (AMP 2 Can be Measured in a Similar Manner)

This procedure details how to conduct a two-tone test for IP3. Note that two signal generators are required. Always be aware of the possibility of interaction between the signal generators, although the power levels used in this case are modest, so this is only a moderate concern. Regardless, it  is  a good idea to use attenuators or isolators to ensure sufficient  isolation  and  to  be  prepared  for  some  troubleshooting and a few iterations of testing.

- 1) Disable  RF  generators  and  connect  them  together through a hybrid combiner.
- 2) Set  RF  frequencies  of  generators  to  1575MHz  and 1576MHz, respectively.
- 3) Connect output of combiner to power meter.

Enable generators one at a time and adjust the output level such that each generator is delivering -35dBm to the power meter (depending on the power meter, the level may need to be calibrated at a higher level and then backed off to achieve the desired -35dBm value).

- 4) Disable signal generators, connect combiner output to spectrum analyzer, and then enable generators.
- 5) Adjust spectrum analyzer and confirm that IM3 products cannot be observed at 1574MHz or 1577MHz. If  IM  tones  are  observed,  adjust  spectrum-analyzer attenuation level to confirm whether the IM is generated in the spectrum analyzer or generators. If the IM is created by the signal generators, add additional isolation and recalibrate the level as needed.
- 6) Disable generators and then connect output of combiner to the AMP 1 input (IN1, J5).
- 7) Connect  output  of  AMP  1  (OUT1,  J7)  to  spectrum analyzer  and  increase  spectrum-analyzer  attenuation  by  approximately  15dB  (this  helps  to  eliminate uncertainty whether any distortion is generated in the spectrum analyzer).
- 8) Confirm  5V  power  supply  connection  to  EV  kit connector JU1 and then enable the supply output.
- 9) Enable signal-generator outputs.
- 10)  Measure IM3 using spectrum analyzer and calculate IP3 assuming input power level of -35dBm/tone.

## Measure P1dB of AMP 1 (AMP 2 Can be Measured in a Similar Manner)

This procedure can be used to measure gain compression. Note that this is a single-tone test.

- 1) Disable  RF  generator  output  and  configure  with 1575MHz RF frequency and -30dBm power level.
- 2) Connect generator to AMP 1 input (IN1, J5).
- 3) Connect spectrum analyzer to  AMP 1 output (OUT1, J7).
- 4) Confirm 5V power-supply connection to EV  kit connector JU1 and then enable the supply output.
- 5) Enable signal generator.
- 6) Observe gain using spectrum analyzer. This is a highpower  measurement,  so  confirm  that  the  front-end attenuator  is  adjusted  appropriately  to  avoid  compression in the spectrum analyzer.
- 7) Increase power in 1dB steps. Observe gain for each step. Note input level at which gain is reduced from initially observed value (step 6) by 1dB.

## Measure Noise Figure of AMP 1 (AMP 2 Can be Measured in a Similar Manner)

Measurement  of  noise  figure  is  especially  challenging because of the MAX2678's excellent noise performance. Some experimentation may be required to obtain the best results. As a general rule, try to avoid clutter around the EV kit and ensure that obvious radiators of noise are not in close proximity to the test fixture. It may be helpful to use a shielded enclosure for this measurement.

- 1) Calibrate noise figure meter  and  test fixture at operating frequency of the IC.
- 2) Connect noise figure meter to input and output ports of AMP 1.
- 3) Confirm 5V power-supply connection to EV  kit connector JU1 and then enable supply output.
- 4) Observe noise figure.

## Detailed Description of Hardware

## SAW Filter

The  MAX2678  should  be  used  in  conjunction  with  an interstage SAW filter for optimal immunity to out-of-band interferers.  The  EV  kit  enables  evaluation  of  the  device with  a  pair  of  optional  industry-standard  SAW  filters. Resistor jumpers are used to realize the required signal routing. Refer to the schematic for details regarding the resistor configuration. Only one SAW filter should be used at a given time. Refer to the BOM information at the end of  this  document  for  specific  details  regarding  the  SAW filters.

## RF Signal-Routing Options

As  previously  mentioned,  resistor  jumpers  are  used  to configure the signal path, depending on whether standalone or cascade/SAW filter testing is desired. Only one of  the  three  available  overlapping  resistor  locations  in each  signal-routing  junction  should  be  populated  at  a given  time  to  avoid  creating  stubs.  It  is  recommended that  0Ω  film  resistors  be  used  since  they  offer  very  low inductance.

## Gain Select

AMP 2 includes a 3.4dB gain step. This enables the gain to be tailored to specific applications and adjusted based on loss in the SAW filter. The gain mode is controlled by resistor  R7,  which  configures  AMP  2  for  high  gain.  By default,  R7  is  not  installed.  To  enable  low-gain  mode, install a 0Ω resistor in location R7.

## Layout Considerations

Taking  full  advantage  of  the  IC's  excellent  noise  perfor -mance requires careful PCB layout. The input to AMP 1 is the most sensitive to noise pickup. Everything downstream of AMP 1's output is much less sensitive due to the high gain  of  AMP  1.  Therefore,  the  IC  should  be  oriented  to optimize  the  interconnect  between  AMP  1's  input  and the antenna. In general, this interconnect should be kept as  short  as  possible  to  achieve  the  best  possible  performance,  and  should  be  isolated  from  suspected  noise sources  by  a  combination  of  shielding  and  proper  floor planning. Controlled impedance should be used on all RF interconnects to avoid any unpredictable behavior, and all matching  components  and  decoupling  capacitors  should be placed in close proximity to the IC package.

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX2678EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX2678 EV Bill of Materials

| REFERENCE DESIGNATOR   |   QTY | VALUE           | DESCRIPTION                           | MANUFACTURER              | MFG. PART NUMBER   |
|------------------------|-------|-----------------|---------------------------------------|---------------------------|--------------------|
| C1, C4                 |     2 | 33pF            | 0603 Capacitor                        | Murata                    | C0603C330K1GAC     |
| C5                     |     2 | 0.1uF           | 0603 Capacitor                        | Murata                    | GRM188R72A104KA35  |
| C6                     |     1 | 1.2pF           | 0603 Capacitor                        | Kemet                     | C0603C129C1G       |
| C7                     |     2 | 100pF           | 0603 Capacitor                        | Murata                    | GRM1885C1H101JA01  |
| FL1                    |     0 | 1575.42 MHz DNI | Low Loss SAW Filter                   | RF Monolithics Inc        | SF1186B-2          |
| FL2                    |     0 | 1575.42 MHz DNI | Low Loss SAW Filter                   | Epcos                     | B39162-B4059-U810  |
| J4, J5, J6, J7         |     4 | Connector       | SMA End Launch Jack Receptacle 0.062" | Johnson                   | 142-0711-821       |
| JU1                    |     1 | 1X2 Header      | Two Pin Header; 100 Mil Centers       | Sullins                   | PEC36SAAN          |
| L2                     |     1 | 3.9nH           | 0603 Inductor                         | Murata                    | LQW18AN3N9C00      |
| R1, R2, R5, R6, R7     |     0 | DNI             | 0603 Resistor                         |                           |                    |
| R3, R4                 |     2 | 0Ω              | Resistors                             |                           | CR0603-16W-000RJT  |
| U1                     |     1 | MAX2678         | GPS LNA                               | Maxim Integrated Products | MAX2678GTB/V+      |
| -                      |     1 | -               | PCB: MAX2678 EVKIT                    | -                         | -                  |

Evaluates: MAX2678

## MAX2678 EV Kit Schematics

<!-- image -->

## MAX2678 EV Kit Layout Diagrams

MAX2678 EV Kit Component Side-Top Silkscreen

<!-- image -->

MAX2678 EV Kit PCB Layout-Layer 2 (GND)

<!-- image -->

MAX2678 EV Kit Component Side-Component Side

<!-- image -->

MAX2678 EV Kit PCB Layout-Layer 3 (GND)

<!-- image -->

## MAX2678 EV Kit Layout Diagrams (continued)

MAX2678 EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX2678 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/16           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX2678