<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX7058 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX7058  dual-frequency  ASK transmitter in a 24-pin TQFN package with an exposed pad. The EV kit enables testing of the device's RF performance and requires no additional support circuitry. The RF  output  uses  a  50 I matching  network  and  an  SMA connector for convenient connection to test equipment. The EV kit comes with a MAX7058ATG+ installed on the EV board.

## Evaluates:  MAX7058 MAX7058 Evaluation Kit

Features

- S Proven PCB Layout
- S Proven Components List
- S Adjustable Programmable Frequency (315MHz and 390MHz)
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX7058EVKIT+ | EV Kit |

## Component List

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                              |
|---------------|-------|--------------------------------------------------------------------------|
| C1, C2, C3    |     3 | 0.01 F F Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H103K  |
| C4, C5        |     2 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K   |
| C6            |     1 | 680pF Q 5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H681J       |
| C7, C8        |     2 | 220pF Q 10%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H221K     |
| C9, C10       |     2 | 100pF Q 5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H101J      |
| C11           |     1 | 8.2pF Q 0.25pF, 50V C0G ceram- ic capacitor (0603) Murata GRM1885C1H8R2C |
| C12, C13      |     2 | 10pF Q 5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H100J       |
| C14, C15      |     0 | Not installed, ceramic capacitors (0603)                                 |

| DESIGNATION   |   QTY | DESCRIPTION                                                                  |
|---------------|-------|------------------------------------------------------------------------------|
| J1            |     1 | 5-pin header                                                                 |
| JU1-JU12      |    12 | 3-pin headers                                                                |
| L1            |     1 | 18nH Q 5% inductor (0603) Murata LQW18AN18NJ00                               |
| L2            |     1 | 22nH Q 5% inductor (0603) Murata LQW18AN22NJ00                               |
| R1            |     1 | 0 W Q 5% resistor                                                            |
| REFIN         |     0 | Not installed, SMA female verti- cal mount                                   |
| RFOUT         |     1 | SMA female vertical mount                                                    |
| TP1, TP3-TP12 |    11 | Black miniature test points                                                  |
| TP2           |     0 | Not installed, miniature test point                                          |
| U1            |     1 | 315MHz/390MHz dual-frequency ASK transmitter (24 TQFN-EP*) Maxim MAX7058ATG+ |
| Y1            |     1 | 15MHz crystal Crystek 017480                                                 |
| -             |    12 | Shunts                                                                       |
| -             |     1 | PCB: MAX7058 EVALUATION KIT+                                                 |

## Evaluates:  MAX7058 MAX7058 Evaluation Kit

## Component Suppliers

| SUPPLIER                         | PHONE        | WEBSITE                     |
|----------------------------------|--------------|-----------------------------|
| Crystek Corporation              | 800-237-3061 | www.crystek.com             |
| Murata Electronics North America | 770-436-1300 | www.murata-northamerica.com |

Note:

Indicate that you are using the MAX7058 when contacting these component suppliers.

## Quick Start

## Required Equipment

## Procedure

The  MAX7058  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1)    Verify that all jumpers (JU1-JU12) are in their default positions, as shown in Table 1.
- 2)    Connect the positive terminal of the 2.7V power supply to the VDD pad and the GND terminal to the GND pad. Do not turn on the power supply .
- 3)    By default, the MAX7058 is set to the carrier frequency of 315MHz (TOGGLE = 0, FSEL = 1).
- 4)    Connect the RFOUT SMA connector to the spectrum analyzer.  Set  the  analyzer  to  a  center  frequency  of 315MHz and a span of 1MHz.
- 5)    Add a shunt on jumper JU2 to the 1-2 position. This forces DIN to go high.
- 6)    Turn on the power supply and observe the spectrum analyzer.  The  spectrum  analyzer  should  display  a peak of approximately +10dBm at 315MHz. Set DIN to  0  by  moving the shunt on jumper JU2 to the 2-3 position. The spectrum analyzer peak at 315MHz is gone and only the noise floor displays. Set DIN to 1 by changing the shunt on JU2 to the 1-2 position. The center frequency is again at 315MHz.
- 7)    To test at a carrier frequency of 390MHz, change the shunt on jumper JU12 to the 2-3 position (FSEL = 0).
- 8)    Set  the  spectrum  analyzer  to  a  center  frequency  of 390MHz and a span of 1MHz.
- 9)    With the shunt on jumper JU2 in the 1-2 position, the spectrum analyzer should display a peak of approximately +10dBm at 390MHz. Set DIN to 0 by moving the shunt on JU2 to the 2-3 position. The spectrum analyzer peak at 390MHz is gone and only the noise floor displays. Set DIN to 1 by changing the shunt on JU2 to the 1-2 position. The center frequency is again at 390MHz.

## Additional Evaluation

For  efficiency  measurements,  apply  power  to  the  VDD pad with an ammeter in series. Apply 2.7V to VDD.

Connect a power meter to RFOUT. Measure the output power and supply current.

The efficiency is calculated by the following equation:

<!-- formula-not-decoded -->

where I is in milliamps, V is in volts, and POUT is in decibels relative to 1mW.

For example, if POUT is equal to +10dBm, supply current is 10mA, supply voltage is 2.7V, and the efficiency is approximately 37%.

- MAX7058	EV	kit
- Spectrum	analyzer
- 2.7V,	25mA	power	supply

## Evaluates:  MAX7058 MAX7058 Evaluation Kit

Table 1. MAX7058 EV Kit Jumper Description (JU1-JU12)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                            |
|----------|------------------|------------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2*             | Connects DVDD to VDD.                                                                                                  |
| JU1      | 2-3              | Connects DVDD to TP1. Must apply an external voltage on TP1 to power DVDD.                                             |
| JU2      | 1-2              | Connects DIN to VDD.                                                                                                   |
| JU2      | 2-3              | Connects DIN to GND.                                                                                                   |
| JU2      | Open*            | To apply external data to DIN, take the shunt off and apply a pattern on TP3. Data rate can be as high as 100kbps NRZ. |
| JU3      | 1-2*             | Connects ENABLE to VDD (normal operation).                                                                             |
| JU3      | 2-3              | Connects ENABLE to GND (standby).                                                                                      |
| JU4      | 1-2              | Connects TOGGLE to VDD (RF output data is toggled between the two carrier frequencies (see Table 2).                   |
| JU4      | 2-3*             | Connects TOGGLE to GND (single-carrier frequency).                                                                     |
| JU5      | 1-2*             | Connects AVDD to VDD.                                                                                                  |
| JU5      | 2-3              | Connects AVDD to TP6. Must apply an external voltage on TP6 to power AVDD.                                             |
| JU6      | 1-2*             | Connects PAVDD to VDD.                                                                                                 |
| JU6      | 2-3              | Connects PAVDD to TP7. Must apply an external voltage on TP7 to power PAVDD.                                           |
| JU7      | 1-2*             | Connects PAOUT to ROUT for ASK amplitude shaping in.                                                                   |
| JU7      | 2-3              | Connects PAOUT to PAVDD for ASK amplitude shaping out.                                                                 |
| JU8      | 1-2              | Connects CAP4 to VDD to add 4pF shunt capacitance to PAOUT only at 315MHz.                                             |
| JU8      | 2-3*             | Connects CAP4 to GND.                                                                                                  |
| JU9      | 1-2*             | Connects CAP3 to VDD to add 2pF shunt capacitance to PAOUT only at 315MHz.                                             |
| JU9      | 2-3              | Connects CAP3 to GND.                                                                                                  |
| JU10     | 1-2              | Connects CAP2 to VDD to add 1pF shunt capacitance to PAOUT only at 315MHz.                                             |
| JU10     | 2-3*             | Connects CAP2 to GND.                                                                                                  |
| JU11     | 1-2              | Connects CAP1 to VDD to add 0.5pF shunt capacitance to PAOUT only at 315MHz.                                           |
| JU11     | 2-3*             | Connects CAP1 to GND.                                                                                                  |
| JU12     | 1-2*             | Connects FSEL to VDD (see Table 2).                                                                                    |
| JU12     | 2-3              | Connects FSEL to GND (see Table 2).                                                                                    |

## Table 2. Toggle Pin Operation

|   TOGGLE PIN |   FSEL PIN | OPERATING STATE                                          |
|--------------|------------|----------------------------------------------------------|
|            0 |          0 | Continuous fixed-frequency operation at 390MHz.          |
|            0 |          1 | Continuous fixed-frequency operation at 315MHz.          |
|            1 |          0 | Five packets toggle operation between 315MHz and 390MHz. |
|            1 |          1 | 100 packets toggle operation between 315MHz and 390MHz.  |

## Evaluates:  MAX7058 MAX7058 Evaluation Kit

## Layout Issues

A properly designed PCB is essential for any RF/microwave circuit. Keep high-frequency input and output lines as short as possible to minimize losses and radiation. At high frequencies, trace lengths that are on the order of λ /10 or longer can act as antennas.

Both  parasitic  inductance  and  capacitance  are  influential on circuit layouts and are best avoided by using short trace lengths. Generally, a 10-mil wide PCB trace, 0.0625in above a ground plane, with FR4 dielectric has about 19nH/in of inductance and about 1pF/in of capacitance.  In  the  matching  network,  where  the  inductor  is on the order of 22nH and a capacitor is on the order of 10pF, the proximity of the circuit to the MAX7058 has a strong influence on the effective component values.

To reduce the parasitic inductance, use a solid ground or power plane below the signal traces. Also, use lowinductance  connections  to  ground  on  all  GND  pins, and  place  decoupling  capacitors  close  to  all  VDD connections.

## Detailed Description of Hardware

The  MAX7058  EV  kit  provides  a  proven  layout  for  the MAX7058. On-board test points are included to monitor various signals and to provide power (Table 3).

Table 3. Test Points

|   TP | DESCRIPTION                   |
|------|-------------------------------|
|    1 | External DVDD supply          |
|    2 | No connection (not populated) |
|    3 | DIN input                     |
|    4 | ENABLE input                  |
|    5 | TOGGLE input                  |
|    6 | External AVDD supply          |
|    7 | External PAVDD supply         |
|    8 | CAP4 input                    |
|    9 | CAP3 input                    |
|   10 | CAP2 input                    |
|   11 | CAP1 input                    |
|   12 | FSEL input                    |

## Power Supply

The  MAX7058  operates  from  a  2.1V  to  3.6V  supply. Apply an external voltage up to 3.6V between the VDD and GND pads. VDD by default powers DVDD, AVDD, and PAVDD.

## DVDD, AVDD, and PAVDD

DVDD,  AVDD,  and  PAVDD  are  powered  by  VDD  by default. To apply an external voltage to DVDD, change the shunt on jumper JU1 to the 2-3 position and apply an  external  voltage  on  TP1.  To  apply  an  external  voltage to AVDD, change the shunt on jumper JU5 to the 2-3  position  and  apply  an  external  voltage  on  TP6.  To apply an external voltage to PAVDD, change the shunt on jumper JU6 to the 2-3 position and apply an external voltage on TP7.

## External Frequency Input

For applications where an external frequency is desired over  the  crystal  frequency,  it  is  possible  to  apply  an external frequency through REFIN. Capacitors C14 and C15 are necessary (use a 100pF capacitor and remove the  Y1  crystal).  The  MAX7058  operates  by  multiplying  the  crystal  frequency  to  the  necessary  RF  carrier frequency.  When  FSEL  is  low,  the  crystal  frequency  is multiplied by 26 (390MHz) and when FSEL is high, the multiplication is 21 (315MHz). Changing the frequency to a different value would result in different carrier frequencies and components not matching the required impedance characteristics.

## Evaluates:  MAX7058 MAX7058 Evaluation Kit

Figure 1. MAX7058 EV Kit Schematic

<!-- image -->

## Evaluates:  MAX7058 MAX7058 Evaluation Kit

<!-- image -->

Figure 2. MAX7058 EV Kit Component Placement GuideComponent Side

Figure 3. MAX7058 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX7058 EV Kit PCB Layout-Solder Side

<!-- image -->

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

## Evaluates:  MAX7058 MAX7058 Evaluation Kit