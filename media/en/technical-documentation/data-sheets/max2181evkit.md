<!-- lastmod 2022-08-02 -->
## MAX2181 Evaluation Kit

## General Description

The  MAX2181  evaluation  kit  (EV  kit)  simplifies  evaluation of the MAX2181 FM low-noise amplifier. The EV kit enables testing of the device's features and performance and  does  not  require  additional  support  circuitry  or software.  The  signal  input  and  output  use  SMA  connectors  to facilitate connection of RF test equipment.

The EV kit is fully assembled with the device on board and incorporates input matching components for the U.S. FM broadcast band.

## Features

- Easy Evaluation of the MAX2181
- +6V to +24V Single-Supply Operation
- RF Input and Output Matched to 50Ω
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX2181

## Quick Start

## Required Test Equipment

- RF  signal generator (or generators) capable  of delivering  a  signal  in  the  76MHz  to  162.5MHz  (FM) range  at  a  power  level  of  -34dBm.(A  higher  power source is required to measure distortion performance. See the Measurements section for more details)
- RF  spectrum  analyzer  that  covers  the  operating frequency range
- DC power supply capable of supplying +6V to +24V
- 50Ω cables with SMA connectors
- Ammeter to measure supply current (optional)
- Noise-figure meter to measure NF (optional)
- Network  analyzer  to  measure  gain  and  return  loss (optional)

## Connections and Setup

## Checking Gain

The EV kit is fully assembled and factory tested. Follow the steps below for proper device evaluation in the default configuration.

- 1)  Connect a DC supply with its output disabled (preset to +10V) to the VBATT and GND terminals (through an ammeter, if desired) on the EV kit.
- 2)  Set the RF generator to the desired frequency  at  a  power  level  of  -37dBm.  Disable  the generator's  output  and  connect  it  to  the  FMIN  SMA connector on the EV kit.
- 3)  Connect an SMA cable from the FMOUT SMA connector to the input of the spectrum analyzer.
- 4)  Turn on the DC supply. The supply current should read approximately 56mA.
- 5)  Activate the RF generator's output. The signal on the spectrum analyzer's display should indicate a typical

<!-- image -->

## MAX2181 Evaluation Kit

gain, as shown on the MAX2181 IC data sheet after accounting for cable and board losses.

- 6)  Optional:  Another  method  of  determining  gain  is  by using  a  network  analyzer.  This  has  the  advantage of  displaying  gain  versus  a  swept  frequency  band, in addition to displaying input and output return loss. Refer to the user manual of the network analyzer for setup information. Note: Depending on the settings of the  device's  maximum  gain  and  power  detector,  the AGC loop can become active for input  power  levels as  low  as  -24dBm.  To  ensure  consistent  results  are obtained,  the  stimulus  level  of  the  network  analyzer should be no greater than -34dBm, ensuring that the gain is unaffected by the AGC loop.

## Detailed Description of Hardware

## Test Points

The MAX2181 signal path includes a power detector and AGC loop, which can be adjusted for maximum gain and AGC threshold. In addition, the AGC loop can be overridden by applying an external voltage to the FMAGC pin. Table 1 describes how to control the performance of the device using the test points on the EV kit.

## Measurements

## Noise

Noise figure can be measured using a NF meter. Because of the large number of FM broadcast signals that might be present, this measurement should take place with the EV kit in a screen box or other type of RF shield.

## Distortion

Two-tone  distortion  of  the  amplifier  can  be  measured using a power combiner to couple the signals from two generators into FMIN on the EV kit. During closed-loop operation,  as  the  signal  levels  increase,  the  device's input impedance is reduced. At the upper end of the input signal level range, where each tone can be greater than 120dBµV,  this  reduced  impedance  could  create  distortion within the signal generators. For accurate distortion measurement,  the input of the EV  kit should be isolated from the signal generators and power combiner. This can be accomplished using a ferrite isolator.

## Layout Considerations

## Electrical

At high-signal-level conditions, the RF currents flowing in the device can induce voltages in the PCB ground plane, known as 'ground bounce.' To avoid unwanted spurious products due to ground bounce, proper grounding techniques must be followed.

## Thermal

The device is designed to meet data sheet specifications at supply voltages up to +15V and to function at supply voltages up to +24V. Under these conditions, a significant amount of power must be dissipated by the device. This requires  the  application  PCB  to  provide  a  low  thermal impedance path to a thermal ground.

The  EV  kit  PCB  design  accounts  for  this  by  providing an array of thermal vias in the ground plane and a wide top metal trace connecting the package pad to a nearby screw.  Adjacent  pins  5-7  and  14-16  are  all  grounded, which allows the wide trace.

Table 1. Control Performance with Test Points

| TEST POINT   | FUNCTION                   | DESCRIPTION                                                                                                                                               |
|--------------|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| ANTSENSE     | Antenna sense              | Disables the device and sets the supply current to 20mA (typ) if the antenna fault is detected. Refer to the MAX2181 IC data sheet.                       |
| FMAGC        | FMAGC loop control voltage | Applying a DC control voltage to FMAGC allows the user to override theAGC loop. 0V gives maximum gain; 5V gives minimum gain.                             |
| FMDET        | FMAGC threshold            | Sets the FMAGC threshold. Refer to the MAX2181 IC data sheet. Default value on the EV kit is 99dBµV (typ) referred to the FMOUT SMAconnector (R4 = 43kΩ). |
| FMGAIN       | FM gain control            | Sets the maximum value of FM gain (FMAGC = 0V). Default setting on the EV kit is 6dB (typ) referred to the FMOUT SMAconnector (R2 = 10kΩ).                |
| LDO          | Regulated voltage          | Allows measurement of internal regulator voltage.                                                                                                         |

│

## Evaluates: MAX2181

## MAX2181 Evaluation Kit

## Component List

| DESIGNATION                                     |   QTY | DESCRIPTION                                                |
|-------------------------------------------------|-------|------------------------------------------------------------|
| ANTSENSE, FMAGC, FMDET, FMGAIN, LDO, VBATT (x2) |     7 | Test points                                                |
| C3, C9                                          |     2 | 0.1µF ±10% ceramic capacitors (0603) Murata GRM188R71E104K |
| C4                                              |     1 | 2700pF ±10% ceramic capacitor (0603) Murata GRM1885C1H272K |
| C5                                              |     1 | 0.47µF ±10% ceramic capacitors(0603) Murata GRM188R71C474K |
| C6                                              |     1 | 100pF ±5% ceramic capacitor (0603) Murata GRM1885C1H101J   |
| C7                                              |     1 | 33pF ±5% ceramic capacitor (0603) Murata GRM1885C1H3300J   |
| C10                                             |     1 | 10µF ±10% tantalum capacitor (C case) AVX TAJC106K035R     |
| C11                                             |     1 | 10µF ±10% tantalum capacitor (A case) AVX TAJA106K010R     |
| FMIN, FMOUT                                     |     2 | Connectors                                                 |
| GND                                             |     2 | Test points                                                |
| L1                                              |     1 | 470nH ±5% inductor (0603) Murata LQW18ANR47J00             |

## Component Suppliers

| SUPPLIER                   | PHONE        | WEBSITE                |
|----------------------------|--------------|------------------------|
| AVX North America          | 864-967-2150 | www.avx.com            |
| Keystone Electronics Corp. | 800-221-5510 | www.keyelco.com        |
| Murata Americas            | 800-241-6514 | www.murataamericas.com |

Note: Indicate that you are using the MAX2181 when contacting these component suppliers.

Evaluates: MAX2181

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| L2            |     0 | Not installed, ±5% midi spring air-cored inductor Coilcraft 1812SMS-R10JL |
| L3            |     1 | 82nH ±5% inductor (1008) Murata LQW2UAS82NJ00                             |
| L4            |     1 | 27nH ±5% inductor (0603) Murata LQW18AN27NJ00                             |
| R1            |     1 | 43kΩ resistor                                                             |
| R2            |     1 | 61.9Ω resistor                                                            |
| R3            |     1 | 105Ω resistor                                                             |
| R4            |     1 | 20kΩ resistor                                                             |
| R6            |     1 | 0Ω resistor                                                               |
| R7            |     1 | 100kΩ resistor                                                            |
| R8            |     1 | 10kΩ resistor                                                             |
| U1            |     1 | FM automotive low-noise amplifier (16 TQFN-EP*) Maxim MAX2181             |
| -             |     1 | Metal heat sink                                                           |
| -             |    10 | Screws                                                                    |
| -             |     5 | Standoffs                                                                 |
| -             |     1 | Brown box, 9 3/16in x 7in x 7/8in                                         |
| -             |     1 | ESD bag, 4in x 6in with ESD logo                                          |
| -             |     1 | Pink foam, 12in x 12in x 5mm                                              |
| -             |     1 | Web instructions                                                          |
| -             |     1 | PCB: MAX2181 EVALUATION KIT#                                              |

Figure 1. MAX2181 EV Kit Schematic

<!-- image -->

## Evaluates: MAX2181

Figure 2. MAX2181 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Figure 3. MAX2181 EV Kit PCB Layout-Top Copper

<!-- image -->

## Evaluates: MAX2181

Figure 4. MAX2181 EV Kit PCB Layout-Bottom Copper

<!-- image -->

## Ordering Information

# Denotes RoHS compliant.

| PART          | TYPE   |
|---------------|--------|
| MAX2181EVKIT# | EV Kit |

## MAX2181 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/13           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX2181