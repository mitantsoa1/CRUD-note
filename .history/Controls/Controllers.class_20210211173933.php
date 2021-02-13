<?php 
	class Controllers{
		
		public static function loadView($page){
			$page = htmlspecialchars(trim($page)) ;
			include("Views/".$page) ;
		}
		public function index(){
			Controllers::loadView("indexView");
		}
		// pour inclure les portions de page
		public static function includeTemplate($template)
		{
			$template = htmlspecialchars(trim($template));
			include "Views/template_parts/" . $template;
		}
		// inclure du JavaScript
		public static function includeJS($fields)
		{
			$script = "";
			for ($i = 0; $i < count($fields) - 1; $i++) {
				$code = htmlspecialchars(trim($fields[$i]));
				$script .= '<script src="Publics/js/' . $code . '.js"></script>' . "\n\t";
			}
			if ($i == count($fields) - 1) {
				$code = htmlspecialchars(trim($fields[count($fields) - 1]));
				$script .= '<script src="Publics/js/' . $code . '.js"></script>' . "\n";
			}
			echo $script;
		}
		// inclure du CSS
		public static function includeCSS($fields)
		{
			$css = "";
			for ($i = 0; $i < count($fields) - 1; $i++) {
				$code = htmlspecialchars(trim($fields[$i]));
				$css .= '<link rel="stylesheet" href="Publics/css/' . $code . '.css">' . "\n\t";
			}
			if ($i == count($fields) - 1) {
				$code = htmlspecialchars(trim($fields[count($fields) - 1]));
				$css .= '<link rel="stylesheet" href="Publics/css/' . $code . '.css">' . "\n";
			}
			echo $css;
		}

		public function note(){
			Controllers::loadView("note.php");
		} 
	}

 ?>

 