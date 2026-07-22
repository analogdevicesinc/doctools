<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX774 ISDN, Ring-Tone, Power-Supply Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

The MAX774 ISDN ring-tone power-supply (IRG) evaluation  kit  (EV  kit)  provides  the  high  voltages  required  for implementing a plain old telephone system (POTS) interface on ISDN modems and line cards. It is a fully assembled and tested board that provides a tightly regulated, -24V output for powering off-hook voice communication and a -70V output for on-hook, ring-tone generation.

The EV kit is designed for applications that implement the  telephone interface using subscriber line interface circuit (SLIC) ICs, such as the AM79R79 from AMD and comparable products from Lucent, Harris, and other vendors. Its design feeds back the -24V output, achieving tight regulation for clean voice-signal transmission. An economical, off-the-shelf, surface-mount transformer reduces system cost and size. Compact design conserves board area. High efficiency and reduced quiescent current make this design the optimal solution for green PC and portable designs.

The MAX774 IRG EV kit can also be used to evaluate the MAX775/MAX776. It has a layout that allows modification for  -48V  output  operation  as  well  as  adaptation for lower-voltage European applications.

Caution: Touching the MAX774 IRG EV kit's -70V output can result in electrical shock. Do not touch the -70V output during operation or for five minutes after operation. Maxim assumes no liability for injury or damage resulting from unsafe operation of this EV kit.

- ♦ +3V to +16.5V Operating Range
- ♦ Tightly Regulated, -24V Output for Off-Hook Voice Communication
- ♦ -70V Output Supports a Five-Ringer-Equivalent Load (VIN &gt; 10.5V)
- ♦ Compact Construction
- ♦ Proven PC Board Design
- ♦ Uses Off-the-Shelf Components
- ♦ Up to 84% Efficiency
- ♦ 5µA Shutdown Current
- ♦ Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART           | TEMP. RANGE   | BOARD TYPE                           |
|----------------|---------------|--------------------------------------|
| MAX774IRGEVKIT | 0°C to +70°C  | Mixed Surface Mount and Through-Hole |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C1            |     1 | 100pF, 100V ceramic capacitor                                       |
| C2            |     1 | 1nF, 50V ceramic capacitor                                          |
| C3, C7        |     2 | 0.1µF, 50V ceramic capacitors                                       |
| C4            |     1 | 0.33µF, 25V ceramic capacitor                                       |
| C5, C6        |     2 | 68µF, 20V, low-ESR tantalum capacitors AVX TPSE686M020R0150         |
| C8            |     1 | 0.1µF, 100V ceramic capacitor                                       |
| C9            |     1 | 220µF, 35V, low-ESR aluminum-electrolytic capacitor Sanyo 35CV220GX |
| C10           |     1 | 120µF, 63V, low-ESR aluminum-electrolytic capacitor Sanyo 63MV120GX |
| D1            |     1 | 1A, 100V Schottky diode Motorola MBRS1100T3                         |

| DESIGNATION   |   QTY | DESCRIPTION                                                  |
|---------------|-------|--------------------------------------------------------------|
| D2            |     1 | 1A, 200V, ultra-fast diode Nihon EC11FS2                     |
| L1            |     1 | 10µH, 3.2A transformer Coiltronics VP2-0216                  |
| P1            |     1 | 60V, R DS(ON) = 0.15 Ω P-MOSFET (D-PAK) Motorola MTD20P06HDL |
| R1            |     1 | 1M Ω , 1% resistor                                           |
| R2            |     1 | 63.4k Ω , 1% resistor                                        |
| R3            |     1 | 68m Ω , 1/2W, metal-strip resistor Dale WSL-2010-R068-F      |
| R4            |     1 | 330k Ω , 100V, 5% resistor                                   |
| R5, R6        |     2 | 8.2k Ω , 5% resistors                                        |
| U1            |     1 | Inverting controller IC (8 SO) Maxim MAX774CSA               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## MAX774 ISDN, Ring-Tone, Power-Supply Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER        | PHONE          | FAX            |
|-----------------|----------------|----------------|
| AVX             | (803) 946-0690 | (803) 626-3123 |
| Coiltronics     | (561) 241-7876 | (561) 241-9339 |
| Dale-Vishay     | (402) 564-3131 | (402) 563-6418 |
| IRC             | (512) 992-7900 | (512) 992-3377 |
| Motorola        | (602) 303-5454 | (602) 994-6430 |
| Nichicon        | (847) 843-7500 | (847) 843-2798 |
| Nihon           | (805) 867-2555 | (805) 867-2698 |
| Raychem         | (650) 361-6900 | (650) 361-5575 |
| Sanyo           | (619) 661-6835 | (619) 661-1055 |
| Sprague         | (603) 224-1961 | (603) 224-1430 |
| Vishay/Vitramon | (203) 268-6261 | (203) 452-5670 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX774 IRG evaluation kit (EV kit) is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a 12V, 2A power-supply ground terminal to a GND pad on the MAX774 IRG EV kit.
- 2) Monitor the input current by connecting the power supply's positive terminal to the EV kit's VIN input through a current meter.
- 3) Attach a voltmeter across the EV kit's VIN and GND inputs to monitor input voltage.
- 4) Connect voltmeters to each of the EV kit's outputs labeled -70V and -24V.
- 5) Connect the SHDN pad to GND.
- 6) Turn on the power supply and slowly increase the voltage to 12V.
- 7) Monitor the outputs for correct voltage and check the input for typical supply current (20mA at 12V).

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX774 IRG EV kit provides the high voltages required for implementing a plain old telephone system (POTS) interface on ISDN modems and other telephone line cards. These boards typically employ ICs such as the AM79R79 Ringing Subscriber Line Interface Circuit (SLIC) from AMD. These ICs generate an analog telephone interface by providing both off-hook and onhook signal transmission, ring-tone generation, and ring-trip  detection.  Ringing  SLIC  ICs  typically  require two high-voltage power-supply inputs. The first is a tightly  regulated  voltage  around -24V or -48V for offhook signal transmission. The second is a loosely regulated -70V for ring-tone generation. Servicing a typical five-ringer  equivalent load requires a current around 100mA or more from the -70V supply, depending on the SLIC IC and the ring-generation scheme.

The MAX774 IRG EV kit can service a SLIC with a fivephone ringer equivalent load (approximately 9W) from a 12V ±10% input. It operates down to 3V, and provides 2.4W from 3.3V and 3.9W from 5V. Use of an inexpensive off-the-shelf transformer, such as the Versa-Pac™ model VP2-0216, provides both high-voltage outputs from a single inverting DC-DC controller, reducing board area and component costs. Selection of a transformer with multifilar winding enhances cross regulation by improving voltage coupling between the outputs and reducing spiking from leakage inductance.

The two outputs are implemented by connecting three pairs of transformer windings in series. The -24V output is obtained by connecting a diode (D1) and output filter capacitor (C9) to the first pair of windings. Feeding back this output achieves tight regulation. The -70V output is derived from the third pair of windings. Loose regulation of this output is obtained by the turns ratio with the -24V output.

## Circuit Operation

The EV kit schematic (Figure 1) and the MAX774 block diagram in the MAX774/MAX775/MAX776 data sheet show how the circuit works. When the -24V output drops out of regulation, the error comparator in the MAX774 initiates a switching cycle. The P-channel MOSFET (P1) turns on, allowing current to ramp up through the transformer's lower windings (between the 1/3 tap and ground) and store energy in a magnetic field.  When the current through the sense resistor crosses the trip threshold (210mV / 68m Ω = 3.09A), the MOSFET turns off and interrupts the current flow, causing the magnetic field in the transformer to collapse. The transformer forces current through the output diodes, transferring the stored energy to the output filter  capacitors.  The  output  filter  capacitors  smooth  the power and voltage delivered to the load. The MAX774 waits until it senses the output dropping below the regulation trip  point  before  initiating  another  cycle.  The -24V output is precisely regulated by connecting a voltage divider, R1 and R2, as shown in Figure 1. The MAX774 regulates the FB pin, keeping it at 0V. The -70V output is regulated using the turns ratios between the -24V and -70V output.

Versa-Pac is a trademark of Coiltronics Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX774 ISDN, Ring-Tone, Power-Supply Evaluation Kit

Figure 1.  MAX774 IRG EV Kit Schematic

<!-- image -->

## Output Filter Capacitors

The positive pin of the filter capacitor for the -70V output is connected to the -24V output rather than ground to simplify board layout, enhance stability, allow the use of  a  lower-cost  lower-voltage  capacitor, and improve cross-regulation. Ripple on the -24V output is about 200mV and can be reduced further using a capacitor with lower ESR. The Sanyo MV-GX series is recommended.

## \_\_\_\_\_\_\_\_\_\_Applications Information

This section is intended to aid in transferring the EV kit design to a finished product.

## Transformer Selection

Choose a transformer with an inductance around 10µH to  15µH per winding, with a saturation-current rating greater  than  3A.  The  MAX774  IRG  EV  kit  uses Coiltronics' Versa-Pac model VP2-0216. This economical,  off-the-shelf  transformer  uses  two  trifilar  windings for  superior  coupling and improved regulation of the

<!-- image -->

-70V output. Dale's LPE6855-100MB and LPE6562100MB also work, but have different footprints and pinouts and require almost double preloading.

If  lower  output  power  is  desired,  increase  the  currentsense-resistor value and transformer inductance proportionally. For example, when reducing power capability to one-half of the current design, double the current-sense resistor  to  around  130m Ω and the transformer inductance per winding to around 20µH to 33µH.

## Cross Regulation

The -70V output is derived from the -24V output by stacking pairs of windings in an autotransformer configuration. Cross regulation between the two outputs, however, has limitations. In the on-hook and ringing case, when the -24V output is lightly loaded with the -70V output heavily loaded, the -70V output droops. In the offhook case with the -24V output heavily loaded and the -70V output lightly loaded, the -70V output rises. These effects occur in all transformer-based flyback solutions when the outputs are dissimilarly loaded.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX774 ISDN, Ring-Tone, Power-Supply Evaluation Kit

## Preloading

Use preloading at the outputs to keep the -70V output in regulation. For designs servicing a five-ringer equivalent  load,  use  the  following  preloads.  For  the  off-hook case, only a couple hundred microamperes are necessary to hold down the -70V output. This can be achieved using either a 330k Ω resistor (R4, Figure 1) or zener diode (Figure 2b). For the on-hook case, draw approximately 5.5mA from the -24V output to hold up the -70V output. This 5.5mA can be drawn continuously using two 8.2k Ω resistors (R5 and R6), or intermittently using a transistor to gate the preload while the phone is ringing (Figure 2c). The transistor can be controlled using a microcontroller input/output line, or it can be decoded from the control signals of the AM79R79.

To optimize performance or efficiency in applications servicing a different ringer-equivalent load, use the preloading curves for guidance (Figure 3 and 4). Use Figure 3 to determine the minimum preloading needed on the -24V output for adequate regulation of the -70V output while the SLIC IC is ringing phones (on-hook case). For example, approximately 50mA is required for a two-phone load. First, follow the vertical line from the 70V output axis up to curve A or B. Next, follow the horizontal  lines  to  the  corresponding point on the -24V Output Minimum Load axis, in this case 2.5mA using curve A. Preload the -24V output with this current using a resistor R = V / I or 24V / 2.5mA = 9.6k Ω .  Round down to the nearest standard value (9.1k Ω ). The power rating  of  the  resistor  must  exceed  V 2  /  R  =  24V 2  /  9. 1k Ω = 63mW.

Figure 2.  Fixed and Switchable Preloading Schemes

<!-- image -->

Use Figure 4 to determine the preloading needed to hold down the -70V output when the -24V output is heavily loaded during off-hook communication. This preloading is intended to protect the AM79R79. The VBAT1 pin of this SLIC IC has a -75V operational range and a -80V absolute maximum rating. If a zener diode is used for preloading, set the zener voltage rating sufficiently  above the regulation set point to prevent unnecessary current draw.

## Efficiency, Quiescent Current, and Preloading

The MAX774 is a pulse-frequency-modulation (PFM) controller  designed primarily for use in portable applications. It  improves efficiency and reduces quiescent current by switching only as needed to service the load. Prior to preloading, this circuit's efficiency can be up to 84%, and quiescent current is around 170µA. Resistor preloading reduces efficiency and increases

Figure 3. Cross Regulation for -24V Output Preload Selection (on-hook case)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX774 ISDN, Ring-Tone, Power-Supply Evaluation Kit

quiescent current. Switchable preloading on the -24V output (Figure 2c), combined with zener clamping of the -70V output (Figure 2b) can be used to reduce circuit current consumption.

Connect the ground terminal of the -70V filter capacitor to  the  -24V  output  rather  than  to  ground.  (This  also improves transient response and simplifies layout.)

Current Limiting and Overload Protection Neither this EV kit nor competing solutions have a practical level of current protection at the outputs. Use the current-limiting features built into the AM79R79 SLIC IC as described in the data sheet for that product. Using PolySwitch™ resettable fuses at the outputs adds protection to the system at little expense (Figure 5). With a PolySwitch, use faster models such as the surfacemount SMD series.

The MAX774 uses an internal current-sense comparator  that  provides  pulse-by-pulse  input  current  limiting. However, like competing flyback solutions, this translates  to  power  (and  not  current)  limiting  at  the  output. As the output voltage pulls down during overload, the output current can become high (essentially PIN(MAX) / VOUT) until inefficiency and parasitic resistance in the circuit  dominate.  Since  the  circuit  is  designed  for  9W (min) output to service a five-phone load, short-circuit currents can reach several amperes.

Stability and Feedback Compensation The MAX774 IRG EV kit has been compensated and tested for a full range of loads. When implementing the circuit,  ensure  stability  by  following  the  EV  kit  board and component list (see PC Board Layout section). Use NPO or COG ceramic capacitors for C1 and C2.

PolySwitch is a trademark of Raychem Corp.

<!-- image -->

Figure 4. Cross Regulation for -70V Output Preload Selection (off-hook case)

<!-- image -->

The MAX774 uses a PFM control scheme that adjusts the pulse rate to regulate power and voltage to the load. Pulse spacing decreases with increasing load. As the pulses begin touching each other, the circuit transitions  into  continuous-conduction mode. Stable transition  into  continuous  conduction occurs through pulse grouping, with gaps less than two cycles wide between groups, and output ripple no larger than the singlecycle voltage ripple at light loads (Figure 6).

Poor PC board layout or improper compensation can cause instability by corrupting the feedback signals. Instability  is  identified  by  either  grouped  pulses,  large gaps between groups, or output ripple larger than the single-cycle voltage ripple (Figure 7). It can cause increased audio interference. Test for instability with a

Figure 5.  Overload Protection Using Raychem PolySwitch Resettable Fuses

<!-- image -->

Figure 6.  Normal Light-Load Switching Waveforms

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX774 ISDN, Ring-Tone, Power-Supply Evaluation Kit

9V input by applying a 5mA to 10mA load on the -24V output and then sweeping the -70V output to full-load. If instability  occurs  due  to  errors  in  the  design  if  a  production board, try removing C7 and C8.

If  the  feedback  resistors  are  changed, adjust the compensation capacitors. In general, M x C1 x R1 = C2 x R2 with C2 around 1nF provides the best results, where M ranges from 0.5 to 1.

## PC Board Layout

Use of the tested PC board design is strongly recommended. Components can be placed closer together to conserve space. Observe the following guidelines in PC board design:

- 1) Place the current-sense resistor (R3) within 0.2in. (5mm) of the MAX774, directly between the V+ and CS pins. The V+ and reference-bypass capacitors (C3 and C4) must be placed as close as possible to their  respective pins. Figure 8 shows the recommended layout and routing for these components.
- 2) Place the voltage-feedback resistors (R1 and R2) and compensation capacitors (C1 and C2) within 0.2in.  (5mm) of the MAX774's FB pin. Keep highcurrent traces and noisy signals, such as EXT, away from FB. On multilayer boards, if inner ground or power planes are thinly separated from the top-side copper, use small cutouts in the ground plane under the FB node to reduce stray capacitance and capacitive coupling.
- 3) Make high-power traces, highlighted in the EV kit schematic (Figure 1), as short and as wide as possible.  Make the supply-current loop (formed by C5, C6, R3, P1, and L1) and output current loops (L1, D1, and C9 for the -24V output; L1, D2, C9, and C10 for  the  -70V  output)  as  tight  as  possible  to  reduce radiated noise.
- 4) Route transformer L1's ground pins (C5, C6, and C10) to a common ground point in a star ground configuration using top-side copper fill as a pseudoground plane. On multilayer boards, use the star ground as described, and connect it to the inner ground plane using vias. Build up separate star grounds for the power components and controller IC (Figure 9), and then couple them together through the back side of the board using several vias.
- 5) For reduced noise and improved heat dissipation, keep the extra copper on the PC board's component and solder sides, rather than etching it away, and connect it to ground for use as a pseudoground plane.

## DC-DC Converter Placement and Audio Interference

Prevent interference through careful board and system design. Place the DC-DC converter and high-speed CMOS logic on a corner of the PC board, away from sensitive analog circuitry such as audio-signal preamplifier stages (Figure 10). In very compact designs, use localized shielding around sensitive analog stages. Use a separate ground plane for analog circuitry. Where necessary, reduce supply ripple to sensitive analog stages by using LC Pi filters or specialized, low-dropout linear  regulators.  Tiny,  inexpensive linear regulators, such as the SOT23 MAX8863 and µMAX MAX8865, are designed specifically for this purpose. These solutions are commonly used in cellular phones and other portable communications devices.

Figure 7.  Unstable Switching Waveforms from Improper Compensation or Board Design

<!-- image -->

Figure 8.  Recommended Placement and Routing of R3, C3, and C4

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX774 ISDN, Ring-Tone, Power-Supply Evaluation Kit

Figure 9.  Key Layout Features

<!-- image -->

Modification for -48V and -70V Outputs The MAX774 IRG EV kit board design allows leeway for adapting the circuit for -48V and -70V outputs. Perform the following steps for implementation:

- 1) Cut the trace from the transformer's 1/3 tap to the output diode, and then solder a wire jumper from the  transformer's  2/3  tap  to  the  diode  (D2) (Figure 11).
- 2) Swap output filter capacitors C9 with C10. Be sure to connect them with the correct polarity. This exchange ensures that the output filter capacitors have voltage ratings exceeding their respective outputs.
- 3) Replace voltage-feedback resistor R2 with a 31.6k Ω resistor.
- 4) Replace compensation capacitor C1 with a 330pF ceramic capacitor.
- 5) Change R5 and R6 to 16k Ω resistors.

<!-- image -->

Figure 10.  Place the DC-DC converter and CMOS logic away from sensitive analog circuitry.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX774 ISDN, Ring-Tone, Power-Supply Evaluation Kit

Modification for European Applications Applications targeted for Europe may require a lower voltage on the -70V output to meet European safety regulations. In such cases, modify the circuit for -48V and -70V outputs as described previously, then change the  feedback resistor R2 to reduce output voltages to -43V and -65V. Add a clamping zener to preload the high-voltage output. Since the MAX774 regulates the FB pin to 0V, R2 will be:

Figure 11.  PC Board Changes for -48V and -70V Operation

<!-- image -->

Figure 13.  MAX774 IRG EV Kit PC Board Layout-Component Side

<!-- image -->

R2 = (VREF / VOUT) x R1

where VREF = 1.5V.

Adjust C1 so that R1C1 = R2C2. Verify correct compensation by examining stability over all loading combinations, especially with the -43V output lightly loaded and the -65V output moderately and heavily loaded. Suggested values are R1 = 1M Ω, C1 = 330pF, R2 = 34.8k Ω, C2 = 1000pF.

Figure 12.  MAX774 IRG EV Kit Component Placement Guide (Top Silkscreen)

<!-- image -->

Figure 14.  MAX774 IRG EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8