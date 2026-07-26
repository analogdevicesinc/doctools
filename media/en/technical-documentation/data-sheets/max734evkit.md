<!-- lastmod 2022-08-02 -->
## EV Kit General Description

The MAX734 evaluation kit is a 12V-output, step-up, switch-modeconverter.Itdeliversaguaranteed120mA output current with input voltages as low as 4.75v. It is supply. The kit is assembled using the MAX734CSA 8-pin SO and surface-mounted passive components.

The MAx734 evaluation kit has a conversion efficiency of 85% with a low quiescent supply current of 1.2mA. The MAX734 supply current will reduce to less than 100uA whentheshutdowncontrolisactivated.

The MAx734 uses current-mode pulse-width modulation (PWM) control to provideprecise outputregulation and low subharmonic ripple noise. A fixed 17okHz oscillator frequency facilitates ripple filtering with the use of smaller externalcapacitors.

## Ordering Information

| PART           | TEMP. RANGE   | BOARD TYPE    |
|----------------|---------------|---------------|
| MAX734EVKIT-SO | 0°℃ to +70°℃  | Surface-Mount |

## MAX734 Evaluation Kit

## Suggested Test Procedure

Place the shunt across pins 1 and 2 of J1. This connects the SHDN pin to VIn for normal operation.

Connect a 5V power supply across the ViN and ground terminals on the evaluationkit printed circuit board.Do notapplypoweruntil all connectionsarecomplete.

Turn on the supply and measure the output voltage. It willbebetween11.52Vand12.48V.

Moving the shunt on J1 to pins 2 and 3 (SHDN to ground) causes the output voltage to drop to 0.3V (a Schottky diode drop) below VIN.

Theturn-ontimefor theMAx734iscontrolledby the capacitance on the soft-start pin(SS).C3 is connected to the pin but is not connected to ground. Placing a wire across the pads on J2 connects C3 and changes the start-up time from 1ms to 2.5ms.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                             | MANUFACTURER                               |
|---------------|-------|-----------------------------------------|--------------------------------------------|
| C1, C5        |     2 | 33uF16Vlow-ESRtantalumcapacitor         | Sprague595D336X9016A7or Matsuo267M1602336M |
| C2            |     1 | 0.1uFceramic1206SMDchip capacitors      |                                            |
| C3            |     1 | 0.01μF ceramic 1206 SMD chip capacitors |                                            |
| C4            |     1 | 0.001uFceramic 1206SMD chip capacitors  |                                            |
| D1            |     1 | 1N5817diode                             | PhilipsPRLL5817or Nihon EC15QS02L          |
| L1            |     1 | 18 μH SMT inductor                      | Sumida CD54-180                            |
| U1            |     1 | MAX734CSA                               |                                            |
| None          |     1 | MAX734datasheet                         |                                            |
| None          |     1 | printed circuit board                   |                                            |

Surface Mount Low-ESR Tantalum Capacitors.

Matsuo

(714) 969-2491

267M series

Sprague

(603) 224-1961

595D series

Through-Hole Low-ESR Electrolytic Capacitors.

Nichicon

(708) 843-7500

PL series

United Chemi-Con

(708) 696-2000

LXF series

Ceramic Capacitors

Murata-Erie

(404) 436-1300

Diodes

Nihon Inter Electronics (805) 867-2555

Philips

(401) 762-3800

MAXIM

6

## MAX734 Evaluation Kit

Input Voltage Range The maximum input voltage for the evaluationkit circuit is restrictedto7V(ratherthan9VstatedintheMAx734data sheet)becauseofinductorvaluechoice.ACinstability duetohighpeakcurrentswillresultifthiscircuit is operated above7V supply at heavy loads.For a wider inputrange,increasetheinductorvaluetothe22uHto 47uHrange.If the circuit is operated incontinuous-conductionmode,withboth high load current and highinduccapacitors，plus soft-start and reference bypass capacitors to achievelow-noise operation.Continuousconductionmodeallowsforlower noise,somewhat greaterload-currentcapability,andbetterefficiencyathe expense of component size and complexity.

Figure 4.MAX734EVKit SchematicDiagram

<!-- image -->

## Table 3.Troubleshooting Chart

| SYMPTOM                                    | POSSIBLE CAUSE                                                                                                                                                                                |
|--------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| whenloadisap- Output collapses plied       | 2. 1. Input supply cannot support demand. SHDN is floating. Use500mA5V source. 3. Load too heavy:reduce to 120mA or less.                                                                     |
| Excessiveoutput noise or spikes            | 1. Scope ground lead is picking up radiatedEMl;shortenit. 2. Filtercapacitorhashighinductance. Addafilterconsistingofa0.5Ωseries resistoranda 0.1μFcapacitortothe output. 3 SHDN is floating. |
| Input supply has noise,orspike on start-up | Inadequate input filtering:increase C1 value/reduceESRoraddaseries inductor. 2. Needs soft-start. Add a 47nF SS capacitor.                                                                    |

<!-- image -->

Figure5.ComponentPlacementDiagram(1xScale)

<!-- image -->

<!-- image -->

Figure6a.PrintedCircuitLayout(1xScale,ComponentLayer, SideView)

<!-- image -->

Figure 7.Output Voltage Noise—Unfiltered and Filtered

<!-- image -->

## MAX734 Evaluation Kit

## MAX734 EV Kit

Figure 6b.Printed Circuit Layout(1x Scale,Bottom Layer,ComponentSideView)

<!-- image -->

Figure8.MAX734SwitchingWaveforms

<!-- image -->

## MAX734 Evaluation Kit

## Flash EEPROM Programmer Applications Information

These application notes give a general description of the VpP programming process and Vpp requirements, followed by a"cookbook" collection of flash memory powersupplycircuits.These notes are not specific to the MAX734; instead, they employ a number of different IC and discrete solutions.

The seemingly trivial requirement of a +12V DC supply with on/off control leads to some odd and interesting solutions.Four such circuits will be discussed:a 5V-to12V switch-mode supply for mainstream applications, a linear regulator approach for applications offering higher levels of raw DC voltage, a charge-pump voltage booster that needs no inductors, and four different switching regulators for notebook and palmtop computers and other battery-powered systems.

## Flash Memory Programming Power, Vpp

Vpp is a label for the 12V DC input terminal on flash memory ICs.Proper operation of the IC restricts this voltage to a narrow window，sandwiched betweenthe conditions of overvoltage—withinstantself-destruction—andundervoltage — which can cause faulty programming due to insufficient charge transfer. Consequently, the 5% tolerancesonthedatasheet areessentialspecifications.

Flash memory behaves as a primarily capacitive load, with theresultthatwriteoreraseoperationscauseafast-rising current spike (tr &lt; 20ns) at the VpP pin (Figure 9). Good local bypassing is a must, because the spikes usually exceed the data sheet specs for DC Ipp by a wide margin.

A question that may arise is why, if the flash EEPROM load is mostly capacitive, can't the DC load requirements on the power supply be relaxed in favor of adding high-energy filter capacitors to supply the capacitive load spike? Theanswer liesintheEEPROM'serasecycle.When the cycle begins, an internal switching transistor connects 12Vto the source terminals of all transistors in the memory cellarray,and thegatesofeachofthesingle-transistor memory cells are grounded. Fowler-Nordheim tunneling then erases all bits in the array simultaneously.

The grounded' gates cause a breakdown of the gate dielectric, which allows an unwanted flow of DC current (15mA typical,30mA worst-caseformostflash devices). Erasecycleslastatleasttenmilliseconds,sotohold the output-ripple, amplitude below 200mV the hold-up capacitor must be 150,000uF — an unreasonably large value. Therefore, the power supply must be inherently capableofdeliveringtheworst-caseDCIppcurrent.

## Flash Memory Ipp Requirements: 30mA, 60mA, 120mA

Flash memory DC-DC applications with Vpp supplies involvingDC-DCconversioncanbesorted byload current or by input voltage.First, the load current considerations:

In designing a flash memory power supply, the first variabletoconsideristhenumberofflashdevicestobe programmed at one time, because that number determinesthemaximumload current.Supplies,therefore,are commonly specified inmultiples of30mA-theworstcase Ipp current drawn by a typical byte-wide flash EEPROM chip during its erase cycle. This current is nearly independent of the memory size,even for experimental 8-and 16-Mbit devices.

Figure9.FlashMemoryIppInputCurrentWaveforms.Onthe spikessharplyto35mAor45mA,thensettlesto15mAsteadystateforthedurationof theerasecycle.Eraseverifyconsumes only 2.5mA.

<!-- image -->

Common current requirements for flash EEPROM supplies:

30mA:Update applications for embedded control firmwarearenotusuallyspeed-criticalbecause reprogrammingmightoccuronlyonceperyear (Figure 10). The current needed often defaults to thatnecessaryforprogrammingonedevice at a time (30mA). Some of these applications require 60mA or even more, if only for the convenience of programming 16 bits at a time.

60mA:In16-bitsystemswherewrite/erasetimesare important,a 60mA specallows twobyte-wide devices tobeprogrammed simultaneouslyin word-wide mode(Figure 11). ThePCMCIA PC memory cardforpalmtopcomputersis oneexample.

<!-- image -->

120mA:Solid-state"disc drives"madewithflash EEPROMsmaybecomecommoninnotebook computersoverthenexttwoorthreeyears.To achievequickaccess,thechipsareorganized into two separate banks, each 16 bits wide (Figure 12). While one bank is being programmed the other canbeerased.This arment to 120mA. rangement doubles the supply-current require-

<!-- image -->

Figure10.TypicalFirmwareUpdateApplication(Ipp=30mA). Typicalapplicationfor30mA:Adda5V-to-12Vconvertertoan 8-bitindustrialcontrolsystem.Maximumloadcurrentis3omA. Efficiencyisnotcriticalbutphysicalsizeandsimplicityaremportant.

<!-- image -->

Figure11.Mass-Storage1-PalmtopComputer(Ipp=60mA). Typicalapplicationfor60mA:Generate12Vfromalow-voltage batterypack(oftentwoseriesNiCadoralkalinecells)fora16bitsystem.Maximumloadcurrentis6omA.Efficiencyand standby supplycurrentsare important.

<!-- image -->

## MAX734 Evaluation Kit

Figure12.Mass-Storage2-Notebook/LaptopComputer(lpp= 120mA).Typicalapplicationfor120mA:Generate12Vfroma medium-voltagebatterypack(oftensixtotenseriesNiCad cells)fortwobanksof flashmemory in a16-bit system.Maximumloadcurrentis120mA.Efficiencyandstandbycurrents areimportant.

<!-- image -->

## Overvoltage Considerations

Check your designs for spikes and overshoot because Vpp transientsexceeding 13V can destroy flash EEPROMs.Threeconditions arelikelytocauseaccidental overvoltage:

- ·Start-upovershoot
- ·Load-transient overshoot
- ·Excessiveinductancein the output trace

In a switch-mode power supply (SMPS), start-up overshoot isrelated to thecompensationfor loopstability. Excessive compensation can result in large overshoot onpower-up,sodesigns with slow,ultra-stablefeedbackloopstend toexhibit overshoot.Often,implementing the soft-startfunctionincluded insomeSMPSICs can reduce this problem,improve overshoot,and reduce supply current transients on power-up. Check theVppwaveformforpower-upovershootusinga storage oscilloscope (Figure 13).

Flash devices are not sensitive to the sequence in which the+12VVpp and+5VVcc supply are first applied, s0 power-supplysequencingis notimportant.Butwhennot in use,Vppshould belessthan6.5Vtoprevent accidental erasures or undesired programming.

## MAX734 Evaluation Kit

Figure13.Boost-RegulatorStart-UpWaveforms.Theoutput voltageofaproperlycompensatedSMPSwillnotovershoot whenstartingup.Thisphotoshowsa5V-to-12Vregulator capableofi20mAstartingupinlessthan2mswithnoovershoot.

<!-- image -->

Figure 14.Output Stability vs. Input Swing of 2V (4V to6V)

<!-- image -->

Load-transient overshoot in a SMPS or linear regulator is also related to loop compensation. This overshoot is particularly important in flash memory applications, because the rapid change in Ipp following an erase command(0tofullloadwith tr&lt;20ns)hits theregulatorwith aheavytransient.Poorlycompensateddesignscanexhibit overshoot measured in volts instead of millivolts, as some commercialpower-supplyproductsdemonstrate.Checkfor problems in the load-transient response using a dummy load and load-pulsing transistor switch (Figure 15).

Figure15.Well-BehavedLoad-TransientResponse.AwellcompensatedSMPSexhibitsadampedandbenignoutputvoltageresponsewhenhitwithasharploadcurrentstep.

<!-- image -->

ExcessiveinductanceinPCboard tracescanalsocause anovervoltageproblem,inwhichIpp'srapid△l/△tcauses a corresponding△V/△tatVpp.Theresult isdestructive overvoltage and ringing. Hash chokes (inductors) can have a similar effect, so the common practice of filtering SMPS switching noise by placing these chokes in series with the 12V output is a bad idea.Filter noise withresistive andcapacitiveelementsonly.Tocheckforringing,monitor VpP and trigger the oscilloscope with the erase command.

## Noise, Ripple, and EMI

The Vpp input of a flash EEPROM is reasonably noise tolerant interms of inadvertant erasure and faulty programming. The maximum ripple recommended by manufacturers (typically 20omV) is specified more as a safety marginfor overvoltage than as a noise margin.

Twomaincomponentscharacterize theoutputvoltage noise for most switching power supplies: fundamental ripple and high-frequency switching noise. Ripple is produced by the inductor or transformer, flowing through theequivalentseriesresistance(ESR)intheoutputfilter capacitor. In flash Vpp supplies, the resulting noise is best minimized by the brute-force technique of specifying low-ESR capacitors.

<!-- image -->

High-frequency components appear as sharp spikes at the switching transitions,and are caused by phenomena suchasseries inductancein thefiltercapacitor,diode switching transients,HFground currents,andradiated EM1 picked up by the scope probe's ground lead. You can cure most of these HF noise problems by practicing good PC-board layout, by connecting extra ceramic capacitors inparallel toreducethefiltercapacitorinductance,and by shortening the scope probe's ground lead to reduce thephantomnoiseduetoEMlpickup.AnextraRCfilter consistingofaseriesresistorof1Qorless(highervalues causeloadregulationproblems)anda0.1μFceramic capacitortogroundbetweenthepowersupplyand the flash EEPROM (Figures 4 and 7) usually tame even the worstHFswitching noise.

## Input Voltage Considerations

Afterloadcurrent,inputvoltageisthemainvariablewhen applying DC-DC converters to flash memories. Four major applications may be distinguished according to input voltage:

- ·5V only
- ·Unregulated DC input
- ●12V ±10% input

## 5V-only Applications

- ●Batteries

Manymicrocontrollersystemsincludeonlyasingle5V voltage to 12v. Because all flash memories currently supply, so to add flash capability you must boost this require 5V ±10% in addition to the 12V Vpp supply, the applicability of 5V-to-12V DC-DC converters is nearly universal(Figure 16).Thiscircuit is the same as the MAX734 EV kit circuit (Figure 4). This circuit features fixed-frequency, 17okHz operation that allows the use of small inductors and filter components.Combining this advantage with the space-saving SolC packaging and inductoryieldsacomplete-circuitfootprintjustover1/2 square inch.

The MAX734 DC-DC regulator IC used in this circuit containsa current-modeSMPScontrollerand2ApowerMOSFET. The regulator is digitally controlled via its SHDN pin. When low,SHDN disables the device and reduces the IC supply current to 6uA.In this inactive state, the series-DC connectionof inductorandrectifierplacesVppatthelevel ofVinminustheforwarddropof therectifierdiode.

Because this low levelof Vpp (approximately 4.7V) cannot program a flash memorydevice,there isnoneed for an extraswitchtransistor thatdisconnectstheoutputcompletely. When SHDN goes high, the internal pulse-width

<!-- image -->

## MAX734 Evaluation Kit

Figure16.MAX734Universal5V-to-12VSolution.170kHzfixedfrequencyoperationkeepscomponentsizessmall inthisbasic boostregulatorcircuit.

<!-- image -->

Figure17.MAX662Charge-PumpDC-DC(5V-to-12V at 30mA).Thischargepumpdoesthe5V-to-12Vconversiontask withoutinductorsortransformers.

<!-- image -->

modulator begins switching and drives Vpp to 12V. Efficiency is greater than 85% over most of the load range. For 60mA or 30mA applications, efficiency can be increased by a few percent (up to 90%) by increasing the inductor value to 33uH or 47uH.

In most cases you can turn Vpp off and on with a logic signal applied to SHDN. This method is convenient and simple,andreduces thecircuit supplycurrent toabout 100uA, which is the current required by the internal resistorfeedbackdividerthatsetstheoutputvoltage.For examples of other shutdown methods, see the batterypowered circuits thatfollow.

## MAX734 Evaluation Kit

Figure18.SwitchedLinearRegulatorSupply.Alinearregulator puts higher thanVpp.

<!-- image -->

For people who absolutely hate inductors and all things magnetic，the MAx662capacitor-based charge pump provides an excellent alternative to theSMPS approach. The 5V-to-12V charge-pump converter of Figure 17, for example, generates a clean, well-regulated Vpp supply that delivers 30mA.

The resulting 12V output is regulated to ±5% at 30mA, guaranteed over the commercial temperature range.

The MAx662's input supply range is 4.75V to 5V. Quiescent supply current is 320uA (70uA in logic controlled shutdown).

The circuit of Figure 18 offers a good mix of features for applicationsinwhichthemaximumunregulatedDCvoltage is 16.5V or less. The linear regulator IC has a built-in shutdown function, comes in a small 8-lead SOlC package,andallowsVINtosagwithin100mVof12Vatfulload duetoitslow-dropoutcapability.Thismicropowercircuit also provides post-regulation for multi-output power supplies (see the buck regulator with flyback winding in Figure 19).

## Operation From 12V ±10% Input

Often encountered is the need to tighten the output tolerance of a supply from, say, ±10% (commonly found in the power supplies for desktop PCs) to ±5%. Some engineers,unfortunately,passthistoleranceburdenon to theircustomersbyignoring the±5%restrictions on Vpp.Onemanufacturer,forexample,simplytapsthe PC's bus directly to obtain power for its add-on flash memorysolid-statediscdrivecard.Butifyoudigfar enough into the specs for thecard,you will find a disclaimer stating that one must provide ±2.5% tolerance supplies.

The spec is ±2.5% instead of ±5% to accommodate highIR drops in their high-side Vpp switches. This bad engineering is "best-case" instead of "worstcase" design.Better off, but possibly asking for trouble, is the mass-storage tape-drive manufacturer whoputs alow-dropoutlinearregulator onthe+12V bus.AtleasthisEEPROMswon'tblowupwhenthe117V AC line surges, but he may suffer slow programming and outrightprogrammingfailures.Suchfaultsareparticularly likely in flash chips that have undergone manywrite/erase cycles, because the gate-tunneling in these devices has an inherent wear-outmechanism.Forfirmware update applications, thelow-dropout regulator is actually a decentcompromisebetweencostandreliability.sinceit will almost certainly see only one or two reprogrammings overthelifetimeof theproduct.

It's possible to make a 12V-to-12V converter for tightening the ±10%tolerance on a 12V supply,but a 5V-to-12V step-up approach is more practical. The 12V-to-12V converter must both step up and step down, requiring a flyback transformer, a lossy zener inserieswiththerectifier,orsomeothercomplicated scheme. A boost regulator operating from 5V provides a cleaner solution.

## Battery-Powered Circuits

The emerging mass-storage applications for flash memoryhave escalated the demand for 12VVpp supplies.These applications take various forms.A flash memory programmer for portable batteryoperated equipment,forexample，is best powered directlyfromthebattery;deriving12Vfrom the5V system compounds the efficiency losses. Batterypowered flash supplies need a wider input voltage range (to accomodate the decaying battery voltage) thandotheir5V-powered counterparts.Alsoimportant inbattery-poweredsystemsareefficiency,lowquiescent current, and start-up time.

plications for battery-powered computers:

Laptop/notebook computers:

- 6V to 15V input range
- 6 to 10 NiCad cells or a 12V lead-acid battery

Portable data-entry terminals and notebook computers:

- 4V to 9V input range
- 4 or 5 NiCad cells or two lithium cells in series

Palmtop computers:

<!-- image -->

## MAX734 Evaluation Kit

Figure19.BuckRegulatorwithFlybackWinding.Abuckregulatorwithanextrawindingtogenerate+12Vhassuperiorsizeand stabilitycharacteristicswhencomparedtoastandardflybackdesign.PinnumbersrefertoDiPpackage.

<!-- image -->

Often, the best solution in terms of cost and size is to integrate the Vpp supply with the DC-DC converter that generates themain5Vsystempower.Using astandard flybackconverterwithmulti-winding transformerisone 12V SMPS.

The main disadvantage of a standard flyback converter energy storage requirements on the core. When working from high-voltage battery packs that must be stepped isthebulky transformernecessaryfortherelativelyhigh downto5V,abetterapproachistoemployabuck converterthatgeneratesthe12Vsupplythroughanextra flyback winding on the main buck inductor.

## Buck Regulator Provides 5V and 12V

A step-down DC-DC converter can generate both 5V and 12V from a battery voltage of 8V to 16V (Figure 19). The MAx738buckregulatorintegratesmostof thenecessary functions including a P-channel power MOSFET. For higher output power, combine an external MOSFET with a buck-regulator IC such as the MAx741 low-voltage current-modeSMPScontroller.

The transformer-winding polarities of Figure 19 assure thatcurrentflowinthe+12Vsecondaryoccursduring the primary's discharge cycle, a condition that provides 5V plus a diode drop across the primary. This constant excitation of the secondary regardless of the input voltagelevelassuresgoodaccuracyandloadregulationfor the 12V output, provided that a fairly heavy load is maintainedonthe5Voutput.

<!-- image -->

Figure20.BoostRegulatorwithMicropowerShutdownMode. TheSi940oDYhigh-sidePMOSloadswitchdisconnectsthe SMPSIC'sfeedbackresistorsaswellastheload.Pinnumbers refertoDiPpackage.

<!-- image -->

## MAX734 Evaluation Kit

A lightminimum load should alsobemaintained on the12Voutputtoprevent thatoutputfromcreeping up.Note that returning thesecondary winding to5V ratherthantogroundallowsforfewertransformer windings,andalsoreducespeakcurrentsinthe powerMOSFET. The12V output can be switched on andoffwiththeSHDNinputontheMAX667lowdropout linearregulator.

## Boost Regulator With Low-Power Shutdown Mode

Previous circuits(except for the MAx667linear regulator)havenotbeenmicropowerinnature，for theystilldraw100uAormorewheninstandbymode. Tobe trulymicropower,the supplycurrent shouldbe downatthelevelofthebatteryself-leakagecurrent (typically 20μA or so).Boost regulators in general aredifficulttoshutdowncompletelybecauseofthe seriesconnectionofinductorandrectifier,which forces the output toVin-VDioDE.Even if the load is notdrawingcurrent，theregulator'sownfeedback resistorsact asaload.

Figure18 showsaboostregulatorusinganexternal P-channel power MOSFETas a high-sideload switch, whichenables thestandbycurrent tobecut to6uA typ. TheMAX734'sfeedbackinput(VouT)isconnectedto theoutputsideoftheloadswitch，andistherefore disconnectedwhen thecircuitisshutdown.TheMOSFET switch provides an unexpected bonus, in that it can be usedaspart ofanRCfilter toeliminateHFswitching noise.This filterconsists of the onresistanceof the switchand a 0.1uFceramiccapacitor.TheVppcontrol mustbedrivenbyanopen-collectororopen-draingate capableof withstanding 12V.Start-uptime isless than 2ms.

## PCMCIA Memory Card Programmer

InSeptember1991,apreliminarystandardforremovablememorycardswasadoptedbyanassociationof portablecomputerandmemorycardmanufacturers. PersonalComputerMemoryCardInternational Association's (PCMCiA) PC Card release 2.0 sets the VpPpowerrequirementsforflashmemorycardsand othertypessuchasSRAM,DRAM,PROM,EEPROM, andOTP.BecauseregularEPROMsrequireVpplevels of OV and 5V, the Vpp line in a PCMCiA adapter must deliver 0v,5V,and 12Vtoaccomodate all memory types. This multi-voltage function is also useful for embeddedcontrolapplicationsinprogrammingcertain boot-block-eraseflashEEPROMs.

Like the palmtop computer application,the PCMCIA programmer(Figure21)powers theinductordirectly from the battery in order to avoid compounding efficiency lossesthroughtwoconverters.

Discrete N-channel and P-channel MOSFETs perform the output switching inFigure 21.0V/5V/12V switching action requirestwoseriesN-channeldevicesinthe5Vline becauseofthebodydiodebetweensourceanddrainof commercially\_availablediscreteMOSFETs.Withoutthe extra MOSFET, the 12V output would be pulled down to 5Vthroughthebodydiodewhen thecircuit is programmedtothe12Vstate.

## References

Levy,Markus,"Flash Memory Energy Consumption Characteristics,Intel ApplicationNoteMay1991

Intel 1991 MemoryProducts Databook,Intelpublication 210830

PCMCIA PC Card Standard,Release 2.0,September 1991

## MAX734 Evaluation Kit

aPCMCIAadapter.

<!-- image -->

IWIXVW

## MAX734 EV Kit